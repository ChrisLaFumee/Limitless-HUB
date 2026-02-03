export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-16 md:pt-0 min-h-[60vh] md:h-[100svh] md:min-h-[560px] w-full overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: "url('/images/limitless-hero.jpg')",
          backgroundPosition: 'top center',
        }}
        aria-hidden="true"
      />

      {/* Dark/gradient overlay for contrast */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      {/* Optional gradient for depth: replace line above with:
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/20" aria-hidden="true" />
      */}

      {/* Foreground content */}
      <div className="relative z-10 h-full max-w-full w-full mx-auto px-6 flex flex-col md:flex-row items-start md:items-center md:justify-between gap-8 text-white">
        <div className="md:w-2/3 text-center md:text-left md:pr-8">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            One Hub. <span className="text-brand-orange">Limitless</span>{' '}
            Progress.
          </h1>

          <p className="mt-6 max-w-2xl md:max-w-full text-base md:text-xl text-white/90">
            Built for beginners to advanced. Whether you're a day to day to
            grinder looking to improve their your daily life, a desk athlete
            working from home and just needing to move,or an all-out
            high-performer, this is the place for you. Programs, tips & tricks,
            fitness and nutrition tools, coaching and more—all in one place.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-wrap items-center md:justify-start justify-center gap-4 md:gap-6">
            <a
              href="https://tally.so/r/meWEQO"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10 transition"
            >
              Free Limitless Membership
            </a>

            <a
              href="https://tally.so/r/wkLYb6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10 transition"
            >
              12-Week Transformation
            </a>

            <a
              href="https://www.skool.com/limitlessperformancelab"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10 transition"
            >
              Limitless Performance Lab
            </a>

            <a
              href="https://calendly.com/limitlessprogressions"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10 transition"
            >
              Book a Call
            </a>

            <a
              href="https://discord.gg/7DBJzpTz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10 transition"
            >
              The Limitless Hub Discord
            </a>
          </div>
        </div>

        {/* Headshot column on the right for desktop */}
        <div className="md:w-1/3 w-full mt-8 md:mt-0 flex flex-col items-center md:items-center justify-center md:justify-end">
          <img
            src="/Headshot.jpeg"
            alt="Coach Chris"
            className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-brand-orange shadow-xl object-cover object-center"
            loading="lazy"
          />

          {/* Text box underneath headshot */}
          <div className="mt-4 w-full max-w-xs bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
            <p className="text-sm md:text-base text-white/90">
              Functional Performance Coach with over a decade of experience.
            </p>
          </div>
        </div>

        {/* Scroll cue removed (unused) */}
      </div>
    </section>
  );
}
