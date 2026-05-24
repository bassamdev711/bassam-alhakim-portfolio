"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface WiFiMonitorGalleryProps {
  accentColor: string;
}

export default function WiFiMonitorGallery({ accentColor = "#06b6d4" }: WiFiMonitorGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showIndicator, setShowIndicator] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const images = [
    { src: "/images/projects/wifi-monitor/screenshot1.jpg", label: "01" },
    { src: "/images/projects/wifi-monitor/screenshot2.jpg", label: "02" },
    { src: "/images/projects/wifi-monitor/screenshot3.jpg", label: "03" },
    { src: "/images/projects/wifi-monitor/screenshot4.jpg", label: "04" },
  ];

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
      const element = child as HTMLElement;
      const elementCenter = element.offsetLeft + element.clientWidth / 2;
      const diff = Math.abs(centerPoint - elementCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) setActiveIndex(closestIndex);
    if (scrollLeft > 40 && showIndicator) setShowIndicator(false);
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const children = Array.from(container.children);
    const targetElement = children[index] as HTMLElement;
    if (targetElement) {
      const containerWidth = container.clientWidth;
      const targetLeft = targetElement.offsetLeft - (containerWidth - targetElement.clientWidth) / 2;
      container.scrollTo({ left: targetLeft, behavior: "smooth" });
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

  return (
    <div className="relative w-full overflow-hidden py-10 flex flex-col items-center">
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="relative w-full flex items-center justify-center">
        {/* Prev Button */}
        <button
          onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          className={`absolute left-4 md:left-12 z-20 p-4 rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all duration-500 hover:border-white hover:scale-110 active:scale-95 ${activeIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next Button */}
        <button
          onClick={() => scrollTo(Math.min(total - 1, activeIndex + 1))}
          disabled={activeIndex === total - 1}
          className={`absolute right-4 md:right-12 z-20 p-4 rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all duration-500 hover:border-white hover:scale-110 active:scale-95 ${activeIndex === total - 1 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>

        {/* Scroll Canvas */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="no-scrollbar flex w-full gap-8 md:gap-16 overflow-x-auto scroll-smooth snap-x snap-mandatory py-10 px-[10vw] md:px-[25vw] items-center"
        >
          {images.map((img, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={idx}
                className="snap-center flex-none w-[75vw] md:w-[45vw] aspect-[9/16] md:aspect-[9/16] transition-all duration-700 ease-out"
                style={{
                  transform: isActive ? "scale(1.05)" : "scale(0.85)",
                  opacity: isActive ? 1 : 0.25,
                }}
              >
                <div
                  onClick={() => isActive && setLightboxImage(img.src)}
                  className={`w-full h-full rounded-[2.5rem] overflow-hidden border transition-all duration-700 relative group cursor-pointer ${
                    isActive ? "border-white/20" : "border-white/5"
                  }`}
                  style={{
                    boxShadow: isActive ? `0 25px 60px -15px ${accentColor}40, 0 30px 70px rgba(0,0,0,0.9)` : "0 20px 40px rgba(0,0,0,0.6)",
                  }}
                >
                  <img
                    src={img.src}
                    alt={`WiFi Monitor Pro - Screenshot ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {isActive && (
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest">
                        <Maximize2 size={14} />
                        Zoom View
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-6 left-8 text-white/50 text-[10px] font-black uppercase tracking-[0.2em] bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/5">
                    {img.label} / {String(total).padStart(2, "0")}
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
              backgroundColor: idx === activeIndex ? accentColor : "rgba(255,255,255,0.1)",
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
            className="mt-12 flex flex-col items-center gap-3 text-white/40 pointer-events-none"
          >
            <div className="flex items-center gap-4">
              <motion.div animate={{ x: [-8, 8, -8] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="text-white/30">
                <ChevronLeft size={16} />
              </motion.div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 animate-ping" />
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: accentColor }} />
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 animate-ping" />
              <motion.div animate={{ x: [8, -8, 8] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="text-white/30">
                <ChevronRight size={16} />
              </motion.div>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] select-none">
              مرر لليمين واليسار • Swipe to discover
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
              className="relative max-w-full max-h-full rounded-[2rem] overflow-hidden border border-white/10"
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
