"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, centered = true, className }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn("mb-12 md:mb-16", centered && "text-center", className)}
        >
            {eyebrow && (
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-3 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
                    {eyebrow}
                </span>
            )}
            <h2 className="t-body text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="t-subtle mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
