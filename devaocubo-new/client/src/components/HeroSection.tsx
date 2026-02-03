import { motion } from "framer-motion";
import { Youtube, Rocket, ArrowDown } from "lucide-react";

// User's custom banner as background
const HERO_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663330671572/mNMHngtIioEBwhsJ.png";

// User's custom character illustration (pointing)
const CHARACTER = "/favicon.png";

export default function HeroSection() {
  const scrollToYoutube = () => {
    const element = document.getElementById("youtube");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0">
      {/* Background Image - YouTube Banner */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/60 via-[#1e1b4b]/80 to-[#0f172a]" />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-pink-600/10" />
      </div>

      {/* Floating orbs for depth */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-xs md:text-sm font-medium mb-6"
            >
              📱 Desenvolvedor iOS • +10 anos de experiência
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 leading-tight"
            >
              Olá, eu sou{" "}
              <span className="gradient-text text-glow-purple">João Gabriel</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-white/70 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Criador de conteúdo sobre <span className="text-blue-400">Swift</span>,{" "}
              <span className="text-purple-400">SwiftUI</span> e{" "}
              <span className="text-pink-400">Design Systems</span>. Compartilhando
              conhecimento e ajudando desenvolvedores a evoluir.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://www.youtube.com/@devaocubo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl btn-gradient text-white font-semibold transition-all duration-300"
              >
                <Youtube size={20} />
                <span>Canal no YouTube</span>
              </a>
              
              <button
                onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-purple-500/30 text-white font-semibold hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <Rocket size={20} />
                <span>Ver Projetos</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Character Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-full lg:max-w-sm xl:max-w-md">
              {/* Glow effect behind character */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl rounded-full scale-75" />
              <img
                src={CHARACTER}
                alt="Dev ao Cubo Character"
                className="relative w-full h-full object-contain drop-shadow-2xl rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
        >
          <button
            onClick={scrollToYoutube}
            className="flex flex-col items-center gap-2 text-white/40 hover:text-purple-400 transition-colors"
            aria-label="Scroll to content"
          >
            <span className="text-sm">Explorar</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
