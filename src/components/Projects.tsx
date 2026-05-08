const projects = [
  {
    title: "FCPS Student Digital Safety Audit",
    category: "Cybersecurity",
    description:
      "Reviewed student-facing digital safety patterns and produced focused recommendations to improve awareness and safe online behavior.",
  },
  {
    title: "Phishing Detection & Awareness Web Tool",
    category: "Security Web Tool",
    description:
      "Built a lightweight educational tool to help users identify phishing indicators and strengthen day-to-day security awareness.",
  },
  {
    title: "BrightSpeak",
    category: "Assistive Communication Wearable",
    description:
      "Designed through the MIT Beaver Works CRE[AT]E Challenge as a wearable assistive communication concept for a nonverbal student.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
        Projects
      </h2>
      <div className="mt-8 flex flex-col gap-5">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg border border-border bg-card p-5 sm:p-6 transition-colors hover:border-primary/25"
          >
            <span className="text-[0.65rem] font-semibold text-muted-foreground tracking-[0.12em] uppercase">
              {project.category}
            </span>
            <h3 className="mt-2 text-[0.95rem] font-semibold text-card-foreground leading-snug">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
