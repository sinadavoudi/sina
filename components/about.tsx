import { Badge } from "@/components/ui/badge"

export function About() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "TailwindCSS",
    "GraphQL",
    "Docker",
    "AWS",
    "Git",
    "REST APIs",
  ]

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-5xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm text-muted-foreground tracking-wider">[ 01 — ABOUT ]</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance">
                Crafting solutions
                <br />
                from concept
                <br />
                to deployment
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              <p>
                Full-stack developer specializing in building scalable web applications with modern technologies. I
                bridge the gap between design and functionality, creating seamless user experiences backed by robust
                architecture.
              </p>
              <p>
                With expertise spanning front-end frameworks to backend systems and database design, I deliver
                end-to-end solutions that solve real problems.
              </p>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-muted-foreground tracking-wider">[ TECH STACK ]</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-normal border-foreground/20 hover:bg-foreground hover:text-background transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8">
              <div className="space-y-2">
                <p className="text-3xl sm:text-4xl font-bold">5+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl sm:text-4xl font-bold">50+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
