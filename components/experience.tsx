"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
    {
    company: "Vassar College | Prof. Josh de Leeuw",
    shortName: "de Leeuw Lab",
    title: "Undergraduate Open-Source Research Fellow",
    location: "Poughkeepsie, NY",
    period: "Jun. 2026 – Aug. 2026",
    description: [
      "Architected a Playwright and BrowserStack automation pipeline integrated into GitHub Actions CI/CD, owning the end-to-end browser testing suite across 3 browsers and coordinating team evaluation of the OpenSSF Security Scorecard.",
      "Resolved 10+ high-risk security vulnerabilities on jspsych-contrib by deploying automated static code analysis tools, pinning code dependencies, and leading a major Jest package upgrade — eliminating breaking changes and closing flagged security gaps.",
      "Deployed a Transformers.js Whisper model for jsPsych, enabling fully in-browser speech-to-text for behavioral experiments with no server-side inference.",
      "Redesigned a multi-agent LangGraph architecture by replacing shared context with isolated, task-specific routing, reducing per-execution inference costs by 79%.",
    ],
  },
  {
    company: "FPT Information Systems",
    shortName: "FIS",
    title: "Full-Stack Software Developer Intern",
    location: "Hanoi, Vietnam",
    period: "Jun. 2025 - Sept. 2025",
    description: [
      "Developed the master data table management dashboard (React.js, Ant Design) for a production service, supporting data matching and merge workflows and contributing to a 35% reduction in duplicate records across a 500K+ record dataset.",
      "Defined JSON response schemas and integrated the dashboard with existing FastAPI endpoints and proprietary APIs, enabling near-real-time updates and reducing data refresh latency by 40%.",
    ],
  },
  {
    company: "FinDash.AI",
    shortName: "FinDash",
    title: "Full-Stack Software Developer",
    location: "Poughkeepsie, NY",
    period: "Jun. 2025 - Sept. 2025",
    description: [
      "Developed a secure ingestion and normalization pipeline that converts raw Excel/CSV/10-K/10-Q filings into structured canonical JSON using Fastify, Pandas, and pdfplumber.",
      "Developed the analytics and insights layer that computes financial KPIs (DuPont, liquidity, solvency, profitability, YoY/QoQ) and powers an OpenAI-based chatbot for real-time analysis, increasing user insight discovery by 3x.",
    ],
  },
  {
    company: "Vassar Consulting Student Initiative",
    shortName: "VCSI",
    title: "Junior Consultant",
    location: "Poughkeepsie, NY",
    period: "Jun. 2025 - Sept. 2025",
    description: [
      "Researched AI and web scraping tooling (BeautifulSoup, OpenAI API) to prototype an OSHA violation data extraction pipeline; presented findings and a proposed automated outreach strategy to the client, identifying 500+ high-risk targets as a lead generation opportunity.",
    ],
  },
  {
    company: "Vassar College",
    shortName: "Teaching Assistant",
    title: "Computer Science Teaching Assistant",
    location: "Poughkeepsie, NY",
    period: "Aug. 2025 - May 2026",
    description: [
      "Mentored 90+ students across multiple CS courses, improving assignment submission rates by 15% through worked examples in Python, NumPy, and Pandas.",
      "Reviewed 70+ Java, OCaml, and Python projects to strengthen debugging and algorithmic reasoning, cutting recurring logic errors by 20% and raising class exam averages through review sessions.",
    ],
  },
  {
    company: "Vassar College",
    shortName: "Research Assistant",
    title: "Earth Science Research Assistant",
    location: "Poughkeepsie, NY",
    period: "Jan. 2026 - May 2026",
    description: [
      "Built a remote-sensing analysis pipeline in Python (NumPy, Pandas) to generate binary masks of river deltas from Landsat, Sentinel, and Planet imagery, testing how satellite spatial resolution affects detection of small delta channels (advised by Prof. Deon Knights).",
    ],
  },
  {
    company: "Vassar Innovation Lab",
    shortName: "Makerspace",
    title: "Engineering Makerspace Lab Assistant",
    location: "Poughkeepsie, NY",
    period: "Aug. 2024 - May. 2025",
    description: [
      "Supported 200+ students and faculty by troubleshooting 3D printers, laser cutters, and resin printers, resolving firmware and slicing-software issues.",
      "Wrote Python scripts for routine maintenance, generating G-code test patterns and automating bed-level calibration checks.",
    ],
  },
  {
    company: "VC++",
    shortName: "Outreach Chair",
    title: "Outreach Chair",
    location: "Poughkeepsie, NY",
    period: "May. 2025 - May 2026",
    description: [
      "Built relationships with 10+ tech companies and alumni to organize mentorship and recruiting events, increasing member participation in career programming by 40%.",
      "Introduced digital sign-ups and post-event surveys, improving attendance consistency by 35% and raising post-event satisfaction scores to 70%.",
    ],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 relative z-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm tracking-wider">02.</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Experience</h2>
          <span className="h-px flex-1 bg-border max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col flex-wrap md:overflow-visible md:min-w-[200px]">
            {experiences.map((exp, index) => (
              <button
                key={`${exp.company}-${exp.title}`}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-5 py-3.5 text-base font-mono text-left whitespace-nowrap transition-all",
                  "border-b-2 md:border-b-0 md:border-l-2",
                  activeTab === index
                    ? "text-primary border-primary bg-primary/5"
                    : "text-gray-100 border-border hover:text-white hover:bg-muted/30 hover:border-secondary"
                )}
              >
                {exp.shortName}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="py-2 md:py-0 min-h-[300px]">
            <h4 className="text-4xl md:text-2xl font-semibold text-white">
              {experiences[activeTab].title}
            </h4>
            <p className="text-white font-serif text-lg mt-1">
              @ {experiences[activeTab].company}
            </p>
            <p className="text-xl font-mono text-gray-100 mt-2 mb-6">
              {experiences[activeTab].period} | {experiences[activeTab].location}
            </p>
            <ul className="space-y-4">
              {experiences[activeTab].description.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-gray-100 leading-relaxed"
                >
                  <span className="text-primary mt-1 flex-shrink-0">*</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
