"use client";

import Link from "next/link";
import { Download, Languages, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";

export function GithubMark({ size = 17 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>;
}

export function PortfolioHeader({ locale }: { locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const d = getDictionary(locale);
  const targetLocale = locale === "ar" ? "en" : "ar";
  return <header className="site-header site-header-fixed">
    <a href="#top" className="brand-mark" onClick={closeMenu} aria-label={d.header.home}><span className="brand-symbol">BA</span><span className="brand-copy">Bassam Alhakim<span>/</span></span></a>
    <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label={locale === "ar" ? "التنقل الرئيسي" : "Primary navigation"}>
      <a href="#work" onClick={closeMenu}>{d.nav.selectedWork}</a><a href="#orasoft" onClick={closeMenu}>{d.nav.orasoft}</a><a href="#approach" onClick={closeMenu}>{d.nav.approach}</a><a href="#about" onClick={closeMenu}>{d.nav.about}</a><a href="#contact" onClick={closeMenu}>{d.nav.contact}</a>
    </nav>
    <div className="header-actions"><Link href={`/${targetLocale}`} className="language-switch" aria-label={`${d.language.label}: ${d.language.switchTo}`}><Languages size={14} /><span>{d.language.switchTo}</span></Link><a href="mailto:bassam.alhakim.dev@gmail.com" className="header-availability"><span className="status-dot" /> {d.header.availability}</a><a href="/Bassam_Alhakim_Systems_Engineer_CV.pdf" download className="header-cv-button"><Download size={14} /> {d.header.downloadCv}</a><button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? d.header.closeMenu : d.header.menu} aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
  </header>;
}

export function ScrollProgress() {
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
    return () => { window.removeEventListener("scroll", updateProgress); window.removeEventListener("resize", updateProgress); };
  }, []);
  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}
