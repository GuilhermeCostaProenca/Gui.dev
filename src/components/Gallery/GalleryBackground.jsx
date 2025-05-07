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

  const opacity1 = useTransform(scrollYProgress, [0.05, 0.15], [0, 0.15]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35], [0, 0.3]);
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.55], [0, 0.45]);

  const x1 = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const baseImageClass =
    "min-w-[200px] max-w-[250px] h-auto rounded-xl object-cover pointer-events-none transition-transform duration-1000 ease-in-out hover:scale-[1.02]";

  const AnimatedRow = ({ x, opacity, brightness }) => (
    <motion.div
      style={{
        x,
        y: useTransform(opacity, [0, 1], [50, 0]),
        opacity,
      }}
      className="flex gap-4"
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Projeto ${i + 1}`}
          className={`${baseImageClass} ${brightness}`}
        />
      ))}
    </motion.div>
  );

  return (
    <div
      ref={targetRef}
      className="absolute inset-0 -z-10 overflow-hidden pt-[6rem] md:pt-[8rem]"
    >
      <div className="flex flex-col gap-10 px-10">
        <AnimatedRow x={x1} opacity={opacity1} brightness="brightness-[20%]" />
        <AnimatedRow x={x2} opacity={opacity2} brightness="brightness-[40%]" />
        <AnimatedRow x={x3} opacity={opacity3} brightness="brightness-[65%]" />
      </div>
    </div>
  );
}