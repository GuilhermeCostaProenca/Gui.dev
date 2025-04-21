import {
  MousePointerClick,
  Lightbulb,
  RefreshCcw,
  MoveRight,
} from "lucide-react";
import { motion } from "framer-motion";

const tools = [
  "framer",
  "figma",
  "wix",
  "wordpress",
  "shopify",
  "squarespace",
  "webflow",
  "hostinger",
];

export default function SkillsAndTools() {
  return (
    <section className="w-full bg-black text-white py-32 px-4" id="skills">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* GRID DE LOGOS */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 justify-center items-center">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-[#111] rounded-xl flex justify-center items-center h-24 transition-all shadow-lg hover:shadow-purple-500/30"
            >
              <img
                src={`images/tools/${tool}.svg`}
                alt={tool}
                className="h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* BLOCOS DE TEXTO */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Collaborate */}
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: -10 }}
            className="bg-[#111111] border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_60px_rgba(168,85,247,0.2)] transition-all relative"
          >
            <h3 className="text-lg font-semibold mb-2">Collaborate</h3>
            <p className="text-white/60 text-sm mb-4 leading-relaxed">
              Designing spaces where ideas meet and collaboration thrives.
            </p>
            <div className="flex gap-2 relative z-10">
              <span className="bg-purple-600/30 px-3 py-1 rounded-full text-sm">Adam</span>
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="bg-purple-600 px-4 py-1 rounded-full text-sm font-medium"
              >
                Guilherme
              </motion.span>
              <span className="bg-purple-600/30 px-3 py-1 rounded-full text-sm">Alex</span>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all">
            <h3 className="text-lg font-semibold mb-2">Navigation</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Visually structure your pages and link to them with a few clicks.
            </p>
          </div>

          {/* Global Reach */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_60px_rgba(168,85,247,0.2)] transition-all">
            <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Design that connects you to the world — everywhere, for everyone.
            </p>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-36 object-cover rounded-xl shadow-xl shadow-purple-500/20"
            >
              <source src="/videos/globe-glow.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* ANIMATION AND EFFECTS */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold tracking-wide">Animation and Effects</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <EffectCard title="Hover" icon={<MousePointerClick size={32} />} animate="scale" />
            <EffectCard title="Click" icon={<Lightbulb size={32} />} animate="glow" />
            <EffectCard title="Loop" icon={<RefreshCcw size={32} />} animate="spin" />
            <EffectCard title="Drag" icon={<MoveRight size={32} />} animate="drag" />
          </div>
        </div>
      </div>
    </section>
  );
}

function EffectCard({ title, icon, animate }) {
  const animations = {
    scale: { whileHover: { scale: 1.2 } },
    glow: { whileTap: { scale: 0.95 } },
    spin: { animate: { rotate: [0, 360] }, transition: { repeat: Infinity, duration: 2 } },
    drag: { drag: true, dragConstraints: { top: -10, bottom: 10, left: -10, right: 10 } },
  };

  return (
    <motion.div
      className="bg-[#111] border border-white/10 rounded-xl p-6 text-center hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all cursor-pointer"
      {...animations[animate]}
    >
      <div className="text-purple-400 mb-4 flex justify-center">{icon}</div>
      <p className="font-medium">{title}</p>
    </motion.div>
  );
}