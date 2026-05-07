import headshot from "@/assets/headshot.png";

export function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-14">
        <div className="shrink-0">
          <img
            src={headshot}
            alt="Uzair Nasir"
            className="w-40 h-52 md:w-44 md:h-56 rounded-xl object-cover object-top shadow-sm"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground leading-snug">
            Engineering, cybersecurity, and practical technical work.
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-lg">
            TJHSST student building experience across cybersecurity, research, data work, and hands-on technical execution.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/nasiruzair/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
