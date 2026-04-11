import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Award, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "../lib/util";

const certificates = [
  {
    name: "Full Stack Developer",
    issuedBy: "Meta",
    skills: ["React", "Python", "Django", "PostgreSQL"],
    description: "Mastered end-to-end web architecture and deployment strategies.",
    url: "https://www.coursera.org/account/accomplishments/verify/M46BF5B2KBIP",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "React Basics",
    issuedBy: "Meta",
    skills: ["Hooks", "JSX", "Virtual DOM"],
    description: "Deep dive into component-based UI and state management.",
    url: "https://coursera.org/verify/TZ2QSTQU0XM0",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    name: "Database Systems",
    issuedBy: "Meta",
    skills: ["SQL", "Data Modeling", "Optimization"],
    description: "Expertise in designing scalable relational database schemas.",
    url: "https://www.coursera.org/account/accomplishments/verify/LL362UKCQU6B",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    name: "MICROSOFT CERTIFIED PROFESSIONAL",
    issuedBy: "MICROSOFT",
    skills: ["CERTIFIED PROFESSIONAL" ],
    description: "Microsoft Certified Professional (MCP) with foundational expertise in Microsoft technologies and core IT concepts, including implementation and troubleshooting of solutions.",
    url: "#",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "ASP.NET MVC",
    issuedBy: "MICROSOFT",
    skills: ["ASP.NET", "MVC"],
    description: "Developing ASP.NET MVC Web Applications",
    url: "#",
    color: "from-purple-500/20 to-pink-500/20"
  },
  
  {
    name: "Meta Certified Version Control",
    issuedBy: "Meta",
    skills: ["GIT", "Version Control" ],
    description: "Implement Version Control systems, Use a GitHub repository. Create a GitHub repository",
    url: "https://www.coursera.org/account/accomplishments/verify/5X984GWL3U9P",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "Programming in Python",
    issuedBy: "Meta",
    skills: ["Python", "Django (Web Framework)", "Data Structures"],
    description: "Foundational programming skills with basic Python Syntax.",
    url: "https://www.coursera.org/account/accomplishments/verify/A81AS1G8WM1J",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    name: "Django Web Framework",
    issuedBy: "META",
    skills: ["Django (Web Framework)", "Web Applications","Back-End Web Development","Model View Controller"],
    description: "Build a web server, Data modeling , Implement web security best practices",
    url: "https://www.coursera.org/account/accomplishments/verify/C70O7MANXIGI",
    color: "from-purple-500/20 to-pink-500/20"
  },
   {
    name: "Back-End Development",
    issuedBy: "Meta",
    skills: ["Back-End", "Development","HTML", "CSS", "UI FRAMEWORK" ],
    description: "Distinguish between front-end, back-end, and full-stack developers.",
    url: "https://www.coursera.org/account/accomplishments/verify/PLN1PW9SIRG2",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    name: "Databases for Back-End Development",
    issuedBy: "Meta",
    skills: ["MySQL", "Database Management Systems", "Query Languages","Databases"],
    description: "Concepts and principles that underpin how databases work. Plan and execute a simple database development project.",
    url: "https://www.coursera.org/account/accomplishments/verify/A81AS1G8WM1J",
    color: "from-emerald-500/20 to-teal-500/20"
  },
];

export function CertificationSection() {
  const displayCerts = [...certificates, ...certificates]; // Double for infinite scroll

  return (
    <div className="mainContainer">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0,transparent_70%)]" />

      <div className="container insideContainer relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-tighter mb-4">
            <ShieldCheck size={14} /> 100% Verified Credentials
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Proven <span className="text-primary text-glow italic">Capabilities</span>
          </h2>
        </motion.div>
      </div>

      {/* The Infinite 3D Carousel */}
      <div className="flex overflow-hidden py-12 select-none group">
        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {displayCerts.map((cert, idx) => (
            <CertificationCard key={idx} cert={cert} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function CertificationCard({ cert }) {
  return (
    <motion.div 
      whileHover={{ y: -10, rotateY: 5, rotateX: 5 }}
      className="w-[380px] md:w-[420px] shrink-0 perspective-1000"
    >
      <div className={cn(
        "relative h-full rounded-3xl p-[1.5px] overflow-hidden bg-gradient-to-br border border-white/10 shadow-2xl",
        "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.15)_0%,transparent_80%)]"
      )}>
        {/* Card Body */}
        <div className="bg-card/90 backdrop-blur-2xl rounded-[22px] p-8 h-full flex flex-col border border-white/5">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-inner">
              <Award className="text-primary w-8 h-8" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col items-end">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">Issued By</span>
                <span className="text-sm font-bold text-foreground bg-foreground/5 px-3 py-1 rounded-lg border border-white/5">{cert.issuedBy}</span>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-3 mb-8">
            <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
              {cert.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {cert.description}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="flex flex-wrap gap-2 mb-8">
            {cert.skills.map(skill => (
              <span key={skill} className="flex items-center gap-1.5 text-[11px] font-semibold py-1 px-2.5 rounded-md bg-primary/5 border border-primary/10 text-primary/80">
                <Sparkles size={10} /> {skill}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-auto">
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Verify Credential <ExternalLink size={16} />
            </a>
          </div>

          {/* Background Texture/Light */}
          <div className={cn("absolute -z-10 inset-0 bg-gradient-to-br opacity-10", cert.color)} />
        </div>
      </div>
    </motion.div>
  );
}