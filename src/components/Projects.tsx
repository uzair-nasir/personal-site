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
      <h2 className="text-xl font-semibold text-foreground">Projects</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg border border-border bg-card p-5 flex flex-col"
          >
            <span className="text-xs text-muted-foreground tracking-wide">{project.category}</span>
            <h3 className="mt-2 text-base font-medium text-card-foreground">{project.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
