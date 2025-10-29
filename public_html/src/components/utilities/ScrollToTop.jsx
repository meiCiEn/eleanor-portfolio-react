// 
// components/utilities/ScrollToTop.jsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPath = useRef(pathname);
  const prevHash = useRef(hash);

  useEffect(() => {
    const isRouteChange = pathname !== prevPath.current;
    const isHashOnlyChange = !isRouteChange && hash !== prevHash.current && Boolean(hash);

    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;

    function raf(cb) {
      return new Promise((r) => requestAnimationFrame(() => { cb?.(); r(); }));
    }

    async function instantScrollTop() {
      html.style.scrollBehavior = "auto";
      // wait for new content to mount & layout
      await raf();
      await raf();
      window.scrollTo(0, 0);
      // restore previous behavior next frame
      await raf();
      html.style.scrollBehavior = prevBehavior || "";
    }

    async function scrollToHashSmooth(id) {
      // wait a frame to ensure target may exist
      await raf();
      let el = document.getElementById(id);

      // retry a few frames in case the element renders a tad later
      let tries = 0;
      while (!el && tries < 8) {
        await raf();
        el = document.getElementById(id);
        tries++;
      }
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    async function scrollToHashInstant(id) {
      html.style.scrollBehavior = "auto";
      await raf();
      let el = document.getElementById(id);
      let tries = 0;
      while (!el && tries < 8) {
        await raf();
        el = document.getElementById(id);
        tries++;
      }
      if (el) el.scrollIntoView({ block: "start" });
      await raf();
      html.style.scrollBehavior = prevBehavior || "";
    }

    (async () => {
      if (isRouteChange) {
        if (hash) {
          await scrollToHashInstant(hash.slice(1));
        } else {
          await instantScrollTop();
        }
      } else if (isHashOnlyChange) {
        await scrollToHashSmooth(hash.slice(1));
      }
      prevPath.current = pathname;
      prevHash.current = hash;
    })();
  }, [pathname, hash]);

  return null;
}
