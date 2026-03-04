import React, { useState } from "react";

const skills = [
  {
    index: "01",
    name: "UI Design",
    desc: "Creating beautiful, intuitive interfaces that guide users naturally through a product.",
    tags: ["Visual Hierarchy", "Typography", "Color Systems"],
    icon: "✦",
  },
  {
    index: "02",
    name: "UX Research",
    desc: "Talking to real users, mapping behaviour, and surfacing the insights that actually matter.",
    tags: ["Surveys", "Interviews", "Competitive Analysis"],
    icon: "◎",
  },
  {
    index: "03",
    name: "Wireframing",
    desc: "Structuring information and layout before committing to high-fidelity — fast and decisive.",
    tags: ["Low-fi", "Flow Mapping", "Information Architecture"],
    icon: "⬡",
  },
  {
    index: "04",
    name: "Interaction Design",
    desc: "Designing the moments between states — transitions, feedback, and micro-interactions.",
    tags: ["Prototyping", "Motion Logic", "State Design"],
    icon: "◈",
  },
  {
    index: "05",
    name: "Design Systems",
    desc: "Building scalable component libraries that keep products consistent as they grow.",
    tags: ["Components", "Tokens", "Documentation"],
    icon: "⊞",
  },
  {
    index: "06",
    name: "Usability Testing",
    desc: "Validating decisions with real users before shipping — so problems are found early.",
    tags: ["Testing", "Iteration", "Heuristics"],
    icon: "◉",
  },
  {
    index: "07",
    name: "Responsive Design",
    desc: "Adapting layouts across every screen size without losing intent or hierarchy.",
    tags: ["Mobile-first", "Breakpoints", "Adaptive Layouts"],
    icon: "▣",
  },
  {
    index: "08",
    name: "Prototyping",
    desc: "Making ideas testable and tangible — from paper sketches to interactive Figma flows.",
    tags: ["Figma", "Framer", "Interactive Flows"],
    icon: "⬢",
  },
];

const Skills = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .sk-root {
          min-height: 100vh;
          background: #080b14;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          color: #fff;
        }

        .sk-bg-orb-1 {
          position: absolute; top: -5%; left: -5%;
          width: 550px; height: 450px;
          background: radial-gradient(ellipse, rgba(99,102,241,0.13) 0%, transparent 65%);
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .sk-bg-orb-2 {
          position: absolute; bottom: 0; right: -5%;
          width: 500px; height: 400px;
          background: radial-gradient(ellipse, rgba(6,182,212,0.10) 0%, transparent 65%);
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .sk-bg-grid {
          position: absolute; inset: 0; z-index: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%);
        }

        .sk-inner {
          position: relative; z-index: 2;
          max-width: 1160px; margin: 0 auto;
          padding: 80px 48px 100px;
        }

        /* Header */
        .sk-header {
          display: flex; align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 64px;
          opacity: 0; animation: skFadeUp 0.7s ease forwards 0.1s;
        }
        .sk-eyebrow {
          display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
        }
        .sk-eyebrow-line {
          width: 32px; height: 1px;
          background: linear-gradient(90deg, #818cf8, #67e8f9);
        }
        .sk-eyebrow-text {
          font-size: 11px; font-weight: 500; color: #818cf8;
          letter-spacing: 2.5px; text-transform: uppercase;
        }
        .sk-title {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(42px, 5.5vw, 72px);
          line-height: 1; letter-spacing: -2px; color: #fff;
        }
        .sk-title-accent {
          background: linear-gradient(135deg, #818cf8 0%, #67e8f9 60%, #a78bfa 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .sk-header-num {
          font-family: 'Syne', sans-serif; font-size: 120px; font-weight: 800;
          line-height: 1; color: rgba(255,255,255,0.03);
          letter-spacing: -4px; user-select: none;
        }

        /* Grid */
        .sk-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          opacity: 0; animation: skFadeUp 0.7s ease forwards 0.2s;
        }

        .sk-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 28px 32px;
          position: relative; overflow: hidden;
          transition: all 0.25s; cursor: default;
        }
        .sk-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #6366f1, #67e8f9);
          opacity: 0; transition: opacity 0.25s;
        }
        .sk-card:hover {
          background: rgba(255,255,255,0.055);
          border-color: rgba(255,255,255,0.13);
          transform: translateY(-3px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.3);
        }
        .sk-card:hover::before { opacity: 1; }

        .sk-card-top {
          display: flex; align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .sk-card-icon-wrap {
          width: 44px; height: 44px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
          color: rgba(129,140,248,0.6);
          transition: all 0.25s;
          flex-shrink: 0;
        }
        .sk-card:hover .sk-card-icon-wrap {
          background: rgba(99,102,241,0.12);
          border-color: rgba(129,140,248,0.3);
          color: #818cf8;
        }
        .sk-card-num {
          font-family: 'Syne', sans-serif; font-size: 12px; font-weight: 700;
          color: rgba(255,255,255,0.1); letter-spacing: 1px;
          transition: color 0.2s;
        }
        .sk-card:hover .sk-card-num { color: rgba(129,140,248,0.5); }

        .sk-card-name {
          font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 700;
          color: rgba(255,255,255,0.85); letter-spacing: -0.5px;
          line-height: 1.1; margin-bottom: 10px;
          transition: color 0.2s;
        }
        .sk-card:hover .sk-card-name { color: #fff; }

        .sk-card-desc {
          font-size: 13px; line-height: 1.75;
          color: rgba(255,255,255,0.4);
          font-weight: 300; margin-bottom: 18px;
        }

        .sk-tags {
          display: flex; flex-wrap: wrap; gap: 6px;
        }
        .sk-tag {
          font-size: 10px; font-weight: 400;
          padding: 4px 12px; border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.3px;
          background: rgba(255,255,255,0.02);
          transition: all 0.2s;
        }
        .sk-card:hover .sk-tag {
          border-color: rgba(129,140,248,0.25);
          color: rgba(129,140,248,0.7);
          background: rgba(99,102,241,0.06);
        }

        /* Footer */
        .sk-footer {
          margin-top: 48px; padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; justify-content: space-between; align-items: center;
          opacity: 0; animation: skFadeUp 0.7s ease forwards 0.45s;
        }
        .sk-foot-note {
          font-size: 11px; color: rgba(255,255,255,0.25); letter-spacing: 0.5px;
        }
        .sk-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none; border-radius: 100px;
          color: #fff; font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 500; padding: 13px 28px;
          cursor: pointer; text-decoration: none;
          transition: all 0.25s;
          box-shadow: 0 8px 32px rgba(99,102,241,0.35);
        }
        .sk-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(99,102,241,0.5); }

        @keyframes skFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .sk-inner { padding: 56px 24px 72px; }
          .sk-header { margin-bottom: 40px; }
          .sk-header-num { display: none; }
          .sk-grid { grid-template-columns: 1fr; gap: 12px; }
        }
        @media (max-width: 640px) {
          .sk-inner { padding: 40px 20px 56px; }
          .sk-title { font-size: 38px; }
          .sk-footer { flex-direction: column; align-items: flex-start; gap: 16px; }
          .sk-card { padding: 22px 24px; }
        }
      `}</style>

      <section className="sk-root">
        <div className="sk-bg-orb-1" />
        <div className="sk-bg-orb-2" />
        <div className="sk-bg-grid" />

        <div className="sk-inner">
          {/* Header */}
          <div className="sk-header">
            <div>
              <div className="sk-eyebrow">
                <div className="sk-eyebrow-line" />
                <span className="sk-eyebrow-text">Capabilities</span>
              </div>
              <h2 className="sk-title">
                What I <span className="sk-title-accent">Do</span>
              </h2>
            </div>
            <div className="sk-header-num">08</div>
          </div>

          {/* Grid */}
          <div className="sk-grid">
            {skills.map((s) => (
              <div
                key={s.name}
                className="sk-card"
                onMouseEnter={() => setHovered(s.index)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="sk-card-top">
                  <div className="sk-card-icon-wrap">{s.icon}</div>
                  <span className="sk-card-num">{s.index}</span>
                </div>
                <div className="sk-card-name">{s.name}</div>
                <div className="sk-card-desc">{s.desc}</div>
                <div className="sk-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="sk-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="sk-footer">
            <span className="sk-foot-note">All disciplines practiced in live projects</span>
            <a href="#contact" className="sk-cta">Let's work together →</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;