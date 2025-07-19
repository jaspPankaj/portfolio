import { Certification } from "./ui/Certification";


const certificates = [
    {
        
      quote:
        "Completed a comprehensive course by Meta via Coursera. Learned to build and deploy full stack web applications using HTML, CSS, JavaScript, Python and Django. Gained hands-on experience in configuring development environments and building full stack apps, including with Django.",
      name: "Full Stack",
      designation: "Meta",
      src: "certificates/MetaFullStack.png",
      url:"https://www.coursera.org/account/accomplishments/verify/M46BF5B2KBIP",
    },
    {
        
      quote:
        "Version Control course, an online non-credit program offered by Meta through Coursera. The course covered essential concepts and tools for managing code changes using Git and GitHub.",
      name: "Version Control",
      designation: "Meta",
      src: "certificates/MetaVersionControl.png",
      url:"https://www.coursera.org/account/accomplishments/verify/5X984GWL3U9P"
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
