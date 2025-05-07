import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  "DESENVOLVIMENTO WEB",
  "UI/UX DESIGN",
  "AUTOMAÇÃO INTELIGENTE",
  "PROJETOS ESTRATÉGICOS",
  "SITES DE ALTO IMPACTO"
];

export default function ImpactWords() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center bg-black text-white overflow-hidden py-24">
      {/* Texto principal com hover */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="z-10 space-y-1 relative"
      >
        {items.map((text, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative flex items-center justify-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.1 }}
              className={`text-[clamp(2.5rem,8vw,5rem)] font-extrabold tracking-tight leading-[0.9] text-center transition duration-300 ${hoveredIndex === index ? "text-white/30 blur-sm" : "text-white"}`}
            >
              {text}
            </motion.h2>

            {/* View Sites Scroll centralizado, moderado e legível */}
            {hoveredIndex === index && (
              <motion.div
                animate={{ x: ["100%", "-100%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute text-white text-[clamp(0.9rem,2vw,1.2rem)] font-medium tracking-wide whitespace-nowrap z-30"
              >
                {Array(15)
                  .fill("[ VIEW PROJECTS ]")
                  .map((item, idx) => (
                    <span key={idx} className="mx-3">
                      {item}
                    </span>
                  ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
