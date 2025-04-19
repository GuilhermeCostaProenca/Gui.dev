import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="h-screen w-full flex items-center justify-center text-center relative px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[clamp(3rem,15vw,9rem)] font-black tracking-tight leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white"
      >
        PORT
        <span className="bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent">
          F
        </span>
        OLIO
      </motion.h1>
    </section>
  );
}
