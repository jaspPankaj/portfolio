import Particles from "./ui/Particles";

export const ParticleBackground = () => {

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">           
                <Particles
                    particleColors={['#569c18ff', '#34a41dff']}
                    particleCount={300}
                    particleSpread={15}
                    speed={0.1}
                    particleBaseSize={150}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
           
        </div>)

};