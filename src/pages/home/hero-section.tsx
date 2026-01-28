import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export function HeroSection() {
  return (
    <section className="relative py-24 px-0 sm:px-8 text-center overflow-hidden min-h-60 md:min-h-75">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover scale-110"
      >
        <source
          src={"https://res.cloudinary.com/dhlabj0dm/video/upload/v1769189486/office_clip_borpno.mp4"}
          type="video/mp4"
        />
      </video>

      {/* <img
        src={bannerHero}
        alt="Hero Background"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover scale-110"
      /> */}

      <div className="absolute inset-0 bg-black/50" />
      <div className="px-0 sm:px-8 max-w-300 mx-auto py-0 relative z-10 flex flex-col justify-center min-h-50 md:min-h-75">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white min-h-18.75 font-mono">
          <Typewriter
            options={{
              strings: "Software que Impulsa tu Negocio",
              autoStart: true,
              loop: false,
              delay: 75,
            }}
          />
        </div>
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-lg md:text-xl mb-10 opacity-95 leading-relaxed font-display text-white max-w-3xl mx-auto"
        >
          Soluciones tecnológicas innovadoras y escalables, diseñadas para
          optimizar tus procesos y acelerar el crecimiento de tu empresa.
        </motion.p>
        <button className="bg-white hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-all hover:scale-105 mx-auto">
          Solicitar Información
        </button>
      </div>
    </section>
  );
}
