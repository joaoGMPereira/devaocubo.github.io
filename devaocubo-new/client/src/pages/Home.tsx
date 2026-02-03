import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import YouTubeSection from "@/components/YouTubeSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <YouTubeSection />
        <ProjectsSection />
        
        {/* Discret Portfolio Link at the bottom */}
        <section className="py-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-white/30 text-sm mb-4 uppercase tracking-widest">Quer saber mais sobre minha carreira?</p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <Briefcase size={18} />
              <span>Ver Portfólio Profissional</span>
            </Link>
          </motion.div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
