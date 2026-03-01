import React, { useRef, useEffect, useState } from "react";

const technologies = [
  { name: "Figma", category: "Interface Design", primary: true },
  { name: "Framer", category: "Motion & Prototyping" },
  { name: "Webflow", category: "Web Builder" },
  { name: "Canva", category: "Visual Design" },
  { name: "Cursor", category: "AI-Assisted Dev" },
  { name: "Notion", category: "Documentation" },
  { name: "Tailwind CSS", category: "CSS Framework" },
  { name: "React", category: "Frontend Framework" },
  { name: "GitHub", category: "Version Control" },
];

// Tripled for seamless loop
const track = [...technologies, ...technologies, ...technologies];

const TechStack = () => {
  const railRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);

  // Keep ref in sync so the rAF loop can read it without stale closure
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    const SPEED = 0.55; // px per frame

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        // reset after one full set width
        const setW = el.scrollWidth / 3;
        if (posRef.current >= setW) posRef.current -= setW;
        el.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap');

        :root {
          --ink: #111010;
          --paper: #f0ece3;
          --red: #c0392b;
          --mid: #6b6560;
          --border: rgba(17,16,16,0.1);
        }

        :root.dark {
          --ink: #f0ece3;
          --paper: #0f0e0d;
          --red: #ff5247;
          --mid: #9b9490;
          --border: rgba(240,236,227,0.1);
        }

        .ts-section {
          background: var(--paper);
          font-family: 'DM Mono', monospace;
          overflow: hidden;
        }

        /* ── Header ── */
        .ts-header {
          padding: 72px 48px 56px;
          border-bottom: 1px solid var(--border);
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          gap: 32px;
        }
        .ts-eyebrow {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ts-eyebrow::before {
          content: '';
          width: 28px; height: 1px;
          background: var(--red);
          display: block;
          flex-shrink: 0;
        }
        .ts-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 7vw, 96px);
          line-height: 0.9;
          letter-spacing: 2px;
          color: var(--ink);
        }
        .ts-title-italic {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          color: var(--red);
          font-size: 0.55em;
          display: block;
          letter-spacing: 0;
          line-height: 1.3;
          margin-top: 6px;
        }
        .ts-meta { text-align: right; }
        .ts-meta-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 64px;
          line-height: 1;
          color: var(--ink);
          opacity: 0.07;
          letter-spacing: 2px;
        }
        .ts-meta-label {
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--mid);
          margin-top: -8px;
        }

        /* ── Marquee wrapper ── */
        .ts-marquee-outer {
          border-bottom: 1px solid var(--border);
          position: relative;
          padding: 52px 0;
        }
        /* fade edges */
        .ts-marquee-outer::before,
        .ts-marquee-outer::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 120px;
          z-index: 10;
          pointer-events: none;
        }
        .ts-marquee-outer::before {
          left: 0;
          background: linear-gradient(to right, var(--paper), transparent);
        }
        .ts-marquee-outer::after {
          right: 0;
          background: linear-gradient(to left, var(--paper), transparent);
        }

        .ts-marquee-clip {
          overflow: hidden;
        }
        .ts-rail {
          display: flex;
          gap: 16px;
          width: max-content;
          will-change: transform;
        }

        /* ── Tool card ── */
        .ts-card {
          flex-shrink: 0;
          border: 1px solid var(--border);
          padding: 24px 32px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-width: 200px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.2s, background 0.2s;
          cursor: default;
        }
        .ts-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--red);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .ts-card:hover { background: rgba(17,16,16,0.025); border-color: rgba(17,16,16,0.22); }
        .ts-card:hover::before { transform: scaleX(1); }
        .ts-card.primary { border-color: rgba(17,16,16,0.2); }

        .ts-card-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          letter-spacing: 2px;
          color: var(--ink);
          line-height: 1;
          transition: color 0.2s;
        }
        .ts-card:hover .ts-card-name { color: var(--ink); }
        .ts-card.primary .ts-card-name { color: var(--red); }

        .ts-card-cat {
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.55;
        }

        /* primary badge */
        .ts-card-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 8px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--red);
          margin-top: 4px;
          opacity: 0.8;
        }
        .ts-card-badge::before {
          content: '◆';
          font-size: 5px;
        }

        /* ── List view ── */
        .ts-list {
          border-bottom: 1px solid var(--border);
        }
        .ts-list-head {
          display: grid;
          grid-template-columns: 56px 1fr 1fr auto;
          padding: 14px 48px;
          border-bottom: 1px solid var(--border);
          background: rgba(17,16,16,0.02);
        }
        .ts-list-head span {
          font-size: 8px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.6;
        }
        .ts-list-row {
          display: grid;
          grid-template-columns: 56px 1fr 1fr auto;
          padding: 18px 48px;
          border-bottom: 1px solid var(--border);
          align-items: center;
          transition: background 0.2s;
          position: relative;
          overflow: hidden;
        }
        .ts-list-row::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--red);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.25s;
        }
        .ts-list-row:hover { background: rgba(17,16,16,0.025); }
        .ts-list-row:hover::before { transform: scaleY(1); }
        .ts-list-row:last-child { border-bottom: none; }

        .ts-row-idx {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 2px;
          color: var(--ink);
          opacity: 0.15;
          transition: opacity 0.2s, color 0.2s;
        }
        .ts-list-row:hover .ts-row-idx { opacity: 1; color: var(--red); }

        .ts-row-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          letter-spacing: 2px;
          color: var(--ink);
          line-height: 1;
        }
        .ts-row-cat {
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.55;
        }
        .ts-row-primary {
          font-size: 8px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--red);
          opacity: 0;
        }
        .ts-list-row.is-primary .ts-row-primary { opacity: 0.8; }

        /* ── Controls bar ── */
        .ts-controls {
          padding: 20px 48px;
          border-bottom: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ts-pause-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: 1px solid var(--border);
          padding: 8px 18px;
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--ink);
          cursor: pointer;
          opacity: 0.55;
          transition: all 0.2s;
        }
        .ts-pause-btn:hover { opacity: 1; border-color: rgba(17,16,16,0.3); }
        .ts-pause-btn .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--red);
          animation: blink 2s infinite;
        }
        .ts-pause-btn.is-paused .dot { animation: none; opacity: 0.3; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .ts-hint {
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.35;
        }

        /* ── Footer ── */
        .ts-footer {
          padding: 22px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ts-foot-note {
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.35;
        }
        .ts-cta {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--ink);
          color: var(--paper);
          padding: 12px 28px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s;
        }
        .ts-cta::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--red);
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.77,0,0.175,1);
        }
        .ts-cta:hover::after { transform: translateX(0); }
        .ts-cta:hover { transform: translateY(-1px); }
        .ts-cta span { position: relative; z-index: 1; }

        /* ── Responsive ───────────────────────────────────────────── */
        @media (max-width: 1024px) {
          .ts-header {
            padding: 64px 36px 48px;
            gap: 28px;
          }
          .ts-title {
            font-size: clamp(48px, 8vw, 90px);
          }
          .ts-marquee-outer {
            padding: 48px 0;
          }
          .ts-marquee-outer::before,
          .ts-marquee-outer::after {
            width: 100px;
          }
          .ts-card {
            min-width: 180px;
            padding: 20px 28px;
          }
          .ts-card-name {
            font-size: 24px;
          }
          .ts-controls,
          .ts-list-head,
          .ts-list-row,
          .ts-footer {
            padding-left: 36px;
            padding-right: 36px;
          }
        }

        /* Tablet: 768-1024px */
        @media (max-width: 768px) {
          .ts-header {
            padding: 56px 28px 40px;
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .ts-title {
            font-size: clamp(40px, 10vw, 72px);
          }
          .ts-marquee-outer {
            padding: 40px 0;
          }
          .ts-marquee-outer::before,
          .ts-marquee-outer::after {
            width: 80px;
          }
          .ts-card {
            min-width: 160px;
            padding: 18px 24px;
            gap: 4px;
          }
          .ts-card-name {
            font-size: 20px;
            letter-spacing: 1px;
          }
          .ts-card-cat {
            font-size: 8px;
          }
          .ts-controls,
          .ts-list-head,
          .ts-list-row,
          .ts-footer {
            padding-left: 28px;
            padding-right: 28px;
          }
          .ts-pause-btn {
            font-size: 8px;
            padding: 6px 16px;
          }
          .ts-cta {
            font-size: 9px;
            padding: 10px 24px;
          }
        }

        /* Mobile: below 768px */
        @media (max-width: 640px) {
          .ts-section {
            padding: 0;
          }
          .ts-header {
            padding: 48px 20px 36px;
            gap: 20px;
          }
          .ts-title {
            font-size: clamp(32px, 12vw, 56px);
            letter-spacing: 1px;
          }
          .ts-eyebrow {
            font-size: 9px;
            margin-bottom: 14px;
          }
          .ts-eyebrow::before {
            width: 20px;
          }
          .ts-marquee-outer {
            padding: 36px 0;
            border-bottom: 1px solid var(--border);
          }
          .ts-marquee-outer::before,
          .ts-marquee-outer::after {
            width: 60px;
          }
          .ts-card {
            min-width: 140px;
            padding: 16px 20px;
            border: 1px solid var(--border);
          }
          .ts-card-name {
            font-size: 18px;
            letter-spacing: 1px;
          }
          .ts-card-cat {
            font-size: 7px;
            letter-spacing: 1px;
          }
          .ts-card-badge {
            font-size: 7px;
          }
          .ts-controls {
            padding: 16px 20px;
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }
          .ts-pause-btn {
            width: 100%;
            font-size: 8px;
            padding: 10px 16px;
            border: 1px solid var(--border);
            justify-content: center;
          }
          .ts-hint {
            font-size: 8px;
            text-align: center;
            opacity: 0.4;
          }
          .ts-list-head {
            display: none;
          }
          .ts-list-row {
            padding: 16px 20px;
            grid-template-columns: 1fr;
            gap: 6px;
            align-items: flex-start;
          }
          .ts-row-idx {
            display: none;
          }
          .ts-row-name {
            font-size: 18px;
            letter-spacing: 1px;
          }
          .ts-row-cat {
            font-size: 8px;
            opacity: 0.6;
          }
          .ts-row-primary {
            font-size: 7px;
            display: inline;
          }
          .ts-footer {
            padding: 16px 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .ts-foot-note {
            font-size: 8px;
          }
          .ts-cta {
            width: 100%;
            justify-content: center;
            font-size: 8px;
            padding: 12px 20px;
          }
        }

        /* Very small: below 380px */
        @media (max-width: 380px) {
          .ts-header {
            padding: 40px 16px 32px;
          }
          .ts-title {
            font-size: 28px;
          }
          .ts-marquee-outer {
            padding: 32px 0;
          }
          .ts-marquee-outer::before,
          .ts-marquee-outer::after {
            width: 50px;
          }
          .ts-card {
            min-width: 120px;
            padding: 14px 16px;
          }
          .ts-controls {
            padding: 14px 16px;
          }
          .ts-list-row {
            padding: 14px 16px;
          }
          .ts-footer {
            padding: 14px 16px;
          }
        }
      `}</style>

      <section className="ts-section">
        {/* Header */}
        <div className="ts-header">
          <div>
            <div className="ts-eyebrow">Design Toolbox</div>
            <h2 className="ts-title">
              Tech Stack
              <span className="ts-title-italic">
                The tools that power the work.
              </span>
            </h2>
          </div>
          <div className="ts-meta">
            <div className="ts-meta-num">09</div>
            <div className="ts-meta-label">Tools</div>
          </div>
        </div>

        {/* Controls bar */}
        <div className="ts-controls">
          <button
            type="button"
            className={`ts-pause-btn ${paused ? "is-paused" : ""}`}
            onClick={() => setPaused((p) => !p)}
          >
            <span className="dot" />
            {paused ? "Resume scroll" : "Pause scroll"}
          </button>
          <span className="ts-hint">Hover marquee to pause</span>
        </div>

        {/* Marquee */}
        <div
          className="ts-marquee-outer"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="ts-marquee-clip">
            <div className="ts-rail" ref={railRef}>
              {track.map((t, i) => (
                <div
                  key={i}
                  className={`ts-card ${t.primary ? "primary" : ""}`}
                >
                  <div className="ts-card-name">{t.name}</div>
                  <div className="ts-card-cat">{t.category}</div>
                  {t.primary && (
                    <div className="ts-card-badge">Primary tool</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* List view */}
        <div className="ts-list">
          <div className="ts-list-head">
            <span>#</span>
            <span>Tool</span>
            <span>Category</span>
            <span>Role</span>
          </div>
          {technologies.map((t, i) => (
            <div
              key={t.name}
              className={`ts-list-row ${t.primary ? "is-primary" : ""}`}
            >
              <div className="ts-row-idx">{String(i + 1).padStart(2, "0")}</div>
              <div className="ts-row-name">{t.name}</div>
              <div className="ts-row-cat">{t.category}</div>
              <div className="ts-row-primary">Primary</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="ts-footer">
          <span className="ts-foot-note">Tools used in live projects</span>
          <a href="#contact" className="ts-cta">
            <span>Start a project →</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default TechStack;
