export function About() {
  const skills = {
    Languages: ["Python", "Java", "TypeScript", "JavaScript", "OCaml", "SQL", "Swift"],
    Frameworks: ["FastAPI", "React.js", "Next.js", "Node.js", "Express.js", "Ant Design"],
    "Tools & Infra": ["PostgreSQL", "Redis", "Docker", "Git", "GitHub Actions", "CI/CD"],
    "ML & Research": ["PyTorch", "NumPy", "Pandas", "LLM Evaluation", "Machine Learning"],
  }

  const stats = [
    { value: "3.95", label: "GPA" },
    { value: "120+", label: "Eval scenarios built" },
    { value: "40%", label: "API latency reduced" },
  ]

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
              I&apos;m a rising junior CS student at <span className="text-primary font-medium">Vassar College</span> and a <span className="text-primary font-medium">Cornell Tech Break Through Tech ML/AI Fellow</span>. My work lives at the boundary between research and engineering.
            </p>
            <p>
              I built <span className="text-primary font-medium">Aevol</span>, a distributed AI evaluation platform with Redis-backed priority queues and LLM-as-judge scoring. I&apos;m conducting <span className="text-primary font-medium">AI safety research</span> investigating whether fine-tuning a model on a safety persona causes held-out traits like transparency to emerge out-of-distribution. I also contributed to <span className="text-primary font-medium">jspsych-contrib</span> open-source cognitive science tooling and reduced API latency by 40% during a production engineering internship at FPT.
            </p>
            <p>
              I move between <span className="text-primary font-medium">systems design</span>, <span className="text-primary font-medium">ML research</span>, and <span className="text-primary font-medium">product thinking</span> &mdash; sometimes in the same week. I&apos;ve competed in AI safety hackathons focused on multilingual robustness and Global South contexts.
            </p>

            {/* Stat strip */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="font-serif text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs font-mono text-gray-400 tracking-wider uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Awards */}
            <div className="mt-8 p-4 border border-border rounded-lg bg-card/50">
              <h4 className="text-white font-mono text-sm mb-3 tracking-wider">AWARDS</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">*</span>
                  <span>Cornell Tech Break Through Tech ML/AI Fellow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">*</span>
                  <span>NYCWiC — Top 2 Best Undergraduate Poster</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">*</span>
                  <span>ASA DataFest 2025 — Best Data Visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-0.5">*</span>
                  <span>MLH HackNights — Best Use of Gemini API</span>
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
