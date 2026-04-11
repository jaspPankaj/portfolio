import { useState, useEffect } from "react";
import { cn } from "../lib/util";
import {
  Briefcase,
  Code,
  User,
  Github,
  Linkedin,
  Youtube,
  Sparkles,
  Zap,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
export const AboutSection = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${Math.random() * 10 + 15}s`,
      size: Math.random() * 3 + 1,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="mainContainer transition-colors duration-300">
      <div className="container insideContainer">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: CONTENT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
              <Sparkles size={14} className="text-primary" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">
                Mission Profile
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1]">
              Full Stack <br />
              <span className="text-primary italic text-glow">Developer</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-light">
              Architecting secure, high-performance systems. Over{" "}
              <span className="text-foreground font-semibold">6 years</span> of
              experience bridging complex backend logic with human-centric
              interfaces.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {/* Primary Button: Cosmic Glow Effect */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full text-white font-bold shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-shadow duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Initiate Contact{" "}
                  <Zap size={18} className="group-hover:animate-pulse" />
                </span>
                {/* Animated Shine Effect */}
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              </motion.a>

              {/* Secondary Button: Glassmorphism Border Trace */}
              <motion.a
                href="/portfolio/Pankaj_Kumar_Resume_2026.pdf"
                download="Pankaj_Kumar_Resume_2026.pdf" // This triggers the download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3 bg-background rounded-full border border-primary/60 backdrop-blur-xl text-sm font-semibold text-foreground hover:border-primary/80 transition-colors cursor-pointer"
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </div>

            {/* Social Orbit */}
            <div className="flex gap-4 pt-6">
              {[
                { Icon: Linkedin, link: "https://linkedin.com/in/jasppankaj" },
                { Icon: Github, link: "https://github.com/jasppankaj" },
                { Icon: Youtube, link: "https://www.youtube.com/@IPvertex" },
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  className="p-3 rounded-xl bg-card border border-border shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: THE STABLE SYSTEM */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            {/* Main Icon Hub */}
            <div className="relative z-20 w-40 h-40 md:w-48 md:h-48 rounded-full bg-card border border-primary/30 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.1)]">
              <Code size={50} className="text-primary animate-float" />
              {/* Years Experience Badge - Anchored to Core */}
              <div className="absolute -right-4 top-0 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-xl">
                6+ YRS
              </div>
            </div>

            {/* Orbiting Experience Cards - Using flex-col for mobile stability */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Meta Card */}
              <div className="absolute top-[10%] left-[5%] md:left-0 z-30 rounded-xl gradient-border p-4 bg-card/80 backdrop-blur-md animate-float max-w-[160px] shadow-lg">
                <h4 className="font-bold text-xs uppercase tracking-tighter ">
                  Meta Certified
                </h4>
                <p className="text-[10px] text-muted-foreground">
                  Backend Specialist
                </p>
              </div>

              {/* .NET Card */}
              <div className="absolute bottom-[10%] right-[5%] z-30 rounded-xl md:right-0 gradient-border p-4 bg-card/80 backdrop-blur-md animate-floatY max-w-[160px] shadow-lg">
                <h4 className="font-bold text-xs uppercase tracking-tighter text-right">
                  ASP.NET Expert
                </h4>
                <p className="text-[10px] text-muted-foreground text-right">
                  Enterprise Solutions
                </p>
              </div>
            </div>

            {/* Decorative Rings */}
            <div className="absolute w-[280px] h-[280px] border border-primary/50 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-[400px] h-[400px] border border-primary/50 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
          </div>
        </div>
      </div>
    </div>
  );
};
