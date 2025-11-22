'use client'

import Navbar from '@/components/Navbar/Navbar'
import { Footer } from '@/components/Footer/Footer'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #0F172A 0%, #0a1628 100%)' }}>
      <Navbar />
      
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Our <span className="text-emerald-400">Services</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl">
            Explore our comprehensive solutions designed to supercharge your growth.
          </p>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
