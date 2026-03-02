import React, { useState } from "react";

const tools = ["Figma", "Framer", "Webflow", "Canva", "Cursor"];

const values = [
  {
    word: "Empathy",
    desc: "Every decision starts with understanding the person using the product — their needs, frustrations, and context.",
  },
  {
    word: "Function",
    desc: "Aesthetics earn nothing without utility. I design for clarity first, then refine for beauty.",
  },
  {
    word: "Elegance",
    desc: "The right solution feels inevitable. I pursue simplicity that doesn't sacrifice depth.",
  },
];

const interests = ["Reading", "Guitar", "Painting", "Photography"];

const About = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

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

        .about-section {
          background: var(--paper);
          font-family: 'DM Mono', monospace;
        }

        /* ── Header ── */
        .about-header {
          padding: 72px 48px 56px;
          border-bottom: 1px solid var(--border);
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          gap: 32px;
        }
        .about-eyebrow {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .about-eyebrow::before {
          content: '';
          width: 28px; height: 1px;
          background: var(--red);
          display: block;
          flex-shrink: 0;
        }
        .about-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 7vw, 96px);
          line-height: 0.9;
          letter-spacing: 2px;
          color: var(--ink);
        }
        .about-title-italic {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          color: var(--red);
          font-size: 0.55em;
          display: block;
          letter-spacing: 0;
          line-height: 1.3;
          margin-top: 6px;
        }
        .about-header-meta {
          text-align: right;
        }
        .about-header-meta-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 64px;
          line-height: 1;
          color: var(--ink);
          opacity: 0.07;
          letter-spacing: 2px;
        }
        .about-header-meta-label {
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--mid);
          margin-top: -8px;
        }

        /* ── Main grid ── */
        .about-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid var(--border);
        }

        /* ── Left: bio ── */
        .about-left {
          padding: 56px 48px;
          border-right: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .bio-block {}
        .bio-label {
          font-size: 8px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.6;
          margin-bottom: 16px;
          display: block;
        }
        .bio-text {
          font-size: 13px;
          line-height: 2;
          color: var(--ink);
          font-weight: 300;
          opacity: 0.75;
        }
        .bio-text strong { font-weight: 500; opacity: 1; color: var(--ink); }

        /* Values */
        .values-block {}
        .values-label {
          font-size: 8px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.6;
          margin-bottom: 16px;
          display: block;
        }
        .value-item {
          padding: 20px 0;
          border-top: 1px solid var(--border);
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: start;
          gap: 16px;
          cursor: default;
          transition: background 0.2s;
        }
        .value-item:last-child { border-bottom: 1px solid var(--border); }
        .value-word {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          letter-spacing: 2px;
          color: var(--ink);
          line-height: 1;
          transition: color 0.2s;
        }
        .value-item:hover .value-word { color: var(--red); }
        .value-desc {
          font-size: 10px;
          line-height: 1.8;
          color: var(--mid);
          max-width: 280px;
          font-weight: 300;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.35s ease, opacity 0.3s ease;
        }
        .value-item:hover .value-desc { max-height: 80px; opacity: 1; }
        .value-arrow {
          font-size: 18px;
          color: var(--mid);
          opacity: 0.3;
          margin-top: 4px;
          transition: opacity 0.2s, transform 0.2s;
          flex-shrink: 0;
        }
        .value-item:hover .value-arrow { opacity: 1; transform: translateX(4px); }

        /* CTA */
        .about-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--ink);
          color: var(--paper);
          padding: 14px 32px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          text-decoration: none;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s;
          width: fit-content;
        }
        .about-cta::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--red);
          transform: translateX(-101%);
          transition: transform 0.38s cubic-bezier(0.77,0,0.175,1);
        }
        .about-cta:hover::after { transform: translateX(0); }
        .about-cta:hover { transform: translateY(-2px); }
        .about-cta span { position: relative; z-index: 1; }

        /* ── Right: tools + interests ── */
        .about-right {
          display: flex;
          flex-direction: column;
        }

        /* Education block */
        .edu-block {
          padding: 40px 48px;
          border-bottom: 1px solid var(--border);
        }
        .block-label {
          font-size: 8px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.6;
          margin-bottom: 20px;
          display: block;
        }
        .edu-degree {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px;
          letter-spacing: 2px;
          color: var(--ink);
          line-height: 1.1;
          display: block;
        }
        .edu-school {
          font-size: 10px;
          letter-spacing: 1.5px;
          color: var(--mid);
          text-transform: uppercase;
          margin-top: 6px;
          display: block;
        }
        .edu-year {
          font-size: 9px;
          letter-spacing: 2px;
          color: var(--mid);
          opacity: 0.5;
          margin-top: 4px;
          display: block;
        }

        /* Tools */
        .tools-block {
          padding: 40px 48px;
          border-bottom: 1px solid var(--border);
        }
        .tools-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .tool-tag {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 8px 16px;
          border: 1px solid var(--border);
          color: var(--ink);
          opacity: 0.55;
          transition: all 0.2s;
          position: relative;
          overflow: hidden;
        }
        .tool-tag::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--ink);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
          z-index: 0;
        }
        .tool-tag:hover { opacity: 1; color: var(--paper); border-color: var(--ink); }
        .tool-tag:hover::after { transform: scaleX(1); }
        .tool-tag span { position: relative; z-index: 1; }

        /* Interests */
        .interests-block {
          padding: 40px 48px;
          border-bottom: 1px solid var(--border);
        }
        .interests-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
        }
        .interest-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px 10px 0;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.5;
          transition: opacity 0.2s;
        }
        .interest-item:hover { opacity: 1; }
        .interest-item::before {
          content: '◆';
          font-size: 5px;
          color: var(--red);
        }

        /* Recognition */
        .rec-block {
          padding: 32px 48px;
          background: var(--ink);
        }
        .rec-inner {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .rec-star {
          font-size: 16px;
          flex-shrink: 0;
          color: var(--paper);
          opacity: 0.4;
          margin-top: 2px;
        }
        .rec-copy {
          font-size: 10px;
          line-height: 1.8;
          color: var(--paper);
          opacity: 0.6;
          letter-spacing: 0.5px;
          font-weight: 300;
        }
        .rec-copy strong { opacity: 1; font-weight: 500; }

        /* Footer */
        .about-footer {
          padding: 22px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .foot-note {
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.35;
        }
        .foot-link {
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--ink);
          text-decoration: none;
          opacity: 0.45;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: opacity 0.2s, gap 0.2s;
        }
        .foot-link:hover { opacity: 1; gap: 14px; }

        /* ── Responsive ───────────────────────────────────────────── */
        @media (max-width: 1024px) {
          .about-header {
            padding: 56px 32px 40px;
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .about-title {
            font-size: clamp(48px, 8vw, 80px);
          }
          .about-header-meta {
            text-align: left;
          }
          .about-body {
            grid-template-columns: 1fr;
          }
          .about-left {
            padding: 40px 32px;
            border-right: none;
            border-bottom: 1px solid var(--border);
          }
          .about-right {
            border-top: none;
          }
          .edu-block,
          .tools-block,
          .interests-block,
          .rec-block,
          .about-footer {
            padding-left: 32px;
            padding-right: 32px;
          }
        }

        /* Tablet: 768-1024px */
        @media (max-width: 768px) {
          .about-header {
            padding: 48px 24px 36px;
            gap: 20px;
          }
          .about-title {
            font-size: clamp(40px, 10vw, 68px);
          }
          .about-eyebrow {
            font-size: 9px;
            margin-bottom: 16px;
          }
          .about-header-meta-num {
            font-size: 48px;
          }
          .bio-text {
            font-size: 12px;
            line-height: 1.8;
            opacity: 0.8;
          }
          .values-block {
            gap: 8px;
          }
          .value-item {
            padding: 16px 0;
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .value-word {
            font-size: 24px;
          }
          .value-desc {
            display: none;
          }
          .value-arrow {
            display: none;
          }
          .about-left {
            padding: 32px 24px;
            gap: 32px;
          }
          .edu-block,
          .tools-block,
          .interests-block,
          .rec-block {
            padding: 28px 24px;
          }
          .about-footer {
            padding: 18px 24px;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .edu-degree {
            font-size: 22px;
          }
          .about-cta {
            padding: 12px 28px;
            font-size: 9px;
          }
        }

        /* Mobile: below 768px */
        @media (max-width: 640px) {
          .about-section {
            padding: 0;
          }
          .about-header {
            padding: 40px 20px 32px;
            gap: 16px;
          }
          .about-title {
            font-size: clamp(32px, 12vw, 52px);
            letter-spacing: 1px;
          }
          .about-eyebrow {
            font-size: 8px;
            margin-bottom: 14px;
            gap: 10px;
          }
          .about-eyebrow::before {
            width: 20px;
          }
          .bio-label {
            font-size: 7px;
            margin-bottom: 12px;
            letter-spacing: 2px;
          }
          .bio-text {
            font-size: 11px;
            line-height: 1.7;
            opacity: 0.75;
          }
          .about-left {
            padding: 28px 20px;
            gap: 28px;
          }
          .value-item {
            padding: 14px 0;
          }
          .value-word {
            font-size: 20px;
          }
          .block-label {
            font-size: 7px;
            margin-bottom: 16px;
            letter-spacing: 2px;
          }
          .edu-degree {
            font-size: 18px;
            letter-spacing: 1px;
          }
          .edu-school {
            font-size: 9px;
            margin-top: 4px;
          }
          .edu-block,
          .tools-block,
          .interests-block,
          .rec-block {
            padding: 24px 20px;
          }
          .tools-grid {
            gap: 6px;
          }
          .tool-tag {
            font-size: 8px;
            padding: 6px 12px;
          }
          .interests-row {
            gap: 0;
          }
          .interest-item {
            padding: 8px 14px 8px 0;
            font-size: 9px;
            letter-spacing: 1px;
          }
          .rec-copy {
            font-size: 9px;
            line-height: 1.7;
          }
          .about-footer {
            padding: 16px 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .foot-note {
            font-size: 8px;
            letter-spacing: 2px;
          }
          .foot-link {
            font-size: 8px;
            width: 100%;
          }
          .about-cta {
            padding: 10px 24px;
            font-size: 8px;
            letter-spacing: 2px;
          }
        }

        /* Very small: below 380px */
        @media (max-width: 380px) {
          .about-header {
            padding: 32px 16px 28px;
          }
          .about-title {
            font-size: 28px;
          }
          .about-eyebrow {
            font-size: 7px;
            gap: 8px;
          }
          .bio-text {
            font-size: 10px;
          }
          .about-left {
            padding: 24px 16px;
            gap: 24px;
          }
          .edu-block,
          .tools-block,
          .interests-block,
          .rec-block {
            padding: 20px 16px;
          }
          .about-footer {
            padding: 14px 16px;
          }
          .about-cta {
            padding: 10px 20px;
            font-size: 7px;
          }
        }
      `}</style>

      <section id="about" className="about-section">
        {/* Header */}
        <div className="about-header">
          <div>
            <div className="about-eyebrow">Background & Philosophy</div>
            <h2 className="about-title">
              About
              <span className="about-title-italic">
                The person behind the work.
              </span>
            </h2>
          </div>
          <div className="about-header-meta">
            <div className="about-header-meta-num">01</div>
            <div className="about-header-meta-label">Designer</div>
          </div>
        </div>

        {/* Body */}
        <div className="about-body">
          {/* LEFT */}
          <div className="about-left">
            <div className="bio-block">
              <span className="bio-label">Who I am</span>
              <p className="bio-text">
                Hey — I'm <strong>Arkaprava Santra</strong>, a UI/UX Designer
                based in Kolkata, India. I have a{" "}
                <strong>B.Tech in Computer Science</strong> which gives me an
                unusual lens: I understand both the design problem and the
                technical constraints it lives within. I don't just make things
                look good — I make them <strong>work better</strong> for the
                people using them.
              </p>
            </div>

            <div className="bio-block">
              <span className="bio-label">How I work</span>
              <p className="bio-text">
                My process starts with research — talking to users, mapping
                flows, identifying where things break down. From there I move
                fast: sketches, wireframes, high-fidelity prototypes. I'm{" "}
                <strong>certified in UI/UX Design</strong>
                and obsessed with the gap between a good interface and a great
                one.
              </p>
            </div>

            {/* Values */}
            <div className="values-block">
              <span className="values-label">
                Core values — hover to expand
              </span>
              {values.map((v) => (
                <div className="value-item" key={v.word}>
                  <div>
                    <div className="value-word">{v.word}</div>
                    <div className="value-desc">{v.desc}</div>
                  </div>
                  <div className="value-arrow">→</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://drive.google.com/file/d/1kLvg3UuEbi7b_luPddZkr4gLL6dA5NPv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="about-cta"
            >
              <span>↓ View / Download Résumé</span>
            </a>
          </div>

          {/* RIGHT */}
          <div className="about-right">
            {/* Education */}
            <div className="edu-block">
              <span className="block-label">Education</span>
              <span className="edu-degree">B.Tech · Computer Science</span>
              <span className="edu-school">
                Budge Budge Institute of Technology, Kolkata
              </span>
              <span className="edu-year">
                2020 – 2024 · Certified in UI/UX Design, EventBeep
              </span>
            </div>

            {/* Tools */}
            <div className="tools-block">
              <span className="block-label">Design Toolbox</span>
              <div className="tools-grid">
                {tools.map((t) => (
                  <span key={t} className="tool-tag">
                    <span>{t}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="interests-block">
              <span className="block-label">Outside of design</span>
              <div className="interests-row">
                {interests.map((i) => (
                  <div key={i} className="interest-item">
                    {i}
                  </div>
                ))}
              </div>
            </div>

            {/* Recognition */}
            <div className="rec-block">
              <div className="rec-inner">
                <span className="rec-star">✦</span>
                <p className="rec-copy">
                  Recognized by <strong>Fabricio Teixeira</strong> (UX
                  Collective founder) for clarity in problem framing and
                  solution logic — AI Knowledge Base, 2025.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="about-footer">
          <span className="foot-note">Kolkata, IN · Open to remote work</span>
          <a href="mailto:arkapravasantra17@gmail.com" className="foot-link">
            arkapravasantra17@gmail.com →
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
