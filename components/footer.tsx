import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border relative z-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/tonyh1306"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/tungqnguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:tqnguyen@vassar.edu"
            className="text-gray-300 hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>

        <p className="text-sm text-gray-300 font-mono">
          Designed & Built by{" "}
          <span className="text-primary">Tony Nguyen</span>
        </p>
      </div>
    </footer>
  )
}
