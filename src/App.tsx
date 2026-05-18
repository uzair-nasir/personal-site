import headshot from "@/assets/uzair-headshot-2.png";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <div className="mx-auto max-w-xl px-6 pt-10 pb-2 flex items-center justify-between">
          <span className="text-[0.95rem] font-medium tracking-tight text-foreground">
            Uzair Nasir
          </span>
          <nav className="flex items-center gap-5 text-[0.88rem] text-muted-foreground">
            <a
              href="https://www.linkedin.com/in/nasiruzair/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:uzairnasir1412@gmail.com"
              className="hover:text-foreground transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-xl px-6 pt-16 md:pt-20 pb-16">
          <div className="flex flex-col items-center text-center">
            <img
              src={headshot}
              alt="Uzair Nasir"
              className="w-44 h-44 md:w-52 md:h-52 rounded-2xl object-cover object-top"
            />

            <h1 className="mt-8 text-[1.65rem] font-semibold tracking-tight text-foreground">
              Uzair Nasir
            </h1>

            <div className="mt-5 text-[0.98rem] leading-[1.7] text-foreground/80 max-w-[28rem]">
              <p>
                I am a student at{" "}
                <a
                  href="https://tjhsst.fcps.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-border underline-offset-4 hover:decoration-foreground transition-colors duration-200"
                >
                  Thomas Jefferson High School for Science and Technology
                </a>
                . I am interested in engineering, cybersecurity, research, and data work. I like practical projects, understanding how systems work, and building real technical experience.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6 text-[0.9rem] text-muted-foreground">
              <a
                href="https://www.linkedin.com/in/nasiruzair/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="mailto:uzairnasir1412@gmail.com"
                className="hover:text-foreground transition-colors duration-200"
              >
                Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-xl px-6 py-8">
        <p className="text-[0.78rem] text-muted-foreground">
          &copy; {new Date().getFullYear()} Uzair Nasir
        </p>
      </footer>
    </div>
  );
}
