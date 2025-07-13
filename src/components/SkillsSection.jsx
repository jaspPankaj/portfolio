import { useState } from "react";
import { cn } from "../lib/util";

const skills = [
    //Front End 
    { id: 1, name: "HTML5", category: "frontend", url: "skills/html.png" },
    { id: 2, name: "CSS3", category: "frontend", url: "skills/css.png" },
    { id: 3, name: "Java Script", category: "frontend", url: "skills/js.png" },
    { id: 4, name: "Bootstrap", category: "frontend", url: "skills/bootstrap.png" },
    { id: 5, name: "React", category: "frontend", url: "skills/react.png" },
    { id: 6, name: "Tailwind", category: "frontend", url: "skills/tailwind.png" },
    { id: 7, name: "C++", category: "language", url: "skills/c++.png" },
    { id: 8, name: "c#", category: "language", url: "skills/csharp.png" },
    { id: 9, name: "Python", category: "language", url: "skills/python.png" },
    { id: 10, name: "ASP.NET MVC", category: "backend", url: "skills/asp.png" },
    { id: 11, name: "Django", category: "backend", url: "skills/django.png" },
    { id: 12, name: "SQL", category: "backend", url: "skills/sql.png" },
    { id: 13, name: "Github", category: "tools", url: "skills/github.png" },
    { id: 14, name: "VS Code", category: "tools", url: "skills/vscode.png" },
    { id: 15, name: "Visual Studio", category: "tools", url: "skills/visualstudio.png" },
    { id: 16, name: "Figma", category: "tools", url: "skills/figma.png" },
    { id: 17, name: "Visual Studio", category: "tools", url: "skills/canva.png" },
    { id: 18, name: "Wordpress", category: "tools", url: "skills/wordpress.png" },

];

const categories = ["all", "frontend", "language", "backend", "tools"]


export const SkillsSection = () => {

    const [activecategory, setActiveCategory] = useState("all");

    const filterSkills = skills.filter((skill) => activecategory === "all" || skill.category === activecategory)


    return <section id="skill" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl ">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                        onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activecategory === category ? "bg-primary text-primary-foreground"
                                : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>{category}</button>
                ))}
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {filterSkills.map((skill, id) => (
                    <div key={id} className={cn("flex flex-col justify-center items-center  bg-primary/20 rounded-lg shadow-xs",
                                                "transition-all duration-300 ease-in-out transform", 
                                                "hover:scale-110 hover:shadow-md hover:shadow-primary hover:border-primary hover:border-1")}>

                        {/* Image */}
                        <div className="w-24 h-24 overflow-hidden rounded-lg p-2 flex items-center justify-center">
                            <img
                                src={skill.url}
                                alt={skill.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="text-center mb-4">
                            <h2 className="font-semibold text-lg">{skill.name}</h2>
                        </div>

                    </div>
                ))}
            </div>


        </div>
    </section>
};