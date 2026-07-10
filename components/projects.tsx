import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

type Project = {
  title: string
  subtitle: string
  description: string
  impact: string
  tech: string[]
  github: string
  live?: string
  award?: string
}

const projects: Project[] = [
  {
    title: "Aevol: LLM-as-Judge Evaluation SDK",
    subtitle: "Universal Agent Trace Evaluation Platform",
    description:
      "Built a universal LLM-as-judge evaluation SDK for multi-agent applications, with a tree-structured trace schema (Trace/Span) that maps onto any agent framework — LangGraph, CrewAI, AutoGen, or raw API calls — evaluating tool calls, handoffs, chain-of-thought, and final answers. Traces are scored against user-defined weighted rubrics by a Redis-backed distributed worker pool (BRPOP atomic claiming), with results streamed live to a Next.js dashboard via SSE. Supports Anthropic and OpenAI as judge providers.",
    impact: "framework-agnostic trace schema · rubric-weighted scoring · Redis BRPOP workers · SSE live progress",
    tech: ["Python", "FastAPI", "Redis", "PostgreSQL", "Pydantic v2", "Next.js", "Docker"],
    github: "https://github.com/tonyh1306/aevol",
  },
  {
    title: "OBRE: Accessibility-First Real-Time Vision System",
    subtitle: "Real-Time Vision System for Blind and Low-Vision Users",
    description:
      "Architected a modular, object-oriented real-time vision system (CameraX + YOLOv12 ONNX + ML Kit OCR) separating ingestion, inference, and output layers — giving blind and low-vision users real-time awareness of their surroundings. Implemented async processing to maintain stable throughput under variable workloads and drove end-to-end delivery from camera stream to on-device TTS, fully offline-capable.",
    impact: "Solo build · on-device, offline-capable inference · designed with screen-reader users in mind",
    tech: ["Android", "Java", "YOLOv12", "ONNX", "OpenCV", "ML Kit", "Firebase"],
    github: "https://github.com/tonyh1306/OBRE-Vision-through-a-screen",
  },
  {
    title: "DFD: Deepfake Detection via Transfer Learning",
    subtitle: "Deepfake Detection via Transfer Learning",
    description:
      "Binary classifier (real vs. fake) trained on FaceForensics++ using a frozen EfficientNet-B4 backbone with a fine-tuned classification head. Frame extraction pipeline from C23 video sequences, class-balanced sampling for imbalanced splits, and evaluation with ROC-AUC and accuracy on a held-out split.",
    impact: "EfficientNet-B4 backbone frozen · class-balanced sampler · ROC-AUC + accuracy eval",
    tech: ["Python", "PyTorch", "timm", "EfficientNet-B4", "FaceForensics++", "scikit-learn"],
    github: "https://github.com/tonyh1306/dfd",
  },
  {
    title: "Depression Prediction from NHANES Survey Data",
    subtitle: "End-to-End Statistical ML Analysis & Published Report",
    description:
      "Modeled depression scores from NHANES 2017–2018 survey data (demographics, income, sleep, work, and health variables) using linear and LASSO regression, gradient boosting (regression and classification), and neural network baselines, with SHAP analysis for feature-level interpretation. Published the full analysis as an interactive Quarto report site, including an honest evaluation showing broad demographic/lifestyle features alone lack individual-level predictive power.",
    impact: "NHANES 2017–18 pipeline · LASSO + gradient boosting + SHAP · rigorous negative-result reporting",
    tech: ["Python", "R", "scikit-learn", "Gradient Boosting", "SHAP", "Quarto"],
    github: "https://github.com/tonyh1306/Depression-Prediction-Website-Aiden-J-Brown-Tony-Nguyen",
    live: "https://aidenjbrown.github.io/depression-prediction-website/",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 relative z-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm tracking-wider">03.</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Projects</h2>
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
                    className="text-gray-100 hover:text-primary transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-100 hover:text-primary transition-colors"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              </div>

              <h4 className="font-serif text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-white font-serif italic mb-4">{project.subtitle}</p>

              <p className="text-gray-100 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>

              <p className="text-secondary/90 text-xs font-mono mb-6 leading-relaxed">
                {project.impact}
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
