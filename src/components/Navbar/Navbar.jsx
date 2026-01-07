import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6">
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

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex">
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
        className="fixed top-6 left-1/2 z-40 w-[min(92%,78rem)] -translate-x-1/2 rounded-full border border-white/15 bg-black/50 backdrop-blur-md"
      >
        <div className="mx-auto flex items-center justify-between px-6 py-3">
          <span className="flex items-center gap-3 text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-xs font-semibold">
              G
            </span>
            <span className="text-sm font-semibold tracking-wide">Guilherme</span>
          </span>
          <nav className="hidden md:flex gap-6 text-white/70 text-xs uppercase tracking-[0.3em]">
            <a href="#inicio" className="hover:text-white transition">
              Home
            </a>
            <a href="#sobre" className="hover:text-white transition">
              About me
            </a>
            <a href="#servicos" className="hover:text-white transition">
              Services
            </a>
            <a href="#portfolio" className="hover:text-white transition">
              Portfolio
            </a>
          </nav>
          <a
            href="mailto:guilherme@email.com"
            className="hidden sm:inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-white hover:text-white"
          >
            Let&apos;s Connect
          </a>
        </div>
      </motion.header>
    </>
  );
}
