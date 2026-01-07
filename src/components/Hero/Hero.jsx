import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden bg-black px-6 pt-32 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.25),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.12),_transparent_40%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.4em] text-cyan-200/80"
          >
            Laboratório finalizado
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[clamp(3rem,10vw,6.5rem)] font-bold tracking-tight leading-[0.95]"
          >
            Guilherme
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-200">
              Costa
            </span>
            Proença
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/75"
          >
            Transformei um site experimental em uma vitrine de design e
            front-end. Aqui você encontra microinterações, tipografia refinada e
            um sistema visual pensado para portfólio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#portfolio"
              className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-white"
            >
              Ver entregas
            </a>
            <a
              href="mailto:guilherme@email.com"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Falar comigo
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex w-full items-center justify-center md:w-auto"
        >
          <div className="orb" />
        </motion.div>
      </div>
    </section>
  );
}
