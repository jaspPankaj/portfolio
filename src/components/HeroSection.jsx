import { ArrowDown, Zap, Code, Sparkles } from "lucide-react";
import { cn } from "../lib/util";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-background">
      
      {/* --- CELESTIAL BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-pulse-subtle" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-bloom" />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT: MINIMAL & STYLISH */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 backdrop-blur-md animate-fade-in">
              <Sparkles size={14} className="text-primary" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Available for Projects</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
                <span className="block opacity-0 animate-fade-in italic font-light text-muted-foreground">Crafting</span>
                <span className="block opacity-0 animate-fade-in-delay-1">Digital</span>
                <span className="text-primary opacity-0 animate-fade-in-delay-2 text-glow">Solutions.</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-light opacity-0 animate-fade-in-delay-3">
              I’m <span className="text-foreground font-medium">Pankaj Kumar</span>, a Full Stack Developer 
              specializing in <span className="italic text-primary">architecting</span> high-performance web ecosystems 
              and pixel-perfect user experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-delay-4 justify-center lg:justify-start">
              <a href="#project" className="cosmic-button flex items-center gap-2 group">
                View Work <Zap size={16} className="group-hover:fill-current transition-all" />
              </a>
              <a href="#contact" className="px-8 py-3 rounded-full border border-border bg-card/50 backdrop-blur-md hover:bg-card hover:border-primary/50 transition-all text-sm font-semibold">
                Get in Touch
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT: THE PORTAL PHOTO */}
          <div className="order-1 lg:order-2 flex justify-center items-center relative">
            <div className="relative w-[280px] h-[350px] md:w-[400px] md:h-[500px] animate-float">
              
              {/* Outer Glowing Ring */}
              <div className="absolute inset-0 border border-primary/20 rounded-[3rem] rotate-3 scale-105 animate-[spin_20s_linear_infinite]" />
              
              {/* The "Portal" Image Container */}
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-2 border-primary/40 shadow-[0_0_50px_rgba(139,92,246,0.2)] bg-card">
                <img 
                  src="/portfolio/pankaj.png" // REPLACE WITH YOUR PHOTO PATH
                  alt="Pankaj Kumar"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                />
                
                {/* Overlay Gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Floating Tech Badge */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 p-4 bg-card/80 backdrop-blur-xl border border-border rounded-2xl shadow-2xl animate-floatY">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Code size={20} className="text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Expertise</p>
                    <p className="text-sm font-bold">Full Stack</p>
                  </div>
                </div>
              </div>

              {/* Decorative Circle behind image */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse-subtle" />
            </div>
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center group cursor-pointer opacity-0 animate-fade-in-delay-4">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground mb-3 group-hover:text-primary transition-colors">Scroll</span>
        <div className="h-10 w-[1px] bg-gradient-to-b from-primary to-transparent animate-bounce" />
      </div>

    </section>
  );
};