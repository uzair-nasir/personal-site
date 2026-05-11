import headshot from "@/assets/headshot.png";

export function Intro() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-10 pb-16 md:pt-14 md:pb-20">
      <div className="grid md:grid-cols-[420px_1fr] gap-12 md:gap-16 items-center">
        {/* Portrait */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <img
              src={headshot}
              alt="Uzair Nasir"
              className="relative w-80 h-80 md:w-[320px] md:h-[320px] rounded-lg object-cover object-top"
             style={{
               boxShadow: "0 10px 30px -18px rgba(20,30,50,0.18)"
              }}
            />
          </div>
        </div>

        {/* Content — name first */}
        <div className="flex flex-col md:-mt-1 items-center text-center">
          <p className="text-[1.05rem] md:text-[1.15rem] text-foreground/80 leading-[1.6] max-w-xl">
          Focused on cybersecurity, AI, and applied research, with an interest in practical problem-solving and technical execution.
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
