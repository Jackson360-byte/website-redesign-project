"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Bot, Globe, Palette, TrendingUp, MessageSquare } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "AI Business Automation",
    description: "Transform your workflows with intelligent automation systems that scale.",
    accent: true,
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Stunning, performant websites that convert visitors into customers.",
    accent: false,
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "Strategic brand development that resonates with your target audience.",
    accent: false,
  },
  {
    icon: TrendingUp,
    title: "Business Growth Strategy",
    description: "Data-driven strategies to accelerate your business growth.",
    accent: false,
  },
  {
    icon: MessageSquare,
    title: "Digital Consulting",
    description: "Expert guidance to navigate the digital landscape successfully.",
    accent: false,
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" ref={ref} className="relative py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-sm text-muted-foreground uppercase tracking-widest">(Our Services)</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            What we <span className="text-[#B9A7D6]">do</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`group relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer h-full ${
        service.accent
          ? "bg-gradient-to-br from-[#4B1E78] to-[#2E0F4F] border-[#4B1E78]/50 hover:shadow-2xl hover:shadow-[#4B1E78]/20"
          : "bg-card border-border/50 hover:border-[#4B1E78]/50 hover:shadow-xl hover:shadow-[#4B1E78]/10"
      }`}
    >
      {/* Icon */}
      <div
        className={`inline-flex p-3 rounded-xl mb-6 ${
          service.accent ? "bg-white/10" : "bg-[#4B1E78]/10 group-hover:bg-[#4B1E78]/20"
        } transition-colors duration-300`}
      >
        <service.icon className={`w-6 h-6 ${service.accent ? "text-white" : "text-[#4B1E78]"}`} />
      </div>

      {/* Content */}
      <h3 className={`text-xl font-semibold mb-3 ${service.accent ? "text-white" : "text-foreground"}`}>
        {service.title}
      </h3>
      <p className={`text-sm leading-relaxed ${service.accent ? "text-white/70" : "text-muted-foreground"}`}>
        {service.description}
      </p>

      {/* Hover glow effect */}
      <div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
          service.accent ? "" : "bg-gradient-to-br from-[#4B1E78]/5 to-transparent"
        }`}
      />
    </motion.div>
  )
}
