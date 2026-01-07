import { motion } from "framer-motion";

const designLines = [
  "Website Design",
  "Graphic Design",
  "Video Production",
  "3D Modeling",
  "All Designs",
];

export default function Designs() {
  return (
    <section id="designs" className="relative w-full bg-black px-6 py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.5em] text-white/50"
        >
          Designs em destaque
        </motion.span>
        <div className="w-full space-y-6">
          {designLines.map((line, index) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="font-display text-[clamp(2.6rem,8vw,6.4rem)] uppercase tracking-[0.08em] text-white">
                {line}
              </span>
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[clamp(3.2rem,9vw,7.2rem)] uppercase tracking-[0.1em] text-white/10">
                {line}
              </span>
            </motion.div>
          ))}
        </div>
        <motion.a
          href="#portfolio"
          data-cursor="large"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.4em] text-cyan-200/80 transition hover:text-cyan-100"
        >
          Ver designs →
        </motion.a>
      </div>
    </section>
  );
}
