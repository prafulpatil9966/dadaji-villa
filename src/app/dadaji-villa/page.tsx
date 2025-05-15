'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import GallerySection from './GallerySection/GallerySection';

const page = () => {
    const [isMobileView, setIsMobileView] = useState(false);

    return (
        <div className="bg-[#f5eee7] text-black overflow-hidden">
            <div
                className="relative h-[60vh] bg-cover bg-fixed flex items-center justify-center"
                style={{
                    backgroundImage: "url('/contact-header.jpg')",
                    backgroundPosition: isMobileView ? "9% 0%" : "center 20%",
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white z-10 text-4xl md:text-5xl font-bold Outfit-700"
                >
                    Dadaji Villa
                </motion.h1>
            </div>
            <GallerySection/>
        </div>

    )
}

export default page