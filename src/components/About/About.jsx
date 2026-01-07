import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="sobre"
      className="w-full px-6 py-24 bg-black text-white"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Um laboratório que virou portfólio.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/75 leading-relaxed"
          >
            Transformei o experimento em um projeto completo para mostrar domínio
            de UI, motion e performance. O foco é deixar claro o processo e a
            entrega, com identidade forte e execução consistente.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {[
            "React + Vite",
            "Design system próprio",
            "Microinterações",
            "Layouts responsivos",
          ].map((highlight) => (
            <div
              key={highlight}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80"
            >
              {highlight}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
