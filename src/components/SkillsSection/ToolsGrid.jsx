import { motion } from "framer-motion";

const tools = [
  "webflow", "wordpress", "wix", "framer",
  "hostinger", "squarespace", "shopify", "figma",
];

export default function ToolsGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#111111] border border-white/10 rounded-2xl p-6 shadow-[0_0_40px_rgba(255,255,255,0.05)] grid grid-cols-2 gap-4"
    >
      {tools.map((tool, index) => (
        <div
          key={index}
          className="bg-[#0b0b0b] rounded-xl aspect-square flex items-center justify-center transition-all hover:scale-105"
        >
          <img
            src={`images/tools/${tool}.svg`}
            alt={tool}
            className="h-10 md:h-12 object-contain transition-all duration-300"
          />
        </div>
      ))}
    </motion.div>
  );
}
