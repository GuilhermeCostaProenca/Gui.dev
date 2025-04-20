import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="sobre"
      className="min-h-screen w-full flex items-center justify-center px-6 py-20 bg-black text-white"
    >
      <div className="max-w-3xl text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Hi There! 👋
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-white/80 leading-relaxed"
        >
          Eu sou o Guilherme, um desenvolvedor apaixonado por criar experiências
          digitais envolventes. Acredito que cada projeto deve equilibrar
          estética, performance e propósito.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {["React", "Tailwind", "Framer Motion", "Git", "Vite"].map((skill) => (
            <span
              key={skill}
              className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 px-4 py-2 text-sm rounded-full font-medium hover:bg-cyan-500/20 transition"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
        >
          <a
            href="#contato"
            className="px-6 py-3 bg-white text-black rounded-full text-sm font-semibold tracking-wide hover:bg-gray-200 transition"
          >
            Vamos conversar
          </a>
          <a
            href="#blog"
            className="px-6 py-3 border border-white/20 rounded-full text-sm text-white hover:bg-white hover:text-black transition"
          >
            Ver blog
          </a>
        </motion.div>
      </div>
    </section>
  );
}
