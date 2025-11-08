import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

type Project = {
    id: string;
    title: string;
    description: string;
    video: string;
    tech: string[];
    live?: string;
    repo?: string;
};

const projects: Project[] = [
    {
        id: "1",
        title: "Rhyno EV — Electric Vehicle Platform | Compare",
        description:
            "A sleek product website showcasing an EV brand with comparisons, dynamic UI, and responsive design.",
        video: "src/assets/videos/rhyno.mp4",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        live: "https://rhynoevyamansproject.netlify.app/",
        repo: "https://github.com/Yamankhan23/Rhynoev",
    },
    {
        id: "2",
        title: "BookIt — Full Stack Booking Platform",
        description:
            "A complete booking app with room listings, filtering, and seamless integration between front end and backend APIs.",
        video: "src/assets/videos/bookit.mp4",
        tech: ["React", "Express.js", "MongoDB", "PostgreSQL"],
        live: "https://bookityaman.netlify.app/",
        repo: "https://github.com/Yamankhan23/bookit",
    },
    {
        id: "3",
        title: "Referral System — MERN + TypeScript",
        description:
            "Referral Management App enabling users to register, generate codes, earn credits, and make purchases — designed for smooth UX and maintainable architecture.",
        video: "src/assets/videos/referral.mp4",
        tech: ["TypeScript", "React", "Node.js", "Express"],
        live: "https://fullstack-referral-app.vercel.app/",
        repo: "https://github.com/Yamankhan23/fullstack-referral-app",
    },
];

const Projects: React.FC = () => {
    return (
        <section
            id="projects"
            className="min-h-screen py-24 flex flex-col items-center justify-center bg-lightBg dark:bg-darkBg"
        >
            <div className="max-w-6xl mx-auto px-6 w-full">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-primary text-center"
                >
                    Featured Projects
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center text-lightSecondaryText dark:text-darkSecondaryText mt-3 max-w-2xl mx-auto"
                >
                    A selection of my recent full-stack and front-end projects that emphasize
                    clean design, scalability, and performance.
                </motion.p>

                {/* Cards Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
