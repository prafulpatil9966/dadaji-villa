'use client';

import './footer.scss'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#14100c] text-white font-outfit">
      {/* Top Section */}
      <div className="py-16 border-b border-white/10">
        <div className="container px-5 md:px-0 mx-auto grid md:grid-cols-3 gap-6">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">About Hotel</h3>
            <p className="text-sm text-white/80 mb-4">
              Two Unique Stays, One Peaceful Escape — Discover Comfort, Nature, and Togetherness in Each Villa.
              Let me know if you'd prefer family-friendly or nature-centric tone!
            </p>
            {/* <div className="mt-4">
              <select
                onChange={(e) => (window.location.href = e.target.value)}
                className="bg-transparent border border-white/30 rounded px-3 py-2 text-sm"
              >
                <option value="http://duruthemes.com/">English</option>
                <option value="http://duruthemes.com/">German</option>
              </select>
            </div> */}
          </motion.div>

          {/* Explore Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="ml-[5px] text-xl font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
                { name: 'FAQ', href: '/faq' },
              ].map((link) => (
                <li key={link.href} className="group flex items-center transition-all cursor-pointer w-max">
                  <span className="footer-hover-span text-[#91765a] opacity-0 group-hover:opacity-100 transition duration-300"></span>
                  <Link
                    href={link.href}
                    className="transition group-hover:translate-x-2 group-hover:text-[#91765a] duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-sm text-white/80 mb-4">
              Panchgani, Mahabaleshwar, Maharashtra.<br />
              Pincode - 412805/06
            </p>
            <p className="text-sm text-white/80">Phone: 7045228951</p>
            <p className="text-sm text-white/80">Email: dadajivilla@gmail.com</p>
            <div className="flex items-center space-x-4 mt-4 text-lg">
              <a href="https://www.instagram.com/dadajivilla/"
                target="_blank"
                rel="noopener noreferrer"><FaInstagram className="hover:text-[#91765a] transition" />
              </a>
              <a href="https://x.com/dadajivilla"
                target="_blank"
                rel="noopener noreferrer"><FaXTwitter className="hover:text-[#91765a] transition" />
              </a>
              <a href="https://www.facebook.com/dadajivilla"
                target="_blank"
                rel="noopener noreferrer"><FaFacebookF className="hover:text-[#91765a] transition" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
