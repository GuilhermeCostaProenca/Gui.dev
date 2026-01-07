import { motion } from "framer-motion";

const projetos = [
  {
    nome: "Homepage 3D",
    descricao:
      "Composição hero com esfera animada, luzes e tipografia oversized.",
    imagem: "https://placehold.co/600x400/000000/00FFFF?text=Sandbox",
    link: "#",
  },
  {
    nome: "Seções modulares",
    descricao:
      "Cards e blocos escaláveis para reutilizar em múltiplas páginas.",
    imagem: "https://placehold.co/600x400/000000/00FFFF?text=Insights",
    link: "#",
  },
  {
    nome: "Fluxo de contato",
    descricao:
      "CTA claros e integrados para conversão e conexão direta.",
    imagem: "https://placehold.co/600x400/000000/00FFFF?text=Landing",
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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold"
        >
          Projetos do laboratório
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.map((projeto, index) => (
            <motion.a
              key={index}
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative rounded-xl overflow-hidden border border-white/10 hover:shadow-lg transition"
            >
              <img
                src={projeto.imagem}
                alt={projeto.nome}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center px-4">
                <h3 className="text-lg font-semibold mb-2">{projeto.nome}</h3>
                <p className="text-sm text-white/70">{projeto.descricao}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
