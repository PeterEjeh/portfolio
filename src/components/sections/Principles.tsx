"use client";

import { motion } from "framer-motion";
import { Eye, Rocket, BookOpen, Shield } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { principles } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { Eye, Rocket, BookOpen, Shield };

export default function Principles() {
    return (
        <section id="principles" className="section-padding relative overflow-hidden" aria-label="Principles">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <SectionHeading
                    eyebrow="Philosophy"
                    title="Principles I work by"
                    subtitle="The values and beliefs that guide how I build and collaborate."
                />
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {principles.map((principle, index) => {
                        const Icon = iconMap[principle.icon] ?? Eye;
                        return (
                            <motion.div
                                key={principle.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="s-card s-card-hover group p-5 rounded-2xl transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
                                    <Icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                                </div>
                                <h3 className="t-body text-sm font-bold mb-2">{principle.title}</h3>
                                <p className="t-subtle text-xs leading-relaxed">{principle.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
