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
  const [hovered, setHovered] = useState<string | null>(null);
  const [visible, setVisible] = useState<Record<number, boolean>>({});
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [i]: true }));
            obs.disconnect();
          }
        },
        { threshold: 0.08 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        /* ── Root ── */
        .cs-root {
          min-height: 100vh;
          background: #080b14;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          color: #fff;
        }

        /* ── Background ── */
        .cs-bg-orb-1 {
          position: absolute; top: 0; right: 0;
          width: 600px; height: 500px;
          background: radial-gradient(ellipse, rgba(99,102,241,0.13) 0%, transparent 65%);
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .cs-bg-orb-2 {
          position: absolute; bottom: 0; left: 0;
          width: 500px; height: 400px;
          background: radial-gradient(ellipse, rgba(6,182,212,0.10) 0%, transparent 65%);
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .cs-bg-orb-3 {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 800px; height: 400px;
          background: radial-gradient(ellipse, rgba(139,92,246,0.05) 0%, transparent 70%);
          filter: blur(60px); pointer-events: none; z-index: 0;
        }
        .cs-bg-grid {
          position: absolute; inset: 0; z-index: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%);
        }

        /* ── Inner ── */
        .cs-inner {
          position: relative; z-index: 2;
          max-width: 1160px; margin: 0 auto;
          padding: 80px 48px 100px;
        }

        /* ── Header ── */
        .cs-header {
          display: flex; align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 64px;
          opacity: 0; animation: csFadeUp 0.7s ease forwards 0.1s;
        }
        .cs-eyebrow {
          display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
        }
        .cs-eyebrow-line {
          width: 32px; height: 1px;
          background: linear-gradient(90deg, #818cf8, #67e8f9);
        }
        .cs-eyebrow-text {
          font-size: 11px; font-weight: 500; color: #818cf8;
          letter-spacing: 2.5px; text-transform: uppercase;
        }
        .cs-title {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(42px, 5.5vw, 72px);
          line-height: 1; letter-spacing: -2px; color: #fff;
          margin: 0;
        }
        .cs-title-accent {
          background: linear-gradient(135deg, #818cf8 0%, #67e8f9 60%, #a78bfa 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .cs-header-sub {
          margin-top: 14px;
          font-size: 13px; color: rgba(255,255,255,0.25);
          font-weight: 300; line-height: 1.6;
        }
        .cs-header-num {
          font-family: 'Syne', sans-serif; font-size: 120px; font-weight: 800;
          line-height: 1; color: rgba(255,255,255,0.03);
          letter-spacing: -4px; user-select: none;
        }

        /* ── Grid ── */
        .cs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 16px;
          opacity: 0; animation: csFadeUp 0.7s ease forwards 0.2s;
        }

        /* ── Card ── */
        .cs-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          display: flex; flex-direction: column;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease,
                      border-color 0.25s, background 0.25s;
        }
        /* staggered entrance delays handled via nth-child to avoid inline styles */
        .cs-grid > article { transition-delay: 0ms; }
        .cs-grid > article:nth-child(1) { transition-delay: 0ms; }
        .cs-grid > article:nth-child(2) { transition-delay: 80ms; }
        .cs-grid > article:nth-child(3) { transition-delay: 160ms; }
        .cs-grid > article:nth-child(4) { transition-delay: 240ms; }
        .cs-grid > article:nth-child(5) { transition-delay: 320ms; }
        .cs-grid > article:nth-child(6) { transition-delay: 400ms; }
        .cs-card.visible {
          opacity: 1; transform: translateY(0);
        }
        .cs-card:hover {
          background: rgba(255,255,255,0.055);
          border-color: rgba(255,255,255,0.14);
          transform: translateY(-4px) !important;
        }
        /* top accent line */
        .cs-card::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #818cf8, #67e8f9);
          opacity: 0; transition: opacity 0.25s; z-index: 3;
        }
        .cs-card:hover::before { opacity: 1; }

        /* ── Card Image ── */
        .cs-card-media {
          position: relative; overflow: hidden;
          aspect-ratio: 16/10;
        }
        .cs-card-media img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          filter: brightness(0.82) saturate(0.8);
          transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s;
        }
        .cs-card:hover .cs-card-media img {
          transform: scale(1.05);
          filter: brightness(0.7) saturate(0.9);
        }

        /* Gradient overlay always present */
        .cs-card-media-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(8,11,20,0.92) 0%, rgba(8,11,20,0.2) 55%, transparent 100%);
          z-index: 1;
        }

        /* Stat badge top-right */
        .cs-stat-badge {
          position: absolute; top: 14px; right: 14px; z-index: 2;
          background: rgba(129,140,248,0.15);
          border: 1px solid rgba(129,140,248,0.25);
          border-radius: 10px;
          padding: 10px 14px; text-align: right;
          backdrop-filter: blur(8px);
          opacity: 0; transform: translateY(-4px);
          transition: opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s;
        }
        .cs-card:hover .cs-stat-badge { opacity: 1; transform: translateY(0); }
        .cs-stat-value {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: 22px; line-height: 1;
          background: linear-gradient(135deg, #818cf8, #67e8f9);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          letter-spacing: -0.5px;
        }
        .cs-stat-label {
          font-size: 8px; font-weight: 500;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.35); margin-top: 2px;
        }

        /* Role badge bottom-left of image */
        .cs-role-badge {
          position: absolute; bottom: 14px; left: 14px; z-index: 2;
          font-size: 8px; font-weight: 500;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px; padding: 4px 12px;
          backdrop-filter: blur(6px);
        }

        /* ── Card Body ── */
        .cs-card-body {
          padding: 20px 22px 22px;
          display: flex; flex-direction: column; gap: 10px;
          flex: 1;
        }
        .cs-card-head {
          display: flex; align-items: baseline; gap: 10px;
        }
        .cs-card-num {
          font-family: 'Syne', sans-serif; font-size: 12px;
          font-weight: 700; color: #818cf8; letter-spacing: 0.5px;
        }
        .cs-card-name {
          font-family: 'Syne', sans-serif; font-size: 22px;
          font-weight: 800; color: #fff; letter-spacing: -0.5px;
          line-height: 1; margin: 0;
          transition: color 0.2s;
        }
        .cs-card:hover .cs-card-name {
          background: linear-gradient(135deg, #818cf8, #67e8f9);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .cs-card-subtitle {
          font-size: 12px; font-weight: 300;
          color: rgba(255,255,255,0.4); line-height: 1.4;
          margin: 0;
        }
        .cs-card-summary {
          font-size: 13px; font-weight: 300;
          color: rgba(255,255,255,0.55); line-height: 1.65;
          margin: 0; flex: 1;
        }
        .cs-card-tags {
          display: flex; flex-wrap: wrap; gap: 5px;
          margin-top: 4px;
        }
        .cs-tag {
          font-size: 8px; font-weight: 500;
          letter-spacing: 1px; text-transform: uppercase;
          padding: 3px 9px; border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.22);
          transition: all 0.2s;
        }
        .cs-card:hover .cs-tag:first-child {
          background: rgba(129,140,248,0.15);
          border-color: rgba(129,140,248,0.3);
          color: #818cf8;
        }
        .cs-card:hover .cs-tag:not(:first-child) {
          border-color: rgba(255,255,255,0.13);
          color: rgba(255,255,255,0.38);
        }

        /* ── Card Arrow ── */
        .cs-card-arrow {
          position: absolute; bottom: 20px; right: 20px;
          width: 32px; height: 32px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; color: rgba(255,255,255,0.25);
          transition: all 0.25s; z-index: 2;
          opacity: 0;
        }
        .cs-card:hover .cs-card-arrow {
          opacity: 1;
          background: rgba(129,140,248,0.15);
          border-color: rgba(129,140,248,0.3);
          color: #818cf8;
          transform: translate(2px, -2px);
        }

        /* ── Table ── */
        .cs-divider {
          display: flex; align-items: center; gap: 16px;
          margin: 56px 0 28px;
          opacity: 0; animation: csFadeUp 0.7s ease forwards 0.35s;
        }
        .cs-divider-label {
          font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
          color: rgba(255,255,255,0.18); white-space: nowrap; font-weight: 500;
        }
        .cs-divider-line {
          flex: 1; height: 1px;
          background: linear-gradient(to right, rgba(255,255,255,0.07), transparent);
        }

        .cs-table {
          opacity: 0; animation: csFadeUp 0.7s ease forwards 0.4s;
        }
        .cs-table-head {
          display: grid;
          grid-template-columns: 48px 1fr 1fr 100px;
          padding: 12px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          margin-bottom: 4px;
        }
        .cs-table-head span {
          font-size: 9px; letter-spacing: 2.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.2); font-weight: 400;
        }
        .cs-table-row {
          display: grid;
          grid-template-columns: 48px 1fr 1fr 100px;
          padding: 14px 20px; align-items: center;
          border-radius: 12px;
          transition: background 0.2s; cursor: pointer;
        }
        .cs-table-row:hover { background: rgba(255,255,255,0.04); }
        .cs-table-row + .cs-table-row { border-top: 1px solid rgba(255,255,255,0.04); }
        .cs-row-idx {
          font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700;
          color: rgba(255,255,255,0.1); transition: color 0.2s;
        }
        .cs-table-row:hover .cs-row-idx { color: #818cf8; }
        .cs-row-info { display: flex; flex-direction: column; gap: 2px; }
        .cs-row-name {
          font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700;
          color: rgba(255,255,255,0.8); letter-spacing: -0.2px; transition: color 0.2s;
        }
        .cs-table-row:hover .cs-row-name { color: #fff; }
        .cs-row-sub {
          font-size: 11px; color: rgba(255,255,255,0.28);
          font-weight: 300;
        }
        .cs-row-role {
          font-size: 10px; font-weight: 500; letter-spacing: 1px;
          text-transform: uppercase; color: rgba(255,255,255,0.22);
        }
        .cs-row-stat {
          font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 800;
          color: rgba(255,255,255,0.5); letter-spacing: -0.5px;
          transition: color 0.2s;
        }
        .cs-table-row:hover .cs-row-stat {
          background: linear-gradient(135deg, #818cf8, #67e8f9);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        /* ── Footer ── */
        .cs-footer {
          margin-top: 56px; padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; justify-content: space-between; align-items: center;
          opacity: 0; animation: csFadeUp 0.7s ease forwards 0.55s;
        }
        .cs-foot-note {
          font-size: 11px; color: rgba(255,255,255,0.25); letter-spacing: 0.5px;
        }
        .cs-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none; border-radius: 100px;
          color: #fff; font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 500; padding: 13px 28px;
          cursor: pointer; text-decoration: none;
          transition: all 0.25s;
          box-shadow: 0 8px 32px rgba(99,102,241,0.35);
        }
        .cs-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(99,102,241,0.5); }
        .cs-cta-arrow { transition: transform 0.2s; }
        .cs-cta:hover .cs-cta-arrow { transform: translateX(4px); }

        /* ── Keyframes ── */
        @keyframes csFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .cs-inner { padding: 56px 24px 72px; }
          .cs-header { margin-bottom: 40px; }
          .cs-header-num { display: none; }
          .cs-grid { grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
          .cs-table-head { grid-template-columns: 40px 1fr 1fr; }
          .cs-table-row { grid-template-columns: 40px 1fr 1fr; }
          .cs-row-stat { display: none; }
        }
        @media (max-width: 640px) {
          .cs-inner { padding: 40px 20px 56px; }
          .cs-title { font-size: 38px; }
          .cs-grid { grid-template-columns: 1fr; }
          .cs-table-head { display: none; }
          .cs-table-row { grid-template-columns: 1fr auto; }
          .cs-row-idx { display: none; }
          .cs-row-role { display: none; }
          .cs-footer { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
      `}</style>

      <section className="cs-root" id="work">
        <div className="cs-bg-orb-1" />
        <div className="cs-bg-orb-2" />
        <div className="cs-bg-orb-3" />
        <div className="cs-bg-grid" />

        <div className="cs-inner">
          {/* Header */}
          <div className="cs-header">
            <div>
              <div className="cs-eyebrow">
                <div className="cs-eyebrow-line" />
                <span className="cs-eyebrow-text">Selected Work</span>
              </div>
              <h2 className="cs-title">
                Case <span className="cs-title-accent">Studies</span>
              </h2>
              <p className="cs-header-sub">
                The craft and thinking behind each product.
              </p>
            </div>
            <div className="cs-header-num">0{projects.length}</div>
          </div>

          {/* Cards Grid */}
          <div className="cs-grid">
            {projects.map((p, i) => (
              <article
                key={p.id}
                ref={(el) => (cardRefs.current[i] = el)}
                className={`cs-card${visible[i] ? " visible" : ""}`}
                onClick={() => window.open(p.link, "_blank")}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                role="link"
                tabIndex={0}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") &&
                  window.open(p.link, "_blank")
                }
              >
                {/* Image */}
                <div className="cs-card-media">
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <div className="cs-card-media-overlay" />
                  <div className="cs-stat-badge">
                    <div className="cs-stat-value">{p.stats.value}</div>
                    <div className="cs-stat-label">{p.stats.label}</div>
                  </div>
                  <div className="cs-role-badge">{p.role}</div>
                </div>

                {/* Body */}
                <div className="cs-card-body">
                  <div className="cs-card-head">
                    <span className="cs-card-num">{p.id}</span>
                    <h3 className="cs-card-name">{p.title}</h3>
                  </div>
                  <p className="cs-card-subtitle">{p.subtitle}</p>
                  <p className="cs-card-summary">{p.summary}</p>
                  <div className="cs-card-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="cs-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="cs-card-arrow">↗</div>
              </article>
            ))}
          </div>

          {/* Divider */}
          {/* <div className="cs-divider">
            <span className="cs-divider-label">Full Index</span>
            <div className="cs-divider-line" />
          </div> */}

          {/* Table */}
          {/* <div className="cs-table">
            <div className="cs-table-head">
              <span>#</span>
              <span>Project</span>
              <span>Role</span>
              <span>Impact</span>
            </div>
            {projects.map((p, i) => (
              <div
                key={p.id}
                className="cs-table-row"
                onClick={() => window.open(p.link, "_blank")}
              >
                <div className="cs-row-idx">{p.id}</div>
                <div className="cs-row-info">
                  <span className="cs-row-name">{p.title}</span>
                  <span className="cs-row-sub">{p.subtitle}</span>
                </div>
                <div className="cs-row-role">{p.role}</div>
                <div className="cs-row-stat">{p.stats.value}</div>
              </div>
            ))}
          </div> */}

          {/* Footer */}
          <div className="cs-footer">
            <span className="cs-foot-note">
              All projects practiced in live products
            </span>
            <a href="/projects" className="cs-cta">
              View all projects <span className="cs-cta-arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
