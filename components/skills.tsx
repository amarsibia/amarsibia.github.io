"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    name: "Leadership",
    skills: [
      "Team Management",
      "Agile Methodologies",
      "Strategic Planning",
      "Mentoring",
      "Cross-functional Collaboration",
    ],
  },
  {
    name: "Architecture",
    skills: ["System Design", "Microservices", "Scalability", "Cloud Architecture", "API Design"],
  },
  {
    name: "Technologies",
    skills: ["JavaScript/TypeScript", "Python", "Go", "React", "Node.js", "GraphQL", "Docker", "Kubernetes"],
  },
  {
    name: "Data & AI",
    skills: [
      "Big Data Processing",
      "Machine Learning",
      "Data Visualisation",
      "Predictive Analytics",
      "Natural Language Processing",
    ],
  },
]

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name)

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {skillCategories.map((category) => (
            <Badge
              key={category.name}
              variant={activeCategory === category.name ? "default" : "secondary"}
              className={`text-sm md:text-base px-4 py-2 cursor-pointer transition-all ${
                activeCategory === category.name ? "bg-purple-600 hover:bg-purple-700" : "hover:bg-purple-700/20"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-300">
          {skillCategories
            .find((cat) => cat.name === activeCategory)
            ?.skills.map((skill, index) => (
              <div
                key={skill}
                className="bg-purple-800/30 backdrop-blur-sm rounded-lg p-4 text-center transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

