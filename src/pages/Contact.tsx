import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

const Contact: React.FC = () => {
    return (
        <section
            id="contact"
            className="min-h-screen py-24 flex flex-col items-center justify-center section-surface"
        >
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-primary"
                >
                    Let’s Connect
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-4 text-lightSecondaryText dark:text-darkSecondaryText text-lg max-w-2xl mx-auto"
                >
                    Whether you’re looking to collaborate, discuss a project, or just want to
                    connect — feel free to reach out!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-10 flex justify-center gap-6"
                >
                    <a
                        href="https://www.linkedin.com/in/yamankhan29/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#007AFF] transition"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={30} />
                    </a>
                    <a
                        href="https://github.com/Yamankhan23"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#3A86FF] transition"
                        aria-label="GitHub"
                    >
                        <Github size={30} />
                    </a>
                    <a
                        href="https://www.instagram.com/bestofworld786/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#FF6B6B] transition"
                        aria-label="Instagram"
                    >
                        <Instagram size={30} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <a
                        href="mailto:khanyaman2000@gmail.com"
                        className="inline-block bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-accentBlue transition"
                    >
                        Send Email
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
