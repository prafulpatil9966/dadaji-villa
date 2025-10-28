'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useDevicePlatform from '@/hooks/useDevicePlatform';
import Link from 'next/link';

export default function NotFound() {
  const [isMobileView, setIsMobileView] = useState(false);
  const { isIOS } = useDevicePlatform();
  const router = useRouter();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleResize = () => setIsMobileView(mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  // Auto redirect to homepage after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="bg-[#f5eee7] text-black overflow-hidden">
      <div
        className="relative h-[60vh] bg-cover bg-fixed flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage: "url('/about-header.jpg')",
          backgroundPosition: isMobileView ? '9% 0%' : 'center 20%',
          backgroundAttachment: isIOS ? 'scroll' : 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white z-10 text-3xl md:text-4xl font-bold Outfit-700 mb-4"
        >
          404 - Page Not Found
        </motion.h2>

        <p className="relative z-10 text-white mb-6">
          Redirecting you to the homepage...
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative z-10"
        >
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
          >
            Go Back Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
