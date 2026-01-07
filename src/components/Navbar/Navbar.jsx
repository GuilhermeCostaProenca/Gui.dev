import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <>

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
