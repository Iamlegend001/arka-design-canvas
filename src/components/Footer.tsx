import React from "react";
import { ArrowUp, Linkedin, Github, Dribbble, Mail } from "lucide-react";
import "remixicon/fonts/remixicon.css";
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

  // Use the provided Behance SVG for the icon
  const BehanceIcon = (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M7.438 10.377c.001-.858-.6-.858-.6-.858H5.5v1.74h1.338c.001-.001.6.001.6-.882zm-.2 2.13c0-.9-.7-.9-.7-.9H5.5v1.8h1.038c.001 0 .7.001.7-.9zM21.5 12.5c-2.5 0-2.5 2-2.5 2h3.5s-.1-2-1-2zm-7.5-1.5c-2.5 0-2.5 2-2.5 2h3.5s-.1-2-1-2zm7.5 2.5c0-2.5-2.5-2.5-2.5-2.5s-2.5 0-2.5 2.5c0 2.5 2.5 2.5 2.5 2.5s2.5 0 2.5-2.5zm-7.5 0c0-2.5-2.5-2.5-2.5-2.5s-2.5 0-2.5 2.5c0 2.5 2.5 2.5 2.5 2.5s2.5 0 2.5-2.5zM2 3C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H2zm0 2h20v14H2V5zm3.5 3C4.1 8 3 9.1 3 10.5v3C3 14.9 4.1 16 5.5 16h2.5c1.4 0 2.5-1.1 2.5-2.5v-3C10.5 9.1 9.4 8 8 8H5.5zm10.5 0c-1.4 0-2.5 1.1-2.5 2.5v3c0 1.4 1.1 2.5 2.5 2.5h2.5c1.4 0 2.5-1.1 2.5-2.5v-3c0-1.4-1.1-2.5-2.5-2.5H16z" />
    </svg>
  );

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
      icon: BehanceIcon,
      href: "https://www.behance.net/arkapravasantra",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-portfolio-dark mb-4">
                Arka
              </h3>
              <p className="text-portfolio-gray leading-relaxed max-w-md">
                A UI/UX designer crafting seamless digital experiences with
                empathy and clarity. Let's build something beautiful together.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-portfolio-gray transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-portfolio-dark">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-portfolio-gray hover:text-portfolio-violet transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-portfolio-dark">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:arkapravasantra17@gmail.com"
                className="block text-portfolio-gray hover:text-portfolio-violet transition-colors duration-200"
              >
                arkapravasantra17@gmail.com
              </a>
              <p className="text-portfolio-gray">
                Available for freelance and full-time opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 mt-12 border-t border-gray-100">
          <p className="text-portfolio-gray text-sm">
            © 2025 Arkaprava Santra — All rights reserved.
          </p>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="mt-4 md:mt-0 text-portfolio-gray hover:text-portfolio-violet group"
          >
            Back to Top
            <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
