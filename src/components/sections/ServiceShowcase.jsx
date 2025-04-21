import { motion } from "framer-motion";

const services = ["GRAPHIC DESIGN", "VIDEO PRODUCTION", "3D MODELING", "ALL DESIGNS"];

export default function ServiceShowcase() {
  return (
    <section className="w-full py-32 bg-black text-white overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center gap-0 px-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group h-[80px] sm:h-[100px] w-full flex items-center justify-center overflow-hidden"
          >
            {/* Texto principal */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-[0.7] tracking-tight text-white transition-all duration-700 group-hover:text-white/10 group-hover:scale-75 group-hover:blur-sm z-10"
            >
              {service}
            </motion.h2>

            {/* Carrossel de fundo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                }}
                className="flex min-w-[200%] will-change-transform whitespace-nowrap text-white/20 text-[1.2rem] font-extrabold uppercase tracking-[0.7em]"
              >
                {Array(40)
                  .fill("[ VIEW SITES ]")
                  .map((item, idx) => (
                    <span key={idx} className="mx-10 inline-block">
                      {item}
                    </span>
                  ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
