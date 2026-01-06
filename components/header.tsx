"use client"

import { Moon, Sun, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

export function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light")

    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="text-xs sm:text-sm font-medium tracking-wider">PORTFOLIO</div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm hover:text-muted-foreground transition-colors">
            ABOUT
          </a>
          <a href="#projects" className="text-sm hover:text-muted-foreground transition-colors">
            PROJECTS
          </a>
          <a href="#contact" className="text-sm hover:text-muted-foreground transition-colors">
            CONTACT
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 border border-border hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 border border-border hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-border hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
          <nav className="px-4 py-6 flex flex-col gap-4">
            <a
              href="#about"
              onClick={handleLinkClick}
              className="text-sm hover:text-muted-foreground transition-colors py-2"
            >
              ABOUT
            </a>
            <a
              href="#projects"
              onClick={handleLinkClick}
              className="text-sm hover:text-muted-foreground transition-colors py-2"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="text-sm hover:text-muted-foreground transition-colors py-2"
            >
              CONTACT
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
