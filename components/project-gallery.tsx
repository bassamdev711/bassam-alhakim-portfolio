"use client";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState, type MouseEvent, type TouchEvent } from "react";
import type { PortfolioProject } from "@/lib/portfolio-data";
import type { Dictionary, Locale } from "@/lib/i18n";

type GalleryDictionary = Dictionary["gallery"];

export function ProjectGallery({ project, featured = false, locale, dictionary }: { project: PortfolioProject; featured?: boolean; locale: Locale; dictionary: GalleryDictionary }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const activeImage = project.gallery[activeIndex];
  const thumbnailIndexes = Array.from(new Set([...Array(Math.min(8, project.gallery.length)).keys(), activeIndex]));
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
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!featured) return <>
    <div className="project-gallery-preview"><button type="button" className="project-gallery-preview-image" onClick={() => setIsOpen(true)} aria-label={`${dictionary.openFull}: ${project.name}`}><Image src={project.image} alt={`${project.name} ${dictionary.gallery}`} fill sizes="(max-width: 900px) 100vw, 42vw" className={/MATEEN|Smart Meter|WiFi Monitor Pro/.test(project.name) ? "project-cover-contain" : "project-gallery-preview-photo"} /></button><div className="project-gallery-preview-meta"><span><span className="gallery-strip-kicker">{dictionary.gallery}</span><strong>{String(project.gallery.length).padStart(2, "0")} {dictionary.screens}</strong></span><button type="button" className="gallery-open-link" onClick={() => setIsOpen(true)}>{dictionary.viewFull} <ArrowUpRight size={14} /></button></div></div>
    {isOpen ? <GalleryModal project={project} activeIndex={activeIndex} onClose={() => setIsOpen(false)} onPrevious={goPrevious} onNext={goNext} onSelect={setActiveIndex} dictionary={dictionary} /> : null}
  </>;

  return <>
    <section className="project-gallery-strip" aria-label={`${project.name} ${dictionary.gallery}`}>
      <div className="project-gallery-strip-head"><div><span className="gallery-strip-kicker">{dictionary.projectGallery}</span><span className="gallery-strip-count" aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}</span></div><button type="button" className="gallery-open-link" onClick={() => setIsOpen(true)}>{dictionary.openFull} <ArrowUpRight size={14} /></button></div>
      <div className="project-slider" onTouchStart={(event) => setTouchStart(event.touches[0].clientX)} onTouchEnd={handleTouchEnd}>
        <button type="button" className="project-slider-nav project-slider-prev" onClick={goPrevious} aria-label={dictionary.previousProjectScreen}><ChevronLeft size={18} /></button>
        <button type="button" className="project-slider-image-button" onClick={() => setIsOpen(true)} aria-label={`${dictionary.openFull}: ${activeIndex + 1}`}><Image src={activeImage} alt={`${project.name} ${activeIndex + 1}`} fill sizes="(max-width: 900px) 92vw, 720px" className="project-slider-image" loading="lazy" /></button>
        <button type="button" className="project-slider-nav project-slider-next" onClick={goNext} aria-label={dictionary.nextProjectScreen}><ChevronRight size={18} /></button>
      </div>
      <div className="project-slider-thumbs" role="tablist" aria-label={dictionary.thumbnails}>{thumbnailIndexes.map((imageIndex) => { const image = project.gallery[imageIndex]; return <button type="button" key={image} role="tab" aria-selected={activeIndex === imageIndex} className={`project-slider-thumb ${activeIndex === imageIndex ? "is-active" : ""}`} onClick={() => setActiveIndex(imageIndex)} aria-label={`${dictionary.showProjectScreen} ${imageIndex + 1}`}><Image src={image} alt="" fill sizes="56px" className="project-slider-thumb-image" loading="lazy" /></button>; })}</div>
    </section>
    {isOpen ? <GalleryModal project={project} activeIndex={activeIndex} onClose={() => setIsOpen(false)} onPrevious={goPrevious} onNext={goNext} onSelect={setActiveIndex} dictionary={dictionary} /> : null}
  </>;
}

function GalleryModal({ project, activeIndex, onClose, onPrevious, onNext, onSelect, dictionary }: { project: PortfolioProject; activeIndex: number; onClose: () => void; onPrevious: () => void; onNext: () => void; onSelect: (index: number) => void; dictionary: GalleryDictionary }) {
  const activeImage = project.gallery[activeIndex];
  const stopPropagation = (event: MouseEvent<HTMLElement>) => event.stopPropagation();
  return <div className="gallery-modal" role="dialog" aria-modal="true" aria-label={`${project.name} ${dictionary.fullGallery}`} onClick={onClose}>
    <div className="gallery-modal-panel" onClick={stopPropagation}>
      <div className="gallery-modal-header"><div><span className="gallery-modal-kicker">{project.name} / {dictionary.fullGallery}</span><h2>{project.gallery.length} {dictionary.projectScreens}</h2></div><button type="button" className="gallery-close" onClick={onClose} aria-label={dictionary.close}><X size={20} /></button></div>
      <div className="gallery-modal-stage">
        <button type="button" className="gallery-nav gallery-nav-previous" onClick={onPrevious} aria-label={dictionary.previous}><ChevronLeft size={22} /></button>
        <button type="button" className="gallery-modal-image" onClick={onClose} aria-label={dictionary.return}><Image src={activeImage} alt={`${project.name} ${activeIndex + 1}`} fill sizes="(max-width: 700px) 94vw, 1000px" className="gallery-modal-photo" priority /></button>
        <button type="button" className="gallery-nav gallery-nav-next" onClick={onNext} aria-label={dictionary.next}><ChevronRight size={22} /></button>
      </div>
      <div className="gallery-modal-meta"><span>{String(activeIndex + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}</span><span>{dictionary.instructions}</span></div>
      <div className="gallery-modal-thumbs" aria-label={dictionary.thumbnails}>{project.gallery.map((image, imageIndex) => <button type="button" key={image} className={`gallery-thumb ${activeIndex === imageIndex ? "is-active" : ""}`} onClick={() => onSelect(imageIndex)} aria-label={`${dictionary.showProjectScreen} ${imageIndex + 1}`} aria-current={activeIndex === imageIndex ? "true" : undefined}><Image src={image} alt="" fill sizes="64px" className="gallery-thumb-image" loading="lazy" /></button>)}</div>
    </div>
  </div>;
}
