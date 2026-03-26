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
    <div className="fixed top-0 left-0 right-0 h-[2px] bg-[rgba(17,16,16,0.07)] z-[99999] pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-0 bg-[var(--red,#c0392b)] transition-[width] duration-75 ease-linear"
      />
    </div>
  );
};

/* ─── Section Divider ─── */
const SectionDivider = ({ label }: { label: string }) => {
  const id = label.replace(/\s+/g, "-").toLowerCase();
  return (
    <div
      id={id}
      className={
        "flex items-center gap-5 h-10 px-12 relative overflow-hidden " +
        "bg-[hsl(var(--portfolio-bg))] border-t border-b border-[rgba(17,16,16,0.07)] " +
        "dark:border-[rgba(240,236,227,0.07)]"
      }
    >
      <span
        className={
          "whitespace-nowrap flex-shrink-0 uppercase text-[8px] tracking-[3.5px] " +
          'font-["DM Mono",monospace] text-[hsl(var(--portfolio-gray))] opacity-35'
        }
      >
        {label}
      </span>
      <div
        className={
          "flex-1 h-px bg-[rgba(17,16,16,0.08)] " +
          "dark:bg-[rgba(240,236,227,0.08)]"
        }
      />
      <div className="flex gap-12 overflow-hidden flex-[3]">
        <div className="flex gap-12 whitespace-nowrap animate-[ticker_18s_linear_infinite]">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className={
                'uppercase text-[8px] tracking-[2.5px] font-["DM Mono",monospace] ' +
                "text-[hsl(var(--portfolio-gray))] opacity-20 flex-shrink-0"
              }
            >
              Arkaprava Santra · UI/UX Designer · Kolkata IN ·
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Back to Top ─── */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseClasses =
    "fixed z-[9000] bg-[hsl(var(--portfolio-dark))] text-[hsl(var(--portfolio-surface))] " +
    'flex items-center justify-center w-11 h-11 rounded-full font-["DM Mono",monospace] ' +
    "text-[16px] cursor-pointer transition-transform duration-200 opacity-0 translate-y-3 pointer-events-none";

  const visibleClasses = "opacity-100 pointer-events-auto translate-y-0";

  return (
    <button
      className={`${baseClasses} ${visible ? visibleClasses : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <span className="relative z-10 leading-none">↑</span>
      <span className="absolute inset-0 bg-[hsl(var(--portfolio-violet))] rounded-full transform translate-y-full transition-transform duration-300 ease-in-out" />
    </button>
  );
};

/* ─── Page ─── */
const Index = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // SEO updates (ensure dynamic title + meta always current)
    document.title = "Arkaprava Santra | Portfolio";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        "Arkaprava Santra is a UI/UX designer and frontend developer in Kolkata, crafting immersive, responsive and accessible product experiences.",
      );
    }

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

    // GSAP ScrollTrigger fade-up for each section
    gsap.utils.toArray<HTMLElement>(".scroll-segment").forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 24, scale: 0.98 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        },
      );

      if (section.id === "hero-section") {
        gsap.fromTo(
          section.querySelectorAll<HTMLElement>(".hero-title-char"),
          { y: 28, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.42,
            ease: "power3.out",
            stagger: 0.03,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 40%",
              toggleActions: "play none none reverse",
              markers: false,
            },
          },
        );

        gsap.fromTo(
          section.querySelectorAll<HTMLElement>(".hero-bio-word"),
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power3.out",
            stagger: 0.05,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 40%",
              toggleActions: "play none none reverse",
              markers: false,
            },
          },
        );
      }

      gsap.fromTo(
        section.querySelectorAll<HTMLElement>(".text-animate"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 40%",
            toggleActions: "play none none reverse",
            markers: false,
          },
          onComplete() {
            section
              .querySelectorAll(".text-animate")
              .forEach((el) => el.classList.add("animated"));
          },
        },
      );
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <Cursor />

      <div ref={pageRef} className="page-wrap">
        {/* <Navigation /> */}
        <section className="scroll-segment" id="hero-section">
          <Hero />
        </section>

        <SectionDivider label="About" />
        <section className="scroll-segment" id="about-section">
          <About />
        </section>

        <SectionDivider label="Tech Stack" />
        <section className="scroll-segment" id="techstack-section">
          <TechStack />
        </section>

        <SectionDivider label="Skills" />
        <section className="scroll-segment" id="skills-section">
          <Skills />
        </section>

        <SectionDivider label="Experience" />
        <section className="scroll-segment" id="experience-section">
          <Experience />
        </section>

        <SectionDivider label="UI Showcase" />
        <section className="scroll-segment" id="uishowcase-section">
          <UIShowcase />
        </section>

        <SectionDivider label="Case Studies" />
        <section className="scroll-segment" id="casestudies-section">
          <CaseStudies />
        </section>

        <SectionDivider label="Contact" />
        <section className="scroll-segment" id="contact-section">
          <ContactMe />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
