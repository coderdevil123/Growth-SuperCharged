"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Adjust these values based on your section heights
      const heroEnd = 800;
      const whatWeDoEnd = 1600;
      const whyChooseUsEnd = 2400;

      if (currentScrollY < heroEnd) {
        setIsDark(true); // Hero is dark
      } else if (currentScrollY >= heroEnd && currentScrollY < whatWeDoEnd) {
        setIsDark(false); // WhatWeDo is light
      } else if (currentScrollY >= whatWeDoEnd && currentScrollY < whyChooseUsEnd) {
        setIsDark(false); // WhyChooseUs is light
      } else {
        setIsDark(true); // CTA section is dark
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrollY > 50 
          ? (isDark ? "rgba(15, 23, 42, 0.9)" : "rgba(255, 255, 255, 0.9)")
          : "transparent",
        backdropFilter: scrollY > 50 ? "blur(10px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Left Side */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div
              className="w-8 h-8 rounded-md flex items-center justify-center font-bold text-sm transition-all"
              style={{
                backgroundColor: isDark ? "#10B981" : "#0F172A",
                color: "#FFFFFF",
              }}
            >
              GS
            </div>
            <span
              className="font-semibold text-lg"
              style={{ color: isDark ? "#FFFFFF" : "#0F172A" }}
            >
              Growth SuperCharged
            </span>
          </motion.div>
        </Link>

        {/* Center Menu - Desktop */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-sm font-medium transition-colors"
              style={{ color: isDark ? "#FFFFFF" : "#374151" }}
            >
              Home
            </motion.span>
          </Link>
          <Link href="/about">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-sm font-medium transition-colors"
              style={{ color: isDark ? "#FFFFFF" : "#374151" }}
            >
              About
            </motion.span>
          </Link>
          <Link href="/services">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-sm font-medium transition-colors"
              style={{ color: isDark ? "#FFFFFF" : "#374151" }}
            >
              Services
            </motion.span>
          </Link>
          <Link href="/team">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-sm font-medium transition-colors"
              style={{ color: isDark ? "#FFFFFF" : "#374151" }}
            >
              Team
            </motion.span>
          </Link>
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-sm font-medium transition-colors"
              style={{ color: isDark ? "#FFFFFF" : "#374151" }}
            >
              Contact
            </motion.span>
          </Link>
        </div>

        {/* Right Side CTA - Desktop */}
        <div className="hidden md:flex">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full text-sm font-medium shadow-sm transition-all"
              style={{
                backgroundColor: "#10B981",
                color: "#FFFFFF",
              }}
            >
              Get in touch
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          style={{
            color: isDark ? "#FFFFFF" : "#0F172A",
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
            style={{
              backgroundColor: isDark ? "#0F172A" : "#FFFFFF",
            }}
          >
            <div className="px-6 pt-2 pb-4 space-y-3">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <div
                  className="block py-2 font-medium"
                  style={{ color: isDark ? "#FFFFFF" : "#374151" }}
                >
                  Home
                </div>
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                <div
                  className="block py-2 font-medium"
                  style={{ color: isDark ? "#FFFFFF" : "#374151" }}
                >
                  About
                </div>
              </Link>
              <Link href="/services" onClick={() => setIsOpen(false)}>
                <div
                  className="block py-2 font-medium"
                  style={{ color: isDark ? "#FFFFFF" : "#374151" }}
                >
                  Services
                </div>
              </Link>
              <Link href="/team" onClick={() => setIsOpen(false)}>
                <div
                  className="block py-2 font-medium"
                  style={{ color: isDark ? "#FFFFFF" : "#374151" }}
                >
                  Team
                </div>
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <div
                  className="block py-2 font-medium"
                  style={{ color: isDark ? "#FFFFFF" : "#374151" }}
                >
                  Contact
                </div>
              </Link>
              <button
                className="w-full px-5 py-2 rounded-full text-sm font-medium shadow-sm mt-4"
                onClick={() => setIsOpen(false)}
                style={{
                  backgroundColor: "#10B981",
                  color: "#FFFFFF",
                }}
              >
                Get in touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
//               <button
//                 className="w-full px-5 py-2 rounded-full text-sm font-medium shadow-sm mt-4"
//                 onClick={() => setIsOpen(false)}
//                 style={{
//                   backgroundColor: "#000000",
//                   color: "#FFFFFF",
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
