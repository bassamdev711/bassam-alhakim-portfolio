import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const projects = {
  "esp32-smart-meter": {
    name: "ESP32 Smart Meter",
    eyebrow: "IoT / energy monitoring",
    title: "A live electrical telemetry system",
    description: "An IoT system in which an ESP32 reads voltage and current, calculates power and energy, sends measurements to a PHP/MySQL backend, and exposes a web dashboard for live monitoring, alerts, reports, and remote relay control.",
    stack: ["ESP32", "Arduino C++", "PHP", "MySQL", "JavaScript", "Chart.js"],
    hero: "/portfolio/esp32/esp32-02.webp",
    gallery: ["/portfolio/esp32/esp32-01.webp", "/portfolio/esp32/esp32-03.webp", "/portfolio/esp32/esp32-04.webp"],
    live: "https://github.com/bassamdev711/esp32-smart-meter",
    github: "https://github.com/bassamdev711/esp32-smart-meter",
    accent: "#22d3ee",
  },
  athr: {
    name: "ATHR / أثر",
    eyebrow: "Fashion commerce / editorial",
    title: "A quieter way to find the right step",
    description: "An editorial footwear store built around material, movement, and confident choice. The interface gives every collection room to breathe while supporting product discovery across formal, casual, and performance footwear.",
    stack: ["Next.js 16", "TypeScript", "Prisma", "Framer Motion", "Tailwind CSS v4"],
    hero: "/portfolio/hatha/01-athr-aura-hero-real.webp",
    gallery: ["/portfolio/hatha/02-athr-aura-mobile-real.webp", "/portfolio/hatha/03-athr-aura-laptop-real.webp", "/portfolio/hatha/06-aura-athr-admin-hero-real.webp"],
    live: "https://hitha711.vercel.app/",
    github: "https://github.com/bassamdev711/hitha",
    accent: "#67e8f9",
  },
  orven: {
    name: "ORVÉN",
    eyebrow: "Luxury retail / timepieces",
    title: "Time, in a rarer form",
    description: "A considered watch storefront shaped around restraint, precision, and collection. The system pairs a dark editorial identity with curated product lines and commerce control-room surfaces.",
    stack: ["Next.js 16", "TypeScript", "Prisma", "GSAP", "Vercel Blob"],
    hero: "/portfolio/saah/01-ora-soft-orven-identity.webp",
    gallery: ["/portfolio/saah/03-ora-soft-orven-commerce.webp", "/portfolio/saah/04-ora-soft-orven-control-room.webp", "/portfolio/saah/05-ora-soft-orven-analytics.webp"],
    live: "https://saahh.vercel.app/",
    github: "https://github.com/bassamdev711/saahh",
    accent: "#a78bfa",
  },
  "taqa-home": {
    name: "TAQA HOME / طاقة هوم",
    eyebrow: "Home technology / energy",
    title: "A smarter operating layer for the home",
    description: "An Arabic-first commerce platform for appliances, smart tools, solar energy, storage, and water heating. It connects clear product specifications with consultation, scalable catalogs, checkout, administration, and after-sales confidence.",
    stack: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Framer Motion"],
    hero: "/portfolio/taqt/aura-soft-taqa-home-real-01-hero.webp",
    gallery: ["/portfolio/taqt/aura-soft-taqa-home-real-02-mobile-story.webp", "/portfolio/taqt/aura-soft-taqa-home-real-05-catalog-post.webp", "/portfolio/taqt/aura-soft-taqa-admin-products-landscape.webp"],
    live: "https://taqa-gamma.vercel.app/",
    github: "https://github.com/bassamdev711/taqa",
    accent: "#60a5fa",
  },
  "dr-layan-clinic": {
    name: "Dr. Layan Clinic",
    eyebrow: "Healthcare / patient experience",
    title: "Precision, with a human rhythm",
    description: "A calm digital front door for cosmetic and restorative dentistry. The experience makes smile design, digital diagnosis, before-and-after transformation, and the first consultation feel clear, personal, and reassuring.",
    stack: ["Next.js 16", "TypeScript", "PostgreSQL", "Zod", "Vercel Blob"],
    hero: "/portfolio/doctor/aura_soft_design_01.webp",
    gallery: ["/portfolio/doctor/aura_soft_design_02.webp", "/portfolio/doctor/aura_soft_design_03.webp", "/portfolio/doctor/aura_soft_design_05.webp"],
    live: "https://doctor-beta-dun.vercel.app/",
    github: "https://github.com/bassamdev711/doctor",
    accent: "#fb7185",
  },
  maten: {
    name: "MATEEN / متين",
    eyebrow: "Offline-first retail / Flutter",
    title: "A dependable operating layer for the neighborhood store",
    description: "A Flutter-based store management system built to keep essential work moving without a constant internet connection. The app brings inventory, point of sale, purchasing, customers, suppliers, expenses, reports, and Arabic-first workflows into one focused operating surface.",
    stack: ["Flutter", "Dart", "Riverpod", "Drift / SQLite", "GoRouter", "PDF + Excel"],
    hero: "/portfolio/maten/maten-01.webp",
    gallery: ["/portfolio/maten/maten-02.webp", "/portfolio/maten/maten-03.webp", "/portfolio/maten/maten-04.webp"],
    live: "https://github.com/bassamdev711/baqkah",
    github: "https://github.com/bassamdev711/baqkah",
    accent: "#22d3ee",
  },
} as const;

type ProjectSlug = keyof typeof projects;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];
  if (!project) return {};

  return {
    title: `${project.name} — ${project.title}`,
    description: `${project.description} Built by Bassam Alhakim.`,
    keywords: [project.name, ...project.stack, "Bassam Alhakim", "software engineering project"],
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.name} — Bassam Alhakim`,
      description: project.description,
      type: "article",
      url: `/projects/${slug}`,
      images: [{ url: project.hero, alt: `${project.name} project preview` }],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as ProjectSlug];
  if (!project) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `https://bassam-alhakim-portfolio.vercel.app/projects/${slug}#project`,
    name: project.name,
    headline: project.title,
    description: project.description,
    url: `https://bassam-alhakim-portfolio.vercel.app/projects/${slug}`,
    image: [`https://bassam-alhakim-portfolio.vercel.app${project.hero}`],
    creator: { "@id": "https://bassam-alhakim-portfolio.vercel.app/#person" },
    keywords: project.stack.join(", "),
  };

  return (
    <main className="project-detail-page" style={{ "--project-accent": project.accent } as CSSProperties}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="project-detail-header">
        <Link href="/#work" className="project-detail-back"><ArrowLeft size={16} /> Back to selected work</Link>
        <span>BASSAM ALHAKIM / CASE STUDY</span>
      </header>
      <section className="project-detail-hero">
        <p className="project-detail-eyebrow">{project.eyebrow}</p>
        <h1>{project.name}</h1>
        <p className="project-detail-title">{project.title}</p>
        <p className="project-detail-description">{project.description}</p>
        <div className="project-detail-actions">
          {project.live ? <a href={project.live} target="_blank" rel="noreferrer" className="project-detail-button project-detail-button-primary">Visit live product <ArrowUpRight size={16} /></a> : null}
          <a href={project.github} target="_blank" rel="noreferrer" className="project-detail-button">GitHub · View source</a>
        </div>
      </section>
      <section className="project-detail-media" aria-label={`${project.name} project images`}>
        <div className="project-detail-hero-image"><Image src={project.hero} alt={`${project.name} project hero`} fill priority sizes="(max-width: 900px) 100vw, 1100px" /></div>
        <div className="project-detail-gallery">{project.gallery.map((image, index) => <figure key={image}><Image src={image} alt={`${project.name} screen ${index + 1}`} fill loading="lazy" sizes="(max-width: 900px) 100vw, 33vw" /><figcaption>{String(index + 1).padStart(2, "0")} / {project.gallery.length}</figcaption></figure>)}</div>
      </section>
      <section className="project-detail-stack"><span>TECHNOLOGY</span><div>{project.stack.map((item) => <strong key={item}>{item}</strong>)}</div></section>
      <footer className="project-detail-footer"><Link href="/#work">Back to portfolio</Link><span>Built with intent by Bassam Alhakim.</span></footer>
    </main>
  );
}
