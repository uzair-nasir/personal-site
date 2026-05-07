export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-14">
      <h2 className="text-lg font-semibold text-foreground tracking-tight">About</h2>
      <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
        I'm a student at{" "}
        <a
          href="https://tjhsst.fcps.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-3 decoration-border hover:decoration-primary transition-colors"
        >
          Thomas Jefferson High School for Science and Technology
        </a>{" "}
        focused on engineering, cybersecurity, research, data work, and practical technical execution. I care about clarity, communication, and getting things done well.
      </p>
    </section>
  );
}
