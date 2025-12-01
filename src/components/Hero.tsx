import React, { useRef, useEffect } from "react";
import { ArrowRight, Download, ChevronDown } from "lucide-react";

// NOTE: GSAP imports (gsap and ScrollTrigger) have been removed
// to resolve the compilation error. We proceed assuming GSAP and
// ScrollTrigger are available globally in the execution environment.

// Custom Utility components (simulated/inline for single file export)
// In a real project, this would be your Button component
const CtaButton = ({ children, primary = true, ...props }) => (
  <button
    className={`inline-flex items-center justify-center font-semibold rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-opacity-50
      ${primary
        ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/30 hover:bg-indigo-700 focus:ring-indigo-600'
        : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-indigo-400 hover:text-indigo-600 shadow-md focus:ring-indigo-200'
      }
      px-8 py-4
    `}
    {...props}
  >
    {children}
  </button>
);

const Hero = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const valuesRef = useRef([]);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    // Check if GSAP and ScrollTrigger are available before running animations
    if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
        console.warn("GSAP or ScrollTrigger not found globally. Animations skipped.");
        return;
    }

    // GSAP context ensures all animations are cleaned up on unmount
    // Use window.gsap and window.ScrollTrigger
    window.gsap.registerPlugin(window.ScrollTrigger);

    const ctx = window.gsap.context(() => {
      const tl = window.gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Starts animation when 75% of the section is visible
        },
      });

      // Staggered animation for the main content
      tl.from([leftRef.current, rightRef.current], {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.3,
      })
      // Staggered animation for the value chips
      .from(
        valuesRef.current,
        {
          opacity: 0,
          x: -15,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.6" // Starts 0.6s before the previous timeline ends
      )
      // Bounce animation for the scroll indicator
      .from(
        scrollIndicatorRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      // GSAP loop for the scroll indicator bounce
      window.gsap.to(scrollIndicatorRef.current, {
          y: 5,
          repeat: -1,
          yoyo: true,
          duration: 1,
          ease: "sine.inOut"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen pt-24 lg:pt-32 flex items-center justify-center bg-gray-50 overflow-hidden font-inter"
    >
      {/* Dynamic Background Gradient (Subtle and Soft) */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-teal-50/50"></div>

      {/* Floating Glow Elements for Atmosphere */}
      <div className="absolute top-1/4 left-[10%] w-48 h-48 bg-teal-400/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-[5%] w-60 h-60 bg-indigo-400/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none"
        style={{ animationDelay: "2s" }}
      />
      
      {/* Tailwind Keyframes for the Pulse Animation */}
      <style jsx="true">{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.05) translate(10px, -10px); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 15s infinite ease-in-out;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT - VALUE PROPOSITION */}
          <div ref={leftRef} className="space-y-10">
            <div className="space-y-6">
              {/* Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                Crafting Interfaces
                <span className="block text-indigo-600 drop-shadow-sm">
                  That Drive Growth.
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-xl md:text-2xl text-gray-500 max-w-lg leading-relaxed">
                I'm Arka, a UI/UX designer focusing on data-driven simplicity and
                clarity to build human-centered digital products.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CtaButton
                primary={true}
                onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
              >
                View Selected Work
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </CtaButton>

              <a
                href="https://drive.google.com/file/d/1KU5gYEzcHgsQBr-Y-eGaUc1JDNN0jf8M/view?usp=sharing"
                download="Arkaprava Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CtaButton primary={false}>
                  <Download className="mr-3 h-5 w-5" />
                  Download Resume
                </CtaButton>
              </a>
            </div>

            {/* CORE VALUES CHIPS */}
            <div className="flex flex-wrap gap-x-6 gap-y-4 pt-4">
              {["Empathy-First", "Data-Informed", "Visual Elegance"].map((value, i) => (
                <div
                  key={value}
                  ref={(el) => (valuesRef.current[i] = el)}
                  className="flex items-center space-x-2 p-2 bg-white rounded-full shadow-sm border border-gray-100"
                >
                  <div className="w-2.5 h-2.5 bg-teal-500 rounded-full ring-2 ring-teal-300" />
                  <span className="text-gray-600 text-sm font-medium pr-1">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ABSTRACT UI MOCKUP (Glassmorphism + Layers) */}
          <div ref={rightRef} className="relative hidden lg:block">
            <div className="relative w-full h-96 xl:h-[560px]">
                
                {/* --- Main Glassmorphic Card (Back Layer) --- */}
                <div className="absolute inset-4 bg-white/50 backdrop-blur-xl border border-white/80 rounded-[3rem] shadow-2xl shadow-gray-400/20 p-10 transform translate-x-4 translate-y-4 rotate-3 scale-95 transition-all duration-700">
                    <div className="flex items-center justify-between mb-8">
                        <div className="h-6 w-24 bg-teal-400/50 rounded-full animate-pulse-light"></div>
                        <div className="flex gap-2">
                            <span className="w-3 h-3 bg-red-400 rounded-full opacity-70"></span>
                            <span className="w-3 h-3 bg-yellow-400 rounded-full opacity-70"></span>
                            <span className="w-3 h-3 bg-green-400 rounded-full opacity-70"></span>
                        </div>
                    </div>
                    <div className="h-4 bg-indigo-200 rounded w-1/3"></div>
                    <div className="h-4 bg-indigo-50 rounded w-2/3 mt-2"></div>
                </div>

                {/* --- Foreground UI Mockup Card (Focus Layer) --- */}
                <div className="absolute inset-0 bg-white/90 backdrop-blur-2xl border border-white rounded-[3rem] shadow-2xl shadow-indigo-600/20 p-10 transform hover:scale-100 transition-all duration-700">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">A</div>
                            <span className="font-semibold text-gray-700">Analytics Dashboard</span>
                        </div>
                        <CtaButton primary={true} className="px-4 py-2 text-sm shadow-md">Export Data</CtaButton>
                    </div>

                    {/* Chart Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-indigo-500/10 to-teal-400/10 rounded-3xl p-6 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-end justify-around">
                            {/* Bar Chart Bars */}
                            {[40, 70, 55, 90, 60, 80].map((h, i) => (
                                <div key={i} className={`w-3 rounded-t-full bg-indigo-500/70 shadow-lg transition-all duration-500`} style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                        <div className="absolute top-4 left-6 text-2xl font-bold text-gray-800">72%</div>
                        <div className="absolute top-10 left-6 text-sm text-gray-500">Conversion Rate YTD</div>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <div className="w-10 h-2 bg-teal-500 rounded mb-2"></div>
                            <div className="w-20 h-2 bg-gray-300 rounded"></div>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <div className="w-10 h-2 bg-indigo-500 rounded mb-2"></div>
                            <div className="w-20 h-2 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown className="w-8 h-8 text-gray-500/80 hover:text-indigo-600 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;