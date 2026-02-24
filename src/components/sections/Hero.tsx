"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { profile, socials } from "@/data/portfolio";

const floatingChips = [
    { label: "Next.js", delay: 0 },
    { label: "TypeScript", delay: 0.05 },
    { label: "Django", delay: 0.1 },
    { label: "AWS", delay: 0.15 },
    { label: "Python", delay: 0.2 },
    { label: "React", delay: 0.25 },
    { label: "DevOps", delay: 0.3 },
    { label: "Data", delay: 0.35 },
];

function AvatarOrb() {
    return (
        <div className="relative flex items-center justify-center w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] mx-auto">
            {/* Outer rotating ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                    background: "conic-gradient(from 0deg, rgba(139,92,246,0.6), rgba(99,102,241,0.3), rgba(59,130,246,0.5), rgba(139,92,246,0.6))",
                    padding: "2.5px",
                    borderRadius: "50%",
                }}
            >
                <div className="w-full h-full rounded-full" style={{ background: "rgb(var(--background))" }} />
            </motion.div>

            {/* Inner counter-rotating dashed ring */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full"
                style={{
                    inset: "14px",
                    border: "1.5px dashed rgba(139,92,246,0.25)",
                    borderRadius: "50%",
                }}
            />

            {/* Glow blob behind image */}
            <div
                className="absolute rounded-full blur-2xl"
                style={{
                    inset: "28px",
                    background: "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(99,102,241,0.15) 60%, transparent 80%)",
                }}
            />

            {/* Photo circle */}
            <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 overflow-hidden rounded-full"
                style={{
                    width: "calc(100% - 44px)",
                    height: "calc(100% - 44px)",
                    border: "3px solid rgba(139,92,246,0.4)",
                    boxShadow: "0 0 40px rgba(139,92,246,0.3), inset 0 0 20px rgba(139,92,246,0.05)",
                }}
            >
                <Image
                    src="/avatar.jpg"
                    alt="Peter Ejeh"
                    fill
                    className="object-cover object-top"
                    priority
                />
            </motion.div>

            {/* Floating badge — Available */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute z-20 flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{
                    background: "rgba(var(--card), 0.9)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    bottom: "12%",
                    right: "-8%",
                }}
            >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span className="t-muted text-xs font-semibold whitespace-nowrap">Open to work</span>
            </motion.div>


            {/* Floating badge — Experience */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="absolute z-20 flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{
                    background: "rgba(var(--card), 0.9)",
                    border: "1px solid rgba(139,92,246,0.3)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    top: "12%",
                    left: "-8%",
                }}
            >
                <Sparkles className="w-3.5 h-3.5 text-violet-500" />
                <span className="t-muted text-xs font-semibold">3+ Years</span>
            </motion.div>
        </div>
    );
}

export default function Hero() {
    const handleScroll = (sectionId: string) => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center pt-20 overflow-hidden"
            aria-label="Hero section"
        >
            {/* Background decorations */}
            <div className="absolute inset-0 grid-pattern opacity-60" />
            <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-0">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

                    {/* ── Left: Text content ── */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Location pill */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium mb-5"
                            style={{
                                background: "rgba(var(--foreground), 0.04)",
                                border: "1px solid rgba(var(--foreground), 0.08)",
                            }}
                        >
                            <MapPin className="w-3 h-3 text-violet-500" />
                            <span className="t-subtle">Nigeria · Remote-ready</span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-[1.05]"
                        >
                            <span className="t-body">Hi, I&apos;m </span>
                            <span className="text-gradient">Peter Ejeh</span>
                        </motion.h1>

                        {/* Title */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.33 }}
                            className="t-subtle text-sm sm:text-base font-semibold tracking-widest uppercase mb-5"
                        >
                            {profile.title}
                        </motion.p>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.43 }}
                            className="t-muted text-lg sm:text-xl max-w-xl leading-relaxed mb-8"
                        >
                            {profile.tagline}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.53 }}
                            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 mb-8"
                        >
                            <button
                                onClick={() => handleScroll("projects")}
                                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-violet-500/30"
                            >
                                View Projects
                                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                            </button>
                            <button
                                onClick={() => handleScroll("contact")}
                                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
                                style={{
                                    background: "rgba(var(--foreground), 0.04)",
                                    border: "1px solid rgba(var(--foreground), 0.09)",
                                    color: "rgb(var(--foreground))",
                                }}
                            >
                                Get in Touch
                            </button>
                        </motion.div>

                        {/* Social links + chips */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.65 }}
                            className="flex flex-col items-center lg:items-start gap-4"
                        >
                            {/* Socials */}
                            <div className="flex items-center gap-2">
                                {socials.map((social) => {
                                    const Icon = social.icon === "Github" ? Github : social.icon === "Linkedin" ? Linkedin : null;
                                    return Icon ? (
                                        <Link
                                            key={social.label}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="s-icon-btn w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                                        >
                                            <Icon className="w-4 h-4" />
                                        </Link>
                                    ) : null;
                                })}
                            </div>

                            {/* Tech chips */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                                {floatingChips.map((chip, i) => (
                                    <motion.span
                                        key={chip.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.35, delay: 0.7 + i * 0.04 }}
                                        className="px-3 py-1.5 rounded-full t-subtle text-xs font-medium cursor-default hover:text-violet-600 dark:hover:text-violet-300 hover:border-violet-400/40 transition-all"
                                        style={{
                                            background: "rgba(var(--foreground), 0.04)",
                                            border: "1px solid rgba(var(--foreground), 0.08)",
                                        }}
                                    >
                                        {chip.label}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* ── Right: Avatar ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, x: 40 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-shrink-0 w-full lg:w-auto flex justify-center"
                    >
                        {/* Subtle float animation wrapper */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <AvatarOrb />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="hidden lg:flex flex-col items-center gap-2 mt-12 pb-4"
                >
                    <span className="t-faint text-xs uppercase tracking-widest">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown className="w-4 h-4" style={{ color: "rgba(var(--foreground), 0.25)" }} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
