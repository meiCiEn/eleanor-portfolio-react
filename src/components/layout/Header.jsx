import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header({ setHeaderHeight }) {
  const refContainer = useRef(null);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // keep mounted for exit animation
  const ANIM_MS = 260; // keep in sync with --menu-anim-ms in Header.css

  // Measure header
  useLayoutEffect(() => {
    if (refContainer.current) {
      setHeaderHeight(refContainer.current.offsetHeight);
    }
  }, [setHeaderHeight]);

  // Esc closes menu
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.overflow;
    if (open) root.style.overflow = "hidden";
    return () => { root.style.overflow = prev; };
  }, [open]);

  // Mount/unmount overlay with exit animation
  useEffect(() => {
    if (open) {
      setMounted(true);
    } else if (mounted) {
      const t = setTimeout(() => setMounted(false), ANIM_MS);
      return () => clearTimeout(t);
    }
  }, [open, mounted]);

  return (
    <>
      <a className="skip-to-content-link" href="#main">Skip to content</a>

      <header className="site-header py-4 lg:py-6 w-screen sticky top-0" ref={refContainer}>
        {/* Desktop (lg+) */}
        <div className="max-w-7xl mx-auto px-8 items-center gap-4 hidden lg:grid [grid-template-columns:1fr_3fr_3fr]">
          <div className="flex justify-start">
            <Link to="/#top" className="w-16 h-16" title="Go to homepage" aria-label="Go to homepage">
              <img
                src="/src/assets/images/logos/e-logo-dark.png"
                alt="Eleanor Mears logo"
                className="w-full h-full object-contain"
                id="logo-img"
              />
            </Link>
          </div>

          <nav className="flex flex-col space-y-2 text-center" aria-label="Main navigation">
            <ul className="flex space-x-8">
              <li><NavLink to="/#top" className="nav-link">Home</NavLink></li>
              <li><NavLink to="/#about" className="nav-link">About</NavLink></li>
              <li><NavLink to="/#projects" className="nav-link">Projects</NavLink></li>
              <li><NavLink to="/#contact" className="nav-link">Contact</NavLink></li>
            </ul>
          </nav>

          <div className="flex flex-col items-end text-right space-y-2">
            <div>
              <a href="mailto:info@eleanor-mears.com" className="contact-email uppercase" aria-label="Email Eleanor Mears">
                info@eleanor-mears.com
              </a>
              <p className="contact-phone">
                <a href="tel:+32467662544">(+32) 467 66 25 44</a>
              </p>
            </div>
            <a href="#contact" className="button px-4 py-2 w-fit uppercase">Let's talk</a>
          </div>
        </div>

        {/* Mobile/Tablet (<lg) */}
        <div className="lg:hidden max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link to="/" className="w-10 h-10" title="Go to homepage">
            <img
              src="/src/assets/images/logos/e-logo-dark.png"
              alt="Eleanor Mears logo"
              className="w-full h-full object-contain"
              id="logo-img"
            />
          </Link>

          <button
            className="mobile-trigger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            {open ? <X size={28} strokeWidth={2} aria-hidden="true" /> : <Menu size={28} strokeWidth={2} aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* Mobile overlay with animation */}
      {mounted && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 overlay-root"
          data-open={open ? "true" : "false"}
        >
          <div className="absolute inset-0 overlay-backdrop" onClick={() => setOpen(false)} />
          <div className="relative h-full w-full overlay-panel">
            <div className="flex items-center justify-between px-6 py-6">
              <img src="/src/assets/images/logos/e-logo-light.png" alt="Eleanor Mears" className="h-8 w-8" />
              <button aria-label="Close menu" className="overlay-close p-2" onClick={() => setOpen(false)}>
                <X size={28} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>

            <nav className="px-10 pt-8 space-y-8" aria-label="Mobile navigation">
              <Link className="mobile-link" to="/" onClick={() => setOpen(false)}>Home</Link>
              <Link className="mobile-link" to="/#about" onClick={() => setOpen(false)}>About</Link>
              <Link className="mobile-link" to="/#projects" onClick={() => setOpen(false)}>Projects</Link>
              <Link className="mobile-link" to="/#contact" onClick={() => setOpen(false)}>Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
