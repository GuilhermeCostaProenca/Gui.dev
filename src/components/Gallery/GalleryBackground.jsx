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

  return (
    <section
      ref={targetRef}
      className="w-full pt-48 px-6 overflow-hidden absolute inset-0 -z-10"
    >
      <div className="flex flex-col gap-10">
        <motion.div
          style={{ x: x1 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.2, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="flex gap-6"
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`project ${i + 1}`}
              className="w-[350px] h-[220px] rounded-lg object-cover"
            />
          ))}
        </motion.div>

        <motion.div
          style={{ x: x2 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.4, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="flex gap-6"
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`project ${i + 1}`}
              className="w-[350px] h-[220px] rounded-lg object-cover"
            />
          ))}
        </motion.div>

        <motion.div
          style={{ x: x3 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="flex gap-6"
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`project ${i + 1}`}
              className="w-[350px] h-[220px] rounded-lg object-cover"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
