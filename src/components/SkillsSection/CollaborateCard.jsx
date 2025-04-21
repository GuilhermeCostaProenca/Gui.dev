import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CollaborateCard() {
  return (
    <div className="relative bg-[#0b0b0b] border border-white/10 rounded-2xl p-6 flex flex-col justify-between group hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all">
      <div>
        <h3 className="text-lg font-semibold mb-2">Collaborate</h3>
        <p className="text-white/60 text-sm leading-relaxed">
          Designing spaces where ideas meet and collaboration thrives.
        </p>
      </div>

      {/* Floating Buttons */}
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 150 }}
        className="relative mt-6 flex justify-center items-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="absolute -left-8 text-purple-500"
        >
          <FaArrowLeft />
        </motion.div>

        <motion.div
          className="bg-purple-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg text-sm z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Devansh
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="absolute -right-8 text-purple-500"
        >
          <FaArrowRight />
        </motion.div>
      </motion.div>

      {/* Mini Names */}
      <div className="flex gap-2 justify-center mt-4">
        <span className="bg-purple-600/30 px-3 py-1 rounded-full text-sm">Adam</span>
        <span className="bg-purple-600/30 px-3 py-1 rounded-full text-sm">Alex</span>
      </div>
    </div>
  );
}
