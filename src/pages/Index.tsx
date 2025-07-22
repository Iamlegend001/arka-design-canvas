import React, { useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Skills from "@/components/Skills";
import UIShowcase from "@/components/UIShowcase";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import gsap from "gsap";
import ContactMe from "@/components/ContactMe";
// import ContactMe from "@/components/ContactMe";


const Index = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      pageRef.current,
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );
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
      <ContactMe/>
      <Footer />
    </div>
  );
};

export default Index;
