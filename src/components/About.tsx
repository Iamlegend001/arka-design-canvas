import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Download,
  Figma,
  Palette,
  Code,
  Smartphone,
  Heart,
  Zap,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const tools = [
    {
      name: "Figma",
      icon: Figma,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      name: "Adobe XD",
      icon: Palette,
      color: "text-pink-600",
      bg: "bg-pink-50",
    },
    { name: "React", icon: Code, color: "text-blue-600", bg: "bg-blue-50" },
    {
      name: "Framer",
      icon: Smartphone,
      color: "text-green-600",
      bg: "bg-green-50",
    },
  ];

  const values = [
    { name: "Empathy", icon: Heart, color: "text-rose-500", bg: "bg-rose-50" },
    { name: "Function", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
    {
      name: "Elegance",
      icon: Sparkles,
      color: "text-violet-500",
      bg: "bg-violet-50",
    },
  ];

  // Refs for animation
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const headerRef = useRef(null);
  const valuesRef = useRef([]);
  const toolsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column
      gsap.from(leftColRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftColRef.current,
          start: "top 80%",
        },
      });
      // Header
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });
      // Core values
      valuesRef.current.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });
      // Button
      gsap.from(buttonRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 95%",
        },
      });
      // Right column
      gsap.from(rightColRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightColRef.current,
          start: "top 80%",
        },
      });
      // Tools
      toolsRef.current.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-12" ref={leftColRef}>
            {/* Header */}
            <div className="space-y-6" ref={headerRef}>
              <div className="inline-block">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent leading-tight">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mt-4"></div>
              </div>
              <div className="space-y-6">
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  Hey! I'm{" "}
                  <span className="text-slate-900 font-semibold">Arka</span> — a
                  UI/UX designer who blends creativity with logic to craft
                  human-centered digital experiences.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  With a background in Computer Science and a passion for
                  design, I combine logic and creativity to build functional,
                  user-first experiences. I focus on clarity, consistency, and
                  solving real problems through clean interfaces.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Outside of design, I enjoy painting and playing the acoustic
                  guitar — hobbies that inspire my artistic sense. My go-to
                  tools include Figma, Adobe XD, Tailwind CSS, React, and
                  Notion.
                </p>
              </div>
            </div>
            {/* Core Values */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-900">Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {values.map((value, i) => (
                  <div
                    key={value.name}
                    className="group cursor-pointer"
                    ref={(el) => (valuesRef.current[i] = el)}
                  >
                    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
                      <div
                        className={`w-16 h-16 ${value.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <value.icon className={`w-8 h-8 ${value.color}`} />
                      </div>
                      <span className="text-base font-semibold text-slate-900 block">
                        {value.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* CTA Button */}
            <div className="pt-4" ref={buttonRef}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-2 border-violet-500 text-violet-600 hover:bg-violet-500 hover:text-white px-10 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <a
                  href="https://drive.google.com/file/d/1MzpRrBR7TbCrr8aiYZW1mezfTE3eHy-k/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          {/* Right Content - Tools */}
          <div className="space-y-12" ref={rightColRef}>
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Tools I Work With
                </h3>
                <p className="text-lg text-slate-600">
                  My favorite tools for creating amazing experiences
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {tools.map((tool, i) => (
                  <div
                    key={tool.name}
                    className="group cursor-pointer"
                    style={{ animationDelay: `${i * 0.1}s` }}
                    ref={(el) => (toolsRef.current[i] = el)}
                  >
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-500">
                      <div className="flex flex-col items-center text-center space-y-6">
                        <div
                          className={`w-20 h-20 ${tool.bg} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                        >
                          <tool.icon className={`w-10 h-10 ${tool.color}`} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">
                            {tool.name}
                          </h4>
                          <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                            Design Tool
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative Element */}
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-100 via-purple-50 to-blue-100 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl mx-auto flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900">
                    Always Learning
                  </h4>
                  <p className="text-sm text-slate-600">
                    Constantly exploring new design trends and technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
