import { motion } from "framer-motion";
import {
  Code2, ShieldCheck, BarChart2, Zap,
  PenTool, UserCheck, Brain, Cpu,
  LayoutTemplate, ShoppingCart, Smartphone,
} from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

const services = [
  {
    title: "Desenvolvimento Web",
    color: "hover:shadow-[0_0_40px_#06b6d4]/40 hover:border-cyan-500",
    items: [
      { icon: <LayoutTemplate size={16} />, text: "Sites Institucionais" },
      { icon: <ShoppingCart size={16} />, text: "Lojas Virtuais" },
      { icon: <Code2 size={16} />, text: "Landing Pages" },
      { icon: <Smartphone size={16} />, text: "Responsividade" },
    ],
  },
  {
    title: "UI/UX Design",
    color: "hover:shadow-[0_0_40px_#ec4899]/40 hover:border-pink-500",
    items: [
      { icon: <PenTool size={16} />, text: "Design de Interfaces" },
      { icon: <UserCheck size={16} />, text: "Experiência do Usuário" },
      { icon: <ShieldCheck size={16} />, text: "Acessibilidade" },
      { icon: <Zap size={16} />, text: "Prototipagem" },
    ],
  },
  {
    title: "Automação Inteligente",
    color: "hover:shadow-[0_0_40px_#fb923c]/40 hover:border-orange-400",
    items: [
      { icon: <Cpu size={16} />, text: "Integrações com APIs" },
      { icon: <Brain size={16} />, text: "IA aplicada" },
      { icon: <Zap size={16} />, text: "Automação de Processos" },
      { icon: <ShieldCheck size={16} />, text: "Segurança e LGPD" },
    ],
  },
  {
    title: "Projetos Estratégicos",
    color: "hover:shadow-[0_0_40px_#84cc16]/40 hover:border-lime-400",
    items: [
      { icon: <BarChart2 size={16} />, text: "Dashboards e Dados" },
      { icon: <Code2 size={16} />, text: "Soluções Sob Medida" },
      { icon: <LayoutTemplate size={16} />, text: "MVPs e Prototipagens" },
      { icon: <Cpu size={16} />, text: "Consultoria Técnica" },
    ],
  },
];

function Ball() {
  const meshRef = useRef();

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        color="#1f1f1f"
        metalness={0.8}
        roughness={0.2}
        envMapIntensity={1.5}
      />
    </mesh>
  );
}

function FormComponent() {
  return (
    <form className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-8 rounded-2xl w-full shadow-xl">
      <h3 className="text-2xl font-bold mb-6 text-white">Fale comigo</h3>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Nome" className="bg-zinc-800 p-3 rounded text-sm text-white/90 placeholder:text-white/30" />
        <input type="text" placeholder="Sobrenome" className="bg-zinc-800 p-3 rounded text-sm text-white/90 placeholder:text-white/30" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <input type="email" placeholder="Email" className="bg-zinc-800 p-3 rounded text-sm text-white/90 placeholder:text-white/30" />
        <input type="tel" placeholder="Telefone" className="bg-zinc-800 p-3 rounded text-sm text-white/90 placeholder:text-white/30" />
      </div>
      <div className="mt-6 flex gap-2 flex-wrap">
        {['Website', 'UI/UX', 'Automação', 'Consultoria'].map((tag, i) => (
          <button key={i} type="button" className="border border-white/10 px-4 py-2 rounded-full text-xs text-white/60 hover:text-white hover:border-white/40">
            {tag}
          </button>
        ))}
      </div>
      <textarea
        placeholder="Como posso te ajudar?"
        className="bg-zinc-800 p-4 mt-6 rounded text-sm text-white/90 placeholder:text-white/30 w-full h-32"
      />
      <button type="submit" className="mt-6 w-full py-3 bg-white text-black rounded-lg font-bold text-sm hover:bg-gray-200 transition">
        Enviar
      </button>
    </form>
  );
}

function InteractiveBall() {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden h-[420px] bg-gradient-to-br from-zinc-900 to-black">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 3, 3]} intensity={2} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
        <Ball />
      </Canvas>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-black text-white pt-28 pb-24 px-4 overflow-hidden">
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 z-0 pointer-events-none">
        <h1 className="text-[420px] font-extrabold text-white/5 tracking-tight leading-none select-none">
          SERVICES
        </h1>
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-32">
        {services.map((category, idx) => (
          <div
            key={idx}
            className={`rounded-2xl border border-white/5 ${category.color} bg-black p-8 transition-all duration-300 min-h-[320px]`}
          >
            <h3 className="font-semibold text-white text-lg mb-5">
              {category.title}
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {category.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="opacity-70">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-32 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <FormComponent />
        <InteractiveBall />
      </div>

      <div className="mt-24 text-center group relative z-10">
        <h4 className="text-sm uppercase text-white font-semibold tracking-widest group-hover:opacity-0 transition-opacity duration-300">
          Worked With
        </h4>
        <div className="relative overflow-hidden h-20 mt-4">
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex justify-center items-center gap-12 absolute whitespace-nowrap blur-sm group-hover:blur-0 transition-all duration-300"
          >
            {[...Array(8)].map((_, i) => (
              <img
                key={i}
                src={`https://via.placeholder.com/64?text=Logo+${i + 1}`}
                alt={`Logo ${i + 1}`}
                className="w-16 h-16 object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
