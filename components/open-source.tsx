import { GitPullRequest, FlaskConical, GitBranch, BookOpen } from "lucide-react"
import Link from "next/link"

type Contribution = {
  project: string
  summary: string
  tags: string[]
  href?: string
}

const focusAreas = [
  {
    icon: FlaskConical,
    title: "Cognitive Science Tooling",
    body: "Contributing to jsPsych and jspsych-contrib — the standard open-source framework for browser-based psychology experiments used by researchers worldwide.",
  },
  {
    icon: BookOpen,
    title: "Research Reproducibility",
    body: "Building pipelines that reconstruct published reaction-time and cognitive experiments from papers, so findings can be replicated and extended by other labs.",
  },
  {
    icon: GitPullRequest,
    title: "Plugin Development",
    body: "Designing and implementing timeline plugins that expose clean researcher-facing APIs, with attention to parameter ergonomics and edge-case handling.",
  },
  {
    icon: GitBranch,
    title: "Research Collaboration",
    body: "Working directly with Prof. Josh de Leeuw (jsPsych creator) to identify gaps in the ecosystem and build tooling that addresses real experimental design needs.",
  },
]

const contributions: Contribution[] = [
  {
    project: "jspsych-contrib",
    summary:
      "Built jspsych-timelines, a plugin for reconstructing reaction-time experiments from published psychology papers. The plugin provides a research pipeline that lets labs replicate and extend experimental paradigms directly from literature, reducing the gap between publication and replication.",
    tags: ["cognitive science", "research tooling", "jsPsych", "TypeScript"],
    href: "https://github.com/tonyh1306/jspsych-contrib",
  },
]

export function OpenSource() {
  return (
    <section id="open-source" className="py-24 px-6 md:px-12 lg:px-24 relative z-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-primary font-mono text-sm tracking-wider">04.</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Open Source</h2>
          <span className="h-px flex-1 bg-border max-w-xs" />
        </div>

        <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-12">
          I contribute to open-source cognitive science tooling &mdash; building
          experiment plugins and research pipelines that make published psychology
          findings reproducible and extensible. Here&apos;s where I focus and what I&apos;ve shipped.
        </p>

        {/* Focus areas */}
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {focusAreas.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6 hover:border-primary/50 transition-colors"
            >
              <Icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-serif text-xl text-white mb-2">{title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Contributions list */}
        <h3 className="text-white font-mono text-sm tracking-wider uppercase mb-6">
          Selected Contributions
        </h3>
        <div className="space-y-4">
          {contributions.map((c, i) => {
            const Wrapper = c.href ? Link : "div"
            const wrapperProps = c.href
              ? { href: c.href, target: "_blank", rel: "noopener noreferrer" }
              : {}
            return (
              <Wrapper
                key={i}
                {...(wrapperProps as any)}
                className="group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 rounded-lg border border-border bg-card/50 p-5 hover:border-primary/50 transition-colors"
              >
                <span className="font-serif text-lg text-white sm:min-w-[180px] group-hover:text-primary transition-colors">
                  {c.project}
                </span>
                <span className="flex-1">
                  <span className="text-gray-300 text-sm leading-relaxed block mb-3">
                    {c.summary}
                  </span>
                  <span className="flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-secondary bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                </span>
              </Wrapper>
            )
          })}
        </div>

        <Link
          href="https://github.com/tonyh1306"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-10 text-sm font-mono text-primary hover:underline"
        >
          <GitPullRequest className="w-4 h-4" />
          See all contributions on GitHub
        </Link>
      </div>
    </section>
  )
}
