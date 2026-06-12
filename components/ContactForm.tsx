"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";
    if (!form.message.trim())
      e.message = "Tell us a little about your project.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        throw new Error(data.error || "Failed");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      setSubmitError(`Error: ${msg}`);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-[#15181D] p-10 text-center">
        <CheckCircle2 size={44} className="text-brand" />
        <h3 className="mt-4 text-xl font-bold">Thank you!</h3>
        <p className="mt-2 text-white/60">
          We&apos;ve received your message and will get back to you within one
          business day.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-lg border border-white/15 bg-white px-4 py-3 text-sm text-black outline-none transition-colors focus:border-brand";

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input
            className={field}
            placeholder="Your name *"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-brand">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            className={field}
            placeholder="Email address *"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-brand">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={field}
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
        <select
          className={field}
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
        >
          <option value="" className="bg-white/[0.04]">
            Service you&apos;re interested in
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title} className="bg-white/[0.04]">
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <textarea
          className={`${field} min-h-[140px] resize-y`}
          placeholder="Tell us about your project *"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-brand">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send Message"} <Send size={16} />
      </button>
      {submitError && <p className="text-sm text-brand">{submitError}</p>}
    </form>
  );
}
