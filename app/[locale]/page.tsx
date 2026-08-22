import Image from "next/image";
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, CalendarDays, Check, ChevronRight, Code2, Download, ExternalLink, Network, Phone, Server } from "lucide-react";
import { GithubMark, PortfolioHeader } from "@/components/portfolio-interactive";
import { ProjectGallery } from "@/components/project-gallery";
import { engagementLabel, formatProjectDateRange, getDictionary, getLocale, getLocalizedProject, type Locale } from "@/lib/i18n";
import { projects, technologies, type PortfolioProject } from "@/lib/portfolio-data";

function RichText({ value }: { value: string }) {
  const [before, highlight, after] = value.split(/<highlight>|<\/highlight>/);
  return <>{before}<span>{highlight}</span>{after}</>;
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = getLocale(rawLocale);
  const d = getDictionary(locale).home;
  const localizedProjects = projects.map((project) => getLocalizedProject(project, locale));

  return <main className="site-shell">
    <PortfolioHeader locale={locale} />
    <section id="top" className="hero-section section-frame">
      <div className="hero-grid-line" />
      <div className="hero-content">
        <p className="eyebrow"><span className="eyebrow-line" /> {d.eyebrow}</p>
        <p className="hero-founder-note">{d.founderNote}</p>
        <h1><RichText value={d.heroTitle} /></h1>
        <p className="hero-lead">{d.heroLead}</p>
        <div className="hero-actions"><a href="#work" className="button button-primary">{d.exploreWork} <ArrowDown size={16} /></a><a href="/Bassam_Alhakim_Systems_Engineer_CV.pdf" download className="button button-light"><Download size={16} /> {d.downloadResume}</a></div>
        <div className="hero-proof"><div><strong>10</strong><span>{d.proof[0]}</span></div><div><strong>15+</strong><span>{d.proof[1]}</span></div><div><strong>7</strong><span>{d.proof[2]}</span></div></div>
      </div>
      <div className="hero-portrait-wrap"><div className="portrait-card"><div className="portrait-meta"><span>BASSAM ALHAKIM</span><span>SYSTEMS ENGINEER</span></div><div className="portrait-image"><Image src="/developer-hero-576.webp" alt={d.portraitAlt} fill priority fetchPriority="high" unoptimized sizes="(max-width: 900px) 82vw, 420px" className="object-cover object-top" /></div><div className="portrait-footer"><span>{d.portraitLocation}</span><span>{d.portraitDiscipline}</span></div></div></div>
      <div className="hero-index"><span>{d.scrollToExplore}</span><ArrowDown size={16} /></div>
    </section>
    <section id="about" className="manifesto-section section-frame"><div className="section-kicker"><span>01</span><span>{d.aboutKicker}</span></div><div className="manifesto-layout"><h2><RichText value={d.aboutTitle} /></h2><div className="manifesto-copy">{d.aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<a href="#contact" className="text-link">{d.aboutLink} <ArrowUpRight size={15} /></a></div></div></section>
    <section id="approach" className="approach-section section-frame"><div className="section-kicker"><span>02</span><span>{d.approachKicker}</span></div><div className="section-heading-row"><div><p className="eyebrow">{d.approachEyebrow}</p><h2><RichText value={d.approachTitle} /></h2></div><p className="section-intro">{d.approachIntro}</p></div><div className="capability-grid">{[[Network, d.expertise[0]], [Code2, d.expertise[1]], [Server, d.expertise[2]]].map(([Icon, capability], index) => { const IconComponent = Icon as typeof Network; const [title, , description] = capability as readonly string[]; return <article key={title} className="capability-card"><span className="card-number">0{index + 1}</span><IconComponent size={23} strokeWidth={1.5} /><h3>{title}</h3><p>{description}</p><span className="card-arrow"><ChevronRight size={16} /></span></article>; })}</div><div className="expertise-panel"><div className="expertise-panel-heading"><span className="tech-label">{d.coreTechnologies}</span><span className="expertise-note">{d.expertiseNote}</span></div><div className="expertise-grid">{d.expertise.map(([label, stack, description]) => <div key={label}><span className="expertise-group-label">{label}</span><strong>{stack}</strong><small>{description}</small></div>)}</div></div><div className="tech-strip"><span className="tech-label">{d.workingToolkit}</span><div className="tech-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div></section>
    <section id="work" className="work-section section-frame"><div className="section-kicker"><span>03</span><span>{d.workKicker}</span></div><div className="section-heading-row work-heading"><div><p className="eyebrow">{d.workEyebrow}</p><h2><RichText value={d.workTitle} /></h2></div><p className="section-intro">{d.workIntro}</p></div><div className="project-list">{localizedProjects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} locale={locale} />)}</div><div className="all-work-row"><span>{d.repositories}</span><a href="https://github.com/bassamdev711?tab=repositories" target="_blank" rel="noreferrer" className="text-link">{d.viewRepositories} <ExternalLink size={15} /></a></div></section>
    <OrasoftSection locale={locale} />
    <section id="contact" className="contact-section section-frame"><div className="contact-panel"><div className="contact-topline"><span>{d.contactLabel}</span><span>{d.contactAvailability}</span></div><div className="contact-content"><p className="eyebrow"><span className="eyebrow-line" /> {d.contactEyebrow}</p><h2><RichText value={d.contactTitle} /></h2><p>{d.contactDescription}</p><a href="mailto:bassam.alhakim.dev@gmail.com" className="button button-light">{d.contactEmailCta} <ArrowUpRight size={17} /></a></div><div className="contact-links"><a href="https://github.com/bassamdev711" target="_blank" rel="noreferrer"><GithubMark size={17} /> GitHub</a><a href="https://www.linkedin.com/in/bassam-al-hakim-b4007a40b" target="_blank" rel="noreferrer"><BriefcaseBusiness size={17} /> LinkedIn</a><a href="tel:+967780500363"><Phone size={17} /> +967 780 500 363</a></div></div></section>
    <footer className="site-footer section-frame"><div className="footer-brand"><span className="brand-symbol">BA</span><span>© 2026 Bassam Alhakim</span></div><span>{d.footerDesigned}</span><a href="#top" className="footer-top">{d.backToTop} <ArrowUpRight size={15} /></a></footer>
  </main>;
}

function ProjectCard({ project, index, locale }: { project: PortfolioProject; index: number; locale: Locale }) {
  const d = getDictionary(locale).gallery;
  const dateRange = formatProjectDateRange(project.startDate, project.endDate, locale);
  const isFeatured = index < 2;
  return <article className={`project-card ${isFeatured ? "project-card-featured" : "project-card-standard"} project-${project.accent}`}><div className="project-details"><div className="project-topline"><span>{project.eyebrow}</span><span>{project.number}</span></div><div className="project-meta"><span className="project-meta-period">{dateRange ? <><CalendarDays size={13} aria-hidden="true" /> <span>{dateRange}</span></> : null}</span><span className="project-meta-type">{engagementLabel(project.engagement, locale)}</span></div><h3>{project.name}</h3><p className="project-title">{project.title}</p><p className="project-description">{project.description}</p><p className="project-impact"><Check size={15} /> {project.impact}</p><ProjectGallery project={project} featured={isFeatured} locale={locale} dictionary={d} /><div className="project-bottom"><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-links"><a href={project.live} target="_blank" rel="noreferrer" className="text-link">{locale === "ar" ? "عرض المشروع" : "View project"} <ArrowUpRight size={15} /></a><a href={project.external} target="_blank" rel="noreferrer" aria-label={`${locale === "ar" ? "عرض مصدر" : "View"} ${project.name} ${locale === "ar" ? "على GitHub" : "source on GitHub"}`}><GithubMark size={17} /></a></div></div></div></article>;
}

function OrasoftSection({ locale }: { locale: Locale }) {
  const d = getDictionary(locale).home;
  const images = [
    { src: "/orasoft/website-importance-comparison.webp", alt: locale === "ar" ? "مقارنة مرئية لأهمية حضور Orasoft الرقمي" : "Orasoft website presence comparison visual" },
    { src: "/orasoft/brand-message.webp", alt: locale === "ar" ? "رسالة علامة Orasoft ومنتجها الرقمي" : "Orasoft brand message and digital product visual" },
    { src: "/orasoft/services-promo.webp", alt: locale === "ar" ? "خدمات Orasoft وتجارب الويب والهاتف" : "Orasoft services visual showing web and mobile experiences" },
    { src: "/orasoft/phone-promo.webp", alt: locale === "ar" ? "تجربة منتج Orasoft على الهاتف" : "Orasoft mobile product experience visual" },
    { src: "/orasoft/laptop-hero.webp", alt: locale === "ar" ? "موقع Orasoft معروض على حاسوب محمول" : "Orasoft website shown on a laptop" },
    { src: "/orasoft/future-business.webp", alt: locale === "ar" ? "تصور الأعمال الرقمية المستقبلية لدى Orasoft" : "Orasoft digital business visual" },
  ];
  return <section id="orasoft" className="orasoft-section section-frame"><div className="section-kicker"><span>04</span><span>{d.orasoftKicker}</span></div><div className="orasoft-intro"><div><p className="eyebrow"><span className="eyebrow-line" /> {d.orasoftEyebrow}</p><h2><RichText value={d.orasoftTitle} /></h2></div><div className="orasoft-copy"><p>{d.orasoftDescription}</p><p className="orasoft-services-line">{d.orasoftServices}</p><div className="orasoft-actions"><a href="https://orasoft.vercel.app/" target="_blank" rel="noreferrer" className="button button-primary">{d.visitOrasoft} <ExternalLink size={15} /></a><a href="https://orasoft.vercel.app/work" target="_blank" rel="noreferrer" className="button button-outline">{d.viewCompanyWork} <ArrowUpRight size={15} /></a></div></div></div><div className="orasoft-process">{d.orasoftProcess.map((step) => <span key={step}>{step}</span>)}</div><div className="orasoft-gallery" aria-label={locale === "ar" ? "معرض صور Orasoft" : "Orasoft visual gallery"}>{images.map((image, index) => <a key={image.src} href={image.src} target="_blank" rel="noreferrer" className={`orasoft-image orasoft-image-${index + 1}`} aria-label={`${locale === "ar" ? "فتح الصورة بالحجم الكامل" : "Open full-size image"}: ${image.alt}`}><Image src={image.src} alt={image.alt} fill loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw" /></a>)}</div></section>;
}
