'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hotelDropdownOpen, setHotelDropdownOpen] = useState(false);
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
    { label: 'Contact', href: '/contact' },
    { label: 'menu', href: '/menu' },
    {
      label: 'Hotels',
      href: '#',
      children: [
        { label: 'Dadaji Villa', href: '/dadaji-villa' },
        { label: 'Dadaji Cottage', href: '/dadaji-cottage' },
        { label: 'Citrine', href: '/citrine' },
      ],
    },
  ];
  const menuVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#14100c] shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="container px-5 md:px-0 mx-auto py-4 flex justify-between items-center h-[80px] md:h-[90px] lg:h-[90px] border-b border-white/10">
        <Link href="/" className="block">
          <img
            src="/nav-logonew.png"
            alt="Logo"
            // width={0}  
            // height={0}
            sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 120px"
            className="w-[70px] sm:w-[80px] md:w-[100px] lg:w-[120px] h-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:hidden lg:flex space-x-6 text-white uppercase text-xs font-bold font-outfit tracking-wide relative items-center">
          {navLinks.map((link, i) => (
            <li key={i} className="relative group">
              <Link
                href={link.href}
                className={`flex items-center hover:text-[#91765a] ${pathname === link.href ? 'text-[#91765a]' : ''}`}
              >
                <span> {link.label} </span> {link?.label === "Hotels" && <span> <RiArrowDropDownLine className="w-5 h-5" /> </span>}
              </Link>

              {link.children && (
                <ul className="absolute p-2 mt-1 left-0 bg-[#1a1713] shadow-lg rounded-md hidden group-hover:block min-w-[200px] z-50">
                  {link.children.map((sublink, j) => (
                    <li key={j}>
                      <Link
                        href={sublink.href}
                        className="block px-4 py-2 text-xs text-white hover:text-[#91765a]"
                      >
                        {sublink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>


        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu />
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#14100c] p-4"
          >
            <ul className="space-y-4 text-white uppercase text-sm font-bold font-outfit tracking-wide">
              {navLinks.map((link, i) => (
                <li key={i}>
                  {link.children ? (
                    <div>
                      {/* Toggle button for Hotels */}
                      <button
                        className="flex items-center justify-between w-full text-left text-white font-bold uppercase"
                        onClick={() => setHotelDropdownOpen(prev => !prev)}
                      >
                        {link.label}
                        <RiArrowDropDownLine className={`w-6 h-6 transition-transform duration-200 ${hotelDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Submenu */}
                      {hotelDropdownOpen && (
                        <ul className="pl-4 mt-2 space-y-2 ">
                          {link.children.map((child, j) => (
                            <li key={j}>
                              <Link
                                href={child.href}
                                onClick={() => setMenuOpen(false)}
                                className={`block hover:text-[#91765a] ${pathname === child.href ? 'text-[#91765a]' : ''}`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block hover:text-[#91765a] ${pathname === link.href ? 'text-[#91765a]' : ''}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}

            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;
