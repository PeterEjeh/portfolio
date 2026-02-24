"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Construction } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/portfolio";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
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

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = project ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [project]);

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4"
                    onClick={onClose}
                    aria-modal="true"
                    role="dialog"
                    aria-label={`${project.name} details`}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* Panel — uses CSS vars so it adapts to light/dark */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.98 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl shadow-2xl"
                        style={{
                            background: "rgb(var(--card))",
                            border: "1px solid rgba(var(--foreground), 0.08)",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Drag handle (mobile) */}
                        <div className="flex justify-center pt-3 pb-1 sm:hidden">
                            <div className="w-10 h-1 rounded-full" style={{ background: "rgba(var(--foreground), 0.15)" }} />
                        </div>

                        {/* Header */}
                        <div className="flex items-start justify-between px-6 pt-4 pb-0">
                            <div className="flex-1 pr-4">
                                <div className="flex items-center gap-2 flex-wrap mb-2">
                                    <span className={cn(
                                        "text-xs font-medium px-2.5 py-0.5 rounded-full border",
                                        categoryColors[project.category] ?? "s-card t-subtle"
                                    )}>
                                        {project.category}
                                    </span>
                                    {project.wip && (
                                        <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                                            <Construction className="w-3 h-3" />
                                            Work in Progress
                                        </span>
                                    )}
                                </div>
                                <h2 className="t-body text-2xl font-heading font-bold">{project.name}</h2>
                                <p className="t-muted text-sm mt-1">{project.tagline}</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="s-icon-btn flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                                aria-label="Close modal"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Thumbnail */}
                        {project.thumbnail && (
                            <div className={`mx-6 mt-5 h-44 rounded-xl overflow-hidden bg-gradient-to-br ${categoryGradients[project.category] ?? "from-violet-100 to-blue-100 dark:from-violet-900/30 dark:to-blue-900/20"} relative`}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={project.thumbnail}
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                                />
                            </div>
                        )}

                        {/* Body */}
                        <div className="px-6 pt-5 pb-6 space-y-5">
                            {/* About */}
                            <div>
                                <h3 className="t-faint text-xs font-semibold uppercase tracking-widest mb-2">About</h3>
                                <p className="t-muted text-sm leading-relaxed">{project.description}</p>
                            </div>

                            {/* Tech stack */}
                            <div>
                                <h3 className="t-faint text-xs font-semibold uppercase tracking-widest mb-2">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span key={tech}
                                            className="text-xs px-3 py-1.5 rounded-full font-medium"
                                            style={{
                                                background: "rgba(var(--accent), 0.08)",
                                                color: "rgb(var(--accent))",
                                                border: "1px solid rgba(var(--accent), 0.2)"
                                            }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            {(project.github || project.live) && (
                                <div>
                                    <h3 className="t-faint text-xs font-semibold uppercase tracking-widest mb-3">Links</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                                                className="s-card s-icon-btn flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:border-violet-400/40 hover:text-violet-700 dark:hover:text-violet-300">
                                                <Github className="w-4 h-4" />
                                                View on GitHub
                                            </a>
                                        )}
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all shadow-lg shadow-violet-500/20">
                                                <ExternalLink className="w-4 h-4" />
                                                Visit Live Site
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
