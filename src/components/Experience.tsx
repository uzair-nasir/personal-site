const experiences = [
   {
    title: "Technical Project Coordinator",
    org: "Mason Small Business Development Center",
    orgUrl: "https://masonsbdc.org/",
    dates: "Apr 2026 - Present",
    type: "Part-time",
    description:
      "Supported Mason SBDC’s technical operations by maintaining WordPress pages, updating plugins, publishing workshops, managing event submissions, and assisting with Google Workspace tools. Helped improve website reliability, SEO, and internal workflows while supporting outreach efforts for small business programs.",
  },
  {
    title: "Youth Research Council Fellow",
    org: "George Mason University",
    orgUrl: "https://cssr.gmu.edu/initiatives/yrc",
    dates: "Jan 2026 – Apr 2026",
    type: "Internship",
    description:
      "Conducted surveys, interviews, and mixed-method research across community stakeholders. Co-authored academic work tied to ESSA 2026 and synthesized qualitative and quantitative data into evidence-based policy recommendations.",
  },
  {
    title: "AI & Backend Engineering Intern",
    org: "Kollegio",
    orgUrl: "https://www.kollegio.ai/",
    dates: "Sep 2025 – Dec 2025",
    type: "Internship",
    description:
      "Engineered and cleaned a 100+ entry labeled dataset to improve AI model input consistency. Proposed automation workflows to reduce manual data collection and contributed to backend tooling and data pipeline development.",
  },
  {
    title: "DataGen Scholar",
    org: "SaNDAI Cares",
    orgUrl: "https://sandaicares.org/",
    dates: "Aug 2025 – Present",
    type: "Internship",
    description:
      "Led a 12-person team to design and deliver a cybersecurity training module on digital risk awareness and AI-related threats. Built data visualizations in Tableau, Power BI, and Google Analytics using tools like ChatGPT, Gamma, NotebookLM, and Synthesia. Applied SQL, Azure, and AWS across data storage and cloud-based workflows.",
  },
  {
    title: "DataGen Scholar — Micro-Job",
    org: "SaNDAI Global",
    orgUrl: "https://sandaiglobal.net/",
    dates: "Aug 2025 – Present",
    type: "Part-time",
    description:
      "Conducted market research to surface actionable insights for client decision-making. Cleaned and aggregated datasets before analysis, and used generative AI tools to improve efficiency and communicate results to leadership.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Experience
        </h2>
        <div className="mt-10 grid gap-4">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="rounded-xl bg-card border border-border/60 p-6 transition-all hover:border-primary/20 hover:shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <h3 className="text-[0.95rem] font-semibold text-card-foreground leading-snug">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5">
                    <a
                      href={exp.orgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary font-medium hover:underline underline-offset-2 transition-colors"
                    >
                      {exp.org}
                    </a>
                    <span className="text-muted-foreground text-xs">·</span>
                    <span className="text-xs text-muted-foreground">
                      {exp.type}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground shrink-0 sm:text-right sm:pt-1 tracking-wide">
                  {exp.dates}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
