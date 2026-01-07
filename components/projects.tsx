import { ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"

const projects = [
  {
    year: "2025",
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with real-time inventory, payment processing, and admin dashboard.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
    link: "#",
  },
  {
    year: "2025",
    title: "SaaS Analytics Dashboard",
    description: "Real-time analytics platform processing millions of events daily with custom visualizations.",
    tags: ["React", "Node.js", "ClickHouse", "WebSocket"],
    link: "#",
  },
  {
    year: "2024",
    title: "AI Content Generator",
    description: "AI-powered content creation tool with custom model integration and collaborative editing.",
    tags: ["TypeScript", "OpenAI", "MongoDB", "Vercel"],
    link: "#",
  },
  {
    year: "2024",
    title: "Task Management System",
    description: "Enterprise task management with teams, projects, and automated workflow integrations.",
    tags: ["Next.js", "Prisma", "tRPC", "Supabase"],
    link: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="min-h-screen px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-5xl w-full mx-auto space-y-12 sm:space-y-16">
        <div className="space-y-2">
          <p className="text-xs sm:text-sm text-muted-foreground tracking-wider">[ 02 — SELECTED WORK ]</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Recent projects</h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {projects.map((project, index) => (
            <Card key={index} className="border-border bg-card hover:bg-accent/5 transition-colors group">
              <a
                href={project.link}
                className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6 p-4 sm:p-6 md:p-8"
              >
                <div className="md:w-20 shrink-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">{project.year}</p>
                </div>

                <div className="flex-1 space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold group-hover:underline">{project.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-muted-foreground border border-border px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:w-12 shrink-0 flex justify-end self-start md:self-center">
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
