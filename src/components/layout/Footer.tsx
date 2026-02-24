import Link from "next/link";
import { Github, Linkedin, Twitter, Code2, Heart } from "lucide-react";
import { socials } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { Github, Linkedin, Twitter };

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="s-divider border-t" style={{ background: "rgba(var(--foreground), 0.02)" }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-md bg-violet-100 dark:bg-violet-500/20 border border-violet-200 dark:border-violet-500/30 flex items-center justify-center">
                            <Code2 className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                        </div>
                        <span className="t-muted font-heading font-bold text-sm">Peter Ejeh</span>
                    </div>

                    {/* Quick links */}
                    <nav aria-label="Footer navigation">
                        <ul className="flex items-center gap-6 text-sm t-subtle">
                            {["home", "projects", "about", "skills", "experience", "contact"].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors capitalize">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Socials */}
                    <div className="flex items-center gap-3">
                        {socials.map((social) => {
                            const Icon = iconMap[social.icon];
                            return (
                                <Link key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                                    className="s-icon-btn w-8 h-8 rounded-lg flex items-center justify-center transition-all">
                                    {Icon && <Icon className="w-3.5 h-3.5" />}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-8 pt-6 s-divider border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-xs t-faint">
                    <p>© {year} Peter Ejeh. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Built with <Heart className="w-3 h-3 text-violet-500 fill-violet-500 mx-0.5" /> Next.js &amp; TailwindCSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
