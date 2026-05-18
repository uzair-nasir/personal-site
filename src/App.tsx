import headshot from "@/assets/uzair-headshot-2.png";

const experience = [
  {
    role: "Technical Project Coordinator",
    org: "Mason Small Business Development Center",
    url: "https://masonsbdc.org/",
    dates: "2026 — Present",
  },
  {
    role: "Youth Research Council Fellow",
    org: "George Mason University",
    url: "https://cssr.gmu.edu/initiatives/yrc",
    dates: "2026",
  },
  {
    role: "AI & Backend Engineering Intern",
    org: "Kollegio",
    url: "https://www.kollegio.ai/",
    dates: "2025",
  },
  {
    role: "DataGen Scholar",
    org: "SaNDAI Cares",
    url: "https://sandaicares.org/",
    dates: "2025 — Present",
  },
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <div className="mx-auto max-w-2xl px-6 pt-8 pb-2 flex items-center justify-between">
          <a href="#" className="text-[0.95rem] text-foreground font-medium tracking-tight">
            Uzair Nasir
          </a>
          <nav className="flex items-center gap-6 text-[0.85rem] text-muted-foreground">
            <a href="#experience" className="hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="mailto:uzairnasir1412@gmail.com" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-6 pt-16 md:pt-24 pb-16">
          <div className="flex flex-col items-center text-center">
            <img
              src={headshot}
              alt="Uzair Nasir"
              className="w-40 h-40 md:w-44 md:h-44 rounded-full object-cover object-top"
            />
            <h1 className="mt-8 text-2xl md:text-[1.65rem] font-medium tracking-tight text-foreground">
              Uzair Nasir
            </h1>
            <div className="mt-6 text-[1.02rem] leading-[1.75] text-foreground/80 max-w-[34rem] space-y-4">
              <p>
                I'm a student at{" "}
                <a
                  href="https://tjhsst.fcps.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-colors"
                >
                  Thomas Jefferson High School for Science and Technology
                </a>
                , where I focus on engineering, cybersecurity, research, and data work.
              </p>
              <p>
                I care about clarity, careful communication, and doing useful technical work well — usually somewhere between writing code, studying systems, and figuring out how things actually get built.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.9rem]">
              <a
                href="https://www.linkedin.com/in/nasiruzair/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:uzairnasir1412@gmail.com"
                className="text-foreground/80 hover:text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-2xl px-6 pb-24">
          <h2 className="text-[0.8rem] text-muted-foreground tracking-wide mb-5">
            Selected experience
          </h2>
          <ul className="divide-y divide-border/70">
            {experience.map((e) => (
              <li key={e.role} className="py-4 flex items-baseline justify-between gap-6">
                <div className="min-w-0">
                  <div className="text-[0.97rem] text-foreground">{e.role}</div>
                  <a
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.88rem] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {e.org}
                  </a>
                </div>
                <div className="shrink-0 text-[0.82rem] text-muted-foreground tabular-nums">
                  {e.dates}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-2xl px-6 py-8">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Uzair Nasir
        </p>
      </footer>
    </div>
  );
}
