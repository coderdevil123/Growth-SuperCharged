'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-primary"
          >
            GSC
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <motion.div key={link.href} whileHover={{ scale: 1.05 }}>
                <Link
                  href={link.href}
                  className={`transition-colors ${
                    pathname === link.href
                      ? 'text-secondary font-semibold'
                      : 'text-foreground hover:text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              <Link href="/contact">Get Started</Link>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
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
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
