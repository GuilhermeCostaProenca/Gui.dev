import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const glowRef = useRef(null);

  useEffect(() => {
    const element = glowRef.current;
    if (!element) {
      return undefined;
    }

    let currentY = 0;
    let targetY = 0;
    let currentX = 0;
    let targetX = 0;
    let rafId;

    const handleScroll = () => {
      targetY = window.scrollY || 0;
    };

    const handleMove = (event) => {
      const offset = (event.clientX - window.innerWidth / 2) * 0.02;
      targetX = offset;
    };

    const animate = () => {
      currentY += (targetY - currentY) * 0.08;
      currentX += (targetX - currentX) * 0.08;
      element.style.transform = `translate3d(calc(-50% + ${currentX}px), ${
        currentY * 0.15
      }px, 0)`;
      rafId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMove);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMove);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] w-full overflow-hidden pt-32 pb-24 hero-gradient"
    >
      <div className="absolute inset-0 opacity-40">
        <div
          ref={glowRef}
          className="absolute -top-32 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-cyan-500/30 blur-[140px]"
        />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs uppercase tracking-[0.5em] text-cyan-200/80"
        >
          Design em detalhes
        </motion.span>
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-display text-[clamp(3rem,14vw,10rem)] font-bold text-white"
          >
            PORTFOLIO
          </motion.h1>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-display text-[clamp(4rem,16vw,11rem)] text-white/10"
            >
              G
            </motion.span>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl text-sm text-white/70 md:text-base"
        >
          Transformo ideias em experiências digitais marcantes. Aqui você encontra a
          combinação de design, movimento e presença visual que destaca sua marca.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.6 },
            },
          }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#portfolio"
            data-cursor="large"
            className="rounded-full border border-white/20 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-cyan-200/80 hover:text-cyan-200"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Ver projetos
          </motion.a>
          <motion.a
            href="#contato"
            data-cursor="large"
            className="rounded-full bg-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-cyan-100"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Vamos conversar
          </motion.a>
        </motion.div>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="font-signature text-3xl text-lime-300"
        >
          Guilherme
        </motion.span>
        <motion.a
          href="#sobre"
          aria-label="Ir para a próxima seção"
          className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.4em] text-white/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll
          <ChevronDown className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
}
