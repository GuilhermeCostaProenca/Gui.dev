// src/components/Gallery/Gallery.jsx
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import img6 from "../../assets/images/6.jpg";
import img7 from "../../assets/images/7.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="py-24 overflow-x-auto" ref={ref} id="portfolio">
      <motion.div
        className="flex gap-6 w-max animate-slide"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Projeto ${index + 1}`}
            className="w-[500px] h-auto rounded-xl shadow-lg object-cover"
          />
        ))}
      </motion.div>
    </section>
  );
}
