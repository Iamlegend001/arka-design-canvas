import React, { useRef, useEffect } from "react";
import {
  ArrowUp,
  Linkedin,
  Github,
  Dribbble,
  Mail,
  MapPin,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/arkapravadevux/",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Iamlegend001",
      color: "hover:text-gray-800",
    },
    {
      name: "Dribbble",
      icon: Dribbble,
      href: "https://dribbble.com/imkuttu123",
      color: "hover:text-pink-600",
    },
    {
      name: "Behance",
      icon: () => <i className="ri-behance-line text-xl" />,
      href: "https://www.behance.net/arkapravasantra",
      color: "hover:text-blue-500",
    },
  ];

  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const socialRefs = useRef([]);
  const bottomBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) observer.observe(gridRef.current);
    socialRefs.current.forEach((ref) => ref && observer.observe(ref));
    if (bottomBarRef.current) observer.observe(bottomBarRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-white border-t border-gray-200" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
          ref={gridRef}
        >
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Arkaprava
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mb-6"></div>
              <p className="text-gray-700 leading-relaxed max-w-md">
                A UI/UX designer crafting seamless digital experiences with
                <span className="text-violet-400 font-semibold">
                  {" "}
                  empathy
                </span>{" "}
                and
                <span className="text-purple-400 font-semibold"> clarity</span>.
                Let's build something beautiful together.
              </p>

              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>Available worldwide • Remote friendly</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, i) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-400 ${social.color}`}
                  aria-label={social.name}
                  ref={(el) => (socialRefs.current[i] = el)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {React.createElement(social.icon, {
                    className: `w-5 h-5 transition-colors duration-200 ${social.color}`,
                  })}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
            <nav className="space-y-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center text-slate-400 hover:text-violet-400 transition-all duration-300"
                >
                  <div className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full transition-all duration-300 mr-0 group-hover:mr-3"></div>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    {link.name}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-gray-900">
              Get In Touch
            </h4>
            <div className="space-y-6">
              <a
                href="mailto:arkapravasantra17@gmail.com"
                className="group flex items-center gap-3 text-slate-400 hover:text-violet-400 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-violet-500/20 rounded-xl flex items-center justify-center group-hover:bg-violet-500/30 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Email me at</div>
                  <div className="font-medium">arkapravasantra17@gmail.com</div>
                </div>
              </a>

              <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <p className="text-slate-300 text-sm leading-relaxed">
                  <span className="text-green-400 font-semibold">
                    • Available
                  </span>{" "}
                  for freelance projects and full-time opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between pt-12 mt-12 border-t border-gray-200"
          ref={bottomBarRef}
        >
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>© 2025 Arkaprava Santra — Crafted with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>and lots of coffee</span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="group mt-6 md:mt-0 text-slate-400 hover:text-violet-400 hover:bg-white/10 border border-white/20 rounded-xl px-6 py-3 transition-all duration-300"
          >
            <span>Back to Top</span>
            <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 group-hover:text-violet-400 transition-all duration-300" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
