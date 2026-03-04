import React, { useState } from "react";

const tools = ["Figma", "Framer", "Webflow", "Canva", "Cursor"];

const values = [
  {
    word: "Empathy",
    icon: "◎",
    desc: "Every decision starts with understanding the person using the product — their needs, frustrations, and context.",
  },
  {
    word: "Function",
    icon: "⬡",
    desc: "Aesthetics earn nothing without utility. I design for clarity first, then refine for beauty.",
  },
  {
    word: "Elegance",
    icon: "✦",
    desc: "The right solution feels inevitable. I pursue simplicity that doesn't sacrifice depth.",
  },
];

const interests = [
  { label: "Reading", emoji: "📖" },
  { label: "Guitar", emoji: "🎸" },
  { label: "Painting", emoji: "🎨" },
  { label: "Photography", emoji: "📷" },
];

const About = () => {
  const [activeValue, setActiveValue] = useState<string | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .ab-root {
          min-height: 100vh;
          background: #080b14;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          color: #fff;
        }

        /* Background effects */
        .ab-bg-orb-1 {
          position: absolute;
          top: 5%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(ellipse, rgba(99,102,241,0.14) 0%, transparent 65%);
          filter: blur(70px);
          pointer-events: none;
          z-index: 0;
        }
        .ab-bg-orb-2 {
          position: absolute;
          bottom: 0%;
          left: -10%;
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(6,182,212,0.10) 0%, transparent 65%);
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .ab-bg-grid {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%);
        }

        /* Inner wrapper */
        .ab-inner {
          position: relative;
          z-index: 2;
          max-width: 1160px;
          margin: 0 auto;
          padding: 80px 48px 100px;
        }

        /* Section header */
        .ab-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 72px;
          opacity: 0;
          animation: abFadeUp 0.7s ease forwards 0.1s;
        }

        .ab-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .ab-eyebrow-line {
          width: 32px;
          height: 1px;
          background: linear-gradient(90deg, #818cf8, #67e8f9);
        }
        .ab-eyebrow-text {
          font-size: 11px;
          font-weight: 500;
          color: #818cf8;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }
        .ab-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(48px, 6vw, 80px);
          line-height: 1;
          letter-spacing: -2px;
          color: #fff;
        }
        .ab-title-accent {
          background: linear-gradient(135deg, #818cf8 0%, #67e8f9 60%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .ab-header-num {
          font-family: 'Syne', sans-serif;
          font-size: 120px;
          font-weight: 800;
          line-height: 1;
          color: rgba(255,255,255,0.03);
          letter-spacing: -4px;
          user-select: none;
        }

        /* Main grid */
        .ab-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
        }

        /* LEFT column */
        .ab-left {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        /* Bio card */
        .ab-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px;
          backdrop-filter: blur(10px);
          opacity: 0;
          animation: abFadeUp 0.7s ease forwards;
        }
        .ab-card:nth-child(1) { animation-delay: 0.2s; }
        .ab-card:nth-child(2) { animation-delay: 0.3s; }
        .ab-card:nth-child(3) { animation-delay: 0.4s; }

        .ab-card-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ab-card-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.06);
        }

        .ab-bio-text {
          font-size: 15px;
          line-height: 1.85;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
        }
        .ab-bio-text strong {
          color: rgba(255,255,255,0.85);
          font-weight: 500;
        }

        /* Values */
        .ab-values {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .ab-value-item {
          padding: 18px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          cursor: pointer;
          transition: all 0.2s;
        }
        .ab-value-item:first-child { border-top: 1px solid rgba(255,255,255,0.06); }

        .ab-value-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .ab-value-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .ab-value-icon {
          font-size: 16px;
          color: rgba(129,140,248,0.4);
          transition: color 0.2s;
          width: 20px;
          text-align: center;
        }
        .ab-value-item.active .ab-value-icon,
        .ab-value-item:hover .ab-value-icon {
          color: #818cf8;
        }
        .ab-value-word {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: rgba(255,255,255,0.6);
          letter-spacing: -0.5px;
          transition: color 0.2s;
        }
        .ab-value-item.active .ab-value-word,
        .ab-value-item:hover .ab-value-word {
          color: #fff;
        }
        .ab-value-arrow {
          font-size: 14px;
          color: rgba(255,255,255,0.15);
          transition: all 0.25s;
        }
        .ab-value-item.active .ab-value-arrow,
        .ab-value-item:hover .ab-value-arrow {
          color: #818cf8;
          transform: rotate(90deg);
        }
        .ab-value-desc {
          font-size: 13px;
          line-height: 1.7;
          color: rgba(255,255,255,0.4);
          font-weight: 300;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, opacity 0.3s ease, padding 0.3s ease;
          opacity: 0;
          padding-left: 34px;
        }
        .ab-value-item.active .ab-value-desc {
          max-height: 80px;
          opacity: 1;
          padding-top: 10px;
        }

        /* CTA */
        .ab-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none;
          border-radius: 100px;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          padding: 14px 28px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s;
          box-shadow: 0 8px 32px rgba(99,102,241,0.35);
          width: fit-content;
        }
        .ab-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(99,102,241,0.5);
        }

        /* RIGHT column */
        .ab-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* Edu card */
        .ab-edu-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 28px 32px;
          opacity: 0;
          animation: abFadeUp 0.7s ease forwards 0.35s;
          position: relative;
          overflow: hidden;
        }
        .ab-edu-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #67e8f9);
        }
        .ab-edu-degree {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.5px;
          margin-bottom: 6px;
        }
        .ab-edu-school {
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          font-weight: 300;
          letter-spacing: 0.3px;
          margin-bottom: 4px;
        }
        .ab-edu-year {
          font-size: 11px;
          color: #818cf8;
          letter-spacing: 0.5px;
        }

        /* Tools */
        .ab-tools-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 28px 32px;
          opacity: 0;
          animation: abFadeUp 0.7s ease forwards 0.45s;
        }
        .ab-tools-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }
        .ab-tool-tag {
          font-size: 11px;
          font-weight: 400;
          padding: 7px 15px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.4px;
          background: rgba(255,255,255,0.03);
          transition: all 0.2s;
          cursor: default;
        }
        .ab-tool-tag:hover {
          border-color: rgba(129,140,248,0.5);
          color: #818cf8;
          background: rgba(99,102,241,0.08);
        }

        /* Interests */
        .ab-interests-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 28px 32px;
          opacity: 0;
          animation: abFadeUp 0.7s ease forwards 0.55s;
        }
        .ab-interests-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 4px;
        }
        .ab-interest-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          transition: all 0.2s;
          cursor: default;
        }
        .ab-interest-item:hover {
          border-color: rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
        }
        .ab-interest-emoji { font-size: 16px; }
        .ab-interest-label {
          font-size: 12px;
          color: rgba(255,255,255,0.5);
          font-weight: 400;
          letter-spacing: 0.3px;
        }

        /* Recognition */
        .ab-rec-card {
          border-radius: 20px;
          padding: 28px 32px;
          background: linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(103,232,249,0.08) 100%);
          border: 1px solid rgba(129,140,248,0.2);
          opacity: 0;
          animation: abFadeUp 0.7s ease forwards 0.65s;
        }
        .ab-rec-inner {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .ab-rec-star {
          font-size: 20px;
          flex-shrink: 0;
          color: #818cf8;
          margin-top: 2px;
        }
        .ab-rec-text {
          font-size: 13px;
          line-height: 1.8;
          color: rgba(255,255,255,0.55);
          font-weight: 300;
        }
        .ab-rec-text strong { color: rgba(255,255,255,0.85); font-weight: 500; }

        /* Footer row */
        .ab-footer {
          margin-top: 56px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex;
          justify-content: space-between;
          align-items: center;
          opacity: 0;
          animation: abFadeUp 0.7s ease forwards 0.75s;
        }
        .ab-foot-note {
          font-size: 11px;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ab-foot-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px #4ade80;
          animation: abPulse 2s ease-in-out infinite;
        }
        @keyframes abPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .ab-foot-email {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
        }
        .ab-foot-email:hover {
          color: #818cf8;
          gap: 14px;
        }

        @keyframes abFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 900px) {
          .ab-inner { padding: 56px 24px 72px; }
          .ab-grid { grid-template-columns: 1fr; gap: 32px; }
          .ab-header { margin-bottom: 48px; }
          .ab-header-num { display: none; }
        }

        @media (max-width: 640px) {
          .ab-inner { padding: 40px 20px 56px; }
          .ab-title { font-size: 40px; letter-spacing: -1px; }
          .ab-interests-grid { grid-template-columns: 1fr 1fr; }
          .ab-footer { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
      `}</style>

      <section id="about" className="ab-root">
        <div className="ab-bg-orb-1" />
        <div className="ab-bg-orb-2" />
        <div className="ab-bg-grid" />

        <div className="ab-inner">
          {/* Header */}
          <div className="ab-header">
            <div>
              <div className="ab-eyebrow">
                <div className="ab-eyebrow-line" />
                <span className="ab-eyebrow-text">Background & Philosophy</span>
              </div>
              <h2 className="ab-title">
                About <span className="ab-title-accent">Me</span>
              </h2>
            </div>
            <div className="ab-header-num">01</div>
          </div>

          {/* Body grid */}
          <div className="ab-grid">
            {/* LEFT */}
            <div className="ab-left">
              {/* Who I am */}
              <div className="ab-card">
                <div className="ab-card-label">Who I am</div>
                <p className="ab-bio-text">
                  Hey — I'm <strong>Arkaprava Santra</strong>, a UI/UX Designer
                  based in Kolkata, India. My{" "}
                  <strong>B.Tech in Computer Science</strong> gives me an
                  unusual lens: I understand both the design problem and the
                  technical constraints it lives within. I don't just make
                  things look good — I make them <strong>work better</strong>{" "}
                  for the people using them.
                </p>
              </div>

              {/* How I work */}
              <div className="ab-card">
                <div className="ab-card-label">How I work</div>
                <p className="ab-bio-text">
                  My process starts with research — talking to users, mapping
                  flows, identifying where things break down. From there I move
                  fast: sketches, wireframes, high-fidelity prototypes. I'm{" "}
                  <strong>certified in UI/UX Design</strong> and obsessed with
                  the gap between a good interface and a great one.
                </p>
              </div>

              {/* Values */}
              <div className="ab-card">
                <div className="ab-card-label">Core values</div>
                <div className="ab-values">
                  {values.map((v) => (
                    <div
                      key={v.word}
                      className={`ab-value-item${activeValue === v.word ? " active" : ""}`}
                      onClick={() =>
                        setActiveValue(activeValue === v.word ? null : v.word)
                      }
                    >
                      <div className="ab-value-row">
                        <div className="ab-value-left">
                          <span className="ab-value-icon">{v.icon}</span>
                          <span className="ab-value-word">{v.word}</span>
                        </div>
                        <span className="ab-value-arrow">›</span>
                      </div>
                      <div className="ab-value-desc">{v.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://drive.google.com/file/d/1kLvg3UuEbi7b_luPddZkr4gLL6dA5NPv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="ab-cta"
              >
                ↓ View / Download Résumé
              </a>
            </div>

            {/* RIGHT */}
            <div className="ab-right">
              {/* Education */}
              <div className="ab-edu-card">
                <div className="ab-card-label">Education</div>
                <div className="ab-edu-degree">B.Tech · Computer Science</div>
                <div className="ab-edu-school">
                  Budge Budge Institute of Technology, Kolkata
                </div>
                <div className="ab-edu-year">
                  2020 – 2024 · Certified in UI/UX Design, EventBeep
                </div>
              </div>

              {/* Tools */}
              <div className="ab-tools-card">
                <div className="ab-card-label">Design Toolbox</div>
                <div className="ab-tools-grid">
                  {tools.map((t) => (
                    <span key={t} className="ab-tool-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="ab-interests-card">
                <div className="ab-card-label">Outside of design</div>
                <div className="ab-interests-grid">
                  {interests.map((i) => (
                    <div key={i.label} className="ab-interest-item">
                      <span className="ab-interest-emoji">{i.emoji}</span>
                      <span className="ab-interest-label">{i.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recognition */}
              <div className="ab-rec-card">
                <div className="ab-rec-inner">
                  <span className="ab-rec-star">✦</span>
                  <p className="ab-rec-text">
                    Recognized by <strong>Fabricio Teixeira</strong> (UX
                    Collective founder) for clarity in problem framing and
                    solution logic — AI Knowledge Base, 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="ab-footer">
            <div className="ab-foot-note">
              <div className="ab-foot-dot" />
              Kolkata, IN · Open to remote work
            </div>
            <a
              href="mailto:arkapravasantra17@gmail.com"
              className="ab-foot-email"
            >
              arkapravasantra17@gmail.com →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
