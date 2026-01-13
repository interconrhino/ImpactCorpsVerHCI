import Link from "next/link";
import SiteHeader from "./components/site-header";

export default function Home() {
  const competencies = [
    {
      title: "Care",
      description:
        'Center their "why" around care for the people and places around them.',
    },
    {
      title: "Human agency",
      description:
        "Build the confidence to self-determine and act on challenges they want to tackle.",
    },
    {
      title: "AI fluency",
      description:
        "Use available AI tools resourcefully to move from idea to impact.",
    },
  ];

  const programFeatures = [
    {
      title: "Member-sourced social problems",
      description:
        "Members define problems rooted in lived experience and local insight.",
    },
    {
      title: "Learning by building",
      description:
        "Step-by-step guidance to solve real issues using AI in practical ways.",
    },
    {
      title: "Impact-based financial reward",
      description:
        "Rewards scale with adoption and measurable social impact value.",
    },
  ];

  const theoryOfChange = [
    {
      label: "Output",
      description: (
        <>
          <strong className="font-semibold text-[color:var(--forest)]">
            Immediate community impact
          </strong>{" "}
          with open-sourced solutions tackling community challenges and creating
          direct impact.
        </>
      ),
    },
    {
      label: "Outcome",
      description: (
        <>
          <strong className="font-semibold text-[color:var(--forest)]">
            AI-fluent changemakers
          </strong>{" "}
          with care, human agency, and AI fluency.
        </>
      ),
    },
    {
      label: "Impact",
      description: (
        <>
          <strong className="font-semibold text-[color:var(--forest)]">
            Accelerated, impact-biased careers
          </strong>{" "}
          shaped by care and AI-enabled capacity.
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="relative overflow-hidden -mt-24 pt-24">
        <div className="pointer-events-none absolute -top-48 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(243,199,126,0.45),rgba(243,199,126,0))] blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-24 h-[360px] w-[360px] rounded-full bg-[radial-gradient(closest-side,rgba(31,90,70,0.25),rgba(31,90,70,0))] blur-2xl" />

        <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-6">
          <section className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-8">
              <p
                className="animate-rise text-sm font-bold uppercase tracking-[0.3em] text-[color:var(--moss)]"
                style={{ animationDelay: "40ms" }}
              >
                AI for community impact
              </p>
              <h1
                className="font-display animate-rise text-3xl leading-tight text-[color:var(--ink)] md:text-4xl lg:text-5xl"
                style={{ animationDelay: "120ms" }}
              >
                Empowering under-resourced communities to become{" "}
                <span className="text-[color:var(--moss)]">
                  AI-fluent changemakers
                </span>{" "}
                & shape more purposeful futures.
              </h1>
              <div
                className="animate-rise flex flex-col gap-3 sm:flex-row sm:items-center"
                style={{ animationDelay: "280ms" }}
              >
                <Link
                  href="/join"
                  className="button-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Join the next cohort
                </Link>
                <a
                  href="#mission"
                  className="button-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Learn more
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
        id="mission"
        className="mx-auto w-full max-w-6xl px-6 pb-16 pt-4"
      >
        <div className="flex flex-col gap-10">
          <div className="space-y-4 text-left">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[color:var(--moss)]">
              our mission
            </p>
            <h2 className="font-display text-4xl leading-tight text-[color:var(--ink)] md:text-5xl">
              To empower under-resourced communities to build more impactful
              careers & futures as AI-fluent changemakers.
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[color:var(--moss)]">
              Our vision
            </p>
            <h2 className="font-display text-4xl leading-tight text-[color:var(--ink)] md:text-5xl">
              The world where human capacity to do good is:
            </h2>
            <ul className="space-y-4 font-display text-2xl leading-snug text-[color:var(--ink)]/80 md:text-3xl">
              <li>
                a) Enhanced not eroded by the increased use of AI
              </li>
              <li>
                b) Accessible even to those with least resources
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="surface-card rounded-3xl p-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[color:var(--moss)]">
                The Challenge
              </p>
              <h2 className="font-display text-4xl text-[color:var(--ink)] md:text-5xl">
                Barriers keep under-resourced talent from pursuing high-impact careers.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-[color:var(--stone)]/70 bg-white/80 p-6">
                <h3 className="font-display text-2xl text-[color:var(--ink)] md:text-3xl">
                  Career opportunity cost
                </h3>
                <p className="mt-3 text-base text-[color:var(--ink)]/70 md:text-lg">
                  Time spent on impact can feel like time lost from building stable,
                  high-paying careers.
                </p>
              </div>
              <div className="rounded-3xl border border-[color:var(--stone)]/70 bg-white/80 p-6">
                <h3 className="font-display text-2xl text-[color:var(--ink)] md:text-3xl">
                  Financial constraints
                </h3>
                <p className="mt-3 text-base text-[color:var(--ink)]/70 md:text-lg">
                  Near-term income needs and long-term salary concerns keep the path unaffordable.
                </p>
              </div>
              <div className="rounded-3xl border border-[color:var(--stone)]/70 bg-white/80 p-6">
                <h3 className="font-display text-2xl text-[color:var(--ink)] md:text-3xl">
                  Awareness gap
                </h3>
                <p className="mt-3 text-base text-[color:var(--ink)]/70 md:text-lg">
                  Limited networks and visibility into high-impact career
                  pathways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="approach"
        className="mx-auto w-full max-w-6xl px-6 pb-16"
      >
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[color:var(--moss)]">
              Our approach
            </p>
            <h2 className="font-display text-4xl text-[color:var(--ink)] md:text-5xl">
              We equip members to overcome the barriers by training members to build impact with AI.
            </h2>
            <p className="text-lg text-[color:var(--ink)]/75 md:text-xl">
              ImpactCorps develops three core competencies so members can take
              ownership of their futures while serving their communities. We
              train and reward them to make social impact by using AI to tackle
              challenges close to home.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {competencies.map((competency) => (
              <div
                key={competency.title}
                className="rounded-3xl border border-[color:var(--stone)]/70 bg-white/70 p-6"
              >
                <h3 className="font-display text-2xl text-[color:var(--ink)] md:text-3xl">
                  {competency.title}
                </h3>
                <p className="mt-3 text-base text-[color:var(--ink)]/70 md:text-lg">
                  {competency.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="program"
        className="mx-auto w-full max-w-6xl px-6 pb-16"
      >
        <div className="rounded-3xl border border-[color:var(--stone)]/70 bg-[#e9f1f7] px-8 py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[color:var(--moss)]">
                Our program
              </p>
              <h2 className="font-display text-3xl text-[color:var(--ink)]">
                Learning by building what communities need.
              </h2>
            </div>
            <Link
              href="/join"
              className="button-primary inline-flex w-fit items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Join the program
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {programFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl bg-white px-6 py-6 shadow-[0_16px_40px_rgba(16,25,21,0.08)]"
              >
                <h3 className="font-display text-xl text-[color:var(--ink)]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--ink)]/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 pb-8">
        <div className="h-px w-full bg-[color:var(--stone)]/80" />
      </div>

      <section
        id="theory"
        className="mx-auto w-full max-w-6xl px-6 pb-20"
      >
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[color:var(--moss)]">
              Theory of change
            </p>
            <h2 className="font-display text-4xl text-[color:var(--ink)] md:text-5xl">
              From community solutions to impact-oriented careers.
            </h2>
            <p className="text-lg text-[color:var(--ink)]/75 md:text-xl">
              We focus on outputs that build confidence, outcomes that develop
              changemakers, and long-term impact in career direction.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {theoryOfChange.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-[color:var(--stone)]/70 bg-white/70 p-6"
              >
                <h3 className="font-display text-2xl text-[color:var(--ink)] md:text-3xl">
                  {item.label}
                </h3>
                <p className="mt-3 text-base text-[color:var(--ink)]/70 md:text-lg">
                  {item.description}
                </p>
              </div>
            ))}
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
                Join a cohort of members creating real community impact with
                AI.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Link
                href="/join"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--forest)]"
              >
                Apply
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
