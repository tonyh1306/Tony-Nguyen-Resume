export function About() {
  const skills = {
    Languages: ["Java", "Python", "JavaScript/TypeScript", "OCaml", "SQL", "Swift"],
    Frameworks: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "Fastify"],
    Tools: ["PostgreSQL", "REST API", "Git", "Machine Learning", "Ant Design", "Bootstrap"],
  }

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 relative z-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm tracking-wider">01.</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">About Me</h2>
          <span className="h-px flex-1 bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              I&apos;m a Computer Science student at <span className="text-primary font-medium">Vassar College</span> with a 3.97 GPA, passionate about building accessible and impactful software solutions.
            </p>
            <p>
              My journey in tech has led me through exciting roles, from developing master data dashboards at <span className="text-primary font-medium">FPT Information Systems</span> in Vietnam, to mentoring 90+ students as a CS Teaching Assistant.
            </p>
            <p>
              I thrive at the intersection of frontend elegance and backend robustness, with experience spanning React, Next.js, FastAPI, and machine learning integrations.
            </p>

            {/* Awards */}
            <div className="mt-8 p-4 border border-border rounded-lg bg-card/50">
              <h4 className="text-white font-mono text-sm mb-3 tracking-wider">AWARDS</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">*</span>
                  <span>Vassar DataFest 2025 - Best Data Visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5">*</span>
                  <span>HackNights - Best Use of Gemini API</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-serif text-xl mb-6">Technical Skills</h4>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h5 className="text-white font-mono text-xs tracking-wider mb-3">{category.toUpperCase()}</h5>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1.5 bg-muted text-muted-foreground rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
