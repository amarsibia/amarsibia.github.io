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
  projects?: TimelineEvent[]
}

const timeline: TimelineEvent[] = [
  {
    year: "2024",
    role: "Head of Engineering",
    company: "Openr",
    period: "June 2024 - Present",
    description: "Leading development teams for a SaaS startup in the hospitality industry, focusing on product development and technical strategy.",
    achievements: [
      "Pioneered development team's efforts to deliver compelling proof of concept",
      "Secured Series A funding",
      "Established industry-leading data model",
      "Led cross-functional teams in delivering cutting-edge solutions",
      "Championed quality throughout the SDLC",
      "Provided technical guidance and mentorship"
    ],
    technologies: [
      "TypeScript",
      "NodeJS",
      "Lambda",
      "Serverless Framework",
      "PostgreSQL",
      "REST",
      "React",
      "AWS",
      "Ansible",
      "AWX",
      "GitHub"
    ],
    logo: "/logos/openr.svg"
  },
  {
    year: "2023",
    role: "Technical Manager",
    company: "Tripadvisor",
    period: "September 2023 - May 2024",
    description: "Served as Technical Manager focusing on engineering leadership and technical strategy.",
    achievements: [],
    technologies: [],
    logo: "/logos/tripadvisor.svg"
  },
  { year: "2020",
    role: "Principal Software Engineer",
    company: "AND Digital",
    period: "July 2020 - September 2023",
    description: "Led development team for a SaaS startup in the hospitality industry, focusing on product development and technical strategy.",
    achievements: [],
    technologies: [],
    logo: "/logos/and-digital.svg",
    projects: [
      {
        year: "2022",
        role: "Head of Engineering",
        company: "Openr",
        period: "January 2022 - September 2023",
        description: "Led development team for a SaaS startup in the hospitality industry, focusing on product development and technical strategy.",
        achievements: [
          "Pioneered development team's efforts to deliver compelling proof of concept",
          "Secured Series A funding",
          "Established industry-leading data model",
          "Led cross-functional teams in delivering cutting-edge solutions",
          "Championed quality throughout the SDLC",
          "Provided technical guidance and mentorship"
        ],
        technologies: [
          "TypeScript",
          "NodeJS",
          "Lambda",
          "Serverless Framework",
          "PostgreSQL",
          "REST",
          "React",
          "AWS",
          "Ansible",
          "AWX",
          "GitHub"
        ],
        logo: "/logos/openr.svg"
      },
      {
        year: "2020",
        role: "Engineering Manager",
        company: "Robert Walters Group",
        period: "October 2020 - March 2022",
        description: "Led the development and deployment of a transformative global CRM system.",
        achievements: [
          "Spearheaded developing and deploying custom global CRM system",
          "Expanded technical workforce by 50%",
          "Successfully executed roadmap across multiple global regions",
          "Aligned project initiatives with business strategies"
        ],
        metrics: [
          "50% technical workforce growth",
          "Multiple global region deployments"
        ],
        technologies: [
          "TypeScript",
          "NodeJS",
          "Java",
          "Kafka",
          "GraphQL",
          "PostgreSQL",
          "CQRS",
          "REST",
          "React",
          "AWS",
          "GitHub"
        ],
        logo: "/logos/rw.jpg"
      },
      {
        year: "2020",
        role: "Senior Software Engineer",
        company: "ASOS.com",
        period: "July 2020 - October 2020",
        description: "Contributed to technical development at ASOS as Senior Software Engineer.",
        achievements: ["Defined and implemented a new deployment pipeline for backend services"],
        technologies: [],
        logo: "/logos/asos.svg"
      },
    ]
  },
  {
    year: "2013",
    role: "Director",
    company: "ASDAC",
    period: "April 2013 - July 2020",
    description: "Led development of large-scale system changes using open source Java technologies for high-performance solutions.",
    achievements: [],
    technologies: [],
    logo: "/logos/asdac.svg",
    projects:[
      {
        year: "2018",
        role: "Senior Software Consultant",
        company: "Capita",
        period: "February 2018 - March 2020",
        description: "Designed and implemented a greenfield full stack system, transitioning manual processes to automated solutions.",
        achievements: [
          "Led full project lifecycle from documentation to release",
          "Implemented new UI and .NET services",
          "Managed stakeholder relationships and release planning"
        ],
        technologies: [
          ".NET",
          "React",
          "NodeJS",
          "TypeScript"
        ],
        logo: "/logos/capita.svg"
      },
      {
        year: "2016",
        role: "Senior Software Consultant",
        company: "Hewlett Packard Enterprise",
        period: "February 2016 - March 2020",
        description: "Designed and implemented a bespoke full stack system for over 5,000 users, including high-throughput SOAP integration.",
        achievements: [
          "Built system serving 5,000+ users",
          "Developed high-throughput SOAP integration adapter",
          "Led full project lifecycle",
          "Managed scope changes and client requirements"
        ],
        metrics: [
          "5,000+ user system deployment"
        ],
        technologies: [
          "Angular",
          "JavaScript",
          "Java",
          "SOAP",
          "Full Stack Development"
        ],
        logo: "/logos/hpe.svg"
      },
      {
        year: "2013",
        role: "Senior Software Engineer",
        company: "Capita",
        period: "April 2013 - October 2015",
        description: "Led development of large-scale system changes using open source Java technologies for high-performance solutions.",
        achievements: [
          "Led multiple development teams",
          "Drove core architectural designs",
          "Managed complex operational systems integration",
          "Supported day-to-day operations"
        ],
        technologies: [
          "Java",
          "Open Source Technologies"
        ],
        logo: "/logos/capita.svg"
      }
      ]
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
                    {event.achievements.length > 0 && (
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
                    )}

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

                    {/* Projects Section */}
                    {event.projects && event.projects.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-purple-100 dark:border-purple-800/30">
                        <h4 className="font-semibold mb-4 text-purple-600 dark:text-purple-400">
                          Projects
                        </h4>
                        <div className="space-y-4">
                          {event.projects.map((project, projectIndex) => (
                            <motion.div
                              key={`${project.year}-${project.company}`}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: projectIndex * 0.1 }}
                              className="bg-purple-50/50 dark:bg-purple-900/20 rounded-lg p-4"
                            >
                              <div className="flex items-center gap-3 mb-3 justify-between">
                                <div className="relative w-12 h-12">
                                  <Image
                                    src={project.logo}
                                    alt={project.company}
                                    fill
                                    className="object-contain rounded"
                                  />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 flex-col">
                                    <span className="text-sm text-muted-foreground">
                                      {project.period}
                                    </span>
                                  </div>
                                  <h5 className="font-semibold text-foreground">
                                    {project.role}
                                  </h5>
                                  <p className="text-sm text-purple-600 dark:text-purple-400">
                                    {project.company}
                                  </p>
                                </div>
                              </div>

                              <p className="text-sm text-foreground/80 dark:text-foreground/70 mb-3">
                                {project.description}
                              </p>

                              {project.achievements.length > 0 && (
                                <div className="mb-3">
                                  <h6 className="text-sm font-medium mb-1 text-purple-600 dark:text-purple-400">
                                    Achievements
                                  </h6>
                                  <ul className="text-xs space-y-1">
                                    {project.achievements.map((achievement, i) => (
                                      <li key={i} className="text-foreground/70 dark:text-foreground/60">
                                        • {achievement}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {project.technologies.length > 0 && (
                                <div className={`flex flex-wrap gap-1 ${
                                  index % 2 === 0 ? 'justify-end' : 'justify-start'
                                }`}>
                                  {project.technologies.map((tech, i) => (
                                    <span
                                      key={i}
                                      className="px-2 py-0.5 bg-purple-100/50 dark:bg-purple-900/40 
                                               text-purple-600 dark:text-purple-400 rounded-full 
                                               text-xs font-medium"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
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