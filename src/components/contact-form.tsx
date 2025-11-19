"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { composeWhatsAppLink } from "@/lib/whatsapp";

const initialState = {
  name: "",
  email: "",
  phone: "",
  event: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [sending, setSending] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) {
      return;
    }

    setSending(true);

    const details = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nEvent Date: ${form.event}\nNotes: ${form.message}`.trim();
    const link = composeWhatsAppLink(`Hello! I'd love to book a session.\n\n${details}`);

    if (typeof window !== "undefined") {
      window.open(link, "_blank", "noopener,noreferrer");
    }

    setForm(initialState);
    setSending(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-sm text-muted/80">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted/60">Full Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Tinas Makeover Bride"
            className="w-full rounded-xl border border-border bg-white/80 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted/60">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-border bg-white/80 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted/60">Phone / WhatsApp</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="(+234) 807 082 2409"
            className="w-full rounded-xl border border-border bg-white/80 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted/60">Event Date</span>
          <input
            type="date"
            name="event"
            value={form.event}
            onChange={handleChange}
            className="w-full rounded-xl border border-border bg-white/80 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
          />
        </label>
      </div>
      <label className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted/60">Tell us more</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Share your look inspiration, venue details, or number of guests."
          className="w-full rounded-xl border border-border bg-white/80 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/40"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-accent px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-accent-soft hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
        disabled={sending}
      >
        {sending ? "Connecting..." : "Send via WhatsApp"}
      </button>
    </form>
  );
}
