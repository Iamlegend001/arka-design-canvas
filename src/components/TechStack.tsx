import React, { useRef, useEffect, useState } from "react";

const technologies = [
  {
    name: "Figma",
    category: "Interface Design",
    primary: true,
    color: "#F24E1E",
    icon: (
      <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M19 28.5C19 25.6 21.4 23.25 24.5 23.25C27.6 23.25 30 25.6 30 28.5C30 31.4 27.6 33.75 24.5 33.75C21.4 33.75 19 31.4 19 28.5Z" fill="#1ABCFE"/>
        <path d="M8 38.25C8 35.35 10.4 33 13.5 33H19V38.25C19 41.15 16.6 43.5 13.5 43.5C10.4 43.5 8 41.15 8 38.25Z" fill="#0ACF83"/>
        <path d="M19 13.5V23.25H24.5C27.6 23.25 30 20.9 30 18C30 15.1 27.6 12.75 24.5 12.75L19 13.5Z" fill="#FF7262"/>
        <path d="M8 18C8 20.9 10.4 23.25 13.5 23.25H19V13.5H13.5C10.4 13.5 8 15.65 8 18Z" fill="#F24E1E"/>
        <path d="M8 28.5C8 31.4 10.4 33.75 13.5 33.75H19V23.25H13.5C10.4 23.25 8 25.6 8 28.5Z" fill="#A259FF"/>
      </svg>
    ),
  },
  {
    name: "Framer",
    category: "Motion & Prototyping",
    color: "#0055FF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M4 0h16v8H12L4 0z" fill="#0055FF"/>
        <path d="M4 8h8l8 8H4V8z" fill="#0044CC"/>
        <path d="M4 16h8l-8 8v-8z" fill="#0033AA"/>
      </svg>
    ),
  },
  {
    name: "Webflow",
    category: "Web Builder",
    color: "#4353FF",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M17.82 7.79s-2.08 6.36-2.24 6.95c-.04-.59-.87-6.95-.87-6.95H11.3s-2.19 6.94-2.33 7.5C8.87 14.74 7.97 7.8 7.97 7.8H5l2.44 8.4h3.21l2.3-7.07L15.27 16.2h3.2L21 7.79h-3.18z" fill="#4353FF"/>
      </svg>
    ),
  },
  {
    name: "Canva",
    category: "Visual Design",
    color: "#00C4CC",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.56 15.277c-.35.578-.91.929-1.54.929-.54 0-.96-.23-1.32-.574-.61.392-1.3.619-2.01.619C8.82 16.251 7.5 14.857 7.5 13.03c0-.453.1-.893.28-1.293-.18-.343-.28-.734-.28-1.146 0-1.457 1.05-2.543 2.49-2.543.48 0 .95.133 1.34.376.36-.243.8-.376 1.26-.376.64 0 1.2.26 1.59.7.1-.02.21-.03.32-.03 1.32 0 2.25.97 2.25 2.32 0 .54-.16 1.04-.44 1.46.17.3.27.65.27 1.02 0 .624-.24 1.18-.62 1.557z" fill="#00C4CC"/>
      </svg>
    ),
  },
  {
    name: "Cursor",
    category: "AI-Assisted Dev",
    color: "#8B5CF6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <rect width="24" height="24" rx="6" fill="#1a1a2e"/>
        <path d="M5 5l7 14 2-6 6-2L5 5z" fill="#8B5CF6" stroke="#8B5CF6" strokeWidth="0.5"/>
        <path d="M14 13l4 4" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Notion",
    category: "Documentation",
    color: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l3.222-.187z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Tailwind",
    category: "CSS Framework",
    color: "#38BDF8",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#38BDF8"/>
      </svg>
    ),
  },
  {
    name: "React",
    category: "Frontend Framework",
    color: "#61DAFB",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <circle cx="12" cy="11.998" r="2.01" fill="#61DAFB"/>
        <path d="M12 7.792c4.18 0 8.05.676 10.857 1.82C25.68 10.88 27 12.357 27 13.998c0 1.64-1.32 3.117-4.143 4.386C20.05 19.528 16.18 20.2 12 20.2c-4.18 0-8.05-.672-10.857-1.816C-1.68 17.115-3 15.638-3 13.998c0-1.641 1.32-3.118 4.143-4.386C3.95 8.468 7.82 7.792 12 7.792z" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
        <path d="M8.093 9.87c2.09-3.62 4.67-6.452 6.96-8.012C17.283.296 19.133.066 20.054.602c.921.535 1.22 2.368.524 4.858C19.896 7.862 18.303 10.858 16.212 14.478 14.12 18.097 11.54 20.929 9.25 22.49 7.03 24 5.18 24.23 4.26 23.694c-.921-.535-1.22-2.368-.524-4.858.681-2.402 2.27-5.348 4.357-8.966z" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
        <path d="M8.093 18.127c-2.09-3.62-3.402-7.402-3.402-10.129 0-2.727.61-4.453 1.569-4.988.96-.535 2.77.003 4.867 1.603 1.85 1.417 3.777 3.72 5.869 7.34 2.09 3.62 3.402 7.4 3.402 10.128 0 2.726-.61 4.452-1.569 4.987-.96.534-2.77-.003-4.867-1.603-1.85-1.418-3.777-3.72-5.869-7.338z" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    category: "Version Control",
    color: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="white"/>
      </svg>
    ),
  },
];

const track = [...technologies, ...technologies, ...technologies];

const TechStack = () => {
  const railRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);

  useEffect(() => { pausedRef.current = paused; }, [paused]);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const SPEED = 0.5;
    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        const setW = el.scrollWidth / 3;
        if (posRef.current >= setW) posRef.current -= setW;
        el.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .ts-root {
          min-height: 100vh;
          background: #080b14;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          color: #fff;
        }

        .ts-bg-orb-1 {
          position: absolute; top: 0; right: 0;
          width: 500px; height: 400px;
          background: radial-gradient(ellipse, rgba(99,102,241,0.13) 0%, transparent 65%);
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .ts-bg-orb-2 {
          position: absolute; bottom: 0; left: 0;
          width: 500px; height: 400px;
          background: radial-gradient(ellipse, rgba(6,182,212,0.10) 0%, transparent 65%);
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .ts-bg-grid {
          position: absolute; inset: 0; z-index: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%);
        }

        .ts-inner {
          position: relative; z-index: 2;
          max-width: 1160px; margin: 0 auto;
          padding: 80px 48px 100px;
        }

        /* Header */
        .ts-header {
          display: flex; align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 64px;
          opacity: 0; animation: tsFadeUp 0.7s ease forwards 0.1s;
        }
        .ts-eyebrow {
          display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
        }
        .ts-eyebrow-line {
          width: 32px; height: 1px;
          background: linear-gradient(90deg, #818cf8, #67e8f9);
        }
        .ts-eyebrow-text {
          font-size: 11px; font-weight: 500; color: #818cf8;
          letter-spacing: 2.5px; text-transform: uppercase;
        }
        .ts-title {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(42px, 5.5vw, 72px);
          line-height: 1; letter-spacing: -2px; color: #fff;
        }
        .ts-title-accent {
          background: linear-gradient(135deg, #818cf8 0%, #67e8f9 60%, #a78bfa 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .ts-header-num {
          font-family: 'Syne', sans-serif; font-size: 120px; font-weight: 800;
          line-height: 1; color: rgba(255,255,255,0.03);
          letter-spacing: -4px; user-select: none;
        }

        /* Marquee */
        .ts-marquee-section {
          position: relative; overflow: hidden;
          padding: 40px 0; margin: 0 -48px;
          opacity: 0; animation: tsFadeUp 0.7s ease forwards 0.2s;
        }
        .ts-marquee-section::before,
        .ts-marquee-section::after {
          content: ''; position: absolute;
          top: 0; bottom: 0; width: 140px; z-index: 10; pointer-events: none;
        }
        .ts-marquee-section::before {
          left: 0;
          background: linear-gradient(to right, #080b14 0%, transparent 100%);
        }
        .ts-marquee-section::after {
          right: 0;
          background: linear-gradient(to left, #080b14 0%, transparent 100%);
        }
        .ts-rail {
          display: flex; gap: 14px;
          width: max-content; will-change: transform;
        }

        /* Marquee card */
        .ts-mcard {
          flex-shrink: 0;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 20px 24px;
          display: flex; flex-direction: column;
          gap: 10px; min-width: 180px;
          position: relative; overflow: hidden;
          transition: all 0.25s; cursor: default;
        }
        .ts-mcard::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: var(--card-color, #818cf8);
          opacity: 0; transition: opacity 0.25s;
        }
        .ts-mcard:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.13);
          transform: translateY(-4px);
        }
        .ts-mcard:hover::before { opacity: 1; }

        .ts-mcard-icon {
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.05);
          border-radius: 10px; flex-shrink: 0;
        }
        .ts-mcard-name {
          font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 700;
          color: #fff; letter-spacing: -0.3px; line-height: 1;
        }
        .ts-mcard-cat {
          font-size: 10px; color: rgba(255,255,255,0.35);
          letter-spacing: 0.5px; font-weight: 300;
        }
        .ts-mcard-badge {
          font-size: 9px; font-weight: 500; color: #818cf8;
          letter-spacing: 1px; text-transform: uppercase;
          display: flex; align-items: center; gap: 5px;
        }
        .ts-mcard-badge::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%;
          background: #818cf8; display: block;
        }

        /* Controls */
        .ts-controls {
          display: flex; justify-content: space-between; align-items: center;
          margin-top: 24px;
          opacity: 0; animation: tsFadeUp 0.7s ease forwards 0.3s;
        }
        .ts-pause-btn {
          display: flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px; padding: 8px 18px;
          font-family: 'DM Sans', sans-serif; font-size: 12px;
          color: rgba(255,255,255,0.5); cursor: pointer;
          transition: all 0.2s; letter-spacing: 0.3px;
        }
        .ts-pause-btn:hover { background: rgba(255,255,255,0.08); color: #fff; }
        .ts-pulse-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #818cf8;
          animation: tsPulse 2s infinite;
        }
        .is-paused .ts-pulse-dot { animation: none; opacity: 0.3; }
        @keyframes tsPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .ts-hint {
          font-size: 11px; color: rgba(255,255,255,0.2);
          letter-spacing: 0.3px;
        }

        /* List table */
        .ts-table {
          margin-top: 56px;
          opacity: 0; animation: tsFadeUp 0.7s ease forwards 0.35s;
        }
        .ts-table-head {
          display: grid;
          grid-template-columns: 48px 1fr 1fr 80px;
          padding: 12px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          margin-bottom: 4px;
        }
        .ts-table-head span {
          font-size: 9px; letter-spacing: 2.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.2); font-weight: 400;
        }
        .ts-table-row {
          display: grid;
          grid-template-columns: 48px 1fr 1fr 80px;
          padding: 16px 20px; align-items: center;
          border-radius: 12px;
          transition: background 0.2s; cursor: default;
          position: relative;
        }
        .ts-table-row:hover { background: rgba(255,255,255,0.04); }
        .ts-table-row + .ts-table-row {
          border-top: 1px solid rgba(255,255,255,0.04);
        }

        .ts-row-idx {
          font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700;
          color: rgba(255,255,255,0.1);
          transition: color 0.2s;
        }
        .ts-table-row:hover .ts-row-idx { color: #818cf8; }

        .ts-row-tool {
          display: flex; align-items: center; gap: 14px;
        }
        .ts-row-icon {
          width: 36px; height: 36px;
          background: rgba(255,255,255,0.05);
          border-radius: 10px; border: 1px solid rgba(255,255,255,0.07);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ts-row-name {
          font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
          color: rgba(255,255,255,0.8); letter-spacing: -0.3px;
          transition: color 0.2s;
        }
        .ts-table-row:hover .ts-row-name { color: #fff; }
        .ts-row-cat {
          font-size: 12px; color: rgba(255,255,255,0.3);
          font-weight: 300; letter-spacing: 0.2px;
        }
        .ts-row-badge {
          font-size: 10px; color: #818cf8; font-weight: 500;
          letter-spacing: 0.5px; opacity: 0;
          transition: opacity 0.2s;
        }
        .ts-table-row.is-primary .ts-row-badge { opacity: 1; }

        /* Footer */
        .ts-footer {
          margin-top: 56px; padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; justify-content: space-between; align-items: center;
          opacity: 0; animation: tsFadeUp 0.7s ease forwards 0.5s;
        }
        .ts-foot-note {
          font-size: 11px; color: rgba(255,255,255,0.25); letter-spacing: 0.5px;
        }
        .ts-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none; border-radius: 100px;
          color: #fff; font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 500; padding: 13px 28px;
          cursor: pointer; text-decoration: none;
          transition: all 0.25s;
          box-shadow: 0 8px 32px rgba(99,102,241,0.35);
        }
        .ts-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(99,102,241,0.5); }

        @keyframes tsFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .ts-inner { padding: 56px 24px 72px; }
          .ts-marquee-section { margin: 0 -24px; }
          .ts-header { margin-bottom: 40px; }
          .ts-header-num { display: none; }
          .ts-table-head { grid-template-columns: 40px 1fr 1fr; }
          .ts-table-row { grid-template-columns: 40px 1fr 1fr; }
          .ts-row-badge { display: none; }
        }

        @media (max-width: 640px) {
          .ts-inner { padding: 40px 20px 56px; }
          .ts-marquee-section { margin: 0 -20px; }
          .ts-title { font-size: 38px; }
          .ts-table-head { display: none; }
          .ts-table-row { grid-template-columns: 1fr auto; gap: 8px; }
          .ts-row-idx { display: none; }
          .ts-footer { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
      `}</style>

      <section className="ts-root">
        <div className="ts-bg-orb-1" />
        <div className="ts-bg-orb-2" />
        <div className="ts-bg-grid" />

        <div className="ts-inner">
          {/* Header */}
          <div className="ts-header">
            <div>
              <div className="ts-eyebrow">
                <div className="ts-eyebrow-line" />
                <span className="ts-eyebrow-text">Design Toolbox</span>
              </div>
              <h2 className="ts-title">
                Tech <span className="ts-title-accent">Stack</span>
              </h2>
            </div>
            <div className="ts-header-num">09</div>
          </div>

          {/* Marquee */}
          <div
            className="ts-marquee-section"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="ts-rail" ref={railRef}>
              {track.map((t, i) => (
                <div
                  key={i}
                  className="ts-mcard"
                  style={{ "--card-color": t.color }}
                >
                  <div className="ts-mcard-icon">{t.icon}</div>
                  <div>
                    <div className="ts-mcard-name">{t.name}</div>
                    <div className="ts-mcard-cat">{t.category}</div>
                  </div>
                  {t.primary && <div className="ts-mcard-badge">Primary</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="ts-controls">
            <button
              type="button"
              className={`ts-pause-btn${paused ? " is-paused" : ""}`}
              onClick={() => setPaused(p => !p)}
            >
              <div className="ts-pulse-dot" />
              {paused ? "Resume" : "Pause scroll"}
            </button>
            <span className="ts-hint">Hover to pause</span>
          </div>

          {/* Table */}
          <div className="ts-table">
            <div className="ts-table-head">
              <span>#</span>
              <span>Tool</span>
              <span>Category</span>
              <span>Role</span>
            </div>
            {technologies.map((t, i) => (
              <div key={t.name} className={`ts-table-row${t.primary ? " is-primary" : ""}`}>
                <div className="ts-row-idx">{String(i + 1).padStart(2, "0")}</div>
                <div className="ts-row-tool">
                  <div className="ts-row-icon">{t.icon}</div>
                  <span className="ts-row-name">{t.name}</span>
                </div>
                <div className="ts-row-cat">{t.category}</div>
                <div className="ts-row-badge">Primary</div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="ts-footer">
            <span className="ts-foot-note">Tools used in live projects</span>
            <a href="#contact" className="ts-cta">Start a project →</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStack;