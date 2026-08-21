"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, Download, Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type TouchEvent } from "react";
import type { PortfolioProject } from "@/lib/portfolio-data";

export function GithubMark({ size = 17 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>;
}

export function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <header className="site-header site-header-fixed">
    <a href="#top" className="brand-mark" onClick={closeMenu} aria-label="Bassam Alhakim home"><span className="brand-symbol">BA</span><span className="brand-copy">Bassam Alhakim<span>/</span></span></a>
    <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
      <a href="#work" onClick={closeMenu}>Selected work</a><a href="#approach" onClick={closeMenu}>Approach</a><a href="#about" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Contact</a>
    </nav>
    <div className="header-actions"><a href="mailto:bassam.alhakim.dev@gmail.com" className="header-availability"><span className="status-dot" /> Available for select work</a><a href="/Bassam_Alhakim_Systems_Engineer_CV.pdf" download className="header-cv-button"><Download size={14} /> Download CV</a><button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation menu" aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
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

export function ProjectGallery({ project, featured = false }: { project: PortfolioProject; featured?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const activeImage = project.gallery[activeIndex];
  const goPrevious = () => setActiveIndex((current) => current === 0 ? project.gallery.length - 1 : current - 1);
  const goNext = () => setActiveIndex((current) => current === project.gallery.length - 1 ? 0 : current + 1);
  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStart === null) return;
    const distance = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(distance) > 45) distance < 0 ? goNext() : goPrevious();
    setTouchStart(null);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowLeft") goPrevious();
      if (event.key === "ArrowRight") goNext();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", handleKeyDown); };
  }, [isOpen]);

  if (!featured) return <>
    <div className="project-gallery-preview"><button type="button" className="project-gallery-preview-image" onClick={() => setIsOpen(true)} aria-label={`Open the full ${project.name} gallery`}><Image src={project.image} alt={`${project.name} gallery preview`} fill sizes="(max-width: 900px) 100vw, 42vw" className={/MATEEN|Smart Meter|WiFi Monitor Pro/.test(project.name) ? "project-cover-contain" : "project-gallery-preview-photo"} /></button><div className="project-gallery-preview-meta"><span><span className="gallery-strip-kicker">Gallery</span><strong>{String(project.gallery.length).padStart(2, "0")} screens</strong></span><button type="button" className="gallery-open-link" onClick={() => setIsOpen(true)}>View full gallery <ArrowUpRight size={14} /></button></div></div>
    {isOpen ? <GalleryModal project={project} activeIndex={activeIndex} onClose={() => setIsOpen(false)} onPrevious={goPrevious} onNext={goNext} onSelect={setActiveIndex} /> : null}
  </>;

  return <>
    <section className="project-gallery-strip" aria-label={`${project.name} gallery`}>
      <div className="project-gallery-strip-head"><div><span className="gallery-strip-kicker">Project gallery</span><span className="gallery-strip-count" aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}</span></div><button type="button" className="gallery-open-link" onClick={() => setIsOpen(true)}>Open full gallery <ArrowUpRight size={14} /></button></div>
      <div className="project-slider" onTouchStart={(event) => setTouchStart(event.touches[0].clientX)} onTouchEnd={handleTouchEnd}>
        <button type="button" className="project-slider-nav project-slider-prev" onClick={goPrevious} aria-label="Previous project screen"><ChevronLeft size={18} /></button>
        <button type="button" className="project-slider-image-button" onClick={() => setIsOpen(true)} aria-label={`Open project screen ${activeIndex + 1} in full gallery`}><Image src={activeImage} alt={`${project.name} screen ${activeIndex + 1}`} fill sizes="(max-width: 900px) 80vw, 360px" className="project-slider-image" loading="lazy" /></button>
        <button type="button" className="project-slider-nav project-slider-next" onClick={goNext} aria-label="Next project screen"><ChevronRight size={18} /></button>
      </div>
      <div className="project-slider-thumbs" role="tablist" aria-label="Project screen thumbnails">{project.gallery.map((image, imageIndex) => <button type="button" key={image} role="tab" aria-selected={activeIndex === imageIndex} className={`project-slider-thumb ${activeIndex === imageIndex ? "is-active" : ""}`} onClick={() => setActiveIndex(imageIndex)} aria-label={`Show project screen ${imageIndex + 1}`}><Image src={image} alt="" fill sizes="56px" className="project-slider-thumb-image" loading="lazy" /></button>)}</div>
    </section>
    {isOpen ? <GalleryModal project={project} activeIndex={activeIndex} onClose={() => setIsOpen(false)} onPrevious={goPrevious} onNext={goNext} onSelect={setActiveIndex} /> : null}
  </>;
}

function GalleryModal({ project, activeIndex, onClose, onPrevious, onNext, onSelect }: { project: PortfolioProject; activeIndex: number; onClose: () => void; onPrevious: () => void; onNext: () => void; onSelect: (index: number) => void }) {
  const activeImage = project.gallery[activeIndex];
  return <div className="gallery-modal" role="dialog" aria-modal="true" aria-label={`${project.name} image gallery`} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><div className="gallery-modal-panel"><div className="gallery-modal-header"><div><span className="gallery-modal-kicker">{project.name} / Full gallery</span><h2>{project.gallery.length} project screens</h2></div><button type="button" className="gallery-close" onClick={onClose} aria-label="Close image gallery"><X size={20} /></button></div><div className="gallery-modal-stage"><button type="button" className="gallery-nav gallery-nav-previous" onClick={onPrevious} aria-label="Previous screen"><ChevronLeft size={22} /></button><div className="gallery-modal-image"><Image src={activeImage} alt={`${project.name} screen ${activeIndex + 1}`} fill sizes="(max-width: 700px) 88vw, 560px" className="gallery-modal-photo" priority /></div><button type="button" className="gallery-nav gallery-nav-next" onClick={onNext} aria-label="Next screen"><ChevronRight size={22} /></button></div><div className="gallery-modal-meta"><span>{String(activeIndex + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}</span><span>Use ← → to browse · Esc to close</span></div><div className="gallery-modal-thumbs" aria-label="Gallery thumbnails">{project.gallery.map((image, imageIndex) => <button type="button" key={image} className={`gallery-thumb ${activeIndex === imageIndex ? "is-active" : ""}`} onClick={() => onSelect(imageIndex)} aria-label={`Show ${project.name} screen ${imageIndex + 1}`} aria-current={activeIndex === imageIndex ? "true" : undefined}><Image src={image} alt="" fill sizes="64px" className="gallery-thumb-image" loading="lazy" /></button>)}</div></div></div>;
}
