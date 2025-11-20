'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  const dynamicHeadlines = [
    'Power Up Your Potential',
    'Scale Up Your Revenue',
    'Amp Up Your Growth',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dynamicHeadlines.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const x = (clientX - innerWidth / 2) * 0.03
      const y = (clientY - innerHeight / 2) * 0.03

      gsap.to('.parallax-layer', {
        x,
        y,
        duration: 0.5,
        overwrite: 'auto',
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background" />
      
      <div className="relative max-w-7xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary">
            Growth Supercharged
          </h1>
          
          <div className="h-16 md:h-20 lg:h-24 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary"
                style={{
                  textShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
                }}
              >
                {dynamicHeadlines[currentIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We partner with ambitious businesses to unlock explosive growth through strategic marketing, 
            data-driven insights, and operational excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Our Services
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated decorative elements */}
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
//           >
//             <p className="text-lg md:text-2xl text-muted-foreground font-semibold tracking-wide">
//               Own The Edge
//             </p>
//             <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//               Transform your business with data-driven growth strategies, performance marketing, and operational scaling solutions that deliver measurable results.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
//           >
//             {/* Primary CTA button with hover glow */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onHoverStart={() => {
//                 gsap.to('.cta-glow', {
//                   boxShadow: '0 0 40px rgba(0, 212, 255, 0.6), 0 0 80px rgba(0, 212, 255, 0.3)',
//                   duration: 0.3,
//                 })
//               }}
//               onHoverEnd={() => {
//                 gsap.to('.cta-glow', {
//                   boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
//                   duration: 0.3,
//                 })
//               }}
//               className="cta-glow px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-bold text-lg flex items-center gap-2 transition-all duration-300"
//               style={{
//                 boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
//               }}
//             >
//               <Link href="/contact" className="flex items-center gap-2">
//                 Get in Touch
//                 <motion.div
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <ArrowRight className="w-5 h-5" />
//                 </motion.div>
//               </Link>
//             </motion.button>

//             {/* Secondary button with outline glow */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-4 border-2 border-secondary text-secondary rounded-lg font-bold text-lg hover:bg-secondary/10 transition-all"
//             >
//               <Link href="/services">Explore Services</Link>
//             </motion.button>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1.2 }}
//             className="absolute bottom-8 left-1/2 -translate-x-1/2"
//           >
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="flex flex-col items-center gap-2"
//             >
//               <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
//               <svg
//                 className="w-6 h-6 text-secondary"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                 />
//               </svg>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       <motion.div
//         className="absolute top-20 right-10 w-20 h-20 border-2 border-secondary rounded-lg opacity-20"
//         animate={{
//           rotate: 360,
//           y: [0, 20, 0],
//         }}
//         transition={{
//           rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
//           y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
//         }}
//       />

//       <motion.div
//         className="absolute bottom-20 left-10 w-32 h-32 border border-accent rounded-full opacity-10"
//         animate={{
//           scale: [1, 1.1, 1],
//           rotate: -360,
//         }}
//         transition={{
//           scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
//           rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
//         }}
//       />
//     </section>
//   )
// }
