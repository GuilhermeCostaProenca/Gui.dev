import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 py-10 px-6 text-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-between gap-6 text-center sm:flex-row">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Guilherme.Dev — Todos os direitos reservados.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/GuilhermeCostaProenca"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/guilhermecostaproenca"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:guilherme@exemplo.com"
            className="hover:text-cyan-400 transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
