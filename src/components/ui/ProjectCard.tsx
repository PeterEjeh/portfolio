"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Info, Construction } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProjectModal } from "@/components/ui/ProjectModal";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
    project: Project;
    index?: number;
}

const categoryColors: Record<string, string> = {
    "Full Stack": "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
    "Cloud / DevOps": "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
    "Data / ML": "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20",
    "Web Design": "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
};

const categoryGradients: Record<string, string> = {
    "Full Stack": "from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/20",
    "Cloud / DevOps": "from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/20",
    "Data / ML": "from-violet-100 to-purple-100 dark:from-violet-900/40 dark:to-purple-900/20",
    "Web Design": "from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/20",
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    const [imgError, setImgError] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const gradient =
        categoryGradients[project.category] ??
        "from-violet-100 to-blue-100 dark:from-violet-900/30 dark:to-blue-900/20";

    return (
        <>
            <motion.article
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col rounded-2xl s-card overflow-hidden hover:border-violet-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10"
            >
                {/* Thumbnail */}
                <div className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden flex-shrink-0`}>
                    <div className="absolute inset-0 grid-pattern opacity-40" />

                    {!imgError && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={project.thumbnail}
                            alt={`${project.name} preview`}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={() => setImgError(true)}
                        />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {project.wip && (
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-medium backdrop-blur-sm">
                            <Construction className="w-3 h-3" />
                            Work in Progress
                        </div>
                    )}

                    <div className="absolute top-3 right-3">
                        <span className={cn(
                            "text-xs font-medium px-2.5 py-1 rounded-full border backdrop-blur-sm",
                            categoryColors[project.category] ?? "s-card t-subtle"
                        )}>
                            {project.category}
                        </span>
                    </div>

                    {imgError && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-3xl font-heading font-bold t-faint select-none tracking-tight px-4 text-center">
                                {project.name}
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                    <h3 className="t-body text-base font-bold mb-1.5 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">
                        {project.name}
                    </h3>
                    <p className="t-muted text-sm leading-relaxed mb-4 flex-1">
                        {project.tagline}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.stack.slice(0, 4).map((tech) => (
                            <span key={tech} className="t-subtle text-xs px-2.5 py-1 rounded-full s-card font-medium">
                                {tech}
                            </span>
                        ))}
                        {project.stack.length > 4 && (
                            <span className="t-faint text-xs px-2.5 py-1 rounded-full s-card font-medium">
                                +{project.stack.length - 4}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-2 pt-3 s-divider border-t flex-wrap">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                                className="t-subtle flex items-center gap-1.5 text-xs font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors px-3 py-2 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-500/10">
                                <Github className="w-3.5 h-3.5" />
                                GitHub
                            </a>
                        )}
                        {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer"
                                className="t-subtle flex items-center gap-1.5 text-xs font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors px-3 py-2 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-500/10">
                                <ExternalLink className="w-3.5 h-3.5" />
                                Live Site
                            </a>
                        )}
                        <div className="ml-auto">
                            <button onClick={() => setModalOpen(true)}
                                className="flex items-center gap-1.5 text-xs font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors px-3 py-2 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-500/10 border border-transparent hover:border-violet-200 dark:hover:border-violet-500/20">
                                <Info className="w-3.5 h-3.5" />
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            </motion.article>

            <ProjectModal project={modalOpen ? project : null} onClose={() => setModalOpen(false)} />
        </>
    );
}
