import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Timeline from "@/components/timeline"
import Skills from "@/components/skills"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import SkillsChart from "@/components/skills-chart"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Timeline />
        <SkillsChart />
        {/* <Projects /> */}
        {/* <Blog /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

