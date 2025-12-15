"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"

const words = ["Get", "Connected", "and", "Take", "Your", "Business", "Success", "Further."]

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E0F4F]/20 via-background to-background" />

      {/* Animated gradient orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#4B1E78]/20 blur-[120px]"
      />

      <motion.div style={{ opacity, y }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="w-2 h-2 rounded-full bg-[#4B1E78] animate-pulse" />
              Digital Solutions & AI Automation
            </motion.div>

            {/* Main headline with word-by-word animation */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-block mr-4 ${
                    word === "Business" || word === "Further." ? "text-[#B9A7D6]" : "text-foreground"
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              We partner with ambitious businesses to build impactful digital experiences through AI automation,
              strategic design, and cutting-edge technology.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-[#4B1E78] rounded-full hover:bg-[#5a2591] transition-all duration-300 hover:shadow-xl hover:shadow-[#4B1E78]/30"
              >
                Book a 30-Min Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#services"
                className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-foreground hover:text-[#B9A7D6] transition-colors duration-300"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right content - Display mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Browser mockup */}
              <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl">
                {/* Browser header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-background/50 rounded-md px-3 py-1 text-xs text-muted-foreground">
                      dcyphernet.com
                    </div>
                  </div>
                </div>
                {/* Screen content */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#2E0F4F] via-[#4B1E78] to-[#2E0F4F] p-8">
                  <div className="h-full flex flex-col justify-center items-center text-center space-y-4">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                      className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center"
                    >
                      <span className="text-2xl font-bold text-white">D</span>
                    </motion.div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">AI-Powered Growth</h3>
                      <p className="text-sm text-white/60">Automate. Scale. Succeed.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3 w-full max-w-xs pt-4">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.5 + i * 0.1 }}
                          className="h-20 rounded-lg bg-white/10 backdrop-blur"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-24 h-24 rounded-2xl bg-[#4B1E78]/20 backdrop-blur-xl border border-[#4B1E78]/30"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#B9A7D6]/10 backdrop-blur-xl border border-[#B9A7D6]/20"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">(Scroll)</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
