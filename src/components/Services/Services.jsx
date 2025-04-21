import { motion } from "framer-motion";
import { Code, Palette, Rocket } from "lucide-react";

const services = [
  {
    title: "Desenvolvimento Web",
    description: "Criação de sites rápidos, responsivos e com visual moderno.",
    icon: <Code size={40} className="text-cyan-400" />,
  },
  {
    title: "Design UI/UX",
    description: "Interfaces intuitivas que valorizam a experiência do usuário.",
    icon: <Palette size={40} className="text-cyan-400" />,
  },
  {
    title: "Lançamento Estratégico",
    description: "Performance, SEO e otimização para escalar sua presença online.",
    icon: <Rocket size={40} className="text-cyan-400" />,
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="w-full py-32 px-6 md:px-20 max-w-7xl mx-auto text-white"
    >
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-widest text-cyan-400">Services</p>
        <h2 className="text-4xl font-bold mt-2">O que eu ofereço</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm p-8 hover:scale-105 hover:shadow-xl hover:border-cyan-400/20 transition-all duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-white/70 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
