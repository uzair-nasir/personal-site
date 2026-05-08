import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Intro />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <footer className="mx-auto max-w-4xl px-6 py-8 border-t border-border">
        <p className="text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Uzair Nasir
        </p>
      </footer>
    </div>
  );
}
