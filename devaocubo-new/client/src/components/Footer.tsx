import { Github, Linkedin, Youtube, Instagram, Mail, MessageCircle } from "lucide-react";

// User's YouTube profile icon
const LOGO_URL = "/favicon.png";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/jcalderita", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Youtube, href: "https://www.youtube.com/@devaocubo", label: "YouTube", color: "hover:text-red-400" },
  { icon: Github, href: "https://github.com/joaoGMPereira", label: "GitHub", color: "hover:text-purple-400" },
  { icon: Instagram, href: "https://www.instagram.com/dev.ao.cubo", label: "Instagram", color: "hover:text-pink-400" },
  { icon: MessageCircle, href: "https://discord.gg/rAqhHfHxhA", label: "Discord", color: "hover:text-indigo-400" },
  { icon: Mail, href: "mailto:gah.mp1@gmail.com", label: "Email", color: "hover:text-cyan-400" },
];

export default function Footer() {
  return (
    <footer id="contato" className="relative py-16 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
      
      {/* Floating orbs */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card p-8 md:p-12">
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <img
              src={LOGO_URL}
              alt="Dev ao Cubo"
              className="w-20 h-20 rounded-full mb-6 ring-2 ring-purple-500/30"
            />
            
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
              Vamos <span className="gradient-text">Conectar</span>?
            </h3>
            
            <p className="text-white/60 max-w-md mb-8">
              Me siga nas redes sociais para mais conteúdo sobre desenvolvimento iOS, Swift e Design Systems.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-purple-500/20 text-white/70 ${link.color} hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300`}
                  aria-label={link.label}
                >
                  <link.icon size={18} className="transition-transform group-hover:scale-110" />
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
            </div>
            
            {/* Copyright */}
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Dev ao Cubo. Criado com React e Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
