import { useState } from "react";
import { cn } from "../lib/util";

const skills=[
    //Front End 
    {name:"HTML5",level:80,category:"Front End"},
    {name:"CSS3",level:80,category:"Front End"},
    {name:"Java Script",level:60,category:"Front End"},
    {name:"React",level:50,category:"Front End"},
    {name:"Tailwind",level:50,category:"Front End"},

    //Language
    {name:"C++",level:60,category:"language"},
    {name:"C#",level:70,category:"language"},
    {name:"Python",level:60,category:"language"},

    //Backend 
    {name:"MySql",level:70,category:"Backend"},
    {name:"postgresSQL",level:60,category:"Backend"},
    {name:"MS SQL Server",level:75,category:"Backend"},

    //Framework
    {name:"Bootstrap",level:80,category:"framework"},
    {name:"ASP.NET MVC",level:80,category:"framework"},
    {name:"Django Python",level:80,category:"framework"},
    
    //Tools
    {name:"Github",level:60,category:"tools"},
    {name:"Figma",level:50,category:"tools"},
    {name:"Canva",level:70,category:"tools"},
    {name:"VS Code",level:80,category:"tools"},
    {name:"Visual Studio",level:80,category:"tools"},

];

const categories=["all", "Front End", "language","Backend" ,"framework","tools"]


export const SkillsSection =()=>{

    const[activecategory,setActiveCategory]=useState("all");

    const filterSkills = skills.filter((skill) => activecategory === "all" || skill.category === activecategory)


    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl ">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key)=>(
                    <button
                        onClick={()=> setActiveCategory(category)} 
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                    activecategory === category ? "bg-primary text-primary-foreground" 
                                                                : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>{category}</button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterSkills.map((skill,key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h2 className="font-semibold text-lg">{skill.name}</h2>
                        </div>

                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate[grow_1.5s_ease_out]" 
                                 style={{width: skill.level + "%"}}/>
                        </div>
                        <div className="text-right mt-1">
                            <span text-sm text-muted-foreground>{skill.level +"%"}</span>
                        </div>

                    </div>
                ))}
            </div>
            

        </div>
    </section>
};