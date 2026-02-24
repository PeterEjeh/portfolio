"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

/* ─── Token pool (code, data, symbols) ─────────────────────────────────── */
const TOKENS = [
    "const", "let", "var", "fn()", "=>", "{}", "[]",
    "async", "await", "return", "import", "export", "class",
    "if", "else", "try", "catch", "for", "while", "map()",
    "true", "false", "null", "void", "type", "interface",
    "0xFF", "0x1A", "0b1010", "0xDEAD", "NaN", "Infinity",
    "===", "!==", "&&", "||", "??", "?.", "...", ">>",
    "API", "SQL", "SSH", "GET", "POST", "404", "200",
    "git", "npm", "pip", "curl", "grep", "aws", "k8s",
    "#!", "$_", "@fn", "λ", "Σ", "∩", "∞", "≡",
    "01", "10", "11", "00", "1337", "8080", "3000",
];

interface Column {
    x: number;
    y: number;
    speed: number;
    charIndex: number;
    chars: string[];
    opacity: number;
    length: number;
}

interface Props {
    enabled: boolean;
}

export function CodeBackground({ enabled }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { resolvedTheme } = useTheme();
    const animRef = useRef<number | null>(null);
    const columnsRef = useRef<Column[]>([]);
    const lastTimeRef = useRef<number>(0);

    useEffect(() => {
        if (!enabled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const isDark = resolvedTheme === "dark";
        const fontSize = 12;
        const colWidth = 90; // px per column

        /* Colours differ by theme */
        const headColor = isDark ? "rgba(168,85,247,0.9)" : "rgba(109,62,216,0.75)";
        const trailGrad = isDark
            ? ["rgba(129,140,248,{a})", "rgba(99,102,241,{a})", "rgba(168,85,247,{a})"]
            : ["rgba(109,62,216,{a})", "rgba(79,70,229,{a})", "rgba(124,58,237,{a})"];

        const fill = (a: number, i: number) =>
            trailGrad[i % trailGrad.length].replace("{a}", String(a));

        function resize() {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initColumns();
        }

        function randToken() {
            return TOKENS[Math.floor(Math.random() * TOKENS.length)];
        }

        function makeColumn(x: number, startY?: number): Column {
            const length = 6 + Math.floor(Math.random() * 14);
            const chars: string[] = [];
            for (let i = 0; i < length; i++) chars.push(randToken());
            return {
                x,
                y: startY ?? -(Math.random() * canvas!.height),
                speed: 0.6 + Math.random() * 1.4,
                charIndex: 0,
                chars,
                opacity: 0.15 + Math.random() * 0.55,
                length,
            };
        }

        function initColumns() {
            if (!canvas) return;
            const count = Math.floor(canvas.width / colWidth);
            columnsRef.current = [];
            for (let i = 0; i < count; i++) {
                const x = i * colWidth + Math.random() * 40 - 20;
                columnsRef.current.push(makeColumn(x));
            }
        }

        function draw(ts: number) {
            if (!canvas || !ctx) return;
            const dt = Math.min(ts - lastTimeRef.current, 50);
            lastTimeRef.current = ts;

            /* Fade trail */
            ctx.fillStyle = isDark
                ? "rgba(8,8,18,0.15)"
                : "rgba(250,248,255,0.15)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px 'JetBrains Mono', 'Fira Code', monospace`;

            for (const col of columnsRef.current) {
                col.y += col.speed * (dt / 16);

                const totalH = col.length * (fontSize + 8);
                const rows = col.chars.length;

                for (let r = 0; r < rows; r++) {
                    const charY = col.y - r * (fontSize + 8);
                    if (charY < -fontSize || charY > canvas.height + fontSize) continue;

                    if (r === 0) {
                        /* Bright head */
                        ctx.fillStyle = headColor;
                    } else {
                        /* Fade trail */
                        const fade = Math.max(0, 1 - r / rows);
                        ctx.fillStyle = fill(col.opacity * fade * 0.85, r);
                    }
                    ctx.fillText(col.chars[r], col.x, charY);
                }

                /* Reset column when it scrolls off */
                if (col.y - totalH > canvas.height) {
                    Object.assign(col, makeColumn(col.x, -canvas.height * 0.2));
                }

                /* Shuffle a random char occasionally */
                if (Math.random() < 0.004) {
                    const ri = Math.floor(Math.random() * col.chars.length);
                    col.chars[ri] = randToken();
                }
            }

            animRef.current = requestAnimationFrame(draw);
        }

        resize();
        window.addEventListener("resize", resize);
        animRef.current = requestAnimationFrame((ts) => {
            lastTimeRef.current = ts;
            animRef.current = requestAnimationFrame(draw);
        });

        return () => {
            window.removeEventListener("resize", resize);
            if (animRef.current) cancelAnimationFrame(animRef.current);
        };
    }, [enabled, resolvedTheme]);

    /* Clear canvas when disabled */
    useEffect(() => {
        if (!enabled) {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }, [enabled]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ opacity: enabled ? 1 : 0, transition: "opacity 0.8s ease" }}
            aria-hidden="true"
        />
    );
}
