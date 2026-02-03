/*
 * DESIGN: Neon Cyber Gradient - Navigation
 * - Blue/Purple/Magenta gradient accents
 * - Floating glass navbar with blur effect
 * - Smooth transitions
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// User's YouTube profile icon
const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663330671572/aNqpkkfoXNhqrAXP.png";

interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

const navItems: NavItem[] = [
  { label: "YouTube", href: "/#youtube", icon: "📺" },
  { label: "Portfólio", href: "/portfolio", icon: "💼" },
  { label: "Contato", href: "/#contato", icon: "👥" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0f172a]/80 backdrop-blur-xl border-b border-purple-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src={LOGO_URL}
                alt="Dev ao Cubo"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full transition-transform duration-300 group-hover:scale-110 ring-2 ring-purple-500/30"
              />
              <span className="font-display font-bold text-lg md:text-xl text-white group-hover:text-purple-400 transition-colors">
                DEV<span className="gradient-text">AO</span>CUBO
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location === item.href
                      ? "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
              
              {/* Language Toggle */}
              <a
                href="https://www.devaocubo.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-3 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                🇺🇸 EN
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-[#0f172a]/90 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute top-16 left-0 right-0 p-4">
              <div className="glass-card p-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      location === item.href
                        ? "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-purple-300"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
                <a
                  href="https://www.devaocubo.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 rounded-lg text-base font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  🇺🇸 English Version
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
