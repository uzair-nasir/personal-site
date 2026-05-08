export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
        Contact
      </h2>
      <p className="mt-5 text-[0.95rem] text-muted-foreground leading-relaxed">
        Feel free to reach out — I'm always open to connecting.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        <a
          href="mailto:uzairnasir1412@gmail.com"
          className="text-[0.95rem] text-foreground font-medium hover:text-primary transition-colors"
        >
          uzairnasir1412@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/nasiruzair/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.95rem] text-foreground font-medium hover:text-primary transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
