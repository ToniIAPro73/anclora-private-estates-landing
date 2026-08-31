import { useEffect, useRef, useState } from "react";

/**
 * Detects which section id in `sectionIds` currently occupies the center of
 * the viewport, using a single IntersectionObserver with a narrow band
 * (negative top/bottom rootMargin) instead of scroll-position math.
 */
export function useActiveSectionIndex(sectionIds: string[]): number {
  const [activeIndex, setActiveIndex] = useState(0);
  const indexRef = useRef(0);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = sectionIds.indexOf(entry.target.id);
          if (index !== -1 && index !== indexRef.current) {
            indexRef.current = index;
            setActiveIndex(index);
          }
        }
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeIndex;
}
