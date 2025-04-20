import { motion } from "framer-motion";
import { Code2, Paintbrush, Rocket } from "lucide-react";

const services = [
  {
    title: "Desenvolvimento Web",
    description: "Criação de sites rápidos, responsivos e com visual moderno.",
    icon: <Code2 size={36} />,
  },
  {
    title: "Design UI/UX",
    description: "Interfaces intuitivas que valorizam a experiência do usuário.",
    icon: <Paintbrush size={36} />,
  },
  {
    title: "Lançamento Estratégico",
    description: "Performance, SEO e otimização para escalar sua presença online.",
    icon: <Rocket size={36} />,
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="min-h-screen w-full flex items-center justify-center px-6 py-20 bg-black text-white"
    >
      <div className="max-w-6xl w-full text-center space-y-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Serviços
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-cyan-400/40 hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div className="text-cyan-300 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
