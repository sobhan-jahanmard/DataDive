import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-50/80">
        {/* <div className="absolute top-0 right-0 h-full w-1/2" /> */}
        <div className="absolute bottom-20 right-20 h-1/2 w-1/3 opacity-10">
          <svg
            viewBox="0 0 200 200"
            fill="none"
            className="h-full w-full text-blue-900"
          >
            <circle cx="50" cy="50" fill="currentColor" r="5" />
            <circle cx="150" cy="80" fill="currentColor" r="8" />
            <circle cx="100" cy="150" fill="currentColor" r="6" />
            <path
              d="M50 50 L150 80 L100 150 Z"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>
        <div className="absolute top-20 right-60 h-1/2 w-1/3 opacity-10 rotate-90">
          <svg
            viewBox="0 0 200 200"
            fill="none"
            className="h-full w-full text-blue-900"
          >
            <circle cx="50" cy="50" fill="currentColor" r="5" />
            <circle cx="150" cy="80" fill="currentColor" r="8" />
            <circle cx="100" cy="150" fill="currentColor" r="6" />
            <path
              d="M50 50 L150 80 L100 150 Z"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="absolute top-60 right-90 h-1/2 w-1/3 opacity-10 rotate-180">
          <svg
            viewBox="0 0 200 200"
            fill="none"
            className="h-full w-full text-blue-900"
          >
            <circle cx="50" cy="50" fill="currentColor" r="5" />
            <circle cx="150" cy="80" fill="currentColor" r="8" />
            <circle cx="100" cy="150" fill="currentColor" r="6" />
            <path
              d="M50 50 L150 80 L100 150 Z"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="h-2 w-20 rounded-full bg-blue-600 mb-8" />
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            DataDive
          </h1>
          <p className="mt-6 max-w-2xl text-2xl font-light text-slate-600 md:text-3xl">
            We deliver the data and analyze it so{" "}
            <span className="font-semibold text-blue-700">
              any company can monitor its competitors
            </span>
          </p>
          <p className="mt-4 max-w-xl text-slate-500">
            Enterprise competitor intelligence for any industry. Automate
            monitoring with public web data, structured insights, and actionable
            analytics.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-blue-700 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-800"
            >
              Get in touch
            </Link>
            <a
              href="#how-it-works"
              className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-100"
            >
              How it works
            </a>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-rose-600 border-b border-rose-600 pb-2">
              The problem
            </h2>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              Manual, fragmented competitive monitoring
            </h3>
            <p className="mt-4 text-slate-600">
              Markets change fast. Most companies lack a reliable, scalable way
              to monitor competitors in real time. Manual website checks,
              scattered screenshots, and static spreadsheets lead to delayed
              reactions and lost advantage.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-600 border-b border-blue-600 pb-2">
              Our solution
            </h2>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              Automated intelligence, structured delivery
            </h3>
            <p className="mt-4 text-slate-600">
              DataDive automates competitor intelligence using public web data
              collection and processing. We deliver clean, structured insights
              via a secure analytics dashboard designed for enterprise teams.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-t border-slate-200 bg-white py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            How DataDive Works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            From raw web data to actionable competitive intelligence.
          </p>
          <div className="mt-16 flex flex-col items-stretch gap-8 md:flex-row md:justify-between">
            {[
              {
                step: 1,
                title: "Collect",
                desc: "Gather public competitor data from the web at scale.",
                icon: "📥",
              },
              {
                step: 2,
                title: "Process",
                desc: "Normalize and structure data for comparison and analytics.",
                icon: "⚙️",
              },
              {
                step: 3,
                title: "Deliver",
                desc: "Secure dashboard and exportable reports for your team.",
                icon: "📊",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-1 flex-col items-center rounded-xl border border-slate-200 bg-slate-50/50 p-8 text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-sm font-bold text-white">
                  {item.step}
                </span>
                <span className="mt-4 text-4xl" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="border-t border-slate-200 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            Key Features
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Everything you need for competitive pricing and analytics.
          </p>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Competitor comparison & side-by-side analysis",
              "Pricing trend monitoring",
              "Exportable competitive intelligence",
              "Enterprise role-based access",
              "Data governance & compliance",
              "Real-time visibility into the market",
            ].map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Key outcomes & CTA */}
      <section className="border-t border-slate-200 bg-blue-900 py-20 text-white ">
        <div className="mx-auto max-w-6xl px-6 text-center flex flex-col gap-2 w-fit">
          <h2 className="text-3xl font-bold">Key Outcomes</h2>
          <ul className="mx-auto mt-8 flex max-w-md flex-col gap-4 text-left sm:mx-0 sm:inline-block">
            <li className="flex items-center gap-3">
              <span className="text-green-400">✓</span> Faster pricing decisions
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400">✓</span> Stronger market
              positioning
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-400">✓</span> Reduced manual effort
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-lg bg-white px-6 py-3 font-medium text-blue-900 transition-colors hover:bg-slate-100"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500">
          DataDive — Competitor Intelligence &amp; Data Analytics for Business.
          Confidential &amp; Proprietary.
        </div>
      </footer>
    </div>
  );
}
