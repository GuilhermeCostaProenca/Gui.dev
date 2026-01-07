import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="sobre"
      className="relative w-full px-6 py-24 bg-black text-white"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-36 rounded-2xl border border-white/10 bg-white/5"
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl rounded-3xl border border-white/15 bg-black/60 p-10 text-center backdrop-blur">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.4em] text-cyan-200/70"
        >
          About me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-4xl md:text-5xl font-semibold"
        >
          Hi There!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-white/70 leading-relaxed"
        >
          Eu sou o Guilherme, DEV e estudante de Sistemas de Informação. Uso
          design e front-end para transformar ideias em experiências digitais com
          ritmo visual, detalhes e acabamento premium.
        </motion.p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/70">
          <a
            href="mailto:guilherme@email.com"
            className="rounded-full border border-white/20 px-5 py-2 hover:border-white transition"
          >
            Let&apos;s Connect
          </a>
          <a
            href="#portfolio"
            className="rounded-full border border-white/20 px-5 py-2 hover:border-white transition"
          >
            Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
