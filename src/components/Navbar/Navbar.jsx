import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <>
      {/* Ícones sociais laterais */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6">
        {[Github, Linkedin, Mail].map((Icon, i) => (
          <motion.a
            key={i}
            href={
              i === 0
                ? "https://github.com/GuilhermeCostaProenca"
                : i === 1
                ? "https://linkedin.com/in/guilhermecostaproenca"
                : "mailto:guilherme@email.com"
            }
            target="_blank"
            rel="noreferrer"
            initial={{ y: 0 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2 + i, repeat: Infinity }}
          >
            <Icon className="w-6 h-6 text-white hover:text-cyan-400 transition" />
          </motion.a>
        ))}
        <div className="w-px h-20 bg-white/20" />
      </div>

      {/* Navbar flutuante centralizada */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-6 inset-x-0 z-50 flex justify-center"
      >
        <div className="w-[90vw] max-w-[1000px] flex items-center justify-between rounded-full border border-white/10 bg-white/10 backdrop-blur-sm px-6 py-3">
          
          {/* Avatar e nome */}
          <div className="flex items-center gap-3">
            <img
              src="https://avatars.githubusercontent.com/u/120469543?v=4"
              alt="Foto do Guilherme"
              className="w-8 h-8 rounded-full border border-white/20"
            />
            <span className="text-white text-xs tracking-wide">Guilherme.Dev</span>
          </div>

          {/* Links */}
          <nav className="flex gap-6 text-[13px] text-white/80 uppercase tracking-widest">
            <a href="#inicio" className="hover:text-white transition">Início</a>
            <a href="#sobre" className="hover:text-white transition">Sobre</a>
            <a href="#servicos" className="hover:text-white transition">Serviços</a>
            <a href="#portfolio" className="hover:text-white transition">Portfólio</a>
            <a href="#blog" className="hover:text-white transition">Blog</a>
          </nav>

          {/* Let's Connect */}
          <div className="text-white/70 text-xs uppercase tracking-widest hover:text-white transition cursor-pointer hidden md:block">
            Let’s Connect
          </div>
        </div>
      </motion.header>
    </>
  );
}
