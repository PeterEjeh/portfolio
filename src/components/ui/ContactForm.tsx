"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const WEB3FORMS_KEY = "d5570d08-cbf7-4a2b-ad91-03435ffce4e6";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", WEB3FORMS_KEY);
        formData.append("subject", `Portfolio contact from ${formData.get("name")}`);
        formData.append("from_name", "Peter Ejeh Portfolio");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setStatus("sent");
                toast.success("Message sent! I'll get back to you soon.", { duration: 5000 });
                form.reset();
            } else {
                setStatus("error");
                toast.error(data.message ?? "Failed to send. Please try again.");
            }
        } catch {
            setStatus("error");
            toast.error("Network error. Please check your connection and try again.");
        }
    }

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
        >
            {/* Honeypot — hidden from real users, catches bots */}
            <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

            <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="t-subtle text-xs font-medium uppercase tracking-wider">Name</label>
                    <input id="name" name="name" type="text" required placeholder="Your name"
                        className="s-input w-full px-4 py-3 rounded-xl text-sm transition-all" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="t-subtle text-xs font-medium uppercase tracking-wider">Email</label>
                    <input id="email" name="email" type="email" required placeholder="your@email.com"
                        className="s-input w-full px-4 py-3 rounded-xl text-sm transition-all" />
                </div>
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="t-subtle text-xs font-medium uppercase tracking-wider">Message</label>
                <textarea id="message" name="message" required rows={5} placeholder="Tell me what you're working on..."
                    className="s-input w-full px-4 py-3 rounded-xl text-sm transition-all resize-none" />
            </div>

            <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all shadow-lg shadow-violet-500/25"
            >
                {status === "sending" ? <><Loader2 className="w-4 h-4 animate-spin" />Sending...</> :
                    status === "sent" ? "Message Sent ✓" :
                        <><Send className="w-4 h-4" />Send Message</>}
            </button>
        </motion.form>
    );
}
