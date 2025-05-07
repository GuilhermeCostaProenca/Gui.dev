import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <div
          className={`w-[90vw] max-w-[1000px] flex items-center justify-between rounded-full border px-6 py-3 transition-all duration-300 
            ${scrolled ? "bg-black/60 border-white/20 backdrop-blur-md shadow-md" : "bg-white/10 border-white/10 backdrop-blur-sm"}`}
        >
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
            {["inicio", "sobre", "servicos", "portfolio", "blog"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="hover:text-white hover:tracking-wider hover:brightness-150 transition-all duration-300"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>

          {/* Let's Connect */}
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05 }}
            className="text-white/70 text-xs uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition hidden md:block"
          >
            Let’s Connect
          </motion.a>
        </div>
      </motion.header>
    </>
  );
}