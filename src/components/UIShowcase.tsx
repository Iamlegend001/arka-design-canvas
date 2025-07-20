import React from "react";
import { ExternalLink, Heart, MessageCircle } from "lucide-react";

const UIShowcase = () => {
  // Sample UI work data - you can replace with real data
  const uiWork = [
    {
      id: 1,
      title: "Banking App Dashboard",
      description: "Clean fintech interface with data visualization",
      image: "/placeholder.svg",
      tags: ["UI Design", "Dashboard", "Fintech"],
      likes: 124,
      comments: 18,
      height: "h-64",
    },
    {
      id: 2,
      title: "E-commerce Mobile App",
      description: "Shopping experience redesign",
      image: "/placeholder.svg",
      tags: ["Mobile", "E-commerce", "UX"],
      likes: 89,
      comments: 12,
      height: "h-80",
    },
    {
      id: 3,
      title: "Social Media Feed",
      description: "Modern social platform interface",
      image: "/placeholder.svg",
      tags: ["Social", "Feed", "Mobile"],
      likes: 156,
      comments: 24,
      height: "h-72",
    },
    {
      id: 4,
      title: "Food Delivery App",
      description: "Intuitive ordering experience",
      image: "/placeholder.svg",
      tags: ["Mobile", "Food", "UX"],
      likes: 98,
      comments: 15,
      height: "h-56",
    },
    {
      id: 5,
      title: "Travel Booking Platform",
      description: "Seamless booking flow design",
      image: "/placeholder.svg",
      tags: ["Web", "Travel", "Booking"],
      likes: 134,
      comments: 21,
      height: "h-96",
    },
    {
      id: 6,
      title: "Health App Interface",
      description: "Wellness tracking dashboard",
      image: "/placeholder.svg",
      tags: ["Health", "Dashboard", "Mobile"],
      likes: 76,
      comments: 9,
      height: "h-64",
    },
    {
      id: 7,
      title: "Music Player Redesign",
      description: "Modern audio streaming interface",
      image: "/placeholder.svg",
      tags: ["Music", "Player", "UI"],
      likes: 187,
      comments: 32,
      height: "h-72",
    },
    {
      id: 8,
      title: "Task Management Tool",
      description: "Productivity app interface",
      image: "/placeholder.svg",
      tags: ["Productivity", "Web", "Dashboard"],
      likes: 112,
      comments: 17,
      height: "h-80",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-portfolio-dark mb-6">
            UI Explorations
          </h2>
          <p className="text-lg text-portfolio-gray max-w-2xl mx-auto">
            A collection of interface designs, explorations, and visual
            experiments I've shared with the design community.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {uiWork.map((work, index) => (
            <div
              key={work.id}
              className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover-lift group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div
                className={`${work.height} bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden`}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-portfolio-dark mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {work.title}
                </h3>
                <p className="text-sm text-portfolio-gray mb-4 leading-relaxed">
                  {work.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-portfolio-gray">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{work.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{work.comments}</span>
                    </div>
                  </div>
                  <span className="text-xs text-portfolio-gray/60">
                    Design Shot
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-portfolio-gray">
            <span>Want to see more UI work?</span>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline transition-all duration-200"
            >
              Visit my Dribbble
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIShowcase;
