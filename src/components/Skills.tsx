import React from "react";
import {
  Palette,
  Search,
  Layers,
  MousePointer,
  Smartphone,
  Zap,
  Grid3X3,
  Users,
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "UI Design",
      icon: Palette,
      description: "Creating beautiful, intuitive interfaces",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      name: "UX Research",
      icon: Search,
      description: "Understanding user needs and behaviors",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      name: "Wireframing",
      icon: Layers,
      description: "Structuring information and layout",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      name: "Interaction Design",
      icon: MousePointer,
      description: "Designing meaningful user interactions",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      name: "Responsive Layouts",
      icon: Smartphone,
      description: "Adapting designs for all devices",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      name: "Microinteractions",
      icon: Zap,
      description: "Adding delightful details and feedback",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      name: "Design Systems",
      icon: Grid3X3,
      description: "Building scalable design foundations",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      name: "Usability Testing",
      icon: Users,
      description: "Validating designs with real users",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-portfolio-dark mb-6">
            What I Do
          </h2>
          <p className="text-lg text-portfolio-gray max-w-2xl mx-auto">
            I specialize in creating user-centered digital experiences that
            balance functionality with aesthetic appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-gray-50/50 rounded-2xl p-8 hover-lift cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${skill.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg`}
                >
                  <skill.icon className={`w-8 h-8 ${skill.color}`} />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-portfolio-dark group-hover:text-portfolio-violet transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-portfolio-gray leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-portfolio-gray">
            <span>Ready to work together?</span>
            <a
              href="#contact"
              className="text-portfolio-violet font-semibold hover:underline transition-all duration-200"
            >
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
