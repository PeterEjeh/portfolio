"use server";

import { z } from "zod";

const ContactSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message too short"),
    honeypot: z.string().max(0, "Bot detected"),
});

export interface ContactState {
    success: boolean;
    error?: string;
}

export async function sendContact(
    _prevState: ContactState,
    formData: FormData
): Promise<ContactState> {
    const result = ContactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        honeypot: formData.get("honeypot") ?? "",
    });

    if (!result.success) {
        const firstError = result.error.issues[0]?.message ?? "Validation error";
        return { success: false, error: firstError };
    }

    // In production: integrate with email service (Resend, SendGrid, etc.)
    // For now, simulate a successful send
    await new Promise((resolve) => setTimeout(resolve, 800));

    return { success: true };
}
