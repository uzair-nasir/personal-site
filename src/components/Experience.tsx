const experiences = [
  {
    title: "Youth Research Council Fellow",
    org: "George Mason University",
    orgUrl: "https://cssr.gmu.edu/initiatives/yrc",
    dates: "Jan 2026 – Present",
    description:
      "Conduct community-based research using surveys, interviews, and mixed-method analysis with stakeholder-facing recommendations.",
  },
  {
    title: "AI & Backend Engineering Intern",
    org: "Kollegio",
    orgUrl: "https://www.kollegio.ai/",
    dates: "Sep 2025 – Dec 2025",
    description:
      "Built and cleaned a dataset of 100+ prompt entries and helped improve workflow quality for AI-related tooling.",
  },
  {
    title: "DataGen Scholar & Cybersecurity Team Lead",
    org: "SaNDAI Cares",
    orgUrl: "https://sandaicares.org/",
    dates: "Aug 2025 – Present",
    description:
      "Applied AI/data tools across projects and led a cybersecurity awareness module team focused on digital risk and AI-related threats.",
  },
  {
    title: "DataGen Scholar Micro-Job",
    org: "SaNDAI Global",
    orgUrl: "https://sandaiglobal.net/",
    dates: "Aug 2025 – Present",
    description:
      "Supported client-facing work through market research, structured data cleanup, and AI-assisted execution.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-xl font-semibold text-foreground">Experience</h2>
      <div className="mt-8 flex flex-col gap-8">
        {experiences.map((exp) => (
          <div key={exp.title}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-base font-medium text-foreground">{exp.title}</h3>
              <span className="text-sm text-muted-foreground shrink-0">{exp.dates}</span>
            </div>
            <a
              href={exp.orgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground underline underline-offset-3 decoration-border hover:decoration-foreground transition-colors"
            >
              {exp.org}
            </a>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
