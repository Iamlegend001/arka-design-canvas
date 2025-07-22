import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CaseStudies = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const viewMoreRef = useRef(null);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title:
        "Emergency Health Access App: Designing Life-Saving Digital Solutions for Critical Moments",
      summary: "Emergency app for instant help, alerts & medical assistance.",
      tags: ["UX Research", "Mobile Design", "Prototyping"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      problem:
        "Many people lack instant access to medical help during emergencies. Delays in alerts, location sharing, and critical info can risk lives. A fast, reliable solution is essential for safety.",
      role: "Lead UX/UI Designer",
      tools: ["Figma", "Notion"],
      research:
        "Conducted 15 user interviews and surveys, Research showed delays in emergency response due to lack of instant location sharing, medical history access, and panic alert systems. Users need a simple, fast, and reliable way to seek help.",
      // outcome: '40% increase in user engagement and 60% improvement in financial goal completion rates.',
      color: "from-purple-400 to-purple-600",
      link: "https://medium.com/@arkapravasantra17/emergency-health-access-app-designing-life-saving-digital-solutions-for-critical-moments-e2cafa514a9c",
    },
    {
      id: 2,
      title: "An AI-Powered Personal Knowledge Base",
      summary:
        "An AI-powered personal knowledge base that organizes notes, learns from your input",
      tags: ["Dashboard Design", "Data Visualization", "Accessibility"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      problem:
        "Medical professionals were spending too much time navigating complex interfaces to access critical patient information.",
      role: "Senior UX Designer",
      tools: ["Figma", "Notion"],
      research:
        "Research found users struggle with scattered notes, poor recall, and info overload. They need a centralized, AI-driven system to organize, retrieve, and suggest relevant knowledge efficiently.",
      outcome:
        "The outcome is an AI-powered knowledge base that centralizes all personal notes, learns user behavior, offers smart suggestions, and simplifies information access—reducing overload and boosting productivity.",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 3,
      title: "Focus-Flow Study Companion App",
      summary:
        "Creating engaging online learning experiences for remote education",
      tags: ["Education", "Interactive Design", "User Testing"],
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      problem:
        "Students were disengaged with traditional online learning platforms, leading to high dropout rates.",
      role: "Product Designer",
      tools: ["Figma", "Notion"],
      research:
        "Analyzed learning patterns of 500+ students and conducted A/B tests on key interface elements.",
      outcome: "better focus on the study",
      color: "from-green-400 to-green-600",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -40,
        duration: 0.5, // faster
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });
      cardRefs.current.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.35, // faster
          delay: i * 0.07, // keep stagger but faster
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });
      gsap.from(viewMoreRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.4, // faster
        ease: "power3.out",
        scrollTrigger: {
          trigger: viewMoreRef.current,
          start: "top 95%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      className="py-20 lg:py-32 bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16" ref={headerRef}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-portfolio-dark mb-6">
            Case Studies
          </h2>
          <p className="text-lg text-portfolio-gray max-w-2xl mx-auto">
            Deep dives into projects where I solved complex user problems
            through thoughtful design and research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  ref={(el) => (cardRefs.current[index] = el)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}
                    ></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-portfolio-dark group-hover:text-portfolio-violet transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-portfolio-gray leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-portfolio-gray text-sm rounded-full font-medium"
                          >
                            #{tag.replace(" ", "")}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <div className="space-y-8 p-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-portfolio-dark">
                      {project.title}
                    </h2>
                    <p className="text-lg text-portfolio-gray">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-portfolio-violet/10 text-portfolio-violet text-sm rounded-full font-medium"
                        >
                          #{tag.replace(" ", "")}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-portfolio-dark mb-2">
                          Problem Statement
                        </h3>
                        <p className="text-portfolio-gray">{project.problem}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-portfolio-dark mb-2">
                          My Role
                        </h3>
                        <p className="text-portfolio-gray">{project.role}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-portfolio-dark mb-2">
                          Tools Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-2 py-1 bg-gray-100 text-portfolio-gray text-sm rounded"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-portfolio-dark mb-2">
                          Research Summary
                        </h3>
                        <p className="text-portfolio-gray">
                          {project.research}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-portfolio-dark mb-2">
                          Outcome & Impact
                        </h3>
                        <p className="text-portfolio-gray">{project.outcome}</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}
                    ></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* See Full Case Study button for first project */}
                  {project.link && project.id === 1 && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 border-2 border-portfolio-violet text-portfolio-violet hover:bg-portfolio-violet hover:text-white px-6 py-2 text-md font-medium rounded-lg transition-colors duration-300"
                    >
                      See Full Case Study
                      <ExternalLink className="ml-2 h-4 w-4 inline-block" />
                    </a>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12" ref={viewMoreRef}>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-portfolio-violet text-portfolio-violet hover:bg-portfolio-violet hover:text-white px-8 py-6 text-lg font-medium group"
          >
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
