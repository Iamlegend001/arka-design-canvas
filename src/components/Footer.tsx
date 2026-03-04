import React, { useState } from "react";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/arkapravadevux/", short: "LI" },
  { name: "GitHub", href: "https://github.com/Iamlegend001", short: "GH" },
  { name: "Dribbble", href: "https://dribbble.com/imkuttu123", short: "DR" },
  { name: "Twitter", href: "https://x.com/DevLegend008", short: "TW" },
];

const EMAIL = "arkapravasantra17@gmail.com";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        /* ── Root ── */
        .ft-root {
          background: #080b14;
          font-family: 'DM Sans', sans-serif;
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        /* ── Background ── */
        .ft-bg-orb-1 {
          position: absolute; bottom: 0; right: 0;
          width: 600px; height: 500px;
          background: radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 65%);
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .ft-bg-orb-2 {
          position: absolute; top: 0; left: 0;
          width: 500px; height: 400px;
          background: radial-gradient(ellipse, rgba(6,182,212,0.09) 0%, transparent 65%);
          filter: blur(80px); pointer-events: none; z-index: 0;
        }
        .ft-bg-grid {
          position: absolute; inset: 0; z-index: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%);
        }

        /* ── Inner ── */
        .ft-inner {
          position: relative; z-index: 2;
          max-width: 1160px; margin: 0 auto;
          padding: 0 48px;
        }

        /* ── CTA Block ── */
        .ft-cta {
          padding: 80px 0 64px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: end;
        }

        .ft-cta-headline {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: clamp(42px, 5.5vw, 72px);
          line-height: 1; letter-spacing: -2px; color: #fff;
          margin: 0;
        }
        .ft-cta-headline-accent {
          background: linear-gradient(135deg, #818cf8 0%, #67e8f9 60%, #a78bfa 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          display: block;
        }

        .ft-cta-right {
          display: flex; flex-direction: column; gap: 20px;
        }
        .ft-cta-eyebrow {
          display: flex; align-items: center; gap: 12px; margin-bottom: 4px;
        }
        .ft-cta-eyebrow-line {
          width: 32px; height: 1px;
          background: linear-gradient(90deg, #818cf8, #67e8f9);
        }
        .ft-cta-eyebrow-text {
          font-size: 11px; font-weight: 500; color: #818cf8;
          letter-spacing: 2.5px; text-transform: uppercase;
        }
        .ft-cta-sub {
          font-size: 13px; font-weight: 300;
          color: rgba(255,255,255,0.35);
          line-height: 1.75; margin: 0;
          max-width: 360px;
        }

        /* Email block */
        .ft-email-block {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 20px 22px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 16px;
          cursor: pointer; width: 100%;
          position: relative; overflow: hidden;
          transition: border-color 0.25s, background 0.25s;
          text-align: left;
        }
        .ft-email-block::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #818cf8, #67e8f9);
          opacity: 0; transition: opacity 0.25s;
        }
        .ft-email-block:hover {
          border-color: rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.055);
        }
        .ft-email-block:hover::before { opacity: 1; }

        .ft-email-label {
          font-size: 9px; font-weight: 500;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.25); display: block; margin-bottom: 6px;
        }
        .ft-email-addr {
          font-size: 15px; font-weight: 400;
          color: rgba(255,255,255,0.8); letter-spacing: 0.2px;
        }
        .ft-email-action {
          font-size: 9px; font-weight: 500;
          letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.25); flex-shrink: 0;
          transition: color 0.2s;
        }
        .ft-email-block:hover .ft-email-action { color: #818cf8; }
        .ft-email-copied {
          font-size: 9px; font-weight: 500;
          letter-spacing: 2px; text-transform: uppercase;
          color: #34d399; flex-shrink: 0;
        }

        /* ── Mid Grid ── */
        .ft-mid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .ft-col {
          padding: 40px 36px 40px 0;
          border-right: 1px solid rgba(255,255,255,0.06);
          padding-right: 36px;
        }
        .ft-col:first-child { padding-left: 0; }
        .ft-col:last-child { border-right: none; padding-right: 0; }
        .ft-col + .ft-col { padding-left: 36px; }

        .ft-col-label {
          font-size: 9px; font-weight: 500;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.2); display: block; margin-bottom: 20px;
        }

        /* Brand col */
        .ft-brand-name {
          font-family: 'Syne', sans-serif; font-weight: 800;
          font-size: 32px; letter-spacing: -1px;
          color: #fff; line-height: 1; display: block; margin-bottom: 6px;
        }
        .ft-brand-accent {
          background: linear-gradient(135deg, #818cf8, #67e8f9);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .ft-brand-role {
          font-size: 10px; font-weight: 400;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.25); display: block; margin-bottom: 18px;
        }
        .ft-brand-loc {
          font-size: 11px; font-weight: 300;
          color: rgba(255,255,255,0.2);
          display: flex; align-items: center; gap: 8px;
        }
        .ft-brand-loc-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #818cf8; opacity: 0.5; flex-shrink: 0;
        }

        /* Nav col */
        .ft-nav { list-style: none; display: flex; flex-direction: column; gap: 2px; }
        .ft-nav a {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; font-weight: 400;
          color: rgba(255,255,255,0.3);
          text-decoration: none; padding: 7px 0;
          border-bottom: 1px solid transparent;
          transition: color 0.2s;
          position: relative;
        }
        .ft-nav-arrow {
          font-size: 11px; color: #818cf8;
          opacity: 0; transform: translateX(-4px);
          transition: opacity 0.2s, transform 0.2s;
        }
        .ft-nav a:hover { color: #fff; }
        .ft-nav a:hover .ft-nav-arrow { opacity: 1; transform: translateX(0); }

        /* Socials col */
        .ft-socials { display: flex; flex-direction: column; }
        .ft-social-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 11px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          text-decoration: none;
          transition: border-color 0.2s;
        }
        .ft-social-link:last-child { border-bottom: none; }
        .ft-social-link:hover { border-bottom-color: rgba(255,255,255,0.1); }
        .ft-social-name {
          font-size: 13px; font-weight: 400;
          color: rgba(255,255,255,0.3); transition: color 0.2s;
        }
        .ft-social-link:hover .ft-social-name { color: #fff; }
        .ft-social-arrow {
          font-size: 12px; color: rgba(255,255,255,0.15);
          opacity: 0; transform: translateX(-4px);
          transition: opacity 0.2s, transform 0.2s, color 0.2s;
        }
        .ft-social-link:hover .ft-social-arrow {
          opacity: 1; transform: translateX(0); color: #818cf8;
        }

        /* Status col */
        .ft-avail-pill {
          display: flex; align-items: center; gap: 8px;
          font-size: 10px; font-weight: 500;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #34d399; margin-bottom: 16px;
        }
        .ft-avail-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #34d399;
          animation: ftPulse 2s infinite;
        }
        @keyframes ftPulse { 0%,100%{opacity:1} 50%{opacity:0.25} }
        .ft-status-text {
          font-size: 12px; font-weight: 300;
          color: rgba(255,255,255,0.25); line-height: 1.75;
        }

        /* ── Bottom Bar ── */
        .ft-bottom {
          padding: 20px 0;
          display: flex; justify-content: space-between; align-items: center;
        }
        .ft-copy {
          font-size: 10px; font-weight: 400;
          letter-spacing: 1px; color: rgba(255,255,255,0.15);
        }
        .ft-top-btn {
          display: flex; align-items: center; gap: 8px;
          font-size: 10px; font-weight: 500;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          background: none; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.2s; padding: 0;
        }
        .ft-top-btn:hover { color: rgba(255,255,255,0.6); }
        .ft-top-arr { transition: transform 0.2s; display: inline-block; }
        .ft-top-btn:hover .ft-top-arr { transform: translateY(-3px); }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .ft-inner { padding: 0 36px; }
          .ft-cta { padding: 64px 0 48px; gap: 40px; }
          .ft-mid { grid-template-columns: 1fr 1fr; }
          .ft-col {
            padding: 32px 0 32px !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
          .ft-col:nth-child(odd) { padding-right: 24px !important; }
          .ft-col:nth-child(even) { padding-left: 24px !important; border-left: 1px solid rgba(255,255,255,0.06); }
        }
        @media (max-width: 768px) {
          .ft-cta { grid-template-columns: 1fr; gap: 32px; }
          .ft-mid { grid-template-columns: 1fr; }
          .ft-col { padding: 28px 0 !important; border-left: none !important; border-right: none !important; }
          .ft-bottom { flex-direction: column; align-items: flex-start; gap: 12px; }
        }
        @media (max-width: 640px) {
          .ft-inner { padding: 0 20px; }
          .ft-cta { padding: 48px 0 36px; }
          .ft-cta-headline { font-size: 38px; }
          .ft-email-addr { font-size: 13px; }
        }
      `}</style>

      <footer className="ft-root">
        <div className="ft-bg-orb-1" />
        <div className="ft-bg-orb-2" />
        <div className="ft-bg-grid" />

        <div className="ft-inner">

          {/* CTA */}
          <div className="ft-cta">
            <div>
              <h2 className="ft-cta-headline">
                Let's build
                <span className="ft-cta-headline-accent">something real.</span>
              </h2>
            </div>
            <div className="ft-cta-right">
              <div className="ft-cta-eyebrow">
                <div className="ft-cta-eyebrow-line" />
                <span className="ft-cta-eyebrow-text">Get in touch</span>
              </div>
              <p className="ft-cta-sub">
                Available for freelance projects and full-time roles. Most useful
                when the problem is messy and the interface needs to make it simple.
              </p>
              <button type="button" className="ft-email-block" onClick={copyEmail}>
                <div>
                  <span className="ft-email-label">Email</span>
                  <span className="ft-email-addr">{EMAIL}</span>
                </div>
                {copied
                  ? <span className="ft-email-copied">✓ Copied</span>
                  : <span className="ft-email-action">Copy →</span>}
              </button>
            </div>
          </div>

          {/* Mid */}
          <div className="ft-mid">
            {/* Brand */}
            <div className="ft-col">
              <span className="ft-col-label">Designer</span>
              <span className="ft-brand-name">
                Arka<span className="ft-brand-accent">prava.</span>
              </span>
              <span className="ft-brand-role">UI/UX Designer · Aspiring Design Lead</span>
              <span className="ft-brand-loc">
                <span className="ft-brand-loc-dot" />
                West Bengal, India · Remote
              </span>
            </div>

            {/* Nav */}
            <div className="ft-col">
              <span className="ft-col-label">Navigate</span>
              <ul className="ft-nav">
                {quickLinks.map((l) => (
                  <li key={l.name}>
                    <a href={l.href}>
                      <span className="ft-nav-arrow">→</span>
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div className="ft-col">
              <span className="ft-col-label">Find me on</span>
              <div className="ft-socials">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ft-social-link"
                  >
                    <span className="ft-social-name">{s.name}</span>
                    <span className="ft-social-arrow">↗</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="ft-col">
              <span className="ft-col-label">Status</span>
              <div className="ft-avail-pill">
                <span className="ft-avail-dot" />
                Open to work
              </div>
              <p className="ft-status-text">
                Actively looking for product design roles and freelance projects.
                Response time: within 24 hrs.
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="ft-bottom">
            <span className="ft-copy">© 2025 Arkaprava Santra — All rights reserved</span>
            <button type="button" className="ft-top-btn" onClick={scrollTop}>
              Back to top <span className="ft-top-arr">↑</span>
            </button>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;