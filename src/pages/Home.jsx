import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import {NavBar} from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ParticleBackground } from "../components/ParticleBackground";
import { BackgroundLines } from "../components/BackgroundLines";
import { Certification } from "../components/ui/Certification";
import { CertificationSection } from "../components/CertificationSection";

export const Home = () => {
    return <div className="min-h-screen bg-background text-forehead overflow_x_hidden">

        <ThemeToggle />
        {/* Background Effact Code */}
        {/* <StarBackground /> */}
        <ParticleBackground />
        {/* <BackgroundLines /> */}

        {/* Nav Bar  Code */}
        <NavBar />
        {/* Main Content Code */}
        <main>
            
            <HeroSection />
            <AboutSection />
            <SkillsSection/>
            <ProjectsSection />
            <CertificationSection />
            <ContactSection />
            
        </main>
        {/* Footer Code */}
            <Footer />
    </div>
}