"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface SkillCategory {
  name: string
  description: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Engineering Leadership",
    description: "Building and leading high-performing engineering teams",
    skills: [
      "Team Building",
      "Technical Strategy",
      "Agile Methodologies",
      "Mentorship",
      "Process Optimisation",
      "Cross-functional Leadership"
    ]
  },
  {
    name: "Frontend Development",
    description: "Creating responsive and performant user experiences",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Redux",
      "Testing (Jest, RTL)"
    ]
  },
  {
    name: "Backend Development",
    description: "Building scalable and reliable server-side solutions",
    skills: [
      "Node.js",
      "Python",
      "GraphQL",
      "REST APIs",
      "PostgreSQL",
      "MongoDB"
    ]
  },
  {
    name: "DevOps & Cloud",
    description: "Implementing robust cloud infrastructure and CI/CD pipelines",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Infrastructure as Code",
      "Monitoring & Logging"
    ]
  }
]

const SkillsChart = () => {
  const { ref, inView } = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text-alt"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg
                       transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 
                             text-blue-600 dark:text-blue-400 rounded-full 
                             text-sm font-medium transition-colors duration-200
                             hover:bg-blue-200 dark:hover:bg-blue-900"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsChart 