import Link from "next/link";
import SiteHeader from "../components/site-header";

export default function OurProgramPage() {
  const programFeatures = [
    {
      title: "Community-rooted projects",
      description:
        "Work on problems found by you based on lived experience in your own community.",
    },
    {
      title: "Learning by building",
      description:
        "Develop problem-solving skills and AI fluency by shipping real solutions.",
    },
    {
      title: "Impact-based reward",
      description:
        "Earn rewards tied to adoption and measurable outcomes.",
    },
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Apply and get accepted",
      description:
        "Share your motivation, background, and the communities you want to serve.",
    },
    {
      step: "02",
      title: "Community problem identification",
      description:
        "Develop a long-list of social problems rooted in lived experience by talking to those around you.",
    },
    {
      step: "03",
      title: "Choose a problem & beneficiary",
      description:
        "Select a challenge and the one person you want to build the solution for.",
    },
    {
      step: "04",
      title: "Build using AI (guided sprints)",
      description:
        "Learn to use AI to build the solution through our guided program.",
    },
    {
      step: "05",
      title: "Launch MVP + iterate",
      description:
        "Quickly launch the MVP and iterate with the target beneficiary.",
    },
    {
      step: "06",
      title: "Measure + showcase impact",
      description:
        "Track and quantify your impact of your solution on the community.",
    },
    {
      step: "07",
      title: "Earn impact-based rewards",
      description:
        "Get paid for social impact (measured in terms of # of beneficiaires & value of impact)",
    },
    {
      step: "08",
      title: "Onwards and upwards!",
      description:
        "Begin another projects or continue scaling the project as an AI-fluent changemaker!",
    },
  ];

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="relative overflow-hidden -mt-24 pt-24">
        <div className="pointer-events-none absolute -top-48 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(243,199,126,0.45),rgba(243,199,126,0))] blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-24 h-[360px] w-[360px] rounded-full bg-[radial-gradient(closest-side,rgba(31,90,70,0.25),rgba(31,90,70,0))] blur-2xl" />

        <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-6">
          <section
            id="signup"
            className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="space-y-8">
              <p
                className="animate-rise text-sm font-bold uppercase tracking-[0.3em] text-[color:var(--moss)]"
                style={{ animationDelay: "40ms" }}
              >
                Our program
              </p>
              <h1
                className="font-display animate-rise text-3xl leading-tight text-[color:var(--ink)] md:text-4xl lg:text-5xl"
                style={{ animationDelay: "120ms" }}
              >
                Make an impact. <br/>Build resume. <br/>Get paid.
              </h1>
              <p
                className="animate-rise text-lg text-[color:var(--ink)]/75 md:text-xl"
                style={{ animationDelay: "200ms" }}
              >
                A cohort where you ship real solutions, earn
                rewards for measurable outcomes, and leave with a portfolio that
                proves your impact.
              </p>
              <div
                className="animate-rise flex flex-col gap-3 sm:flex-row sm:items-center"
                style={{ animationDelay: "280ms" }}
              >
                <Link
                  href="/join"
                  className="button-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Apply now
                </Link>
                <a
                  href="#journey"
                  className="button-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  See how it works
                </a>
              </div>
            </div>
            <div
              className="animate-floaty animate-rise rounded-3xl p-6 lg:p-8"
              style={{ animationDelay: "160ms" }}
            >
              <div className="relative mx-auto mt-4 flex aspect-square w-full max-w-[440px] items-center justify-center [container-type:inline-size]">
                <div className="absolute left-1/2 top-[3cqw] flex h-[68cqw] w-[68cqw] -translate-x-1/2 items-start justify-center pt-[18cqw] rounded-full bg-[color:var(--clay)]/75 shadow-[0_20px_50px_rgba(16,25,21,0.18)] mix-blend-multiply">
                  <span className="text-center text-[clamp(1.2rem,5.6cqw,1.95rem)] font-medium leading-[0.95] text-[color:var(--ink)]/60">
                    AI Fluency
                  </span>
                </div>
                <div className="absolute left-[-5cqw] top-[42cqw] h-[68cqw] w-[68cqw] rounded-full bg-[color:var(--forest)]/75 shadow-[0_20px_50px_rgba(16,25,21,0.18)] mix-blend-multiply">
                  <span className="absolute bottom-[16cqw] left-[14cqw] text-[clamp(1.2rem,5.6cqw,1.95rem)] font-medium text-white/70">
                    Care
                  </span>
                </div>
                <div className="absolute right-[-5cqw] top-[42cqw] h-[68cqw] w-[68cqw] rounded-full bg-[color:var(--moss)]/75 shadow-[0_20px_50px_rgba(16,25,21,0.18)] mix-blend-multiply">
                  <span className="absolute bottom-[14cqw] right-[12cqw] text-right text-[clamp(1.2rem,5.6cqw,1.95rem)] font-medium leading-tight text-white/70">
                    Human
                    <br />
                    Agency
                  </span>
                </div>
                <div className="font-display absolute left-1/2 top-[64cqw] z-10 flex h-[46cqw] w-[46cqw] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f7f2e7] text-center text-[clamp(1.15rem,5.8cqw,1.95rem)] font-bold text-[color:var(--forest)] shadow-[0_14px_30px_rgba(16,25,21,0.2)]">
                  <span className="leading-[1.2]">
                    AI-fluent
                    <br />
                    Changemaker
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="h-px w-full bg-[color:var(--stone)]/80" />
      </div>

      <section
        id="features"
        className="mx-auto w-full max-w-6xl px-6 pb-16 pt-4"
      >
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[color:var(--moss)]">
              Key program features
            </p>
            <h2 className="font-display text-4xl text-[color:var(--ink)] md:text-5xl">
              Program centred on your growth as AI-fluent changemakers.
            </h2>
            <p className="text-lg text-[color:var(--ink)]/75 md:text-xl">
              Everything is designed to help you ship real work, measure impact,
              and build a career story that stands out.
            </p>
          </div>
          <div className="grid gap-4">
            {programFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-[color:var(--stone)]/70 bg-white/70 p-6"
              >
                <h3 className="font-display text-2xl text-[color:var(--ink)] md:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base text-[color:var(--ink)]/70 md:text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="journey"
        className="mx-auto w-full max-w-6xl px-6 pb-20"
      >
        <div className="surface-card rounded-3xl p-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[color:var(--moss)]">
                Step-by-step journey
              </p>
              <h2 className="font-display text-3xl text-[color:var(--ink)] md:text-4xl">
                What to expect from week one to launch.
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-6 h-full w-px -translate-y-3 bg-[color:var(--stone)]/80" />
              <div className="space-y-4">
                {journeySteps.map((step) => (
                  <div key={step.step} className="relative pl-10">
                    <span className="absolute left-[10px] top-8 h-3 w-3 rounded-full bg-[color:var(--moss)] shadow-[0_0_0_6px_rgba(31,90,70,0.12)]" />
                    <div className="rounded-3xl border border-[color:var(--stone)]/70 bg-white/80 p-6">
                      <p className="text-sm font-bold text-[color:var(--moss)]">
                        {step.step}
                      </p>
                      <h3 className="mt-3 font-display text-2xl text-[color:var(--ink)]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-base text-[color:var(--ink)]/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-[color:var(--forest)] px-10 py-12 text-white">
          <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-[radial-gradient(closest-side,rgba(243,199,126,0.6),rgba(243,199,126,0))] blur-2xl" />
          <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/60">
                Ready to build?
              </p>
              <h2 className="font-display text-3xl text-white">
                Build your impact portfolio and get paid for results.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Link
                href="/join"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--forest)]"
              >
                Apply now
              </Link>
              <a
                href="#features"
                className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white"
              >
                Review features
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
