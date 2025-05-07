import { motion } from "framer-motion";
import GalleryBackground from "../Gallery/GalleryBackground";

export default function About() {
  return (
    <section
      id="sobre"
      className="relative w-full min-h-[140vh] flex items-center justify-center text-center px-6 pt-28 pb-40 overflow-hidden"
    >
      {/* Galeria de fundo com scroll */}
      <GalleryBackground />

      {/* Texto acima da galeria */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="relative z-10 max-w-3xl lg:max-w-4xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-cyan-400 text-sm tracking-[.25em] uppercase mb-2"
        >
          Sobre Mim
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow"
        >
          Muito Prazer!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white/80 text-lg leading-relaxed drop-shadow"
        >
          Me chamo <strong className="text-white">Guilherme Costa Proença</strong>, sou desenvolvedor apaixonado por criar experiências digitais que unem tecnologia, design e propósito.
          Desde <strong className="text-white">2023</strong>, venho construindo soluções com foco em performance, usabilidade e impacto real no dia a dia das pessoas.
          <br /><br />
          Tenho interesse especial por <span className="text-cyan-400">interfaces fluidas</span>, <span className="text-white font-medium">design funcional</span> e <span className="text-yellow-400">tecnologias modernas</span>.
          Gosto de trabalhar com projetos que exigem criatividade, raciocínio estratégico e atenção aos mínimos detalhes — do código ao visual.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-6 flex justify-center gap-4"
        >
          <a
            href="#contato"
            className="border border-white/30 px-5 py-2 rounded-full text-white/70 hover:text-white hover:border-white hover:scale-105 transform transition duration-300"
          >
            Entrar em Contato
          </a>
          <a
            href="#blog"
            className="border border-white/30 px-5 py-2 rounded-full text-white/70 hover:text-white hover:border-white hover:scale-105 transform transition duration-300"
          >
            Blog
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}