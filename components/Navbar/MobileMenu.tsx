import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface MobileMenuProps {
  onClose: () => void;
  isDark: boolean;
}

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' }
];

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose, isDark }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <motion.div
      id="mobile-menu"
      className="fixed inset-0 z-40 md:hidden"
      style={{ backgroundColor: isDark ? '#0F172A' : '#FFFFFF' }}
      initial={{ opacity: 0, y: '-10%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-10%' }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="flex flex-col items-center justify-center h-full px-4 pt-24 pb-8">
        <nav className="w-full max-w-sm">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block text-xl font-medium hover:text-emerald-400 transition-colors duration-200 ease-in text-center py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded cursor-pointer"
                  style={{ color: isDark ? '#FFFFFF' : '#374151' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="bg-emerald-500 text-white hover:bg-emerald-600 rounded-full px-8 h-12 font-medium text-base transition-all duration-250 ease-in-out hover:scale-105 focus-visible:ring-2 focus-visible:ring-emerald-400 shadow-lg inline-flex items-center justify-center"
            >
              Get in touch
            </Link>
          </div>
        </nav>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
