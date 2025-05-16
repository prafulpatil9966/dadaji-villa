'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './HeroSection.scss'
import HeroButton from '../../global-ui/HeroButton/HeroButton';

const HeroSection = () => {
    const [isClient, setIsClient] = useState(false);


    useEffect(() => setIsClient(true), []);
    const videoRef = useRef<HTMLVideoElement>(null);
    console.log(videoRef);
    const scrollToSectionWithOffset = (id: string, offset = 90) => {
        const element = document.getElementById(id);
        if (!element) return;

        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    };



    return (
        <header className="hero-section-container relative w-full h-screen overflow-hidden">
            {/* Video background */}
            <div className="absolute inset-0 -z-10">
                <video
                    ref={videoRef}
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
                    className="text-white max-w-3xl"
                >
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-2 Outfit-700">
                        A Unique Mountain Villa
                    </h2>
                    <h4 className="text-lg md:text-xl font-light Outfit-300">
                        Nestled in Nature, Designed for Rest - Explore Three Stays, One Soulful Journey.
                    </h4>
                    <HeroButton
                        onClick={(e) => {
                            e.preventDefault();  // Prevent default anchor jump
                            scrollToSectionWithOffset('rooms', 90);
                        }}
                        href="">Rooms & Villa</HeroButton>
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
