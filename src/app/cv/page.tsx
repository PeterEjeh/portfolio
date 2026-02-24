import type { Metadata } from "next";
import { PrintTrigger } from "./PrintTrigger";
import { projects, skills, certifications, timeline, profile } from "@/data/portfolio";

export const metadata: Metadata = {
    title: "Peter Ejeh — CV",
    description: "Curriculum Vitae of Peter Ejeh — Software Developer, DevOps Learner, Data Enthusiast",
    robots: { index: false, follow: false },
};

export default function CVPage() {
    const featuredProjects = projects.filter((p) => p.featured && !p.wip).slice(0, 5);
    const workItems = timeline.filter((t) => t.type === "work" || t.type === "project").slice(0, 5);
    const certs = certifications;

    return (
        <>
            <PrintTrigger />

            {/* CV Document */}
            <main
                className="cv-page print:pt-0"
                style={{ paddingTop: "56px", background: "white", minHeight: "100vh" }}
            >
                <div
                    style={{
                        maxWidth: "794px",
                        margin: "0 auto",
                        padding: "48px 56px",
                        fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
                        fontSize: "13px",
                        lineHeight: "1.55",
                        color: "#111827",
                        background: "white",
                    }}
                >
                    {/* ── HEADER ─────────────────────────────── */}
                    <header data-cv-header style={{ marginBottom: "28px", borderBottom: "2px solid #7c3aed", paddingBottom: "20px" }}>
                        <h1 style={{ fontSize: "26px", fontWeight: "800", margin: "0 0 4px", color: "#0f0f1e", letterSpacing: "-0.5px" }}>
                            Peter Ejeh
                        </h1>
                        <p style={{ fontSize: "14px", color: "#7c3aed", fontWeight: "600", margin: "0 0 14px" }}>
                            Software Developer &nbsp;|&nbsp; DevOps Learner &nbsp;|&nbsp; Data Enthusiast
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px", fontSize: "12px", color: "#374151" }}>
                            <span>✉ {profile.email}</span>
                            {profile.phone && profile.phone.map((p) => (
                                <span key={p}>📞 {p}</span>
                            ))}
                            <span>🔗 linkedin.com/in/peter-ejeh</span>
                            <span>💻 github.com/PeterEjeh</span>
                            <span>📍 Nigeria</span>
                        </div>
                    </header>

                    {/* ── PROFILE SUMMARY ─────────────────────── */}
                    <section style={{ marginBottom: "22px" }}>
                        <SectionTitle>Profile</SectionTitle>
                        <p style={{ color: "#374151", lineHeight: "1.65" }}>
                            Results-driven software developer with hands-on experience building full-stack web applications,
                            cloud-native platforms, and data-driven tools. Proficient in Python, Django, React/Next.js, and AWS
                            serverless architecture. Cisco-certified networking professional with a growing DevOps skillset.
                            Passionate about clean code, user-first design, and shipping products that solve real problems.
                        </p>
                    </section>

                    {/* ── SKILLS ──────────────────────────────── */}
                    <section style={{ marginBottom: "22px" }}>
                        <SectionTitle>Technical Skills</SectionTitle>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                            {skills.map((group) => (
                                <div key={group.category}>
                                    <p style={{ fontWeight: "700", fontSize: "12px", color: "#7c3aed", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                        {group.category}
                                    </p>
                                    <p style={{ color: "#374151" }}>
                                        {group.skills.map((s) => s.name).join(" · ")}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── EXPERIENCE & PROJECTS ───────────────── */}
                    <section style={{ marginBottom: "22px" }}>
                        <SectionTitle>Experience & Projects</SectionTitle>
                        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                            {workItems.map((item) => (
                                <div key={item.id} style={{ pageBreakInside: "avoid" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2px" }}>
                                        <span style={{ fontWeight: "700", fontSize: "13px", color: "#0f0f1e" }}>
                                            {item.title}
                                        </span>
                                        <span style={{ fontSize: "12px", color: "#6b7280", flexShrink: 0, marginLeft: "12px" }}>
                                            {item.dates}
                                        </span>
                                    </div>
                                    <p style={{ fontSize: "12px", color: "#7c3aed", fontWeight: "600", marginBottom: "5px" }}>
                                        {item.org}
                                    </p>
                                    <ul style={{ margin: 0, paddingLeft: "14px" }}>
                                        {item.highlights.map((h, i) => (
                                            <li key={i} style={{ color: "#374151", marginBottom: "2px" }}>
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── KEY PROJECTS ─────────────────────────── */}
                    <section style={{ marginBottom: "22px" }}>
                        <SectionTitle>Selected Projects</SectionTitle>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            {featuredProjects.map((project) => (
                                <div key={project.id} style={{ pageBreakInside: "avoid" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "3px" }}>
                                        <span style={{ fontWeight: "700", fontSize: "13px", color: "#0f0f1e" }}>
                                            {project.name}
                                            {project.live && (
                                                <span style={{ fontSize: "11px", color: "#7c3aed", fontWeight: "400", marginLeft: "8px" }}>
                                                    🌐 {project.live.replace("https://", "")}
                                                </span>
                                            )}
                                        </span>
                                        <span style={{ fontSize: "11px", color: "#9ca3af", flexShrink: 0, marginLeft: "12px" }}>
                                            {project.category}
                                        </span>
                                    </div>
                                    <p style={{ color: "#374151", marginBottom: "3px" }}>
                                        {project.description}
                                    </p>
                                    <p style={{ fontSize: "11.5px", color: "#6b7280" }}>
                                        <strong style={{ color: "#374151" }}>Stack:</strong> {project.stack.join(", ")}
                                        {project.github && (
                                            <span> &nbsp;·&nbsp; <strong style={{ color: "#374151" }}>GitHub:</strong> {project.github.replace("https://", "")}</span>
                                        )}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── CERTIFICATIONS ───────────────────────── */}
                    <section style={{ marginBottom: "22px" }}>
                        <SectionTitle>Certifications</SectionTitle>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                            {certs.map((cert) => (
                                <div key={cert.id} style={{ display: "flex", justifyContent: "space-between" }}>
                                    <span style={{ fontWeight: "600", color: "#111827" }}>
                                        {cert.title}
                                        <span style={{ fontWeight: "400", color: "#6b7280", marginLeft: "8px" }}>
                                            — {cert.issuer}
                                        </span>
                                    </span>
                                    <span style={{ fontSize: "12px", color: "#6b7280", flexShrink: 0, marginLeft: "12px" }}>
                                        {cert.date}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── EDUCATION ───────────────────────────── */}
                    <section style={{ marginBottom: "8px" }}>
                        <SectionTitle>Education</SectionTitle>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                            <span>
                                <strong>B.Sc. Computer Science</strong>
                                <span style={{ color: "#6b7280", marginLeft: "8px" }}>
                                    — Abubakar Tafawa Balewa University (ATBU), Bauchi
                                </span>
                            </span>
                            <span style={{ color: "#6b7280", fontSize: "12px", flexShrink: 0, marginLeft: "12px" }}>
                                Expected 2026
                            </span>
                        </div>
                    </section>

                    {/* Footer note */}
                    <p style={{ marginTop: "32px", fontSize: "11px", color: "#9ca3af", textAlign: "center", borderTop: "1px solid #e5e7eb", paddingTop: "14px" }}>
                        References available on request &nbsp;·&nbsp; Portfolio: peterejeh.dev
                    </p>
                </div>
            </main>

            <style>{`
                @media print {
                    body { margin: 0; background: white; }
                    .print\\:hidden { display: none !important; }
                    .cv-page { padding-top: 0 !important; }
                    /* Restore CV header that would otherwise be hidden by global print rule */
                    header[data-cv-header] { display: block !important; }
                    @page {
                        margin: 12mm 14mm;
                        size: A4 portrait;
                    }
                }
            `}</style>
        </>
    );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 style={{
            fontSize: "13px",
            fontWeight: "800",
            textTransform: "uppercase",
            letterSpacing: "0.8px",
            color: "#7c3aed",
            margin: "0 0 10px",
            paddingBottom: "5px",
            borderBottom: "1px solid #ede9fe",
        }}>
            {children}
        </h2>
    );
}
