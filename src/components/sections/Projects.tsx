"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/portfolio";
import type { ProjectCategory } from "@/data/portfolio";

const CATEGORIES: Array<{ value: "all" | ProjectCategory; label: string }> = [
    { value: "all", label: "All" },
    { value: "Full Stack", label: "Full Stack" },
    { value: "Web Design", label: "Web Design" },
    { value: "Cloud / DevOps", label: "Cloud / DevOps" },
    { value: "Data / ML", label: "Data & ML" },
];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState<"all" | ProjectCategory>("all");

    const filtered = activeCategory === "all"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.category === activeCategory);

    return (
        <section id="projects" className="section-padding relative overflow-hidden" aria-label="Featured Projects">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <SectionHeading
                    eyebrow="My Work"
                    title="Featured Projects"
                    subtitle="From social platforms to client websites, cloud apps, and data science."
                />

                {/* Category filter tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                    {CATEGORIES.map((cat) => (
                        <button key={cat.value} onClick={() => setActiveCategory(cat.value)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${activeCategory === cat.value
                                    ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                                    : "s-card t-muted s-card-hover"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div key={activeCategory}
                        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-2 xl:grid-cols-3 gap-5"
                    >
                        {filtered.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }} className="mt-10 text-center">
                    <a href="https://github.com/PeterEjeh" target="_blank" rel="noopener noreferrer"
                        className="s-card s-card-hover s-icon-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all">
                        View all on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
