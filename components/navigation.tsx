"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24">
        {/* Logo */}
        <a
          href="#"
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
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[68px] bg-background/95 backdrop-blur-lg z-40">
          <ul className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl md:text-4xl font-serif text-white hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume"
                className="inline-flex items-center justify-center px-8 py-3 text-2xl md:text-3xl font-mono border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-full"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
