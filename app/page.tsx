import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ParallaxOcean } from "@/components/parallax-ocean"
import { FloatingStars } from "@/components/floating-stars"
import { ScrollingMarquee } from "@/components/scrolling-marquee"

const marqueeItems = [
  "SOFTWARE ENGINEER",
  "VASSAR COLLEGE",
  "REACT",
  "NODE.JS",
  "JAVASCRIPT",
  "PYTHON",
  "JAVA",
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
      <ScrollingMarquee items={["APPLE PIE", "VANILLA ICE CREAM", "INNOVATE", "CREATE"]} direction="right" />
      <Contact />
      <Footer />
    </main>
  )
}
