"use client"

import { Code2, Users, Lightbulb, Target } from "lucide-react"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const About = () => {
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text-alt"
          >
            The Mind Behind the Code
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Main Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg">
                With over 15 years in software engineering, I've evolved from writing code to architecting solutions and leading high-performing engineering teams. My journey has been driven by a relentless curiosity and passion for technology.
              </p>
              
              <p className="text-lg">
                One of my proudest achievements was transforming a struggling team of 4 into a thriving department of 20+ engineers. We implemented agile methodologies, improved code quality through robust CI/CD practices, and reduced deployment times by 70%.
              </p>

              <blockquote className="border-l-4 border-blue-400 pl-4 italic my-8">
                "Amar's leadership transformed our engineering culture. His focus on mentorship and continuous improvement has been invaluable."
                <footer className="text-sm mt-2">- Former Team Lead</footer>
              </blockquote>
            </motion.div>

            {/* Key Points */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Team Leadership</h3>
                  <p>Building and mentoring high-performing engineering teams that deliver exceptional results.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Technical Excellence</h3>
                  <p>Architecting scalable solutions and establishing best practices for sustainable growth.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Innovation Focus</h3>
                  <p>Driving technological innovation while ensuring practical, business-focused outcomes.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Strategic Vision</h3>
                  <p>Aligning technical strategy with business goals to drive organizational success.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

