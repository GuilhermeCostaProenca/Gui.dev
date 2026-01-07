import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projetos = [
  {
    nome: "Projeto Aurora",
    descricao: "Landing page premium",
    imagem: "https://placehold.co/600x400/0f172a/38bdf8?text=Projeto+Aurora",
    status: "Em breve",
  },
  {
    nome: "Studio Atlas",
    descricao: "Branding digital",
    imagem: "https://placehold.co/600x400/111827/a855f7?text=Studio+Atlas",
    status: "Em breve",
  },
  {
    nome: "Nova Vitrine",
    descricao: "E-commerce boutique",
    imagem: "https://placehold.co/600x400/111827/9ca3af?text=Nova+Vitrine",
    status: "Em breve",
  },
  {
    nome: "Impacta Tech",
    descricao: "Site institucional",
    imagem: "https://placehold.co/600x400/111827/f97316?text=Impacta+Tech",
    status: "Em breve",
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
            Projetos em destaque
          </span>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Impacto visual que converte.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-white/70 md:text-base">
            Seleção de projetos com foco em presença digital e acabamento visual
            premium. Cada card simula a estrutura do portfólio em destaque.
          </p>
          <a
            href="#contato"
            data-cursor="large"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-cyan-200/70 transition hover:text-cyan-100"
          >
            Vamos criar juntos <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projetos.map((projeto, index) => (
            <motion.div
              key={projeto.nome}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
              viewport={{ once: true }}
              className="card-hover group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-white/30 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <motion.img
                src={projeto.imagem}
                alt={projeto.nome}
                loading="lazy"
                initial={{ y: 14 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="space-y-2 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  2025
                </p>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{projeto.nome}</h3>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 opacity-0 transition group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="text-sm text-white/60">{projeto.descricao}</p>
                <span className="inline-flex text-xs uppercase tracking-[0.3em] text-white/50">
                  {projeto.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
