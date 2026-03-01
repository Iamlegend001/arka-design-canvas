import React, { useState } from "react";

const uiWork = [
  {
    id: 1,
    title: "Banking Payment App",
    category: "Fintech · UI Design",
    image:
      "https://cdn.dribbble.com/userupload/45306271/file/04aec125120e543eb022621d1160496c.png?resize=400x869&vertical=center",
    tags: ["UI Design", "Dashboard", "Fintech"],
    likes: 124,
    comments: 18,
  },
  {
    id: 2,
    title: "E-commerce Mobile App",
    category: "Desktop · UX",
    image:
      "https://cdn.dribbble.com/userupload/43901235/file/original-c3db763da08a7ae2596c450f6a48ca03.png?resize=1200x900&vertical=center",
    tags: ["Desktop", "E-commerce", "UX"],
    likes: 89,
    comments: 12,
  },
  {
    id: 3,
    title: "Modern Dashboard",
    category: "Social · Feed",
    image:
      "https://cdn.dribbble.com/userupload/45289592/file/3b81ff5711fd4eeb32ad8b3105efc15c.png?resize=1440x1024&vertical=center",
    tags: ["Social", "Feed", "Mobile"],
    likes: 156,
    comments: 24,
  },
  {
    id: 4,
    title: "Animated Background",
    category: "Visual · Experiment",
    image:
      "https://cdn.dribbble.com/userupload/44184408/file/original-a8bcec15fd661eea6ba3faa46b19fcf8.png?resize=1200x855&vertical=center",
    tags: ["Mobile", "Visual", "UX"],
    likes: 98,
    comments: 15,
  },
  {
    id: 5,
    title: "Train Booking",
    category: "Web · Travel",
    image:
      "https://cdn.dribbble.com/userupload/44184457/file/original-fb717d8fc6ffdbc68293fb458b279c9e.png?resize=1200x853&vertical=center",
    tags: ["Web", "Travel", "Booking"],
    likes: 134,
    comments: 21,
  },
  {
    id: 6,
    title: "Shopping Cart",
    category: "E-commerce · UI",
    image:
      "https://cdn.dribbble.com/userupload/43498696/file/original-fcf7c8c765fdfa72bc7f0073a3ac8e9c.png?resize=1504x972&vertical=center",
    tags: ["Health", "Dashboard", "Mobile"],
    likes: 76,
    comments: 9,
  },
  {
    id: 7,
    title: "Music Player Redesign",
    category: "Audio · Streaming",
    image:
      "https://cdn.dribbble.com/userupload/43333525/file/original-437e42737751dd8b0ac8203d96819a3f.png?resize=1200x1171&vertical=center",
    tags: ["Music", "Player", "UI"],
    likes: 187,
    comments: 32,
  },
  {
    id: 8,
    title: "Hero Section",
    category: "Web · Creative",
    image:
      "https://cdn.dribbble.com/userupload/44184506/file/original-39608b93fbed9e0d03609bd6cbe3930a.png?resize=2048x1584&vertical=center",
    tags: ["Productivity", "Web", "Dashboard"],
    likes: 112,
    comments: 17,
  },
];

const UIShowcase = () => {
  const [hoveredId, setHoveredId] = useState(null);

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

        .ui-section {
          background: var(--paper);
          font-family: 'DM Mono', monospace;
        }

        /* ── Header ── */
        .ui-header {
          padding: 72px 48px 56px;
          border-bottom: 1px solid var(--border);
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          gap: 32px;
        }
        .ui-eyebrow {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ui-eyebrow::before {
          content: '';
          width: 28px; height: 1px;
          background: var(--red);
          display: block;
          flex-shrink: 0;
        }
        .ui-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 7vw, 96px);
          line-height: 0.9;
          letter-spacing: 2px;
          color: var(--ink);
        }
        .ui-title-italic {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          color: var(--red);
          font-size: 0.55em;
          display: block;
          letter-spacing: 0;
          line-height: 1.3;
          margin-top: 6px;
        }
        .ui-meta { text-align: right; }
        .ui-meta-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 64px;
          line-height: 1;
          color: var(--ink);
          opacity: 0.07;
          letter-spacing: 2px;
        }
        .ui-meta-label {
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--mid);
          margin-top: -8px;
        }

        /* ── Grid ── */
        .ui-grid-wrap {
          padding: 48px;
          border-bottom: 1px solid var(--border);
        }
        .ui-grid {
          columns: 1;
          gap: 16px;
        }
        @media (min-width: 640px)  { .ui-grid { columns: 2; } }
        @media (min-width: 1024px) { .ui-grid { columns: 3; } }
        @media (min-width: 1280px) { .ui-grid { columns: 4; } }

        /* ── Card ── */
        .ui-card {
          break-inside: avoid;
          margin-bottom: 16px;
          border: 1px solid var(--border);
          overflow: hidden;
          transition: border-color 0.2s;
          cursor: pointer;
          position: relative;
        }
        .ui-card:hover { border-color: rgba(17,16,16,0.25); }

        .ui-card-img {
          width: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.5s ease;
          filter: grayscale(15%);
        }
        .ui-card:hover .ui-card-img {
          transform: scale(1.03);
          filter: grayscale(0%);
        }

        /* overlay on hover */
        .ui-card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(17,16,16,0);
          transition: background 0.3s;
          display: flex;
          align-items: flex-end;
          pointer-events: none;
        }
        .ui-card:hover .ui-card-overlay {
          background: rgba(17,16,16,0.45);
        }
        .ui-card-overlay-content {
          padding: 20px;
          transform: translateY(8px);
          opacity: 0;
          transition: all 0.3s ease;
          width: 100%;
        }
        .ui-card:hover .ui-card-overlay-content {
          transform: translateY(0);
          opacity: 1;
        }
        .ui-card-overlay-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          letter-spacing: 2px;
          color: var(--paper);
          line-height: 1;
          display: block;
          margin-bottom: 4px;
        }
        .ui-card-overlay-cat {
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--paper);
          opacity: 0.6;
        }

        /* image container clips */
        .ui-card-img-wrap {
          overflow: hidden;
          position: relative;
        }

        /* card footer */
        .ui-card-foot {
          padding: 14px 18px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ui-card-stats {
          display: flex;
          gap: 14px;
        }
        .ui-stat {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 9px;
          letter-spacing: 1.5px;
          color: var(--mid);
          opacity: 0.6;
        }
        .ui-stat svg {
          width: 10px; height: 10px;
        }
        .ui-card-tags {
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .ui-tag {
          font-size: 7px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 2px 8px;
          border: 1px solid var(--border);
          color: var(--mid);
          opacity: 0.6;
        }

        /* ── Footer ── */
        .ui-footer {
          padding: 22px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ui-foot-note {
          font-size: 9px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--mid);
          opacity: 0.35;
        }
        .ui-dribbble {
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
        .ui-dribbble::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--red);
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.77,0,0.175,1);
        }
        .ui-dribbble:hover::after { transform: translateX(0); }
        .ui-dribbble:hover { transform: translateY(-1px); }
        .ui-dribbble span { position: relative; z-index: 1; }

        /* ── Responsive ───────────────────────────────────────────── */
        @media (max-width: 1024px) {
          .ui-header {
            padding: 64px 36px 48px;
            gap: 28px;
          }
          .ui-title {
            font-size: clamp(48px, 8vw, 90px);
          }
          .ui-grid-wrap {
            padding: 40px 36px 48px;
          }
          .ui-grid {
            gap: 16px;
          }
          .ui-footer {
            padding: 20px 36px;
          }
        }

        /* Tablet: 768-1024px */
        @media (max-width: 768px) {
          .ui-header {
            padding: 56px 28px 40px;
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .ui-title {
            font-size: clamp(40px, 10vw, 72px);
          }
          .ui-grid-wrap {
            padding: 32px 28px 40px;
          }
          .ui-grid {
            columns: 2;
            gap: 14px;
          }
          .ui-card {
            margin-bottom: 14px;
          }
          .ui-footer {
            padding: 18px 28px;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }

        /* Mobile: below 768px */
        @media (max-width: 640px) {
          .ui-section {
            padding: 0;
          }
          .ui-header {
            padding: 48px 20px 36px;
            gap: 20px;
          }
          .ui-title {
            font-size: clamp(32px, 12vw, 56px);
            letter-spacing: 1px;
          }
          .ui-eyebrow {
            font-size: 9px;
            margin-bottom: 14px;
          }
          .ui-eyebrow::before {
            width: 20px;
          }
          .ui-grid-wrap {
            padding: 28px 20px 32px;
          }
          .ui-grid {
            columns: 1;
            gap: 12px;
          }
          .ui-card {
            margin-bottom: 12px;
            border: 1px solid var(--border);
          }
          .ui-card-img {
            width: 100%;
            height: auto;
            display: block;
          }
          .ui-card-overlay-title {
            font-size: 18px;
            letter-spacing: 1px;
          }
          .ui-card-overlay-cat {
            font-size: 8px;
          }
          .ui-card-foot {
            padding: 12px 14px;
            gap: 10px;
            justify-content: space-between;
          }
          .ui-stat {
            font-size: 8px;
          }
          .ui-tag {
            font-size: 6px;
            padding: 2px 6px;
          }
          .ui-footer {
            padding: 16px 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .ui-foot-note {
            font-size: 8px;
          }
          .ui-dribbble {
            width: 100%;
            justify-content: center;
            font-size: 8px;
            padding: 10px 20px;
          }
        }

        /* Very small: below 380px */
        @media (max-width: 380px) {
          .ui-header {
            padding: 40px 16px 32px;
          }
          .ui-title {
            font-size: 28px;
          }
          .ui-grid-wrap {
            padding: 24px 16px 28px;
          }
          .ui-card {
            margin-bottom: 10px;
          }
          .ui-card-foot {
            padding: 10px 12px;
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
          .ui-card-tags {
            width: 100%;
            justify-content: flex-start;
          }
          .ui-footer {
            padding: 14px 16px;
          }
        }
      `}</style>

      <section className="ui-section">
        {/* Header */}
        <div className="ui-header">
          <div>
            <div className="ui-eyebrow">Dribbble · UI Explorations</div>
            <h2 className="ui-title">
              Visual Work
              <span className="ui-title-italic">
                Interface experiments & shots.
              </span>
            </h2>
          </div>
          <div className="ui-meta">
            <div className="ui-meta-num">08</div>
            <div className="ui-meta-label">Shots</div>
          </div>
        </div>

        {/* Masonry grid */}
        <div className="ui-grid-wrap">
          <div className="ui-grid">
            {uiWork.map((work) => (
              <div
                key={work.id}
                className="ui-card"
                onMouseEnter={() => setHoveredId(work.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="ui-card-img-wrap">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="ui-card-img"
                  />
                  <div className="ui-card-overlay">
                    <div className="ui-card-overlay-content">
                      <span className="ui-card-overlay-title">
                        {work.title}
                      </span>
                      <span className="ui-card-overlay-cat">
                        {work.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="ui-card-foot">
                  <div className="ui-card-stats">
                    <span className="ui-stat">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      {work.likes}
                    </span>
                    <span className="ui-stat">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      {work.comments}
                    </span>
                  </div>
                  <div className="ui-card-tags">
                    {work.tags.slice(0, 2).map((t) => (
                      <span key={t} className="ui-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="ui-footer">
          <span className="ui-foot-note">Shots shared on Dribbble</span>
          <a
            href="https://dribbble.com/imkuttu123"
            target="_blank"
            rel="noopener noreferrer"
            className="ui-dribbble"
          >
            <span>View on Dribbble →</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default UIShowcase;
