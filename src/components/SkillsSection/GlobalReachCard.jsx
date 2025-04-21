import { motion } from "framer-motion";

export default function GlobalReachCard() {
  return (
    <motion.div
      className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-6 group hover:shadow-[0_0_60px_rgba(168,85,247,0.4)] transition-all flex flex-col justify-between"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-lg font-semibold text-white mb-2">Global Reach</h3>
      <p className="text-white/60 text-sm leading-relaxed mb-4">
        Design that connects you to the world — everywhere, for everyone.
      </p>

      {/* Vídeo com brilho */}
      <div className="relative rounded-xl overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-36 object-cover rounded-xl brightness-125 saturate-150 shadow-[0_0_40px_rgba(168,85,247,0.4)]"
        >
          <source src="videos/globe-glow.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
        {/* Glow extra por cima */}
        <div className="absolute inset-0 bg-purple-500/10 blur-2xl mix-blend-screen pointer-events-none" />
      </div>
    </motion.div>
  );
}