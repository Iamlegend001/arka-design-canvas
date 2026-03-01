import React, { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: "01",
    title: "Healui",
    subtitle: "Designing Calm, Scalable Healthcare Experiences",
    summary:
      "Crafted a patient-centered healthcare platform focused on clarity, emotional reassurance, and system scalability.",
    tags: ["HEALTHCARE UX", "DESIGN SYSTEMS", "PRODUCT DESIGN"],
    stats: { label: "Patient Confidence", value: "+62%" },
    role: "Product Designer",
    link: "https://medium.com/design-bootcamp/healui-designing-a-calm-scalable-healthcare-experience-63b302faeb4d",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5nvSf1DXAPaMKEOJXZcxlw.png",
  },
  {
    id: "02",
    title: "Campus Recruit",
    subtitle: "Frictionless Onboarding",
    summary:
      "Transforming a 20-minute registration process into a 4-step guided journey.",
    tags: ["B2B SAAS", "ONBOARDING"],
    stats: { label: "Drop-off Rate", value: "-68%" },
    role: "UX Researcher",
    link: "https://medium.com/design-bootcamp/ux-case-study-reimagining-college-placement-onboarding-7cce17fe71ed",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*mfoC5d2hMc-gDYkpZI2cZA.jpeg",
  },
  {
    id: "03",
    title: "Emergency Health Access",
    subtitle: "Critical Care on Demand",
    summary:
      "Reducing ambulance response times by 40% through intelligent routing.",
    tags: ["UX RESEARCH", "MOBILE APP"],
    stats: { label: "Response Time", value: "-40%" },
    role: "Lead Designer",
    link: "https://medium.com/design-bootcamp/emergency-health-access-app-designing-life-saving-digital-solutions-for-critical-moments-e2cafa514a9c",
    image:
      "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*JegOt-TRWBsIWvpYzuhSaA.png",
  },
  {
    id: "04",
    title: "MindMosaic AI",
    subtitle: "Knowledge Management Evolved",
    summary:
      "An AI-powered second brain that organizes your digital chaos automatically.",
    tags: ["AI INTEGRATION", "DASHBOARD"],
    stats: { label: "Search Speed", value: "4×" },
    role: "Senior UX",
    link: "https://medium.com/design-bootcamp/mindmosaic-revolutionizing-personal-knowledge-management-with-ai-a332f1e36c75",
    image:
      "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*RFDLhTgON1eIXMCj-4DZ4w.png",
  },
  {
    id: "05",
    title: "Focus-Flow",
    subtitle: "Hyper-Personalized Learning",
    summary:
      "Gamified learning pathways that adapt to student attention spans in real-time.",
    tags: ["EDTECH", "GAMIFICATION"],
    stats: { label: "Engagement", value: "+75%" },
    role: "Product Designer",
    link: "https://medium.com/design-bootcamp/focus-flow-designing-a-unified-study-companion-for-the-digital-age-2b53db4b0558",
    image:
      "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*XM9gPYjk3y5nsiyOMVG_CQ.png",
  },
];

export default function CaseStudies() {
  const [hovered, setHovered] = useState(null);
  const [visible, setVisible] = useState({});
  const rowRefs = useRef([]);

  useEffect(() => {
    const observers = rowRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [i]: true }));
            obs.disconnect();
          }
        },
        { threshold: 0.1 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital,wght@1,400;1,700&family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');

        .cs-section {
          background: #EDEAE2;
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          padding: 80px 0 100px;
          position: relative;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        :root.dark .cs-section {
          background: #1a1714;
        }

        :root.dark .cs-header {
          border-bottom-color: #f0ece3;
        }

        :root.dark .cs-count {
          -webkit-text-stroke-color: #f0ece3;
        }

        :root.dark .cs-eyebrow,
        :root.dark .cs-eyebrow-line {
          color: #ff5247;
        }

        :root.dark .cs-heading {
          color: #f0ece3;
        }

        :root.dark .cs-subheading {
          color: #ff5247;
        }

        :root.dark .cs-row {
          border-bottom-color: #f0ece3;
        }

        :root.dark .cs-title,
        :root.dark .cs-subtitle {
          color: #f0ece3;
        }

        .cs-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23EDEAE2'/%3E%3Crect width='1' height='1' fill='%23d4d0c8' opacity='0.4'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.5;
        }

        .cs-inner {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
        }

        /* ── HEADER ── */
        .cs-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: end;
          margin-bottom: 56px;
          padding-bottom: 32px;
          border-bottom: 1.5px solid #2a2520;
        }

        .cs-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #c0392b;
          margin-bottom: 16px;
        }
        .cs-eyebrow-line {
          height: 1px;
          width: 28px;
          background: #c0392b;
        }

        .cs-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 7vw, 96px);
          line-height: 0.92;
          color: #1a1714;
          letter-spacing: 0.01em;
          margin: 0;
        }

        .cs-subheading {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: clamp(22px, 2.5vw, 32px);
          color: #c0392b;
          margin: 10px 0 0;
          font-weight: 400;
        }

        .cs-header-right {
          text-align: right;
        }

        .cs-count {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(80px, 10vw, 140px);
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1.5px #2a2520;
          opacity: 0.12;
          display: block;
          margin-bottom: -16px;
        }

        .cs-count-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8a847a;
        }

        /* ── TABLE HEADER ── */
        .cs-table-head {
          display: grid;
          grid-template-columns: 56px 1fr 240px 160px;
          gap: 24px;
          padding: 0 0 10px;
          border-bottom: 1px solid rgba(42,37,32,0.2);
          margin-bottom: 0;
        }

        .cs-th {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8a847a;
        }

        /* ── ROW ── */
        .cs-row {
          display: grid;
          grid-template-columns: 56px 1fr 240px 160px;
          gap: 24px;
          align-items: start;
          padding: 28px 0;
          border-bottom: 1px solid rgba(42,37,32,0.15);
          cursor: pointer;
          transition: background 0.2s;
          border-radius: 4px;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease, background 0.2s;
        }

        .cs-row.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cs-row:hover {
          background: rgba(42,37,32,0.04);
          padding-left: 8px;
          padding-right: 8px;
          margin-left: -8px;
          margin-right: -8px;
        }

        .cs-row-num {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          color: #c0392b;
          letter-spacing: 0.1em;
          padding-top: 6px;
        }

        .cs-row-main {}

        .cs-row-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(28px, 3vw, 42px);
          line-height: 1;
          color: #1a1714;
          letter-spacing: 0.02em;
          margin: 0 0 4px;
          transition: color 0.2s;
        }

        .cs-row:hover .cs-row-title {
          color: #c0392b;
        }

        .cs-row-subtitle {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 14px;
          color: #5a544e;
          margin: 0 0 12px;
          line-height: 1.4;
        }

        .cs-row-summary {
          font-size: 13px;
          line-height: 1.65;
          color: #6b6560;
          max-width: 540px;
          font-weight: 300;
          margin: 0 0 14px;
        }

        .cs-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .cs-tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.14em;
          padding: 3px 9px;
          border: 1px solid rgba(42,37,32,0.25);
          border-radius: 2px;
          color: #5a544e;
          background: transparent;
          transition: background 0.2s, color 0.2s;
        }

        .cs-row:hover .cs-tag {
          border-color: #c0392b;
          color: #c0392b;
        }

        /* Image panel */
        .cs-row-image {
          overflow: hidden;
          border-radius: 4px;
          border: 1px solid rgba(42,37,32,0.12);
          aspect-ratio: 16/10;
          background: #d4d0c8;
        }

        .cs-row-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease, opacity 0.3s;
          opacity: 0.85;
        }

        .cs-row:hover .cs-row-image img {
          transform: scale(1.04);
          opacity: 1;
        }

        /* Stats */
        .cs-row-meta {
          padding-top: 6px;
        }

        .cs-stat-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 42px;
          line-height: 1;
          color: #1a1714;
          letter-spacing: 0.02em;
        }

        .cs-stat-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #8a847a;
          margin-top: 2px;
          margin-bottom: 16px;
        }

        .cs-role {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #5a544e;
          padding: 4px 10px;
          border: 1px solid rgba(42,37,32,0.2);
          display: inline-block;
          border-radius: 2px;
        }

        /* ── CTA ── */
        .cs-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 48px;
          padding-top: 24px;
          border-top: 1.5px solid #2a2520;
        }

        .cs-footer-note {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #8a847a;
        }

        .cs-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #1a1714;
          color: #EDEAE2;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 14px 28px;
          text-decoration: none;
          border-radius: 2px;
          transition: background 0.2s, color 0.2s;
        }

        .cs-cta:hover {
          background: #c0392b;
        }

        .cs-cta-arrow {
          font-size: 14px;
          transition: transform 0.2s;
        }

        .cs-cta:hover .cs-cta-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .cs-inner { padding: 0 36px; }
          .cs-section { padding: 64px 0 80px; }
          .cs-header {
            grid-template-columns: 1fr;
            margin-bottom: 48px;
            padding-bottom: 28px;
          }
          .cs-heading { font-size: clamp(48px, 8vw, 80px); }
          .cs-subheading { font-size: clamp(20px, 2.5vw, 28px); }
          .cs-header-right { display: none; }
          .cs-table-head { display: none; }
          .cs-row {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 28px 0;
          }
          .cs-row-image { aspect-ratio: 16/9; }
          .cs-row-meta { padding-top: 0; }
        }

        @media (max-width: 768px) {
          .cs-inner { padding: 0 28px; }
          .cs-section { padding: 48px 0 64px; }
          .cs-header {
            grid-template-columns: 1fr;
            margin-bottom: 40px;
            padding-bottom: 24px;
          }
          .cs-eyebrow {
            font-size: 10px;
            margin-bottom: 14px;
          }
          .cs-heading { font-size: clamp(40px, 10vw, 72px); }
          .cs-subheading { font-size: clamp(18px, 2.5vw, 24px); margin-top: 8px; }
          .cs-row {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 24px 0;
          }
          .cs-row-title { font-size: clamp(24px, 3vw, 36px); }
          .cs-row-subtitle { font-size: 13px; }
          .cs-row-summary { font-size: 12px; line-height: 1.6; }
          .cs-row-image { aspect-ratio: 16/10; }
          .cs-stat-value { font-size: 32px; }
          .cs-footer {
            margin-top: 40px;
            padding-top: 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .cs-footer-note { font-size: 9px; }
          .cs-cta { font-size: 10px; padding: 12px 24px; }
        }

        @media (max-width: 640px) {
          .cs-section {
            padding: 40px 0 56px;
            background-image: none;
          }
          .cs-inner { padding: 0 20px; }
          .cs-header {
            margin-bottom: 32px;
            padding-bottom: 20px;
            border-bottom-width: 1px;
          }
          .cs-eyebrow {
            font-size: 9px;
            gap: 10px;
          }
          .cs-eyebrow-line { width: 20px; }
          .cs-heading { font-size: clamp(32px, 12vw, 56px); letter-spacing: 0; }
          .cs-subheading { font-size: clamp(16px, 2.5vw, 20px); }
          .cs-row {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 20px 0;
            border-bottom-width: 1px;
          }
          .cs-row-num { padding-top: 0; }
          .cs-row-title { font-size: clamp(20px, 3.5vw, 30px); margin-bottom: 2px; }
          .cs-row-subtitle { font-size: 12px; margin-bottom: 8px; }
          .cs-row-summary { font-size: 11px; line-height: 1.6; margin-bottom: 8px; }
          .cs-tag {
            font-size: 7px;
            padding: 2px 6px;
            letter-spacing: 0.1em;
          }
          .cs-row-image { aspect-ratio: 4/3; margin-bottom: 8px; }
          .cs-stat-value { font-size: 28px; }
          .cs-stat-label { font-size: 8px; margin-bottom: 10px; }
          .cs-role { font-size: 8px; padding: 4px 8px; }
          .cs-footer {
            margin-top: 32px;
            padding-top: 18px;
            gap: 10px;
          }
          .cs-footer-note { font-size: 8px; }
          .cs-cta { font-size: 9px; padding: 10px 20px; width: 100%; justify-content: center; }
        }

        @media (max-width: 380px) {
          .cs-inner { padding: 0 16px; }
          .cs-section { padding: 32px 0 48px; }
          .cs-heading { font-size: 28px; }
          .cs-subheading { font-size: 16px; }
          .cs-row {
            gap: 10px;
            padding: 16px 0;
          }
          .cs-row-title { font-size: 22px; }
          .cs-row-subtitle { font-size: 11px; }
          .cs-row-summary { font-size: 10px; }
          .cs-footer { margin-top: 24px; padding-top: 16px; }
        }
      `}</style>

      <section className="cs-section" id="work">
        <div className="cs-inner">
          {/* Header */}
          <header className="cs-header">
            <div>
              <div className="cs-eyebrow">
                <span className="cs-eyebrow-line" />
                Case Studies
              </div>
              <h2 className="cs-heading">
                Selected
                <br />
                Product Work
              </h2>
              <p className="cs-subheading">The craft behind the work.</p>
            </div>
            <div className="cs-header-right">
              <span className="cs-count">0{projects.length}</span>
              <span className="cs-count-label">Projects</span>
            </div>
          </header>

          {/* Table header */}
          <div className="cs-table-head">
            <span className="cs-th">#</span>
            <span className="cs-th">Project</span>
            <span className="cs-th">Preview</span>
            <span className="cs-th">Outcome</span>
          </div>

          {/* Rows */}
          {projects.map((p, i) => (
            <div
              key={p.id}
              ref={(el) => (rowRefs.current[i] = el)}
              className={`cs-row${visible[i] ? " visible" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => window.open(p.link, "_blank")}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="cs-row-num">{p.id}</span>

              <div className="cs-row-main">
                <h3 className="cs-row-title">{p.title}</h3>
                <p className="cs-row-subtitle">{p.subtitle}</p>
                <p className="cs-row-summary">{p.summary}</p>
                <div className="cs-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="cs-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="cs-row-image">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>

              <div className="cs-row-meta">
                <div className="cs-stat-value">{p.stats.value}</div>
                <div className="cs-stat-label">{p.stats.label}</div>
                <span className="cs-role">{p.role}</span>
              </div>
            </div>
          ))}

          {/* Footer CTA */}
          <footer className="cs-footer">
            <span className="cs-footer-note">
              All projects practiced in live products
            </span>
            <a href="/projects" className="cs-cta">
              View all projects
              <span className="cs-cta-arrow">→</span>
            </a>
          </footer>
        </div>
      </section>
    </>
  );
}
