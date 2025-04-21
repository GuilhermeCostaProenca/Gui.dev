import { MousePointerClick, Lightbulb, RefreshCcw, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const animations = [
  {
    title: "Hover",
    icon: <MousePointerClick size={32} />,
    effect: "hover"
  },
  {
    title: "Click",
    icon: <Lightbulb size={32} />,
    effect: "click"
  },
  {
    title: "Loop",
    icon: <RefreshCcw size={32} />,
    effect: "loop"
  },
  {
    title: "Drag",
    icon: <MoveRight size={32} />,
    effect: "drag"
  }
];

export default function AnimationEffects() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold tracking-wide">Animation and Effects</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {animations.map((item, index) => (
          <EffectCard key={index} title={item.title} icon={item.icon} effect={item.effect} />
        ))}
      </div>
    </div>
  );
}

function EffectCard({ title, icon, effect }) {
  const motionProps = {
    hover: {
      whileHover: { scale: 1.1 }
    },
    click: {
      whileTap: { rotate: 20, scale: 0.9 }
    },
    loop: {
      animate: { rotate: [0, 360] },
      transition: { duration: 2, repeat: Infinity, ease: "linear" }
    },
    drag: {
      drag: true,
      dragConstraints: { top: 0, bottom: 0, left: 0, right: 0 },
      whileDrag: { scale: 1.2, rotate: 10 }
    }
  };

  return (
    <motion.div
      {...motionProps[effect]}
      className="bg-[#111] border border-white/10 rounded-xl p-6 text-center cursor-pointer hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all"
    >
      <div className="text-purple-400 mb-4 flex justify-center">{icon}</div>
      <p className="font-medium">{title}</p>
    </motion.div>
  );
}
