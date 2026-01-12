import Link from "next/link";

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
      title: "Student-sourced social problems",
      description:
        "Participants define problems rooted in lived experience and local insight.",
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
      description:
        "Open-sourced solutions tackling community challenges and creating direct impact.",
    },
    {
      label: "Outcome",
      description:
        "AI-fluent changemakers with care, human agency, and AI fluency.",
    },
    {
      label: "Impact",
      description:
        "Accelerated, impact-biased careers shaped by care and AI-enabled capacity.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-48 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(243,199,126,0.45),rgba(243,199,126,0))] blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-24 h-[360px] w-[360px] rounded-full bg-[radial-gradient(closest-side,rgba(31,90,70,0.25),rgba(31,90,70,0))] blur-2xl" />
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-6 pt-8">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            ImpactCorps
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[color:var(--ink)]/70 md:flex">
            <a href="#mission" className="hover:text-[color:var(--ink)]">
              Mission
            </a>
            <a href="#approach" className="hover:text-[color:var(--ink)]">
              Approach
            </a>
            <a href="#program" className="hover:text-[color:var(--ink)]">
              Program
            </a>
            <a href="#theory" className="hover:text-[color:var(--ink)]">
              Theory of Change
            </a>
          </nav>
          <Link
            href="/join"
            className="button-primary rounded-full px-5 py-2 text-sm font-semibold"
          >
            Join Us
          </Link>
        </header>

        <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-6">
          <section className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-8">
              <p
                className="animate-rise text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]"
                style={{ animationDelay: "40ms" }}
              >
                AI for community impact
              </p>
              <h1
                className="font-display animate-rise text-4xl leading-tight text-[color:var(--ink)] md:text-5xl lg:text-6xl"
                style={{ animationDelay: "120ms" }}
              >
                Empowering under-resourced students to become AI-fluent
                changemakers.
              </h1>
              <p
                className="animate-rise text-lg text-[color:var(--ink)]/75 md:text-xl"
                style={{ animationDelay: "200ms" }}
              >
                ImpactCorps equips students with the care, agency, and AI fluency
                to build solutions for the challenges they see every day.
              </p>
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
              className="surface-card animate-floaty animate-rise rounded-3xl p-8"
              style={{ animationDelay: "160ms" }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
                Program focus
              </p>
              <h2 className="font-display mt-4 text-2xl text-[color:var(--ink)]">
                A launchpad for impact-driven careers.
              </h2>
              <p className="mt-4 text-sm text-[color:var(--ink)]/70">
                Participants build AI-powered solutions rooted in community
                needs while earning recognition and support for the impact they
                create.
              </p>
              <div className="mt-6 grid gap-4">
                {["Care", "Human agency", "AI fluency"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-[color:var(--stone)]/70 bg-white/70 px-4 py-3"
                  >
                    <span className="text-sm font-semibold text-[color:var(--ink)]">
                      {item}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--moss)]">
                      Core
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      <section
        id="mission"
        className="mx-auto w-full max-w-6xl px-6 pb-16 pt-4"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
              Mission
            </p>
            <h2 className="font-display text-3xl text-[color:var(--ink)]">
              Empower under-resourced students to shape more impactful futures.
            </h2>
            <p className="text-base text-[color:var(--ink)]/75">
              Our mission is to empower under-resourced students to become
              AI-fluent changemakers and steer their careers toward impact.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
              Vision
            </p>
            <h2 className="font-display text-3xl text-[color:var(--ink)]">
              Human capacity to care, amplified by AI.
            </h2>
            <ul className="space-y-3 text-base text-[color:var(--ink)]/75">
              <li>
                A world where care is enhanced, not eroded, by increased use of
                AI.
              </li>
              <li>
                Opportunity to do good is accessible even to those with the
                least resources.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="surface-card rounded-3xl p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
                The problem
              </p>
              <h2 className="font-display text-3xl text-[color:var(--ink)]">
                Barriers keep talented students from pursuing impact.
              </h2>
              <p className="text-base text-[color:var(--ink)]/75">
                Under-resourced students face structural challenges that make
                impact-driven paths feel risky or unreachable.
              </p>
            </div>
            <ul className="space-y-4 text-base text-[color:var(--ink)]/75">
              <li>
                <span className="font-semibold text-[color:var(--ink)]">
                  Career opportunity cost:
                </span>{" "}
                time spent on impact feels like time lost from stable,
                high-paying careers.
              </li>
              <li>
                <span className="font-semibold text-[color:var(--ink)]">
                  Financial constraints:
                </span>{" "}
                near-term income needs and long-term salary concerns.
              </li>
              <li>
                <span className="font-semibold text-[color:var(--ink)]">
                  Awareness gap:
                </span>{" "}
                limited networks and visibility into high-impact career
                pathways.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="approach"
        className="mx-auto w-full max-w-6xl px-6 pb-16"
      >
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
              Approach & solution
            </p>
            <h2 className="font-display text-3xl text-[color:var(--ink)]">
              We train and reward students to build impact with AI.
            </h2>
            <p className="text-base text-[color:var(--ink)]/75">
              ImpactCorps develops three core competencies so students can take
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
                <h3 className="font-display text-xl text-[color:var(--ink)]">
                  {competency.title}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--ink)]/70">
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
        <div className="rounded-3xl border border-[color:var(--stone)]/70 bg-[color:var(--mist)] px-8 py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
                Program features
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

      <section
        id="theory"
        className="mx-auto w-full max-w-6xl px-6 pb-20"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--moss)]">
              Theory of change
            </p>
            <h2 className="font-display text-3xl text-[color:var(--ink)]">
              From community solutions to impact-oriented careers.
            </h2>
            <p className="text-base text-[color:var(--ink)]/75">
              We focus on outputs that build confidence, outcomes that develop
              changemakers, and long-term impact in career direction.
            </p>
          </div>
          <div className="space-y-4">
            {theoryOfChange.map((item, index) => (
              <div
                key={item.label}
                className="relative rounded-3xl border border-[color:var(--stone)]/70 bg-white/70 px-6 py-5"
              >
                <span className="absolute -left-3 top-5 hidden h-10 w-10 items-center justify-center rounded-full bg-[color:var(--sun)] text-sm font-semibold text-[color:var(--ink)] lg:flex">
                  {index + 1}
                </span>
                <h3 className="font-display text-xl text-[color:var(--ink)]">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--ink)]/70">
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
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                Ready to build?
              </p>
              <h2 className="font-display text-3xl text-white">
                Join a cohort of students creating real community impact with
                AI.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Link
                href="/join"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--forest)]"
              >
                Express interest
              </Link>
              <a
                href="#mission"
                className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white"
              >
                Revisit the mission
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
