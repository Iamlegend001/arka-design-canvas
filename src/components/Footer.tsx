
import React from 'react';
import { ArrowUp, Linkedin, Github, Dribbble, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-800' },
    { name: 'Dribbble', icon: Dribbble, href: '#', color: 'hover:text-pink-600' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@arka.design', color: 'hover:text-portfolio-violet' }
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-portfolio-dark mb-4">Arka</h3>
              <p className="text-portfolio-gray leading-relaxed max-w-md">
                A UI/UX designer crafting seamless digital experiences with empathy and clarity. 
                Let's build something beautiful together.
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
            <h4 className="text-lg font-semibold text-portfolio-dark">Quick Links</h4>
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
            <h4 className="text-lg font-semibold text-portfolio-dark">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@arka.design" 
                className="block text-portfolio-gray hover:text-portfolio-violet transition-colors duration-200"
              >
                hello@arka.design
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
            © 2025 Arka Santra — All rights reserved.
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
