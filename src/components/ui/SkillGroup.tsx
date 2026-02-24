"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Cloud, BarChart } from "lucide-react";
import type { SkillCategory, SkillLevel } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { Monitor, Server, Cloud, BarChart };

const levelConfig: Record<SkillLevel, { label: string; bars: number; color: string }> = {
    expert: { label: "Expert", bars: 5, color: "bg-violet-500" },
    proficient: { label: "Proficient", bars: 4, color: "bg-blue-500" },
    learning: { label: "Learning", bars: 2, color: "bg-emerald-500" },
};

export function SkillGroup({ group, index = 0 }: { group: SkillCategory; index?: number }) {
    const Icon = iconMap[group.icon] ?? Monitor;
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="s-card s-card-hover p-5 rounded-2xl transition-all duration-300"
        >
            <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="t-body font-bold text-base">{group.category}</h3>
            </div>
            <ul className="space-y-3">
                {group.skills.map((skill, i) => {
                    const cfg = levelConfig[skill.level];
                    return (
                        <motion.li
                            key={skill.name}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                            className="flex flex-col gap-1.5"
                        >
                            <div className="flex items-center justify-between">
                                <span className="t-muted text-sm font-medium">{skill.name}</span>
                                <span className="t-faint text-xs">{cfg.label}</span>
                            </div>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, dotIdx) => (
                                    <div key={dotIdx}
                                        className={`h-1 flex-1 rounded-full transition-colors ${dotIdx < cfg.bars ? cfg.color : ""}`}
                                        style={dotIdx < cfg.bars ? {} : { background: "rgba(var(--foreground), 0.1)" }}
                                    />
                                ))}
                            </div>
                        </motion.li>
                    );
                })}
            </ul>
        </motion.div>
    );
}
