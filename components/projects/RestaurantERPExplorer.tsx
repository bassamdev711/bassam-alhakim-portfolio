"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface RestaurantERPExplorerProps {
  accentColor: string;
}

export default function RestaurantERPExplorer({ accentColor = "#2563eb" }: RestaurantERPExplorerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showIndicator, setShowIndicator] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const images = [
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 115039.png", label: "01" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 115104.png", label: "02" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 115202.png", label: "03" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 115508.png", label: "04" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 115524.png", label: "05" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 115552.png", label: "06" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 115617.png", label: "07" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 115656.png", label: "08" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 115718.png", label: "09" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 115746.png", label: "10" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 115812.png", label: "11" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 115900.png", label: "12" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 115925.png", label: "13" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 115943.png", label: "14" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 120036.png", label: "15" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 120155.png", label: "16" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 120209.png", label: "17" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 120230.png", label: "18" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 120333.png", label: "19" },
    { src: "/images/projects/restaurant-erp/Screenshot 2026-05-21 120410.png", label: "20" },
    { src: "/images/projects/restaurant-erp/photo_2026-05-11_09-07-13.jpg", label: "21" },
    { src: "/images/projects/restaurant-erp/photo_2_2026-05-23_11-44-38.jpg", label: "22" },
    { src: "/images/projects/restaurant-erp/photo_3_2026-05-23_11-44-38.jpg", label: "23" },
    { src: "/images/projects/restaurant-erp/photo_4_2026-05-23_11-44-38.jpg", label: "24" },
    { src: "/images/projects/restaurant-erp/photo_5_2026-05-23_11-44-38.jpg", label: "25" },
    { src: "/images/projects/restaurant-erp/photo_6_2026-05-23_11-44-38.jpg", label: "26" },
  ];

  // Listen to scrolling to determine the active image and fade the indicator
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const childWidth = container.firstElementChild?.clientWidth || 0;
    const gap = 48; // md:gap-12 (48px)
    
    // Determine which image is currently closest to the center
    const centerPoint = scrollLeft + containerWidth / 2;
    let closestIndex = 0;
    let minDiff = Infinity;

    const children = Array.from(container.children);
    children.forEach((child, index) => {
      const element = child as HTMLElement;
      const elementCenter = element.offsetLeft + element.clientWidth / 2;
      const diff = Math.abs(centerPoint - elementCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }

    if (scrollLeft > 40 && showIndicator) {
      setShowIndicator(false);
    }
  };

  const scrollPrev = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const children = Array.from(container.children);
    const prevIndex = Math.max(0, activeIndex - 1);
    const targetElement = children[prevIndex] as HTMLElement;
    if (targetElement) {
      const containerWidth = container.clientWidth;
      const targetLeft = targetElement.offsetLeft - (containerWidth - targetElement.clientWidth) / 2;
      container.scrollTo({
        left: targetLeft,
        behavior: "smooth"
      });
      setActiveIndex(prevIndex);
      setShowIndicator(false);
    }
  };

  const scrollNext = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const children = Array.from(container.children);
    const nextIndex = Math.min(images.length - 1, activeIndex + 1);
    const targetElement = children[nextIndex] as HTMLElement;
    if (targetElement) {
      const containerWidth = container.clientWidth;
      const targetLeft = targetElement.offsetLeft - (containerWidth - targetElement.clientWidth) / 2;
      container.scrollTo({
        left: targetLeft,
        behavior: "smooth"
      });
      setActiveIndex(nextIndex);
      setShowIndicator(false);
    }
  };

  // Center the first item on initial render
  useEffect(() => {
    if (scrollRef.current) {
      // Small timeout to ensure the DOM has rendered and positions are correct
      const timer = setTimeout(() => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const firstChild = container.firstElementChild as HTMLElement;
        if (firstChild) {
          const containerWidth = container.clientWidth;
          const targetLeft = firstChild.offsetLeft - (containerWidth - firstChild.clientWidth) / 2;
          container.scrollLeft = targetLeft;
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-10 flex flex-col items-center">
      {/* Hide Scrollbar styling block */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Main Container */}
      <div className="relative w-full flex items-center justify-center">
        {/* Floating Prev Button */}
        <button
          onClick={scrollPrev}
          disabled={activeIndex === 0}
          className={`absolute left-4 md:left-12 z-20 p-4 rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all duration-500 hover:border-white hover:scale-110 active:scale-95 ${
            activeIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          style={{ boxShadow: `0 0 20px rgba(0,0,0,0.5)` }}
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Floating Next Button */}
        <button
          onClick={scrollNext}
          disabled={activeIndex === images.length - 1}
          className={`absolute right-4 md:right-12 z-20 p-4 rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all duration-500 hover:border-white hover:scale-110 active:scale-95 ${
            activeIndex === images.length - 1 ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          style={{ boxShadow: `0 0 20px rgba(0,0,0,0.5)` }}
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Horizontal Scroll Canvas */}
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
                className="snap-center flex-none w-[75vw] md:w-[50vw] aspect-[16/10] transition-all duration-700 ease-out"
                style={{
                  transform: isActive ? "scale(1.05)" : "scale(0.85)",
                  opacity: isActive ? 1 : 0.25,
                }}
              >
                <div
                  onClick={() => isActive && setLightboxImage(img.src)}
                  className={`w-full h-full rounded-[2.5rem] overflow-hidden border transition-all duration-700 relative group cursor-pointer ${
                    isActive
                      ? "border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.9)]"
                      : "border-white/5 shadow-2xl"
                  }`}
                  style={{
                    boxShadow: isActive ? `0 25px 60px -15px ${accentColor}30` : undefined,
                  }}
                >
                  <img
                    src={img.src}
                    alt={`Restaurant ERP - Screenshot ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Subtle vignette layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Hover spotlight indicators */}
                  {isActive && (
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest shadow-2xl"
                      >
                        <Maximize2 size={14} />
                        Zoom View
                      </motion.div>
                    </div>
                  )}

                  {/* Absolute subtle index counter */}
                  <div className="absolute bottom-6 left-8 text-white/50 text-[10px] font-black uppercase tracking-[0.2em] bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/5">
                    {img.label} / 21
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4 max-w-full overflow-x-auto px-4 py-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (!scrollRef.current) return;
              const container = scrollRef.current;
              const children = Array.from(container.children);
              const targetElement = children[idx] as HTMLElement;
              if (targetElement) {
                const containerWidth = container.clientWidth;
                const targetLeft = targetElement.offsetLeft - (containerWidth - targetElement.clientWidth) / 2;
                container.scrollTo({
                  left: targetLeft,
                  behavior: "smooth"
                });
                setActiveIndex(idx);
                setShowIndicator(false);
              }
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === activeIndex
                ? "w-8"
                : "w-1.5 bg-white/10 hover:bg-white/30"
            }`}
            style={{
              backgroundColor: idx === activeIndex ? accentColor : undefined,
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Animated Swipe/Scroll to Discover Indicator */}
      <AnimatePresence>
        {showIndicator && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
            className="mt-12 flex flex-col items-center gap-3 text-white/40 pointer-events-none"
          >
            {/* Gesture visual - luxury pulsing dots and arrows */}
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ x: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="text-white/30"
              >
                <ChevronLeft size={16} />
              </motion.div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 animate-ping" />
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: accentColor }} />
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 animate-ping" />
              <motion.div
                animate={{ x: [8, -8, 8] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="text-white/30"
              >
                <ChevronRight size={16} />
              </motion.div>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-center select-none" style={{ textShadow: `0 0 10px rgba(255,255,255,0.05)` }}>
              مرر لليمين واليسار للاستكشاف • Swipe to discover
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white transition-all duration-500 z-50 hover:scale-110 active:scale-95"
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
                alt="Active Screenshot Fullscreen"
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-[2rem]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
