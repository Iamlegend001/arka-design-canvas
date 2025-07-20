import React, { useRef, useEffect } from "react";
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
} from "lucide-react";

const TechStack = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const technologies = [
    { name: "Figma", icon: Figma, color: "text-purple-600" },
    { name: "Adobe XD", icon: Palette, color: "text-pink-600" },
    { name: "React", icon: Code, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: Zap, color: "text-cyan-600" },
    { name: "Notion", icon: FileText, color: "text-gray-600" },
    { name: "Framer", icon: Smartphone, color: "text-green-600" },
    { name: "Webflow", icon: Globe, color: "text-blue-500" },
    { name: "Next.js", icon: ArrowRight, color: "text-black" },
    { name: "GitHub", icon: Github, color: "text-gray-800" },
  ];

  // Double the array for seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Reset position when we've scrolled past the first set
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-4">
            My Design Stack
          </h2>
          <p className="text-lg text-portfolio-gray">
            Tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Scrolling Container */}
        <div
          ref={scrollRef}
          className="flex overflow-hidden space-x-6 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {duplicatedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group cursor-pointer min-w-[160px]"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <tech.icon
                    className={`w-8 h-8 ${tech.color} transition-colors duration-300`}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-portfolio-dark group-hover:text-portfolio-violet transition-colors duration-300">
                    {tech.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Hint */}
        <div className="text-center mt-8 md:hidden">
          <p className="text-sm text-portfolio-gray">
            ← Swipe to explore tools →
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
