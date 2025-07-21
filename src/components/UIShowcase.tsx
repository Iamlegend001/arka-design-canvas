import React from "react";
import { ExternalLink, Heart, MessageCircle } from "lucide-react";

const UIShowcase = () => {
  // Sample UI work data - you can replace with real data
  const uiWork = [
    {
      id: 1,
      title: "Banking App Dashboard",
      description: "Clean fintech interface with data visualization",
      image: "https://cdn.dribbble.com/userupload/44184570/file/original-3bea9d1e7cbec14e0ba09716eb7c14e4.png?resize=2048x1445&vertical=center",
      tags: ["UI Design", "Dashboard", "Fintech"],
      likes: 124,
      comments: 18,
      height: "h-64",
    },
    {
      id: 2,
      title: "E-commerce Mobile App",
      description: "Shopping experience redesign",
      image: "https://cdn.dribbble.com/userupload/43901235/file/original-c3db763da08a7ae2596c450f6a48ca03.png?resize=1200x900&vertical=center",
      tags: ["Desktop", "E-commerce", "UX"],
      likes: 89,
      comments: 12,
      height: "h-80",
    },
    {
      id: 3,
      title: "Social Media Card",
      description: "Modern social card interface",
      image: "https://cdn.dribbble.com/userupload/44184641/file/original-f712db523c26b5a2a9fe625558c706db.png?resize=1504x2418&vertical=center",
      tags: ["Social", "Feed", "Mobile"],
      likes: 156,
      comments: 24,
      height: "h-72",
    },
    {
      id: 4,
      title: "Animated Background",
      description: "Crazy background",
      image: "https://cdn.dribbble.com/userupload/44184408/file/original-a8bcec15fd661eea6ba3faa46b19fcf8.png?resize=1200x855&vertical=center",
      tags: ["Mobile", "Food", "UX"],
      likes: 98,
      comments: 15,
      height: "h-56",
    },
    {
      id: 5,
      title: "Train Booking",
      description: "Seamless booking flow design",
      image: "https://cdn.dribbble.com/userupload/44184457/file/original-fb717d8fc6ffdbc68293fb458b279c9e.png?resize=1200x853&vertical=center",
      tags: ["Web", "Travel", "Booking"],
      likes: 134,
      comments: 21,
      height: "h-96",
    },
    {
      id: 6,
      title: "Shopping Cart",
      description: "Logitech",
      image: "https://cdn.dribbble.com/userupload/43498696/file/original-fcf7c8c765fdfa72bc7f0073a3ac8e9c.png?resize=1504x972&vertical=center",
      tags: ["Health", "Dashboard", "Mobile"],
      likes: 76,
      comments: 9,
      height: "h-64",
    },
    {
      id: 7,
      title: "Music Player Redesign",
      description: "Modern audio streaming interface",
      image: "https://cdn.dribbble.com/userupload/43333525/file/original-437e42737751dd8b0ac8203d96819a3f.png?resize=1200x1171&vertical=center",
      tags: ["Music", "Player", "UI"],
      likes: 187,
      comments: 32,
      height: "h-72",
    },
    {
      id: 8,
      title: "Beautiful Hero Section",
      description: "Creative",
      image: "https://cdn.dribbble.com/userupload/44184506/file/original-39608b93fbed9e0d03609bd6cbe3930a.png?resize=2048x1584&vertical=center",
      tags: ["Productivity", "Web", "Dashboard"],
      likes: 112,
      comments: 17,
      height: "h-80",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br bg-slate-200">
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
              href="https://dribbble.com/imkuttu123"
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
