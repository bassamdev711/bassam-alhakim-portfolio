import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays } from "lucide-react";
import { engagementLabel, formatProjectDateRange, getDictionary, getLocale, getLocalizedProject, locales, localeConfig, type Locale } from "@/lib/i18n";
import { projects, type PortfolioProject } from "@/lib/portfolio-data";

const slugByName: Record<string, string> = {
  "Restaurant ERP / إدارة المطعم": "restaurant-erp",
  "ESP32 Smart Meter / العداد الذكي": "esp32-smart-meter",
  "WiFi Monitor Pro / مراقب WiFi": "wifi-monitor-pro",
  "TIF / طيف": "tif",
  "House of Spices / بيت البهارات": "house-of-spices",
  "ATHR / أثر": "athr",
  "ORVÉN / أورفن": "orven",
  "TAQA HOME / طاقة هوم": "taqa-home",
  "Dr. Layan Clinic / عيادة د. ليان": "dr-layan-clinic",
  "MATEEN / متين": "maten",
};

function findProject(slug: string) {
  return projects.find((project) => slugByName[project.name] === slug);
}

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((project) => ({ locale, slug: slugByName[project.name] })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = getLocale(rawLocale);
  const project = findProject(slug);
  if (!project) return {};
  const localized = getLocalizedProject(project, locale);
  const dictionary = getDictionary(locale);
  const path = `/${locale}/projects/${slug}`;
  return {
    title: `${localized.name} — ${localized.title}`,
    description: `${localized.description} ${locale === "ar" ? "من تنفيذ بسام الحكيم." : "Built by Bassam Alhakim."}`,
    keywords: [localized.name, ...localized.stack, "Bassam Alhakim", "software engineering project"],
    alternates: { canonical: path, languages: { "ar-SA": `/ar/projects/${slug}`, "en-US": `/en/projects/${slug}` } },
    openGraph: {
      title: `${localized.name} — Bassam Alhakim`,
      description: localized.description,
      type: "article",
      url: `https://bassam-alhakim-portfolio.vercel.app${path}`,
      locale: localeConfig[locale].ogLocale,
      images: [{ url: localized.image, alt: `${localized.name} project preview` }],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  const locale = getLocale(rawLocale);
  const project = findProject(slug);
  if (!project) notFound();
  const localized = getLocalizedProject(project, locale);
  const d = getDictionary(locale).detail;
  const dateRange = formatProjectDateRange(localized.startDate, localized.endDate, locale);
  const isArabic = locale === "ar";
  const otherLocale: Locale = isArabic ? "en" : "ar";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `https://bassam-alhakim-portfolio.vercel.app/${locale}/projects/${slug}#project`,
    name: localized.name,
    headline: localized.title,
    description: localized.description,
    url: `https://bassam-alhakim-portfolio.vercel.app/${locale}/projects/${slug}`,
    image: [`https://bassam-alhakim-portfolio.vercel.app${localized.image}`],
    creator: { "@id": `https://bassam-alhakim-portfolio.vercel.app/${locale}#person` },
    keywords: localized.stack.join(", "),
    inLanguage: localeConfig[locale].hreflang,
  };

  return <main className="project-detail-page" style={{ "--project-accent": accentFor(project) } as CSSProperties}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <header className="project-detail-header"><Link href={`/${locale}#work`} className="project-detail-back">{isArabic ? <ArrowRight size={16} /> : <ArrowLeft size={16} />} {d.backToWork}</Link><div className="project-detail-header-actions"><span>{d.caseStudy}</span><Link href={`/${otherLocale}/projects/${slug}`} className="language-switch">{isArabic ? "English" : "العربية"}</Link></div></header>
    <section className="project-detail-hero"><p className="project-detail-eyebrow">{localized.eyebrow}</p><div className="project-meta project-detail-meta"><span className="project-meta-period">{dateRange ? <><CalendarDays size={14} aria-hidden="true" /> <span>{dateRange}</span></> : null}</span><span className="project-meta-type">{engagementLabel(localized.engagement, locale)}</span></div><h1>{localized.name}</h1><p className="project-detail-title">{localized.title}</p><p className="project-detail-description">{localized.description}</p><div className="project-detail-actions">{localized.live ? <a href={localized.live} target="_blank" rel="noreferrer" className="project-detail-button project-detail-button-primary">{d.visitLive} <ArrowUpRight size={16} /></a> : null}<a href={localized.external} target="_blank" rel="noreferrer" className="project-detail-button">{d.viewSource}</a></div></section>
    <section className="project-detail-media" aria-label={`${localized.name} ${d.projectImages}`}><div className="project-detail-hero-image"><Image src={localized.image} alt={`${localized.name} project hero`} fill priority sizes="(max-width: 900px) 100vw, 1100px" /></div><div className="project-detail-gallery">{localized.gallery.map((image, index) => <figure key={image}><Image src={image} alt={`${localized.name} ${index + 1}`} fill loading="lazy" sizes="(max-width: 900px) 100vw, 33vw" /><figcaption>{String(index + 1).padStart(2, "0")} / {localized.gallery.length}</figcaption></figure>)}</div></section>
    <section className="project-detail-stack"><span>{d.technology}</span><div>{localized.stack.map((item) => <strong key={item}>{item}</strong>)}</div></section>
    <footer className="project-detail-footer"><Link href={`/${locale}#work`}>{d.backToPortfolio}</Link><span>{d.builtWithIntent}</span></footer>
  </main>;
}

function accentFor(project: PortfolioProject) {
  const accents: Record<string, string> = { blue: "#60a5fa", cyan: "#22d3ee", violet: "#a78bfa", amber: "#fbbf24", orange: "#fb923c", rose: "#fb7185" };
  return accents[project.accent] ?? "#7fa9ff";
}
