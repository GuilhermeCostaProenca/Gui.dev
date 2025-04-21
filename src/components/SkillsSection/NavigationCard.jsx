export default function NavigationCard() {
    return (
      <div className="relative group w-full h-full bg-[#111] rounded-xl border border-white/10 p-6 overflow-hidden hover:shadow-[0_0_60px_rgba(168,85,247,0.4)] transition-all">
        <h3 className="text-lg font-semibold text-white mb-2">Navigation</h3>
        <p className="text-white/60 text-sm leading-relaxed">
          Visually structure your pages and link to them with a few clicks.
        </p>
  
        {/* SIDEBAR FLUTUANTE */}
        <div className="absolute top-16 right-0 w-[240px] h-full bg-gradient-to-b from-[#1e1e1e] to-black/90 border-l border-white/10 rounded-l-xl shadow-[0_0_40px_rgba(168,85,247,0.4)] z-10 flex flex-col justify-start px-6 py-8 gap-4 backdrop-blur-xl">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-white text-lg font-semibold">Home</h4>
            <button className="text-white text-2xl font-light hover:text-purple-500 transition">&times;</button>
          </div>
          <nav className="flex flex-col gap-2 text-white/80 text-base font-medium">
            <a href="#about" className="hover:text-purple-400 transition">About Me</a>
            <a href="#portfolio" className="hover:text-purple-400 transition">Portfolio</a>
            <a href="#services" className="hover:text-purple-400 transition">Services</a>
            <a href="#blog" className="hover:text-purple-400 transition">Blog</a>
            <a href="#gallery" className="hover:text-purple-400 transition">Gallery</a>
          </nav>
        </div>
  
        {/* EFEITO DE LUZ ROXA FLUIDA */}
        <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none opacity-20">
          <div className="w-full h-full bg-gradient-to-t from-purple-600/20 to-transparent blur-3xl animate-pulse" />
        </div>
      </div>
    );
  }
  