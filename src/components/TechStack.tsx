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

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const headerRef = useRef(null);
  const playPauseRef = useRef(null);
  const techCardRefs = useRef([]);
  const bottomIndicatorRef = useRef(null);
  const sectionRef = useRef(null);

  const technologies = [
    {
      name: "Figma",
      icon: Figma,
      color: "text-purple-600",
      bg: "bg-purple-50",
      description: "Interface Design",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      name: "Adobe XD",
      icon: Palette,
      color: "text-pink-600",
      bg: "bg-pink-50",
      description: "Prototyping",
      gradient: "from-pink-500 to-pink-600",
    },
    {
      name: "React",
      icon: Code,
      color: "text-blue-600",
      bg: "bg-blue-50",
      description: "Frontend Framework",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "Tailwind CSS",
      icon: Zap,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      description: "CSS Framework",
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      name: "Notion",
      icon: FileText,
      color: "text-slate-600",
      bg: "bg-slate-50",
      description: "Documentation",
      gradient: "from-slate-500 to-slate-600",
    },
    {
      name: "Framer",
      icon: Smartphone,
      color: "text-green-600",
      bg: "bg-green-50",
      description: "Motion Design",
      gradient: "from-green-500 to-green-600",
    },
    {
      name: "Webflow",
      icon: Globe,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      description: "Web Builder",
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      name: "Next.js",
      icon: ArrowRight,
      color: "text-gray-800",
      bg: "bg-gray-50",
      description: "React Framework",
      gradient: "from-gray-700 to-gray-800",
    },
    {
      name: "GitHub",
      icon: Github,
      color: "text-gray-800",
      bg: "bg-gray-50",
      description: "Version Control",
      gradient: "from-gray-600 to-gray-800",
    },
  ];

  // Triple the array for ultra-smooth infinite scroll
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.8;

    const animate = () => {
      if (isPlaying) {
        scrollPosition += scrollSpeed;

        // Reset position when we've scrolled past one complete set
        if (scrollPosition >= scrollContainer.scrollWidth / 3) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPlaying]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });
      gsap.from(playPauseRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: playPauseRef.current,
          start: "top 90%",
        },
      });
      // Animate only the first visible set of tech cards
      techCardRefs.current.slice(0, technologies.length).forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          delay: i * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });
      gsap.from(bottomIndicatorRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bottomIndicatorRef.current,
          start: "top 95%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background with gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPHBhdGggZD0ibTM2IDM0djEwaC0ydi0xMGgyeiIvPgo8L2c+CjwvZz4KPHN2Zz4=')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <div className="inline-block mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent leading-tight">
              My Design Stack
            </h2>
          </div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A curated collection of tools and technologies I use to craft
            exceptional digital experiences
          </p>
        </div>

        {/* Play/Pause Control */}
        <div className="flex justify-center mb-12" ref={playPauseRef}>
          <button
            onClick={togglePlayPause}
            className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
            <span className="text-sm font-medium">
              {isPlaying ? "Pause" : "Play"} Animation
            </span>
          </button>
        </div>

        {/* Scrolling Container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

          <div
            ref={scrollRef}
            className="flex overflow-hidden gap-8 pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {duplicatedTechs.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
                style={{ minWidth: "200px" }}
                onMouseEnter={() => setHoveredTech(`${tech.name}-${index}`)}
                onMouseLeave={() => setHoveredTech(null)}
                ref={
                  index < technologies.length
                    ? (el) => (techCardRefs.current[index] = el)
                    : null
                }
              >
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  {/* Glow effect on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                  ></div>

                  <div className="relative flex flex-col items-center text-center space-y-6">
                    {/* Icon container */}
                    <div
                      className={`w-20 h-20 ${tech.bg} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                    >
                      <tech.icon
                        className={`w-10 h-10 ${tech.color} transition-all duration-300 group-hover:scale-110`}
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-200 group-hover:bg-clip-text transition-all duration-300">
                        {tech.name}
                      </h3>
                      <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300 font-medium">
                        {tech.description}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="w-0 group-hover:w-8 h-1 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="flex justify-center mt-16" ref={bottomIndicatorRef}>
          <div className="flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-purple-400 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
            <span className="text-sm text-slate-400 font-medium">
              Hover to explore • {technologies.length} tools
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
