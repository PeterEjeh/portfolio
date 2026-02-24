"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { timeline } from "@/data/portfolio";

export default function Experience() {
    return (
        <section
            id="experience"
            className="section-padding relative overflow-hidden"
            aria-label="Experience and Timeline"
        >
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <SectionHeading
                    eyebrow="Journey"
                    title="Experience & Learning"
                    subtitle="Roles, projects, and learning milestones that have shaped how I work."
                />

                <div className="max-w-3xl mx-auto">
                    <Timeline items={timeline} />
                </div>
            </div>
        </section>
    );
}
