"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface Project {
  title: string
  description: string
  impact: string[]
  image: string
  technologies: string[]
  github?: string
  demo?: string
  category: string[]
}

const projects: Project[] = [
  {
    title: "Enterprise CRM System",
    description: "Global recruitment CRM system handling millions of candidates and thousands of users.",
    impact: [
      "Reduced data processing time by 60%",
      "Improved user productivity by 40%",
      "Scaled to support 2000+ concurrent users"
    ],
    image: "/projects/crm-preview.png",
    technologies: ["TypeScript", "Node.js", "React", "GraphQL", "PostgreSQL"],
    category: ["Enterprise", "Full Stack"]
  },
  // Add more projects...
]

const categories = ["All", "Enterprise", "Full Stack", "Frontend", "Backend"]

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const { ref, inView } = useScrollAnimation(0.2)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  }

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter))

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          Innovative Projects
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`
                ${activeFilter === category 
                  ? 'bg-purple-600 text-white' 
                  : 'text-purple-600 border-purple-600'
                }
              `}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg
                       transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Impact Section */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Impact & Results</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {project.impact.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 
                               text-purple-600 dark:text-purple-400 rounded-full 
                               text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

