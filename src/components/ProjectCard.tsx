import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
    id: string;
    title: string;
    description: string;
    video: string;
    tech: string[];
    live?: string;
    repo?: string;

}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl overflow-hidden bg-white/5 dark:bg-black/20 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10"
        >
            <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-56 object-cover"
                style={project.id === "3" ? { objectPosition: "center -1px" } : {}}
            />
            <div className="p-5">
                <h3 className="text-lg font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-sm text-lightSecondaryText dark:text-darkSecondaryText mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                            <ExternalLink size={16} /> Live
                        </a>
                    )}
                    {project.repo && (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                            <Github size={16} /> Code
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
