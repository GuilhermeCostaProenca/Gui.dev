import { motion } from "framer-motion";

const projetos = [
  {
 main
    imagem: "https://placehold.co/600x400/000000/00FFFF?text=Sandbox",
    link: "#",
  },
  {
 main
    imagem: "https://placehold.co/600x400/000000/00FFFF?text=Insights",
    link: "#",
  },
  {
main
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full py-24 px-6 bg-black text-white flex items-center justify-center"
    >
      <div className="max-w-6xl w-full text-center space-y-12">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.4em] text-cyan-200/70">
            Featured Websites
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Impress, Engage, and Perform.
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Eu crio experiências digitais com foco em narrativa visual, conversão
            e performance. Esses cards simulam o layout dos projetos em destaque.
          </p>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}

        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projetos.map((projeto, index) => (
            <motion.a
              key={index}
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-white/30 transition"
            >
              <img
                src={projeto.imagem}
                alt={projeto.nome}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="p-4 text-left">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  2025
                </p>
                <h3 className="text-lg font-semibold mt-2">{projeto.nome}</h3>
                <p className="text-sm text-white/60 mt-1">{projeto.descricao}</p>
                <span className="mt-3 inline-flex text-xs uppercase tracking-[0.3em] text-cyan-200/70">
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
