import { motion } from "framer-motion";

const services = [
  "WEBSITE DESIGN",
  "GRAPHIC DESIGN",
  "VIDEO PRODUCTION",
  "3D MODELING",
  "ALL DESIGNS",
];

export default function Services() {
  return (
    <section id="servicos" className="w-full px-6 py-24 bg-black text-white">
      <div className="max-w-6xl w-full text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {services.map((item, index) => (
            <div key={item} className="relative">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="display-font text-[clamp(2.5rem,9vw,6rem)] text-white/80"
              >
                {item}
              </motion.h3>
            </div>
          ))}
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index}>[ view models ]</span>
          ))}
        </div>
      </div>
    </section>
  );
}
