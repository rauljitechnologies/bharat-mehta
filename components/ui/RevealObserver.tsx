"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * One observer for the whole site: elements marked with data-reveal fade up
 * as they enter the viewport. Content stays visible without JS, and
 * prefers-reduced-motion disables the effect in CSS.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    (window as unknown as { __revealReady?: boolean }).__revealReady = true;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const observe = (root: ParentNode) =>
      root.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => io.observe(el));
    observe(document);

    // Lists re-rendered by filters/tabs bring new nodes — observe those too.
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches("[data-reveal]")) io.observe(node);
          observe(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}

/** Inline, render-blocking snippet: opt into reveal styles before first paint, with a safety net. */
export const revealBootScript = `document.documentElement.classList.add('js');setTimeout(function(){if(!window.__revealReady){document.querySelectorAll('[data-reveal]').forEach(function(e){e.classList.add('is-visible')})}},3500);`;
