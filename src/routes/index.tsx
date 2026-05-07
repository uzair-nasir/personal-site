import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uzair Nasir — Engineering, Cybersecurity & Technical Work" },
      {
        name: "description",
        content:
          "Personal portfolio of Uzair Nasir — TJHSST student focused on engineering, cybersecurity, research, and practical technical execution.",
      },
      { property: "og:title", content: "Uzair Nasir — Portfolio" },
      {
        property: "og:description",
        content:
          "Engineering, cybersecurity, research, and practical technical work.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <footer className="mx-auto max-w-3xl px-6 py-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Uzair Nasir
        </p>
      </footer>
    </div>
  );
}
