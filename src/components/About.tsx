export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 pt-10 pb-16">
      <div className="border-t border-border pt-12">
        <h2 className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
          About
        </h2>
        <p className="mt-5 text-[1.05rem] text-foreground leading-[1.7] max-w-2xl">
          I'm a student at{" "}
          <a
            href="https://tjhsst.fcps.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline underline-offset-3 transition-colors"
          >
            Thomas Jefferson High School for Science and Technology
          </a>{" "}
          focused on engineering, cybersecurity, research, data work, and
          practical technical execution. I care about clarity, communication,
          and getting things done well.
        </p>
      </div>
    </section>
  );
}
