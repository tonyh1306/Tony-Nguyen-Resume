"use client"

import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import Link from "next/link"
import { OceanScene3D } from "./ocean-scene-3d"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Typography */}
          <div className="relative z-20 min-w-0 w-full">
            <p className="text-white font-mono text-sm md:text-base mb-6 tracking-widest uppercase break-words">
              Backend &amp; Distributed Systems · AI &amp; Machine Learning for Safety
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-[0.9] tracking-tight">
              Tony <span className="italic text-primary">Nguyen</span>
            </h1>
            <div className="mt-6 flex items-start gap-4">
              <span className="h-px w-12 shrink-0 bg-secondary mt-4" />
              <p className="text-white font-serif text-xl md:text-2xl italic min-w-0">
                Building systems that think &mdash; at the intersection of distributed infrastructure and AI.
              </p>
            </div>
            <p className="text-gray-100 text-lg md:text-xl max-w-xl mt-6 leading-relaxed">
              Undergraduate Research Assistant and Open Source contributor at <span className="text-primary">Vassar College</span> (3.95 GPA) and <span className="text-primary">Cornell Tech Break Through Tech ML/AI Fellow</span>. I build distributed AI evaluation platforms, conduct AI safety research, and ship production backend systems.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button
                onClick={() => {
                  document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-mono tracking-wider uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-full"
              >
                View Work
              </button>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-mono tracking-wider uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-full"
              >
                Résumé
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-8">
              <Link
                href="https://github.com/tonyh1306"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-primary transition-colors p-2 border border-border rounded-full hover:border-primary"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/tungqnguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-primary transition-colors p-2 border border-border rounded-full hover:border-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:tqnguyen@vassar.edu"
                className="text-gray-200 hover:text-primary transition-colors p-2 border border-border rounded-full hover:border-primary"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-200 hover:text-primary transition-colors z-20"
        aria-label="Scroll to about section"
      >
        <span className="text-sm font-mono tracking-wider uppercase">Explore More</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  )
}
