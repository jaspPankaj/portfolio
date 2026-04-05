import { useState, useRef, useMemo, useEffect } from "react";
import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import { cn } from "../lib/util";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
  Orbit,
} from "lucide-react";
import { useToast } from "../hooks/use-toast";

// --- Sub-component: Interactive Nebula & Starfield ---
const EtherealBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement for parallax effect
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  // Parallax shifts for different layers
  const starsX = useTransform(smoothX, [-500, 500], [20, -20]);
  const starsY = useTransform(smoothY, [-500, 500], [20, -20]);
  const nebulaX = useTransform(smoothX, [-500, 500], [50, -50]);
  const nebulaY = useTransform(smoothY, [-500, 500], [50, -50]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Center mouse coordinates relative to window
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Generate unique star data only once
  const stars = useMemo(() => {
    return [...Array(50)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#030712]">
      {/* Layer 1: Moving Nebula Gradients */}
      <motion.div
        style={{ x: nebulaX, y: nebulaY }}
        className="absolute inset-[-100px] opacity-50 dark:opacity-80"
      >
        <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[150px] animate-pulse-subtle" />
        <div className="absolute bottom-1/3 right-1/10 w-[400px] h-[400px] rounded-full bg-purple-600/15 blur-[120px] animate-pulse-subtle delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-500/10 blur-[180px]" />
      </motion.div>

      {/* Layer 2: Interactive Starfield */}
      <motion.div style={{ x: starsX, y: starsY }} className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="star opacity-70"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `pulse-subtle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Layer 3: Drifting 'Cosmic Dust' Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute rounded-full bg-white/20 blur-[1px]"
          style={{
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// --- Sub-component: Gradient Border Wrapper ---
const GradientBorder = ({ children, className }) => (
  <div className={cn("relative p-[1px] rounded-2xl overflow-hidden group", className)}>
    <div className="absolute inset-0 bg-gradient-to-r from-border via-primary/30 to-border group-hover:from-primary group-hover:via-purple-500 group-hover:to-primary transition-all duration-500" />
    <div className="relative bg-card/60 backdrop-blur-xl rounded-[15px] h-full w-full">
      {children}
    </div>
  </div>
);

export const ContactSection = () => {
  const { toast } = useToast();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Simulate submission for demonstration
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast({ title: "Transmission Received!", description: "I will decode your message and respond shortly." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({ title: "Error", description: "Signal lost. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div
      ref={containerRef}
      className="mainContainer transition-colors duration-500"
    >

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container insideContainer"
      >
        {/* Refined Header */}
        <motion.div variants={itemVariants} className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-tight">
            Initiate <span className="text-primary text-glow animate-pulse-subtle">Contact</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg md:text-xl font-light">
            I’m a Full Stack Developer specializing in Django, React, Tailwind CSS, Shopify, and WordPress development.
Have a project idea, business website, or need a custom web solution? Let’s connect and turn your vision into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Info & Socials */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-10">
            <h3 className="text-3xl font-bold tracking-tight flex items-center gap-3">
              <Orbit className="text-primary h-8 w-8 animate-spin-[10s]" /> For project inquiries, collaborations, or freelance work, feel free to email me anytime.
            </h3>

            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", val: "jasp.pankaj@gmail.com", href: "mailto:jasp.pankaj@gmail.com" },
                { icon: Phone, label: "Contact Number", val: "+91 8587893419", href: "tel:+918587893419" },
                { icon: MapPin, label: "Based In", val: "Noida, India", href: "#" },
              ].map((item, idx) => (
                <GradientBorder key={idx}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-5 p-5"
                  >
                    <div className="p-3.5 rounded-full bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                      <item.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">{item.label}</p>
                      <a href={item.href} className="text-lg font-semibold hover:text-primary transition-colors leading-tight">
                        {item.val}
                      </a>
                    </div>
                  </motion.div>
                </GradientBorder>
              ))}
            </div>

            {/* Social Presences */}
            <div className="pt-6 border-t border-border">
              <h4 className="text-sm font-semibold mb-6 text-muted-foreground uppercase tracking-widest">Connect With Me Online</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { Icon: Linkedin, color: "hover:bg-[#0A66C2] hover:border-[#0A66C2]", link: "https://linkedin.com/in/jasppankaj" },
                  { Icon: Github, color: "hover:bg-white hover:text-black hover:border-white", link: "https://github.com/jasppankaj" },
                  { Icon: Youtube, color: "hover:bg-[#FF0000] hover:border-[#FF0000]", link: "https://youtube.com/@IPTechWorriers" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.05 }}
                    className={cn(
                      "p-4 rounded-xl border border-border bg-card/40 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
                      social.color
                    )}
                  >
                    <social.Icon size={24} strokeWidth={1.5} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7 lg:sticky lg:top-24">
            <GradientBorder>
              <div className="p-8 md:p-10 space-y-8">
                <div className="flex items-center gap-4">
                    <Send className="text-primary h-7 w-7"/>
                    <h3 className="text-3xl font-bold tracking-tight">Start Your Project Today</h3>
                </div>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium ml-1 text-muted-foreground">Full Name</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3.5 rounded-xl border border-border bg-background/30backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                        placeholder="Client Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium ml-1 text-muted-foreground">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3.5 rounded-xl border border-border bg-background/30 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                        placeholder="client@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1 text-muted-foreground">Project Details</label>
                    <textarea
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3.5 rounded-xl border border-border bg-background/30 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-muted-foreground/50"
                      placeholder="Tell me about your project, goals, budget, and timeline..."
                    />
                  </div>
                  
                  <motion.button
                    disabled={isSubmitting}
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="cosmic-button w-full flex justify-center items-center gap-3 py-4 rounded-xl text-lg font-bold group bg-primary transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Orbit className="h-5 w-5 animate-spin" /> Negotiating Warp Jump...
                      </>
                    ) : (
                      <>
                        Send Project Inquiry <Send size={20} className="group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </GradientBorder>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

