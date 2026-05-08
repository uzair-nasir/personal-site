import headshot from "@/assets/headshot.png";

export function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-20 pb-10 md:pt-28 md:pb-14">
      <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-10">
        <div className="shrink-0">
          <img
            src={headshot}
            alt="Uzair Nasir"
            className="w-56 h-72 md:w-60 md:h-[19rem] rounded-xl object-cover object-top"
            style={{
              boxShadow:
                "0 12px 40px -10px rgba(0,0,0,0.13), 0 4px 12px -4px rgba(0,0,0,0.06)",
            }}
          />
        </div>

        <div className="flex-1">
          <p className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase mb-4">
            Uzair Nasir
          </p>
          <h1 className="text-[1.85rem] md:text-[2.2rem] font-bold text-foreground leading-[1.15] tracking-tight">
            Engineering, cybersecurity, and practical technical work.
          </h1>
          <p className="mt-4 text-[0.95rem] text-muted-foreground leading-relaxed max-w-md">
            <a
              href="https://tjhsst.fcps.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-medium hover:text-primary transition-colors"
            >
              TJHSST
            </a>{" "}
            student building experience across cybersecurity, research, data
            work, and hands-on technical execution.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/nasiruzair/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-7 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted hover:shadow-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
