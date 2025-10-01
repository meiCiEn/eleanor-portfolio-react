import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header({ setHeaderHeight }) {
  const { pathname, hash } = useLocation();

  // Setting the focus trap on the overlay (so you can only tab between options on the overlay and don't go to the page itself.)
  // Set refs
  const triggerRef = useRef(null); // hamburger button
  const panelRef = useRef(null);   // overlay panel container
  const closeRef = useRef(null);   // close button inside overlay

  const refContainer = useRef(null);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ANIM_MS = 260;

  useLayoutEffect(() => {
    if (refContainer.current) setHeaderHeight(refContainer.current.offsetHeight);
  }, [setHeaderHeight]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.overflow;
    if (open) root.style.overflow = "hidden";
    return () => { root.style.overflow = prev; };
  }, [open]);

  useEffect(() => {
    if (open) setMounted(true);
    else if (mounted) {
      const t = setTimeout(() => setMounted(false), ANIM_MS);
      return () => clearTimeout(t);
    }
  }, [open, mounted]);

  // When menu opens, focus the close button; when it closes, return focus to trigger
useEffect(() => {
  if (open) {
    // slight delay helps when the panel has an enter animation
    const id = setTimeout(() => closeRef.current?.focus(), 10);
    return () => clearTimeout(id);
  } else {
    // return focus after the exit animation completes
    const id = setTimeout(() => triggerRef.current?.focus(), ANIM_MS);
    return () => clearTimeout(id);
  }
}, [open]);

useEffect(() => {
  if (!open) return;

  function getFocusable(container) {
    if (!container) return [];
    // A conservative, standards-friendly selector:
    const selectors = [
      'a[href]:not([tabindex="-1"])',
      'button:not([disabled]):not([tabindex="-1"])',
      'input:not([disabled]):not([tabindex="-1"])',
      'select:not([disabled]):not([tabindex="-1"])',
      'textarea:not([disabled]):not([tabindex="-1"])',
      '[tabindex]:not([tabindex="-1"])'
    ].join(',');

    return Array.from(container.querySelectorAll(selectors))
      // ignore hidden elements
      .filter(el => !el.hasAttribute('aria-hidden') && el.offsetParent !== null);
  }

  function onKeyDown(e) {
    if (e.key !== 'Tab') return;
    const items = getFocusable(panelRef.current);
    if (items.length === 0) return;

    const first = items[0];
    const last  = items[items.length - 1];
    const active = document.activeElement;

    // SHIFT+TAB on first → wrap to last
    if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
    }
    // TAB on last → wrap to first
    else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  }

  document.addEventListener('keydown', onKeyDown, true); // capture phase is robust
  return () => document.removeEventListener('keydown', onKeyDown, true);
}, [open]);


  const isHomeCurrent = pathname === "/" && (hash === "" || hash === "#top");

  return (
    <>
      <a className="skip-to-content-link" href="#main">Skip to content</a>

      <header className="site-header py-4 lg:py-6 w-screen sticky top-0" ref={refContainer}>
        {/* Desktop (lg+) */}
        <div className="max-w-7xl mx-auto px-8 items-center gap-4 hidden lg:grid [grid-template-columns:1fr_3fr_3fr]">
          <div className="flex justify-start">
            <Link to="/#top" className="w-16 h-16" aria-label="Go to homepage">
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
              <li>
                <Link to="/#top" className="nav-link" aria-current={isHomeCurrent ? "true" : undefined}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="nav-link" aria-current={hash === "#about" ? "true" : undefined}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/#projects" className="nav-link" aria-current={hash === "#projects" ? "true" : undefined}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="nav-link" aria-current={hash === "#contact" ? "true" : undefined}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col items-end text-right space-y-2">
            <div>
              <a href="mailto:info@eleanor-mears.com" className="contact-email uppercase">
                info@eleanor-mears.com
              </a>
              <p className="contact-phone">
                <a href="tel:+32467662544">(+32) 467 66 25 44</a>
              </p>
            </div>
            <a href="#contact" className="button px-4 py-2 w-fit uppercase">Let&apos;s talk</a>
          </div>
        </div>

        {/* Mobile/Tablet (<lg) */}
        <div className="lg:hidden max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link to="/#top" className="w-10 h-10" aria-label="Go to homepage">
            <img
              src="/src/assets/images/logos/e-logo-dark.png"
              alt="Eleanor Mears logo"
              className="w-full h-full object-contain"
              id="logo-img"
            />
          </Link>

          <button
            ref={triggerRef}
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

      {/* Mobile overlay */}
      {mounted && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[999] overlay-root"
          data-open={open ? "true" : "false"}
        >
          <div className="absolute inset-0 overlay-backdrop" onClick={() => setOpen(false)} />
          <div ref={panelRef} className="relative h-full w-full overlay-panel max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-end py-4 lg:py-6 overlay-bar">
      
              <button ref={closeRef} aria-label="Close menu" className="overlay-close p-2" onClick={() => setOpen(false)}>
                <X size={28} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>

            <nav className="px-10 pt-8 space-y-8" aria-label="Mobile navigation">
              <Link className="mobile-link" to="/#top" onClick={() => setOpen(false)}>Home</Link>
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
