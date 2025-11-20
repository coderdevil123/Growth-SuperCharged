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

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = document.documentElement.scrollHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections and particles
      particles.forEach((particle, i) => {
        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              ctx.strokeStyle = `rgba(16, 185, 129, ${(1 - distance / 150) * 0.2})`
              ctx.lineWidth = 0.5
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
            }
          }
        })

        // Draw particle
        ctx.fillStyle = `rgba(16, 185, 129, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <main className="min-h-screen bg-background relative">
      {/* Animated particle network background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ 
          background: 'linear-gradient(180deg, #0a2e2e 0%, #0d3d3d 50%, #0a2e2e 100%)',
          opacity: 0.6
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all inline-block"
              style={{ backgroundColor: '#10B981', color: '#FFFFFF' }}
            >
              <Link href="/contact">Get in Touch</Link>
            </motion.button>
          </motion.div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
//               >
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
