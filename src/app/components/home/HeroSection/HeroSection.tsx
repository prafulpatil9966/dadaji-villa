'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeroSection = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => setIsClient(true), []);

    return (
        <header className="relative w-full h-screen overflow-hidden">
            {/* Video background */}
            <div className="absolute inset-0 -z-10">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src="https://duruthemes.com/demo/html/cappa/mountain.mp4"
                        type="video/mp4"
                    />
                    <source
                        src="https://duruthemes.com/demo/html/cappa/mountain.webm"
                        type="video/webm"
                    />
                </video>

                {/* Dark overlay (similar to data-overlay-dark="6") */}
                <div className="absolute inset-0 bg-black opacity-60" />
            </div>

            {/* Caption text */}
            <div className="flex items-center justify-center h-full text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-white max-w-2xl"
                >
                    <h4 className="text-lg md:text-xl font-light mb-2">
                        Unparalleled Beauty
                    </h4>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        A Unique Mountain Villa
                    </h1>
                    <div className="mt-6">
                        <a
                            href="#rooms"
                            className="inline-block bg-white text-black py-2 px-6 rounded-full font-medium hover:bg-gray-300 transition"
                        >
                            Rooms & Villa
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll-down arrow */}
            {isClient && (
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-6 w-full flex justify-center"
                >
                    <a href="#about" className="text-white text-2xl">
                        ↓
                    </a>
                </motion.div>
            )}
        </header>
    );
};

export default HeroSection;
