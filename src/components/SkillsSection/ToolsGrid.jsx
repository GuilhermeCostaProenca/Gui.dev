import { motion } from "framer-motion";

const tools = [
  { name: "webflow", src: "images/tools/webflow.svg" },
  { name: "wordpress", src: "images/tools/wordpress.svg" },
  { name: "wix", src: "images/tools/wix.svg" },
  { name: "framer", src: "images/tools/framer.svg" },
  { name: "hostinger", src: "images/tools/hostinger.svg" },
  { name: "squarespace", src: "images/tools/squarespace.svg" },
  { name: "shopify", src: "images/tools/shopify.svg" },
  { name: "figma", src: "images/tools/figma.svg" },
];

export default function ToolsGrid() {
  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4">
      {tools.map((tool, index) => (
        <motion.div
          key={index}
          className="bg-[#0f0f0f] rounded-xl flex items-center justify-center aspect-square cursor-pointer"
          whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px rgba(168,85,247,0.4)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={tool.src}
            alt={tool.name}
            className="h-8 w-8 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        </motion.div>
      ))}
    </div>
  );
}
