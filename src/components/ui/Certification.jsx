import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Target } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";


export const Certification = ({
    certificates,
    autoplay = false
}) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % certificates.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + certificates.length) % certificates.length);
    };

    const isActive = (index) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10;
    };
    return (
        <div
            className="mx-auto max-w-sm px-4 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
            <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
                <div>
                    <div className="relative h-80 w-full">
                        <AnimatePresence>
                            {certificates.map((certificate, index) => (
                                <motion.div
                                    key={certificate.src}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: randomRotateY(),
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index) ? 0 : randomRotateY(),
                                        zIndex: isActive(index)
                                            ? 40
                                            : certificates.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: randomRotateY(),
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom">
                                    <img
                                        src={certificate.src}
                                        alt={certificate.name}
                                        width={500}
                                        height={500}
                                        draggable={false}
                                        className="h-full w-full rounded-3xl object-center" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                    <div className="flex gap-4 pt-6 md:pt-0 mt-4 space-x-10">
                        <button
                            onClick={handlePrev}
                            className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                            <IconArrowLeft
                                className="h-6 w-6 text-foreground transition-transform duration-300 group-hover/button:rotate-12" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                            <IconArrowRight
                                className="h-6 w-6 text-foreground transition-transform duration-300 group-hover/button:-rotate-12" />
                        </button>
                    </div>
                    <div className="mt-8">
                        <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                            href={certificates[active].url} target="_blank">
                            Click To View<ExternalLink size={16} />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-between py-4 text-left">
                    <motion.div
                        key={active}
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -20,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}>
                        <h3 className="text-2xl font-bold text-foreground">
                            {certificates[active].name}
                        </h3>
                        <p className="text-lg font-semibold text-primary">
                            {certificates[active].issuedBy}
                        </p>
                        <div className="mt-4">
                            <div className="flex flex-wrap gap-2">
                                {certificates[active].skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 text-xs font-medium border rounded-full bg-muted text-muted-foreground"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <motion.p className="text-lg text-foreground mt-4">
                            {certificates[active].description.split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{
                                        filter: "blur(10px)",
                                        opacity: 0,
                                        y: 5,
                                    }}
                                    animate={{
                                        filter: "blur(0px)",
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                        delay: 0.02 * index,
                                    }}
                                    className="inline-block">
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
