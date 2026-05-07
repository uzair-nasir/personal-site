import headshot from "@/assets/headshot.png";

export function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-12">
        <div className="shrink-0">
          <div className="relative">
            <img
              src={headshot}
              alt="Uzair Nasir"
              className="w-48 h-60 md:w-52 md:h-[17rem] rounded-2xl object-cover object-top"
              style={{
                boxShadow: "0 8px 30px -8px rgba(0,0,0,0.12), 0 2px 8px -2px rgba(0,0,0,0.06)",
              }}
            />
          </div>
        </div>

        <div className="flex-1 pt-1">
          <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase mb-3">
            Uzair Nasir
          </p>
          <h1 className="text-[1.7rem] md:text-[2rem] font-semibold text-foreground leading-[1.2] tracking-tight">
            Engineering, cybersecurity, and practical technical work.
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-md">
            TJHSST student building experience across cybersecurity, research, data work, and hands-on technical execution.
          </p>
          <div className="mt-7 flex gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/nasiruzair/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
