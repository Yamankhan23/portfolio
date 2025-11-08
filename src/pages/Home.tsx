import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Home: React.FC = () => {
    return (
        <section
            id="home"
            className="relative flex flex-col justify-center items-center text-center h-screen overflow-hidden bg-gradient-to-b from-[#F9F9FB] to-white dark:from-[#121212] dark:to-[#1F1F1F] transition-colors duration-700"
        >
            {/* Subtle animated background glow */}
            <motion.div
                className="absolute inset-0 -z-10 opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 2 }}
                style={{
                    background:
                        "radial-gradient(circle at 50% 30%, rgba(0,122,255,0.25) 0%, transparent 70%)",
                }}
            />

            {/* Intro text */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary"
            >
                Hey, I’m <span className="text-accent">Yaman Khan</span>
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
                className="mt-4 text-xl md:text-2xl text-lightSecondaryText dark:text-darkSecondaryText max-w-xl"
            >
                I craft interactive, performance-driven web experiences with precision
                and creativity.
            </motion.h2>

            {/* CTA Buttons */}
            <motion.div
                className="mt-8 flex gap-4 flex-wrap justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.9 }}
            >
                <a
                    href="#projects"
                    className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:opacity-90 transition shadow-lg shadow-blue-500/30"
                >
                    View My Work
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition"
                >
                    Contact Me
                </a>
            </motion.div>

            {/* Animated arrow indicator */}
            <motion.div
                className="absolute bottom-8 flex justify-center"
                animate={{ y: [0, 8, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                }}
            >
                <ArrowDown className="w-6 h-6 text-primary" />
            </motion.div>
        </section>
    );
};

export default Home;
