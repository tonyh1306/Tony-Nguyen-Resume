"use client"

import { useState, useEffect, type MouseEvent } from "react"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Open Source", href: "#open-source" },
  { label: "Research", href: "#research" },
  { label: "Writing", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection =
    (href: string, options?: { closeMobileMenu?: boolean }) =>
    (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) {
      return
    }

    event.preventDefault()

    if (href === "#") {
      window.history.pushState(null, "", window.location.pathname)
      window.scrollTo({ top: 0, behavior: "smooth" })
      if (options?.closeMobileMenu) {
        setIsMobileMenuOpen(false)
      }
      return
    }

    const target = document.querySelector(href)
    if (!target) {
      return
    }

    window.history.pushState(null, "", href)
    target.scrollIntoView({ behavior: "smooth", block: "start" })
    if (options?.closeMobileMenu) {
      setIsMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
     <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        !isMobileMenuOpen && "transition-all duration-300",
        isMobileMenuOpen
          ? "bg-transparent py-5"
          : isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24">
        {/* Logo */}
        <a
          href="#"
          onClick={scrollToSection("#")}
          className="px-4 py-2 bg-foreground/10 backdrop-blur-sm rounded-full border border-border hover:border-primary transition-colors"
        >
          <span className="font-serif text-lg font-bold text-white">Tony Nguyen</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={scrollToSection(item.href)}
                className="text-lg md:text-xl text-gray-300 hover:text-primary transition-colors font-mono"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume"
              className="inline-flex items-center justify-center px-5 py-2 text-lg md:text-xl font-mono border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-full"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-primary transition-colors p-2 border border-border rounded-full"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-[60] bg-black",
          isMobileMenuOpen ? "visible" : "invisible pointer-events-none"
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex items-center justify-end px-6 py-5 border-b border-primary/30">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="border border-secondary/70 px-3 py-2 text-secondary hover:text-primary hover:border-primary transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div
          className={cn(
            "flex min-h-[calc(100vh-76px)] flex-col items-center justify-center px-6 pb-10 transition-transform duration-300 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-12"
          )}
        >
          <ul className="flex flex-col items-center gap-4">
            {navItems.map((item, index) => (
              <li
                key={item.label}
                className={cn(
                  "transition-all duration-300 ease-out",
                  isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                )}
                style={{
                  marginLeft: `${index * 14}px`,
                  transitionDelay: isMobileMenuOpen ? `${index * 40}ms` : "0ms",
                }}
              >
                <a
                  href={item.href}
                  onClick={scrollToSection(item.href, { closeMobileMenu: true })}
                  className={cn(
                    "font-serif text-[2.25rem] uppercase font-light tracking-[0.16em] transition-colors duration-200",
                    index === 0 ? "text-primary/60" : "text-secondary hover:text-primary"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/resume"
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              "mt-12 inline-flex min-w-[280px] items-center justify-center border border-primary bg-primary px-10 py-4 text-lg font-serif uppercase tracking-[0.12em] text-black shadow-[0_10px_28px_rgba(251,113,133,0.35)] transition-all duration-300 hover:bg-secondary hover:border-secondary",
              isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
            style={{ transitionDelay: isMobileMenuOpen ? "180ms" : "0ms" }}
          >
            View Resume
          </a>

          <div
            className={cn(
              "mt-14 flex items-center gap-6 text-secondary transition-all duration-300",
              isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
            style={{ transitionDelay: isMobileMenuOpen ? "220ms" : "0ms" }}
          >
            <a
              href="https://github.com/tonyh1306"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/tungqnguyen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:tqnguyen@vassar.edu"
              aria-label="Email"
              className="hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
