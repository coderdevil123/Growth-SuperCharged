'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer
      className="relative py-16 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(to bottom, #0F172A 0%, #064e3b 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Forest silhouette background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3Cpath fill='%23065f46' d='M0,300 Q100,250 200,280 T400,290 T600,270 T800,285 T1000,275 T1200,290 L1200,400 L0,400 Z'/%3E%3C/svg%3E")`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center font-bold text-sm"
                  style={{ backgroundColor: '#10B981', color: '#FFFFFF' }}
                >
                  GS
                </div>
                <span className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>
                  Growth SuperCharged
                </span>
              </div>
            </motion.div>
          </div>

          {/* Get Started */}
          <div>
            <h3 className="text-sm font-semibold mb-4" style={{ color: '#FFFFFF' }}>
              GET STARTED
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-sm hover:underline" style={{ color: '#D1D5DB' }}>
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:underline" style={{ color: '#D1D5DB' }}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* The Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4" style={{ color: '#FFFFFF' }}>
              THE COMPANY
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-sm hover:underline" style={{ color: '#D1D5DB' }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm hover:underline" style={{ color: '#D1D5DB' }}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:underline" style={{ color: '#D1D5DB' }}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-4" style={{ color: '#FFFFFF' }}>
              LEGAL
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-sm hover:underline" style={{ color: '#D1D5DB' }}>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:underline" style={{ color: '#D1D5DB' }}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <p className="text-sm" style={{ color: '#9CA3AF' }}>
            © {new Date().getFullYear()} Growth SuperCharged. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-center py-12 border-t"
//           style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
//             Are you ready?<br />Let's grow together!
//           </h2>
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-3 rounded-lg font-semibold"
//               style={{ backgroundColor: 'transparent', border: '2px solid #10B981', color: '#FFFFFF' }}
//             >
//               Learn More
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-3 rounded-lg font-semibold"
//               style={{ backgroundColor: '#FFFFFF', color: '#0F172A' }}
//             >
//               <Link href="/contact">Get Started</Link>
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Copyright */}
//         <div className="text-center pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
//           <p className="text-sm" style={{ color: '#9CA3AF' }}>
//             © {new Date().getFullYear()} Growth SuperCharged. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
