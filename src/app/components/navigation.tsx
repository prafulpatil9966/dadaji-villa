'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'Restaurant', href: '/restaurant' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#14100c] shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center h-[90px] border-b border-white/10">
        <Link href="/" className="block">
          <img
            src="/nav-logonew.png"
            alt="Logo"
            // width={0}
            // height={0}
            sizes="(max-width: 640px) 70px, (max-width: 768px) 100px, 120px"
            className="w-[120px] md:w-[100px] sm:w-[70px] h-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white uppercase text-xs font-bold font-outfit tracking-wide">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className={`hover:text-[#91765a] ${
                  pathname === link.href ? 'text-[#91765a]' : ''
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#14100c] p-4">
          <ul className="space-y-4 text-white uppercase text-sm font-bold font-outfit tracking-wide">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                  className={`block hover:text-[#91765a] ${
                    pathname === link.href ? 'text-[#91765a]' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
