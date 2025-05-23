'use client';

import './footer.scss'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF, FaPinterest } from 'react-icons/fa';

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
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">About Hotel</h3>
            <p className="text-sm text-white/80 mb-4">
              Three Unique Stays, One Peaceful Escape — Discover Comfort, Nature, and Togetherness in Every Villa.
              Let me know if you'd prefer a more luxurious, family-friendly, or nature-centric tone!
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
            viewport={{ once: true }}
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
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-sm text-white/80 mb-4">
              Panchgani, Mahabaleshwar, Maharashtra.<br />
              Pincode - 412805/06
            </p>
            <p className="text-sm text-white/80">Phone: 7045228951</p>
            <p className="text-sm text-white/80">Email: dadajivilla@gmail.com</p>
            <div className="flex items-center space-x-4 mt-4 text-lg">
              <a href="#"><FaInstagram className="hover:text-[#91765a] transition" /></a>
              <a href="#"><FaTwitter className="hover:text-[#91765a] transition" /></a>
              <a href="#"><FaYoutube className="hover:text-[#91765a] transition" /></a>
              <a href="#"><FaFacebookF className="hover:text-[#91765a] transition" /></a>
              <a href="#"><FaPinterest className="hover:text-[#91765a] transition" /></a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section */}
      {/* <div className="bg-[#0e0c09] py-6">
        <div className="container px-5 md:px-0 mx-auto text-center text-sm text-white/60">
          © {new Date().getFullYear()} by <a href="#" className="hover:text-[#91765a]">DuruThemes.com</a>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
