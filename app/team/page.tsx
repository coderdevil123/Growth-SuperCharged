'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const teamMembers = [
  {
    name: 'Rohan Kumar',
    title: 'Founder',
    background: 'OYO | Yes2Growth | IIT-M',
    bio: 'Led online user acquisition for India and SEA at OYO Growth. Scaled paid acquisition by 2.2x, 3x & 1.7x across multiple geos. Expert in user acquisition, CRM automation, and funnel optimization.',
  },
  {
    name: 'Gayatri Ramdas',
    title: 'Brand Strategy',
    background: 'Conde Nast | Databricks | The Rockefeller Foundation',
    bio: 'Content strategist with expertise in digital content creation for MNCs, NGOs, startups, and institutions. Proven track record in crafting data-driven content strategies and leading customer engagement.',
  },
  {
    name: 'Anubhav Mishra',
    title: 'Strategy & Operations',
    background: 'PWC | Bain | IIT-M | IIM-K',
    bio: 'Brings strategic consulting expertise from top-tier firms with deep understanding of operational excellence and business strategy implementation.',
  },
  {
    name: 'Ramnaresh Chouhan',
    title: 'Product & Data Analytics',
    background: 'Whatfix | Delhivery | IIT-M',
    bio: 'Seasoned data professional with proven track record in SaaS and logistics. Expert in advanced analytics, A/B testing, and automation initiatives.',
  },
  {
    name: 'Yash Murty',
    title: 'Growth & Strategy',
    background: 'Tech & Strategy Experience | IIT-M',
    bio: 'Strategic thinker focused on scalable growth initiatives and market expansion strategies.',
  },
  {
    name: 'Ashok Kumar',
    title: 'Operations Lead',
    background: 'Operations & Management | IIT-M',
    bio: 'Ensures smooth execution and operational excellence across all growth initiatives.',
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

export default function Team() {
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
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Experienced growth strategists, marketers, and data analysts dedicated to your success.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg overflow-hidden mb-4 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-secondary opacity-20">{member.name[0]}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-secondary font-semibold mb-2">{member.title}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.background}</p>
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
