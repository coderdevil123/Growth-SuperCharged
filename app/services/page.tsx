'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TrendingUp, BarChart3, Zap, Share2, Users, Settings, PieChart, Package, Home, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: 'Growth Strategy & Consulting',
    description: 'Tailored growth strategies aligned with your business goals, streamline your setup, and take ownership of your growth metrics.'
  },
  {
    icon: BarChart3,
    title: 'Performance Marketing & Optimization',
    description: 'Maximize ROI across multiple channels including PPC, display ads, and social media with data-driven campaigns.'
  },
  {
    icon: Zap,
    title: 'Operational Scaling',
    description: 'Enable rapid growth by optimizing internal processes, technology infrastructure, and resource allocation.'
  },
  {
    icon: Share2,
    title: 'Paid Social',
    description: 'Highly targeted advertising campaigns across Facebook, Instagram, LinkedIn, and Twitter for maximum results.'
  },
  {
    icon: Users,
    title: 'Lead Generation & User Acquisition',
    description: 'Identify high-quality prospects through targeted campaigns and multi-channel acquisition strategies.'
  },
  {
    icon: Settings,
    title: 'Customer Relationship Management',
    description: 'Implement and customize CRM systems to streamline customer interactions and automate sales processes.'
  },
  {
    icon: PieChart,
    title: 'Consumer Insight & Analytics',
    description: 'Uncover deep insights into customer behavior, preferences, and purchasing patterns using advanced analytics.'
  },
  {
    icon: Package,
    title: 'Product Management',
    description: 'Refine product offerings by focusing on user needs, market demand, and competitive positioning.'
  },
  {
    icon: Home,
    title: 'Special Client Management',
    description: 'Real estate and immigration services with specialized lead generation and CRM implementation.'
  },
  {
    icon: Lightbulb,
    title: 'Build Your Own Brand',
    description: 'End-to-end solution from visual identity to web development, social media marketing, and performance tracking.'
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Services() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-primary mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Comprehensive growth solutions tailored to your business needs.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 212, 255, 0.1)' }}
                  className="p-6 bg-card border border-border rounded-lg hover:border-secondary transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4"
                  >
                    <Icon className="w-6 h-6 text-secondary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to drive measurable results
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { step: 'Discover', description: 'In-depth analysis of your business and goals' },
              { step: 'Strategy', description: 'Develop customized growth plans' },
              { step: 'Execute', description: 'Implement campaigns and initiatives' },
              { step: 'Optimize', description: 'Refine based on performance data' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative text-center"
              >
                <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{item.step}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {i < 3 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4 }}
                    className="hidden md:block absolute top-8 left-[60%] w-[80%] h-1 bg-gradient-to-r from-secondary to-transparent"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
