'use client';

import { motion } from 'framer-motion';
import './AboutHeader.scss'
import { useEffect, useState } from 'react';

export default function AboutHeader() {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');
        const handleResize = () => setIsMobileView(mediaQuery.matches);
        handleResize(); // set initial
        mediaQuery.addEventListener('change', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);
    return (
        <div
            className="relative h-[60vh] bg-cover bg-fixed flex items-center justify-center "
            style={{
                backgroundImage: "url('/about-header.jpg')",
                backgroundPosition: isMobileView ? "9% 0%" : "center 50%",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40" />

            {/* Content */}
            <div className="relative z-10 container mx-auto">
                <div className="text-left mt-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-white text-4xl md:text-5xl font-bold"
                    >
                        About Us
                    </motion.h2>
                </div>
            </div>
        </div>
    );
}
