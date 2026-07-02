import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { OpenSource } from "@/components/open-source"
import { Research } from "@/components/research"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ParallaxOcean } from "@/components/parallax-ocean"
import { FloatingStars } from "@/components/floating-stars"
import { ScrollingMarquee } from "@/components/scrolling-marquee"

const marqueeItems = [
  "SYSTEMS ENGINEER",
  "AI SAFETY RESEARCH",
  "LLM EVALUATION",
  "DISTRIBUTED SYSTEMS",
  "ML/AI FELLOW",
  "OPEN SOURCE",
  "VASSAR COLLEGE",
]

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ParallaxOcean />
      <FloatingStars />
      <Navigation />
      <Hero />
      <ScrollingMarquee items={marqueeItems} />
      <About />
      <Experience />
      <Projects />
      <OpenSource />
      <Research />
      {/* <Blog /> */}
      <ScrollingMarquee items={["BUILD", "EVALUATE", "RESEARCH", "ALIGN", "SHIP"]} direction="right" />
      <Contact />
      <Footer />
    </main>
  )
}
