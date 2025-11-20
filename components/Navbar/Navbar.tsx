"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import Logo from './Logo';
import NavLinksWithDropdown from './NavLinksWithDropdown';
import CtaButton from './CtaButton';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Adjust section detection
      const heroEnd = 800;
      const whatWeDoEnd = 1600;
      const whyChooseUsEnd = 2400;

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md' : ''
        }`}
        style={{
          backgroundColor: isDark ? 'rgba(15, 23, 42, 0.95)' : 'transparent'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo isDark={isDark} />

          <div className="hidden md:flex items-center justify-center flex-1">
            <NavLinksWithDropdown isDark={isDark} />
          </div>

          <div className="hidden md:block">
            <CtaButton />
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
            style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-6 h-6" strokeWidth={2} />
            ) : (
              <MenuIcon className="w-6 h-6" strokeWidth={2} />
            )}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} isDark={isDark} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
//           <Link href="/services">
//             <motion.span
//               whileHover={{ scale: 1.05 }}
//               className="text-sm font-medium transition-colors"
//               style={{ color: isDark ? "#FFFFFF" : "#374151" }}
//             >
//               Services
//             </motion.span>
//           </Link>
//           <Link href="/team">
//             <motion.span
//               whileHover={{ scale: 1.05 }}
//               className="text-sm font-medium transition-colors"
//               style={{ color: isDark ? "#FFFFFF" : "#374151" }}
//             >
//               Team
//             </motion.span>
//           </Link>
//           <Link href="/contact">
//             <motion.span
//               whileHover={{ scale: 1.05 }}
//               className="text-sm font-medium transition-colors"
//               style={{ color: isDark ? "#FFFFFF" : "#374151" }}
//             >
//               Contact
//             </motion.span>
//           </Link>
//         </div>

//         {/* Right Side CTA - Desktop */}
//         <div className="hidden md:flex">
//           <Link href="/contact">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-5 py-2 rounded-full text-sm font-medium shadow-sm transition-all"
//               style={{
//                 backgroundColor: "#10B981",
//                 color: "#FFFFFF",
//               }}
//             >
//               Get in touch
//             </motion.button>
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden"
//           style={{
//             color: isDark ? "#FFFFFF" : "#0F172A",
//           }}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden"
//             style={{
//               backgroundColor: isDark ? "#0F172A" : "#FFFFFF",
//             }}
//           >
//             <div className="px-6 pt-2 pb-4 space-y-3">
//               <Link href="/" onClick={() => setIsOpen(false)}>
//                 <div
//                   className="block py-2 font-medium"
//                   style={{ color: isDark ? "#FFFFFF" : "#374151" }}
//                 >
//                   Home
//                 </div>
//               </Link>
//               <Link href="/about" onClick={() => setIsOpen(false)}>
//                 <div
//                   className="block py-2 font-medium"
//                   style={{ color: isDark ? "#FFFFFF" : "#374151" }}
//                 >
//                   About
//                 </div>
//               </Link>
//               <Link href="/services" onClick={() => setIsOpen(false)}>
//                 <div
//                   className="block py-2 font-medium"
//                   style={{ color: isDark ? "#FFFFFF" : "#374151" }}
//                 >
//                   Services
//                 </div>
//               </Link>
//               <Link href="/team" onClick={() => setIsOpen(false)}>
//                 <div
//                   className="block py-2 font-medium"
//                   style={{ color: isDark ? "#FFFFFF" : "#374151" }}
//                 >
//                   Team
//                 </div>
//               </Link>
//               <Link href="/contact" onClick={() => setIsOpen(false)}>
//                 <div
//                   className="block py-2 font-medium"
//                   style={{ color: isDark ? "#FFFFFF" : "#374151" }}
//                 >
//                   Contact
//                 </div>
//               </Link>
//               <button
//                 className="w-full px-5 py-2 rounded-full text-sm font-medium shadow-sm mt-4"
//                 onClick={() => setIsOpen(false)}
//                 style={{
//                   backgroundColor: "#10B981",
//                   color: "#FFFFFF",
//                 }}
//               >
//                 Get in touch
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
