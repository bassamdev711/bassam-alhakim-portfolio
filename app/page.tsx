"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Layers3,
  BriefcaseBusiness,
  Menu,
  Network,
  Phone,
  Server,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type TouchEvent } from "react";

function GithubMark({ size = 17 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>;
}

const projectImages = (prefix: string, count: number) => Array.from({ length: count }, (_, index) => `/portfolio/${prefix}/${prefix}-${String(index + 1).padStart(2, "0")}.webp`);

const projects = [
  {
    number: "01",
    eyebrow: "Restaurant operations / ERP",
    title: "The operating system behind a serious restaurant business",
    name: "Restaurant ERP / إدارة المطعم",
    description: "A Laravel-powered restaurant management platform that connects point of sale, inventory, procurement, kitchen workflows, staff operations, reporting, and multi-surface control in one dependable system.",
    impact: "Point of sale · Inventory and procurement · Kitchen workflows · Reports and printing",
    stack: ["Laravel", "PHP", "Filament", "MySQL", "Tailwind CSS", "Laravel Reverb"],
    image: "/portfolio/restaurant/restaurant-01.webp",
    gallery: projectImages("restaurant", 26),
    live: "https://github.com/bassamdev711/restaurant-system",
    external: "https://github.com/bassamdev711/restaurant-system",
    accent: "blue",
  },
  {
    number: "02",
    eyebrow: "IoT / energy monitoring",
    title: "A live electrical telemetry system",
    name: "ESP32 Smart Meter",
    description: "An IoT system in which an ESP32 reads voltage and current, calculates power and energy, sends measurements to a PHP/MySQL backend, and exposes a web dashboard for live monitoring, alerts, reports, and remote relay control.",
    impact: "Real-time measurements · REST telemetry · Remote relay control · Dashboard and reports",
    stack: ["ESP32", "Arduino C++", "PHP", "MySQL", "JavaScript", "Chart.js"],
    image: "/portfolio/esp32/esp32-02.webp",
    gallery: projectImages("esp32", 14),
    live: "https://github.com/bassamdev711/esp32-smart-meter",
    external: "https://github.com/bassamdev711/esp32-smart-meter",
    accent: "cyan",
  },
  {
    number: "03",
    eyebrow: "Systems / mobile utility",
    title: "A focused telemetry layer for Android",
    name: "WiFi Monitor Pro",
    description: "A Flutter and Kotlin-powered Android utility for monitoring per-app network consumption with a persistent foreground engine, local history, and security-focused overlays.",
    impact: "Per-app telemetry · Foreground service · Local history · Security overlay",
    stack: ["Flutter", "Kotlin Native", "Android SDK", "SQLite"],
    image: "/portfolio/wifi-monitor/wifi-monitor-06.webp",
    gallery: projectImages("wifi-monitor", 10),
    live: "https://github.com/bassamdev711/wifi-monitor-pro",
    external: "https://github.com/bassamdev711/wifi-monitor-pro",
    accent: "violet",
  },
  {
    number: "04",
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
    number: "05",
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
    number: "06",
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
    number: "07",
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
    number: "08",
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
    number: "09",
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
    number: "10",
    eyebrow: "Offline-first retail / Flutter",
    title: "A dependable operating layer for the neighborhood store",
    name: "MATEEN / متين",
    description: "A Flutter-based store management system built to keep essential work moving without a constant internet connection. The app brings inventory, point of sale, purchasing, customers, suppliers, expenses, reports, and Arabic-first workflows into one focused operating surface, with a LAN display for larger screens.",
    impact: "Offline-first workflows · Local SQLite persistence · Arabic retail operations · Mobile-to-LAN display",
    stack: ["Flutter", "Dart", "Riverpod", "Drift / SQLite", "GoRouter", "PDF + Excel"],
    image: "/portfolio/maten/maten-01.webp",
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

function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      progressRef.current?.style.setProperty("--scroll-progress", String(progress));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState<(typeof projects)[number] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
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
      <ScrollProgress />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="noise-layer" />
      <header className="site-header site-header-fixed">
        <a href="#top" className="brand-mark" onClick={closeMenu} aria-label="Bassam Alhakim home"><span className="brand-symbol">BA</span><span className="brand-copy">Bassam Alhakim<span>/</span></span></a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a><a href="#approach" onClick={closeMenu}>Approach</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="header-actions"><a href="mailto:bassam.alhakim.dev@gmail.com" className="header-availability"><span className="status-dot" /> Available for select work</a><a href="/Bassam_Alhakim_Systems_Engineer_CV.pdf" download className="header-cv-button"><Download size={14} /> Download CV</a><button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation menu" aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
      </header>

      <section id="top" className="hero-section section-frame">
        <div className="hero-grid-line" />
        <div className="hero-content">
          <p className="eyebrow"><span className="eyebrow-line" /> Software engineer · Product builder</p>
          <h1>I engineer the systems<span>people trust.</span></h1>
          <p className="hero-lead">I&apos;m Bassam Alhakim — a systems-minded full-stack engineer working across Laravel, Next.js, Flutter, IoT, data, and product experience. I turn complex operations into software that feels clear, capable, and built to last.</p>
          <div className="hero-actions"><a href="#work" className="button button-primary">Explore selected work <ArrowDown size={16} /></a><a href="/Bassam_Alhakim_Systems_Engineer_CV.pdf" download className="button button-light"><Download size={16} /> Download résumé</a></div><div className="hero-proof"><div><strong>10</strong><span>selected systems</span></div><div><strong>15+</strong><span>repositories</span></div><div><strong>7</strong><span>technology areas</span></div></div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-card"><div className="portrait-meta"><span>BASSAM ALHAKIM</span><span>SYSTEMS ENGINEER</span></div><div className="portrait-image"><Image src="/developer.jpg" alt="Bassam Alhakim, software engineer" fill priority sizes="(max-width: 900px) 82vw, 420px" className="object-cover object-top" /></div><div className="portrait-footer"><span>Yemen · Remote</span><span>Software systems</span></div></div>
        </div>
        <div className="hero-index"><span>Scroll to explore</span><ArrowDown size={16} /></div>
      </section>

      <section id="about" className="manifesto-section section-frame"><div className="section-kicker"><span>01</span><span>What I care about</span></div><div className="manifesto-layout"><h2>Good engineering should feel <em>inevitable.</em></h2><div className="manifesto-copy"><p>I work at the intersection of product thinking and software engineering. The goal is never to add complexity for its own sake; it is to make ambitious ideas easier to understand, operate, and grow.</p><p>From enterprise workflows to immersive commerce, I bring structure to the hard parts and taste to the visible ones.</p><a href="#contact" className="text-link">Let&apos;s make something considered <ArrowUpRight size={15} /></a></div></div></section>

      <section id="approach" className="approach-section section-frame"><div className="section-kicker"><span>02</span><span>Engineering range</span></div><div className="section-heading-row"><div><p className="eyebrow">The stack is only the beginning</p><h2>Depth across<br /><span>the whole build.</span></h2></div><p className="section-intro">From the first product decision to the last operational detail, I work across the layers that make software useful: interface, backend, data, deployment, and the systems around them.</p></div>          <div className="capability-grid">{capabilities.map((capability, index) => { const Icon = capability.icon; return <article key={capability.title} className="capability-card"><span className="card-number">0{index + 1}</span><Icon size={23} strokeWidth={1.5} /><h3>{capability.title}</h3><p>{capability.description}</p><span className="card-arrow"><ChevronRight size={16} /></span></article>; })}</div><div className="expertise-panel"><div className="expertise-panel-heading"><span className="tech-label">Core technologies</span><span className="expertise-note">Selected by the problem, not the trend</span></div><div className="expertise-grid"><div><span className="expertise-group-label">Product & web</span><strong>Next.js · React · TypeScript</strong><small>Commerce, dashboards, editorial systems, motion-led interfaces.</small></div><div><span className="expertise-group-label">Backend & data</span><strong>Laravel · PHP · Prisma · PostgreSQL</strong><small>Operational workflows, auth, APIs, relational data, admin surfaces.</small></div><div><span className="expertise-group-label">Mobile & edge</span><strong>Flutter · Dart · ESP32 · C++</strong><small>Offline-first apps, connected devices, telemetry, local persistence.</small></div><div><span className="expertise-group-label">Experience layer</span><strong>Three.js · Framer Motion · Tailwind</strong><small>High-signal art direction with speed, accessibility, and restraint.</small></div></div></div><div className="tech-strip"><span className="tech-label">Working toolkit</span><div className="tech-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></section>

      <section id="work" className="work-section section-frame"><div className="section-kicker"><span>03</span><span>Proof of work</span></div><div className="section-heading-row work-heading"><div><p className="eyebrow">Ten systems. One standard.</p><h2>Built for<br /><span>the real world.</span></h2></div><p className="section-intro">A selected body of commerce, healthcare, IoT, and store-technology products. Each case shows the thinking, tools, and operational depth behind the interface.</p></div><div className="project-list">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} onOpenGallery={openGallery} />)}</div><div className="all-work-row"><span>15 public repositories on GitHub</span><a href="https://github.com/bassamdev711?tab=repositories" target="_blank" rel="noreferrer" className="text-link">View all repositories <ExternalLink size={15} /></a></div></section>

      <section id="contact" className="contact-section section-frame"><div className="contact-panel"><div className="contact-topline"><span>04 / Contact</span><span>Open to the right challenge</span></div><div className="contact-content"><p className="eyebrow"><span className="eyebrow-line" /> Start a conversation</p><h2>Have a complex idea?<br /><span>Let&apos;s give it shape.</span></h2><p>Whether you need a product from zero, a stronger technical foundation, or a second pair of eyes on a difficult system, I&apos;d be glad to hear what you&apos;re building.</p><a href="mailto:bassam.alhakim.dev@gmail.com" className="button button-light">bassam.alhakim.dev@gmail.com <ArrowUpRight size={17} /></a></div><div className="contact-links"><a href="https://github.com/bassamdev711" target="_blank" rel="noreferrer"><GithubMark size={17} /> GitHub</a><a href="https://www.linkedin.com/in/bassam-al-hakim-b4007a40b" target="_blank" rel="noreferrer"><BriefcaseBusiness size={17} /> LinkedIn</a><a href="tel:+967780500363"><Phone size={17} /> +967 780 500 363</a></div></div></section>
      <footer className="site-footer section-frame"><div className="footer-brand"><span className="brand-symbol">BA</span><span>© 2026 Bassam Alhakim</span></div><span>Designed, engineered, and shipped with intent.</span><a href="#top" className="footer-top">Back to top <ArrowUpRight size={15} /></a></footer>
      {activeGallery ? <ProjectGalleryModal project={activeGallery} activeIndex={activeImageIndex} onClose={closeGallery} onPrevious={() => setActiveImageIndex((current) => current === 0 ? activeGallery.gallery.length - 1 : current - 1)} onNext={() => setActiveImageIndex((current) => current === activeGallery.gallery.length - 1 ? 0 : current + 1)} onSelect={setActiveImageIndex} /> : null}
    </main>
  );
}

function ProjectCard({ project, index, onOpenGallery }: { project: (typeof projects)[number]; index: number; onOpenGallery: (project: (typeof projects)[number], imageIndex?: number) => void }) {
  const isPortraitProject = /MATEEN|Smart Meter|WiFi Monitor Pro/.test(project.name);
  const isFeatured = index < 2;
  return <article className={`project-card ${isFeatured ? "project-card-featured" : "project-card-standard"} project-${project.accent}`}><div className="project-visual"><Image src={project.image} alt={`${project.name} project preview`} fill sizes="(max-width: 900px) 100vw, 42vw" className={`project-cover ${isPortraitProject ? "project-cover-contain" : ""}`} /><div className="project-visual-scrim" /><span className="visual-label">CASE / {project.number}</span></div><div className="project-details"><div className="project-topline"><span>{project.eyebrow}</span><span>{project.number}</span></div><h3>{project.name}</h3><p className="project-title">{project.title}</p><p className="project-description">{project.description}</p><p className="project-impact"><Check size={15} /> {project.impact}</p>{isFeatured ? <ProjectGalleryStrip project={project} onOpenGallery={onOpenGallery} /> : <ProjectGalleryPreview project={project} isPortraitProject={isPortraitProject} onOpenGallery={onOpenGallery} />}<div className="project-bottom"><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-links"><a href={project.live} target="_blank" rel="noreferrer" className="text-link">View project <ArrowUpRight size={15} /></a><a href={project.external} target="_blank" rel="noreferrer" aria-label={`View ${project.name} source on GitHub`}><GithubMark size={17} /></a></div></div></div></article>;
}

function ProjectGalleryPreview({ project, isPortraitProject, onOpenGallery }: { project: (typeof projects)[number]; isPortraitProject: boolean; onOpenGallery: (project: (typeof projects)[number], imageIndex?: number) => void }) {
  return <div className="project-gallery-preview"><button type="button" className="project-gallery-preview-image" onClick={() => onOpenGallery(project, 0)} aria-label={`Open the full ${project.name} gallery`}><Image src={project.image} alt={`${project.name} gallery preview`} fill sizes="(max-width: 900px) 100vw, 42vw" className={isPortraitProject ? "project-cover-contain" : "project-gallery-preview-photo"} /></button><div className="project-gallery-preview-meta"><span><span className="gallery-strip-kicker">Gallery</span><strong>{String(project.gallery.length).padStart(2, "0")} screens</strong></span><button type="button" className="gallery-open-link" onClick={() => onOpenGallery(project, 0)}>View full gallery <ArrowUpRight size={14} /></button></div></div>;
}


function ProjectGalleryStrip({ project, onOpenGallery }: { project: (typeof projects)[number]; onOpenGallery: (project: (typeof projects)[number], imageIndex?: number) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const activeImage = project.gallery[activeIndex];
  const goPrevious = () => setActiveIndex((current) => current === 0 ? project.gallery.length - 1 : current - 1);
  const goNext = () => setActiveIndex((current) => current === project.gallery.length - 1 ? 0 : current + 1);
  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStart === null) return;
    const distance = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(distance) > 45) distance < 0 ? goNext() : goPrevious();
    setTouchStart(null);
  };

  return <section className="project-gallery-strip" aria-label={`${project.name} gallery`}>
    <div className="project-gallery-strip-head"><div><span className="gallery-strip-kicker">Project gallery</span><span className="gallery-strip-count" aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}</span></div><button type="button" className="gallery-open-link" onClick={() => onOpenGallery(project, activeIndex)}>Open full gallery <ArrowUpRight size={14} /></button></div>
    <div className="project-slider" onTouchStart={(event) => setTouchStart(event.touches[0].clientX)} onTouchEnd={handleTouchEnd}>
      <button type="button" className="project-slider-nav project-slider-prev" onClick={goPrevious} aria-label="Previous project screen"><ChevronLeft size={18} /></button>
      <button type="button" className="project-slider-image-button" onClick={() => onOpenGallery(project, activeIndex)} aria-label={`Open project screen ${activeIndex + 1} in full gallery`}><Image src={activeImage} alt={`${project.name} screen ${activeIndex + 1}`} fill sizes="(max-width: 900px) 80vw, 360px" className="project-slider-image" loading="lazy" /></button>
      <button type="button" className="project-slider-nav project-slider-next" onClick={goNext} aria-label="Next project screen"><ChevronRight size={18} /></button>
    </div>
    <div className="project-slider-thumbs" role="tablist" aria-label="Project screen thumbnails">{project.gallery.map((image, imageIndex) => <button type="button" key={image} role="tab" aria-selected={activeIndex === imageIndex} className={`project-slider-thumb ${activeIndex === imageIndex ? "is-active" : ""}`} onClick={() => setActiveIndex(imageIndex)} aria-label={`Show project screen ${imageIndex + 1}`}><Image src={image} alt="" fill sizes="56px" className="project-slider-thumb-image" /></button>)}</div>
  </section>;
}

function ProjectGalleryModal({ project, activeIndex, onClose, onPrevious, onNext, onSelect }: { project: (typeof projects)[number]; activeIndex: number; onClose: () => void; onPrevious: () => void; onNext: () => void; onSelect: (index: number) => void }) {
  const activeImage = project.gallery[activeIndex];
  return <div className="gallery-modal" role="dialog" aria-modal="true" aria-label={`${project.name} image gallery`} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><div className="gallery-modal-panel"><div className="gallery-modal-header"><div><span className="gallery-modal-kicker">{project.name} / Full gallery</span><h2>{project.gallery.length} project screens</h2></div><button type="button" className="gallery-close" onClick={onClose} aria-label="Close image gallery"><X size={20} /></button></div><div className="gallery-modal-stage"><button type="button" className="gallery-nav gallery-nav-previous" onClick={onPrevious} aria-label="Previous screen"><ChevronLeft size={22} /></button><div className="gallery-modal-image"><Image src={activeImage} alt={`${project.name} screen ${activeIndex + 1}`} fill sizes="(max-width: 700px) 88vw, 560px" className="gallery-modal-photo" priority /></div><button type="button" className="gallery-nav gallery-nav-next" onClick={onNext} aria-label="Next screen"><ChevronRight size={22} /></button></div><div className="gallery-modal-meta"><span>{String(activeIndex + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}</span><span>Use ← → to browse · Esc to close</span></div><div className="gallery-modal-thumbs" aria-label="Gallery thumbnails">{project.gallery.map((image, imageIndex) => <button type="button" key={image} className={`gallery-thumb ${activeIndex === imageIndex ? "is-active" : ""}`} onClick={() => onSelect(imageIndex)} aria-label={`Show ${project.name} screen ${imageIndex + 1}`} aria-current={activeIndex === imageIndex ? "true" : undefined}><Image src={image} alt="" fill sizes="64px" className="gallery-thumb-image" /></button>)}</div></div></div>;
}
