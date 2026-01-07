import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contato" className="w-full bg-black px-6 pb-10 pt-20 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold">Connect with me</h2>
            <p className="mt-2 text-sm text-white/60">
              Conte um pouco sobre seu projeto para criarmos algo único.
            </p>
            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Nome"
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 placeholder:text-white/40"
                />
                <input
                  type="text"
                  placeholder="Sobrenome"
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 placeholder:text-white/40"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 placeholder:text-white/40"
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 placeholder:text-white/40"
                />
              </div>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                {"Website,Graphics,Video,3D".split(",").map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 px-4 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <textarea
                rows="4"
                placeholder="Como posso ajudar?"
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/80 placeholder:text-white/40"
              />
              <button
                type="submit"
                data-cursor="large"
                className="w-full rounded-full bg-white py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-cyan-100"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="orb" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-center sm:flex-row">
          <p className="text-sm text-white/60">
            © 2025 Guilherme Costa. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/GuilhermeCostaProenca"
              target="_blank"
              rel="noreferrer"
              data-cursor="large"
              className="text-white/70 transition hover:text-cyan-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/guilhermecostaproenca"
              target="_blank"
              rel="noreferrer"
              data-cursor="large"
              className="text-white/70 transition hover:text-cyan-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contato@guilherme.dev"
              data-cursor="large"
              className="text-white/70 transition hover:text-cyan-200"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
