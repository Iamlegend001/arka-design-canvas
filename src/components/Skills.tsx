import React, { useState } from "react";

const skills = [
  {
    index: "01",
    name: "UI Design",
    desc: "Creating beautiful, intuitive interfaces that guide users naturally through a product.",
    tags: ["Visual Hierarchy", "Typography", "Color Systems"],
  },
  {
    index: "02",
    name: "UX Research",
    desc: "Talking to real users, mapping behaviour, and surfacing the insights that actually matter.",
    tags: ["Surveys", "Interviews", "Competitive Analysis"],
  },
  {
    index: "03",
    name: "Wireframing",
    desc: "Structuring information and layout before committing to high-fidelity — fast and decisive.",
    tags: ["Low-fi", "Flow Mapping", "Information Architecture"],
  },
  {
    index: "04",
    name: "Interaction Design",
    desc: "Designing the moments between states — transitions, feedback, and micro-interactions.",
    tags: ["Prototyping", "Motion Logic", "State Design"],
  },
  {
    index: "05",
    name: "Design Systems",
    desc: "Building scalable component libraries that keep products consistent as they grow.",
    tags: ["Components", "Tokens", "Documentation"],
  },
  {
    index: "06",
    name: "Usability Testing",
    desc: "Validating decisions with real users before shipping — so problems are found early.",
    tags: ["Testing", "Iteration", "Heuristics"],
  },
  {
    index: "07",
    name: "Responsive Design",
    desc: "Adapting layouts across every screen size without losing intent or hierarchy.",
    tags: ["Mobile-first", "Breakpoints", "Adaptive Layouts"],
  },
  {
    index: "08",
    name: "Prototyping",
    desc: "Making ideas testable and tangible — from paper sketches to interactive Figma flows.",
    tags: ["Figma", "Framer", "Interactive Flows"],
  },
];

const Skills = () => {
  const [hovered, setHovered] = useState(null);

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

        .skills-section {
          background: var(--paper);
          font-family: 'DM Mono', monospace;
        }

        /* Header */
        .skills-header {
          padding: 72px 48px 56px;
          border-bottom: 1px solid var(--border);
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          gap: 32px;
        }
        .skills-eyebrow {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .skills-eyebrow::before {
          content: '';
          width: 28px; height: 1px;
          background: var(--red);
          display: block;
          flex-shrink: 0;
        }
        .skills-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 7vw, 96px);
          line-height: 0.9;
          letter-spacing: 2px;
          color: var(--ink);
        }
        .skills-title-italic {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          color: var(--red);
          font-size: 0.55em;
          display: block;
          letter-spacing: 0;
          line-height: 1.3;
          margin-top: 6px;
        }
        .skills-header-meta { text-align: right; }
        .skills-header-meta-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 64px;
          line-height: 1;
          color: var(--ink);
          opacity: 0.07;
          letter-spacing: 2px;
        }
        .skills-header-meta-label {
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--mid);
          margin-top: -8px;
        }

        /* Table head */
        .skills-table-head {
          display: grid;
          grid-template-columns: 56px 1fr 1fr;
          padding: 14px 48px;
          border-bottom: 1px solid var(--border);
          background: rgba(17,16,16,0.02);
        }
        .skills-table-head span {
          font-size: 8px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.6;
        }

        /* Grid of skill rows — 2 columns */
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .skill-cell {
          padding: 28px 48px;
          border-bottom: 1px solid var(--border);
          border-right: 1px solid var(--border);
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 0 0;
          align-items: start;
          transition: background 0.2s;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .skill-cell:nth-child(even) { border-right: none; }
        .skill-cell::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--red);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.25s ease;
        }
        .skill-cell:hover { background: rgba(17,16,16,0.025); }
        .skill-cell:hover::before { transform: scaleY(1); }

        .skill-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 2px;
          color: var(--ink);
          opacity: 0.15;
          transition: opacity 0.2s, color 0.2s;
          padding-top: 3px;
        }
        .skill-cell:hover .skill-num { opacity: 1; color: var(--red); }

        .skill-content {}
        .skill-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26px;
          letter-spacing: 2px;
          color: var(--ink);
          line-height: 1;
          display: block;
          margin-bottom: 8px;
        }
        .skill-desc {
          font-size: 10px;
          line-height: 1.8;
          color: var(--mid);
          font-weight: 300;
          margin-bottom: 14px;
          display: block;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .skill-tag {
          font-size: 8px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 3px 10px;
          border: 1px solid var(--border);
          color: var(--mid);
          opacity: 0.7;
          transition: all 0.2s;
        }
        .skill-cell:hover .skill-tag {
          border-color: rgba(17,16,16,0.2);
          opacity: 1;
        }

        /* Footer */
        .skills-footer {
          padding: 24px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border);
        }
        .skills-foot-note {
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.35;
        }
        .skills-cta {
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
        .skills-cta::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--red);
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.77,0,0.175,1);
        }
        .skills-cta:hover::after { transform: translateX(0); }
        .skills-cta:hover { transform: translateY(-1px); }
        .skills-cta span { position: relative; z-index: 1; }

        /* ── Responsive ───────────────────────────────────────────── */
        @media (max-width: 1024px) {
          .skills-header {
            padding: 64px 36px 48px;
            gap: 28px;
          }
          .skills-title {
            font-size: clamp(48px, 8vw, 90px);
          }
          .skills-table-head {
            padding-left: 36px;
            padding-right: 36px;
          }
          .skill-cell {
            padding: 28px 36px;
          }
          .skills-footer {
            padding: 20px 36px;
          }
        }

        /* Tablet: 768-1024px */
        @media (max-width: 768px) {
          .skills-header {
            padding: 56px 28px 40px;
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .skills-title {
            font-size: clamp(40px, 10vw, 72px);
          }
          .skills-table-head {
            padding: 12px 28px;
            grid-template-columns: 1fr;
            gap: 0;
          }
          .skills-table-head span:nth-child(3) {
            display: none;
          }
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .skill-cell {
            padding: 24px 28px;
            border-right: none;
            grid-template-columns: 1fr;
          }
          .skill-num {
            display: none;
          }
          .skill-desc {
            font-size: 11px;
          }
          .skills-footer {
            padding: 18px 28px;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }

        /* Mobile: below 768px */
        @media (max-width: 640px) {
          .skills-section {
            padding: 0;
          }
          .skills-header {
            padding: 48px 20px 36px;
            gap: 20px;
          }
          .skills-title {
            font-size: clamp(32px, 12vw, 56px);
            letter-spacing: 1px;
          }
          .skills-eyebrow {
            font-size: 9px;
            margin-bottom: 14px;
          }
          .skills-eyebrow::before {
            width: 20px;
          }
          .skills-table-head {
            display: none;
          }
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .skill-cell {
            padding: 20px 20px;
            border-bottom: 1px solid var(--border);
            border-right: none;
            grid-template-columns: 1fr;
          }
          .skill-num {
            display: none;
          }
          .skill-name {
            font-size: 20px;
            letter-spacing: 1px;
            margin-bottom: 6px;
          }
          .skill-desc {
            font-size: 10px;
            line-height: 1.7;
            margin-bottom: 10px;
          }
          .skill-tags {
            gap: 5px;
          }
          .skill-tag {
            font-size: 7px;
            padding: 2px 8px;
            letter-spacing: 1px;
          }
          .skills-footer {
            padding: 16px 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .skills-foot-note {
            font-size: 8px;
          }
          .skills-cta {
            width: 100%;
            justify-content: center;
            font-size: 8px;
            padding: 10px 20px;
          }
        }

        /* Very small: below 380px */
        @media (max-width: 380px) {
          .skills-header {
            padding: 40px 16px 32px;
          }
          .skills-title {
            font-size: 28px;
          }
          .skill-cell {
            padding: 18px 16px;
          }
          .skills-footer {
            padding: 14px 16px;
          }
          .skill-name {
            font-size: 18px;
          }
          .skill-desc {
            font-size: 9px;
          }
          .skill-tag {
            font-size: 6px;
            padding: 2px 6px;
          }
        }
      `}</style>

      <section className="skills-section">
        {/* Header */}
        <div className="skills-header">
          <div>
            <div className="skills-eyebrow">Capabilities</div>
            <h2 className="skills-title">
              What I Do
              <span className="skills-title-italic">
                The craft behind the work.
              </span>
            </h2>
          </div>
          <div className="skills-header-meta">
            <div className="skills-header-meta-num">08</div>
            <div className="skills-header-meta-label">Disciplines</div>
          </div>
        </div>

        {/* Table head */}
        <div className="skills-table-head">
          <span>#</span>
          <span>Skill</span>
          <span>Tags</span>
        </div>

        {/* Skills grid */}
        <div className="skills-grid">
          {skills.map((s) => (
            <div
              key={s.name}
              className="skill-cell"
              onMouseEnter={() => setHovered(s.index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="skill-num">{s.index}</div>
              <div className="skill-content">
                <span className="skill-name">{s.name}</span>
                <span className="skill-desc">{s.desc}</span>
                <div className="skill-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="skill-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="skills-footer">
          <span className="skills-foot-note">
            All disciplines practiced in live projects
          </span>
          <a href="#contact" className="skills-cta">
            <span>Let's work together →</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Skills;
