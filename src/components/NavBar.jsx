import { useEffect, useState } from "react";
import { cn } from "../lib/util";
import{ X, Menu } from "lucide-react";



const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skill" },
    { name: "Project", href: "#project" },
    { name: "Certifications", href: "#certificates" },
    { name: "Contacts", href: "#contact" }

];

export const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen,setIsMenuOpen]= useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    })

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-4 bg-background/80 background-blur-md shadow-xs" : "py-5"

        )}>
            {/* Destop Version */}
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bond text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Pankaj</span> Portfolio
                    </span>
                </a>

                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                <button onClick={()=> setIsMenuOpen((prev) => !prev)}
                        className="md:hidden p-2 text-foreground z-40">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>    
                {/* Mobile Version */} 
                <div className={cn(
                    "fixed inset-0 bg-background/95 background-blur-md z-1000 flex flex-col items-center",
                    "justify-center transition-all duration-300 md:hidden",
                    isMenuOpen ?
                        "opacity-100 pointer-events-auto" :
                        "opacity-0 pointer-events-none"
                    )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

            </div>




        </nav>
    );
}