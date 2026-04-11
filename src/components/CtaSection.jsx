import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Send, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "../lib/util";

export const CTASection = () => {
  const sectionRef = useRef(null);
  
  // Advanced Scroll Animation: The card tilts back as you scroll into it
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);

  return (
    <div 
      ref={sectionRef} 
      className="relative py-24 px-6 overflow-hidden"
      id="cta"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        style={{ rotateX, opacity, scale, perspective: "1000px" }}
        className="container mx-auto max-w-5xl"
      >
        <div className="relative group rounded-[2.5rem] border border-white/10 bg-card/40 backdrop-blur-2xl p-8 md:p-16 overflow-hidden shadow-2xl">
          
          {/* Animated Border Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <Sparkles size={14} /> Ready to Scale?
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1]">
                Let’s build your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                  Digital Future.
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground font-light max-w-md mx-auto lg:mx-0">
                Currently accepting new projects. Let’s discuss your vision and turn it into a high-performance reality.
              </p>
            </div>

            {/* Buttons / Action Area */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              {/* Primary Action */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-lg shadow-[0_20px_40px_rgba(var(--primary-rgb),0.3)] hover:shadow-primary/40 transition-all group"
              >
                Start a Project
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>

              {/* Secondary Action */}
              <motion.a
                href="mailto:jasp.pankaj@gmail.com"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-border bg-transparent font-bold text-lg transition-colors group"
              >
                Copy Email
                <ArrowRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </motion.a>
            </div>
          </div>

          {/* Abstract geometric shapes for classiness */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 border border-primary/10 rounded-full" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 border border-primary/5 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};