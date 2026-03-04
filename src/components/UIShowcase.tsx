import React, { useState } from "react";

const uiWork = [
  {
    id: 1,
    title: "Banking Payment App",
    category: "Fintech · UI Design",
    image: "https://cdn.dribbble.com/userupload/45306271/file/04aec125120e543eb022621d1160496c.png?resize=400x869&vertical=center",
    tags: ["UI Design", "Dashboard", "Fintech"],
    likes: 124,
    comments: 18,
  },
  {
    id: 2,
    title: "E-commerce Mobile App",
    category: "Desktop · UX",
    image: "https://cdn.dribbble.com/userupload/43901235/file/original-c3db763da08a7ae2596c450f6a48ca03.png?resize=1200x900&vertical=center",
    tags: ["Desktop", "E-commerce", "UX"],
    likes: 89,
    comments: 12,
  },
  {
    id: 3,
    title: "Modern Dashboard",
    category: "Social · Feed",
    image: "https://cdn.dribbble.com/userupload/45289592/file/3b81ff5711fd4eeb32ad8b3105efc15c.png?resize=1440x1024&vertical=center",
    tags: ["Social", "Feed", "Mobile"],
    likes: 156,
    comments: 24,
  },
  {
    id: 4,
    title: "Animated Background",
    category: "Visual · Experiment",
    image: "https://cdn.dribbble.com/userupload/44184408/file/original-a8bcec15fd661eea6ba3faa46b19fcf8.png?resize=1200x855&vertical=center",
    tags: ["Mobile", "Visual", "UX"],
    likes: 98,
    comments: 15,
  },
  {
    id: 5,
    title: "Train Booking",
    category: "Web · Travel",
    image: "https://cdn.dribbble.com/userupload/44184457/file/original-fb717d8fc6ffdbc68293fb458b279c9e.png?resize=1200x853&vertical=center",
    tags: ["Web", "Travel", "Booking"],
    likes: 134,
    comments: 21,
  },
  {
    id: 6,
    title: "Shopping Cart",
    category: "E-commerce · UI",
    image: "https://cdn.dribbble.com/userupload/43498696/file/original-fcf7c8c765fdfa72bc7f0073a3ac8e9c.png?resize=1504x972&vertical=center",
    tags: ["Health", "Dashboard", "Mobile"],
    likes: 76,
    comments: 9,
  },
  {
    id: 7,
    title: "Music Player Redesign",
    category: "Audio · Streaming",
    image: "https://cdn.dribbble.com/userupload/43333525/file/original-437e42737751dd8b0ac8203d96819a3f.png?resize=1200x1171&vertical=center",
    tags: ["Music", "Player", "UI"],
    likes: 187,
    comments: 32,
  },
  {
    id: 8,
    title: "Hero Section",
    category: "Web · Creative",
    image: "https://cdn.dribbble.com/userupload/44184506/file/original-39608b93fbed9e0d03609bd6cbe3930a.png?resize=2048x1584&vertical=center",
    tags: ["Productivity", "Web", "Dashboard"],
    likes: 112,
    comments: 17,
  },
];

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="10" height="10">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="10" height="10">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const UIShowcase = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .us-root {
          min-height: 100vh;
          background: #080b14;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          color: #fff;
        }

        .us-bg-orb-1 {
          position: absolute; top: 0; right: 0;
          width: 600px; height: 500px;
          background: radial-gradient(ellipse, rgba(99,102,241,0.13) 0%, transparent 65%);
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .us-bg-orb-2 {
          position: absolute; bottom: 0; left: 0;
          width: 500px; height: 400px;
          background: radial-gradient(ellipse, rgba(6,182,212,0.10) 0%, transparent 65%);
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .us-bg-orb-3 {
          position: absolute; top: 45%; left: 50%;
          transform: translate(-50%, -50%);
          width: 700px; height: 300px;
          background: radial-gradient(ellipse, rgba(139,92,246,0.05) 0%, transparent 70%);
          filter: blur(60px); pointer-events: none; z-index: 0;
        }
        .us-bg-grid {
          position: absolute; inset: 0; z-index: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%);
        }

        .us-inner {
          position: relative; z-index: 2;
          max-width: 1160px; margin: 0 auto;
          padding: 80px 48px 100px;
        }

        /* ── Header ── */
        .us-header {
          display: flex; align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
          opacity: 0; animation: usFadeUp 0.7s ease forwards 0.1s;
        }
        .us-eyebrow {
          display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
        }
        .us-eyebrow-line {
          width: 32px; height: 1px;
          background: linear-gradient(90deg, #818cf8, #67e8f9);
        }
        .us-eyebrow-text {
          font-size: 11px; font-weight: 500; color: #818cf8;
          letter-spacing: 2.5px; text-transform: uppercase;
        }
        .us-title {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(42px, 5.5vw, 72px);
          line-height: 1; letter-spacing: -2px; color: #fff;
        }
        .us-title-accent {
          background: linear-gradient(135deg, #818cf8 0%, #67e8f9 60%, #a78bfa 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .us-header-sub {
          margin-top: 14px;
          font-size: 13px; color: rgba(255,255,255,0.25);
          max-width: 280px; line-height: 1.6; font-weight: 300;
        }
        .us-header-num {
          font-family: 'Syne', sans-serif; font-size: 120px; font-weight: 800;
          line-height: 1; color: rgba(255,255,255,0.03);
          letter-spacing: -4px; user-select: none;
        }

        /* ── Masonry ── */
        .us-grid-section {
          opacity: 0; animation: usFadeUp 0.7s ease forwards 0.2s;
        }
        .us-grid { columns: 1; gap: 14px; }
        @media (min-width: 640px)  { .us-grid { columns: 2; } }
        @media (min-width: 1024px) { .us-grid { columns: 3; } }
        @media (min-width: 1280px) { .us-grid { columns: 4; } }

        /* ── Card ── */
        .us-card {
          break-inside: avoid;
          margin-bottom: 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transition: border-color 0.25s, transform 0.25s, background 0.25s;
        }
        .us-card:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.14);
          transform: translateY(-4px);
        }
        .us-card::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #818cf8, #67e8f9);
          opacity: 0; transition: opacity 0.25s; z-index: 3;
        }
        .us-card:hover::before { opacity: 1; }

        .us-card-img-wrap { overflow: hidden; position: relative; }
        .us-card-img {
          width: 100%; display: block;
          transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
          filter: brightness(0.88) saturate(0.8);
        }
        .us-card:hover .us-card-img {
          transform: scale(1.04);
          filter: brightness(1) saturate(1);
        }

        .us-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(8,11,20,0.88) 0%, transparent 55%);
          opacity: 0; transition: opacity 0.35s;
          display: flex; align-items: flex-end; z-index: 2;
        }
        .us-card:hover .us-card-overlay { opacity: 1; }
        .us-overlay-content {
          padding: 20px;
          transform: translateY(8px); opacity: 0;
          transition: all 0.35s ease 0.05s; width: 100%;
        }
        .us-card:hover .us-overlay-content { transform: translateY(0); opacity: 1; }
        .us-overlay-title {
          font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 700;
          color: #fff; letter-spacing: -0.3px; display: block;
          margin-bottom: 4px; line-height: 1.1;
        }
        .us-overlay-cat {
          font-size: 9px; letter-spacing: 2px;
          text-transform: uppercase; color: rgba(255,255,255,0.45);
        }

        .us-card-foot {
          padding: 14px 18px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; justify-content: space-between; align-items: center;
        }
        .us-card-stats { display: flex; gap: 14px; }
        .us-stat {
          display: flex; align-items: center; gap: 5px;
          font-size: 10px; color: rgba(255,255,255,0.28);
          transition: color 0.2s;
        }
        .us-card:hover .us-stat { color: rgba(255,255,255,0.55); }

        .us-card-tags { display: flex; gap: 5px; }
        .us-tag {
          font-size: 8px; font-weight: 500; letter-spacing: 1px;
          text-transform: uppercase; padding: 3px 9px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 100px; color: rgba(255,255,255,0.22);
          transition: all 0.2s;
        }
        .us-card:hover .us-tag:first-child {
          background: rgba(129,140,248,0.15);
          border-color: rgba(129,140,248,0.3);
          color: #818cf8;
        }
        .us-card:hover .us-tag:not(:first-child) {
          border-color: rgba(255,255,255,0.13);
          color: rgba(255,255,255,0.38);
        }

        /* ── Divider ── */
        .us-divider {
          display: flex; align-items: center; gap: 16px;
          margin: 56px 0 28px;
          opacity: 0; animation: usFadeUp 0.7s ease forwards 0.3s;
        }
        .us-divider-label {
          font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
          color: rgba(255,255,255,0.18); white-space: nowrap; font-weight: 500;
        }
        .us-divider-line {
          flex: 1; height: 1px;
          background: linear-gradient(to right, rgba(255,255,255,0.07), transparent);
        }

        /* ── Table ── */
        .us-table {
          opacity: 0; animation: usFadeUp 0.7s ease forwards 0.35s;
        }
        .us-table-head {
          display: grid;
          grid-template-columns: 48px 1fr 1fr 110px;
          padding: 12px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          margin-bottom: 4px;
        }
        .us-table-head span {
          font-size: 9px; letter-spacing: 2.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.2); font-weight: 400;
        }
        .us-table-row {
          display: grid;
          grid-template-columns: 48px 1fr 1fr 110px;
          padding: 14px 20px; align-items: center;
          border-radius: 12px;
          transition: background 0.2s; cursor: default;
        }
        .us-table-row:hover { background: rgba(255,255,255,0.04); }
        .us-table-row + .us-table-row { border-top: 1px solid rgba(255,255,255,0.04); }

        .us-row-idx {
          font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700;
          color: rgba(255,255,255,0.1); transition: color 0.2s;
        }
        .us-table-row:hover .us-row-idx { color: #818cf8; }

        .us-row-info { display: flex; flex-direction: column; gap: 2px; }
        .us-row-name {
          font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700;
          color: rgba(255,255,255,0.8); letter-spacing: -0.2px; transition: color 0.2s;
        }
        .us-table-row:hover .us-row-name { color: #fff; }
        .us-row-cat {
          font-size: 11px; color: rgba(255,255,255,0.28);
          font-weight: 300; letter-spacing: 0.2px;
        }
        .us-row-tags { display: flex; gap: 5px; flex-wrap: wrap; }
        .us-row-tag {
          font-size: 8px; letter-spacing: 1px; text-transform: uppercase;
          padding: 2px 8px; border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.2);
        }
        .us-row-stats { display: flex; align-items: center; gap: 12px; }
        .us-row-stat {
          display: flex; align-items: center; gap: 5px;
          font-size: 11px; color: rgba(255,255,255,0.22);
          transition: color 0.2s;
        }
        .us-table-row:hover .us-row-stat { color: rgba(255,255,255,0.5); }

        /* ── Footer ── */
        .us-footer {
          margin-top: 56px; padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; justify-content: space-between; align-items: center;
          opacity: 0; animation: usFadeUp 0.7s ease forwards 0.5s;
        }
        .us-foot-note {
          font-size: 11px; color: rgba(255,255,255,0.25); letter-spacing: 0.5px;
        }
        .us-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none; border-radius: 100px;
          color: #fff; font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 500; padding: 13px 28px;
          cursor: pointer; text-decoration: none;
          transition: all 0.25s;
          box-shadow: 0 8px 32px rgba(99,102,241,0.35);
        }
        .us-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(99,102,241,0.5); }

        @keyframes usFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .us-inner { padding: 56px 24px 72px; }
          .us-header { margin-bottom: 40px; }
          .us-header-num { display: none; }
          .us-table-head { grid-template-columns: 40px 1fr 1fr; }
          .us-table-row { grid-template-columns: 40px 1fr 1fr; }
          .us-row-stats { display: none; }
        }
        @media (max-width: 640px) {
          .us-inner { padding: 40px 20px 56px; }
          .us-title { font-size: 38px; }
          .us-grid { columns: 1; }
          .us-table-head { display: none; }
          .us-table-row { grid-template-columns: 1fr auto; }
          .us-row-idx { display: none; }
          .us-row-tags { display: none; }
          .us-footer { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
      `}</style>

      <section className="us-root">
        <div className="us-bg-orb-1" />
        <div className="us-bg-orb-2" />
        <div className="us-bg-orb-3" />
        <div className="us-bg-grid" />

        <div className="us-inner">

          {/* Header */}
          <div className="us-header">
            <div>
              <div className="us-eyebrow">
                <div className="us-eyebrow-line" />
                <span className="us-eyebrow-text">Dribbble · UI Explorations</span>
              </div>
              <h2 className="us-title">
                Visual <span className="us-title-accent">Work</span>
              </h2>
              <p className="us-header-sub">
                Interface experiments &amp; shots crafted for real projects.
              </p>
            </div>
            <div className="us-header-num">08</div>
          </div>

          {/* Masonry Grid */}
          <div className="us-grid-section">
            <div className="us-grid">
              {uiWork.map((work) => (
                <div
                  key={work.id}
                  className="us-card"
                  onMouseEnter={() => setHoveredId(work.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="us-card-img-wrap">
                    <img src={work.image} alt={work.title} className="us-card-img" />
                    <div className="us-card-overlay">
                      <div className="us-overlay-content">
                        <span className="us-overlay-title">{work.title}</span>
                        <span className="us-overlay-cat">{work.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="us-card-foot">
                    <div className="us-card-stats">
                      <span className="us-stat"><HeartIcon />{work.likes}</span>
                      <span className="us-stat"><ChatIcon />{work.comments}</span>
                    </div>
                    <div className="us-card-tags">
                      {work.tags.slice(0, 2).map((t) => (
                        <span key={t} className="us-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          {/* <div className="us-divider">
            <span className="us-divider-label">Full Index</span>
            <div className="us-divider-line" />
          </div> */}

          {/* Table */}
          {/* <div className="us-table">
            <div className="us-table-head">
              <span>#</span>
              <span>Shot</span>
              <span>Tags</span>
              <span>Engagement</span>
            </div>
            {uiWork.map((work, i) => (
              <div key={work.id} className="us-table-row">
                <div className="us-row-idx">{String(i + 1).padStart(2, "0")}</div>
                <div className="us-row-info">
                  <span className="us-row-name">{work.title}</span>
                  <span className="us-row-cat">{work.category}</span>
                </div>
                <div className="us-row-tags">
                  {work.tags.slice(0, 2).map((t) => (
                    <span key={t} className="us-row-tag">{t}</span>
                  ))}
                </div>
                <div className="us-row-stats">
                  <span className="us-row-stat"><HeartIcon />{work.likes}</span>
                  <span className="us-row-stat"><ChatIcon />{work.comments}</span>
                </div>
              </div>
            ))}
          </div> */}

          {/* Footer */}
          <div className="us-footer">
            <span className="us-foot-note">Shots shared on Dribbble</span>
            <a
              href="https://dribbble.com/imkuttu123"
              target="_blank"
              rel="noopener noreferrer"
              className="us-cta"
            >
              View on Dribbble →
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default UIShowcase;