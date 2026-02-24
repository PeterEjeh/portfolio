"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";
import { Check } from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            className="section-padding relative overflow-hidden"
            aria-label="About Peter Ejeh"
        >
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionHeading
                            eyebrow="About Me"
                            title="Disciplined builder. Lifelong learner."
                            centered={false}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="t-muted space-y-4 leading-relaxed"
                        >
                            <p>
                                I&apos;m Peter — a software developer with a deep interest in building things that{" "}
                                <span className="t-body font-medium">actually work</span> and look good doing it. My stack spans web development, cloud architecture, and data science, which means I can reason about a product from the database all the way to the pixel.
                            </p>
                            <p>
                                I started with Django and Python; then discovered the joy of React and modern frontend. These days I&apos;m focused on cloud-native patterns, DevOps culture, and making data understandable through clean visualizations.
                            </p>
                            <p>
                                I believe in <span className="t-body font-medium">shipping real things</span>, iterating fast, and writing code that my future self will thank me for.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="s-card rounded-2xl p-6"
                    >
                        <h3 className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-5">
                            Currently
                        </h3>
                        <ul className="space-y-3">
                            {profile.currently.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
                                    className="t-muted flex items-start gap-3 text-sm"
                                >
                                    <span className="w-5 h-5 rounded-md bg-violet-500/15 border border-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 text-violet-600 dark:text-violet-400" />
                                    </span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-6 s-divider border-t">
                            <blockquote className="t-subtle text-sm italic leading-relaxed">
                                &ldquo;{profile.bio}&rdquo;
                            </blockquote>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
