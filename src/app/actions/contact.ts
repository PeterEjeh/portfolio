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

    const accessKey = process.env.WEB3FORMS_KEY;
    if (!accessKey || accessKey === "your_access_key_here") {
        console.error("WEB3FORMS_KEY is not configured");
        return { success: false, error: "Contact form is not configured yet — please try emailing me directly." };
    }

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey,
                name: result.data.name,
                email: result.data.email,
                message: result.data.message,
                subject: `Portfolio contact from ${result.data.name}`,
                from_name: "Peter Ejeh Portfolio",
                botcheck: false,
            }),
        });

        // Web3Forms can return HTML on bad keys — safely parse text first
        const text = await response.text();
        let json: { success?: boolean; message?: string } = {};
        try {
            json = JSON.parse(text);
        } catch {
            console.error("Non-JSON response from Web3Forms:", text.slice(0, 200));
            return { success: false, error: "Unexpected response from mail service. Please try again." };
        }

        if (!response.ok || !json.success) {
            console.error("Web3Forms error:", json.message ?? text.slice(0, 200));
            return { success: false, error: json.message ?? "Failed to send. Please try again." };
        }

        return { success: true };
    } catch (err) {
        console.error("Contact form fetch error:", err);
        return { success: false, error: "Network error. Please check your connection and try again." };
    }
}
