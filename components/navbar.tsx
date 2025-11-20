'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // Adjust these values based on your section heights
      const heroEnd = 800
      const whatWeDoEnd = 1600
      const whyChooseUsEnd = 2400

      if (currentScrollY < heroEnd) {
        setIsDark(true) // Hero is dark
      } else if (currentScrollY >= heroEnd && currentScrollY < whatWeDoEnd) {
        setIsDark(false) // WhatWeDo is light
      } else if (currentScrollY >= whatWeDoEnd && currentScrollY < whyChooseUsEnd) {
        setIsDark(false) // WhyChooseUs is light
      } else {
        setIsDark(true) // CTA section is dark
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className="fixed w-full top-0 z-50 backdrop-blur-md border-b transition-all duration-300"
      style={{
        backgroundColor: scrollY > 50 
          ? (isDark ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)')
          : 'transparent',
        borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold transition-colors"
            style={{ color: isDark ? '#10B981' : '#0F172A' }}
          >
            GSC
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <motion.div key={link.href} whileHover={{ scale: 1.05 }}>
                <Link
                  href={link.href}
                  className="transition-colors font-medium"
                  style={{
                    color: pathname === link.href
                      ? '#10B981'
                      : (isDark ? '#FFFFFF' : '#0F172A'),
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-lg font-semibold transition-all"
              style={{
                backgroundColor: '#10B981',
                color: '#FFFFFF',
              }}
            >
              <Link href="/contact">Get Started</Link>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2"
            style={{
              backgroundColor: isDark ? '#0F172A' : '#FFFFFF',
            }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2"
                onClick={() => setIsOpen(false)}
                style={{
                  color: isDark ? '#FFFFFF' : '#0F172A',
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 rounded-lg font-semibold mx-4"
              onClick={() => setIsOpen(false)}
              style={{
                backgroundColor: '#10B981',
                color: '#FFFFFF',
              }}
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
