import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] w-full overflow-hidden pt-32 pb-24 hero-gradient"
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-32 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-cyan-500/30 blur-[140px]" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.5em] text-cyan-200/80"
        >
          Design em detalhes
        </motion.span>
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-display text-[clamp(3rem,14vw,10rem)] font-bold text-white"
          >
            PORTFOLIO
          </motion.h1>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[clamp(4rem,16vw,11rem)] text-white/10">
              D
            </span>
          </div>
        </div>
        <p className="max-w-2xl text-sm text-white/70 md:text-base">
          Transformo ideias em experiências digitais marcantes. Aqui você encontra a
          combinação de design, movimento e presença visual que destaca sua marca.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="rounded-full border border-white/20 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-cyan-200/80 hover:text-cyan-200"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="rounded-full bg-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-cyan-100"
          >
            Vamos conversar
          </a>
        </div>
        <span className="font-signature text-3xl text-lime-300">Guilherme</span>
      </div>
    </section>
  );
}
