import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background/10 backdrop-blur-sm">
     
      <div className="container insideContainer">
        <div className="flex flex-col items-center">         

          
          <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
            <div className="text-[10px] text-muted-foreground/30 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </div>
            
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground/60 tracking-wider">
              <span>Crafted with</span>
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }} 
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-primary/60"
              >
                ✦
              </motion.span>
              <span>by <a target="__blank" href="https://ipvertex.netlify.app/"><span className="text-foreground font-medium tracking-[0.1em]">IPVertax</span></a> </span>
            </div>

            <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="group flex flex-col items-center gap-3 mb-16"
          >
            <div className="p-3 rounded-full border border-border/60 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
              <ArrowUp size={18} strokeWidth={1.2} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground/50 group-hover:text-primary transition-colors">
              Back To Top
            </span>
          </motion.button>
          </div>

        </div>
      </div>
    </footer>
  );
};