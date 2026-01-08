import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const projects = [
    {
      id: 1,
      title: "Healui",
      subtitle: "Designing Calm, Scalable Healthcare Experiences",
      summary:
        "Crafted a patient-centered healthcare platform focused on clarity, emotional reassurance, and system scalability.",
      tags: ["Healthcare UX", "Design Systems", "Product Design"],
      image:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5nvSf1DXAPaMKEOJXZcxlw.png",
      stats: { label: "Patient Confidence", value: "+62%" },
      role: "Product Designer",
      color: "from-teal-500 to-cyan-600",
      shadow: "shadow-teal-200",
      bg: "bg-teal-50",
      border: "border-teal-200",
      link: "https://medium.com/design-bootcamp/healui-designing-a-calm-scalable-healthcare-experience-63b302faeb4d",
    },
    {
      id: 2,
      title: "Campus Recruit",
      subtitle: "Frictionless Onboarding",
      summary:
        "Transforming a 20-minute registration process into a 4-step guided journey.",
      tags: ["B2B SaaS", "Onboarding"],
      image:
        "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*mfoC5d2hMc-gDYkpZI2cZA.jpeg",
      stats: { label: "Drop-off Rate", value: "-68%" },
      role: "UX Researcher",
      color: "from-orange-500 to-red-500",
      shadow: "shadow-orange-200",
      bg: "bg-orange-50",
      border: "border-orange-200",
      link: "https://medium.com/design-bootcamp/ux-case-study-reimagining-college-placement-onboarding-7cce17fe71ed",
    },
    {
      id: 3,
      title: "Emergency Health Access",
      subtitle: "Critical Care on Demand",
      summary:
        "Reducing ambulance response times by 40% through intelligent routing.",
      tags: ["UX Research", "Mobile App"],
      image:
        "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*JegOt-TRWBsIWvpYzuhSaA.png",
      stats: { label: "Response Time", value: "-40%" },
      role: "Lead Designer",
      color: "from-blue-500 to-teal-500",
      shadow: "shadow-blue-200",
      bg: "bg-blue-50",
      border: "border-blue-200",
      link: "https://medium.com/design-bootcamp/emergency-health-access-app-designing-life-saving-digital-solutions-for-critical-moments-e2cafa514a9c",
    },
    {
      id: 4,
      title: "MindMosaic AI",
      subtitle: "Knowledge Management Evolved",
      summary:
        "An AI-powered second brain that organizes your digital chaos automatically.",
      tags: ["AI Integration", "Dashboard"],
      image:
        "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*RFDLhTgON1eIXMCj-4DZ4w.png",
      stats: { label: "Search Speed", value: "4x" },
      role: "Senior UX",
      color: "from-green-500 to-lime-600",
      shadow: "shadow-green-200",
      bg: "bg-green-50",
      border: "border-green-200",
      link: "https://medium.com/design-bootcamp/mindmosaic-revolutionizing-personal-knowledge-management-with-ai-a332f1e36c75",
    },
    {
      id: 5,
      title: "Focus-Flow",
      subtitle: "Hyper-Personalized Learning",
      summary:
        "Gamified learning pathways that adapt to student attention spans in real-time.",
      tags: ["EdTech", "Gamification"],
      image:
        "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*XM9gPYjk3y5nsiyOMVG_CQ.png",
      stats: { label: "Engagement", value: "+75%" },
      role: "Product Designer",
      color: "from-purple-500 to-pink-500",
      shadow: "shadow-purple-200",
      bg: "bg-purple-50",
      border: "border-purple-200",
      link: "https://medium.com/design-bootcamp/focus-flow-designing-a-unified-study-companion-for-the-digital-age-2b53db4b0558",
    },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          opacity: 0,
          y: 50,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        });
      }

      cardRefs.current.forEach((cardRef) => {
        if (!cardRef) return;

        const card = cardRef.querySelector(".case-study-card");
        const imageSection = cardRef.querySelector(".image-section");

        if (!card) return;

        gsap.set(card, { scale: 0.92, opacity: 0.7, y: 50 });

        gsap.to(card, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef,
            start: "top 75%",
            end: "top 25%",
            scrub: 1,
          },
        });

        if (imageSection) {
          gsap.to(imageSection, {
            y: -40,
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: cardRef,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });

      if (ctaRef.current) {
        gsap.from(ctaRef.current.children, {
          opacity: 0,
          y: 40,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
          },
        });
      }

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [visibleCount]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-24 lg:py-32 overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* HEADER */}
      <div
        ref={headerRef}
        className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 text-center"
      >
        <p className="text-blue-600 font-mono text-sm tracking-widest uppercase mb-4">
          Our Impactful Journeys
        </p>
        <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900">
          Innovating Solutions,
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Delivering Excellence
          </span>
        </h2>
        <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
          Design-driven case studies where empathy, strategy, and execution
          create measurable impact.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-20">
          {projects.slice(0, visibleCount).map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="sticky top-32"
              style={{ zIndex: projects.length - index }}
            >
              <div
                className={`case-study-card relative rounded-[2.5rem] bg-white border ${project.border} ${project.shadow} shadow-lg overflow-hidden will-change-transform`}
              >
                <div className="grid lg:grid-cols-12">
                  <div className="lg:col-span-5 p-12 lg:p-16 min-h-[500px] lg:min-h-[650px] flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs bg-gray-100 border rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-4xl font-bold text-gray-900 mb-3">
                        {project.title}
                      </h3>
                      <p
                        className={`text-lg font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-4`}
                      >
                        {project.subtitle}
                      </p>
                      <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        {project.summary}
                      </p>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-blue-700 font-semibold"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-5 h-5 -rotate-45" />
                    </a>
                  </div>

                  <div className="image-section lg:col-span-7 relative h-96 lg:min-h-[650px] bg-gray-100 overflow-hidden rounded-tr-[2.5rem]">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LOAD MORE */}
      {visibleCount < projects.length && (
        <div className="mt-20 text-center">
          <button
            onClick={() =>
              setVisibleCount((v) => Math.min(v + 2, projects.length))
            }
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            View More Projects
          </button>
        </div>
      )}

      {/* CTA */}
      <div ref={ctaRef} className="mt-32 text-center">
        <p className="text-gray-600 mb-6 text-lg">
          Ready to transform your ideas into reality?
        </p>
        <a
          href="/projects"
          className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition"
        >
          View All Projects
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default CaseStudies;
