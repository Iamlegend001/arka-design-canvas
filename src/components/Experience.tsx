import React, { useState } from "react";

const experiences = [
  {
    company: "PeakPals",
    role: "UI/UX Designer Intern",
    duration: "Jan 2026 – Feb 2026",
    type: "Internship",
    location: "Remote",
    summary:
      "Designing user-centered interfaces for digital product workflows with a focus on clarity and accessibility.",
    impact: [
      "Simplified key interaction flows to reduce cognitive load and improve task completion.",
      "Created wireframes and high-fidelity UI across core journeys in Figma.",
      "Established reusable components and patterns for scalable product evolution.",
    ],
    skills: ["UI/UX Design", "Interaction Design", "Figma", "Design Systems"],
    index: "01",
    color: "#818cf8",
  },
  {
    company: "eStatus Genuine Infra",
    role: "Product Designer Intern",
    duration: "Nov 2025 – Feb 2026",
    type: "Internship",
    location: "Remote",
    summary:
      "Contributing to product design strategy and UI improvements for infrastructure tooling.",
    impact: [
      "Redesigned information layouts to strengthen hierarchy and legibility.",
      "Collaborated on product workflows to improve feature discoverability.",
      "Delivered production-ready UI aligned with business and stakeholder goals.",
    ],
    skills: ["Product Design", "Information Architecture", "UI Design", "Prototyping"],
    index: "02",
    color: "#67e8f9",
  },
  {
    company: "Events Fare",
    role: "UI/UX Designer Intern",
    duration: "Nov 2025 – Jan 2026",
    type: "Internship",
    location: "Remote",
    summary:
      "Designing interfaces for an event platform focused on conversion and frictionless flows.",
    impact: [
      "Improved navigation clarity across dashboard and booking experiences.",
      "Designed modern, conversion-focused UI for critical funnels.",
      "Applied UX principles around hierarchy, spacing, and consistency.",
    ],
    skills: ["Dashboard UX", "Conversion Design", "Wireframing", "UI Systems"],
    index: "03",
    color: "#a78bfa",
  },
];

const Experience = () => {
  const [active, setActive] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .ex-root {
          min-height: 100vh;
          background: #080b14;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          color: #fff;
        }

        .ex-bg-orb-1 {
          position: absolute; top: 0; right: 0;
          width: 600px; height: 500px;
          background: radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 65%);
          filter: blur(90px); pointer-events: none; z-index: 0;
        }
        .ex-bg-orb-2 {
          position: absolute; bottom: -10%; left: -5%;
          width: 500px; height: 400px;
          background: radial-gradient(ellipse, rgba(6,182,212,0.09) 0%, transparent 65%);
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .ex-bg-grid {
          position: absolute; inset: 0; z-index: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%);
        }

        .ex-inner {
          position: relative; z-index: 2;
          max-width: 1160px; margin: 0 auto;
          padding: 80px 48px 100px;
        }

        /* Header */
        .ex-header {
          display: flex; align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 72px;
          opacity: 0; animation: exFadeUp 0.7s ease forwards 0.1s;
        }
        .ex-eyebrow {
          display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
        }
        .ex-eyebrow-line {
          width: 32px; height: 1px;
          background: linear-gradient(90deg, #818cf8, #67e8f9);
        }
        .ex-eyebrow-text {
          font-size: 11px; font-weight: 500; color: #818cf8;
          letter-spacing: 2.5px; text-transform: uppercase;
        }
        .ex-title {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(42px, 5.5vw, 72px);
          line-height: 1; letter-spacing: -2px; color: #fff;
        }
        .ex-title-accent {
          background: linear-gradient(135deg, #818cf8 0%, #67e8f9 60%, #a78bfa 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .ex-subtitle {
          font-size: 14px; line-height: 1.7;
          color: rgba(255,255,255,0.35); font-weight: 300;
          max-width: 420px; margin-top: 14px;
        }
        .ex-header-num {
          font-family: 'Syne', sans-serif; font-size: 120px; font-weight: 800;
          line-height: 1; color: rgba(255,255,255,0.03);
          letter-spacing: -4px; user-select: none;
        }

        /* Timeline */
        .ex-timeline {
          position: relative;
          display: flex; flex-direction: column; gap: 20px;
          opacity: 0; animation: exFadeUp 0.7s ease forwards 0.25s;
        }

        /* Vertical line */
        .ex-timeline::before {
          content: '';
          position: absolute;
          left: 0; top: 24px; bottom: 24px;
          width: 1px;
          background: linear-gradient(to bottom,
            rgba(129,140,248,0.3) 0%,
            rgba(103,232,249,0.2) 50%,
            rgba(167,139,250,0.1) 100%
          );
        }

        /* Card */
        .ex-card {
          position: relative;
          padding-left: 48px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px 36px 32px 64px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          transition: all 0.25s; cursor: default;
          overflow: hidden;
        }
        .ex-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; bottom: 0; width: 3px;
          background: var(--card-color, #818cf8);
          opacity: 0; transition: opacity 0.25s;
          border-radius: 20px 0 0 20px;
        }
        .ex-card:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.12);
          transform: translateX(4px);
        }
        .ex-card:hover::after { opacity: 1; }

        /* Timeline dot */
        .ex-dot {
          position: absolute;
          left: -6px; top: 40px;
          width: 13px; height: 13px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.15);
          background: #080b14;
          transition: all 0.25s;
          z-index: 2;
        }
        .ex-card:hover .ex-dot {
          border-color: var(--card-color, #818cf8);
          background: var(--card-color, #818cf8);
          box-shadow: 0 0 12px var(--card-color, #818cf8);
        }

        /* Left pane */
        .ex-left {}

        .ex-card-idx {
          font-size: 10px; font-weight: 500;
          color: rgba(255,255,255,0.2);
          letter-spacing: 2px; margin-bottom: 14px;
          display: block;
        }

        .ex-company {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(22px, 3vw, 32px);
          color: #fff; letter-spacing: -0.5px;
          line-height: 1; margin-bottom: 6px;
        }

        .ex-role {
          font-size: 12px; font-weight: 400;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.5px; text-transform: uppercase;
          margin-bottom: 18px;
        }

        .ex-summary {
          font-size: 13px; line-height: 1.75;
          color: rgba(255,255,255,0.45); font-weight: 300;
          max-width: 360px; margin-bottom: 22px;
        }

        .ex-pills {
          display: flex; flex-wrap: wrap; gap: 7px;
        }
        .ex-pill {
          font-size: 10px; font-weight: 400;
          padding: 5px 13px; border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.03);
          transition: all 0.2s;
        }
        .ex-card:hover .ex-pill {
          border-color: rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.6);
        }

        /* Right pane */
        .ex-right {
          display: flex; flex-direction: column;
          justify-content: space-between;
        }

        .ex-meta {
          display: flex; flex-direction: column; gap: 8px;
          margin-bottom: 28px;
        }
        .ex-meta-row {
          display: flex; align-items: center; gap: 10px;
          font-size: 12px; color: rgba(255,255,255,0.35);
          font-weight: 300;
        }
        .ex-meta-row::before {
          content: '';
          width: 14px; height: 1px;
          background: rgba(255,255,255,0.15);
          flex-shrink: 0;
        }

        .ex-impact-label {
          font-size: 9px; letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-bottom: 14px; display: block;
        }

        .ex-impact-list {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 12px;
        }
        .ex-impact-item {
          font-size: 12px; line-height: 1.75;
          color: rgba(255,255,255,0.4); font-weight: 300;
          display: flex; gap: 12px; align-items: flex-start;
        }
        .ex-impact-bullet {
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--card-color, #818cf8);
          flex-shrink: 0; margin-top: 7px;
        }

        /* Card footer */
        .ex-card-foot {
          margin-top: 24px; padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; justify-content: space-between;
        }
        .ex-badge {
          display: flex; align-items: center; gap: 7px;
          font-size: 10px; color: rgba(255,255,255,0.25);
          letter-spacing: 0.5px;
        }
        .ex-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px #4ade80;
          animation: exPulse 2s infinite;
        }
        @keyframes exPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .ex-scan {
          width: 32px; height: 1px;
          background: rgba(255,255,255,0.1);
          overflow: hidden; position: relative;
        }
        .ex-scan::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 100%; height: 100%;
          background: var(--card-color, #818cf8);
          animation: exScan 2s linear infinite;
        }
        @keyframes exScan { to { left: 100%; } }

        /* Footer */
        .ex-footer {
          margin-top: 56px; padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; justify-content: space-between; align-items: center;
          opacity: 0; animation: exFadeUp 0.7s ease forwards 0.5s;
        }
        .ex-foot-note {
          font-size: 11px; color: rgba(255,255,255,0.25); letter-spacing: 0.5px;
        }
        .ex-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none; border-radius: 100px;
          color: #fff; font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 500; padding: 13px 28px;
          cursor: pointer; text-decoration: none;
          transition: all 0.25s;
          box-shadow: 0 8px 32px rgba(99,102,241,0.35);
        }
        .ex-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(99,102,241,0.5); }

        @keyframes exFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .ex-inner { padding: 56px 24px 72px; }
          .ex-header { margin-bottom: 48px; }
          .ex-header-num { display: none; }
          .ex-card { grid-template-columns: 1fr; gap: 24px; padding: 28px 28px 28px 52px; }
          .ex-right { border-top: 1px solid rgba(255,255,255,0.06); padding-top: 24px; }
          .ex-timeline::before { left: 16px; }
          .ex-dot { left: 10px; }
        }
        @media (max-width: 640px) {
          .ex-inner { padding: 40px 20px 56px; }
          .ex-title { font-size: 38px; }
          .ex-card { padding: 24px 20px 24px 44px; }
          .ex-footer { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
      `}</style>

      <section id="experience" className="ex-root">
        <div className="ex-bg-orb-1" />
        <div className="ex-bg-orb-2" />
        <div className="ex-bg-grid" />

        <div className="ex-inner">
          {/* Header */}
          <div className="ex-header">
            <div>
              <div className="ex-eyebrow">
                <div className="ex-eyebrow-line" />
                <span className="ex-eyebrow-text">Experience</span>
              </div>
              <h2 className="ex-title">
                Work <span className="ex-title-accent">History</span>
              </h2>
              <p className="ex-subtitle">
                Product thinking meets UX depth — shipping experiences that are
                clear, scalable, and built for real users.
              </p>
            </div>
            <div className="ex-header-num">0{experiences.length}</div>
          </div>

          {/* Timeline */}
          <div className="ex-timeline">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className="ex-card"
                style={{ "--card-color": exp.color }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="ex-dot" />

                {/* Left */}
                <div className="ex-left">
                  <span className="ex-card-idx">{exp.index}</span>
                  <div className="ex-company">{exp.company}</div>
                  <div className="ex-role">{exp.role}</div>
                  <p className="ex-summary">{exp.summary}</p>
                  <div className="ex-pills">
                    {exp.skills.map((s) => (
                      <span key={s} className="ex-pill">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div className="ex-right">
                  <div>
                    <div className="ex-meta">
                      <div className="ex-meta-row">{exp.duration}</div>
                      <div className="ex-meta-row">{exp.location}</div>
                    </div>
                    <span className="ex-impact-label">Key Impact</span>
                    <ul className="ex-impact-list">
                      {exp.impact.map((point) => (
                        <li key={point} className="ex-impact-item">
                          <div className="ex-impact-bullet" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="ex-card-foot">
                    <div className="ex-badge">
                      <div className="ex-badge-dot" />
                      {exp.type}
                    </div>
                    <div className="ex-scan" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="ex-footer">
            <span className="ex-foot-note">All positions — live shipped work</span>
            <a href="#contact" className="ex-cta">Start a project →</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;