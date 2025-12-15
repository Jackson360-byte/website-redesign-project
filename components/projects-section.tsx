"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "TechFlow Platform",
    category: "Web Development",
    image: "/modern-tech-dashboard-dark-purple-theme.jpg",
  },
  {
    title: "Luxe Brand Identity",
    category: "Branding",
    image: "/luxury-brand-identity-mockup-purple-elegant.jpg",
  },
  {
    title: "AI Sales System",
    category: "AI Automation",
    image: "/ai-automation-dashboard-futuristic-purple-interfac.jpg",
  },
  {
    title: "Venture Website",
    category: "Web Development",
    image: "/venture-capital-website-dark-mode-professional.jpg",
  },
]

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={ref} className="relative py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-widest">(Selected Work)</span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Our <span className="text-[#B9A7D6]">Projects</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-muted-foreground max-w-md">
            A showcase of our recent work across web development, branding, and AI automation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl mb-6">
        <div className="aspect-[4/3] relative">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E0F4F]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Arrow icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ArrowUpRight className="w-5 h-5 text-[#4B1E78]" />
          </motion.div>
        </div>
      </div>

      <div className="space-y-2">
        <span className="text-sm text-[#B9A7D6] font-medium">{project.category}</span>
        <h3 className="text-2xl font-semibold text-foreground group-hover:text-[#B9A7D6] transition-colors duration-300">
          {project.title}
        </h3>
      </div>
    </motion.div>
  )
}
