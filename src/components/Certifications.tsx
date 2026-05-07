const certs = [
  { name: "CompTIA Security+", detail: "In Progress · Target: Summer 2026" },
  { name: "AI Fundamentals", detail: "DataCamp · Nov. 2025" },
  { name: "Data Literacy", detail: "DataCamp · Nov. 2025" },
];

export function Certifications() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-14">
      <h2 className="text-lg font-semibold text-foreground tracking-tight">Certifications</h2>
      <ul className="mt-6 flex flex-col gap-3">
        {certs.map((cert) => (
          <li key={cert.name} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
            <span className="text-base text-foreground font-medium">{cert.name}</span>
            <span className="text-sm text-muted-foreground">{cert.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
