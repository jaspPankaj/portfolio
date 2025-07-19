import { Certification } from "./ui/Certification";


const certificates = [
    {
      name: "Full Stack",
      issuedBy: "Meta",
      skills:["HTML","CSS","JS", "Python","Django"],
      description:"Completed a comprehensive course by Meta via Coursera. Learned to build and deploy full stack web applications using HTML, CSS, JavaScript, Python and Django. Gained hands-on experience in configuring development environments and building full stack apps, including with Django.",
      src: "certificates/MetaFullStack.png",
      url:"https://www.coursera.org/account/accomplishments/verify/M46BF5B2KBIP",
      
    },
    {
      name: "Introduction to Databases",
      issuedBy: "Meta",
      skills:["SQL"],
      description:"Completed a comprehensive course by Meta via Coursera. Learned concepts and principles that underpin how databases work and Plan and execute a simple database development project .",
      src: "certificates/MetaSQL.png",
      url:"https://www.coursera.org/account/accomplishments/verify/LL362UKCQU6B",
      
    },
    {
      name: "React Basics",
      issuedBy: "Meta",
      skills:["React","JS"],
      description:"Completed a comprehensive course by Meta via Coursera. Learned to  Create dynamic and interactive web pages and apps, Organize React projects to create more scalable and maintainable websites and apps adn Use forms to allow users to interact with the app. Build an application in React",
      src: "certificates/MetaReact.png",
      url:"https://coursera.org/verify/TZ2QSTQU0XM0",
      
    },
    { 
      name: "Version Control",
      issuedBy: "Meta",
      skills:["Git", "Github"],
      description: "Version Control course, an online non-credit program offered by Meta through Coursera. Learned to how to use a frontend framework that is built on top of CSS to design web apps and main features of Bootstrap.",
      src: "certificates/MetaVersionControl.png",
      url:"https://www.coursera.org/account/accomplishments/verify/5X984GWL3U9P",
      
    },
    { 
      name: "Bootstrap",
      issuedBy: "SCRIMBA",
      skills:["Bootstrap", "UI"],
      description: "Version Control course, an online program offered by Scrimba through Coursera. The course covered essential concepts and tools for managing code changes using Git and GitHub.",
      src: "certificates/BootstraepScrimba.png",
      url:"https://www.coursera.org/account/accomplishments/verify/AFYTCE1A2EYN",
      
    },
  ];
export function CertificationSection() {
  
  return (
        <section id="certificates" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Featured <span className="text-primary">Certifications  </span>
                </h2>
                <Certification certificates={certificates} />
                
            </div>
        </section>

  );
}
