import React, { useRef, useEffect, useState } from "react";
import {
  ArrowUp,
  Linkedin,
  Github,
  Dribbble,
  Mail,
  MapPin,
  Heart,
  Copy,
  Check,
  Twitter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const [copied, setCopied] = useState(false);

  // Function to copy email
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("arkapravasantra17@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Iamlegend001",
    },
    {
      name: "Dribbble",
      icon: Dribbble,
      href: "https://dribbble.com/imkuttu123",
    },
    // Using a placeholder for Behance since Lucide doesn't strictly support it
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/DevLegend008",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      });

      // 1. Divider Line Grows
      tl.from(".footer-divider", {
        scaleX: 0,
        duration: 1,
        ease: "power3.out",
      })
      // 2. Content Fades Up
      .from(
        ".footer-content",
        {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef} 
      className="relative bg-slate-950 text-slate-300 overflow-hidden pt-20 pb-10"
    >
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent footer-divider" />
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-violet-900/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* TOP SECTION: CTA */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 footer-content">
            <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                    Have an idea? <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                        Let's build it.
                    </span>
                </h2>
                <p className="text-lg text-slate-400 max-w-md">
                    I'm currently available for freelance projects and open to full-time opportunities.
                </p>
            </div>

            <div className="flex flex-col justify-center items-start lg:items-end">
                 {/* Email Copy Card */}
                 <div 
                    onClick={handleCopyEmail}
                    className="group cursor-pointer relative overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/50 rounded-2xl p-6 transition-all duration-300 w-full max-w-md"
                 >
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-violet-500/20 rounded-xl text-violet-400 group-hover:scale-110 transition-transform duration-300">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Drop me a line</p>
                                <p className="text-lg font-semibold text-white">arkapravasantra17@gmail.com</p>
                            </div>
                        </div>
                        <div className="text-slate-500 group-hover:text-white transition-colors">
                            {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
                        </div>
                    </div>
                    {/* Success Message overlay */}
                    <div className={`absolute inset-0 bg-green-500/90 flex items-center justify-center transition-transform duration-300 ${copied ? 'translate-y-0' : 'translate-y-full'}`}>
                         <span className="font-bold text-white flex items-center gap-2">
                             <Check size={20} /> Copied to clipboard!
                         </span>
                    </div>
                 </div>
            </div>
        </div>

        {/* MIDDLE SECTION: Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12 border-t border-slate-800 footer-content">
            
            {/* Brand */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Arkaprava.</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                    Crafting digital experiences with empathy, clarity, and precision.
                </p>
                <div className="flex items-center gap-2 text-slate-500 text-sm pt-2">
                    <MapPin size={16} />
                    <span>West Bengal, India</span>
                </div>
            </div>

            {/* Links */}
            <div className="space-y-4">
                <h4 className="text-white font-semibold">Explore</h4>
                <ul className="space-y-2">
                    {quickLinks.map((link) => (
                        <li key={link.name}>
                            <a 
                                href={link.href} 
                                className="text-slate-400 hover:text-violet-400 transition-colors flex items-center gap-2 group w-fit"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 scale-0 group-hover:scale-100 transition-transform" />
                                <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Socials */}
            <div className="space-y-4">
                <h4 className="text-white font-semibold">Connect</h4>
                <div className="flex gap-2">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-violet-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                            aria-label={social.name}
                        >
                            <social.icon size={18} />
                        </a>
                    ))}
                </div>
            </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800 footer-content">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
             <span>© 2025 Arkaprava</span>
             <span className="w-1 h-1 bg-slate-500 rounded-full" />
             <span className="flex items-center gap-1">
                Made with <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
             </span>
          </div>

          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="group mt-4 md:mt-0 text-slate-400 hover:text-white hover:bg-white/5"
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