
import {NavBar} from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ParticleBackground } from "../components/ParticleBackground";
import { CertificationSection } from "../components/CertificationSection";
import { Hobbies } from "../components/Hobbies";

export const Home = () => {
    return <>      

        {/* Background Effact Code */}
        <ParticleBackground />

        {/* Nav Bar  Code */}
        <NavBar />

        {/* Main Content Code */}
        <main >            
            <section id="hero"><HeroSection /></section>
            <section id="about"><AboutSection /></section>
            <section id="skill"><SkillsSection/></section>
            <section id="project"><ProjectsSection /></section>
            <section id="certificates"><CertificationSection /></section>
            <section id="hobbies"><Hobbies /></section>
            <section id="contact"><ContactSection /></section>
        </main>
        
        {/* Footer Code */}
            <Footer />
    </>
}