'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Zap, BarChart3, Users } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export default function Home() {
  const dynamicHeadlines = [
    'Power Up Your Potential',
    'Scale Up Your Revenue',
    'Amp Up Your Growth',
  ]

  const features = [
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      description: 'Tailored strategies that align with your business goals and drive scalable growth.'
    },
    {
      icon: BarChart3,
      title: 'Performance Marketing',
      description: 'Maximize ROI across multiple channels with data-driven campaigns.'
    },
    {
      icon: Zap,
      title: 'Operational Scaling',
      description: 'Streamline operations and ensure efficiency as you expand.'
    },
    {
      icon: Users,
      title: 'Brand Building',
      description: 'Create lasting impressions with strategic brand positioning.'
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* What We Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We partner with businesses to create customized strategies that fuel sustainable success.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="p-6 bg-background border border-border rounded-lg hover:border-secondary transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4"
                  >
                    <Icon className="w-6 h-6 text-secondary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Why Choose Growth Supercharged</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine deep expertise with dynamic problem-solving to deliver transformative results.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: 'Experienced Team and Network',
                description: 'Our team brings expertise from premier institutions and leading companies, giving us insights into diverse market landscapes.'
              },
              {
                title: 'End-to-End Solutions',
                description: 'From digital marketing to operational scaling, we provide comprehensive solutions tailored to your growth challenges.'
              },
              {
                title: 'Data-Driven Insights',
                description: 'Every decision is backed by data to ensure maximum ROI and measurable results for your business.'
              },
              {
                title: 'Dynamic & Disciplined',
                description: 'We balance creativity with discipline, ensuring every initiative aligns with your business objectives.'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-8 bg-card border border-border rounded-lg"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 12 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="h-1 bg-secondary mb-4"
                />
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold">How can we help you grow?</h2>
          <p className="text-lg opacity-90">
            Let's partner together to take your business to new heights.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:shadow-lg transition-all inline-block"
          >
            <Link href="/contact">Get in Touch</Link>
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
