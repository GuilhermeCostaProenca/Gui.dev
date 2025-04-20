import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import img6 from "../../assets/images/6.jpg";
import img7 from "../../assets/images/7.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function GalleryBackground() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const opacity1 = useTransform(scrollYProgress, [0, 0.3], [0, 0.2]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.6], [0, 0.4]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 1], [0, 0.6]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div className="flex flex-col gap-10 px-10 pt-32 pb-40">
        {/* Linha 1 - bem suave */}
        <motion.div style={{ x: x1, opacity: opacity1 }} className="flex gap-6">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`project-${i}`}
              className="w-[350px] h-[200px] rounded-xl object-cover grayscale blur-sm"
            />
          ))}
        </motion.div>

        {/* Linha 2 - média */}
        <motion.div style={{ x: x2, opacity: opacity2 }} className="flex gap-6">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`project-${i}`}
              className="w-[370px] h-[210px] rounded-xl object-cover grayscale-[30%] blur-[1px]"
            />
          ))}
        </motion.div>

        {/* Linha 3 - mais visível */}
        <motion.div style={{ x: x3, opacity: opacity3 }} className="flex gap-6">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`project-${i}`}
              className="w-[400px] h-[230px] rounded-xl object-cover grayscale-[20%] blur-[0.5px]"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
