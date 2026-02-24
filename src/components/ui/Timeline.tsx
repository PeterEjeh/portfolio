"use client";

import { motion } from "framer-motion";
import { Briefcase, BookOpen, Code2, Award } from "lucide-react";
import type { TimelineItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const typeConfig = {
    work: { icon: Briefcase, color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20" },
    learning: { icon: BookOpen, color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" },
    project: { icon: Code2, color: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20" },
    cert: { icon: Award, color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20" },
};

export function Timeline({ items }: { items: TimelineItem[] }) {
    return (
        <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/30 to-transparent hidden sm:block" style={{ background: "linear-gradient(to bottom, rgba(139,92,246,0.3), rgba(var(--foreground),0.05), transparent)" }} />
            <div className="space-y-8">
                {items.map((item, index) => {
                    const cfg = typeConfig[item.type];
                    const Icon = cfg.icon;
                    return (
                        <motion.div key={item.id}
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="relative pl-0 sm:pl-16"
                        >
                            <div className={cn("hidden sm:flex absolute left-0 top-0 w-10 h-10 rounded-xl border items-center justify-center flex-shrink-0", cfg.color)}>
                                <Icon className="w-4 h-4" />
                            </div>
                            <div className="s-card s-card-hover p-5 rounded-2xl transition-all">
                                <div className={cn("sm:hidden flex w-8 h-8 rounded-lg border items-center justify-center mb-3", cfg.color)}>
                                    <Icon className="w-3.5 h-3.5" />
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 mb-1">
                                    <h3 className="t-body text-base font-bold">{item.title}</h3>
                                    <span className="t-faint text-xs sm:ml-auto font-medium whitespace-nowrap pt-0.5">{item.dates}</span>
                                </div>
                                <p className="text-sm text-violet-600 dark:text-violet-400 font-medium mb-3">{item.org}</p>
                                <ul className="space-y-1.5">
                                    {item.highlights.map((highlight, i) => (
                                        <li key={i} className="t-muted flex gap-2 text-sm leading-relaxed">
                                            <span className="text-violet-500 dark:text-violet-400 mt-1.5 flex-shrink-0">▸</span>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
