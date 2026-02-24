"use client";

import { useEffect } from "react";
import Link from "next/link";

export function PrintTrigger() {
    useEffect(() => {
        // Auto-trigger print dialog after the page has rendered
        const timer = setTimeout(() => {
            window.print();
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="print:hidden"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                background: "white",
                borderBottom: "1px solid #e5e7eb",
                padding: "12px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            }}
        >
            <span style={{ fontSize: "13px", color: "#6b7280" }}>
                Peter Ejeh — CV Preview &nbsp;·&nbsp; Save as PDF using your browser print dialog
            </span>
            <div style={{ display: "flex", gap: "10px" }}>
                <Link
                    href="/"
                    style={{
                        padding: "8px 16px",
                        fontSize: "13px",
                        color: "#374151",
                        border: "1px solid #d1d5db",
                        borderRadius: "8px",
                        textDecoration: "none",
                        transition: "border-color 0.15s",
                    }}
                >
                    ← Portfolio
                </Link>
                <button
                    onClick={() => window.print()}
                    style={{
                        padding: "8px 16px",
                        fontSize: "13px",
                        background: "#7c3aed",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.background = "#6d28d9"; }}
                    onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.background = "#7c3aed"; }}
                >
                    Print / Save PDF
                </button>
            </div>
        </div>
    );
}
