'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './HeroSection.scss'
import HeroButton from '../../global-ui/HeroButton/HeroButton';
import { TiArrowDown } from "react-icons/ti";

const HeroSection = () => {
    const [isClient, setIsClient] = useState(false);


    useEffect(() => setIsClient(true), []);
    const videoRef = useRef<HTMLVideoElement>(null);
    console.log(videoRef);
    const scrollToSectionWithOffset = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;

        const isMobile = window.innerWidth < 768; // Tailwind's md breakpoint
        const offset = isMobile ? 70 : 90;

        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    };



    return (
        <header className="hero-section-container px-5 md:px-0 relative w-full h-screen overflow-hidden">
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
                    <h4 className="text-md py-2 md:text-xl font-light Outfit-300">
                        Nestled in nature, designed for rest — explore three stays, one soulful journey.
                    </h4>
                    <HeroButton
                        onClick={(e) => {
                            e.preventDefault();  // Prevent default anchor jump
                            scrollToSectionWithOffset('rooms');

                        }}
                        href="">Rooms & Villa</HeroButton>
                </motion.div>
            </div>

            {/* Scroll-down arrow */}
            {isClient && (
                <div className="absolute bottom-10 w-full text-center z-10">
                    <motion.a
                        href="#about"
                        data-scroll-nav="1"
                        initial={{ y: 0 }}
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="hidden md:flex items-center m-auto w-12 h-12 leading-[50px] text-white text-lg border border-white/50 rounded-full hover:border-white relative"
                    >
                        <TiArrowDown className="mx-auto text-white text-xl" />
                    </motion.a>

                </div>

            )}
        </header>
    );
};

export default HeroSection;
