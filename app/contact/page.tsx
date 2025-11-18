'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useState } from 'react'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    services: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', businessType: '', services: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-primary mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            You've taken one step towards supercharging your business!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-secondary font-semibold mt-4"
          >
            Connect • Learn • Grow
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-8">Send us a message</h2>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-green-50 border border-green-200 rounded-lg text-center"
                >
                  <p className="text-green-800 font-semibold mb-2">Thank you for reaching out!</p>
                  <p className="text-green-700">We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Contact Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Type of Business</label>
                    <input
                      type="text"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Your business type"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">What services are you seeking?</label>
                    <textarea
                      name="services"
                      value={formData.services}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                      placeholder="Tell us about the services you're interested in..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                  >
                    Send Message <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  If you want to learn how our services can help you grow your business, leave us a message. We'll get in touch.
                </p>
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-4 items-start"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <a href="mailto:hello@growthsupercharged.com" className="text-muted-foreground hover:text-secondary transition">
                    hello@growthsupercharged.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-4 items-start"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Phone</h3>
                  <p className="text-muted-foreground">Available upon request</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex gap-4 items-start"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Location</h3>
                  <p className="text-muted-foreground">Global presence with local expertise</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
