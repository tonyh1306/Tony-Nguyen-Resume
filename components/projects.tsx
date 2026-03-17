import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "OBRE",
    subtitle: "Accessibility-First Object Recognition",
    description:
      "Developed an accessibility-first mobile Android app that provides real-time object + custom object recognition from live video using OpenCV + YOLO through NMS algorithm and YUV color channel translation, with scene/photo description, OCR via ML Kit, and audible narration through on-device text-to-speech.",
    tech: ["Android", "Java", "OpenCV", "YOLOv12", "Gemini", "Firebase"],
    github: "https://github.com/tonyh1306/OBRE-Vision-through-a-screen",
    featured: true,
  },
  {
    title: "Nutrilens",
    subtitle: "AI Nutrition Assistant",
    description:
      "Built a full-stack AI nutrition assistant with a Python backend and Next.js/TypeScript frontend, supporting structured extraction of medication and nutrition data. Designed an ingestion + parsing workflow that converts OCR output into queryable nutrition fields.",
    tech: ["Next.js", "TypeScript", "Python", "Gemini API", "OpenCV", "Tesseract"],
    github: "https://github.com/tonyh1306/hacknight",
    award: "Best Use of Gemini API",
    featured: true,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 relative z-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm tracking-wider">03.</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">My Works</h2>
          <span className="h-px flex-1 bg-border max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {project.award && (
                <div className="absolute -top-3 right-4 bg-secondary text-black text-xs font-mono px-3 py-1 rounded-full">
                  {project.award}
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <p className="text-primary font-mono text-sm tracking-wider">Featured Project</p>
                <div className="flex gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors"
                    aria-label={`View ${project.title} live`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <h4 className="font-serif text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-white font-serif italic mb-4">{project.subtitle}</p>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-white bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
