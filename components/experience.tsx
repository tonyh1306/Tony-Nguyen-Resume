"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "FPT Information Systems",
    shortName: "FIS",
    title: "Full-Stack Software Developer Intern",
    location: "Hanoi, Vietnam",
    period: "Jun. 2025 - Present",
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
    period: "Jun. 2025 - Present",
    description: [
      "Developed a secure ingestion and normalization pipeline that converts raw Excel/CSV/10-K/10-Q filings into structured canonical JSON using Fastify, Pandas, and pdfplumber.",
      "Developed the analytics and insights layer that computes financial KPIs (DuPont, liquidity, solvency, profitability, YoY/QoQ) and powers an OpenAI-based chatbot for real-time analysis, increasing user insight discovery by 3x.",
    ],
  },
  {
    company: "Vassar College",
    shortName: "Computer Science Department",
    title: "Computer Science Teaching Assistant",
    location: "Poughkeepsie, NY",
    period: "Aug. 2025 - Present",
    description: [
      "Mentored 90+ students in multiple computer science classes, fostering inclusion and improving assignment submission rates by 15% through examples using Python, NumPy, and Pandas.",
      "Reviewed 70+ Java, OCaml, and Python projects to strengthen debugging and algorithmic reasoning, cutting recurring logic errors by 20% and helping raise class exam averages through hosting review sessions.",
    ],
  },
  {
    company: "Vassar Consulting Student Initiative",
    shortName: "VCSI",
    title: "Junior Consultant",
    location: "Poughkeepsie, NY",
    period: "Jun. 2025 - Present",
    description: [
      "Advised client on designing a Python-based data pipeline leveraging AI tools and web scraping (BeautifulSoup, OpenAI API) to extract and structure 10,000+ OSHA violations; identified 500+ high-risk targets and automated outreach, increasing lead conversion by 60%.",
    ],
  },
  {
    company: "Vassar Innovation Lab",
    shortName: "Vassar Innovation Lab",
    title: "Engineering Makerspace Lab Assistant",
    location: "Poughkeepsie, NY",
    period: "Aug. 2024 - Present",
    description: [
      "Assisted 200+ students and professors by troubleshooting 3D printers, laser cutters, and resin printers, using firmware knowledge and CAD slicing software to quickly resolve hardware/software issues.",
      "Developed simple Python scripts for routine maintenance checks through generating G-code test patterns and automating bed-level calibration tests.",
    ],
  },
  {
    company: "VC++",
    shortName: "Outreach Chair",
    title: "Outreach Chair",
    location: "Poughkeepsie, NY",
    period: "May. 2025 - Present",
    description: [
      "Built relationships with 10+ tech companies and alumni to organize mentorship and recruiting events, increasing member participation in career programming by 40%.",
      "Introduced digital sign-ups and post-event surveys to track attendance and feedback, improving attendance consistency by 35% and raising post-event satisfaction scores to 70%.",
    ],
  },
  {
    company: "Vassar College",
    shortName: "Earth Science RA",
    title: "Earth Science Research Assistant",
    location: "Poughkeepsie, NY",
    period: "Jan. 2026 - Present",
    description: [
      "Assists Professor Deon Knights to create binary mask of river deltas using different products with unique spatial resolution through Python, NumPy, Pandas, obtaining Landsat, Sentinel and Planet images to test the role of satellite resolution on resolving small river delta channels.",
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
                  "px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all",
                  "border-b-2 md:border-b-0 md:border-l-2",
                  activeTab === index
                    ? "text-primary border-primary bg-primary/5"
                    : "text-gray-300 border-border hover:text-white hover:bg-muted/30 hover:border-secondary"
                )}
              >
                {exp.shortName}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="py-2 md:py-0 min-h-[300px]">
            <h4 className="text-xl md:text-2xl font-semibold text-white">
              {experiences[activeTab].title}=
            </h4>
            <p className="text-white font-serif text-lg mt-1">
              @ {experiences[activeTab].company}
            </p>
            <p className="text-sm font-mono text-gray-300 mt-2 mb-6">
              {experiences[activeTab].period} | {experiences[activeTab].location}
            </p>
            <ul className="space-y-4">
              {experiences[activeTab].description.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-gray-300 leading-relaxed"
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
