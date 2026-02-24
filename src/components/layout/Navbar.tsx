"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Download, Menu, X, Code2, EyeOff } from "lucide-react";
import { useTheme } from "next-themes";
import { useCodeBg } from "@/components/providers/CodeBgProvider";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Certs", href: "#certifications" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { enabled: codeBgOn, toggle: toggleCodeBg } = useCodeBg();

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(id);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const isDark = theme === "dark";

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled ? "bg-glass s-divider border-b shadow-sm" : "bg-transparent"
                )}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <nav className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link
                            href="#home"
                            onClick={() => handleNavClick("#home")}
                            className="flex items-center gap-2 group"
                        >
                            <div className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 flex items-center justify-center group-hover:bg-violet-200 dark:group-hover:bg-violet-500/30 transition-colors">
                                <Code2 className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                            </div>
                            <span className="font-heading font-bold t-body tracking-tight text-lg">
                                PE<span className="text-violet-600 dark:text-violet-400">.</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <ul className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const sectionId = link.href.replace("#", "");
                                return (
                                    <li key={link.href}>
                                        <button
                                            onClick={() => handleNavClick(link.href)}
                                            className={cn(
                                                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                                activeSection === sectionId
                                                    ? "bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300"
                                                    : "t-muted hover:t-body s-icon-btn border-0"
                                            )}
                                            style={activeSection !== sectionId ? { background: "transparent", border: "none" } : {}}
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Right Actions */}
                        <div className="flex items-center gap-2">
                            {/* Code background toggle */}
                            {mounted && (
                                <button
                                    onClick={toggleCodeBg}
                                    className={cn(
                                        "s-icon-btn w-9 h-9 rounded-lg flex items-center justify-center transition-all",
                                        codeBgOn && "!border-violet-400/50 !text-violet-500 !bg-violet-500/10"
                                    )}
                                    aria-label={codeBgOn ? "Turn off code background" : "Turn on code background"}
                                    title={codeBgOn ? "Code BG: ON" : "Code BG: OFF"}
                                >
                                    {codeBgOn ? <EyeOff className="w-4 h-4" /> : <Code2 className="w-4 h-4" />}
                                </button>
                            )}

                            {/* Theme toggle */}
                            {mounted && (
                                <button
                                    onClick={() => setTheme(isDark ? "light" : "dark")}
                                    className="s-icon-btn w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                                    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                                >
                                    {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                                </button>
                            )}

                            {/* Download CV */}
                            <Link
                                href={profile.cvUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all duration-200 shadow-md shadow-violet-500/20"
                            >
                                <Download className="w-3.5 h-3.5" />
                                Download CV
                            </Link>

                            {/* Mobile menu toggle */}
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="md:hidden s-icon-btn w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                            </button>
                        </div>
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ background: "rgb(var(--card))", borderColor: "rgba(var(--foreground), 0.07)" }}
                        className="fixed inset-y-0 right-0 z-40 w-72 border-l shadow-2xl flex flex-col pt-20 pb-8 px-6 md:hidden"
                    >
                        <ul className="flex flex-col gap-2 flex-1">
                            {navLinks.map((link) => {
                                const sectionId = link.href.replace("#", "");
                                return (
                                    <li key={link.href}>
                                        <button
                                            onClick={() => handleNavClick(link.href)}
                                            className={cn(
                                                "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all",
                                                activeSection === sectionId
                                                    ? "bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300"
                                                    : "t-muted hover:bg-violet-50 dark:hover:bg-white/5 hover:text-violet-700 dark:hover:text-white"
                                            )}
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                        <Link
                            href={profile.cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all"
                        >
                            <Download className="w-4 h-4" />
                            Download CV
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
