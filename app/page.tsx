export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          4-Minute Lessons
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Learn web design fundamentals<br />
          <span className="text-[#58a6ff]">in minutes, not hours</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Bite-sized interactive modules covering typography, color theory, layout principles, and UI patterns — built for developers, designers, and founders who are short on time.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Start Learning — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No fluff, just skills.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {["Typography", "Color Theory", "Layout Principles", "UI Patterns", "Progress Tracking", "Hands-on Exercises"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-1.5 rounded-full">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited 4-minute lessons",
              "All design modules included",
              "Interactive exercises & quizzes",
              "Progress dashboard",
              "New lessons added weekly",
              "Cancel anytime"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base py-3 rounded-lg transition-colors duration-200 text-center"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Do I need design experience to start?",
              a: "Not at all. Lessons are built for complete beginners — developers, founders, and anyone who wants to understand design without a formal background."
            },
            {
              q: "How long are the lessons?",
              a: "Each module is designed to be completed in under 4 minutes. You can fit a lesson into a coffee break and still walk away with a real, applicable skill."
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes, you can cancel anytime from your account dashboard. No contracts, no hidden fees — just straightforward monthly billing."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} Web Design Speed Trainer. All rights reserved.
      </footer>
    </main>
  );
}
