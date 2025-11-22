'use client'

import Navbar from '@/components/Navbar/Navbar'
import { Footer } from '@/components/Footer/Footer'
import { motion } from 'framer-motion'

export default function About() {
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
            About <span className="text-emerald-400">Us</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl">
            Learn about our journey, mission, and values that drive Growth SuperCharged.
          </p>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}

        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-primary mb-6"
          >
            About Growth Supercharged
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We believe in more than just growth. We believe in transformation.
          </motion.p>
        </div>
      // </section>

//       {/* Mission Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
//           >
//             <div className="space-y-6">
//               <h2 className="text-4xl font-bold text-primary">Our Mission</h2>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Growth Supercharged was founded with one mission: to help businesses grow and thrive in an increasingly competitive market.
//               </p>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Whether you're a startup or an established enterprise, we partner with you to take your business to new heights. With over 50+ years of combined experience across various industries, our team brings a nuanced approach to business strategy, digital marketing, and operational scaling.
//               </p>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 We understand that every business is unique, and we tailor our solutions to meet your specific needs, ensuring your growth is accelerated and sustainable.
//               </p>
//             </div>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               className="relative h-96 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center"
//             >
//               <div className="text-center">
//                 <div className="text-6xl font-bold text-secondary mb-2">50+</div>
//                 <p className="text-lg text-muted-foreground">Years of Combined Experience</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Why Different Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
//               Why We Are Different
//             </h2>
//             <p className="text-xl text-secondary font-semibold">
//               Deep. Data-Driven. Dynamic.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* We Go Deeper */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6"
//             >
//               <h3 className="text-2xl font-bold text-primary">We Go Deeper</h3>
//               <motion.div
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 className="space-y-4"
//               >
//                 <motion.div variants={itemVariants} className="flex gap-3">
//                   <Check className="w-6 h-6 text-secondary flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold text-primary mb-1">Data-Driven Insights</h4>
//                     <p className="text-muted-foreground text-sm">We leverage advanced analytics to uncover hidden growth opportunities.</p>
//                   </div>
//                 </motion.div>
//                 <motion.div variants={itemVariants} className="flex gap-3">
//                   <Check className="w-6 h-6 text-secondary flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold text-primary mb-1">Market Intelligence</h4>
//                     <p className="text-muted-foreground text-sm">In-depth research to identify emerging trends and untapped segments.</p>
//                   </div>
//                 </motion.div>
//                 <motion.div variants={itemVariants} className="flex gap-3">
//                   <Check className="w-6 h-6 text-secondary flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold text-primary mb-1">Customer Analysis</h4>
//                     <p className="text-muted-foreground text-sm">Delve into behavior, preferences, and pain points to develop targeted strategies.</p>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </motion.div>

//             {/* We Bring Discipline */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.1 }}
//               className="space-y-6"
//             >
//               <h3 className="text-2xl font-bold text-primary">We Bring Discipline</h3>
//               <motion.div
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 className="space-y-4"
//               >
//                 <motion.div variants={itemVariants} className="flex gap-3">
//                   <Check className="w-6 h-6 text-secondary flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold text-primary mb-1">Strategic Framework</h4>
//                     <p className="text-muted-foreground text-sm">Proprietary framework ensuring every initiative aligns with business objectives.</p>
//                   </div>
//                 </motion.div>
//                 <motion.div variants={itemVariants} className="flex gap-3">
//                   <Check className="w-6 h-6 text-secondary flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold text-primary mb-1">Performance Metrics</h4>
//                     <p className="text-muted-foreground text-sm">KPIs to track progress and measure effectiveness of initiatives.</p>
//                   </div>
//                 </motion.div>
//                 <motion.div variants={itemVariants} className="flex gap-3">
//                   <Check className="w-6 h-6 text-secondary flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold text-primary mb-1">Continuous Optimization</h4>
//                     <p className="text-muted-foreground text-sm">Real-time refinement based on data and evolving market dynamics.</p>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </motion.div>

//             {/* We Are Creative */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="space-y-6"
//             >
//               <h3 className="text-2xl font-bold text-primary">We Are Creative</h3>
//               <motion.div
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 className="space-y-4"
//               >
//                 <motion.div variants={itemVariants} className="flex gap-3">
//                   <Check className="w-6 h-6 text-secondary flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold text-primary mb-1">Innovative Thinking</h4>
//                     <p className="text-muted-foreground text-sm">Fresh perspectives and out-of-the-box ideas to drive innovation.</p>
//                   </div>
//                 </motion.div>
//                 <motion.div variants={itemVariants} className="flex gap-3">
//                   <Check className="w-6 h-6 text-secondary flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold text-primary mb-1">Customer-Centric</h4>
//                     <p className="text-muted-foreground text-sm">Putting customers at the heart of every solution we develop.</p>
//                   </div>
//                 </motion.div>
//                 <motion.div variants={itemVariants} className="flex gap-3">
//                   <Check className="w-6 h-6 text-secondary flex-shrink-0" />
//                   <div>
//                     <h4 className="font-semibold text-primary mb-1">Experimentation</h4>
//                     <p className="text-muted-foreground text-sm">Culture of testing new ideas and continuous improvement.</p>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }
