import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  },
  {
    company: "eStatus Genuine Infra Pvt. Ltd.",
    role: "Product Designer Intern",
    duration: "Nov 2025 – Feb 2026",
    type: "Internship",
    location: "Remote",
    summary:
      "Contributing to product design strategy and UI improvements for infrastructure tooling.",
    impact: [
      "Redesigned information layouts to strengthen hierarchy and legibility.",
      "Collaborated on product workflows to improve feature discoverability and usability.",
      "Delivered production-ready UI aligned with business and stakeholder goals.",
    ],
    skills: [
      "Product Design",
      "Information Architecture",
      "UI Design",
      "Prototyping",
    ],
    index: "02",
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
      "Designed modern, conversion-focused UI components for critical funnels.",
      "Applied UX principles around hierarchy, spacing, and consistency to tighten the system.",
    ],
    skills: ["Dashboard UX", "Conversion Design", "Wireframing", "UI Systems"],
    index: "03",
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          opacity: 0,
          y: 24,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        });
      }

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.85,
          delay: i * 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="exp-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap');

        /* ── TOKENS (inherit from Hero :root, re-declared for safety) ── */
        .exp-section {
          background: var(--paper, #f0ece3);
          border-top: 1px solid rgba(17,16,16,0.1);
          padding: 96px 0;
        }

        .exp-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 48px;
        }

        /* ── HEADER ── */
        .exp-header {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          gap: 24px;
          margin-bottom: 72px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(17,16,16,0.1);
        }

        .exp-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--red, #c0392b);
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .exp-eyebrow::before {
          content: '';
          width: 28px; height: 1px;
          background: var(--red, #c0392b);
          display: block;
          flex-shrink: 0;
        }

        .exp-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 6vw, 86px);
          line-height: 0.92;
          letter-spacing: 2px;
          color: var(--ink, #111010);
          margin: 0;
        }

        .exp-title-italic {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-size: clamp(18px, 2.5vw, 36px);
          color: var(--red, #c0392b);
          display: block;
          line-height: 1.2;
          margin-top: 8px;
          font-weight: 400;
        }

        .exp-subtitle {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          line-height: 2;
          color: var(--mid, #6b6560);
          max-width: 480px;
          margin-top: 20px;
          font-weight: 300;
        }

        .exp-meta-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(64px, 8vw, 104px);
          line-height: 1;
          color: var(--ink, #111010);
          opacity: 0.06;
          letter-spacing: 2px;
          display: block;
          text-align: right;
        }

        .exp-meta-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--mid, #6b6560);
          text-align: right;
          margin-top: -6px;
          display: block;
        }

        /* ── TIMELINE TRACK ── */
        .exp-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .exp-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, rgba(17,16,16,0.12) 0%, rgba(17,16,16,0.04) 100%);
        }

        /* ── CARD ── */
        .exp-card {
          position: relative;
          padding: 44px 0 44px 52px;
          border-bottom: 1px solid rgba(17,16,16,0.08);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          transition: background 0.25s;
        }
        .exp-card:last-child { border-bottom: none; }
        .exp-card:hover { background: rgba(17,16,16,0.018); }

        /* Timeline dot */
        .exp-card::before {
          content: '';
          position: absolute;
          left: -4px;
          top: 52px;
          width: 9px; height: 9px;
          border-radius: 50%;
          background: var(--paper, #f0ece3);
          border: 2px solid rgba(17,16,16,0.2);
          transition: border-color 0.25s, background 0.25s;
        }
        .exp-card:hover::before {
          border-color: var(--red, #c0392b);
          background: var(--red, #c0392b);
        }

        /* ── LEFT PANE ── */
        .exp-card-left {}

        .exp-card-index {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 3px;
          color: var(--mid, #6b6560);
          opacity: 0.5;
          margin-bottom: 16px;
          display: block;
        }

        .exp-card-company {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(28px, 3.5vw, 46px);
          letter-spacing: 2px;
          color: var(--ink, #111010);
          line-height: 0.95;
          margin-bottom: 6px;
        }

        .exp-card-role {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--mid, #6b6560);
          margin-bottom: 20px;
        }

        .exp-card-summary {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          line-height: 1.9;
          color: var(--mid, #6b6560);
          font-weight: 300;
          max-width: 380px;
          margin-bottom: 28px;
        }

        .exp-card-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .exp-pill {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 5px 12px;
          border: 1px solid rgba(17,16,16,0.18);
          color: var(--ink, #111010);
          opacity: 0.5;
          transition: all 0.2s;
        }
        .exp-pill:hover { opacity: 1; border-color: var(--ink, #111010); }

        /* ── RIGHT PANE ── */
        .exp-card-right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .exp-card-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 32px;
        }

        .exp-meta-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          color: var(--mid, #6b6560);
          opacity: 0.6;
        }
        .exp-meta-row::before {
          content: '';
          width: 16px; height: 1px;
          background: rgba(17,16,16,0.2);
          flex-shrink: 0;
        }

        .exp-impact-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--mid, #6b6560);
          opacity: 0.5;
          margin-bottom: 14px;
        }

        .exp-impact-list {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .exp-impact-item {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          line-height: 1.8;
          color: var(--mid, #6b6560);
          font-weight: 300;
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .exp-impact-item::before {
          content: '—';
          color: var(--red, #c0392b);
          flex-shrink: 0;
          margin-top: 1px;
          font-size: 9px;
          opacity: 0.7;
        }

        /* ── FOOTER ROW ── */
        .exp-card-footer {
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid rgba(17,16,16,0.07);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .exp-type-badge {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--ink, #111010);
          opacity: 0.35;
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .exp-type-badge::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #27ae60;
        }

        .exp-scan-line {
          width: 36px; height: 1px;
          background: rgba(17,16,16,0.12);
          overflow: hidden;
          position: relative;
        }
        .exp-scan-line::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: var(--red, #c0392b);
          animation: exp-scan 2.2s linear infinite;
        }
        @keyframes exp-scan { to { left: 100%; } }

        /* ── RESPONSIVE ── */
        @media (max-width: 1023px) {
          .exp-inner { padding: 0 24px; }
          .exp-section { padding: 72px 0; }
          .exp-card { grid-template-columns: 1fr; gap: 28px; padding: 36px 0 36px 40px; }
          .exp-card-right { border-top: 1px solid rgba(17,16,16,0.07); padding-top: 24px; }
        }
        @media (max-width: 768px) {
          .exp-inner { padding: 0 20px; }
          .exp-section { padding: 56px 0; }
          .exp-header { grid-template-columns: 1fr; }
          .exp-meta-num, .exp-meta-label { text-align: left; }
          .exp-card { padding: 28px 0 28px 32px; gap: 20px; }
          .exp-header { margin-bottom: 48px; padding-bottom: 32px; }
        }
        @media (max-width: 640px) {
          .exp-inner { padding: 0 16px; }
          .exp-section { padding: 48px 0; }
          .exp-card { padding: 24px 0 24px 24px; }
          .exp-card-company { font-size: clamp(22px, 7vw, 32px); }
          .exp-card-footer { flex-direction: column; align-items: flex-start; gap: 12px; }
        }

        /* ── DARK MODE ── */
        :root.dark .exp-section { border-top-color: rgba(240,236,227,0.1); }
        :root.dark .exp-header { border-bottom-color: rgba(240,236,227,0.1); }
        :root.dark .exp-timeline::before { background: linear-gradient(to bottom, rgba(240,236,227,0.1) 0%, rgba(240,236,227,0.03) 100%); }
        :root.dark .exp-card { border-bottom-color: rgba(240,236,227,0.07); }
        :root.dark .exp-card:hover { background: rgba(240,236,227,0.025); }
        :root.dark .exp-card::before { background: var(--paper); border-color: rgba(240,236,227,0.2); }
        :root.dark .exp-pill { border-color: rgba(240,236,227,0.15); }
        :root.dark .exp-pill:hover { border-color: rgba(240,236,227,0.5); }
        :root.dark .exp-meta-row::before { background: rgba(240,236,227,0.15); }
        :root.dark .exp-card-footer { border-top-color: rgba(240,236,227,0.07); }
        :root.dark .exp-card-right { border-top-color: rgba(240,236,227,0.07); }
        :root.dark .exp-scan-line { background: rgba(240,236,227,0.1); }
        :root.dark .metric-cell:hover { background: #1a1917; }
      `}</style>

      <div className="exp-inner">
        {/* ── HEADER ── */}
        <div ref={headerRef} className="exp-header">
          <div>
            <div className="exp-eyebrow">Experience</div>
            <h2 className="exp-title">
              Work History
              <span className="exp-title-italic">
                Clarity, craft, and conversion focus.
              </span>
            </h2>
            <p className="exp-subtitle">
              Product thinking meets UX depth — shipping experiences that are
              clear, scalable, and built for real users.
            </p>
          </div>
          <div>
            <span className="exp-meta-num">0{experiences.length}</span>
            <span className="exp-meta-label">Internships</span>
          </div>
        </div>

        {/* ── TIMELINE ── */}
        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className="exp-card"
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
            >
              {/* ── LEFT ── */}
              <div className="exp-card-left">
                <span className="exp-card-index">{exp.index}</span>
                <div className="exp-card-company">{exp.company}</div>
                <div className="exp-card-role">{exp.role}</div>
                <p className="exp-card-summary">{exp.summary}</p>
                <div className="exp-card-pills">
                  {exp.skills.map((s) => (
                    <span key={s} className="exp-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── RIGHT ── */}
              <div className="exp-card-right">
                <div>
                  <div className="exp-card-meta">
                    <div className="exp-meta-row">{exp.duration}</div>
                    <div className="exp-meta-row">{exp.location}</div>
                  </div>

                  <div className="exp-impact-label">Key Impact</div>
                  <ul className="exp-impact-list">
                    {exp.impact.map((point) => (
                      <li key={point} className="exp-impact-item">
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="exp-card-footer">
                  <span className="exp-type-badge">{exp.type}</span>
                  <div className="exp-scan-line" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
