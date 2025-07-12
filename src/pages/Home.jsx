import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackgriund";
import {NavBar} from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";


export const Home = () => {
    return <div className="min-h-screen bg-background text-forehead overflow_x_hidden">

        {/* Theme Toggele Code */}
        <ThemeToggle />
        {/* Background Effact Code */}
        <StarBackground />
        {/* Nav Bar  Code */}
        <NavBar />
        {/* Main Content Code */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection/>
            <ProjectsSection />
            <ContactSection />
        </main>
        {/* Footer Code */}

    </div>
}