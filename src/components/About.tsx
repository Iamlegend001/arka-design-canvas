import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Figma, Palette, Code, Smartphone } from "lucide-react";

const About = () => {
  const tools = [
    { name: "Figma", icon: Figma, color: "text-purple-600" },
    { name: "Adobe XD", icon: Palette, color: "text-pink-600" },
    { name: "React", icon: Code, color: "text-blue-600" },
    { name: "Framer", icon: Smartphone, color: "text-green-600" },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-portfolio-dark">
                About Me
              </h2>

              <div className="space-y-4">
                <p className="text-lg text-portfolio-gray leading-relaxed">
                  Hey! I’m Arka — a UI/UX designer who blends creativity with
                  logic to craft human-centered digital experiences.
                </p>

                <p className="text-lg text-portfolio-gray leading-relaxed">
                  With a background in Computer Science and a passion for
                  design, I combine logic and creativity to build functional,
                  user-first experiences. I focus on clarity, consistency, and
                  solving real problems through clean interfaces. Outside of
                  design, I enjoy painting and playing the acoustic guitar —
                  hobbies that inspire my artistic sense. My go-to tools include
                  Figma, Adobe XD, Tailwind CSS, React, and Notion.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-portfolio-dark">
                Core Values
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {["Empathy", "Function", "Elegance"].map((value) => (
                  <div key={value} className="text-center">
                    <div className="w-12 h-12 bg-portfolio-violet/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <div className="w-4 h-4 bg-portfolio-violet rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-portfolio-dark">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-portfolio-violet text-portfolio-violet hover:bg-portfolio-violet hover:text-white px-8 py-6 text-lg font-medium"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Right Content - Tools */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-portfolio-dark ">
                Tools I Work With
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {tools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className="bg-gray-50/50 rounded-2xl p-6 hover-lift group cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <tool.icon className={`w-8 h-8 ${tool.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-portfolio-dark">
                          {tool.name}
                        </h4>
                        <p className="text-sm text-portfolio-gray mt-1">
                          Design Tool
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Stats */}
            {/* <div className="bg-gradient-to-r from-portfolio-violet/5 to-portfolio-mint/5 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-portfolio-violet">
                    3+
                  </div>
                  <div className="text-sm text-portfolio-gray">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-portfolio-mint">
                    50+
                  </div>
                  <div className="text-sm text-portfolio-gray">
                    Projects Completed
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
