import { motion } from "framer-motion";

const projetos = [
  {
    nome: "TT Partners",
    descricao: "Agência digital",
    imagem: "https://placehold.co/600x400/0f172a/38bdf8?text=TT+Partners",
    link: "#",
  },
  {
    nome: "TigreTigre",
    descricao: "Restaurante",
    imagem: "https://placehold.co/600x400/111827/a855f7?text=TigreTigre",
    link: "#",
  },
  {
    nome: "Dave | Portfolio",
    descricao: "Profissional",
    imagem: "https://placehold.co/600x400/111827/9ca3af?text=Dave+Portfolio",
    link: "#",
  },
  {
    nome: "Sky Media",
    descricao: "Business",
    imagem: "https://placehold.co/600x400/111827/f97316?text=Sky+Media",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <div className="space-y-4 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-cyan-200/70">
            Featured Websites
          </span>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Impress, Engage, and Perform.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-white/70 md:text-base">
            Seleção de projetos com foco em presença digital e acabamento visual
            premium. Cada card simula a estrutura do portfólio em destaque.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projetos.map((projeto, index) => (
            <motion.a
              key={projeto.nome}
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="large"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-white/30"
            >
              <img
                src={projeto.imagem}
                alt={projeto.nome}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="space-y-2 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  2025
                </p>
                <h3 className="text-lg font-semibold">{projeto.nome}</h3>
                <p className="text-sm text-white/60">{projeto.descricao}</p>
                <span className="inline-flex text-xs uppercase tracking-[0.3em] text-cyan-200/70">
                  Live Site
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
