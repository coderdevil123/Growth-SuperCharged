'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
          >
            <h3 className="text-lg font-bold mb-4">Growth Supercharged</h3>
            <p className="text-sm opacity-80">Own The Edge - Transform your business with data-driven strategies.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:opacity-80 transition">Home</Link></li>
              <li><Link href="/about" className="hover:opacity-80 transition">About</Link></li>
              <li><Link href="/services" className="hover:opacity-80 transition">Services</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Team</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/team" className="hover:opacity-80 transition">Our Team</Link></li>
              <li><Link href="/contact" className="hover:opacity-80 transition">Contact Us</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <p className="text-sm">Email us for inquiries</p>
              <a href="mailto:hello@growthsupercharged.com" className="text-secondary hover:opacity-80 transition text-sm">
                hello@growthsupercharged.com
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-70">
            © {currentYear} Growth Supercharged. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
