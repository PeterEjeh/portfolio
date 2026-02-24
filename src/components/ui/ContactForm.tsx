"use client";

import { useActionState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { sendContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { success: false };

export function ContactForm() {
    const [state, formAction, isPending] = useActionState(sendContact, initialState);

    useEffect(() => {
        if (state.success) toast.success("Message sent! I'll get back to you soon.", { duration: 5000 });
        else if (state.error) toast.error(state.error);
    }, [state]);

    return (
        <motion.form
            action={formAction}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
        >
            <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

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

            <button type="submit" disabled={isPending || state.success}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all shadow-lg shadow-violet-500/25">
                {isPending ? (<><Loader2 className="w-4 h-4 animate-spin" />Sending...</>) :
                    state.success ? "Message Sent ✓" :
                        (<><Send className="w-4 h-4" />Send Message</>)}
            </button>
        </motion.form>
    );
}
