"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  User, 
  Layers, 
  Briefcase, 
  MessageSquare,
  Moon,
  Sun
} from "lucide-react";
import { useTheme } from "./theme-provider";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "philosophy", label: "About", icon: User },
  { id: "stack", label: "Stack", icon: Layers },
  { id: "projects", label: "Project", icon: Briefcase },
  { id: "contact", label: "Contact", icon: MessageSquare },
];

export default function NavDock() {
  const [activeTab, setActiveTab] = useState("home");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // The mounted flag intentionally gates client-only theme labels.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveTab(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* ── MOBILE ONLY: FLOATING THEME TOGGLE (Left) ── */}
      <div className="md:hidden fixed bottom-24 left-6 z-[100]">
        <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 glass-panel rounded-2xl border border-glass-border flex items-center justify-center text-primary shadow-glass backdrop-blur-2xl"
        >
          {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
        </motion.button>
      </div>

      {/* ── MAIN NAV DOCK ── */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-fit max-w-[95vw]">
        <motion.nav 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass-panel p-1.5 rounded-full border border-glass-border flex items-center gap-1 shadow-glass backdrop-blur-3xl"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            const isHovered = hoveredTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={() => setHoveredTab(item.id)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`relative flex items-center px-3 md:px-4 py-2 md:py-2.5 rounded-full transition-all duration-500 ${
                  isActive ? "text-primary" : "text-muted hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-2 md:gap-3 relative z-10">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={isActive ? 2.5 : 2} />
                  
                  <AnimatePresence initial={false}>
                    {(isActive || isHovered) && (
                      <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] whitespace-nowrap overflow-hidden"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="active-nav-bg"
                    className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20 shadow-[0_0_15px_rgba(37,99,235,0.1)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            );
          })}

          <div className="w-[1px] h-6 bg-glass-border mx-1 md:mx-2 opacity-50" />

          {/* Theme Toggle (Desktop Only Integrated) */}
          <button
            onClick={toggleTheme}
            onMouseEnter={() => setHoveredTab("theme")}
            onMouseLeave={() => setHoveredTab(null)}
            className="hidden md:flex relative items-center px-4 py-2.5 rounded-full text-muted hover:text-foreground transition-all duration-500 group"
          >
            <div className="flex items-center gap-3 relative z-10">
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
              </motion.div>

              <AnimatePresence initial={false}>
                {hoveredTab === "theme" && (
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap overflow-hidden"
                  >
                    {theme === "dark" ? "Dark" : "Light"}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </button>
        </motion.nav>
      </div>
    </>
  );
}
