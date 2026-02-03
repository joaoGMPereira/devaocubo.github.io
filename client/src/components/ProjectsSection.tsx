import { motion } from "framer-motion";
import { Rocket, Apple, Smartphone } from "lucide-react";

const projects = [
  {
    name: "KettleGym",
    description: "Aplicativo de academia onde os usuários podem criar e acompanhar seus treinos e evolução. Focado em performance e simplicidade.",
    link: "https://www.testflight.apple.com/join/ejXdUCCm",
    linkLabel: "TestFlight",
    icon: Rocket,
    tags: ["SwiftUI", "CoreData", "iOS"],
    image: "/favicon.png" 
  }
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4"
          >
            🚀 Projetos Pessoais
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4"
          >
            Meus <span className="gradient-text">Apps</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0 md:gap-8 items-center">
                <div className="p-6 md:p-12 order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <project.icon className="text-purple-400" size={20} md:size={24} />
                    </div>
                    <h3 className="font-display font-bold text-xl md:text-3xl text-white">{project.name}</h3>
                  </div>
                  
                  <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs md:text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-gradient text-white font-semibold transition-all duration-300 w-full sm:w-auto justify-center"
                  >
                    <Apple size={20} />
                    <span>Baixar no {project.linkLabel}</span>
                  </a>
                </div>
                
                <div className="relative h-full min-h-[250px] md:min-h-[300px] bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center p-6 md:p-8 order-1 lg:order-2">
                  {/* Mockup do App */}
                  <div className="relative w-full max-w-[180px] md:max-w-[250px] aspect-[9/19] bg-[#0f172a] rounded-[2rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-[#1e293b] shadow-2xl overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 md:h-6 bg-[#1e293b] rounded-b-xl md:rounded-b-2xl z-20" />
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                    <div className="absolute bottom-6 md:bottom-8 left-0 right-0 text-center px-4">
                      <Smartphone className="mx-auto text-white/20 mb-2" size={24} md:size={32} />
                      <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest">Preview</p>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-purple-500/20 rounded-full blur-3xl -z-10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
