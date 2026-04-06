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
    year: "2025",
    role: "Fractional CTO",
    company: "Independent",
    period: "March 2025 - Present",
    description: "Working with seed-stage B2B SaaS founders as a Fractional CTO — providing senior technical leadership without the full-time overhead.",
    achievements: [
      "Architecture decisions before they become six-figure rewrites",
      "First engineering hire — the brief, the process, the offer letter",
      "AWS infrastructure that scales cleanly and doesn't leak",
      "Security posture that survives ISO 27001 / SOC 2 due diligence",
      "A dev culture that ships without burning engineers out"
    ],
    technologies: ["Architecture Strategy", "Engineering Hiring", "Security & Compliance", "Technical Due Diligence", "Team Culture"],
    logo: "/logos/asdac.svg"
  },
  {
    year: "2024",
    role: "Head of Engineering",
    company: "Openr",
    period: "June 2024 - Present",
    description: "Openr is a B2B SaaS platform for the hospitality sector — menu management, dynamic pricing, and data curation for restaurant brands, connected to delivery platforms, EPOS systems, and POS providers. CTO-equivalent responsibility across architecture, security, hiring, and product-engineering strategy.",
    achievements: [
      "Secured £3m seed investment through delivery of the initial product platform and first enterprise client onboarding",
      "Designed multi-tenant AWS Lambda / EventBridge / PostgreSQL architecture serving 500k+ daily transactions",
      "Built third-party integration architecture connecting hospitality brands across 10+ delivery, EPOS, and POS platforms",
      "Led ISO 27001 and SOC 2 accreditation as acting CISO — alongside NIST CSF 2.0, SonarCloud CI, and CloudFront/Terraform CSP headers",
      "Running engineering hiring pipeline end-to-end — Principal Engineer recruitment, technical interview design, performance frameworks",
      "Transitioned from consultant-heavy to permanent engineering team — reducing vendor dependency and improving delivery quality"
    ],
    technologies: [
      "AWS",
      "Serverless",
      "Node.js",
      "TypeScript",
      "React",
      "PostgreSQL",
      "EventBridge",
      "Terraform"
    ],
    logo: "/logos/openr.svg"
  },
  {
    year: "2023",
    role: "Technical Manager",
    company: "Tripadvisor",
    period: "September 2023 - May 2024",
    description: "Established and led a newly formed engineering team within TripAdvisor's global platform engineering organisation. Responsible for delivery governance, transitioning service ownership from distributed international teams, and aligning with global platform architecture.",
    achievements: [
      "Built a new UK-based engineering team from scratch — processes, sprint governance, and operational ownership",
      "Led cross-regional service transition from APAC to UK/Portugal with no service disruption",
      "Defined team roadmap aligned with global platform objectives across distributed engineering organisation"
    ],
    technologies: ["Java", "Spring Boot", "React", "Kubernetes", "Docker", "AWS"],
    logo: "/logos/tripadvisor.svg"
  },
  {
    year: "2020",
    role: "Senior Engineer → Head of Engineering",
    company: "AND Digital",
    period: "July 2020 - September 2023",
    description: "Three-year consultancy tenure embedded across multiple client engagements, progressing from Senior Software Engineer to Head of Engineering.",
    achievements: [],
    technologies: [],
    logo: "/logos/and-digital.svg",
    projects: [
      {
        year: "2022",
        role: "Head of Engineering",
        company: "Openr",
        period: "January 2022 - September 2023",
        description: "Pioneered the development team's efforts to deliver a compelling proof of concept, instrumental in securing Series A funding and propelling the product into full-scale production.",
        achievements: [
          "Secured Series A funding through rapid proof of concept delivery",
          "Established industry-leading data model in collaboration with data experts",
          "Led cross-functional teams across the full product roadmap",
          "Championed quality throughout the SDLC",
          "Provided technical guidance and mentorship to the engineering team"
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
        description: "Led and orchestrated the development and deployment of a transformative global CRM system, positioning it as the cornerstone of business operations.",
        achievements: [
          "Spearheaded development and deployment of a custom global CRM system",
          "Grew technical workforce by 50% through talent acquisition and team development",
          "Successfully executed roadmap with deployments across multiple global regions",
          "Aligned project objectives with broader business strategies"
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
        technologies: ["Azure", "Kubernetes", "Docker", ".Net", "C# Core", "SQL Server", "Azure DevOps"],
        logo: "/logos/asos.svg"
      },
    ]
  },
  {
    year: "2013",
    role: "Senior Software Consultant",
    company: "ASDAC",
    period: "April 2013 - July 2020",
    description: "Independent consultancy, delivering senior software engineering across major enterprises in financial services, government, and technology sectors.",
    achievements: [],
    technologies: [],
    logo: "/logos/asdac.svg",
    projects: [
      {
        year: "2018",
        role: "Senior Software Consultant",
        company: "Capita",
        period: "February 2018 - March 2020",
        description: "Designed and implemented a greenfield full stack system, transitioning manual processes to automated solutions.",
        achievements: [
          "Led full project lifecycle from high-level documentation through to release",
          "Designed and implemented new UI and .NET services",
          "Converted functional requirements into technical requirements",
          "Managed stakeholder release planning to deliver value early"
        ],
        technologies: [".NET", "React", "NodeJS", "TypeScript"],
        logo: "/logos/capita.svg"
      },
      {
        year: "2016",
        role: "Senior Software Consultant",
        company: "Hewlett Packard Enterprise",
        period: "February 2016 - March 2020",
        description: "Designed and implemented a bespoke full stack system for utilisation by over 5,000 users, plus a high-throughput SOAP integration adapter.",
        achievements: [
          "Built system serving 5,000+ users",
          "Developed high-throughput SOAP integration adapter enabling new user-facing front end",
          "Led full project lifecycle from initial requirements through to BAU transition",
          "Managed increased scope demands from the client"
        ],
        metrics: ["5,000+ user system deployment"],
        technologies: ["Angular", "JavaScript", "Java", "SOAP"],
        logo: "/logos/hpe.svg"
      },
      {
        year: "2015",
        role: "Senior Software Consultant",
        company: "Capgemini",
        period: "October 2015 - February 2016",
        description: "Implemented a high-throughput RESTful integration service enabling existing systems to transition to a new document store.",
        achievements: [
          "Designed and implemented RESTful Java services",
          "Responsible for all project test cycles including defect resolution",
          "Developed and implemented automation testing framework using Selenium"
        ],
        technologies: ["Java", "REST", "Selenium"],
        logo: "/logos/capita.svg"
      },
      {
        year: "2013",
        role: "Senior Software Engineer",
        company: "Capita",
        period: "April 2013 - October 2015",
        description: "Designed and implemented large-scale system changes using major open source Java technologies to deliver high-performance, low-latency solutions.",
        achievements: [
          "Led multiple development teams while driving core architectural designs",
          "Managed complex operational systems integration across multiple stakeholders",
          "Produced detailed technical documentation for development, maintenance, and configuration"
        ],
        technologies: ["Java", "Spring", "Oracle"],
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
          {/* Timeline connector line - Keep spacing below arrow but connect line */}
          <div className="flex justify-center pb-8 relative z-20">
            <div className="relative w-24 h-12 rounded-full bg-white dark:bg-purple-900 flex items-center justify-center border-2 border-purple-500 dark:border-purple-400">
              <motion.div
                initial={{ y: -5, opacity: 0 }}
                animate={{ y: 5, opacity: 1 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <svg 
                  className="w-6 h-6 text-purple-600 dark:text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </div>
          </div>
          
          {/* Adjust the timeline lines - lower z-index */}
          <div className="absolute left-1/2 transform -translate-x-px w-[2px] h-[calc(100%-3rem)] bg-purple-200/50 dark:bg-purple-800/50 top-6 z-0" />
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 'calc(100% - 3rem)' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-px w-[2px] bg-purple-500 dark:bg-purple-400 origin-top top-6 z-0"
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
                className={`relative md:grid md:grid-cols-2 gap-8 mb-16 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                } text-left z-10`}
              >
                <div className={`${index % 2 === 0 ? '' : 'md:col-start-2'} ${
                  index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'
                }`}>
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
                    className="card-hover bg-background/80 backdrop-blur-sm p-6 rounded-xl 
                              border border-purple-100 dark:border-purple-800/30"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className={`relative w-24 h-24 ${index % 2 === 0 ? 'md:order-first' : 'md:order-last'} order-first`}
                      >
                        <Image
                          src={event.logo}
                          alt={event.company}
                          fill
                          className="object-contain rounded-lg"
                        />
                      </motion.div>
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
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
                      className="text-foreground/80 dark:text-foreground/70 mb-4 hidden md:block"
                    >
                      {event.description}
                    </motion.p>

                    {/* Achievements */}
                    {event.achievements.length > 0 && (
                      <div className="mb-4 hidden md:block">
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
                      <div className={`flex flex-wrap gap-2 md:block${
                        index % 2 === 0 ? 'md:justify-end justify-start' : 'justify-start'
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
                              className="bg-muted/50 rounded-lg p-4"
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

                              <p className="text-sm text-foreground/80 dark:text-foreground/70 mb-3 hidden md:block">
                                {project.description}
                              </p>

                              {project.achievements.length > 0 && (
                                <div className="mb-3 hidden md:block">
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
                                <div className={`flex flex-wrap gap-1 block justify-start`}>
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
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 mt-8 z-20 hidden md:block">
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
          <div className="flex justify-center mt-8 relative z-20">
            <div className="relative w-24 h-12 rounded-full bg-white dark:bg-purple-900 flex items-center justify-center border-2 border-purple-500 dark:border-purple-400">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut"
                }}
              >
                <motion.svg
                  className="w-6 h-6 text-purple-600 dark:text-white"
                  fill="none"
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 1],
                      opacity: [0, 1, 1],
                      scale: [1, 1, 1.2],
                    }}
                    transition={{
                      duration: 3,
                      times: [0, 0.3, 1],
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                </motion.svg>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline 