"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Circle,
  Code2,
  ExternalLink,
  Layers3,
  BriefcaseBusiness,
  Menu,
  Network,
  Phone,
  Server,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

function GithubMark({ size = 17 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>;
}

const projects = [
  {
    number: "01",
    eyebrow: "Luxury commerce / 3D",
    title: "A cinematic fragrance boutique",
    name: "TIF / طيف",
    description: "A high-performance perfume storefront where quiet luxury meets real-time 3D. The experience treats product discovery as a sensory journey, with crystal-like preloading, tactile bottle visualization, and a fluid mobile catalog.",
    impact: "Real-time product visualization · Motion-led storytelling · Structured order transmission",
    stack: ["Next.js 16", "TypeScript", "Three.js", "React Three Fiber", "Framer Motion"],
    image: "/portfolio/atr/ora-tif-promo-01-laptop-hero.webp",
    gallery: ["/portfolio/atr/ora-tif-promo-03-catalog.webp", "/portfolio/atr/ora-tif-promo-04-admin-control.webp", "/portfolio/atr/ora-tif-promo-05-whitelabel.webp"],
    live: "https://tif-lyart.vercel.app/",
    external: "https://github.com/bassamdev711/tif",
    accent: "amber",
  },
  {
    number: "02",
    eyebrow: "Cultural commerce / retail",
    title: "A digital home for authentic flavor",
    name: "House of Spices / بيت البهارات",
    description: "A warm, localized commerce experience for a Yemeni spice and herb brand. From curated categories and premium saffron to mobile shopping, checkout, and store operations, the product turns heritage into a clear digital journey.",
    impact: "Localized product discovery · Editorial brand storytelling · Catalog-to-checkout commerce",
    stack: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Vercel Blob"],
    image: "/portfolio/bharat/01-laptop-and-phone-home.webp",
    gallery: ["/portfolio/bharat/02-mobile-shopping-experience.webp", "/portfolio/bharat/03-product-to-checkout.webp", "/portfolio/bharat/04-admin-control-center.webp"],
    live: "https://house-of-spices-linl.vercel.app/",
    external: "https://github.com/bassamdev711/House_of_Spices",
    accent: "orange",
  },
  {
    number: "03",
    eyebrow: "Fashion commerce / editorial",
    title: "A quieter way to find the right step",
    name: "ATHR / أثر",
    description: "An editorial footwear store built around material, movement, and confident choice. The interface gives every collection room to breathe while supporting product discovery across men’s, women’s, children’s, formal, casual, and performance footwear.",
    impact: "Material-led art direction · Collection index · Clear sizing and purchase confidence",
    stack: ["Next.js 16", "TypeScript", "Prisma", "Framer Motion", "Tailwind CSS v4"],
    image: "/portfolio/hatha/01-athr-aura-hero-real.webp",
    gallery: ["/portfolio/hatha/02-athr-aura-mobile-real.webp", "/portfolio/hatha/03-athr-aura-laptop-real.webp", "/portfolio/hatha/06-aura-athr-admin-hero-real.webp"],
    live: "https://hitha711.vercel.app/",
    external: "https://github.com/bassamdev711/hitha",
    accent: "cyan",
  },
  {
    number: "04",
    eyebrow: "Luxury retail / timepieces",
    title: "Time, in a rarer form",
    name: "ORVÉN",
    description: "A considered watch storefront shaped around restraint, precision, and collection. The system pairs a dark editorial identity with product lines from Editions and Obsidian to Skeleton, Marine, Heritage, and Chronograph.",
    impact: "Brand system · Curated product architecture · Commerce and control-room surfaces",
    stack: ["Next.js 16", "TypeScript", "Prisma", "GSAP", "Vercel Blob"],
    image: "/portfolio/saah/01-ora-soft-orven-identity.webp",
    gallery: ["/portfolio/saah/03-ora-soft-orven-commerce.webp", "/portfolio/saah/04-ora-soft-orven-control-room.webp", "/portfolio/saah/05-ora-soft-orven-analytics.webp"],
    live: "https://saahh.vercel.app/",
    external: "https://github.com/bassamdev711/saahh",
    accent: "violet",
  },
  {
    number: "05",
    eyebrow: "Home technology / energy",
    title: "A smarter operating layer for the home",
    name: "TAQA HOME / طاقة هوم",
    description: "An Arabic-first commerce platform for appliances, smart tools, solar energy, storage, and water heating. It connects clear product specifications with consultation, scalable catalogs, cart and checkout, administration, and after-sales confidence.",
    impact: "10 collections · 100-product catalog · Solar and storage commerce · Admin operations",
    stack: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Framer Motion"],
    image: "/portfolio/taqt/aura-soft-taqa-home-real-01-hero.webp",
    gallery: ["/portfolio/taqt/aura-soft-taqa-home-real-02-mobile-story.webp", "/portfolio/taqt/aura-soft-taqa-home-real-05-catalog-post.webp", "/portfolio/taqt/aura-soft-taqa-admin-products-landscape.webp"],
    live: "https://taqa-gamma.vercel.app/",
    external: "https://github.com/bassamdev711/taqa",
    accent: "blue",
  },
  {
    number: "06",
    eyebrow: "Healthcare / patient experience",
    title: "Precision, with a human rhythm",
    name: "Dr. Layan Clinic",
    description: "A calm digital front door for cosmetic and restorative dentistry. The experience makes smile design, digital diagnosis, before-and-after transformation, and the first consultation feel clear, personal, and reassuring.",
    impact: "Personalized smile design · Consultation intake · Before/after storytelling · Secure validation",
    stack: ["Next.js 16", "TypeScript", "PostgreSQL", "Zod", "Vercel Blob"],
    image: "/portfolio/doctor/aura_soft_design_01.webp",
    gallery: ["/portfolio/doctor/aura_soft_design_02.webp", "/portfolio/doctor/aura_soft_design_03.webp", "/portfolio/doctor/aura_soft_design_05.webp"],
    live: "https://doctor-beta-dun.vercel.app/",
    external: "https://github.com/bassamdev711/doctor",
    accent: "rose",
  },
  {
    number: "07",
    eyebrow: "Offline-first retail / Flutter",
    title: "A dependable operating layer for the neighborhood store",
    name: "MATEEN / متين",
    description: "A Flutter-based store management system built to keep essential work moving without a constant internet connection. The app brings inventory, point of sale, purchasing, customers, suppliers, expenses, reports, and Arabic-first workflows into one focused operating surface, with a LAN display for larger screens.",
    impact: "Offline-first workflows · Local SQLite persistence · Arabic retail operations · Mobile-to-LAN display",
    stack: ["Flutter", "Dart", "Riverpod", "Drift / SQLite", "GoRouter", "PDF + Excel"],
    image: "/portfolio/maten/maten-19.webp",
    gallery: ["/portfolio/maten/maten-01.webp", "/portfolio/maten/maten-02.webp", "/portfolio/maten/maten-03.webp", "/portfolio/maten/maten-04.webp", "/portfolio/maten/maten-05.webp", "/portfolio/maten/maten-06.webp", "/portfolio/maten/maten-07.webp", "/portfolio/maten/maten-08.webp", "/portfolio/maten/maten-09.webp", "/portfolio/maten/maten-10.webp", "/portfolio/maten/maten-11.webp", "/portfolio/maten/maten-12.webp", "/portfolio/maten/maten-13.webp", "/portfolio/maten/maten-14.webp", "/portfolio/maten/maten-15.webp", "/portfolio/maten/maten-16.webp", "/portfolio/maten/maten-17.webp", "/portfolio/maten/maten-18.webp", "/portfolio/maten/maten-19.webp"],
    live: "https://github.com/bassamdev711/baqkah",
    external: "https://github.com/bassamdev711/baqkah",
    accent: "cyan",
  },
] as const;

const capabilities = [
  { icon: Network, title: "Product architecture", description: "Turning ambiguous requirements into systems that are clear, extensible, and ready for real users." },
  { icon: Code2, title: "Full-stack delivery", description: "Shipping the interface, API, database, and operational details as one coherent product surface." },
  { icon: Server, title: "Operational resilience", description: "Designing for authentication, background work, observability, performance, and the edge cases that matter." },
];

const technologies = ["Next.js", "TypeScript", "React Three Fiber", "Prisma", "PostgreSQL", "Laravel", "Flutter", "Vercel"];

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState<(typeof projects)[number] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const closeMenu = () => setMenuOpen(false);
  const openGallery = (project: (typeof projects)[number], imageIndex = 0) => {
    setActiveGallery(project);
    setActiveImageIndex(imageIndex);
  };
  const closeGallery = () => setActiveGallery(null);

  useEffect(() => {
    if (!activeGallery) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") setActiveImageIndex((current) => current === 0 ? activeGallery.gallery.length - 1 : current - 1);
      if (event.key === "ArrowRight") setActiveImageIndex((current) => current === activeGallery.gallery.length - 1 ? 0 : current + 1);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeGallery]);

  return (
    <main className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="noise-layer" />
      <header className="site-header">
        <a href="#top" className="brand-mark" onClick={closeMenu} aria-label="Bassam Alhakim home"><span className="brand-symbol">BA</span><span className="brand-copy">Bassam Alhakim<span>/</span></span></a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a><a href="#approach" onClick={closeMenu}>Approach</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="header-actions"><a href="mailto:bassam.alhakim.dev@gmail.com" className="header-availability"><span className="status-dot" /> Available for select work</a><button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation menu" aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
      </header>

      <section id="top" className="hero-section section-frame">
        <div className="hero-grid-line" />
        <div className="hero-content">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}><span className="eyebrow-line" /> Software engineer · Product builder</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }}>I build the systems<span>behind better products.</span></motion.h1>
          <motion.p className="hero-lead" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16 }}>I&apos;m Bassam Alhakim, a full-stack engineer focused on reliable architecture, expressive interfaces, and digital products that hold up in the real world.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.24 }}><a href="#work" className="button button-primary">Explore selected work <ArrowDown size={16} /></a><a href="/Bassam_Alhakim_Systems_Engineer_CV.pdf" target="_blank" rel="noreferrer" className="text-link">View résumé <ArrowUpRight size={15} /></a></motion.div>
        </div>
        <motion.div className="hero-portrait-wrap" initial={{ opacity: 0, scale: 0.96, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
          <div className="portrait-orbit orbit-one" /><div className="portrait-orbit orbit-two" /><div className="portrait-card"><div className="portrait-meta"><span>BA / 711</span><span>01 — 06</span></div><div className="portrait-image"><Image src="/developer.jpg" alt="Bassam Alhakim, software engineer" fill priority sizes="(max-width: 900px) 82vw, 420px" className="object-cover object-top" /></div><div className="portrait-footer"><span>Systems / Products / Interfaces</span><span className="portrait-signal"><Circle size={8} fill="currentColor" /> Online</span></div></div><div className="hero-note"><span>Based in Yemen</span><span>Working globally</span></div>
        </motion.div>
        <div className="hero-index"><span>Scroll to explore</span><ArrowDown size={16} /></div>
      </section>

      <section id="about" className="manifesto-section section-frame"><div className="section-kicker"><span>01</span><span>What I care about</span></div><div className="manifesto-layout"><h2>Good engineering should feel <em>inevitable.</em></h2><div className="manifesto-copy"><p>I work at the intersection of product thinking and software engineering. The goal is never to add complexity for its own sake; it is to make ambitious ideas easier to understand, operate, and grow.</p><p>From enterprise workflows to immersive commerce, I bring structure to the hard parts and taste to the visible ones.</p><a href="#contact" className="text-link">Let&apos;s make something considered <ArrowUpRight size={15} /></a></div></div></section>

      <section id="approach" className="approach-section section-frame"><div className="section-kicker"><span>02</span><span>How I work</span></div><div className="section-heading-row"><div><p className="eyebrow">A practical point of view</p><h2>Clarity first.<br /><span>Craft always.</span></h2></div><p className="section-intro">The strongest products are not just functional. They make the next decision obvious, the system dependable, and the experience worth returning to.</p></div><div className="capability-grid">{capabilities.map((capability, index) => { const Icon = capability.icon; return <motion.article key={capability.title} className="capability-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: index * 0.08 }}><span className="card-number">0{index + 1}</span><Icon size={23} strokeWidth={1.5} /><h3>{capability.title}</h3><p>{capability.description}</p><span className="card-arrow"><ChevronRight size={16} /></span></motion.article>; })}</div><div className="tech-strip"><span className="tech-label">Working toolkit</span><div className="tech-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></section>

      <section id="work" className="work-section section-frame"><div className="section-kicker"><span>03</span><span>Selected work</span></div><div className="section-heading-row work-heading"><div><p className="eyebrow">Seven shipped digital experiences</p><h2>Selected<br /><span>systems.</span></h2></div><p className="section-intro">A focused portfolio of commerce, healthcare, and home-technology products — each one designed, engineered, and connected to a live experience.</p></div><div className="project-list">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} onOpenGallery={openGallery} />)}</div><div className="all-work-row"><span>15 public repositories on GitHub</span><a href="https://github.com/bassamdev711?tab=repositories" target="_blank" rel="noreferrer" className="text-link">View all repositories <ExternalLink size={15} /></a></div></section>

      <section id="contact" className="contact-section section-frame"><div className="contact-panel"><div className="contact-topline"><span>04 / Contact</span><span>Open to the right challenge</span></div><div className="contact-content"><p className="eyebrow"><span className="eyebrow-line" /> Start a conversation</p><h2>Have a complex idea?<br /><span>Let&apos;s give it shape.</span></h2><p>Whether you need a product from zero, a stronger technical foundation, or a second pair of eyes on a difficult system, I&apos;d be glad to hear what you&apos;re building.</p><a href="mailto:bassam.alhakim.dev@gmail.com" className="button button-light">bassam.alhakim.dev@gmail.com <ArrowUpRight size={17} /></a></div><div className="contact-links"><a href="https://github.com/bassamdev711" target="_blank" rel="noreferrer"><GithubMark size={17} /> GitHub</a><a href="https://www.linkedin.com/in/bassam-al-hakim-b4007a40b" target="_blank" rel="noreferrer"><BriefcaseBusiness size={17} /> LinkedIn</a><a href="tel:+967780500363"><Phone size={17} /> +967 780 500 363</a></div></div></section>
      <footer className="site-footer section-frame"><div className="footer-brand"><span className="brand-symbol">BA</span><span>© 2026 Bassam Alhakim</span></div><span>Designed, engineered, and shipped with intent.</span><a href="#top" className="footer-top">Back to top <ArrowUpRight size={15} /></a></footer>
      {activeGallery ? <ProjectGalleryModal project={activeGallery} activeIndex={activeImageIndex} onClose={closeGallery} onPrevious={() => setActiveImageIndex((current) => current === 0 ? activeGallery.gallery.length - 1 : current - 1)} onNext={() => setActiveImageIndex((current) => current === activeGallery.gallery.length - 1 ? 0 : current + 1)} onSelect={setActiveImageIndex} /> : null}
    </main>
  );
}

function ProjectCard({ project, index, onOpenGallery }: { project: (typeof projects)[number]; index: number; onOpenGallery: (project: (typeof projects)[number], imageIndex?: number) => void }) {
  return <motion.article className={`project-card project-${project.accent}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.65, delay: index * 0.06 }}><div className="project-visual"><Image src={project.image} alt={`${project.name} project preview`} fill sizes="(max-width: 900px) 100vw, 42vw" className="project-cover" /><div className="project-visual-scrim" /><span className="visual-label">CASE / {project.number}</span><div className="project-gallery" aria-label={`${project.name} additional previews`}>{project.gallery.slice(0, 3).map((image, imageIndex) => <button key={image} type="button" className="project-gallery-button" onClick={() => onOpenGallery(project, imageIndex)} aria-label={`Open ${project.name} screen ${imageIndex + 1}`}><Image src={image} alt="" width={92} height={72} className="project-gallery-image" /></button>)}</div></div><div className="project-details"><div className="project-topline"><span>{project.eyebrow}</span><span>{project.number}</span></div><h3>{project.name}</h3><p className="project-title">{project.title}</p><p className="project-description">{project.description}</p><p className="project-impact"><Check size={15} /> {project.impact}</p><button type="button" className="gallery-launch" onClick={() => onOpenGallery(project)}><Layers3 size={15} /> View all {project.gallery.length} screens</button>{project.name.includes("MATEEN") ? <div className="inline-gallery" aria-label={`${project.name} full image gallery`}>{project.gallery.map((image, imageIndex) => <a key={image} href={image} target="_blank" rel="noreferrer" className="inline-gallery-item"><Image src={image} alt={`${project.name} screen ${imageIndex + 1}`} width={576} height={1280} className="inline-gallery-photo" /></a>)}</div> : null}<div className="project-bottom"><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-links"><a href={project.live} target="_blank" rel="noreferrer" className="text-link">View project <ArrowUpRight size={15} /></a><a href={project.external} target="_blank" rel="noreferrer" aria-label={`View ${project.name} source on GitHub`}><GithubMark size={17} /></a></div></div></div></motion.article>;
}


function ProjectGalleryModal({ project, activeIndex, onClose, onPrevious, onNext, onSelect }: { project: (typeof projects)[number]; activeIndex: number; onClose: () => void; onPrevious: () => void; onNext: () => void; onSelect: (index: number) => void }) {
  const activeImage = project.gallery[activeIndex];
  return <div className="gallery-modal" role="dialog" aria-modal="true" aria-label={`${project.name} image gallery`} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><div className="gallery-modal-panel"><div className="gallery-modal-header"><div><span className="gallery-modal-kicker">{project.name} / Full gallery</span><h2>{project.gallery.length} product screens</h2></div><button type="button" className="gallery-close" onClick={onClose} aria-label="Close image gallery"><X size={20} /></button></div><div className="gallery-modal-stage"><button type="button" className="gallery-nav gallery-nav-previous" onClick={onPrevious} aria-label="Previous screen"><ChevronLeft size={22} /></button><div className="gallery-modal-image"><Image src={activeImage} alt={`${project.name} screen ${activeIndex + 1}`} fill sizes="(max-width: 700px) 88vw, 560px" className="gallery-modal-photo" priority /></div><button type="button" className="gallery-nav gallery-nav-next" onClick={onNext} aria-label="Next screen"><ChevronRight size={22} /></button></div><div className="gallery-modal-meta"><span>{String(activeIndex + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}</span><span>Use ← → to browse · Esc to close</span></div><div className="gallery-modal-thumbs" aria-label="Gallery thumbnails">{project.gallery.map((image, imageIndex) => <button type="button" key={image} className={`gallery-thumb ${activeIndex === imageIndex ? "is-active" : ""}`} onClick={() => onSelect(imageIndex)} aria-label={`Show ${project.name} screen ${imageIndex + 1}`} aria-current={activeIndex === imageIndex ? "true" : undefined}><Image src={image} alt="" fill sizes="64px" className="gallery-thumb-image" /></button>)}</div></div></div>;
}
