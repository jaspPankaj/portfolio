import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ExternalLink, 
  GithubIcon, 
  Code2, 
  Rocket, 
  Globe, 
  Database, 
  CloudSun, 
  Calculator, 
  Wallet 
} from "lucide-react";
import { cn } from "../lib/util";

// --- Sub-component: Fascinating Fluid Blob Background ---
const CelestialBlobBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20 bg-[#030712]">
      {/* 🔮 Top-Left Blob 🔮 */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-primary blur-[120px] mix-blend-screen animate-pulse-subtle"
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ top: "10%", left: "-5%" }}
      />

      {/* 💜 Mid-Right Blob 💜 */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-600 blur-[130px] mix-blend-screen animate-bloom"
        animate={{
          x: [0, -70, 0],
          y: [0, 80, 0],
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
        style={{ top: "35%", right: "-10%" }}
      />

      {/* 💙 Mid-Left Blob 💙 */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-blue-500 blur-[110px] mix-blend-soft-light animate-pulse-subtle"
        animate={{
          x: [0, 60, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 4
        }}
        style={{ top: "50%", left: "-10%" }}
      />

       {/* 💚 Bottom Blob 💚 */}
       <motion.div
        className="absolute w-[450px] h-[450px] rounded-full bg-emerald-500 blur-[140px] mix-blend-screen animate-bloom"
        animate={{
          x: [0, -80, 0],
          y: [0, -70, 0],
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 6
        }}
        style={{ bottom: "0%", left: "40%" }}
      />
    </div>
  );
};

// --- Your Original Project Data ---
const projects = [
    {
      id: 1,
      title: "Prabodha By AKS",
      description: "A fully responsive, modern website for AKS INDIA GROUP. Features smooth animations and optimized performance to showcase Yoga and meditation services effectively.",
      image: "projects/prabodha.png",
      tags: ["React", "Tailwind Css", "Framer Motion", "Hostinger"],
      demoUrl: "https://prabodhaaks.com/",
      githubUrl: "#",
      icon: <Globe className="w-5 h-5" />,
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      id: 2,
      title: "Elevare",
      description: "AI-powered career guidance app using OpenAI for smart recommendations, Django REST API with Google Auth, and a responsive React frontend.",
      image: "projects/project6.png",
      tags: ["Django", "Python", "PostgreSQL", "OpenAI", "React"],
      demoUrl: "https://jasppankaj.github.io/elevare/",
      githubUrl: "https://github.com/jaspPankaj/elevareProject",
      icon: <Rocket className="w-5 h-5" />,
      color: "from-purple-500/10 to-pink-500/10"
    },
    {
      id: 3,
      title: "Capsons Website",
      description: "Global leather apparel manufacturer website. Focused on clean UI, mobile responsiveness, and service-oriented layout using Wordpress.",
      image: "projects/project3.png",
      tags: ["Wordpress", "cPanel", "HTML", "CSS"],
      demoUrl: "https://capsons.com/",
      githubUrl: "#",
      icon: <Database className="w-5 h-5" />,
      color: "from-orange-500/10 to-yellow-500/10"
    },
    {
      id: 4,
      title: "Weekly Muse",
      description: "A sleek, intuitive web-based calculator for basic arithmetic. Optimized for both desktop and mobile with a Python/Django backend.",
      image: "projects/image.png",
      tags: ["Python", "Django", "Full Stack"],
      demoUrl: "https://theweeklymuse.onrender.com/",
      githubUrl: "#",
      icon: <Calculator className="w-5 h-5" />,
      color: "from-indigo-500/10 to-blue-500/10"
    },
    {
      id: 5,
      title: "Expense Tracker",
      description: "Dynamic finance management app with visual analytics using Syncfusion. Built with ASP.NET and SQL Server for robust data handling.",
      image: "projects/project2.png",
      tags: ["ASP.NET", "SQL Server", "Syncfusion"],
      demoUrl: "#",
      githubUrl: "https://github.com/jaspPankaj/Expense-Tracker",
      icon: <Wallet className="w-5 h-5" />,
      color: "from-emerald-500/10 to-green-500/10"
    },
    {
      id: 6,
      title: "Weather App",
      description: "Real-time weather dashboard showing humidity, wind speed, and forecasts using OpenWeather API with location detection.",
      image: "projects/project4.png",
      tags: ["React Vite", "Tailwindcss", "API"],
      demoUrl: "https://jasppankaj.github.io/weather/",
      githubUrl: "https://github.com/jaspPankaj/weather",
      icon: <CloudSun className="w-5 h-5" />,
      color: "from-sky-400/10 to-blue-400/10"
    }
  ];

// --- Main ProjectsSection ---
export const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="mainContainer">
      
      {/* 🌌 FASCINATING BLOBS BACKGROUND LAYER 🌌 */}
      <CelestialBlobBackground />

      <div className="container insideContainer">
        {/* Header Section (unchanged from engineering style) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
            <Code2 size={14} className="animate-spin-slow" /> Engineering Portfolio
          </div>
          <h2 className="text-4xl md:text-7xl font-blacktracking-tight mb-2">
            Featured <span className="text-primary text-glow italic">Innovations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-light">
            Each project is a unique artifact blending logic with aesthetic elegance. 
            <span className="text-foreground font-medium"> Proven digital solutions.</span>
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.01 }}
              className="group relative"
            >
              {/* Animated Inner Glow Border */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/10 via-border to-primary/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-700 blur-[1px] z-0" />
              
              <div className="relative h-full bg-card/60 backdrop-blur-2xl rounded-[1.9rem] overflow-hidden border border-border/50 shadow-2xl flex flex-col z-10 transition-colors duration-300 hover:border-primary/40">
                
                {/* Image & Overlay */}
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 right-4 z-20 p-2.5 rounded-xl bg-background/80 backdrop-blur-md border border-white/10 text-primary shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 flex flex-col flex-grow relative">
                  {/* Tech Stack Row */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase border border-primary/20 rounded-md bg-primary/5 text-primary/80 group-hover:border-primary/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-8 line-clamp-3 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Glassmorphism Bottom Action Bar */}
                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-border/50">
                    <div className="flex gap-3">
                      {project.demoUrl !== "#" && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-foreground/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-inner"
                          title="Live Preview"
                        >
                          <ExternalLink size={18} strokeWidth={1.5} />
                        </a>
                      )}
                      {project.githubUrl !== "#" && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-foreground/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-inner"
                          title="Source Code"
                        >
                          <GithubIcon size={18} strokeWidth={1.5} />
                        </a>
                      )}
                    </div>
                    
                    <motion.a 
                      href={project.demoUrl === "#" ? project.githubUrl : project.demoUrl} 
                      target="_blank"
                      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary group-hover:gap-4 transition-all"
                    >
                      View Project <ArrowRight size={14} strokeWidth={3} />
                    </motion.a>
                  </div>

                  {/* VERY Subtle inner hover glow based on project color */}
                  <div className={cn("absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-br", project.color)} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Footer CTA (restyled for blob contrast) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-24"
        >
          <a 
            className="cosmic-button inline-flex items-center gap-4 py-5 px-10 text-xl font-black group relative overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] bg-primary text-primary-foreground rounded-full" 
            href="https://github.com/jasppankaj" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative z-10 flex items-center gap-2">
              Dive into Codebase <GithubIcon size={22} />
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};