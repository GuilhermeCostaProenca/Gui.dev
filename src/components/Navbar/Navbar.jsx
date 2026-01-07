import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6">
        <a
          href="https://github.com/GuilhermeCostaProenca"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="w-5 h-5 text-white hover:text-cyan-400 transition" />
        </a>
        <a
          href="https://linkedin.com/in/guilhermecostaproenca"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin className="w-5 h-5 text-white hover:text-cyan-400 transition" />
        </a>
        <a href="mailto:guilherme@email.com">
          <Mail className="w-5 h-5 text-white hover:text-cyan-400 transition" />
        </a>
        <div className="h-20 w-px bg-white/20 mt-4" />
      </div>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex">
        <a
          href="mailto:guilherme@email.com"
          className="rotate-90 text-sm border border-white/30 px-5 py-1 rounded-full text-white/70 hover:text-white hover:border-white transition"
        >
          contato
        </a>
      </div>

      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-black/40 border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-white font-semibold text-sm tracking-wider uppercase">
            Guilherme.dev
          </span>
          <nav className="hidden md:flex gap-6 text-white/70 text-xs uppercase tracking-[0.3em]">
            <a href="#inicio" className="hover:text-white transition">
              Início
            </a>
            <a href="#sobre" className="hover:text-white transition">
              Sobre
            </a>
            <a href="#servicos" className="hover:text-white transition">
              Laboratório
            </a>
            <a href="#portfolio" className="hover:text-white transition">
              Projetos
            </a>
          </nav>
        </div>
      </motion.header>
    </>
  );
}
