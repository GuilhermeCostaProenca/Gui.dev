import GalleryBackground from "../Gallery/GalleryBackground";

export default function About() {
  return (
    <section
      id="sobre"
      className="relative w-full min-h-screen flex flex-col items-center justify-start text-center px-4 pt-36 pb-60 bg-black overflow-visible"
    >
      {/* Galeria aparecendo por trás e abaixo */}
      <div className="absolute top-[60%] left-0 w-full h-[100vh] -z-10">
        <GalleryBackground />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="text-cyan-400 text-sm tracking-[.25em] uppercase mb-2">About Me</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Hi There!</h2>
        <p className="text-white/80 text-lg leading-relaxed">
          I’m <strong className="text-white">Guilherme Costa Proença</strong>, a passionate developer with expertise in building modern, fluid and high-performance interfaces.
          Since <strong className="text-white">2023</strong>, I’ve been designing systems that combine usability and impact.
          <br /><br />
          I specialize in <span className="text-cyan-400">typography</span>, <span className="text-white font-medium">composition</span>, and <span className="text-yellow-400">color theory</span>,
          always aiming for clean code and creative solutions.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#contato"
            className="border border-white/30 px-5 py-2 rounded-full text-white/70 hover:text-white hover:border-white transition"
          >
            Let's Connect
          </a>
          <a
            href="#blog"
            className="border border-white/30 px-5 py-2 rounded-full text-white/70 hover:text-white hover:border-white transition"
          >
            Blog
          </a>
        </div>
      </div>
    </section>
  );
}
