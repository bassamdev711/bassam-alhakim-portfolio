"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ExternalLink, Zap, Download } from "lucide-react";
import Link from "next/link";

interface Tech {
  name: string;
  role: string;
}

interface Stat {
  label: string;
  value: string;
}

interface Layer {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  accentColor: string; // Tailwind color class like 'blue-500' or hex code
  glowColor: string; // CSS rgb/rgba for ambient lighting, e.g., 'rgba(59, 130, 246, 0.15)'
  problemTitle?: string;
  problemText: string;
  solutionText: string;
  stats: Stat[];
  techStack: Tech[];
  architectureLayers: Layer[];
  githubUrl?: string;
  liveUrl?: string;
  downloadUrl?: string;
  images: {
    hero: string;
    gallery: {
      src: string;
      caption: string;
      icon: React.ReactNode;
    }[];
  };
  customGallery?: React.ReactNode;
  engineeringSummary: string;
  heroStyle?: 'wide' | 'phone';
}

export default function CaseStudyLayout({
  title,
  subtitle,
  tag,
  description,
  accentColor,
  glowColor,
  problemTitle = "The Challenge",
  problemText,
  solutionText,
  stats,
  techStack,
  architectureLayers,
  githubUrl = "#",
  liveUrl,
  downloadUrl,
  images,
  customGallery,
  engineeringSummary,
  heroStyle = 'wide',
}: CaseStudyLayoutProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    document.documentElement.style.setProperty("--mood-blue", glowColor);
    document.documentElement.style.setProperty("--primary", accentColor);
    // Force instant scroll to top on every project page entry
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [glowColor, accentColor]);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden font-sans">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        style={{ scaleX, backgroundColor: accentColor }}
      />

      {/* Floating Back Button - Prominent at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[99]"
      >
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-glass-border bg-glass-surface backdrop-blur-xl text-xs font-black uppercase tracking-widest text-foreground transition-all duration-500 shadow-xl hover:border-primary/50"
          style={{ boxShadow: `0 8px 32px rgba(0,0,0,0.3)` }}
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Projects
        </Link>
      </motion.div>

      {/* Global Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div 
          className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] rounded-full blur-[180px] opacity-20 transition-all duration-1000"
          style={{ backgroundColor: accentColor }}
        />
        <div 
          className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[180px] opacity-10 transition-all duration-1000"
          style={{ backgroundColor: accentColor }}
        />
      </div>

      <div className="relative z-10 p-6 md:p-12 lg:p-20 max-w-[1400px] mx-auto flex flex-col">
        {/* Spacer for floating button */}
        <header className="flex items-center justify-end py-6 mb-16 border-b border-glass-border">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted">Case Study Showcase</span>
        </header>

        {/* 1. HERO SECTION */}
        <section className="relative min-h-[75vh] flex flex-col justify-center pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full glass-panel text-[10px] uppercase tracking-[0.5em] font-black w-fit border"
            style={{ borderColor: `${accentColor}40`, color: accentColor }}
          >
            <Zap size={14} fill="currentColor" /> {tag}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(3rem,8vw,7.5rem)] font-black tracking-tighter leading-[0.85] mb-8 uppercase break-normal pr-2 text-foreground"
            style={{ wordBreak: "normal", overflowWrap: "normal" }}
          >
            {title} <br />
            <span className="text-muted italic opacity-70" style={{ fontStyle: "italic" }}>
              {subtitle}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-xl md:text-2xl text-muted font-medium leading-relaxed tracking-tight mb-12"
          >
            {description}
          </motion.p>

          {/* Hero Screenshot — wide or phone mockup */}
          {heroStyle === 'phone' ? (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center items-center w-full py-8"
            >
              {/* Ambient glow under phone */}
              <div
                className="absolute w-[320px] h-[180px] rounded-full blur-[100px] opacity-30 pointer-events-none"
                style={{ backgroundColor: accentColor, bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}
              />

              {/* Phone outer shell */}
              <div
                className="relative"
                style={{ width: '280px' }}
              >
                {/* Side buttons left */}
                <div className="absolute -left-[5px] top-[90px] w-[5px] h-[36px] rounded-l-full bg-zinc-700" />
                <div className="absolute -left-[5px] top-[140px] w-[5px] h-[60px] rounded-l-full bg-zinc-700" />
                <div className="absolute -left-[5px] top-[215px] w-[5px] h-[60px] rounded-l-full bg-zinc-700" />
                {/* Side button right */}
                <div className="absolute -right-[5px] top-[160px] w-[5px] h-[80px] rounded-r-full bg-zinc-700" />

                {/* Phone body */}
                <div
                  className="relative rounded-[44px] overflow-hidden border-[8px]"
                  style={{
                    borderColor: '#1a1a1a',
                    background: '#0a0a0a',
                    boxShadow: `0 0 0 1px #2a2a2a, 0 40px 120px -20px rgba(0,0,0,0.9), 0 0 60px -10px ${accentColor}50`,
                  }}
                >
                  {/* Inner bezel */}
                  <div className="relative rounded-[36px] overflow-hidden bg-black">
                    {/* Dynamic Island */}
                    <div className="absolute top-[12px] left-1/2 -translate-x-1/2 z-30 w-[100px] h-[30px] rounded-full bg-black border border-zinc-800" />

                    {/* Screen */}
                    <div className="relative aspect-[9/19.5] overflow-hidden">
                      <img
                        src={images.hero}
                        alt={`${title} – Phone Screenshot`}
                        className="w-full h-full object-cover"
                      />
                      {/* Screen gloss overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Home indicator bar */}
                    <div className="flex justify-center items-center bg-black py-3">
                      <div className="w-[100px] h-[4px] rounded-full bg-white/30" />
                    </div>
                  </div>
                </div>

                {/* Reflection shimmer */}
                <div
                  className="absolute inset-0 rounded-[44px] pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)',
                  }}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative w-full rounded-[2.5rem] overflow-hidden border border-glass-border glass-panel group"
            >
              <img
                src={images.hero}
                alt={`${title} Hero`}
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = parent.querySelector('.fallback-placeholder');
                    if (fallback) fallback.classList.remove('hidden');
                  }
                }}
                className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.01]"
              />
              <div className="fallback-placeholder hidden absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-black/80 via-zinc-950 to-black/80">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 opacity-80"
                  style={{ backgroundColor: `${accentColor}15`, border: `2px solid ${accentColor}30` }}
                >
                  <Zap size={36} style={{ color: accentColor }} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-widest text-center text-foreground">{title} Interface Showcase</h3>
                <p className="text-muted text-sm tracking-wider uppercase mt-2">Place screenshot in `{images.hero}`</p>
              </div>
            </motion.div>
          )}
        </section>

        {/* 2. THE CHALLENGE & SOLUTION */}
        <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 border-t border-glass-border">
          <div className="space-y-6">
            <h4 className="font-black tracking-[0.4em] uppercase text-[11px] text-muted">{problemTitle}</h4>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none italic break-normal pr-2 text-foreground" style={{ wordBreak: "normal", overflowWrap: "normal" }}>
              Synchronizing <br />
              <span className="not-italic">Challenges.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed font-medium">
              {problemText}
            </p>
          </div>
          <div className="space-y-6 lg:pt-10">
            <h4 className="font-black tracking-[0.4em] uppercase text-[11px]" style={{ color: accentColor }}>The Solution</h4>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none break-normal pr-2 text-foreground" style={{ wordBreak: "normal", overflowWrap: "normal" }}>
              Resilient <br />
              <span className="text-muted italic">Engineering.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed font-medium">
              {solutionText}
            </p>
          </div>
        </section>

        {/* 3. CORE EXPERIENCE (GALLERY) */}
        <section className="py-24 border-t border-glass-border">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-[1px] w-20" style={{ backgroundColor: accentColor }}></div>
            <h4 className="text-muted font-black tracking-[0.4em] uppercase text-[11px]">System Capabilities & UI</h4>
          </div>

          {customGallery ? (
            customGallery
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.gallery.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-6 rounded-[2.5rem] border-glass-border flex flex-col gap-6 group hover:bg-glass-surface transition-all duration-700"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-glass-border">
                    <img
                      src={img.src}
                      alt={img.caption}
                      onError={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = parent.querySelector('.gallery-fallback');
                          if (fallback) fallback.classList.remove('hidden');
                        }
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="gallery-fallback hidden absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/90 text-center p-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-glass-surface" style={{ color: accentColor }}>
                        {img.icon}
                      </div>
                      <span className="text-xs text-muted tracking-wider uppercase font-bold">{img.caption}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-md font-black uppercase tracking-wide group-hover:text-primary transition-colors duration-300">{img.caption}</h3>
                    <p className="text-[10px] text-muted font-bold uppercase tracking-widest">Interface Screen</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* 4. SYSTEM ARCHITECTURE & ENGINEERING */}
        <section className="py-24 border-t border-glass-border">
          <div className="flex items-center gap-6 mb-20">
            <div className="h-[1px] w-20" style={{ backgroundColor: accentColor }}></div>
            <h4 className="text-muted font-black tracking-[0.4em] uppercase text-[11px]">System Architecture</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architectureLayers.map((layer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-10 rounded-[2.5rem] border-glass-border space-y-6 group hover:bg-glass-surface transition-all duration-700"
              >
                <div 
                  className="p-4 w-fit rounded-2xl bg-glass-surface text-[var(--primary)] transition-all duration-700 group-hover:bg-[var(--primary)] group-hover:text-white"
                >
                  {layer.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight break-normal pr-2 text-foreground" style={{ wordBreak: "normal", overflowWrap: "normal" }}>{layer.title}</h3>
                <p className="text-muted text-sm leading-relaxed font-medium">{layer.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. TECH DECISIONS */}
        <section className="py-24 border-t border-glass-border">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-[1px] w-20" style={{ backgroundColor: accentColor }}></div>
            <h4 className="text-muted font-black tracking-[0.4em] uppercase text-[11px]">Technical Decisions</h4>
          </div>

          <div className="flex flex-wrap gap-4">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="px-8 py-6 rounded-[2rem] glass-panel border-glass-border flex flex-col gap-2 group transition-all duration-500"
                style={{ contentVisibility: 'auto' }}
              >
                <span 
                  className="text-2xl font-black uppercase tracking-tighter text-foreground transition-colors group-hover:text-[var(--primary)]"
                >
                  {tech.name}
                </span>
                <span className="text-[10px] text-muted font-black uppercase tracking-widest">{tech.role}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. IMPACT & OUTCOME */}
        <section className="py-24 border-t border-glass-border">
          {stats && stats.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div className="space-y-8">
                <h4 className="font-black tracking-[0.4em] uppercase text-[11px]" style={{ color: accentColor }}>Final Outcome</h4>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none break-normal pr-2 text-foreground" style={{ wordBreak: "normal", overflowWrap: "normal" }}>
                  Scale <br /> <span className="text-muted italic">& Impact.</span>
                </h2>
                <p className="text-muted text-lg leading-relaxed font-medium max-w-lg">
                  {engineeringSummary}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="p-10 rounded-[3rem] glass-panel border-glass-border flex flex-col justify-between group transition-all duration-700 hover:bg-[var(--primary)]"
                  >
                    <div className="text-muted group-hover:text-white/50 transition-colors uppercase font-black text-[10px] tracking-widest">{stat.label}</div>
                    <div className="text-4xl font-black tracking-tighter text-foreground group-hover:text-white mt-4">{stat.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h4 className="font-black tracking-[0.4em] uppercase text-[11px]" style={{ color: accentColor }}>Final Outcome</h4>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none break-normal text-foreground" style={{ wordBreak: "normal", overflowWrap: "normal" }}>
                Scale <span className="text-muted italic">& Impact.</span>
              </h2>
              <p className="text-muted text-lg md:text-xl leading-relaxed font-medium mx-auto max-w-2xl">
                {engineeringSummary}
              </p>
            </div>
          )}
        </section>

        {/* 7. LINKS & FOOTER */}
        <footer className="py-24 text-center border-t border-glass-border flex flex-col items-center gap-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-black uppercase tracking-widest text-foreground opacity-20 italic">End of Narrative</h2>
            <p className="text-muted text-sm max-w-md mx-auto">Explore source code repository or preview the deployment status.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 flex-wrap justify-center">
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-3 px-10 py-5 rounded-full border border-glass-border glass-panel text-sm font-black uppercase tracking-widest hover:border-foreground transition-all duration-500"
            >
              GitHub Codebase
            </a>
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-3 px-10 py-5 rounded-full text-white text-sm font-black uppercase tracking-widest transition-all duration-700 shadow-lg hover:shadow-2xl"
                style={{ backgroundColor: accentColor }}
              >
                Launch Live Demo <ExternalLink size={16} />
              </a>
            )}
            {downloadUrl && (
              <a
                href={downloadUrl}
                download
                className="group flex items-center justify-center gap-3 px-10 py-5 rounded-full text-white text-sm font-black uppercase tracking-widest transition-all duration-700 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95"
                style={{ backgroundColor: accentColor, boxShadow: `0 0 40px ${accentColor}40` }}
              >
                <Download size={16} className="group-hover:animate-bounce" />
                Download APK
              </a>
            )}
          </div>

          <Link href="/#projects" className="mt-8 px-8 py-4 rounded-full border border-glass-border text-muted hover:text-foreground transition-colors duration-300 font-bold uppercase tracking-wider text-xs">
            Return to Portfolio
          </Link>
        </footer>
      </div>
    </div>
  );
}
