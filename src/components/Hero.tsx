import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const valuesRef = useRef([]);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
        },
      });
      gsap.from(rightRef.current, {
        opacity: 0,
        x: 60,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
        },
      });
      valuesRef.current.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });
      gsap.from(scrollIndicatorRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scrollIndicatorRef.current,
          start: "top 95%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-portfolio-mint/20 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-32 right-16 w-32 h-32 bg-portfolio-violet/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8" ref={leftRef}>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark leading-tight">
                Designing Interfaces
                <span className="block text-portfolio-violet">
                  That Feel Human.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-portfolio-gray leading-relaxed max-w-lg">
                I'm Arka, a UI/UX designer crafting seamless digital experiences
                with empathy and clarity.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-portfolio-violet hover:bg-portfolio-violet/90 text-white px-8 py-6 text-lg font-medium group"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <a
                href="https://drive.google.com/uc?export=download&id=1-3lF_1jXQrMf8kSEF0UjtORomFKvk3K8"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-portfolio-dark text-portfolio-dark hover:bg-portfolio-dark hover:text-white px-8 py-6 text-lg font-medium"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Values */}
            <div className="flex flex-wrap gap-6 pt-8">
              {["Empathy", "Function", "Elegance"].map((value, index) => (
                <div
                  key={value}
                  className="flex items-center space-x-2"
                  ref={(el) => (valuesRef.current[index] = el)}
                >
                  <div className="w-2 h-2 bg-portfolio-mint rounded-full"></div>
                  <span className="text-portfolio-gray font-medium">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Abstract Illustration */}
          <div className="relative" ref={rightRef}>
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main UI Frame */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl p-8 hover-lift">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-16 h-2 bg-gray-200 rounded"></div>
                    <div className="w-8 h-2 bg-portfolio-violet rounded"></div>
                  </div>
                </div>

                {/* Content Blocks */}
                <div className="space-y-4">
                  <div className="h-4 bg-portfolio-violet/20 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="h-24 bg-portfolio-mint/20 rounded-xl"></div>
                    <div className="h-24 bg-portfolio-violet/20 rounded-xl"></div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-portfolio-violet/10 to-portfolio-mint/10 rounded-xl mt-4"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-portfolio-mint rounded-xl shadow-lg animate-float"></div>
              <div
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-portfolio-violet rounded-lg shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          ref={scrollIndicatorRef}
        >
          <ChevronDown className="w-6 h-6 text-portfolio-gray" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
