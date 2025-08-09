import React, { useRef, useEffect } from "react";
import { ArrowRight, ExternalLink, Eye, Users, Target } from "lucide-react";

const CaseStudies = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const viewMoreRef = useRef(null);
  const containerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Emergency Health Access App",
      subtitle: "Designing Life-Saving Digital Solutions for Critical Moments",
      summary: "Emergency app for instant help, alerts & medical assistance.",
      tags: ["UX Research", "Mobile Design", "Prototyping"],
      image: "/Images/Image1.png",
      problem:
        "Many people lack instant access to medical help during emergencies, leading to delayed response times and potentially life-threatening situations.",
      role: "Lead UX/UI Designer",
      tools: ["Figma", "Notion"],
      research:
        "Conducted 15 user interviews and surveys with emergency responders and healthcare professionals to understand critical pain points.",
      outcome:
        "Created a comprehensive emergency response system that reduced average response time by 40% and improved user satisfaction by 85%.",
      duration: "2 Weeks",
      team: "Solo",
      color: "from-blue-50 to-indigo-50",
      accentColor: "text-blue-600",
      link: "https://medium.com/@arkapravasantra17/emergency-health-access-app-designing-life-saving-digital-solutions-for-critical-moments-e2cafa514a9c",
    },
    {
      id: 2,
      title: "MindMosaic – AI-Powered Knowledge Base",
      subtitle: "Featured on UX Collective’s Bootcamp Publication",
      summary:
        "An AI-powered personal knowledge base published on Medium’s top UX publication — designed to solve content overload for modern learners.",
      tags: [
        "Dashboard Design",
        "UX Publication",
        "AI Integration",
        "Accessibility",
      ],
      image: "/Images/Image2.png",
      problem:
        "Learners were overwhelmed by scattered notes and unstructured content across platforms, making knowledge retention difficult.",
      role: "Senior UX Designer",
      tools: ["Figma", "Notion"],
      research:
        "Interviewed learners from 5+ regions, identifying that 80% struggled with organizing and retrieving their learning materials efficiently.",
      outcome:
        "Designed a clean, focused AI-curated experience that reduced information search time by 75%. Featured by Fabricio Teixeira on Bootcamp (UX Collective).",
      duration: "2 weeks",
      team: "Solo",
      color: "from-emerald-50 to-teal-50",
      accentColor: "text-emerald-600",
      link: "https://medium.com/design-bootcamp/mindmosaic-revolutionizing-personal-knowledge-management-with-ai-a332f1e36c75",
    },
    {
      id: 3,
      title: "Focus-Flow Study Companion",
      subtitle: "Featured on UX Collective’s Bootcamp Publication",
      summary:
        "Creating engaging online learning experiences that adapt to individual learning styles.",
      tags: ["Education", "Interactive Design", "User Testing"],
      image: "/Images/Images3.png",
      problem:
        "Students were disengaged with traditional online learning platforms, showing low completion rates and poor knowledge retention.",
      role: "Product Designer",
      tools: ["Figma", "Notion"],
      research:
        "Analyzed learning patterns of 500+ students across different age groups and identified key engagement and retention factors.",
      outcome:
        "Improved student engagement by 75% and course completion rates by 55% through personalized learning pathways and gamification.",
      duration: "4 weeks",
      team: "2 members",
      color: "from-orange-50 to-amber-50",
      accentColor: "text-orange-600",
      link: "https://medium.com/@arkapravasantra17/focus-flow-designing-a-unified-study-companion-for-the-digital-age-2b53db4b0558",
    },
  ];

  useEffect(() => {
    let scrollTimeout;
    let ticking = false;

    const smoothScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // Parallax effect for cards
          cardRefs.current.forEach((card, index) => {
            if (card) {
              const rect = card.getBoundingClientRect();
              const isVisible =
                rect.top < window.innerHeight && rect.bottom > 0;

              if (isVisible) {
                const scrollProgress =
                  (window.innerHeight - rect.top) /
                  (window.innerHeight + rect.height);
                const parallaxOffset = (scrollProgress - 0.5) * 20;

                // Smooth parallax transform
                card.style.transform = `translateY(${parallaxOffset}px) scale(${
                  0.98 + scrollProgress * 0.02
                })`;

                // Image parallax
                const image = card.querySelector(".parallax-image");
                if (image) {
                  image.style.transform = `translateY(${
                    parallaxOffset * -0.5
                  }px) scale(1.05)`;
                }
              }
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      smoothScroll();

      scrollTimeout = setTimeout(() => {
        // Debounced scroll handler
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Intersection Observer for smooth animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px) scale(1)";
          }, index * 150); // Staggered animation
        }
      });
    }, observerOptions);

    // Card-specific observer for individual card animations
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-animate-in");

            // Animate card content elements
            const contentElements =
              entry.target.querySelectorAll(".card-content > *");
            contentElements.forEach((el, index) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0px)";
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px) scale(0.95)";
      el.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      observer.observe(el);
    });

    // Observe cards for individual animations
    cardRefs.current.forEach((card) => {
      if (card) {
        cardObserver.observe(card);

        // Set initial state for card content
        const contentElements = card.querySelectorAll(".card-content > *");
        contentElements.forEach((el) => {
          el.style.opacity = "0";
          el.style.transform = "translateY(20px)";
          el.style.transition = "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        });
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      cardObserver.disconnect();
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-16 lg:py-24 min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-indigo-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-emerald-100/40 to-teal-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-amber-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20 px-6 lg:px-12">
          <div className="animate-on-scroll">
            <span className="inline-block px-5 py-2 bg-white/70 backdrop-blur-sm text-slate-600 rounded-full text-sm font-medium tracking-wide border border-slate-200/60 mb-6 shadow-sm">
              Featured Work
            </span>
          </div>
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-800 mb-6 tracking-tight">
              Case{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                Studies
              </span>
            </h2>
          </div>
          <div className="animate-on-scroll">
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Deep dives into real-world projects where I transformed user pain
              points into intuitive, impactful design solutions.
            </p>
          </div>
        </div>

        {/* Cards Container */}
        <div
          ref={containerRef}
          className="space-y-16 px-6 lg:px-12 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className="group animate-on-scroll"
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/80 shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden hover:-translate-y-2 hover:scale-[1.02] card-hover-effect">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image Section */}
                  <div
                    className={`relative overflow-hidden lg:col-span-2 ${
                      index % 2 === 1 ? "lg:order-5" : ""
                    }`}
                  >
                    {/* Removed color overlay for clear images */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="parallax-image w-full h-80 lg:h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                    />
                    {/* Removed shadow overlay for clear images */}

                    {/* Removed title overlay from image */}
                  </div>

                  {/* Content Section */}
                  <div
                    className={`card-content p-8 lg:p-16 flex flex-col justify-center lg:col-span-3 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    {/* Project Title & Subtitle */}
                    <div className="mb-8">
                      <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-lg lg:text-xl text-slate-600 font-light">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tag}
                          style={{ animationDelay: `${tagIndex * 100}ms` }}
                          className="px-3 py-1 bg-slate-100/80 text-slate-600 text-sm rounded-full border border-slate-200/60 font-medium transition-all duration-300 hover:bg-slate-200/80 hover:scale-105 hover:-translate-y-0.5 cursor-default animate-tag"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Stats */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      <div className="flex items-center gap-2 px-4 py-2 bg-slate-100/80 text-slate-700 text-sm font-medium rounded-lg border border-slate-200/60 transition-all duration-300 hover:bg-slate-200/80 hover:scale-105">
                        <Users className="w-4 h-4" />
                        <span>{project.team}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-slate-100/80 text-slate-700 text-sm font-medium rounded-lg border border-slate-200/60 transition-all duration-300 hover:bg-slate-200/80 hover:scale-105">
                        <Target className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-8 text-slate-700 leading-relaxed">
                      <div className="transform transition-all duration-500 hover:translate-x-1">
                        <h4 className="font-medium text-slate-800 flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-slate-800 transition-all duration-300 hover:scale-150 hover:bg-slate-900"></div>
                          Problem
                        </h4>
                        <p className="text-slate-600 pl-4 font-light transition-colors duration-300 hover:text-slate-700">
                          {project.problem}
                        </p>
                      </div>

                      <div className="transform transition-all duration-500 hover:translate-x-1">
                        <h4 className="font-medium text-slate-800 flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-slate-800 transition-all duration-300 hover:scale-150 hover:bg-slate-900"></div>
                          Research
                        </h4>
                        <p className="text-slate-600 pl-4 font-light transition-colors duration-300 hover:text-slate-700">
                          {project.research}
                        </p>
                      </div>

                      <div className="transform transition-all duration-500 hover:translate-x-1">
                        <h4 className="font-medium text-slate-800 flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-slate-800 transition-all duration-300 hover:scale-150 hover:bg-slate-900"></div>
                          Outcome
                        </h4>
                        <p className="text-slate-600 pl-4 font-light transition-colors duration-300 hover:text-slate-700">
                          {project.outcome}
                        </p>
                      </div>

                      {/* Role & Tools */}
                      <div className="pt-8 border-t border-slate-200/60 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
                          <h5 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                            Role
                          </h5>
                          <p className="font-medium text-slate-800 transition-colors duration-300 hover:text-slate-900">
                            {project.role}
                          </p>
                        </div>
                        <div className="transform transition-all duration-300 hover:translate-y-[-2px]">
                          <h5 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                            Tools
                          </h5>
                          <p className="text-slate-600 font-light transition-colors duration-300 hover:text-slate-700">
                            {project.tools.join(", ")}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-12">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-900 hover:to-slate-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:scale-105 text-sm group active:scale-95"
                      >
                        <Eye className="w-4 h-4 transition-all duration-300 group-hover:scale-110" />
                        View Case Study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div
          ref={viewMoreRef}
          className="text-center mt-20 px-6 lg:px-12 animate-on-scroll"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-3 bg-white/70 hover:bg-white/90 text-slate-800 border border-slate-200/60 hover:border-slate-300/80 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-105 backdrop-blur-sm group active:scale-95"
          >
            View All Projects
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .card-hover-effect {
          position: relative;
          overflow: hidden;
        }

        .card-hover-effect::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 1;
        }

        .card-hover-effect:hover::before {
          left: 100%;
        }

        .animate-tag {
          animation: tagFloat 2s ease-in-out infinite;
        }

        .animate-tag:nth-child(even) {
          animation-direction: reverse;
        }

        .card-animate-in {
          animation: cardSlideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }

        @keyframes tagFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }

        .parallax-image {
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        @media (prefers-reduced-motion: reduce) {
          .card-hover-effect::before,
          .animate-tag,
          .parallax-image {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;
