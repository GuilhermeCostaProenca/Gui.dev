import { MousePointerClick, Lightbulb, RefreshCcw, MoveRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const tools = [
  "framer", "figma", "wix", "wordpress", "shopify",
  "squarespace", "webflow", "hostinger",
];

export default function SkillsAndTools() {
  return (
    <section className="w-full bg-black text-white py-32 px-4" id="skills">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* GRID DE LOGOS */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 justify-center items-center">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-16 bg-[#0f0f0f] rounded-xl hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition"
            >
              <img
                src={`images/tools/${tool}.svg`}
                alt=""
                className="h-8 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* BLOCOS DE TEXTO */}
        <div className="grid md:grid-cols-3 gap-6">
          <CollaborateCard />
          <NavigationCard />
          <GlobalReachCard />
        </div>

        {/* ANIMATION AND EFFECTS */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold tracking-wide">Animation and Effects</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <EffectCard title="Hover" icon={<MousePointerClick size={32} />} type="hover" />
            <EffectCard title="Click" icon={<Lightbulb size={32} />} type="click" />
            <EffectCard title="Loop" icon={<RefreshCcw size={32} />} type="loop" />
            <EffectCard title="Drag" icon={<MoveRight size={32} />} type="drag" />
          </div>
        </div>
      </div>
    </section>
  );
}

function EffectCard({ title, icon, type }) {
  const [clicked, setClicked] = useState(false);
  const controls = useAnimation();

  const handleClick = async () => {
    if (type === "click") {
      setClicked(true);
      await controls.start({ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] });
      setClicked(false);
    }
  };

  const animations = {
    hover: { whileHover: { scale: 1.15 } },
    click: { animate: controls },
    loop: {
      animate: { rotate: 360 },
      transition: { repeat: Infinity, duration: 6, ease: "linear" },
    },
    drag: { drag: true, dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 } },
  };

  return (
    <motion.div
      className="bg-[#111] border border-white/10 rounded-xl p-6 text-center cursor-pointer"
      {...animations[type]}
      onClick={handleClick}
    >
      <div className="text-purple-400 mb-4 flex justify-center">{icon}</div>
      <p className="font-medium">{title}</p>
    </motion.div>
  );
}
