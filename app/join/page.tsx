"use client";

import { useState } from "react";
import SiteHeader from "../components/site-header";

type FormState = {
  name: string;
  email: string;
  school: string;
  demographics: string[];
  yearLevel: string;
  major: string;
  pastExperience: string;
  socialProblem: string;
  proceedWithoutRewards: string;
};

const demographicOptions = [
  { label: "Low income (>50% of tuition covered)", value: "Low income" },
  { label: "First-gen college student", value: "1st gen college" },
  { label: "BIPOC", value: "BIPOC" },
  { label: "Immigrant or 1st/2nd gen", value: "Immigrant" },
  { label: "Disability or access needs", value: "Disabled" },
  { label: "N/A", value: "N/A" },
  { label: "Prefer not to share", value: "Notpreferred" },
];

export default function JoinPage() {
  const MAX_OPTIONAL_TEXT_LENGTH = 500;
  const GENERIC_SUBMIT_ERROR =
    "We could not submit your form right now. Please try again later.";

  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    school: "",
    demographics: [],
    yearLevel: "",
    major: "",
    pastExperience: "",
    socialProblem: "",
    proceedWithoutRewards: "",
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

  const toggleDemographic = (value: string) => {
    setFormState((prev) => {
      const next = prev.demographics.includes(value)
        ? prev.demographics.filter((item) => item !== value)
        : [...prev.demographics, value];
      return { ...prev, demographics: next };
    });
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
    if (!formState.school.trim()) {
      return "Please enter your school.";
    }
    if (!formState.yearLevel) {
      return "Please select your year level.";
    }
    if (!formState.major.trim()) {
      return "Please enter your current major or intended field of study.";
    }
    if (formState.pastExperience.trim().length > MAX_OPTIONAL_TEXT_LENGTH) {
      return "Please keep past experience within 500 characters.";
    }
    if (formState.socialProblem.trim().length > MAX_OPTIONAL_TEXT_LENGTH) {
      return "Please keep social problem within 500 characters.";
    }
    if (formState.demographics.length === 0) {
      return "Please select at least one demographic.";
    }
    if (!formState.proceedWithoutRewards) {
      return "Please share your willingness to participate without rewards.";
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
      const response = await fetch("/api/interest", {
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
      setMessage("Thanks for your interest! We will reach out soon.");
      setFormState({
        name: "",
        email: "",
        school: "",
        demographics: [],
        yearLevel: "",
        major: "",
        pastExperience: "",
        socialProblem: "",
        proceedWithoutRewards: "",
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
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(31,90,70,0.25),rgba(31,90,70,0))] blur-3xl" />
        <div className="pointer-events-none absolute -left-20 top-24 h-[300px] w-[300px] rounded-full bg-[radial-gradient(closest-side,rgba(243,199,126,0.35),rgba(243,199,126,0))] blur-3xl" />

        <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-4">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-6">
              <p
                className="animate-rise text-sm font-bold uppercase tracking-[0.3em] text-[color:var(--moss)]"
                style={{ animationDelay: "40ms" }}
              >
                Join ImpactCorps
              </p>
              <h1
                className="font-display animate-rise text-4xl text-[color:var(--ink)] md:text-5xl"
                style={{ animationDelay: "120ms" }}
              >
                Bring your community insight. Build with AI. Create impact.
              </h1>
              <p
                className="animate-rise text-base text-[color:var(--ink)]/75"
                style={{ animationDelay: "200ms" }}
              >
                Share your interest and we will connect you with upcoming cohorts
                and resources. We welcome students who want to lead with care.
              </p>
              <div className="rounded-3xl border border-[color:var(--stone)]/70 bg-white/70 p-6">
                <h2 className="font-display text-xl text-[color:var(--ink)]">
                  What to expect
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-[color:var(--ink)]/70">
                  <li>Guided learning to build tech solutions using AI.</li>
                  <li>Recognition tied to measurable community impact.</li>
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
                  <label className="text-sm font-semibold" htmlFor="school">
                    School/organisation *
                  </label>
                  <input
                    id="school"
                    name="school"
                    type="text"
                    value={formState.school}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[color:var(--stone)]/80 bg-white px-4 py-3 text-sm focus:border-[color:var(--moss)] focus:outline-none"
                    placeholder="School or program"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold" htmlFor="yearLevel">
                    Year level *
                  </label>
                  <select
                    id="yearLevel"
                    name="yearLevel"
                    value={formState.yearLevel}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[color:var(--stone)]/80 bg-white px-4 py-3 text-sm focus:border-[color:var(--moss)] focus:outline-none"
                    required
                  >
                    <option value="">Select one</option>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                    <option value="Graduate">Graduate</option>
                    <option value="N/A">N/A</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold" htmlFor="major">
                    Current major or intended field of study *
                  </label>
                  <input
                    id="major"
                    name="major"
                    type="text"
                    value={formState.major}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[color:var(--stone)]/80 bg-white px-4 py-3 text-sm focus:border-[color:var(--moss)] focus:outline-none"
                    placeholder="e.g., Computer Science, Biology, Public Policy"
                    required
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Self-identified background *
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {demographicOptions.map((option) => {
                      const selected = formState.demographics.includes(
                        option.value
                      );
                      return (
                        <label
                          key={option.value}
                          className={`flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm ${
                            selected
                              ? "border-[color:var(--moss)] bg-[color:var(--mist)]"
                              : "border-[color:var(--stone)]/80 bg-white"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selected}
                            onChange={() => toggleDemographic(option.value)}
                            className="h-4 w-4 accent-[color:var(--moss)]"
                          />
                          {option.label}
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label
                    className="text-sm font-semibold"
                    htmlFor="proceedWithoutRewards"
                  >
                    Are you willing to participate in the program without
                    financial rewards? *
                  </label>
                  <select
                    id="proceedWithoutRewards"
                    name="proceedWithoutRewards"
                    value={formState.proceedWithoutRewards}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[color:var(--stone)]/80 bg-white px-4 py-3 text-sm focus:border-[color:var(--moss)] focus:outline-none"
                    required
                  >
                    <option value="">Select one</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold" htmlFor="pastExperience">
                    Optional: Past experience with using technology or tackling social challenges (this section does not affect selection).
                  </label>
                  <textarea
                    id="pastExperience"
                    name="pastExperience"
                    value={formState.pastExperience}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[color:var(--stone)]/80 bg-white px-4 py-3 text-sm focus:border-[color:var(--moss)] focus:outline-none"
                    rows={4}
                    maxLength={MAX_OPTIONAL_TEXT_LENGTH}
                    placeholder="Share any relevant projects, volunteer work, clubs, hackathons, or initiatives."
                  />
                  <p className="mt-1 text-right text-xs text-[color:var(--ink)]/55">
                    {formState.pastExperience.length}/{MAX_OPTIONAL_TEXT_LENGTH}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-semibold" htmlFor="socialProblem">
                    Optional: Social problem in mind
                  </label>
                  <textarea
                    id="socialProblem"
                    name="socialProblem"
                    value={formState.socialProblem}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[color:var(--stone)]/80 bg-white px-4 py-3 text-sm focus:border-[color:var(--moss)] focus:outline-none"
                    rows={4}
                    maxLength={MAX_OPTIONAL_TEXT_LENGTH}
                    placeholder="Share a challenge in your community you want to tackle."
                  />
                  <p className="mt-1 text-right text-xs text-[color:var(--ink)]/55">
                    {formState.socialProblem.length}/{MAX_OPTIONAL_TEXT_LENGTH}
                  </p>
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
                  {status === "submitting" ? "Submitting..." : "Submit interest"}
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
