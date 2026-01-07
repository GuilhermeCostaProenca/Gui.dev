import { Github, Linkedin, Mail } from "lucide-react";

const chips = [
  { id: "website", label: "Website" },
  { id: "graficos", label: "Gráficos" },
  { id: "video", label: "Vídeo" },
  { id: "3d", label: "3D" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = `${formData.get("firstName")} ${formData.get("lastName")}`.trim();
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const selectedServices = formData.getAll("services");
    const body = [
      `Nome: ${name}`,
      `Email: ${email}`,
      `Telefone: ${phone}`,
      selectedServices.length
        ? `Serviços: ${selectedServices.join(", ")}`
        : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:contato@guilherme.dev?subject=${encodeURIComponent(
      "Projeto - Guilherme.Dev"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <footer id="contato" className="w-full bg-black px-6 pb-10 pt-20 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 lg:pr-72">
            <h2 className="text-2xl font-semibold">Conecte-se comigo</h2>
            <p className="mt-2 text-sm text-white/60">
              Conte um pouco sobre seu projeto para criarmos algo único.
            </p>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label
                    className="text-xs uppercase tracking-[0.3em] text-white/60"
                    htmlFor="firstName"
                  >
                    Nome *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="Seu nome"
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/80 placeholder:text-white/40 focus:border-cyan-200 focus:outline-none focus:ring-1 focus:ring-cyan-200"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    className="text-xs uppercase tracking-[0.3em] text-white/60"
                    htmlFor="lastName"
                  >
                    Sobrenome
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Seu sobrenome"
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/80 placeholder:text-white/40 focus:border-cyan-200 focus:outline-none focus:ring-1 focus:ring-cyan-200"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label
                    className="text-xs uppercase tracking-[0.3em] text-white/60"
                    htmlFor="email"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Seu email"
                    required
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/80 placeholder:text-white/40 focus:border-cyan-200 focus:outline-none focus:ring-1 focus:ring-cyan-200"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    className="text-xs uppercase tracking-[0.3em] text-white/60"
                    htmlFor="phone"
                  >
                    Telefone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Seu telefone"
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/80 placeholder:text-white/40 focus:border-cyan-200 focus:outline-none focus:ring-1 focus:ring-cyan-200"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Seu requisito
                </p>
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                  {chips.map((item) => (
                    <div key={item.id}>
                      <input
                        id={`service-${item.id}`}
                        type="checkbox"
                        name="services"
                        value={item.label}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={`service-${item.id}`}
                        className="cursor-pointer rounded-full border border-white/20 px-4 py-2 transition peer-checked:border-cyan-200 peer-checked:bg-cyan-200/20 peer-checked:text-cyan-100"
                      >
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-1">
                <label
                  className="text-xs uppercase tracking-[0.3em] text-white/60"
                  htmlFor="message"
                >
                  Como posso ajudar?
                </label>
                <textarea
                  rows="4"
                  id="message"
                  name="message"
                  placeholder="Conte detalhes do projeto"
                  required
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/80 placeholder:text-white/40 focus:border-cyan-200 focus:outline-none focus:ring-1 focus:ring-cyan-200"
                />
              </div>
              <button
                type="submit"
                data-cursor="large"
                className="w-full rounded-full bg-cyan-200 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-cyan-100 hover:shadow-md hover:shadow-cyan-500/20"
              >
                Enviar
              </button>
            </form>
          </div>
          <div
            className="orb pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 lg:block"
            style={{ "--orb-size": "360px" }}
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-center sm:flex-row">
          <p className="text-sm text-white/60">
            © {currentYear} Guilherme Costa. Todos os direitos reservados.
          </p>
          <p className="text-sm text-white/60">Contato: contato@guilherme.dev</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/GuilhermeCostaProenca"
              target="_blank"
              rel="noreferrer"
              data-cursor="large"
              className="text-white/70 transition hover:text-cyan-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/guilhermecostaproenca"
              target="_blank"
              rel="noreferrer"
              data-cursor="large"
              className="text-white/70 transition hover:text-cyan-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:contato@guilherme.dev"
              data-cursor="large"
              className="text-white/70 transition hover:text-cyan-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
