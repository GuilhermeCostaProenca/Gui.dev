import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const featuredWebsites = [
  {
    title: "TT Partners",
    category: "Agência",
    image: "https://placehold.co/640x420/0f172a/38bdf8?text=TT+Partners",
  },
  {
    title: "TigreTigre",
    category: "Restaurante",
    image: "https://placehold.co/640x420/111827/f97316?text=TigreTigre",
  },
  {
    title: "Dave | Portfolio",
    category: "Portfolio",
    image: "https://placehold.co/640x420/1f2937/e5e7eb?text=Dave",
  },
  {
    title: "Sky Media",
    category: "Business",
    image: "https://placehold.co/640x420/0b1120/60a5fa?text=Sky+Media",
  },
];

const quickHighlights = [
  {
    title: "Colabore",
    description:
      "Projetos conduzidos com transparência, sprints curtos e foco em objetivos reais.",
    accent: "#7c3aed",
  },
  {
    title: "Navegação",
    description:
      "Menus e fluxos pensados para guiar o usuário com clareza e fluidez.",
    accent: "#38bdf8",
  },
  {
    title: "Alcance Global",
    description:
      "Design que conversa com públicos diversos e posiciona marcas no mundo.",
    accent: "#f97316",
  },
  {
    title: "Animações & Efeitos",
    description:
      "Microinterações e motion design para elevar a percepção premium.",
    accent: "#22d3ee",
  },
];

const workedWith = [
  "Wix",
  "Framer",
  "Figma",
  "Shopify",
  "Webflow",
  "WordPress",
  "Notion",
];

export default function Highlights() {
  return (
    <section id="destaques" className="w-full bg-black px-6 py-24 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-cyan-200/70">
              Featured Websites
            </span>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Projetos que elevam presença digital.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/60 md:text-base">
              Estudos visuais para marcas que precisam de páginas elegantes, rápidas e
              orientadas à conversão.
            </p>
          </div>
          <a
            href="#portfolio"
            data-cursor="large"
            className="text-xs uppercase tracking-[0.4em] text-white/60 transition hover:text-cyan-200"
          >
            Ver todos →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredWebsites.map((site, index) => (
            <motion.article
              key={site.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img
                src={site.image}
                alt={site.title}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-1 flex-col gap-3 p-5">
                <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                  2025 · {site.category}
                </span>
                <h3 className="text-lg font-semibold">{site.title}</h3>
                <button
                  type="button"
                  data-cursor="large"
                  className="mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cyan-200/80 transition hover:text-cyan-100"
                >
                  Live site <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {quickHighlights.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div
                className="mb-4 h-1 w-16 rounded-full"
                style={{ backgroundColor: item.accent }}
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-white/60">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            Worked with
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {workedWith.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
