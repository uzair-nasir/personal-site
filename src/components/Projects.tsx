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
    <section id="projects" className="mx-auto max-w-3xl px-6 py-14">
      <h2 className="text-lg font-semibold text-foreground tracking-tight">Projects</h2>
      <div className="mt-8 flex flex-col gap-5">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-xl border border-border bg-card p-5 sm:p-6 transition-colors hover:border-primary/20"
          >
            <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
              {project.category}
            </span>
            <h3 className="mt-2 text-base font-semibold text-card-foreground leading-snug">
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
