import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface LogoProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark }) => {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
      aria-label="Go to homepage"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-10 h-10 rounded-md flex items-center justify-center font-bold text-xs shadow-lg transition-all"
        style={{
          backgroundColor: isDark ? '#10B981' : '#0F172A',
          color: '#FFFFFF'
        }}
      >
        GSC
      </motion.div>
      <motion.span
        whileHover={{ scale: 1.02 }}
        className="text-sm tracking-[0.2em] uppercase font-normal hidden lg:block group-hover:text-emerald-400 transition-colors duration-200"
        style={{
          fontFamily: "'Azonix', sans-serif",
          color: isDark ? '#FFFFFF' : '#0F172A'
        }}
      >
        Growth SuperCharged
      </motion.span>
    </Link>
  );
};

export default Logo;
