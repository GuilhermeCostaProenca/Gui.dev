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
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });

  // Animação das linhas com deslocamento horizontal baseado no scroll
  const x1 = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]); // linha 1 →
  const x2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);  // linha 2 ←
  const x3 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]); // linha 3 →

  return (
    <div ref={targetRef} className="w-full overflow-hidden -z-10 relative">
      <div className="flex flex-col gap-10 px-10 py-20">
        <motion.div style={{ x: x1 }} className="flex gap-6">
          {images.map((img, i) => (
            <img key={i} src={img} alt="project" className="w-[350px] h-[220px] rounded-lg object-cover opacity-20" />
          ))}
        </motion.div>

        <motion.div style={{ x: x2 }} className="flex gap-6">
          {images.map((img, i) => (
            <img key={i} src={img} alt="project" className="w-[350px] h-[220px] rounded-lg object-cover opacity-20" />
          ))}
        </motion.div>

        <motion.div style={{ x: x3 }} className="flex gap-6">
          {images.map((img, i) => (
            <img key={i} src={img} alt="project" className="w-[350px] h-[220px] rounded-lg object-cover opacity-20" />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
