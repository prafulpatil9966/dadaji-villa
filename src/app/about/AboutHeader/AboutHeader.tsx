'use client';

import { motion } from 'framer-motion';
import './AboutHeader.scss'

export default function AboutHeader() {
  return (
    <div
      className="relative bg-center bg-cover bg-fixed py-24 md:py-40 px-4"
      style={{ backgroundImage: "url('/img/slider/1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <div className="text-left mt-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-white text-4xl md:text-5xl font-bold"
          >
            About Us
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
