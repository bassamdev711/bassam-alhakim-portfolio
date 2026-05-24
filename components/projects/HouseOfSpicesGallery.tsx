"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X, Monitor, Smartphone } from "lucide-react";

interface HouseOfSpicesGalleryProps {
  accentColor: string;
}

const images = [
  { src: "/images/projects/house-of-spices/2.png", label: "01", caption: "Heritage Archive Timeline", type: "desktop" },
  { src: "/images/projects/house-of-spices/3.png", label: "02", caption: "Spicy AI Flavor Assistant", type: "desktop" },
  { src: "/images/projects/house-of-spices/4.png", label: "03", caption: "Dynamic Taste & Aroma Blender", type: "desktop" },
  { src: "/images/projects/house-of-spices/5.png", label: "04", caption: "Custom Spice Canister Canvas", type: "desktop" },
  { src: "/images/projects/house-of-spices/6.png", label: "05", caption: "Checkout & Inventory Ledger", type: "desktop" },
  { src: "/images/projects/house-of-spices/7.png", label: "06", caption: "Mobile Storefront View", type: "mobile" },
];

export default function HouseOfSpicesGallery({ accentColor = "#b45309" }: HouseOfSpicesGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showIndicator, setShowIndicator] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const total = images.length;

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const centerPoint = scrollLeft + containerWidth / 2;

    let closestIndex = 0;
    let minDiff = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const el = child as HTMLElement;
      const elCenter = el.offsetLeft + el.clientWidth / 2;
      const diff = Math.abs(centerPoint - elCenter);
      if (diff < minDiff) { minDiff = diff; closestIndex = index; }
    });

    if (closestIndex !== activeIndex) setActiveIndex(closestIndex);
    if (scrollLeft > 40 && showIndicator) setShowIndicator(false);
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const target = Array.from(container.children)[index] as HTMLElement;
    if (target) {
      const containerWidth = container.clientWidth;
      const left = target.offsetLeft - (containerWidth - target.clientWidth) / 2;
      container.scrollTo({ left, behavior: "smooth" });
      setActiveIndex(index);
      setShowIndicator(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const firstChild = container.firstElementChild as HTMLElement;
      if (firstChild) {
        const containerWidth = container.clientWidth;
        container.scrollLeft = firstChild.offsetLeft - (containerWidth - firstChild.clientWidth) / 2;
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const activeItem = images[activeIndex];

  return (
    <div className="relative w-full overflow-hidden py-10 flex flex-col items-center">
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Active Slide Caption */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border"
          style={{ borderColor: `${accentColor}40`, backgroundColor: `${accentColor}08` }}
        >
          {activeItem.type === "mobile"
            ? <Smartphone size={13} style={{ color: accentColor }} />
            : <Monitor size={13} style={{ color: accentColor }} />
          }
          <span className="text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: accentColor }}>
            {activeItem.caption}
          </span>
          <span className="text-[10px] text-muted font-bold tracking-widest">
            {activeItem.label} / {String(total).padStart(2, "0")}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Slider Area */}
      <div className="relative w-full flex items-center justify-center">

        {/* Prev Button */}
        <button
          onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          className={`absolute left-4 md:left-10 z-20 p-3 md:p-4 rounded-full border border-glass-border bg-glass-surface text-foreground backdrop-blur-md transition-all duration-500 hover:scale-110 active:scale-95 ${activeIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          aria-label="Previous"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next Button */}
        <button
          onClick={() => scrollTo(Math.min(total - 1, activeIndex + 1))}
          disabled={activeIndex === total - 1}
          className={`absolute right-4 md:right-10 z-20 p-3 md:p-4 rounded-full border border-glass-border bg-glass-surface text-foreground backdrop-blur-md transition-all duration-500 hover:scale-110 active:scale-95 ${activeIndex === total - 1 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          aria-label="Next"
        >
          <ChevronRight size={22} />
        </button>

        {/* Scrollable Canvas */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="no-scrollbar flex w-full gap-8 md:gap-14 overflow-x-auto scroll-smooth snap-x snap-mandatory py-10 px-[10vw] md:px-[20vw] items-center"
        >
          {images.map((img, idx) => {
            const isActive = idx === activeIndex;
            const isMobile = img.type === "mobile";
            return (
              <div
                key={idx}
                className={`snap-center flex-none transition-all duration-700 ease-out ${
                  isMobile
                    ? "w-[50vw] md:w-[22vw] aspect-[9/19]"
                    : "w-[80vw] md:w-[55vw] aspect-[16/10]"
                }`}
                style={{
                  transform: isActive ? "scale(1.04)" : "scale(0.84)",
                  opacity: isActive ? 1 : 0.2,
                }}
              >
                <div
                  onClick={() => isActive && setLightboxImage(img.src)}
                  className={`w-full h-full rounded-[2.5rem] overflow-hidden border transition-all duration-700 relative group cursor-pointer ${
                    isActive ? "border-white/20" : "border-white/5"
                  }`}
                  style={{
                    boxShadow: isActive
                      ? `0 30px 80px -15px ${accentColor}50, 0 30px 70px rgba(0,0,0,0.8)`
                      : "0 20px 40px rgba(0,0,0,0.4)",
                  }}
                >
                  <img
                    src={img.src}
                    alt={`House of Spices - ${img.caption}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  {/* Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Zoom overlay on active hover */}
                  {isActive && (
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div
                        className="flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md text-white text-xs font-black uppercase tracking-widest border"
                        style={{ backgroundColor: `${accentColor}30`, borderColor: `${accentColor}60` }}
                      >
                        <Maximize2 size={14} />
                        Zoom View
                      </div>
                    </div>
                  )}

                  {/* Device type badge */}
                  <div
                    className="absolute bottom-5 left-6 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 text-white/60"
                  >
                    {isMobile ? <Smartphone size={10} /> : <Monitor size={10} />}
                    {isMobile ? "Mobile" : "Desktop"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-4 py-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: idx === activeIndex ? "2rem" : "0.375rem",
              backgroundColor: idx === activeIndex ? accentColor : "rgba(120,80,40,0.2)",
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Swipe Indicator */}
      <AnimatePresence>
        {showIndicator && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
            className="mt-10 flex flex-col items-center gap-3 text-muted pointer-events-none"
          >
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ x: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="text-muted"
              >
                <ChevronLeft size={16} />
              </motion.div>
              <div className="w-1.5 h-1.5 rounded-full bg-subtle animate-ping" />
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: accentColor }} />
              <div className="w-1.5 h-1.5 rounded-full bg-subtle animate-ping" />
              <motion.div
                animate={{ x: [8, -8, 8] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="text-muted"
              >
                <ChevronRight size={16} />
              </motion.div>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] select-none">
              مرر لليمين واليسار للاستكشاف • Swipe to discover
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white transition-all duration-500 z-50 hover:scale-110"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-full max-h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Fullscreen"
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-[2rem]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
