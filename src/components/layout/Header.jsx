import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header({ setHeaderHeight }) {
  const { pathname, hash } = useLocation();

  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  const refContainer = useRef(null);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ANIM_MS = 260;

  useLayoutEffect(() => {
    if (refContainer.current) setHeaderHeight(refContainer.current.offsetHeight);
  }, [setHeaderHeight]);

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") setOpen(false); }
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

  useEffect(() => {
    if (!open) return;
    function getFocusable(container) {
      if (!container) return [];
      const selectors = [
        'a[href]:not([tabindex="-1"])',
        'button:not([disabled]):not([tabindex="-1"])',
        'input:not([disabled]):not([tabindex="-1"])',
        'select:not([disabled]):not([tabindex="-1"])',
        'textarea:not([disabled]):not([tabindex="-1"])',
        '[tabindex]:not([tabindex="-1"])'
      ].join(',');
      return Array.from(container.querySelectorAll(selectors))
        .filter(el => !el.hasAttribute('aria-hidden') && el.offsetParent !== null);
    }
    function onKeyDown(e) {
      if (e.key !== 'Tab') return;
      const items = getFocusable(panelRef.current);
      if (items.length === 0) return;
      const first = items[0];
      const last  = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
    }
    document.addEventListener('keydown', onKeyDown, true);
    return () => document.removeEventListener('keydown', onKeyDown, true);
  }, [open]);

  const isHomeCurrent = pathname === "/" && (hash === "" || hash === "#top");

  return (
    <>
      <a className="skip-to-content-link" href="#main">Skip to content</a>

      <header className="site-header" ref={refContainer}>
        {/* Desktop (lg+) */}
        <div className="o-container u-hidden lg:u-grid o-grid u-items-center u-gap-4 o-grid--1-3-3">
          <div className="o-flex o-flex--start">
            <Link to="/#top" className="brand" aria-label="Go to homepage">
              <img
                src="/src/assets/images/logos/e-logo-dark.png"
                alt="Eleanor Mears logo"
                id="logo-img"
              />
            </Link>
          </div>

          <nav className="o-flex o-flex--col u-text-center" aria-label="Main navigation">
            <ul className="o-flex u-gap-8">
              <li><Link to="/#top" className="nav-link" aria-current={isHomeCurrent ? "true" : undefined}>Home</Link></li>
              <li><Link to="/#about" className="nav-link" aria-current={hash === "#about" ? "true" : undefined}>About</Link></li>
              <li><Link to="/#projects" className="nav-link" aria-current={hash === "#projects" ? "true" : undefined}>Projects</Link></li>
              <li><Link to="/#contact" className="nav-link" aria-current={hash === "#contact" ? "true" : undefined}>Contact</Link></li>
            </ul>
          </nav>

          <div className="o-flex o-flex--col u-items-end u-text-right u-gap-2">
            <div>
              <a href="mailto:info@eleanor-mears.com" className="contact-email">info@eleanor-mears.com</a>
              <p className="contact-phone"><a href="tel:+32467662544">(+32) 467 66 25 44</a></p>
            </div>
            <a href="#contact" className="c-button">Let&apos;s talk</a>
          </div>
        </div>

        {/* Mobile/Tablet (<lg) */}
        <div className="o-container lg:u-hidden o-flex o-flex--between">
          <Link to="/#top" className="brand brand--sm" aria-label="Go to homepage">
            <img src="/src/assets/images/logos/e-logo-dark.png" alt="Eleanor Mears logo" id="logo-img" />
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
        <div id="mobile-menu" role="dialog" aria-modal="true" className="overlay-root" data-open={open ? "true" : "false"}>
          <div className="overlay-backdrop" onClick={() => setOpen(false)} />
          <div ref={panelRef} className="overlay-panel">
            <div className="o-container">
              <div className="o-flex o-flex--end overlay-bar">
                <button ref={closeRef} aria-label="Close menu" className="overlay-close" onClick={() => setOpen(false)}>
                  <X size={28} strokeWidth={2} aria-hidden="true" />
                </button>
              </div>

              <nav className="mobile-nav" aria-label="Mobile navigation">
                <Link className="mobile-link" to="/#top" onClick={() => setOpen(false)}>Home</Link>
                <Link className="mobile-link" to="/#about" onClick={() => setOpen(false)}>About</Link>
                <Link className="mobile-link" to="/#projects" onClick={() => setOpen(false)}>Projects</Link>
                <Link className="mobile-link" to="/#contact" onClick={() => setOpen(false)}>Contact</Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
