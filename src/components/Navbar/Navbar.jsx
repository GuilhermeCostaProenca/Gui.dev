import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 right-0 top-6 z-50"
    >
      <div
        className={`mx-auto flex w-[min(92%,1100px)] items-center justify-between rounded-full border border-white/10 px-6 py-3 backdrop-blur transition ${
          isScrolled ? "bg-black/90 shadow-lg shadow-black/30" : "bg-black/80"
        }`}
      >
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
              data-cursor="large"
              className={`transition hover:text-cyan-200 ${
                activeSection === link.href.replace("#", "")
                  ? "text-cyan-200"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="mailto:contato@guilherme.dev"
            data-cursor="large"
            className="hidden items-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-white hover:text-white md:inline-flex"
          >
            Let&apos;s Connect
          </a>
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="https://github.com/GuilhermeCostaProenca"
              target="_blank"
              rel="noreferrer"
              data-cursor="large"
              className="text-white/70 transition hover:text-cyan-200"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/guilhermecostaproenca"
              target="_blank"
              rel="noreferrer"
              data-cursor="large"
              className="text-white/70 transition hover:text-cyan-200"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:contato@guilherme.dev"
              data-cursor="large"
              className="text-white/70 transition hover:text-cyan-200"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            data-cursor="large"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white hover:text-white lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <>
                Fechar
                <X className="h-4 w-4" />
              </>
            ) : (
              <>
                Menu
                <Menu className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-black/95 px-6 text-center backdrop-blur"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              data-cursor="large"
              className="absolute right-6 top-6 rounded-full border border-white/20 p-3 text-white/80 transition hover:border-white hover:text-white"
              aria-label="Fechar menu"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.nav
              className="flex flex-col gap-6 text-xs uppercase tracking-[0.4em] text-white/70"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  data-cursor="large"
                  onClick={() => setIsOpen(false)}
                  className={`transition hover:text-cyan-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-cyan-200"
                      : ""
                  }`}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>
            <a
              href="mailto:contato@guilherme.dev"
              data-cursor="large"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white hover:text-white"
            >
              Vamos conversar
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/GuilhermeCostaProenca"
                target="_blank"
                rel="noreferrer"
                data-cursor="large"
                className="text-white/70 transition hover:text-cyan-200"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/guilhermecostaproenca"
                target="_blank"
                rel="noreferrer"
                data-cursor="large"
                className="text-white/70 transition hover:text-cyan-200"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:contato@guilherme.dev"
                data-cursor="large"
                className="text-white/70 transition hover:text-cyan-200"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
