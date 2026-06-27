"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useMotionValue, useTransform, useInView } from "framer-motion";
import { 
  Mail, 
  Globe, 
  Cpu, 
  Zap,
  Layers,
  Database,
  Terminal,
  ExternalLink,
  ChevronRight,
  ArrowUpRight,
  Download,
  FileText
} from "lucide-react";
import Link from "next/link";

import NavDock from "@/components/nav-dock";
import ClientIntakeSection from "@/components/sections/client-intake-section";

// Custom SVG Icons for Socials
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  // Mouse Tracking for Parallax & Spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mouse Tracking for ID Badge Tilt & Sway
  const rawRotateZ = useTransform(mouseX, [0, 2000], [-3, 3]);
  const rawRotateY = useTransform(mouseX, [0, 2000], [-8, 8]);
  const rawRotateX = useTransform(mouseY, [0, 1000], [6, -6]);

  const badgeRotateZ = useSpring(rawRotateZ, { stiffness: 60, damping: 20 });
  const badgeRotateY = useSpring(rawRotateY, { stiffness: 60, damping: 20 });
  const badgeRotateX = useSpring(rawRotateX, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
      
      if (containerRef.current) {
        containerRef.current.style.setProperty("--mouse-x", `${clientX}px`);
        containerRef.current.style.setProperty("--mouse-y", `${clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-background text-foreground selection:bg-blue-600 overflow-x-hidden font-sans"
    >
      {/* PREMIUM PRESENCE LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 dynamic-grid opacity-30" />
        <motion.div 
          style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[800px] h-[800px] bg-mood-blue rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 spotlight" />
      </div>

      <div className="relative z-10 p-6 md:p-12 lg:p-20 max-w-[1400px] mx-auto flex flex-col">
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-blue-600 origin-left z-[100] shadow-[0_0_15px_rgba(37,99,235,0.9)]"
          style={{ scaleX }}
        />

        {/* HERO SECTION (Split Layout) */}
        <header id="home" className="relative min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 pt-20 mb-40">
          
          {/* LEFT SIDE: Identity Text (Order 2 on Mobile, Order 1 on Desktop) */}
          <div className="flex-1 space-y-10 text-center lg:text-left z-20 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-[10px] uppercase tracking-[0.5em] font-black text-primary border border-primary/30"
            >
              <Zap size={14} fill="currentColor" /> Full Stack Engineer • 2026
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.25rem,7vw,7.5rem)] font-black tracking-tighter leading-[0.85] uppercase break-normal"
              style={{ wordBreak: "normal", overflowWrap: "normal" }}
            >
              BASSAM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-glow">
                ALHAKIM
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted font-medium leading-relaxed tracking-tight italic max-w-xl"
            >
              UI/UX Engineering <br />
              <span className="text-foreground not-italic font-black italic">Crafting seamless digital experiences with modern, scalable architecture.</span>
            </motion.p>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4 }}
               className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6"
            >
              {["User Experience", "Interface Design", "Systems Design", "Performance Engineering"].map((tag, i) => (
                <span key={i} className="text-[10px] font-black uppercase tracking-[0.2em] text-muted border-r border-glass-border pr-4 last:border-0">
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Primary CTA: Download Resume / CV */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
               className="pt-8 flex justify-center lg:justify-start"
            >
              <a 
                href="/Bassam_Alhakim_Systems_Engineer_CV.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                download="Bassam_Alhakim_Systems_Engineer_CV.pdf"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600/20 hover:bg-blue-600 border border-blue-500/40 hover:border-blue-400 text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(37,99,235,0.25)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <Download size={18} className="text-blue-400 group-hover:text-white transition-colors animate-bounce" />
                <span>Download Resume (CV)</span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Suspended ID Badge Experience (Order 1 on Mobile, Order 2 on Desktop) */}
          <motion.div 
            initial={{ y: -500, opacity: 0, rotateZ: 8 }}
            animate={{ y: 0, opacity: 1, rotateZ: 0 }}
            transition={{ type: "spring", damping: 14, stiffness: 80, mass: 1 }}
            className="flex-1 relative flex flex-col items-center justify-start pt-4 lg:-mt-12 z-30 order-1 lg:order-2"
          >
            {/* Cinematic Glow Behind Badge */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />

            {/* Realistic Wavy / Twisted Lanyard Strap Extending Upwards */}
            <motion.div 
              animate={{ 
                rotateZ: [-1, 1.5, -1],
                skewX: [-1, 1, -1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[450px] w-10 h-[480px] bg-gradient-to-b from-neutral-950 via-neutral-800 to-neutral-900 border-x-2 border-dashed border-white/20 shadow-2xl flex flex-col items-center justify-end pb-6 select-none pointer-events-none z-20 origin-bottom"
            >
              {/* Simulated 3D fabric twists/folds using angled diagonal shadow bands */}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.08)_38%,rgba(0,0,0,0.7)_50%,transparent_62%)] background-size-[100%_140px] opacity-90 pointer-events-none" />
              <div className="absolute inset-y-0 left-2 right-2 border-x border-white/5 pointer-events-none" />
              <div style={{ writingMode: "vertical-rl" }} className="tracking-[0.3em] text-[10px] font-black text-white/40 uppercase rotate-180 py-4 z-10">
                BASSAM • FULL STACK • 2026 • VIP ACCESS
              </div>
            </motion.div>

            {/* Metallic Clip Attaching Strap to Badge */}
            <div className="relative z-30 -mb-2.5 w-11 flex flex-col items-center pointer-events-none drop-shadow-md">
              <div className="w-6 h-4 bg-gradient-to-b from-neutral-400 via-neutral-200 to-neutral-600 rounded-t-sm border border-white/50 shadow-sm" />
              <div className="w-8 h-5 bg-gradient-to-b from-neutral-300 via-neutral-500 to-neutral-800 rounded-md border border-white/60 shadow-md flex items-center justify-center">
                <div className="w-4 h-1.5 bg-black/75 rounded-full shadow-inner" />
              </div>
            </div>

            {/* Swinging Badge Container */}
            <motion.div 
              style={{ 
                rotateZ: badgeRotateZ, 
                rotateY: badgeRotateY, 
                rotateX: badgeRotateX,
                transformPerspective: 1200,
                transformOrigin: "50% 0%"
              }}
              animate={{ 
                y: [0, -6, 0],
                rotateZ: [-1.2, 1.5, -1.2]
              }}
              transition={{ 
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 7, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative z-20 w-[300px] sm:w-[340px] rounded-[2.2rem] bg-neutral-950/85 backdrop-blur-2xl border border-white/20 p-5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(37,99,235,0.15)] flex flex-col items-center group select-none hover:border-blue-500/50 transition-all duration-500"
            >
              {/* Badge Punch Hole */}
              <div className="w-14 h-3.5 rounded-full bg-background border border-white/20 mb-4 shadow-inner flex items-center justify-center">
                <div className="w-10 h-1 bg-black/80 rounded-full" />
              </div>

              {/* Conference Header Bar */}
              <div className="w-full flex items-center justify-between px-3.5 py-2.5 bg-blue-600/15 border border-blue-500/30 rounded-xl mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  <span className="text-[10px] font-black tracking-widest text-blue-400 uppercase">TECH CONF 2026</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-muted-foreground/80">SPEAKER</span>
              </div>

              {/* Photo Container */}
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 relative shadow-inner bg-neutral-900 mb-5 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-shadow duration-500">
                <img 
                  src="/developer.jpg"
                  alt="Bassam Alhakim ID"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                
                {/* Overlay Badge Tag on Photo */}
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-[9px] font-mono text-white/90 shadow-lg">
                  ID: #BA-711
                </div>
              </div>

              {/* Badge Details Section */}
              <div className="w-full text-left space-y-3 px-1">
                <div>
                  <h3 className="text-xl font-black tracking-tight text-white uppercase leading-tight">Bassam Alhakim</h3>
                  <p className="text-xs font-semibold text-blue-400 tracking-wider uppercase mt-0.5">Senior Full Stack Engineer</p>
                </div>

                <div className="h-[1px] w-full bg-white/10 my-2" />

                <div className="flex items-center justify-between text-[10px] font-mono text-muted">
                  <div className="flex flex-col">
                    <span className="text-[8px] text-muted/60 uppercase tracking-wider">Access Level</span>
                    <span className="text-foreground font-bold">ALL AREAS (VIP)</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[8px] text-muted/60 uppercase tracking-wider">Clearance</span>
                    <span className="text-emerald-400 font-bold flex items-center justify-end gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> VERIFIED
                    </span>
                  </div>
                </div>

                {/* Simulated Barcode Section (Easter Egg CV Download) */}
                <a 
                  href="/Bassam_Alhakim_Systems_Engineer_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Bassam_Alhakim_Systems_Engineer_CV.pdf"
                  title="Click to Download CV.pdf [Easter Egg]"
                  className="pt-2 flex items-center justify-between gap-3 opacity-75 hover:opacity-100 transition-all cursor-pointer group/barcode block"
                >
                  <div className="h-7 flex-1 flex items-center justify-between gap-[2px] bg-white/5 hover:bg-blue-600/20 px-2.5 py-1 rounded-lg border border-white/10 group-hover/barcode:border-blue-500/50 font-mono overflow-hidden relative transition-colors shadow-inner">
                    {[3,1,4,2,1,2,4,1,3,2,1,4,2,3,1,2,1,4,2,1,3,2,4,1].map((w, idx) => (
                      <div key={idx} className="h-full bg-white/80 group-hover/barcode:bg-blue-300 transition-colors" style={{ width: `${w}px` }} />
                    ))}
                    {/* Hover text overlay */}
                    <div className="absolute inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center gap-1.5 opacity-0 group-hover/barcode:opacity-100 transition-opacity duration-300">
                      <FileText size={12} className="text-blue-400 animate-pulse" />
                      <span className="text-[9px] font-mono font-bold tracking-widest text-blue-300 uppercase">GET_CV.PDF</span>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </header>

        {/* Philosophy Section */}
        <motion.section 
          id="philosophy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative mb-48 border-l-2 border-primary/30 pl-6 md:pl-24 group"
        >
          <div className="absolute top-0 left-[-200px] w-[400px] h-[400px] bg-mood-blue rounded-full blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <h4 className="text-primary font-black tracking-[0.4em] uppercase text-[11px] mb-10">Philosophy</h4>
          <h2 className="text-2xl md:text-7xl font-black leading-[1.05] tracking-normal md:tracking-tighter max-w-5xl uppercase text-foreground break-normal hyphens-none">
            Engineering products that <span className="text-muted italic">feel alive</span> through <span className="text-foreground">responsive architecture.</span>
          </h2>
        </motion.section>

        {/* ── SECTION: SYSTEM CAPABILITIES (The Narrative) ── */}
        <section id="stack" className="relative mb-64 pt-32">
          <div className="flex flex-col items-center text-center space-y-8 mb-24">
            <div className="space-y-4">
              <h4 className="text-primary font-black tracking-[0.4em] uppercase text-[11px] flex items-center justify-center gap-2">
                <span className="w-8 h-[1px] bg-primary"></span> Engineering Narrative
              </h4>
              <h2 className="text-3xl sm:text-4xl md:text-8xl font-black uppercase tracking-tighter text-foreground leading-[0.9] break-normal" style={{ wordBreak: "normal", overflowWrap: "normal" }}>
                SYSTEM <br className="md:hidden" />
                <span className="text-muted italic">CAPABILITIES</span>
              </h2>
            </div>
            <p className="text-muted max-w-2xl text-lg md:text-xl font-medium leading-relaxed">
              Architecting digital products with a focus on scalability, 
              performance, and resilient system design.
            </p>
          </div>

          {/* Cards Grid: 2 per row on desktop, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                id: "frontend",
                title: "Frontend Architecture",
                subtitle: "Fluid & Scalable Interfaces",
                glow: "rgba(37,99,235,0.15)",
                points: [
                  { text: "Next.js App Router & Server Components", icon: <Layers size={18} /> },
                  { text: "TypeScript-Driven Systems Design", icon: <Cpu size={18} /> },
                  { text: "Tailwind Design Systems & Micro-interactions", icon: <Zap size={18} /> },
                  { text: "Accessibility-first UI Engineering", icon: <Globe size={18} /> },
                  { text: "Reactive interfaces with server-first rendering", icon: <Zap size={18} /> }
                ]
              },
              {
                id: "backend",
                title: "Backend Infrastructure",
                subtitle: "Resilient Distributed Logic",
                glow: "rgba(147,51,234,0.12)",
                points: [
                  { text: "Node.js Runtime & Laravel Architecture", icon: <Terminal size={18} /> },
                  { text: "API Design (RESTful / GraphQL / RPC)", icon: <Globe size={18} /> },
                  { text: "Data Modeling with PostgreSQL & MySQL", icon: <Database size={18} /> },
                  { text: "Authentication Flows & Security Hardening", icon: <Zap size={18} /> },
                  { text: "Background Processing & Async Workflows", icon: <Cpu size={18} /> }
                ]
              },
              {
                id: "performance",
                title: "Performance Engineering",
                subtitle: "Critical Path Optimization",
                glow: "rgba(234,179,8,0.1)",
                points: [
                  { text: "ISR / SSR & Streaming Optimizations", icon: <Zap size={18} /> },
                  { text: "Edge Rendering & Caching Strategy", icon: <Globe size={18} /> },
                  { text: "Bundle Optimization & Critical Path Analysis", icon: <Cpu size={18} /> },
                  { text: "Database Query & Index Optimization", icon: <Database size={18} /> },
                  { text: "High-density data rendering & Virtualization", icon: <Layers size={18} /> }
                ]
              },
              {
                id: "deployment",
                title: "Deployment Ecosystem",
                subtitle: "Production-Grade Pipelines",
                glow: "rgba(34,197,94,0.08)",
                points: [
                  { text: "Dockerized Microservices & Containers", icon: <Terminal size={18} /> },
                  { text: "CI/CD Automation & GitHub Actions", icon: <Zap size={18} /> },
                  { text: "Cloud Infrastructure (Vercel / AWS)", icon: <Globe size={18} /> },
                  { text: "Monitoring, Logging & Error Tracking", icon: <Cpu size={18} /> },
                  { text: "Automated Scaling & High Availability", icon: <Layers size={18} /> }
                ]
              }
            ].map((cap, i) => (
              <CapabilityCard key={i} {...cap} />
            ))}
          </div>
        </section>

        {/* Cinematic Vertical Showcase */}
        <section id="projects" className="relative mb-48 py-24 border-y border-glass-border">
           <div className="flex flex-col items-center text-center space-y-10 mb-20">
              <h2 className="text-4xl sm:text-5xl md:text-9xl font-black tracking-tighter uppercase italic text-subtle break-normal" style={{ wordBreak: "normal", overflowWrap: "normal" }}>
                Engineering <span className="text-foreground not-italic">Showcase</span>
              </h2>
              <p className="text-muted max-w-lg text-lg md:text-xl font-medium leading-loose">
                Immersive, story-driven narratives of production systems. 
                Designed for scalability, premium aesthetics, and responsive performance.
              </p>
           </div>
           
           <div className="flex flex-col gap-16 w-full">
              {showcaseProjects.map((project, idx) => (
                 <CinematicProjectCard key={idx} project={project} />
              ))}
           </div>
        </section>

        {/* ── LAYER 1: MINI PHILOSOPHY STATEMENT ── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative py-40 text-center overflow-hidden"
        >
          {/* Ambient calmer glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-mood-blue rounded-full blur-[120px]" />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] max-w-4xl mx-auto text-foreground"
          >
            Building systems that{" "}
            <span className="text-muted italic">blend engineering</span>{" "}
            <br className="hidden md:block" />
            with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
              refined digital experiences.
            </span>
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 h-[1px] w-48 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto origin-center"
          />
        </motion.section>

        {/* ── LAYER 2: PREMIUM COLLABORATION GATEWAY ── */}
        <ClientIntakeSection />

        {/* ── SOCIAL LINKS ── */}
        <section className="relative pb-24 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mt-6"
            >
              {/* Primary CTA */}
              <motion.a
                href="mailto:bassam.alhakim.dev@gmail.com"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primary/90 rounded-full text-white font-black text-sm uppercase tracking-widest transition-colors duration-500 shadow-[0_0_40px_var(--glow-primary)] hover:shadow-[0_0_60px_var(--glow-primary)]"
              >
                <Mail size={18} />
                Contact Me
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="https://github.com/bassamdev711"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-10 py-5 glass-panel text-foreground border-glass-border hover:border-muted rounded-full font-black text-sm uppercase tracking-widest transition-all duration-500"
              >
                <GithubIcon />
                GitHub
              </motion.a>

              {/* Tertiary CTA */}
              <motion.a
                href="https://www.linkedin.com/in/bassam-alyamani-b4007a40b"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-10 py-5 glass-panel text-foreground border-glass-border hover:border-muted rounded-full font-black text-sm uppercase tracking-widest transition-all duration-500"
              >
                <LinkedinIcon />
                LinkedIn
              </motion.a>

              {/* Phone CTA */}
              <motion.a
                href="tel:78050063"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-10 py-5 glass-panel text-foreground border-glass-border hover:border-muted rounded-full font-black text-sm uppercase tracking-widest transition-all duration-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                780500363
              </motion.a>
            </motion.div>
        </section>

        {/* ── LAYER 3: MINIMAL FOOTER (FADE OUT) ── */}
        <footer className="relative pt-10 pb-16 border-t border-glass-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 transition-opacity duration-700">
            <div className="flex items-center gap-4">
              <span className="font-black text-sm uppercase tracking-[0.3em] text-muted">
                Bassam Alhakim
              </span>
              <span className="text-subtle">·</span>
              <span className="text-[11px] text-muted uppercase tracking-widest font-bold">
                Product Engineer
              </span>
            </div>
            <span className="text-[11px] text-subtle uppercase tracking-widest font-bold">
              © 2026 — Crafted with precision.
            </span>
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/bassamdev711"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors duration-300"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/bassam-al-hakim-b4007a40b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors duration-300"
              >
                <LinkedinIcon />
              </a>
              <a href="mailto:bassam.alhakim.dev@gmail.com" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors duration-300">
                <Mail size={18} />
                <span className="text-[11px] font-bold tracking-widest uppercase">bassam.alhakim.dev@gmail.com</span>
              </a>
              <a href="tel:780500363" className="text-muted hover:text-foreground transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </a>
            </div>
          </div>
        </footer>

        <NavDock />
      </div>
    </div>
  );
}



function CapabilityCard({ title, subtitle, points, glow }: { title: string; subtitle: string; points: {text: string, icon: React.ReactNode}[]; glow: string }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      document.documentElement.style.setProperty("--mood-blue", glow);
    }
  }, [isInView, glow]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0.2, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-10%" }}
      className="glass-panel p-8 md:p-12 rounded-[2.5rem] space-y-8 relative overflow-hidden transition-all duration-1000 group"
    >
      <div className="space-y-2">
        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-foreground group-hover:text-primary transition-colors pr-2 break-normal">{title}</h3>
        <p className="text-muted font-black uppercase text-[9px] tracking-[0.3em]">{subtitle}</p>
      </div>
      
      <ul className="space-y-5">
        {points.map((point, i) => (
          <li key={i} className="flex items-center gap-4 group/item">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-glass-surface flex items-center justify-center text-muted group-hover/item:text-primary group-hover/item:bg-primary/10 transition-all">
              {point.icon}
            </div>
            <span className="text-muted text-sm md:text-base font-medium leading-tight group-hover/item:text-foreground transition-colors italic">
              {point.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Decorative Blur Glow inside card */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
    </motion.div>
  );
}

const showcaseProjects = [
  {
    id: "erms",
    name: "ERMS Ecosystem",
    desc: "Cloud-native inventory, point of sale, and operational orchestration for large-scale enterprise dining chains.",
    tagline: "Systems Engineering",
    accentColor: "#2563eb",
    glowColor: "rgba(37, 99, 235, 0.15)",
    highlights: ["Realtime Operations", "Accounting Engine", "Multi-platform Ecosystem"],
    tech: ["Next.js", "Laravel", "PostgreSQL", "Socket.io"],
    href: "/projects/restaurant-erp",
    visuals: (
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Database size={220} className="text-blue-500 animate-pulse" />
      </div>
    )
  },
  {
    id: "tif",
    name: "TIF Luxury Perfume",
    desc: "An interactive 3D perfume boutique running 60 FPS WebGL, coupled with 'Keiro'—a rate-resilient Gemini AI Concierge.",
    tagline: "Cinematic Luxury",
    accentColor: "#d97706",
    glowColor: "rgba(234, 179, 8, 0.12)",
    highlights: ["3D Experience", "AI Concierge", "Interactive Luxury"],
    tech: ["React Three Fiber", "GSAP", "Gemini API", "Tailwind"],
    href: "/projects/tif",
    visuals: (
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Zap size={220} className="text-amber-500 animate-bounce" />
      </div>
    )
  },
  {
    id: "house-of-spices",
    name: "House of Spices",
    desc: "Interactive storytelling storefront preserving Yemeni cultural heritage through custom flavor mixing engines and localized AI assistants.",
    tagline: "AI Commerce & Identity",
    accentColor: "#b45309",
    glowColor: "rgba(245, 158, 11, 0.1)",
    highlights: ["Spicy AI Assistant", "Yemeni Identity", "Immersive Commerce"],
    tech: ["Next.js", "Laravel", "Claude API", "PostgreSQL"],
    href: "/projects/house-of-spices",
    visuals: (
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Globe size={220} className="text-orange-500 animate-pulse" />
      </div>
    )
  },
  {
    id: "wifi-monitor",
    name: "WiFi Monitor Pro",
    desc: "A sophisticated hybrid systems utility monitoring real-time per-app data consumption, backed by a persistent foreground engine and strict security overlays.",
    tagline: "Systems & Mobile",
    accentColor: "#06b6d4",
    glowColor: "rgba(6, 182, 212, 0.08)",
    highlights: ["Foreground Engine", "Per-App Telemetry", "Security Overlay"],
    tech: ["Flutter", "Kotlin Native", "Android SDK", "SQLite"],
    href: "/projects/wifi-monitor-pro",
    visuals: (
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Cpu size={220} className="text-cyan-500 animate-spin" style={{ animationDuration: '12s' }} />
      </div>
    )
  }
];

function CinematicProjectCard({ project }: { project: typeof showcaseProjects[0] }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { margin: "-30% 0px -30% 0px" });

  useEffect(() => {
    if (isInView) {
      document.documentElement.style.setProperty("--mood-blue", project.glowColor);
      document.documentElement.style.setProperty("--primary", project.accentColor);
    }
  }, [isInView, project.glowColor, project.accentColor]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0.1, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-[55vh] md:min-h-[65vh] rounded-[3.5rem] overflow-hidden glass-panel p-8 md:p-14 flex flex-col justify-between group transition-all duration-1000"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20 group-hover:opacity-60 transition-opacity duration-1000">
        <div className="absolute inset-0 dynamic-grid opacity-30" />
        {project.visuals}
        <div 
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-[100px] opacity-10 group-hover:opacity-30 transition-all duration-1000"
          style={{ backgroundColor: project.accentColor }}
        />
      </div>

      {/* Top Tag & Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <span 
          className="text-[10px] font-black uppercase tracking-[0.4em] px-4 py-1.5 rounded-full bg-glass-surface border border-glass-border transition-all duration-500 group-hover:border-current"
          style={{ color: project.accentColor }}
        >
          {project.tagline}
        </span>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, idx) => (
            <span key={idx} className="text-[9px] font-bold uppercase tracking-wider text-subtle bg-glass-surface px-3 py-1 rounded-md">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Center Details */}
      <div className="my-6 space-y-6 max-w-2xl text-left">
        <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-foreground transition-all duration-500 pr-2 break-normal">
          {project.name}
        </h3>
        <p className="text-muted text-lg leading-relaxed font-medium">
          {project.desc}
        </p>

        {/* 3 Capabilities/Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-glass-border">
          {project.highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.accentColor }} />
              <span className="text-xs font-bold uppercase tracking-wider text-muted">{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Button */}
      <div className="flex justify-between items-center pt-4">
        <Link href={project.href} className="w-full sm:w-auto">
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 px-8 py-4.5 rounded-full text-white text-xs font-black uppercase tracking-widest transition-all duration-500 shadow-md hover:shadow-xl w-full sm:w-auto cursor-pointer"
            style={{ backgroundColor: project.accentColor }}
          >
            Explore Case Study
            <ArrowUpRight size={16} />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}
