"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillGroup } from "@/components/ui/SkillGroup";
import { skills } from "@/data/portfolio";

export default function Skills() {
    return (
        <section
            id="skills"
            className="section-padding relative"
            aria-label="Skills"
        >
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <SectionHeading
                    eyebrow="Expertise"
                    title="Skills & Tools"
                    subtitle="Technologies I use daily and concepts I'm actively deepening."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {skills.map((group, index) => (
                        <SkillGroup key={group.category} group={group} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
