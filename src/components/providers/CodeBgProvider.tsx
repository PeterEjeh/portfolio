"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface CodeBgContextValue {
    enabled: boolean;
    toggle: () => void;
}

const CodeBgContext = createContext<CodeBgContextValue>({
    enabled: false,
    toggle: () => { },
});

export function useCodeBg() {
    return useContext(CodeBgContext);
}

export function CodeBgProvider({ children }: { children: ReactNode }) {
    const [enabled, setEnabled] = useState(false);

    /* Restore from localStorage on mount */
    useEffect(() => {
        const saved = localStorage.getItem("codeBg");
        if (saved === "1") setEnabled(true);
    }, []);

    const toggle = () => {
        setEnabled((prev) => {
            const next = !prev;
            localStorage.setItem("codeBg", next ? "1" : "0");
            return next;
        });
    };

    return (
        <CodeBgContext.Provider value={{ enabled, toggle }}>
            {children}
        </CodeBgContext.Provider>
    );
}
