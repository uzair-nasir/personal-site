const certs = [
  { name: "CompTIA Security+", detail: "In Progress · Target: Summer 2026" },
  { name: "AI Fundamentals", detail: "DataCamp · Nov. 2025" },
  { name: "Data Literacy", detail: "DataCamp · Nov. 2025" },
];

export function Certifications() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Certifications
        </h2>
        <div className="mt-8 divide-y divide-border/60">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 py-3.5"
            >
              <span className="text-[0.95rem] text-foreground font-medium">
                {cert.name}
              </span>
              <span className="text-sm text-muted-foreground">
                {cert.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
