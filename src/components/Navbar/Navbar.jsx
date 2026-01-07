import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 right-0 top-6 z-50"
    >
      <div className="mx-auto flex w-[min(92%,1100px)] items-center justify-between rounded-full border border-white/10 bg-black/80 px-6 py-3 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-semibold">
            GC
          </div>
          <span className="text-sm font-semibold">Guilherme</span>
        </div>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.3em] text-white/70 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="mailto:contato@guilherme.dev"
            className="hidden items-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-white hover:text-white md:inline-flex"
          >
            Let&apos;s Connect
          </a>
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="https://github.com/GuilhermeCostaProenca"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-cyan-200"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/guilhermecostaproenca"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-cyan-200"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:contato@guilherme.dev"
              className="text-white/70 transition hover:text-cyan-200"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
