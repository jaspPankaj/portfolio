
import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "I’ve built a responsive, modern portfolio that highlights my frontend development skills with React and Tailwind CSS.",
    image: "projects/project1.png",
    tags: ["React", "Tailwind"],
    demoUrl: "#",
    githubUrl: "https://github.com/jaspPankaj/portfolio"
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: " developed a dynamic and responsive Expense Tracker web application that enables users to manage their finances effectively while providing visual analytics using Syncfusion.",
    image: "projects/project2.png",
    tags: ["ASP.NET", "SQL Server","Syncfusion"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Capsons Website",
    description: "Capsons Website – Designed and developed the responsive website for Capsons Co., a global leather apparel manufacturer. Focused on clean UI, mobile responsiveness, and service-oriented layout using Wordpress.",
    image: "projects/project3.png",
    tags: ["Wordpress", "cPanel", "HTML","CSS"],
    demoUrl: "https://capsons.com/",
    githubUrl: "#"
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects  </span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Each projects was carefully 
          crafted with attention to detail,performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* tags */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Now Project Title */}
                <h2 className="text-xl font-semibold mb-1">{project.title}</h2>

                {/* Project Description */}
                <p className="text-muted-foreground text-sm mb-4 text-justify">{project.description}</p>

                {/* Project Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                        <a href={project.demoUrl}
                            target="_blank"
                           className=" text-forground/80 hover:text-primary transition-colors duration-300">
                        <ExternalLink size={20}/>
                        </a> 
                        <a href={project.githubUrl}
                            target="_blank" 
                           className=" text-forground/80 hover:text-primary transition-colors duration-300">
                        <GithubIcon size={20}/>
                        </a>      
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
            href="https://github.com/jasppankaj" target="_blank">
                Check My Github <ArrowRight size={16}/>
            </a>
        </div>

      </div>
    </section>
  );
};
