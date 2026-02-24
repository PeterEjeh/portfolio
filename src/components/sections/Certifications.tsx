"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const badgeColors: Record<string, string> = {
    blue: "bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/20",
    violet: "bg-violet-500/10 text-violet-600 dark:text-violet-300 border-violet-500/20",
    green: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20",
};

export default function Certifications() {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const activeCert = certifications.find((c) => c.id === activeModal);

    return (
        <section id="certifications" className="section-padding relative overflow-hidden" aria-label="Certifications">
            <div className="absolute top-0 left-0 w-72 h-72 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <SectionHeading eyebrow="Credentials" title="Certifications" subtitle="Verified skills and completed training programmes." />
                <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="s-card group relative p-5 rounded-2xl hover:border-amber-500/20 transition-all duration-300 cursor-pointer"
                            onClick={() => setActiveModal(cert.id)}
                            role="button" tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && setActiveModal(cert.id)}
                            aria-label={`View ${cert.title} certificate`}
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                                    <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="t-body text-sm font-bold mb-1 pr-4">{cert.title}</h3>
                                    <p className="t-subtle text-xs mb-2">{cert.issuer}</p>
                                    <span className={cn("inline-block text-xs px-2.5 py-0.5 rounded-full border",
                                        badgeColors[cert.badgeColor] ?? "t-subtle border-current/20"
                                    )}>
                                        {cert.date}
                                    </span>
                                </div>
                                <ChevronRight className="t-faint w-4 h-4 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors flex-shrink-0 mt-0.5" />
                            </div>
                            <div className="mt-4 h-20 rounded-lg overflow-hidden relative" style={{ background: "rgba(var(--foreground),0.04)", border: "1px solid rgba(var(--foreground),0.06)" }}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={cert.certificateImage} alt={cert.title}
                                    className="absolute inset-0 w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 transition-opacity"
                                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="t-faint text-xs font-medium">Click to view certificate</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {activeModal && activeCert && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setActiveModal(null)}
                    >
                        <motion.div initial={{ opacity: 0, scale: 0.95, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 16 }} transition={{ duration: 0.25 }}
                            className="relative max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl"
                            style={{ background: "rgb(var(--card))", border: "1px solid rgba(var(--foreground),0.1)" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-5 flex items-center justify-between s-divider border-b">
                                <div>
                                    <h3 className="t-body text-base font-bold">{activeCert.title}</h3>
                                    <p className="t-subtle text-xs">{activeCert.issuer} · {activeCert.date}</p>
                                </div>
                                <button onClick={() => setActiveModal(null)}
                                    className="s-icon-btn w-8 h-8 rounded-lg flex items-center justify-center transition-all text-lg leading-none">
                                    ×
                                </button>
                            </div>
                            <div className="relative w-full aspect-[4/3] flex items-center justify-center" style={{ background: "rgba(var(--foreground),0.03)" }}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={activeCert.certificateImage} alt={activeCert.title} className="max-w-full max-h-full object-contain p-2" />
                            </div>
                            <div className="p-4 flex justify-end s-divider border-t">
                                <a href={activeCert.certificateImage} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs text-violet-600 dark:text-violet-400 hover:text-violet-500 transition-colors">
                                    <ExternalLink className="w-3.5 h-3.5" />Open full image
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
