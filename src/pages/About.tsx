import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
    return (
        <section
            id="about"
            className="min-h-screen py-24 flex flex-col items-center justify-center section-surface"
        >
            <div className="max-w-5xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-primary"
                >
                    About Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-6 text-lightSecondaryText dark:text-darkSecondaryText text-lg leading-relaxed max-w-3xl mx-auto"
                >
                    I’m <span className="text-primary font-medium">Yaman Khan</span>, a passionate{" "}
                    <span className="text-primary font-medium">Full Stack Developer</span> who
                    thrives on building modern, clean, and high-performance web applications.
                    I specialize in crafting seamless front-end experiences using{" "}
                    <span className="font-medium text-primary">React</span>,{" "}
                    <span className="font-medium text-primary">TypeScript</span>, and{" "}
                    <span className="font-medium text-primary">Tailwind CSS</span>, backed by
                    scalable backends powered by{" "}
                    <span className="font-medium text-primary">Node.js</span> and{" "}
                    <span className="font-medium text-primary">MongoDB</span>.
                    <br />
                    <br />
                    Over the past year, I’ve developed full-stack projects like{" "}
                    <span className="text-primary font-medium">Rhyno EV</span>,{" "}
                    <span className="text-primary font-medium">BookIt</span>, and{" "}
                    <span className="text-primary font-medium">Referral System</span>, each built with a focus on performance,
                    functionality, and user-centric design.
                </motion.p>
            </div>
        </section>
    );
};

export default About;
