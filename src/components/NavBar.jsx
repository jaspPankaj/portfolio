import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/util";
import { X, Menu, Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skill" },
  { name: "Project", href: "#project" },
  { name: "Certifications", href: "#certificates" },
  { name: "Contacts", href: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-0 left-0 z-[100] transition-all duration-500">
      <nav
        className={cn(
          "container  mx-auto transition-all duration-500 flex items-center justify-between",
          isScrolled
            ? "mt-0 md:mt-4 max-w-7xl py-3 bg-background/40 backdrop-blur-xl border border-white/10 md:rounded-full shadow-[0_0_30px_rgba(0,0,0,0.3)]"
            : "mt-0 max-w-full py-6 bg-transparent",
        )}
      >
        {/* Logo */}
        <a href="#hero" className="group flex items-center gap-2">
          <div className="relative">
            <div className="flex items-center">
              <img src="/portfolio/favicon.ico" alt="Logo" />
              <span className="relative text-xl font-black tracking-tighter text-foreground uppercase">
                Pankaj<span className="text-primary italic"></span>
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-300 group"
            >
              <span className="relative z-10">{item.name}</span>
              {/* Hover Under-glow Indicator */}
              <span className="absolute inset-0 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              <motion.span className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-primary group-hover:w-1/2 transition-all -translate-x-1/2" />
            </a>
          ))}
        </div>

        {/* Action Button (Optional - For "Hire Me" or CV) */}
        <div className="flex justify-end">
          <ThemeToggle />
          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors relative z-[110]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              className="fixed inset-0 bg-background/90 z-[100] flex flex-col items-center justify-center"
            >
              <div className="flex flex-col space-y-6 text-center">
                {navItems.map((item, i) => (
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={item.name}
                    href={item.href}
                    className="text-3xl font-bold text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Mobile Extra Decor */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-10 flex justify-center text-primary/40"
                >
                  <Sparkles size={32} />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
