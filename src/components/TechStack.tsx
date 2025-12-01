import React, { useRef, useEffect, useState } from "react";
import {
  Figma,
  Palette,
  Code,
  Smartphone,
  FileText,
  Zap,
  Globe,
  Github,
  ArrowRight,
  Play,
  Pause,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const scrollRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const headerRef = useRef(null);
  const playPauseRef = useRef(null);
  const techCardRefs = useRef([]);
  const bottomIndicatorRef = useRef(null);
  const sectionRef = useRef(null);

  // Added specific shadow colors to the data object for a glowing effect
  const technologies = [
    { name: "Figma", icon: Figma, color: "text-purple-600", bg: "bg-purple-50", description: "Interface Design", gradient: "from-purple-500 to-purple-600", shadow: "shadow-purple-500/20" },
    { name: "Adobe XD", icon: Palette, color: "text-pink-600", bg: "bg-pink-50", description: "Prototyping", gradient: "from-pink-500 to-pink-600", shadow: "shadow-pink-500/20" },
    { name: "React", icon: Code, color: "text-blue-600", bg: "bg-blue-50", description: "Frontend Framework", gradient: "from-blue-500 to-blue-600", shadow: "shadow-blue-500/20" },
    { name: "Tailwind CSS", icon: Zap, color: "text-cyan-600", bg: "bg-cyan-50", description: "CSS Framework", gradient: "from-cyan-500 to-cyan-600", shadow: "shadow-cyan-500/20" },
    { name: "Notion", icon: FileText, color: "text-slate-600", bg: "bg-slate-50", description: "Documentation", gradient: "from-slate-500 to-slate-600", shadow: "shadow-slate-500/20" },
    { name: "Framer", icon: Smartphone, color: "text-green-600", bg: "bg-green-50", description: "Motion Design", gradient: "from-green-500 to-green-600", shadow: "shadow-green-500/20" },
    { name: "Webflow", icon: Globe, color: "text-indigo-600", bg: "bg-indigo-50", description: "Web Builder", gradient: "from-indigo-500 to-indigo-600", shadow: "shadow-indigo-500/20" },
    { name: "Next.js", icon: ArrowRight, color: "text-gray-800", bg: "bg-gray-50", description: "React Framework", gradient: "from-gray-700 to-gray-800", shadow: "shadow-gray-500/20" },
    { name: "GitHub", icon: Github, color: "text-gray-800", bg: "bg-gray-50", description: "Version Control", gradient: "from-gray-600 to-gray-800", shadow: "shadow-gray-500/20" },
  ];

  // Quadruple the array for smoother infinite scroll on wide screens
  const duplicatedTechs = [...technologies, ...technologies, ...technologies, ...technologies];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.6; // Slightly slower for better readability

    const animate = () => {
      if (isPlaying) {
        scrollPosition += scrollSpeed;
        // Reset when we've scrolled past the first set length
        // We use scrollWidth / 4 because we quadrupled the array
        if (scrollPosition >= scrollContainer.scrollWidth / 4) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPlaying]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, { 
        opacity: 0, 
        y: -30, 
        duration: 1, 
        ease: "power4.out", 
        scrollTrigger: { trigger: headerRef.current, start: "top 85%" } 
      });
      
      gsap.from(playPauseRef.current, { 
        opacity: 0, 
        scale: 0.9, 
        duration: 0.8, 
        ease: "back.out(1.7)", 
        scrollTrigger: { trigger: playPauseRef.current, start: "top 90%" } 
      });

      // Animate cards staggering in
      gsap.from(".tech-card-anim", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
            trigger: scrollRef.current,
            start: "top 85%"
        }
      });

      gsap.from(bottomIndicatorRef.current, { 
        opacity: 0, 
        y: 20, 
        duration: 0.8, 
        delay: 0.5,
        ease: "power3.out", 
        scrollTrigger: { trigger: bottomIndicatorRef.current, start: "top 95%" } 
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Initialize Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-50" ref={sectionRef}>
      
      {/* --- Background Elements --- */}
      {/* 1. Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
      
      {/* 2. Grid Pattern Overlay (CSS Grid) */}
      <div className="absolute inset-0 opacity-[0.4]" 
           style={{ 
             backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(to right, #cbd5e1 1px, transparent 1px)', 
             backgroundSize: '40px 40px',
             maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
           }}>
      </div>
      
      {/* 3. Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16" ref={headerRef}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-purple-100 shadow-sm backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">Tech Stack</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            My Design <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
            A curated collection of tools and technologies I use to craft
            exceptional digital experiences.
          </p>
        </div>

        {/* --- Controls --- */}
        <div className="flex justify-center mb-10" ref={playPauseRef}>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md border border-white/40 rounded-full text-slate-700 hover:text-purple-600 hover:border-purple-200 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className={`absolute inset-0 bg-purple-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            <div className="relative flex items-center gap-2">
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                <span className="text-sm font-medium">
                {isPlaying ? "Pause Scroll" : "Resume Scroll"}
                </span>
            </div>
          </button>
        </div>

        {/* --- Marquee Area --- */}
        <div className="relative -mx-6 lg:-mx-12">
          {/* Fade Edges */}
          <div className="absolute left-0 top-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-20 pointer-events-none"></div>

          <div
            ref={scrollRef}
            className="flex overflow-hidden gap-6 pb-12 pt-4 pl-4"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {duplicatedTechs.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="tech-card-anim flex-shrink-0 group relative"
                style={{ width: "240px" }}
              >
                {/* Card Container */}
                <div className="relative h-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] p-6 transition-all duration-500 
                              hover:-translate-y-2 hover:bg-white/60
                              shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
                  
                  {/* Hover Gradient Border Effect */}
                  <div className={`absolute inset-0 rounded-[2rem] border-2 border-transparent bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-100 [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:destination-out] mask-composite:exclude pointer-events-none transition-opacity duration-500`}></div>
                  
                  {/* Hover Inner Glow */}
                  <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="relative flex flex-col items-center text-center z-10">
                    
                    {/* Icon Container */}
                    <div className={`w-20 h-20 mb-6 rounded-2xl ${tech.bg} flex items-center justify-center 
                                   group-hover:scale-110 transition-transform duration-500 ease-out
                                   border border-white/50 shadow-inner`}>
                      <tech.icon className={`w-9 h-9 ${tech.color} transition-all duration-300`} strokeWidth={1.5} />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                        {tech.name}
                      </h3>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                        {tech.description}
                      </p>
                    </div>

                    {/* Decorative Pill */}
                    <div className={`mt-6 w-12 h-1.5 rounded-full bg-slate-200 overflow-hidden`}>
                        <div className={`w-full h-full bg-gradient-to-r ${tech.gradient} -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}></div>
                    </div>
                  </div>

                   {/* Shine Effect */}
                   <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0 pointer-events-none rounded-[2rem]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Footer Indicator --- */}
        <div className="flex justify-center mt-4" ref={bottomIndicatorRef}>
          <div className="flex items-center gap-3 px-4 py-2 bg-white/40 backdrop-blur-md border border-white/40 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Hover cards to pause & explore
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;