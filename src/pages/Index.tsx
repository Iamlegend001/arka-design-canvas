import React, { useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Skills from "@/components/Skills";
import UIShowcase from "@/components/UIShowcase";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import ContactMe from "@/components/ContactMe";
import gsap from "gsap";
import Lenis from 'lenis'

const Index = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    // Page fade-in animation
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );

    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      // Cleanup if needed
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Skills />
      <UIShowcase />
      <CaseStudies />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Index;
