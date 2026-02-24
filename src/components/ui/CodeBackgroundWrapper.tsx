"use client";

import { useCodeBg } from "@/components/providers/CodeBgProvider";
import { CodeBackground } from "@/components/ui/CodeBackground";

/** Thin client wrapper that bridges CodeBgContext → CodeBackground canvas */
export function CodeBackgroundWrapper() {
    const { enabled } = useCodeBg();
    return <CodeBackground enabled={enabled} />;
}
