"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok) {
        setState("error");
        setErrorMessage(data.error ?? "Something went wrong.");
        return;
      }
      setState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setState("error");
      setErrorMessage("Failed to send. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-xl px-6 py-20">
        <h1 className="text-3xl font-bold text-slate-900">Contact Us</h1>
        <p className="mt-2 text-slate-600">
          Have questions about DataDive? Send us a message and we&apos;ll get back to you.
        </p>
        <p className="mt-1 text-sm text-slate-500">
          You can also email us at{" "}
          <a
            href="mailto:contact@datadive.example.com"
            className="text-blue-600 hover:underline"
          >
            contact@datadive.example.com
          </a>
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Your message..."
            />
          </div>

          {state === "error" && (
            <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{errorMessage}</p>
          )}
          {state === "success" && (
            <p className="rounded-lg bg-green-50 p-3 text-sm text-green-700">
              Message sent. We&apos;ll be in touch soon.
            </p>
          )}

          <button
            type="submit"
            disabled={state === "sending"}
            className="w-full rounded-lg bg-blue-700 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-800 disabled:opacity-60"
          >
            {state === "sending" ? "Sending…" : "Send message"}
          </button>
        </form>
      </section>
    </div>
  );
}
