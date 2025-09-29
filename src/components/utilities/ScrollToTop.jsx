// ScrollToTop.jsx
// Purpose: on route changes, jump instantly to the top (no animation).
// For same-page hash changes (anchors), keep smooth scrolling.
// Note: we temporarily override the global `html { scroll-behavior: smooth; }`
// by setting an inline style to `auto` during route changes, then restore it.

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  // store previous path + hash to detect what changed
  const prevPath = useRef(pathname);
  const prevHash = useRef(hash);

  useEffect(() => {
    // route changed if pathname is different
    const isRouteChange = pathname !== prevPath.current;

    // hash-only change when path is same, hash changed, and there is a hash
    const isHashOnlyChange =
      !isRouteChange && hash !== prevHash.current && Boolean(hash);

    const html = document.documentElement;

    // remember any existing inline scroll-behavior on <html> (usually "")
    const prevBehavior = html.style.scrollBehavior;

    if (isRouteChange) {
      // --- NEW PAGE: jump instantly to top ---
      // override global smooth temporarily
      html.style.scrollBehavior = "auto";

      if (hash) {
        // if the new URL includes a hash, try to jump to that element
        const id = hash.slice(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ block: "start" }); // instant (no behavior specified)
        } else {
          window.scrollTo({ top: 0 }); // fallback to top
        }
      } else {
        // no hash → just go to top
        window.scrollTo({ top: 0 });
      }

      // restore previous inline behavior so the global CSS applies again
      html.style.scrollBehavior = prevBehavior || "";
    } else if (isHashOnlyChange) {
      // --- SAME PAGE: anchor jump should be smooth ---
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    // update refs for next render
    prevPath.current = pathname;
    prevHash.current = hash;
  }, [pathname, hash]);

  return null; // this component renders nothing
}
