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
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const baseImageClass =
    "w-[400px] h-[260px] rounded-xl object-cover transition-transform duration-500 hover:scale-105 hover:rotate-1";

  return (
    <div
      ref={targetRef}
      className="absolute inset-0 -z-10 overflow-hidden pt-[30rem]"
    >
      <div className="flex flex-col gap-10 px-10">
        <motion.div
          style={{ x: x1 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex gap-4"
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`project ${i + 1}`}
              className={baseImageClass}
            />
          ))}
        </motion.div>

        <motion.div
          style={{ x: x2 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.4, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="flex gap-4"
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`project ${i + 1}`}
              className={baseImageClass}
            />
          ))}
        </motion.div>

        <motion.div
          style={{ x: x3 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="flex gap-4"
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`project ${i + 1}`}
              className={baseImageClass}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
