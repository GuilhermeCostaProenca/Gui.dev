import { ExternalLink, Globe } from "lucide-react";

const projects = [
  {
    year: "2025",
    title: "Meu Portfólio",
    image: "/images/projects/portfolio-preview.jpg", // Substitua por seu print real
    description: "Site pessoal desenvolvido com React, Tailwind e animações modernas. Totalmente responsivo.",
    status: "Currently Viewing",
    link: "https://guilhermecostaproenca.github.io/Gui.dev",
  },
  {
    year: "2024",
    title: "PetShop Delivery",
    image: "/images/projects/petshop-preview.jpg", // Coloque futuramente
    description: "Sistema de e-commerce com entrega automatizada e integração com iFood.",
    status: "Coming Soon",
    link: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projetos" className="w-full px-6 py-32 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-purple-400 text-sm uppercase mb-2 tracking-widest">
          Featured Projects
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Impress, Engage, and Perform.
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-3xl">
          Aqui estão alguns dos projetos que venho desenvolvendo — combinando tecnologia, design e estratégia.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-2xl border border-white/10 p-4 flex flex-col justify-between hover:scale-[1.015] transition"
            >
              <div>
                <p className="text-white/40 text-sm mb-1">{project.year}</p>
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <div className="w-full h-[160px] bg-neutral-900 rounded-xl overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-white/60 text-sm">{project.description}</p>
              </div>
              <div className="flex justify-between items-center text-sm mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  className="text-purple-400 hover:underline flex items-center gap-1"
                >
                  Live Site <ExternalLink size={14} />
                </a>
                <div className="text-white/40 flex items-center gap-2 text-xs">
                  {project.status}
                  <Globe size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
