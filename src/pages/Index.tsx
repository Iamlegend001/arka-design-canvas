
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Skills from '@/components/Skills';
import UIShowcase from '@/components/UIShowcase';
import CaseStudies from '@/components/CaseStudies';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Skills />
      <UIShowcase />
      <CaseStudies />
      <Footer />
    </div>
  );
};

export default Index;
