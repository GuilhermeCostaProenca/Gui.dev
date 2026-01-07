import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="relative w-full bg-black px-6 py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl px-8 py-10 text-center md:px-14 md:py-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-cyan-200/70"
          >
            Sobre mim
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-3xl font-semibold md:text-4xl"
          >
            Olá!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-4 text-sm text-white/70 md:text-base"
          >
            Sou Guilherme, designer e desenvolvedor focado em{" "}
            <span className="highlight-word">interfaces impactantes</span>. Combino
            <span className="highlight-word"> tipografia</span>,{" "}
            <span className="highlight-word">composição</span> e{" "}
            <span className="highlight-word">cor</span> para entregar experiências
            que elevam a presença da sua marca.
          </motion.p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contato"
              data-cursor="large"
              className="rounded-full border border-white/20 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-cyan-200/80 hover:text-cyan-200"
            >
              Vamos conversar
            </a>
            <a
              href="#portfolio"
              data-cursor="large"
              className="rounded-full bg-white/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:bg-white/20"
            >
              Portfólio
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-white/40">
            {[
              "Figma",
              "Webflow",
              "Framer",
              "React",
              "Node",
              "Adobe",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 px-4 py-2"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
