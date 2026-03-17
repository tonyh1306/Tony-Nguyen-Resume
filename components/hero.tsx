"use client"

import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import Link from "next/link"
import { OceanScene3D } from "./ocean-scene-3d"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Typography */}
          <div className="relative z-20">
            <p className="text-primary font-mono text-sm md:text-base mb-6 tracking-widest uppercase">
              Full-Stack Developer
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 leading-[0.9] tracking-tight">
              <span className="block text-balance">Welcome to</span>
              <span className="block text-balance">my</span>
              <span className="block italic text-primary">Portfolio</span>
            </h1>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-12 bg-secondary" />
              <p className="text-white font-serif text-xl md:text-2xl italic">
                Tony Nguyen
              </p>
            </div>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl mt-6 leading-relaxed">
              Building accessible, pixel-perfect digital experiences. CS student at Vassar College with a passion for full-stack development.
            </p>

            <div className="flex items-center gap-6 mt-8">
              <Link
                href="https://github.com/tonyh1306"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 border border-border rounded-full hover:border-primary"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/tungqnguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 border border-border rounded-full hover:border-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:tqnguyen@vassar.edu"
                className="text-muted-foreground hover:text-primary transition-colors p-2 border border-border rounded-full hover:border-primary"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right side - 3D Scene */}
          <div className="relative z-20">
            <OceanScene3D />
          </div>
        </div>
      </div>

      {/* Explore More Button */}
      <button
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors z-20"
        aria-label="Scroll to about section"
      >
        <span className="text-sm font-mono tracking-wider uppercase">Explore More</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  )
}
