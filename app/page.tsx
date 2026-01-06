import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
