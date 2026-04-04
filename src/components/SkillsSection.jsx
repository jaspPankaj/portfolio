import { useState, useEffect } from "react";
import { cn } from "../lib/util";

const skills = [
    { id: 1, name: "HTML5", url: "skills/html.png" },
    { id: 2, name: "CSS3", url: "skills/css.png" },
    { id: 3, name: "JavaScript", url: "skills/js.png" },
    { id: 4, name: "Bootstrap", url: "skills/bootstrap.png" },
    { id: 5, name: "React", url: "skills/react.png" },
    { id: 6, name: "Tailwind", url: "skills/tailwind.png" },
    { id: 7, name: "C++", url: "skills/c++.png" },
    { id: 8, name: "C#", url: "skills/csharp.png" },
    { id: 9, name: "Python", url: "skills/python.png" },
    { id: 10, name: "ASP.NET", url: "skills/asp.png" },
    { id: 11, name: "Django", url: "skills/django.png" },
    { id: 12, name: "SQL", url: "skills/sql.png" },
    { id: 13, name: "Github", url: "skills/github.png" },
    { id: 14, name: "VS Code", url: "skills/vscode.png" },
    { id: 15, name: "Visual Studio", url: "skills/visualstudio.png" },
    { id: 16, name: "Figma", url: "skills/figma.png" },
    { id: 17, name: "Canva", url: "skills/canva.png" },
    { id: 18, name: "Wordpress", url: "skills/wordpress.png" },
];

const FloatingLogo = ({ skill }) => {
    // Positioning logic
    const [position, setPosition] = useState({
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
    });

    useEffect(() => {
        const move = () => {
            setPosition({
                x: Math.random() * 80 + 10,
                y: Math.random() * 80 + 10,
            });
        };
        const interval = setInterval(move, 5000 + Math.random() * 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="absolute transition-all duration-[7000ms] ease-in-out flex flex-col items-center group cursor-pointer"
            style={{ left: `${position.x}%`, top: `${position.y}%` }}
        >
            {/* Using your animate-float from CSS and card-hover utility */}
            <div className="relative w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-card/30 border border-border backdrop-blur-md animate-float group-hover:scale-110 group-hover:border-primary group-hover:bg-card transition-all duration-500 shadow-sm">
                <img 
                    src={skill.url} 
                    alt={skill.name} 
                    className="w-10 h-10 md:w-12 md:h-12 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                />
                
                {/* Tooltip using primary colors from your CSS */}
                <span className="absolute -bottom-10 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                    {skill.name}
                </span>
            </div>
        </div>
    );
};

export const SkillsSection = () => {
    return (
        <div className="mainContainer">
            {/* Background Bloom/Glow effects using your utility */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[120px] animate-bloom pointer-events-none" />
            
            <div className="container insideContainer">
                <div className="text-center mb-8 animate-fade-in">
                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-glow">
                        My <span className="text-primary">Expertise</span>
                    </h2>
                    <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                        Innovative tools and languages I leverage to build modern web experiences.
                    </p>
                </div>

                {/* The Main Canvas */}
                <div className="relative h-[500px] md:h-[650px] w-full rounded-[2.5rem] bg-card/20 border border-border overflow-hidden shadow-2xl backdrop-blur-sm animate-fade-in-delay-1">
                    
                    {/* Ghosted Center Text */}
                    <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                        <h3 className="text-[8vw] font-black text-primary opacity-[0.06] leading-none tracking-widest uppercase">
                            Full stack
                        </h3>
                    </div>

                    {/* Skill Cloud */}
                    {skills.map((skill) => (
                        <FloatingLogo key={skill.id} skill={skill} />
                    ))}

                    {/* Vignette effect for depth */}
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(0,0,0,0.05)_100%)]" />
                </div>
            </div>
        </div>
    );
};