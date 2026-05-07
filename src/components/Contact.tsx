import { Mail, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-14">
      <h2 className="text-lg font-semibold text-foreground tracking-tight">Contact</h2>
      <p className="mt-4 text-base text-muted-foreground">
        Feel free to reach out — I'm always open to connecting.
      </p>
      <div className="mt-6 flex flex-col gap-4">
        <a
          href="mailto:uzairnasir1412@gmail.com"
          className="inline-flex items-center gap-2.5 text-base text-foreground hover:text-primary transition-colors group"
        >
          <Mail size={18} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          <span className="underline underline-offset-3 decoration-border group-hover:decoration-primary transition-colors">
            uzairnasir1412@gmail.com
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/nasiruzair/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 text-base text-foreground hover:text-primary transition-colors group"
        >
          <Linkedin size={18} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          <span className="underline underline-offset-3 decoration-border group-hover:decoration-primary transition-colors">
            LinkedIn
          </span>
        </a>
      </div>
    </section>
  );
}
