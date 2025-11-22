"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      // Smooth transition detection - smaller increments
      const heroEnd = 800;
      const whatWeDoEnd = 1600;
      const whyChooseUsEnd = 2400;

      // Use immediate state updates for smooth color transitions
      if (currentScrollY < heroEnd) {
        setIsDark(true);
      } else if (currentScrollY >= heroEnd && currentScrollY < whatWeDoEnd) {
        setIsDark(false);
      } else if (currentScrollY >= whatWeDoEnd && currentScrollY < whyChooseUsEnd) {
        setIsDark(false);
      } else {
        setIsDark(true);
      }
    };

    // Update on every scroll for smooth transitions
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsHovering(false);
  }, [pathname]);

  const menuItems = [
    { label: 'Home', path: '/', description: 'Welcome to Growth SuperCharged' },
    { label: 'About', path: '/about', description: 'Learn about our story and mission' },
    { label: 'Services', path: '/services', description: 'Explore our comprehensive solutions' },
    { label: 'Team', path: '/team', description: 'Meet our expert team members' },
    { label: 'Contact', path: '/contact', description: 'Get in touch with us' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg shadow-lg shadow-emerald-500/10`}
        style={{
          backgroundColor: isDark 
            ? 'rgba(10, 22, 40, 0.8)' 
            : 'rgba(255, 255, 255, 0.7)',
          transition: 'background-color 0.3s ease-in-out'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div 
                className="w-10 h-10 rounded-md flex items-center justify-center font-bold text-sm text-white shadow-lg"
                style={{ 
                  backgroundColor: isDark ? '#10B981' : '#0F172A',
                  transition: 'background-color 0.3s ease-in-out'
                }}
              >
                GSC
              </div>
              <span
                className="text-sm md:text-base tracking-[0.2em] uppercase font-normal"
                style={{ 
                  fontFamily: "'Azonix', sans-serif",
                  color: isDark ? '#FFFFFF' : '#0F172A',
                  transition: 'color 0.3s ease-in-out'
                }}
              >
                Growth SuperCharged
              </span>
            </motion.div>
          </Link>

          {/* Desktop - Hover trigger area */}
          <div className="hidden md:block">
            <button
              className="px-6 py-2.5 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors duration-300 shadow-lg shadow-emerald-500/50"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden px-6 py-2.5 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors duration-300 shadow-lg shadow-emerald-500/50"
          >
            Get in Touch
          </button>
        </nav>

        {/* Dropdown Menu on Hover - Desktop */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="hidden md:block overflow-hidden backdrop-blur-lg border-t border-emerald-500/20"
              style={{
                backgroundColor: isDark 
                  ? 'rgba(10, 22, 40, 0.95)' 
                  : 'rgba(255, 255, 255, 0.95)',
                transition: 'background-color 0.3s ease-in-out'
              }}
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
                <div className="grid grid-cols-1 gap-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link href={item.path} className="block group">
                        <div className="flex items-center justify-between p-4 rounded-lg hover:bg-emerald-500/10 transition-all duration-300">
                          <div>
                            <h3
                              className="text-3xl md:text-4xl font-bold transition-colors duration-300 mb-1 group-hover:text-emerald-400"
                              style={{ 
                                fontFamily: "'Azonix', sans-serif",
                                color: isDark ? '#FFFFFF' : '#0F172A',
                                transition: 'color 0.3s ease-in-out'
                              }}
                            >
                              {item.label}
                            </h3>
                            <p 
                              className="text-sm"
                              style={{ 
                                color: isDark ? '#9CA3AF' : '#6B7280',
                                transition: 'color 0.3s ease-in-out'
                              }}
                            >
                              {item.description}
                            </p>
                          </div>
                          <motion.div
                            className="text-emerald-400 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#0a1628] md:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 h-full flex flex-col">
              <div className="h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-md flex items-center justify-center font-bold text-sm text-white">
                    GSC
                  </div>
                  <span
                    className="text-sm tracking-[0.2em] uppercase font-normal text-white"
                    style={{ fontFamily: "'Azonix', sans-serif" }}
                  >
                    Growth SuperCharged
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <nav className="w-full">
                  <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={item.label}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                      >
                        <Link
                          href={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block p-4 rounded-lg hover:bg-emerald-500/10 transition-all duration-300 group"
                        >
                          <h3
                            className="text-3xl md:text-4xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-2 uppercase tracking-wider"
                            style={{ fontFamily: "'Azonix', sans-serif" }}
                          >
                            {item.label}
                          </h3>
                          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {item.description}
                          </p>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pb-8 text-sm text-gray-400"
              >
                <p className="italic">Own The Edge</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

//                 }}
//               >
//                 Chat with Manu →
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }
