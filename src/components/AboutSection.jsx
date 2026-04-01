import { useState, useEffect } from "react";
import { cn } from "../lib/util";
import { Briefcase, Code, User, Github, Linkedin, Youtube, Sparkles, Zap } from "lucide-react";

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
    <section id="about" className="py-24 px-4 relative overflow-hidden bg-background text-foreground transition-colors duration-300">
      
      {/* --- CELESTIAL BACKGROUND LAYER (Theme-Aware) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bg-primary/30 rounded-full blur-[1px] animate-floatY"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: p.duration,
            }}
          />
        ))}
        {/* Responsive Nebula Glows */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.08),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.05),transparent_50%)]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: CONTENT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
              <Sparkles size={14} className="text-primary" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Mission Profile</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1]">
              Full Stack <br />
              <span className="text-primary italic text-glow">Developer</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-light">
              Architecting secure, high-performance systems. Over <span className="text-foreground font-semibold">6 years</span> of experience bridging complex backend logic with human-centric interfaces.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="cosmic-button flex items-center gap-2">
                Initiate Contact <Zap size={16} />
              </a>
              <a href="/resume.pdf" className="px-8 py-2 rounded-full border border-border bg-card/50 backdrop-blur-md hover:bg-card transition-all text-sm font-semibold">
                Download CV
              </a>
            </div>

            {/* Social Orbit */}
            <div className="flex gap-4 pt-6">
              {[
                { Icon: Linkedin, link: "https://linkedin.com/in/jasppankaj" },
                { Icon: Github, link: "https://github.com/jasppankaj" },
                { Icon: Youtube, link: "https://youtube.com/@IPTechWorriers" }
              ].map(({ Icon, link }, i) => (
                <a key={i} href={link} target="_blank" className="p-3 rounded-xl bg-card border border-border shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:text-primary">
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
                <div className="absolute -right-4 top-0 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold shadow-xl">
                    6+ YRS
                </div>
            </div>

            {/* Orbiting Experience Cards - Using flex-col for mobile stability */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Meta Card */}
                <div className="absolute top-[10%] left-[5%] md:left-0 gradient-border p-4 bg-card/80 backdrop-blur-md animate-float max-w-[160px] shadow-lg">
                    <h4 className="font-bold text-xs uppercase tracking-tighter">Meta Certified</h4>
                    <p className="text-[10px] text-muted-foreground">Backend Specialist</p>
                </div>

                {/* .NET Card */}
                <div className="absolute bottom-[10%] right-[5%] md:right-0 gradient-border p-4 bg-card/80 backdrop-blur-md animate-floatY max-w-[160px] shadow-lg">
                    <h4 className="font-bold text-xs uppercase tracking-tighter text-right">ASP.NET Expert</h4>
                    <p className="text-[10px] text-muted-foreground text-right">Enterprise Solutions</p>
                </div>
            </div>

            {/* Decorative Rings */}
            <div className="absolute w-[280px] h-[280px] border border-primary/5 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-[400px] h-[400px] border border-primary/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
          </div>

        </div>
      </div>
    </section>
  );
};