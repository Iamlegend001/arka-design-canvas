import React, { useRef, useEffect } from "react";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";

const CaseStudies = () => {
  const containerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Emergency Health Access",
      subtitle: "Critical Care on Demand",
      summary: "Reducing ambulance response times by 40% through intelligent routing.",
      tags: ["UX Research", "Mobile App"],
      image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*JegOt-TRWBsIWvpYzuhSaA.png",
      stats: { label: "Response Time", value: "-40%" },
      role: "Lead Designer",
      color: "from-blue-500 to-teal-500",
      shadow: "shadow-blue-200",
      bg: "bg-blue-50",
      border: "border-blue-200",
      link: "https://medium.com/design-bootcamp/emergency-health-access-app-designing-life-saving-digital-solutions-for-critical-moments-e2cafa514a9c",
    },
    {
      id: 2,
      title: "MindMosaic AI",
      subtitle: "Knowledge Management Evolved",
      summary: "An AI-powered second brain that organizes your digital chaos automatically.",
      tags: ["AI Integration", "Dashboard"],
      image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*RFDLhTgON1eIXMCj-4DZ4w.png",
      stats: { label: "Search Speed", value: "4x" },
      role: "Senior UX",
      color: "from-green-500 to-lime-600",
      shadow: "shadow-green-200",
      bg: "bg-green-50",
      border: "border-green-200",
      link: "https://medium.com/design-bootcamp/mindmosaic-revolutionizing-personal-knowledge-management-with-ai-a332f1e36c75",
    },
    {
      id: 3,
      title: "Focus-Flow",
      subtitle: "Hyper-Personalized Learning",
      summary: "Gamified learning pathways that adapt to student attention spans in real-time.",
      tags: ["EdTech", "Gamification"],
      image: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*XM9gPYjk3y5nsiyOMVG_CQ.png",
      stats: { label: "Engagement", value: "+75%" },
      role: "Product Designer",
      color: "from-purple-500 to-pink-500",
      shadow: "shadow-purple-200",
      bg: "bg-purple-50",
      border: "border-purple-200",
      link: "https://medium.com/design-bootcamp/focus-flow-designing-a-unified-study-companion-for-the-digital-age-2b53db4b0558",
    },
    {
      id: 4,
      title: "Campus Recruit",
      subtitle: "Frictionless Onboarding",
      summary: "Transforming a 20-minute registration process into a 4-step guided journey.",
      tags: ["B2B SaaS", "Onboarding"],
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*mfoC5d2hMc-gDYkpZI2cZA.jpeg",
      stats: { label: "Drop-off Rate", value: "-68%" },
      role: "UX Researcher",
      color: "from-orange-500 to-red-500",
      shadow: "shadow-orange-200",
      bg: "bg-orange-50",
      border: "border-orange-200",
      link: "https://medium.com/design-bootcamp/ux-case-study-reimagining-college-placement-onboarding-7cce17fe71ed",
    },
  ];

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden selection:bg-blue-100">

      {/* --- Ambient Background Effects (Lighter) --- */}
      <div className="absolute inset-0 z-0 opacity-50">
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>
        
        {/* Gentle Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-sky-200/50 rounded-full blur-[100px] mix-blend-multiply animate-pulse duration-10000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-200/50 rounded-full blur-[100px] mix-blend-multiply animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* --- Header --- */}
        <div className="mb-24 md:mb-32 max-w-4xl text-center mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
            <span className="text-blue-600 font-mono text-sm tracking-widest uppercase">Our Impactful Journeys</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[0.95]">
            Innovating Solutions, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Delivering Excellence.
            </span>
          </h2>
          <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our recent case studies where design thinking meets cutting-edge technology to create measurable impact and delightful user experiences.
          </p>
        </div>

        {/* --- Sticky Stacking Cards Container --- */}
        <div ref={containerRef} className="flex flex-col gap-16 lg:gap-12 relative">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="sticky top-28 lg:top-36" // Adjusted sticky top for better visibility in light theme
              style={{
                marginBottom: index === projects.length - 1 ? 0 : '4rem',
                zIndex: projects.length - index, // Corrected zIndex for proper stacking order
              }}
            >
              <div className={`group relative overflow-hidden rounded-[2.5rem] bg-white border ${project.border} ${project.shadow} shadow-lg transition-all duration-700 hover:-translate-y-3 hover:shadow-xl`}>

                {/* Card Subtle Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bg} opacity-50 group-hover:opacity-100 transition-opacity duration-700`}></div>

                <div className="grid lg:grid-cols-12 gap-0 relative z-10">

                  {/* Text Content */}
                  <div className="lg:col-span-5 p-8 md:p-12 lg:p-14 flex flex-col justify-between min-h-[400px] lg:min-h-[580px]">
                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 border border-gray-200 text-gray-700 backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                        {project.title}
                      </h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-6`}>
                        {project.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8 max-w-sm">
                        {project.summary}
                      </p>
                    </div>

                    {/* Meta Data & Button */}
                    <div>
                      <div className="grid grid-cols-2 gap-6 mb-10 py-6 border-t border-gray-200">
                        <div>
                          <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Impact</p>
                          <p className="text-3xl font-bold text-gray-800">{project.stats.value} <span className="text-base font-normal text-gray-500">{project.stats.label}</span></p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Role</p>
                          <p className="text-gray-800 font-semibold">{project.role}</p>
                        </div>
                      </div>

                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-blue-700 font-semibold group/btn cursor-pointer transition-all duration-300 hover:text-blue-900">
                        <span className="relative text-lg">
                          Read Full Case Study
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover/btn:w-full"></span>
                        </span>
                        <div className={`p-2 rounded-full border border-blue-300 bg-blue-100 group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all duration-300`}>
                          <ArrowRight className="w-5 h-5 -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300" />
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Image/Visual Section */}
                  <div className="lg:col-span-7 relative h-72 lg:h-auto overflow-hidden bg-gray-100 rounded-bl-[2.5rem] lg:rounded-bl-none lg:rounded-tr-[2.5rem]">
                    {/* Decorative gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 lg:bg-gradient-to-l`}></div>

                    {/* The Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Floating Badge (Decorative) */}
                    <div className="absolute top-8 right-8 z-20 hidden lg:flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md rounded-full border border-gray-200 shadow-md">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span className="text-sm text-gray-800 font-medium">Highlight</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Footer / CTA --- */}
        <div className="mt-32 text-center relative z-10">
          <p className="text-gray-600 mb-6 text-lg">Ready to transform your ideas into reality?</p>
          <a
            href="/projects"
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-white"
          >
            <span className="mr-3 text-lg">View All Projects</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full ring-2 ring-blue-500/50 group-hover:ring-blue-500/80 transition-all duration-300"></div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;