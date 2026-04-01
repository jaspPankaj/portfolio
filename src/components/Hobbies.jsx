import { motion } from 'framer-motion';
import { Trophy, Video, Gamepad2, PenTool, Sparkles, ExternalLink } from 'lucide-react';
import { cn } from "../lib/util";

const hobbies = [
  {
    id: 1,
    title: "National Athlete",
    desc: "Basketball Player",
    icon: <Trophy size={28} />,
    gridClass: "md:col-span-2 md:row-span-2", // Large Featured Card
    bg: "bg-orange-500/10",
    border: "group-hover:border-orange-500/50",
    media: "/portfolio/Hobbies/Basketball.jpg" 
  },
  {
    id: 2,
    title: "Content Creator",
    desc: "Tech & Lifestyle",
    icon: <PenTool size={24} />,
    gridClass: "md:col-span-2 md:row-span-1", // Wide Card
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    media: "/portfolio/Hobbies/Content.png"
  },
  {
    id: 3,
    title: "Video Editor",
    desc: "Premiere & AE",
    icon: <Video size={24} />,
    gridClass: "md:col-span-1 md:row-span-1", // Small Square
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50",
    media: "/portfolio/Hobbies/Editing.jpg"
  },
  {
    id: 4,
    title: "Esports",
    desc: "Competitive",
    icon: <Gamepad2 size={24} />,
    gridClass: "md:col-span-1 md:row-span-1", // Small Square
    bg: "bg-red-500/10",
    border: "group-hover:border-red-500/50",
    media: "/portfolio/Hobbies/Egame.jpg"
  }
];

export const Hobbies = () => {
  return (
    <section id="hobbies" className="py-24 px-4 bg-background overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center lg:items-start mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.3em] uppercase">
            <Sparkles size={14} /> Lifestyle
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-glow">
            Beyond <span className="text-primary italic">The Code</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full md:h-[600px]">
          {hobbies.map((hobby) => (
            <motion.div
              key={hobby.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={cn(
                "relative group overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-500",
                hobby.gridClass,
                hobby.border
              )}
            >
              {/* Media Background */}
              <div className="absolute inset-0 z-0">
                {hobby.media.endsWith('.mp4') ? (
                  <video 
                    src={hobby.media} autoPlay loop muted playsInline 
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-60 transition-opacity duration-700"
                  />
                ) : (
                  <img 
                    src={hobby.media} alt={hobby.title} 
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-60 transition-opacity duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                <div className={cn("w-fit p-3 rounded-2xl backdrop-blur-md border border-white/10 animate-float", hobby.bg)}>
                  {hobby.icon}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                    {hobby.title}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium italic">{hobby.desc}</p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};