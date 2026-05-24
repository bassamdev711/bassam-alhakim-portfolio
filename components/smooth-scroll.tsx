"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Prevent browser from restoring scroll position automatically
    if (typeof window !== 'undefined') {
      history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // On every route change → scroll to hash element OR jump to top
  useEffect(() => {
    // Wait a tick for the page to render before checking hash
    const timer = setTimeout(() => {
      const hash = window.location.hash; // e.g. "#projects"

      if (hash) {
        // Navigate to the section the user came from (e.g. /#projects)
        const target = document.querySelector(hash) as HTMLElement | null;
        if (target) {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(target, { immediate: true });
          } else {
            target.scrollIntoView();
          }
          return; // don't scroll to top
        }
      }

      // No hash → scroll to very top of new page
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 80); // small delay to ensure DOM is ready

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
