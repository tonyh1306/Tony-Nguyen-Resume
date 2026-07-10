import { Brain, Shield, Satellite, Globe, ScanFace } from "lucide-react";

const interests = [
  {
    icon: Brain,
    title: "LLM Evaluation",
    body: "Building rigorous evaluation pipelines: dual-judge scoring, statistical significance testing, and rubric design that surfaces signal rather than surface-level compliance.",
  },
  {
    icon: Globe,
    title: "Global South AI",
    body: "Competing in AI safety hackathons focused on safety alignment of AI models finetuned according to 4 proposed safety categories ",
  },
  {
    icon: Satellite,
    title: "Remote Sensing & Earth Science ML",
    body: "Applying satellite image segmentation (Landsat, Sentinel, Planet) to earth science classification — where the engineering challenge is ingesting multi-resolution imagery reproducibly.",
  },
  {
    icon: ScanFace,
    title: "Deepfake Detection & Media Forensics",
    body: "Transfer learning on FaceForensics++ to classify real vs. synthesized faces — EfficientNet-B4 backbone frozen, head fine-tuned, evaluated on ROC-AUC across held-out manipulation types.",
  },
];

export function Research() {
  return (
    <section
      id="research"
      className="py-24 px-6 md:px-12 lg:px-24 relative z-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-primary font-mono text-sm tracking-wider">
            05.
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Research
          </h2>
          <span className="h-px flex-1 bg-border max-w-xs" />
        </div>

        {/* Primary current research */}
        <div className="rounded-xl border border-primary/30 bg-card/80 backdrop-blur-sm p-6 md:p-8 mb-6">
          <div className="flex items-start gap-4">
            <ScanFace className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="text-primary font-mono text-xs tracking-wider uppercase mb-2">
                Current · Media Forensics
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-white mb-1">
                Deepfake Detection
              </h3>
              <p className="text-white font-serif italic mb-4">
                Binary classification of real vs. synthesized faces via transfer
                learning
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                Transfer learning on FaceForensics++ using a frozen
                EfficientNet-B4 backbone with a fine-tuned classification head.
                Frame extraction pipeline samples C23-compressed videos across
                four manipulation types (Deepfakes, Face2Face, FaceSwap,
                NeuralTextures), with class-balanced sampling and evaluation on
                ROC-AUC and accuracy over a held-out split.
              </p>
            </div>
          </div>
        </div>

        {/* Secondary research */}
        <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 md:p-8 mb-10">
          <div className="flex items-start gap-4">
            <Satellite className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
            <div>
              <p className="text-secondary font-mono text-xs tracking-wider uppercase mb-2">
                Earth Science · Jan 2026 – Present
              </p>
              <h3 className="font-serif text-xl text-white mb-1">
                Remote Sensing of River Deltas
              </h3>
              <p className="text-white font-serif italic mb-4">
                Research Assistant · advised by Prof. Deon Knights
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                Building a Python pipeline (NumPy, Pandas) that generates binary
                masks of river deltas from Landsat, Sentinel, and Planet imagery
                to quantify how satellite spatial resolution affects detection
                of small delta channels.
              </p>
            </div>
          </div>
        </div>

        {/* Research interests */}
        <h3 className="text-white font-mono text-sm tracking-wider uppercase mb-6">
          Research Interests
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {interests.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card/50 p-6 hover:border-primary/50 transition-colors"
            >
              <Icon className="w-6 h-6 text-primary mb-4" />
              <h4 className="font-serif text-xl text-white mb-2">{title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
