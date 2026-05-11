import headshot from "@/assets/headshot.png";

export function Intro() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="grid md:grid-cols-[300px_1fr] gap-12 md:gap-16 items-center">
        {/* Portrait */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-2xl bg-surface -rotate-2"
              aria-hidden="true"
            />
            <img
              src={headshot}
              alt="Uzair Nasir"
              className="relative w-64 h-80 md:w-[300px] md:h-[380px] rounded-xl object-cover object-top"
              style={{
                boxShadow:
                  "0 24px 60px -20px rgba(20,30,50,0.22), 0 8px 20px -8px rgba(20,30,50,0.10)",
              }}
            />
          </div>
        </div>

        {/* Content — name first */}
        <div className="flex flex-col">
          <span className="text-[0.7rem] font-semibold tracking-[0.22em] text-primary uppercase">
            Portfolio
          </span>
          <h1 className="mt-4 text-[2.4rem] md:text-[3.4rem] font-bold text-foreground leading-[1.02] tracking-tight">
            Uzair Nasir.
          </h1>
          <p className="mt-5 text-[1.05rem] md:text-[1.15rem] text-foreground/80 leading-[1.6] max-w-xl">
            Student engineer working across cybersecurity, AI, and applied
            research — focused on building things that are clear, useful, and
            well executed.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Currently at{" "}
            <a
              href="https://tjhsst.fcps.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 underline decoration-border underline-offset-4 hover:decoration-primary hover:text-primary transition-colors"
            >
              Thomas Jefferson High School for Science and Technology
            </a>
            .
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
            >
              View work
            </a>
            <a
              href="https://www.linkedin.com/in/nasiruzair/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-7 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
