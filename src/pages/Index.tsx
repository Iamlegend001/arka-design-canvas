import React, { useRef, useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Skills from "@/components/Skills";
import UIShowcase from "@/components/UIShowcase";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import ContactMe from "@/components/ContactMe";
import Cursor from "@/components/Cursor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/* ─── Scroll Progress Bar ─── */
const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${progress}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "rgba(17,16,16,0.07)",
        zIndex: 99999,
        pointerEvents: "none",
      }}
    >
      <div
        ref={barRef}
        style={{
          height: "100%",
          width: "0%",
          background: "var(--red, #c0392b)",
          transition: "width 0.08s linear",
        }}
      />
    </div>
  );
};

/* ─── Section Divider ─── */
const SectionDivider = ({ label }: { label: string }) => (
  <div className="section-divider">
    <style>{`
      .section-divider {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 0 48px;
        height: 40px;
        border-top: 1px solid rgba(17,16,16,0.07);
        border-bottom: 1px solid rgba(17,16,16,0.07);
        background: var(--paper, #f0ece3);
        overflow: hidden;
        position: relative;
      }
      :root.dark .section-divider {
        border-color: rgba(240,236,227,0.07);
      }
      .section-divider-label {
        font-family: 'DM Mono', monospace;
        font-size: 8px;
        letter-spacing: 3.5px;
        text-transform: uppercase;
        color: var(--mid, #6b6560);
        opacity: 0.35;
        white-space: nowrap;
        flex-shrink: 0;
      }
      .section-divider-line {
        flex: 1;
        height: 1px;
        background: rgba(17,16,16,0.08);
      }
      :root.dark .section-divider-line {
        background: rgba(240,236,227,0.08);
      }
      .section-divider-ticker {
        display: flex;
        gap: 48px;
        overflow: hidden;
        flex: 3;
      }
      .section-divider-ticker-inner {
        display: flex;
        gap: 48px;
        animation: ticker 18s linear infinite;
        white-space: nowrap;
      }
      .section-divider-ticker-item {
        font-family: 'DM Mono', monospace;
        font-size: 8px;
        letter-spacing: 2.5px;
        text-transform: uppercase;
        color: var(--mid, #6b6560);
        opacity: 0.2;
        flex-shrink: 0;
      }
      @keyframes ticker {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      @media (max-width: 640px) {
        .section-divider { padding: 0 16px; }
        .section-divider-ticker { display: none; }
      }
    `}</style>

    <span className="section-divider-label">{label}</span>
    <div className="section-divider-line" />
    <div className="section-divider-ticker" aria-hidden>
      <div className="section-divider-ticker-inner">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="section-divider-ticker-item">
            Arkaprava Santra · UI/UX Designer · Kolkata IN ·
          </span>
        ))}
      </div>
    </div>
  </div>
);

/* ─── Back to Top ─── */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .btt-btn {
          position: fixed;
          bottom: 36px;
          right: 36px;
          z-index: 9000;
          background: var(--ink, #111010);
          color: var(--paper, #f0ece3);
          border: none;
          width: 44px; height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-family: 'DM Mono', monospace;
          font-size: 16px;
          transition: transform 0.25s, opacity 0.3s, background 0.2s;
          opacity: 0;
          pointer-events: none;
          transform: translateY(12px);
        }
        .btt-btn.btt-visible {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
        .btt-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--red, #c0392b);
          transform: translateY(101%);
          transition: transform 0.3s cubic-bezier(0.77,0,0.175,1);
        }
        .btt-btn:hover::after { transform: translateY(0); }
        .btt-btn span { position: relative; z-index: 1; line-height: 1; }
        @media (max-width: 640px) {
          .btt-btn { bottom: 20px; right: 16px; }
        }
      `}</style>
      <button
        className={`btt-btn${visible ? " btt-visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <span>↑</span>
      </button>
    </>
  );
};

/* ─── Page ─── */
const Index = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Page fade-in
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, scale: 0.985 },
      { opacity: 1, scale: 1, duration: 1.1, ease: "power3.out" },
    );

    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Tie Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap');

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --ink: #111010;
          --paper: #f0ece3;
          --red: #c0392b;
          --mid: #6b6560;
        }
        :root.dark {
          --ink: #f0ece3;
          --paper: #0f0e0d;
          --red: #ff5247;
          --mid: #9b9490;
        }

        html { scroll-behavior: auto; } /* Lenis handles this */

        body {
          background: var(--paper);
          color: var(--ink);
          -webkit-font-smoothing: antialiased;
        }

        /* Noise grain overlay for depth */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          background-size: 180px 180px;
          opacity: 0.022;
          pointer-events: none;
          z-index: 99998;
        }

        .page-wrap {
          min-height: 100vh;
          background: var(--paper);
          position: relative;
        }
      `}</style>

      {/* Fixed chrome */}
      <ScrollProgress />
      <BackToTop />
      <Cursor />

      <div ref={pageRef} className="page-wrap">
        {/* <Navigation /> */}
        <Hero />

        <SectionDivider label="About" />
        <About />

        <SectionDivider label="Tech Stack" />
        <TechStack />

        <SectionDivider label="Skills" />
        <Skills />

        <SectionDivider label="Experience" />
        <Experience />

        <SectionDivider label="UI Showcase" />
        <UIShowcase />

        <SectionDivider label="Case Studies" />
        <CaseStudies />

        <SectionDivider label="Contact" />
        <ContactMe />

        <Footer />
      </div>
    </>
  );
};

export default Index;
