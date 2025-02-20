"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import { ArrowDownIcon } from "lucide-react"

interface TimelineEvent {
  year: string
  role: string
  company: string
  period: string
  description: string
  achievements: string[]
  metrics?: string[]
  technologies: string[]
  logo: string
}

const timeline: TimelineEvent[] = [
  {
    year: "2024",
    role: "Head of Engineering",
    company: "Openr",
    period: "June 2024 - Present",
    description: "Leading engineering initiatives and driving technical innovation.",
    logo: "/logos/openr.svg",
    achievements: [
      "Building and scaling engineering teams",
      "Implementing modern tech practices",
      "Driving architectural decisions"
    ],
    technologies: ["React", "Node.js", "AWS", "TypeScript", "Python"]
  },
  {
    year: "2023",
    role: "Technical Manager",
    company: "Tripadvisor",
    period: "September 2023 - May 2024",
    description: "Managed technical teams and projects in the travel technology sector.",
    logo: "/logos/tripadvisor.svg",
    achievements: [
      "Led cross-functional teams",
      "Improved system performance",
      "Mentored junior engineers"
    ],
    technologies: ["React", "Node.js", "AWS", "TypeScript", "Python"]
  },
  {
    year: "2020",
    role: "Engineering Manager",
    company: "Robert Walters Group",
    period: "October 2020 - March 2022",
    description: "Led development of global CRM system, grew technical workforce by 50%, and aligned project objectives with business goals.",
    logo: "/logos/rw.jpg",
    achievements: [
      "Led digital transformation initiatives",
      "Established engineering excellence programs",
      "Mentored and developed 20+ engineers"
    ],
    technologies: ["TypeScript", "Node.js", "Java", "Kafka", "GraphQL", "PostgreSQL"]
  },
  {
    year: "2020",
    role: "Senior Software Engineer",
    company: "ASOS.com",
    period: "July 2020 - October 2020",
    description: "Led development initiatives in e-commerce platform engineering.",
    logo: "/logos/asos.svg",
    achievements: [
      "Contributed to e-commerce platform development",
      "Implemented high-performance features",
      "Collaborated with cross-functional teams"
    ],
    technologies: ["React", "Node.js", ".NET", "Azure", "Microservices"]
  },
  {
    year: "2018",
    role: "Senior Software Consultant",
    company: "Capita",
    period: "February 2018 - March 2020",
    description: "Designed and implemented a greenfield full stack system, transitioning manual processes to automated processes.",
    logo: "/logos/capita.svg",
    achievements: [
      "Led complete project lifecycle from documentation to release",
      "Designed and implemented new UI and .NET services",
      "Converted functional requirements into technical solutions",
      "Planned releases with key stakeholders"
    ],
    technologies: [".NET", "SQL Server", "Angular", "Azure", "CI/CD"]
  },
  {
    year: "2016",
    role: "Senior Software Consultant",
    company: "Hewlett Packard Enterprise",
    period: "February 2016 - March 2020",
    description: "Designed and implemented a bespoke full stack system for 5,000+ users, including a high-throughput SOAP integration adapter.",
    logo: "/logos/hpe.svg",
    achievements: [
      "Led end-to-end project lifecycle",
      "Designed and implemented bespoke systems",
      "Created high-throughput SOAP Java services",
      "Managed increased scope demands"
    ],
    technologies: ["Java", "Spring", "SOAP", "Oracle", "Angular"]
  },
  {
    year: "2013",
    role: "Senior Software Engineer",
    company: "Capita",
    period: "April 2013 - October 2015",
    description: "Led development of large-scale system changes using open source Java technologies for high-performance, low-latency solutions.",
    logo: "/logos/capita.svg",
    achievements: [
      "Led multiple development teams",
      "Drove core architectural designs",
      "Managed multiple stakeholder relationships",
      "Supported day-to-day operations"
    ],
    technologies: ["Java", "Spring", "Hibernate", "MySQL", "Jenkins"]
  },
  {
    year: "2011",
    role: "Senior Software Engineer",
    company: "Detica",
    period: "June 2011 - December 2012",
    description: "Developed enterprise solutions focusing on high-performance systems.",
    logo: "/logos/detica.png",
    achievements: [
      "Delivered complex enterprise solutions",
      "Led technical implementations",
      "Mentored junior developers"
    ],
    technologies: ["Java", "Spring", "Oracle", "WebLogic", "Maven"]
  },
  {
    year: "2008",
    role: "Java Development Consultant",
    company: "Atos",
    period: "September 2008 - June 2011",
    description: "Developed and maintained enterprise Java applications.",
    logo: "/logos/atos.svg",
    achievements: [
      "Built robust enterprise applications",
      "Implemented best practices",
      "Collaborated with international teams"
    ],
    technologies: ["Java", "J2EE", "Struts", "Hibernate", "Oracle"]
  }
]

const Timeline = () => {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="experience" className="py-20">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-3xl font-bold mb-8 gradient-text text-center"
        >
          Career Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline connector line */}
          <div className="absolute left-1/2 transform -translate-x-px w-[2px] h-full bg-purple-200/50 dark:bg-purple-800/50" />
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-px w-[2px] bg-purple-500 dark:bg-purple-400 origin-top"
          />

          {timeline.map((event, index) => (
            <div key={`${event.year}-${event.company}`} className="relative">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className={`relative grid grid-cols-2 gap-8 mb-16 ${
                  index % 2 === 0 ? 'text-right' : 'text-left'
                }`}
              >
                <div className={index % 2 === 0 ? '' : 'col-start-2'}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.01,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)"
                    }}
                    transition={{ 
                      type: "tween", 
                      duration: 0.2,
                      ease: "easeOut"
                    }}
                    className={`card-hover bg-white dark:bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl 
                              border border-purple-100 dark:border-purple-800/30
                              ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className={`relative w-24 h-24 ${index % 2 === 0 ? 'order-first' : 'order-last'}`}
                      >
                        <Image
                          src={event.logo}
                          alt={event.company}
                          fill
                          className="object-contain rounded-lg"
                        />
                      </motion.div>
                      <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-purple-600 dark:text-purple-400 font-bold text-lg"
                        >
                          {event.year}
                        </motion.span>
                        <h3 className="text-xl font-bold text-foreground">
                          {event.role}
                        </h3>
                        <p className="text-purple-600 dark:text-purple-400">{event.company}</p>
                        <p className="text-sm text-muted-foreground">{event.period}</p>
                      </div>
                    </div>

                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-foreground/80 dark:text-foreground/70 mb-4"
                    >
                      {event.description}
                    </motion.p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">
                        Key Achievements
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {event.achievements.map((achievement, i) => (
                          <li key={i} className="text-foreground/70 dark:text-foreground/60">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? 'justify-end' : 'justify-start'
                      }`}>
                        {event.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-purple-50 dark:bg-purple-900/30 
                                     text-purple-600 dark:text-purple-400 rounded-full 
                                     text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              
                {/* Timeline marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-8 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                    className="w-4 h-4 rounded-full bg-white dark:bg-gray-900 
                             border-2 border-purple-500 dark:border-purple-400 shadow-md"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline 