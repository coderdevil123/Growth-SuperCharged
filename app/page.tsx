'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar/Navbar'
import { Footer } from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import WhatWeDo from '@/components/WhatWeDo/WhatWeDo'
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    // Set initial canvas size
    const updateCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2) // Limit to 2x for performance
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr // Only viewport height instead of full document
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    updateCanvasSize()

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    // Reduce particle count based on device
    const particleCount = window.innerWidth < 768 ? 40 : 60

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.2,
      })
    }

    let animationFrameId: number
    let lastTime = 0
    const fps = 30 // Limit to 30 fps for better performance
    const fpsInterval = 1000 / fps

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate)

      const elapsed = currentTime - lastTime
      if (elapsed < fpsInterval) return

      lastTime = currentTime - (elapsed % fpsInterval)

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // Draw particles only
      particles.forEach((particle) => {
        ctx.fillStyle = `rgba(16, 185, 129, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges instead of bounce (simpler calculation)
        if (particle.x < 0) particle.x = window.innerWidth
        if (particle.x > window.innerWidth) particle.x = 0
        if (particle.y < 0) particle.y = window.innerHeight
        if (particle.y > window.innerHeight) particle.y = 0
      })

      // Draw connections only for nearby particles (optimized)
      const connectionDistance = 120
      particles.forEach((particle, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.strokeStyle = `rgba(16, 185, 129, ${(1 - distance / connectionDistance) * 0.15})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }
      })
    }

    animate(0)

    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(updateCanvasSize, 250)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [])

  return (
    <main className="min-h-screen bg-background relative">
      {/* Animated particle network background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ 
          background: 'linear-gradient(180deg, #0a2e2e 0%, #0d3d3d 50%, #0a2e2e 100%)',
          opacity: 0.6,
          willChange: 'auto'
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <WhatWeDo />
        <WhyChooseUs />

        {/* CTA Banner with gradient background for seamless blend */}
        <section
          className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 relative"
          style={{
            background: 'linear-gradient(to bottom, #34d399 0%, #10b981 15%, #059669 35%, #047857 55%, #065f46 75%, #0F172A 100%)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ color: '#FFFFFF' }}
            >
              How can we help you grow?
            </h2>
            <p
              className="text-lg opacity-90"
              style={{ color: '#D1D5DB' }}
            >
              Let's partner together to take your business to new heights.
            </p>
            <div className="flex justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-emerald-500 text-white hover:bg-emerald-600 rounded-full px-8 py-4 font-semibold text-base transition-all duration-250 ease-in-out shadow-lg hover:shadow-emerald-500/50 focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </main>
  )
}

//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: 12 }}
//                   transition={{ delay: 0.2, duration: 0.6 }}
//                   className="h-1 bg-secondary mb-4"
//                 />
//                 <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
//                 <p className="text-muted-foreground">{item.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Banner */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto text-center space-y-8"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold">How can we help you grow?</h2>
//           <p className="text-lg opacity-90">
//             Let's partner together to take your business to new heights.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:shadow-lg transition-all inline-block"
//           >
//             <Link href="/contact">Get in Touch</Link>
//           </motion.button>
//         </motion.div>
//       </section>

//       <Footer />
//     </main>
//   )
// }
