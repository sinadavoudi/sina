import { Mail, Github, Linkedin, Twitter } from "lucide-react"

const socials = [
  { name: "Email", icon: Mail, href: "mailto:isinadavoudi@gmail.com", label: "isinadavoudi@gmail.com" },
  { name: "GitHub", icon: Github, href: "https://github.com/sinadavoudi", label: "github.com/sinadavoudi" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/sinadavoudi", label: "linkedin.com/in/sinadavoudi" },
  { name: "Twitter", icon: Twitter, href: "#", label: "Soon will be published.." },
]

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-5xl w-full mx-auto">
        <div className="space-y-12 sm:space-y-16">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-xs sm:text-sm text-muted-foreground tracking-wider">[ 03 — CONTACT ]</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Let's build
              <br />
              something great
              <br />
              together.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-6">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 border border-border hover:bg-accent/5 transition-colors group"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">{social.name}</p>
                    <p className="text-sm sm:text-base font-medium group-hover:underline truncate">{social.label}</p>
                  </div>
                </a>
              )
            })}
          </div>

          <div className="pt-12 sm:pt-16 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
              <p>© 2026 — All rights reserved</p>
              <p>Designed & developed by Sina Davoudi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
