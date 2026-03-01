import React, { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const projects = [
    { name: "EHA",        full: "Emergency Health Access", stat: "60% faster", label: "Critical info access" },
    { name: "AI KB",      full: "AI Knowledge Base",       stat: "50% less",   label: "Search friction"      },
    { name: "Focus Flow", full: "Study Companion App",     stat: "+20%",        label: "Session completion"   },
  ];

  const tools = ["Figma", "Framer", "Webflow", "Canva", "Cursor"];

  const navLinks = [
    { label: "Work",    href: "#work"    },
    { label: "About",   href: "#about"   },
    { label: "Skills",  href: "#skills"  },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap');

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --ink: #111010;
          --paper: #f0ece3;
          --red: #c0392b;
          --mid: #6b6560;
        }
        :root.dark {
          --ink: #f0ece3;
          --paper: #0f0e0d;
          --red: #ff5247;
          --mid: #9b9490;
        }

        body { background: var(--paper); }

        .hero-wrap {
          min-height: 100vh;
          background: var(--paper);
          display: flex;
          flex-direction: column;
          font-family: 'DM Serif Display', serif;
        }

        /* NAV */
        .nav-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 48px;
          border-bottom: 1px solid rgba(17,16,16,0.1);
        }
        :root.dark .nav-bar { border-bottom-color: rgba(240,236,227,0.1); }

        .logo-mark {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          letter-spacing: 4px;
          color: var(--ink);
          z-index: 10001;
          position: relative;
        }
        .logo-mark span { color: var(--red); }

        .nav-links { display: flex; gap: 32px; list-style: none; }
        .nav-links a {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--ink);
          text-decoration: none;
          opacity: 0.4;
          transition: opacity 0.2s;
        }
        .nav-links a:hover { opacity: 1; }

        .status-pill {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          color: var(--ink);
          opacity: 0.55;
        }
        .pulse-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #27ae60;
          animation: blink 2s infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }

        .dark-mode-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: var(--ink);
          cursor: pointer;
          padding: 6px 8px;
          border-radius: 4px;
          opacity: 0.6;
          transition: opacity 0.3s;
        }
        .dark-mode-toggle:hover { opacity: 1; }

        /* MAIN GRID */
        .main-grid {
          flex: 1;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
        }

        .left-col {
          padding: 56px 56px 56px 48px;
          border-right: 1px solid rgba(17,16,16,0.1);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .eyebrow::before {
          content: '';
          width: 28px; height: 1px;
          background: var(--red);
          display: block;
          flex-shrink: 0;
        }

        .headline {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(60px, 8.5vw, 118px);
          line-height: 0.9;
          letter-spacing: 2px;
          color: var(--ink);
          margin-bottom: 10px;
        }
        .headline-italic {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-size: clamp(28px, 4.5vw, 64px);
          color: var(--red);
          display: block;
          line-height: 1.15;
          margin-bottom: 36px;
        }

        .bio {
          font-family: 'DM Mono', monospace;
          font-size: 12.5px;
          line-height: 2;
          color: var(--mid);
          max-width: 420px;
          margin-bottom: 44px;
          font-weight: 300;
        }
        .bio strong { color: var(--ink); font-weight: 500; }

        .cta-row {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 52px;
          flex-wrap: wrap;
        }

        .btn-main {
          background: var(--ink);
          color: var(--paper);
          padding: 15px 34px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          border: none;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s;
          white-space: nowrap;
          text-decoration: none;
          display: inline-block;
        }
        .btn-main::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--red);
          transform: translateX(-101%);
          transition: transform 0.38s cubic-bezier(0.77,0,0.175,1);
        }
        .btn-main:hover::after { transform: translateX(0); }
        .btn-main:hover { transform: translateY(-2px); }
        .btn-main span { position: relative; z-index: 1; }

        .btn-ghost {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--ink);
          text-decoration: none;
          opacity: 0.4;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: opacity 0.2s, gap 0.25s;
          white-space: nowrap;
        }
        .btn-ghost:hover { opacity: 1; gap: 14px; }

        .tool-strip { display: flex; gap: 8px; flex-wrap: wrap; }
        .tool-chip {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 5px 12px;
          border: 1px solid rgba(17,16,16,0.18);
          color: var(--ink);
          opacity: 0.5;
          transition: all 0.2s;
        }
        .tool-chip:hover { opacity: 1; border-color: var(--ink); }

        /* RIGHT COL */
        .right-col {
          display: flex;
          flex-direction: column;
          padding: 48px;
          gap: 16px;
          justify-content: center;
        }

        .recognition {
          background: var(--ink);
          color: var(--paper);
          padding: 18px 22px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .rec-icon { font-size: 18px; flex-shrink: 0; margin-top: 1px; }
        .rec-text {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          line-height: 1.75;
          opacity: 0.7;
          letter-spacing: 0.5px;
        }
        .rec-text strong { opacity: 1; color: var(--paper); font-weight: 500; }

        .projects-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--mid);
        }

        .project-card {
          border: 1px solid rgba(17,16,16,0.1);
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background 0.25s, border-color 0.25s;
          position: relative;
          overflow: hidden;
          gap: 12px;
        }
        .project-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--red);
          transform: scaleY(0);
          transition: transform 0.25s;
          transform-origin: bottom;
        }
        .project-card:hover { background: rgba(17,16,16,0.03); border-color: rgba(17,16,16,0.2); }
        .project-card:hover::before { transform: scaleY(1); }

        .proj-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          letter-spacing: 2px;
          color: var(--ink);
          line-height: 1;
        }
        .proj-full {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 1.5px;
          color: var(--mid);
          text-transform: uppercase;
          margin-top: 3px;
        }
        .proj-stat { text-align: right; flex-shrink: 0; }
        .proj-stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          letter-spacing: 1px;
          color: var(--red);
          line-height: 1;
          display: block;
        }
        .proj-stat-label {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--mid);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(17,16,16,0.08);
          border: 1px solid rgba(17,16,16,0.08);
        }
        .metric-cell {
          background: var(--paper);
          padding: 18px 14px;
          text-align: center;
          transition: background 0.2s;
        }
        .metric-cell:hover { background: #e8e3d8; }
        .metric-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          letter-spacing: 1px;
          color: var(--ink);
          display: block;
          line-height: 1;
        }
        .metric-label {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--mid);
          display: block;
          margin-top: 4px;
        }

        /* FOOTER */
        .foot-bar {
          border-top: 1px solid rgba(17,16,16,0.1);
          padding: 16px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .scroll-hint {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.5;
        }
        .scan-line {
          width: 36px; height: 1px;
          background: rgba(17,16,16,0.15);
          overflow: hidden;
          position: relative;
        }
        .scan-line::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: var(--red);
          animation: scan 1.8s linear infinite;
        }
        @keyframes scan { to { left: 100%; } }

        .contact-link {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--mid);
          text-decoration: none;
          opacity: 0.45;
          transition: opacity 0.2s;
        }
        .contact-link:hover { opacity: 1; }

        /* RESPONSIVE */
        @media (max-width: 1023px) {
          .nav-bar { padding: 16px 24px; }
          .status-pill { display: none; }
          .main-grid { grid-template-columns: 1fr; }
          .left-col { padding: 40px 24px 32px; border-right: none; border-bottom: 1px solid rgba(17,16,16,0.1); }
          .right-col { padding: 32px 24px; }
          .foot-bar { padding: 14px 24px; }
        }
        @media (max-width: 768px) {
          .nav-bar { padding: 14px 20px; }
          .status-pill { display: none; }
          .main-grid { grid-template-columns: 1fr; }
          .left-col { padding: 32px 20px 28px; border-right: none; border-bottom: 1px solid rgba(17,16,16,0.1); }
          .right-col { padding: 28px 20px; }
          .headline { font-size: clamp(44px, 12vw, 68px); }
          .bio { font-size: 11px; margin-bottom: 28px; }
          .foot-bar { padding: 12px 20px; }
        }
        @media (max-width: 640px) {
          .nav-bar { padding: 12px 16px; }
          .desktop-nav-links { display: none; }
          .status-pill { display: none; }
          .main-grid { grid-template-columns: 1fr; }
          .left-col { padding: 28px 16px 24px; border-right: none; border-bottom: 1px solid rgba(17,16,16,0.1); }
          .headline { font-size: clamp(36px, 14vw, 52px); }
          .headline-italic { font-size: clamp(18px, 5vw, 28px); margin-bottom: 18px; }
          .bio { font-size: 10.5px; margin-bottom: 24px; max-width: 100%; }
          .cta-row { flex-direction: column; align-items: stretch; gap: 12px; margin-bottom: 24px; }
          .btn-main { width: 100%; text-align: center; padding: 12px 20px; }
          .btn-ghost { justify-content: center; }
          .right-col { padding: 24px 16px; gap: 16px; }
          .project-card { padding: 14px 12px; }
          .proj-name { font-size: 14px; }
          .proj-stat-num { font-size: 18px; }
          .metric-cell { padding: 12px 8px; }
          .metric-num { font-size: 22px; }
          .foot-bar { padding: 10px 16px; flex-direction: column; align-items: flex-start; }
          .foot-bar .scroll-hint { display: none; }
        }
        @media (max-width: 380px) {
          .headline { font-size: 32px; }
          .headline-italic { font-size: 18px; }
          .metrics-grid { grid-template-columns: repeat(2, 1fr); }
          .logo-mark { font-size: 16px; }
        }
      `}</style>

      {/* ── MOBILE MENU OVERLAY ── rendered via React, not CSS toggling ── */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "var(--paper)",
            zIndex: 10000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          {/* ✕ close button */}
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: "18px",
              right: "18px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--ink)",
              fontFamily: "'DM Mono', monospace",
              fontSize: "22px",
              lineHeight: 1,
              padding: "8px",
              opacity: 0.7,
            }}
            aria-label="Close menu"
          >
            ✕
          </button>

          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(40px, 12vw, 64px)",
                letterSpacing: "4px",
                color: "var(--ink)",
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <div className="hero-wrap">
        <header className="nav-bar">
          <div className="logo-mark">Arka<span>.</span></div>

          {/* Desktop nav — hidden on mobile via CSS class */}
          <ul className="nav-links desktop-nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="status-pill">
            <span className="pulse-dot" />
            Open to opportunities
          </div>

          <DarkModeToggle />

          {/* Hamburger — always rendered, visibility controlled by isMobile */}
          {isMobile && (
            <button
              type="button"
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle menu"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "5px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px",
                zIndex: 10001,
                position: "relative",
              }}
            >
              <span style={{
                display: "block", width: "22px", height: "2px",
                background: "var(--ink)", borderRadius: "2px",
                transition: "transform 0.25s",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }} />
              <span style={{
                display: "block", width: "22px", height: "2px",
                background: "var(--ink)", borderRadius: "2px",
                transition: "opacity 0.25s",
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: "block", width: "22px", height: "2px",
                background: "var(--ink)", borderRadius: "2px",
                transition: "transform 0.25s",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }} />
            </button>
          )}
        </header>

        <main className="main-grid">
          <div className="left-col">
            <div className="eyebrow">UI/UX Designer · Aspiring Design Lead</div>

            <h1 className="headline">
              Arkaprava
              <br />
              Santra
            </h1>
            <span className="headline-italic">Designed for humans.</span>

            <p className="bio">
              I turn messy research into{" "}
              <strong>clean, intentional interfaces</strong>. From emergency
              health apps to AI-powered knowledge tools — I design products that
              reduce friction, not add it. <strong>B.Tech CSE</strong>{" "}
              background. Certified in UI/UX Design.
            </p>

            <div className="cta-row">
              <a href="#work" className="btn-main">
                <span>View Case Studies</span>
              </a>
              <a href="mailto:arkapravasantra17@gmail.com" className="btn-ghost">
                Get in touch →
              </a>
            </div>

            <div className="tool-strip">
              {tools.map((t) => (
                <span key={t} className="tool-chip">{t}</span>
              ))}
            </div>
          </div>

          <div className="right-col">
            <div className="recognition">
              <span className="rec-icon">✦</span>
              <p className="rec-text">
                Recognized by <strong>Fabricio Teixeira</strong> (UX Collective
                founder) for clarity in problem framing and solution logic — AI
                Knowledge Base project, 2025.
              </p>
            </div>

            <div className="projects-label">Selected Projects</div>

            {projects.map((p) => (
              <div className="project-card" key={p.name}>
                <div>
                  <div className="proj-name">{p.name}</div>
                  <div className="proj-full">{p.full}</div>
                </div>
                <div className="proj-stat">
                  <span className="proj-stat-num">{p.stat}</span>
                  <span className="proj-stat-label">{p.label}</span>
                </div>
              </div>
            ))}

            <div className="metrics-grid">
              <div className="metric-cell">
                <span className="metric-num">3</span>
                <span className="metric-label">Products</span>
              </div>
              <div className="metric-cell">
                <span className="metric-num">70+</span>
                <span className="metric-label">Design Assets</span>
              </div>
              <div className="metric-cell">
                <span className="metric-num">40%</span>
                <span className="metric-label">Errors Removed</span>
              </div>
            </div>
          </div>
        </main>

        <footer className="foot-bar">
          <div className="scroll-hint">
            <span className="scan-line" />
            Scroll to explore
          </div>
          <a href="mailto:arkapravasantra17@gmail.com" className="contact-link">
            arkapravasantra17@gmail.com
          </a>
          <div className="scroll-hint" style={{ opacity: 0.35 }}>
            Kolkata, IN · Remote
          </div>
        </footer>
      </div>
    </>
  );
};

export default Hero;