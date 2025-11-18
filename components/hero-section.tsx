'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState('')
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0)
  const headlineRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const headlines = [
    'Power Up Your Potential',
    'Scale Up Your Revenue',
    'Amp Up Your Growth',
  ]

  // Typing animation for dynamic headlines
  useEffect(() => {
    const currentText = headlines[currentHeadlineIndex]
    let charIndex = 0
    let isDeleting = false

    const typeInterval = setInterval(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1))
          charIndex++
        } else {
          isDeleting = true
          setTimeout(() => {
            isDeleting = false
            charIndex = 0
            setCurrentHeadlineIndex((prev) => (prev + 1) % headlines.length)
          }, 2000)
        }
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentHeadlineIndex, headlines])

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const x = (clientX - innerWidth / 2) * 0.03
      const y = (clientY - innerHeight / 2) * 0.03

      gsap.to(containerRef.current, {
        x,
        y,
        duration: 0.5,
        overwrite: 'auto',
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Glow animation on CTA button
  const handleCTAHover = (isHovering: boolean) => {
    if (!headlineRef.current) return
    gsap.to(headlineRef.current, {
      textShadow: isHovering
        ? '0 0 40px rgba(0, 212, 255, 0.8), 0 0 80px rgba(0, 212, 255, 0.4)'
        : '0 0 20px rgba(0, 212, 255, 0.5)',
      duration: 0.3,
    })
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div
          ref={containerRef}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-secondary font-semibold text-sm md:text-base"
          >
            <Zap className="w-4 h-4" />
            <span>Introducing Growth Supercharged</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-2"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Growth Supercharged
              </span>
            </h1>

            <motion.div
              ref={headlineRef}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary min-h-16 flex items-center justify-center"
              onMouseEnter={() => handleCTAHover(true)}
              onMouseLeave={() => handleCTAHover(false)}
            >
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <p className="text-lg md:text-2xl text-muted-foreground font-semibold tracking-wide">
              Own The Edge
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transform your business with data-driven growth strategies, performance marketing, and operational scaling solutions that deliver measurable results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            {/* Primary CTA button with hover glow */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => {
                gsap.to('.cta-glow', {
                  boxShadow: '0 0 40px rgba(0, 212, 255, 0.6), 0 0 80px rgba(0, 212, 255, 0.3)',
                  duration: 0.3,
                })
              }}
              onHoverEnd={() => {
                gsap.to('.cta-glow', {
                  boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
                  duration: 0.3,
                })
              }}
              className="cta-glow px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-bold text-lg flex items-center gap-2 transition-all duration-300"
              style={{
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
              }}
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get in Touch
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.button>

            {/* Secondary button with outline glow */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-secondary text-secondary rounded-lg font-bold text-lg hover:bg-secondary/10 transition-all"
            >
              <Link href="/services">Explore Services</Link>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
              <svg
                className="w-6 h-6 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute top-20 right-10 w-20 h-20 border-2 border-secondary rounded-lg opacity-20"
        animate={{
          rotate: 360,
          y: [0, 20, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 border border-accent rounded-full opacity-10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: -360,
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
        }}
      />
    </section>
  )
}
