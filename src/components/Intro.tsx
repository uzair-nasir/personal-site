import headshot from "@/assets/headshot.png";

export function Intro() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-start">
        {/* Headshot */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-2xl bg-surface"
              aria-hidden="true"
            />
            <img
              src={headshot}
              alt="Uzair Nasir"
              className="relative w-64 h-80 md:w-[280px] md:h-[360px] rounded-xl object-cover object-top"
              style={{
                boxShadow:
                  "0 20px 50px -15px rgba(0,0,0,0.12), 0 6px 16px -6px rgba(0,0,0,0.06)",
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center md:py-4">
          <h1 className="text-[2rem] md:text-[2.6rem] font-bold text-foreground leading-[1.1] tracking-tight">
            Uzair Nasir
          </h1>
          <p className="mt-3 text-[0.95rem] text-primary font-medium tracking-wide">
            Engineering · Cybersecurity · Research
          </p>
          <p className="mt-5 text-[1rem] text-muted-foreground leading-[1.75] max-w-lg">
            I'm a student at{" "}
            <a
              href="https://tjhsst.fcps.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-medium hover:text-primary transition-colors"
            >
              Thomas Jefferson High School for Science and Technology
            </a>{" "}
            focused on engineering, cybersecurity, research, data work, and
            practical technical execution. I care about clarity, communication,
            and getting things done well.
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
