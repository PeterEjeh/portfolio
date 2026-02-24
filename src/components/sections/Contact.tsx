"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";
import { profile, socials } from "@/data/portfolio";

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = { Github, Linkedin, Twitter };

export default function Contact() {
    return (
        <section id="contact" className="section-padding relative overflow-hidden" aria-label="Contact Peter Ejeh">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <SectionHeading
                    eyebrow="Say Hello"
                    title="Let's work together"
                    subtitle="I'm open to full-time roles, freelance projects, and collaborations. Drop me a message."
                />
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="s-card flex items-center gap-4 p-4 rounded-xl">
                                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                                </div>
                                <div>
                                    <p className="t-faint text-xs uppercase tracking-wider mb-0.5">Email</p>
                                    <a
                                        href={`mailto:${profile.email}`}
                                        className="t-muted text-sm font-medium hover:text-violet-600 dark:hover:text-violet-300 transition-colors"
                                    >
                                        {profile.email}
                                    </a>
                                </div>
                            </div>
                            {/* Location */}
                            <div className="s-card flex items-center gap-4 p-4 rounded-xl">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                                </div>
                                <div>
                                    <p className="t-faint text-xs uppercase tracking-wider mb-0.5">Based in</p>
                                    <p className="t-muted text-sm font-medium">Nigeria · Remote-friendly</p>
                                </div>
                            </div>
                            {/* Socials */}
                            <div>
                                <p className="t-faint text-xs uppercase tracking-wider mb-3">Find me on</p>
                                <div className="flex gap-3">
                                    {socials.map((social) => {
                                        const Icon = socialIconMap[social.icon];
                                        return Icon ? (
                                            <Link
                                                key={social.label}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.label}
                                                className="s-icon-btn w-11 h-11 rounded-xl flex items-center justify-center transition-all"
                                            >
                                                <Icon className="w-4 h-4" />
                                            </Link>
                                        ) : null;
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="s-card rounded-2xl p-6"
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
