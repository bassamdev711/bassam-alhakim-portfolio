"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  Circle,
  Code2,
  Database,
  ExternalLink,
  Layers3,
  BriefcaseBusiness,
  Mail,
  Menu,
  Network,
  Phone,
  Radar,
  Server,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

function GithubMark({ size = 17 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>;
}

const projects = [
  {
    number: "01",
    eyebrow: "Enterprise systems",
    title: "Restaurant ERP",
    name: "ERMS Ecosystem",
    description:
      "A multi-surface operating system for restaurant chains, connecting finance, inventory, procurement, payroll, and daily operations in one reliable workflow.",
    impact: "Double-entry accounting · Recipe-led stock control · Shift reconciliation",
    stack: ["Laravel 11", "Filament", "Flutter", "MySQL"],
    href: "/projects/restaurant-erp",
    external: "https://github.com/bassamdev711/restaurant-system",
    accent: "blue",
    icon: Database,
  },
  {
    number: "02",
    eyebrow: "Digital commerce",
    title: "Luxury WebGL Experience",
    name: "TIF Perfume",
    description:
      "A cinematic 3D storefront designed to make product discovery feel tactile, premium, and unmistakably digital without sacrificing speed or clarity.",
    impact: "3D product storytelling · AI concierge · Motion-led conversion",
    stack: ["React Three Fiber", "Next.js", "GSAP", "TypeScript"],
    href: "/projects/tif",
    external: "https://github.com/bassamdev711/tif",
    accent: "amber",
    icon: Sparkles,
  },
  {
    number: "03",
    eyebrow: "Brand & commerce",
    title: "Cultural Commerce",
    name: "House of Spices",
    description:
      "An interactive digital identity for a Yemeni spice brand, bringing together storytelling, product discovery, and a warm, localized shopping experience.",
    impact: "Localized experience · Interactive product narrative · AI-assisted discovery",
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    href: "/projects/house-of-spices",
    external: "https://github.com/bassamdev711/House_of_Spices",
    accent: "orange",
    icon: Layers3,
  },
  {
    number: "04",
    eyebrow: "Mobile systems",
    title: "Real-time Network Utility",
    name: "WiFi Monitor Pro",
    description:
      "A native-leaning Android utility that turns invisible network consumption into useful, immediate feedback through persistent monitoring and clear thresholds.",
    impact: "Background service · Per-app telemetry · Native Kotlin integration",
    stack: ["Flutter", "Kotlin", "Android SDK", "SQLite"],
    href: "/projects/wifi-monitor-pro",
    external: "https://github.com/bassamdev711/wifi-monitor-pro",
    accent: "cyan",
    icon: Radar,
  },
];

const capabilities = [
  {
    icon: Network,
    title: "Product architecture",
    description: "Turning ambiguous requirements into systems that are clear, extensible, and ready for real users.",
  },
  {
    icon: Code2,
    title: "Full-stack delivery",
    description: "Shipping the interface, API, database, and operational details as one coherent product surface.",
  },
  {
    icon: Server,
    title: "Operational resilience",
    description: "Designing for authentication, background work, observability, performance, and the edge cases that matter.",
  },
];

const technologies = ["Next.js", "TypeScript", "Laravel", "Flutter", "PHP", "MySQL", "PostgreSQL", "Docker"];

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="noise-layer" />

      <header className="site-header">
        <Link href="#top" className="brand-mark" onClick={closeMenu} aria-label="Bassam Alhakim home">
          <span className="brand-symbol">BA</span>
          <span className="brand-copy">Bassam Alhakim<span>/</span></span>
        </Link>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="header-actions">
          <a href="mailto:bassam.alhakim.dev@gmail.com" className="header-availability">
            <span className="status-dot" /> Available for select work
          </a>
          <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <section id="top" className="hero-section section-frame">
        <div className="hero-grid-line" />
        <div className="hero-content">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="eyebrow-line" /> Software engineer · Product builder
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }}>
            I build the systems
            <span>behind better products.</span>
          </motion.h1>
          <motion.p className="hero-lead" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16 }}>
            I&apos;m Bassam Alhakim, a full-stack engineer focused on reliable architecture, expressive interfaces, and digital products that hold up in the real world.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.24 }}>
            <a href="#work" className="button button-primary">Explore selected work <ArrowDown size={16} /></a>
            <a href="/Bassam_Alhakim_Systems_Engineer_CV.pdf" target="_blank" rel="noreferrer" className="text-link">View résumé <ArrowUpRight size={15} /></a>
          </motion.div>
        </div>

        <motion.div className="hero-portrait-wrap" initial={{ opacity: 0, scale: 0.96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />
          <div className="portrait-card">
            <div className="portrait-meta"><span>BA / 711</span><span>01 — 04</span></div>
            <div className="portrait-image"><Image src="/developer.jpg" alt="Bassam Alhakim, software engineer" fill priority sizes="(max-width: 900px) 82vw, 420px" className="object-cover object-top" /></div>
            <div className="portrait-footer"><span>Systems / Products / Interfaces</span><span className="portrait-signal"><Circle size={8} fill="currentColor" /> Online</span></div>
          </div>
          <div className="hero-note"><span>Based in Yemen</span><span>Working globally</span></div>
        </motion.div>

        <div className="hero-index"><span>Scroll to explore</span><ArrowDown size={16} /></div>
      </section>

      <section id="about" className="manifesto-section section-frame">
        <div className="section-kicker"><span>01</span><span>What I care about</span></div>
        <div className="manifesto-layout">
          <h2>Good engineering should feel <em>inevitable.</em></h2>
          <div className="manifesto-copy">
            <p>I work at the intersection of product thinking and software engineering. The goal is never to add complexity for its own sake; it is to make ambitious ideas easier to understand, operate, and grow.</p>
            <p>From enterprise workflows to immersive commerce, I bring structure to the hard parts and taste to the visible ones.</p>
            <a href="#contact" className="text-link">Let&apos;s make something considered <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <section id="approach" className="approach-section section-frame">
        <div className="section-kicker"><span>02</span><span>How I work</span></div>
        <div className="section-heading-row"><div><p className="eyebrow">A practical point of view</p><h2>Clarity first.<br /><span>Craft always.</span></h2></div><p className="section-intro">The strongest products are not just functional. They make the next decision obvious, the system dependable, and the experience worth returning to.</p></div>
        <div className="capability-grid">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return <motion.article key={capability.title} className="capability-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: index * 0.08 }}><span className="card-number">0{index + 1}</span><Icon size={23} strokeWidth={1.5} /><h3>{capability.title}</h3><p>{capability.description}</p><span className="card-arrow"><ChevronRight size={16} /></span></motion.article>;
          })}
        </div>
        <div className="tech-strip"><span className="tech-label">Working toolkit</span><div className="tech-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
      </section>

      <section id="work" className="work-section section-frame">
        <div className="section-kicker"><span>03</span><span>Selected work</span></div>
        <div className="section-heading-row work-heading"><div><p className="eyebrow">Built for use, not just applause</p><h2>Selected<br /><span>systems.</span></h2></div><p className="section-intro">A small selection from a growing body of work across enterprise software, mobile utilities, and high-touch digital commerce.</p></div>
        <div className="project-list">
          {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
        </div>
        <div className="all-work-row"><span>15 public repositories on GitHub</span><a href="https://github.com/bassamdev711?tab=repositories" target="_blank" rel="noreferrer" className="text-link">View all repositories <ExternalLink size={15} /></a></div>
      </section>

      <section id="contact" className="contact-section section-frame">
        <div className="contact-panel">
          <div className="contact-topline"><span>04 / Contact</span><span>Open to the right challenge</span></div>
          <div className="contact-content"><p className="eyebrow"><span className="eyebrow-line" /> Start a conversation</p><h2>Have a complex idea?<br /><span>Let&apos;s give it shape.</span></h2><p>Whether you need a product from zero, a stronger technical foundation, or a second pair of eyes on a difficult system, I&apos;d be glad to hear what you&apos;re building.</p><a href="mailto:bassam.alhakim.dev@gmail.com" className="button button-light">bassam.alhakim.dev@gmail.com <ArrowUpRight size={17} /></a></div>
          <div className="contact-links"><a href="https://github.com/bassamdev711" target="_blank" rel="noreferrer"><GithubMark size={17} /> GitHub</a><a href="https://www.linkedin.com/in/bassam-al-hakim-b4007a40b" target="_blank" rel="noreferrer"><BriefcaseBusiness size={17} /> LinkedIn</a><a href="tel:+967780500363"><Phone size={17} /> +967 780 500 363</a></div>
        </div>
      </section>

      <footer className="site-footer section-frame"><div className="footer-brand"><span className="brand-symbol">BA</span><span>© 2026 Bassam Alhakim</span></div><span>Designed, engineered, and shipped with intent.</span><a href="#top" className="footer-top">Back to top <ArrowUpRight size={15} /></a></footer>
    </main>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const Icon = project.icon;
  return <motion.article className={`project-card project-${project.accent}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.65, delay: index * 0.06 }}><div className="project-visual"><div className="visual-grid" /><div className="visual-ring ring-large" /><div className="visual-ring ring-small" /><Icon className="visual-icon" size={115} strokeWidth={0.8} /><span className="visual-label">CASE / {project.number}</span></div><div className="project-details"><div className="project-topline"><span>{project.eyebrow}</span><span>{project.number}</span></div><h3>{project.name}</h3><p className="project-title">{project.title}</p><p className="project-description">{project.description}</p><p className="project-impact"><Check size={15} /> {project.impact}</p><div className="project-bottom"><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-links"><Link href={project.href} className="text-link">Case study <ArrowUpRight size={15} /></Link><a href={project.external} target="_blank" rel="noreferrer" aria-label={`View ${project.name} source on GitHub`}><GithubMark size={17} /></a></div></div></div></motion.article>;
}
