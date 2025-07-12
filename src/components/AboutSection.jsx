import { cn } from "../lib/util";
import{ Briefcase, Code, User } from "lucide-react";


export const AboutSection = () =>{
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl ">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-floatY">
                    <h3 className="text-2xl font-semibold">Passionate Full Stack Developer</h3>

                    <p className="text-muted-foreground">
                        i am working since 2015 on diffrent technologies
                        and i am still learning few of them.
                    </p>

                    <p className="text-muted-foreground">
                        i can use so many technology to develope 
                        diffrent things that i do with all my intrest.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> Get In Touch</a>
                        <a href="#" className={cn("px-6 py-2 rounded-full border border-primary",
                                                    "text-primary hover:bg-primary/40 transition-all duration-300"
                        )}> Download Resume</a>
                    </div>

                </div>

                <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover animate-float">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Full Stack Developer</h4>
                                    <p className="text-muted-foreground">
                                        Create Responsive Website with latest technologies like React,Django python,MySql.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover animate-float">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">ASP.NET Developer</h4>
                                    <p className="text-muted-foreground">
                                        5+ Year experience in .NET Framework. Worked with ASP.NET MVC with SQL Server. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover animate-float">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Backend Developer</h4>
                                    <p className="text-muted-foreground">
                                        Meta Certified Backend Developer. 
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

        </div>
    </section>
};