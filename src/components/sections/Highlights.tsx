"use client";

import { motion } from "framer-motion";
import { Layers, BarChart2, Cloud, Zap } from "lucide-react";
import { highlights } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { Layers, BarChart2, Cloud, Zap };

export default function Highlights() {
    return (
        <section className="section-padding" aria-label="Highlights">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {highlights.map((item, index) => {
                        const Icon = iconMap[item.icon] ?? Zap;
                        return (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="s-card s-card-hover group relative p-5 rounded-2xl transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-violet-600/0 group-hover:from-violet-600/5 group-hover:to-transparent transition-all duration-300 rounded-2xl" />
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                                        <Icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                                    </div>
                                    <div className="t-body text-2xl font-extrabold mb-1">{item.stat}</div>
                                    <div className="t-muted text-sm font-semibold mb-1.5">{item.label}</div>
                                    <div className="t-subtle text-xs leading-relaxed">{item.description}</div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
