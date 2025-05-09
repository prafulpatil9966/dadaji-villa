'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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
        <Image
            src="/logo-nav.png"
            alt="Logo"
            width={0} // override default width
            height={0} // override default height
            sizes="(max-width: 640px) 70px, (max-width: 768px) 100px, 120px"
            className="w-[120px] md:w-[100px] sm:w-[70px] h-auto"
        />
        </Link>

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
      </div>
    </motion.nav>
  );
};

export default Navbar;
