import { useEffect, useState } from "react";

/**
 * Returns the page scroll progress as a 0–1 value, and whether the
 * user has scrolled past a given threshold (used to toggle the
 * navbar's background).
 */
export function useScrollProgress(threshold = 24) {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? scrollTop / max : 0);
      setScrolled(scrollTop > threshold);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { progress, scrolled };
}
