import React, { useState } from "react";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/arkapravadevux/",
    short: "LI",
  },
  { name: "GitHub", href: "https://github.com/Iamlegend001", short: "GH" },
  { name: "Dribbble", href: "https://dribbble.com/imkuttu123", short: "DR" },
  { name: "Twitter", href: "https://x.com/DevLegend008", short: "TW" },
];

const EMAIL = "arkapravasantra17@gmail.com";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [hovSoc, setHovSoc] = useState(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap');

        :root {
          --ink:    #111010;
          --paper:  #f0ece3;
          --red:    #c0392b;
          --mid:    #6b6560;
          --border: rgba(17,16,16,0.1);
          /* footer uses inverted palette */
          --f-bg:   #0e0d0d;
          --f-text: #f0ece3;
          --f-mid:  rgba(240,236,227,0.45);
          --f-bdr:  rgba(240,236,227,0.1);
        }

        :root.dark {
          --ink:    #f0ece3;
          --paper:  #0f0e0d;
          --red:    #ff5247;
          --mid:    #9b9490;
          --border: rgba(240,236,227,0.1);
          /* footer inverts back to light in dark mode */
          --f-bg:   #f0ece3;
          --f-text: #111010;
          --f-mid:  rgba(17,16,16,0.45);
          --f-bdr:  rgba(17,16,16,0.1);
        }

        .footer {
          background: var(--f-bg);
          font-family: 'DM Mono', monospace;
          color: var(--f-text);
        }

        /* ── Big CTA ── */
        .footer-cta {
          padding: 80px 48px 64px;
          border-bottom: 1px solid var(--f-bdr);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: end;
        }

        .footer-cta-headline {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 8vw, 110px);
          line-height: 0.9;
          letter-spacing: 2px;
          color: var(--f-text);
        }
        .footer-cta-headline em {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          color: var(--red);
          font-size: 0.62em;
          display: block;
          line-height: 1.2;
          letter-spacing: 0;
          margin-top: 8px;
        }

        .footer-cta-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: flex-start;
        }
        .footer-cta-sub {
          font-size: 12px;
          line-height: 1.9;
          color: var(--f-mid);
          max-width: 340px;
          font-weight: 300;
        }

        /* Email copy block */
        .email-block {
          border: 1px solid var(--f-bdr);
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
          width: 100%;
          position: relative;
          overflow: hidden;
          transition: border-color 0.2s;
          background: none;
          text-align: left;
        }
        .email-block:hover { border-color: rgba(240,236,227,0.3); }

        .email-block::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--red);
          transform: translateY(101%);
          transition: transform 0.35s cubic-bezier(0.77,0,0.175,1);
          z-index: 0;
        }
        .email-block:hover::after { transform: translateY(0); }

        .email-label {
          font-size: 8px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--f-mid);
          display: block;
          margin-bottom: 4px;
          position: relative;
          z-index: 1;
        }
        .email-addr {
          font-size: 13px;
          letter-spacing: 0.5px;
          color: var(--f-text);
          font-weight: 400;
          position: relative;
          z-index: 1;
        }
        .email-action {
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--f-mid);
          position: relative;
          z-index: 1;
          transition: color 0.2s;
          flex-shrink: 0;
        }
        .email-block:hover .email-action { color: var(--f-text); }
        .email-copied {
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #2ecc71;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        /* ── Middle row ── */
        .footer-mid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          border-bottom: 1px solid var(--f-bdr);
        }
        .footer-col {
          padding: 40px 40px 40px 48px;
          border-right: 1px solid var(--f-bdr);
        }
        .footer-col:last-child { border-right: none; }

        .footer-col-label {
          font-size: 8px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--f-mid);
          opacity: 0.6;
          margin-bottom: 20px;
          display: block;
        }

        /* Brand col */
        .footer-brand-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 36px;
          letter-spacing: 3px;
          color: var(--f-text);
          line-height: 1;
          display: block;
          margin-bottom: 4px;
        }
        .footer-brand-name span { color: var(--red); }
        .footer-brand-role {
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--f-mid);
          display: block;
          margin-bottom: 20px;
        }
        .footer-brand-loc {
          font-size: 9px;
          letter-spacing: 1.5px;
          color: var(--f-mid);
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0.5;
        }
        .footer-brand-loc::before {
          content: '◆';
          font-size: 5px;
          color: var(--red);
        }

        /* Nav col */
        .footer-nav {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .footer-nav a {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--f-mid);
          text-decoration: none;
          padding: 7px 0;
          border-bottom: 1px solid transparent;
          transition: color 0.2s, border-color 0.2s;
        }
        .footer-nav a::before {
          content: '→';
          font-size: 10px;
          color: var(--red);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .footer-nav a:hover { color: var(--f-text); }
        .footer-nav a:hover::before { opacity: 1; }

        /* Socials col */
        .footer-socials {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .footer-social-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid var(--f-bdr);
          text-decoration: none;
          transition: border-color 0.2s;
        }
        .footer-social-link:last-child { border-bottom: none; }
        .footer-social-link:hover { border-bottom-color: rgba(240,236,227,0.25); }

        .social-name {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--f-mid);
          transition: color 0.2s;
        }
        .footer-social-link:hover .social-name { color: var(--f-text); }

        .social-arrow {
          font-size: 10px;
          color: var(--f-mid);
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.2s, transform 0.2s;
        }
        .footer-social-link:hover .social-arrow { opacity: 1; transform: translateX(0); }

        /* Status col */
        .avail-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #2ecc71;
          margin-bottom: 20px;
        }
        .avail-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #2ecc71;
          animation: blink 2s infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.2} }

        .footer-status-text {
          font-size: 10px;
          line-height: 1.9;
          color: var(--f-mid);
          font-weight: 300;
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          padding: 18px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-copy {
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--f-mid);
          opacity: 0.4;
        }
        .footer-top-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--f-mid);
          opacity: 0.4;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'DM Mono', monospace;
          transition: opacity 0.2s;
          padding: 0;
        }
        .footer-top-btn:hover { opacity: 1; }
        .footer-top-btn .arr {
          display: inline-block;
          transition: transform 0.2s;
        }
        .footer-top-btn:hover .arr { transform: translateY(-3px); }

        /* ── Responsive ───────────────────────────────────────────── */
        @media (max-width: 1024px) {
          .footer-cta {
            padding: 64px 36px 48px;
            gap: 40px;
          }
          .footer-cta-headline {
            font-size: clamp(48px, 8vw, 90px);
          }
          .footer-mid {
            grid-template-columns: 1fr 1fr;
          }
          .footer-col {
            padding: 36px 36px;
            border-right: 1px solid var(--f-bdr);
            border-bottom: 1px solid var(--f-bdr);
          }
        }

        /* Tablet: 768-1024px */
        @media (max-width: 768px) {
          .footer-cta {
            padding: 56px 28px 40px;
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-cta-headline {
            font-size: clamp(40px, 10vw, 72px);
          }
          .footer-cta-sub {
            font-size: 11px;
            max-width: 100%;
          }
          .email-addr {
            font-size: 12px;
          }
          .footer-mid {
            grid-template-columns: 1fr;
          }
          .footer-col {
            padding: 32px 28px;
            border-right: none;
            border-bottom: 1px solid var(--f-bdr);
          }
          .footer-brand-name {
            font-size: 32px;
          }
          .footer-bottom {
            padding: 20px 28px;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }

        /* Mobile: below 768px */
        @media (max-width: 640px) {
          .footer-cta {
            padding: 48px 20px 36px;
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .footer-cta-headline {
            font-size: clamp(32px, 12vw, 56px);
            letter-spacing: 1px;
          }
          .footer-cta-headline em {
            font-size: 0.58em;
            margin-top: 6px;
          }
          .footer-cta-sub {
            font-size: 10px;
            line-height: 1.8;
            max-width: 100%;
          }
          .email-block {
            padding: 16px 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .email-label {
            font-size: 7px;
          }
          .email-addr {
            font-size: 11px;
          }
          .email-action,
          .email-copied {
            font-size: 8px;
          }
          .footer-mid {
            grid-template-columns: 1fr;
          }
          .footer-col {
            padding: 28px 20px;
            border-right: none;
            border-bottom: 1px solid var(--f-bdr);
          }
          .footer-col-label {
            font-size: 7px;
            margin-bottom: 16px;
          }
          .footer-brand-name {
            font-size: 28px;
            letter-spacing: 2px;
          }
          .footer-brand-role {
            font-size: 8px;
          }
          .footer-brand-loc {
            font-size: 8px;
          }
          .footer-nav a {
            font-size: 9px;
            padding: 6px 0;
          }
          .social-name {
            font-size: 9px;
          }
          .avail-pill {
            font-size: 8px;
          }
          .footer-status-text {
            font-size: 9px;
            line-height: 1.8;
          }
          .footer-bottom {
            padding: 16px 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .footer-copy {
            font-size: 8px;
          }
          .footer-top-btn {
            font-size: 8px;
          }
        }

        /* Very small: below 380px */
        @media (max-width: 380px) {
          .footer-cta {
            padding: 40px 16px 32px;
          }
          .footer-cta-headline {
            font-size: 28px;
          }
          .footer-cta-sub {
            font-size: 9px;
          }
          .email-block {
            padding: 14px 16px;
          }
          .email-addr {
            font-size: 10px;
          }
          .footer-col {
            padding: 24px 16px;
          }
          .footer-brand-name {
            font-size: 24px;
            letter-spacing: 1px;
          }
          .footer-bottom {
            padding: 14px 16px;
          }
          .footer-copy {
            font-size: 7px;
          }
        }
      `}</style>

      <footer className="footer">
        {/* Big CTA */}
        <div className="footer-cta">
          <div>
            <h2 className="footer-cta-headline">
              Let's build
              <em>something real.</em>
            </h2>
          </div>

          <div className="footer-cta-right">
            <p className="footer-cta-sub">
              Available for freelance projects and full-time roles. I'm most
              useful when the problem is messy and the interface needs to make
              it simple.
            </p>

            <button type="button" className="email-block" onClick={copyEmail}>
              <div>
                <span className="email-label">Email</span>
                <span className="email-addr">{EMAIL}</span>
              </div>
              {copied ? (
                <span className="email-copied">✓ Copied</span>
              ) : (
                <span className="email-action">Copy →</span>
              )}
            </button>
          </div>
        </div>

        {/* Middle */}
        <div className="footer-mid">
          {/* Brand */}
          <div className="footer-col">
            <span className="footer-col-label">Designer</span>
            <span className="footer-brand-name">
              Arkaprava<span>.</span>
            </span>
            <span className="footer-brand-role">
              UI/UX Designer · Aspiring Design Lead
            </span>
            <span className="footer-brand-loc">
              West Bengal, India · Remote
            </span>
          </div>

          {/* Nav */}
          <div className="footer-col">
            <span className="footer-col-label">Navigate</span>
            <ul className="footer-nav">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href}>{l.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="footer-col">
            <span className="footer-col-label">Find me on</span>
            <div className="footer-socials">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  onMouseEnter={() => setHovSoc(s.name)}
                  onMouseLeave={() => setHovSoc(null)}
                >
                  <span className="social-name">{s.name}</span>
                  <span className="social-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="footer-col">
            <span className="footer-col-label">Status</span>
            <div className="avail-pill">
              <span className="avail-dot" />
              Open to work
            </div>
            <p className="footer-status-text">
              Actively looking for product design roles and freelance projects.
              Response time: within 24 hrs.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2025 Arkaprava Santra — All rights reserved
          </span>
          <button type="button" className="footer-top-btn" onClick={scrollTop}>
            Back to top <span className="arr">↑</span>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
