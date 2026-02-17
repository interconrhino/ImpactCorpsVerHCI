"use client";

import { useState } from "react";
import SiteHeader from "../components/site-header";

type FormState = {
  name: string;
  email: string;
  organisation: string;
  phone: string;
  subject: string;
  content: string;
};

export default function ContactPage() {
  const GENERIC_SUBMIT_ERROR =
    "We could not submit your form right now. Please try again later.";

  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    organisation: "",
    phone: "",
    subject: "",
    content: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formState.name.trim()) {
      return "Please enter your name.";
    }
    if (!formState.email.trim()) {
      return "Please enter your email.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      return "Please enter a valid email address.";
    }
    if (!formState.subject.trim()) {
      return "Please enter a subject.";
    }
    if (!formState.content.trim()) {
      return "Please enter your message.";
    }
    return null;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);
    const validationMessage = validate();
    if (validationMessage) {
      setStatus("error");
      setMessage(validationMessage);
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      let payload: { error?: string } | null = null;
      try {
        payload = await response.json();
      } catch {
        payload = null;
      }
      if (!response.ok) {
        const errorMessage =
          response.status >= 500
            ? GENERIC_SUBMIT_ERROR
            : payload?.error || "Please review your form and try again.";
        throw new Error(errorMessage);
      }

      setStatus("success");
      setMessage("Thanks for reaching out! We'll be in touch soon.");
      setFormState({
        name: "",
        email: "",
        organisation: "",
        phone: "",
        subject: "",
        content: "",
      });
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : GENERIC_SUBMIT_ERROR
      );
    }
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="relative overflow-hidden -mt-24 pt-24">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(243,199,126,0.35),rgba(243,199,126,0))] blur-3xl" />
        <div className="pointer-events-none absolute -left-20 top-24 h-[320px] w-[320px] rounded-full bg-[radial-gradient(closest-side,rgba(31,90,70,0.2),rgba(31,90,70,0))] blur-3xl" />

        <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <p
                className="animate-rise text-sm font-bold uppercase tracking-[0.3em] text-[color:var(--moss)]"
                style={{ animationDelay: "40ms" }}
              >
                Contact us
              </p>
              <h1
                className="font-display animate-rise text-4xl text-[color:var(--ink)] md:text-5xl"
                style={{ animationDelay: "120ms" }}
              >
                Let&apos;s build impact together.
              </h1>
              <p
                className="animate-rise text-base text-[color:var(--ink)]/75"
                style={{ animationDelay: "200ms" }}
              >
                Share your questions, partnership ideas, or program inquiries.
                We&apos;ll respond as soon as possible.
              </p>
              <div className="rounded-3xl border border-[color:var(--stone)]/70 bg-white/70 p-6">
                <h2 className="font-display text-xl text-[color:var(--ink)]">
                  What we can help with
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--ink)]/70">
                  <li>Student program questions and timelines.</li>
                  <li>Community partnerships and collaborations.</li>
                </ul>
              </div>
            </div>

            <form
              className="surface-card animate-rise rounded-3xl p-8"
              style={{ animationDelay: "240ms" }}
              onSubmit={handleSubmit}
            >
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-semibold" htmlFor="name">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[color:var(--stone)]/80 bg-white px-4 py-3 text-sm focus:border-[color:var(--moss)] focus:outline-none"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label
                    className="text-sm font-semibold"
                    htmlFor="organisation"
                  >
                    Organisation
                  </label>
                  <input
                    id="organisation"
                    name="organisation"
                    type="text"
                    value={formState.organisation}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[color:var(--stone)]/80 bg-white px-4 py-3 text-sm focus:border-[color:var(--moss)] focus:outline-none"
                    placeholder="Your organisation"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold" htmlFor="email">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[color:var(--stone)]/80 bg-white px-4 py-3 text-sm focus:border-[color:var(--moss)] focus:outline-none"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold" htmlFor="phone">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[color:var(--stone)]/80 bg-white px-4 py-3 text-sm focus:border-[color:var(--moss)] focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold" htmlFor="subject">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formState.subject}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[color:var(--stone)]/80 bg-white px-4 py-3 text-sm focus:border-[color:var(--moss)] focus:outline-none"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold" htmlFor="content">
                    Message *
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={formState.content}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[color:var(--stone)]/80 bg-white px-4 py-3 text-sm focus:border-[color:var(--moss)] focus:outline-none"
                    rows={5}
                    placeholder="Share your message."
                    required
                  />
                </div>

                {message ? (
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm ${
                      status === "success"
                        ? "bg-[color:var(--mist)] text-[color:var(--moss)]"
                        : "bg-[#fce6e6] text-[#9b1c1c]"
                    }`}
                    role="status"
                  >
                    {message}
                  </div>
                ) : null}

                <button
                  type="submit"
                  className="button-primary w-full rounded-full px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
