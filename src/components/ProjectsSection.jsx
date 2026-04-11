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
  Wallet,
} from "lucide-react";
import { cn } from "../lib/util";

// --- Projects Data Definition ---
const projects = [
  {
    id: 1,
    title: "Prabodha By AKS",
    description:
      "A fully responsive, modern website for AKS INDIA GROUP. Features smooth animations and optimized performance to showcase Yoga and meditation services effectively.",
    image: "projects/prabodha.png",
    tags: ["React", "Tailwind Css", "Framer Motion", "Hostinger"],
    demoUrl: "https://prabodhaaks.com/",
    githubUrl: "#",
    icon: <Globe size={20} />,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Elevare",
    description:
      "AI-powered career guidance app using OpenAI for smart recommendations, Django REST API with Google Auth, and a responsive React frontend.",
    image: "projects/project6.png",
    tags: ["Django", "Python", "PostgreSQL", "OpenAI", "React"],
    demoUrl: "https://jasppankaj.github.io/elevare/",
    githubUrl: "https://github.com/jaspPankaj/elevareProject",
    icon: <Rocket size={20} />,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Capsons Website",
    description:
      "Global leather apparel manufacturer website. Focused on clean UI, mobile responsiveness, and service-oriented layout using Wordpress.",
    image: "projects/project3.png",
    tags: ["Wordpress", "cPanel", "HTML", "CSS"],
    demoUrl: "https://capsons.com/",
    githubUrl: "#",
    icon: <Database size={20} />,
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    id: 4,
    title: "Weekly Muse",
    description:
      "A sleek, intuitive web-based calculator for basic arithmetic. Optimized for both desktop and mobile with a Python/Django backend.",
    image: "projects/image.png",
    tags: ["Python", "Django", "Full Stack"],
    demoUrl: "https://theweeklymuse.onrender.com/",
    githubUrl: "#",
    icon: <Calculator size={20} />,
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    id: 5,
    title: "Expense Tracker",
    description:
      "Dynamic finance management app with visual analytics using Syncfusion. Built with ASP.NET and SQL Server for robust data handling.",
    image: "projects/project2.png",
    tags: ["ASP.NET", "SQL Server", "Syncfusion"],
    demoUrl: "#",
    githubUrl: "https://github.com/jaspPankaj/Expense-Tracker",
    icon: <Wallet size={20} />,
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    id: 6,
    title: "Weather App",
    description:
      "Real-time weather dashboard showing humidity, wind speed, and forecasts using OpenWeather API with location detection.",
    image: "projects/project4.png",
    tags: ["React Vite", "Tailwindcss", "API"],
    demoUrl: "https://jasppankaj.github.io/weather/",
    githubUrl: "https://github.com/jaspPankaj/weather",
    icon: <CloudSun size={20} />,
    color: "from-sky-400/20 to-blue-400/20",
  },
];


export const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="mainContainer">

      <div className="container insideContainer">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
            <Code2 size={14} className="animate-pulse" /> Engineering Portfolio
          </div>
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter leading-tight">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Innovations
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light tracking-wide">
            Each project is a unique artifact blending logic with aesthetic elegance.
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
              whileHover={{ y: -10 }}
              className="group relative h-full"
            >
              <div className="relative h-full bg-card/40 backdrop-blur-3xl rounded-[2.2rem] overflow-hidden border border-border/50 shadow-2xl flex flex-col z-10 transition-all duration-500 hover:border-primary/40 hover:bg-card/60">
                
                {/* Media Section */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent z-10 opacity-60" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 p-3 rounded-2xl bg-background/80 backdrop-blur-md border border-white/10 text-primary shadow-lg transition-transform duration-500 group-hover:rotate-12">
                    {project.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase rounded-lg border border-primary/20 bg-primary/5 text-primary/80">
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

                  {/* Footer Actions */}
                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-border/50">
                    <div className="flex gap-2">
                      {project.demoUrl !== "#" && (
                        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-foreground/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                          <ExternalLink size={18} strokeWidth={1.5} />
                        </a>
                      )}
                      {project.githubUrl !== "#" && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-foreground/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                          <GithubIcon size={18} strokeWidth={1.5} />
                        </a>
                      )}
                    </div>

                    <a href={project.demoUrl !== "#" ? project.demoUrl : project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary group-hover:gap-4 transition-all">
                      View Work <ArrowRight size={14} strokeWidth={3} />
                    </a>
                  </div>

                  {/* Subtle Project-Specific Glow */}
                  <div className={cn("absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-br", project.color)} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-24"
        >
          <a
            className="inline-flex items-center gap-4 py-5 px-10 text-xl font-black bg-primary text-primary-foreground rounded-full shadow-2xl transition-all duration-300 hover:shadow-primary/40 hover:scale-105"
            href="https://github.com/jasppankaj"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dive into Codebase <GithubIcon size={22} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};