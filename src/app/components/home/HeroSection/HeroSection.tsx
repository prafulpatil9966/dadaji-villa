'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './HeroSection.scss'
import HeroButton from '../../global-ui/HeroButton/HeroButton';
import { TiArrowDown } from "react-icons/ti";
import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6'; // Import icons
import { FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
    const [isClient, setIsClient] = useState(false);


    useEffect(() => setIsClient(true), []);
    const videoRef = useRef<HTMLVideoElement>(null);
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
                        src="/Video/herobanner-video-new.mp4"
                        type="video/mp4"
                    />
                    <source
                        src="/Video/herobanner-video-new.mp4"
                        type="video/webm"
                    />
                </video>
                {/* <img src="/common/hero-img.jpg" className='w-full h-full object-cover' /> */}
                {/* Dark overlay (similar to data-overlay-dark="6") */}
                <div className="absolute inset-0 bg-black opacity-70" />
            </div>

            {/* Caption text */}
            <div className="flex items-center justify-center h-full text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-white max-w-4xl"
                >
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-2 Outfit-700">
                        A Unique Mountain Vacation Home
                    </h2>
                    <h4 className="text-md py-2 md:text-xl font-light Outfit-300">
                        Nestled in nature, designed for rest — explore two stays, one soulful journey.
                    </h4>
                    <HeroButton className='Outfit-500'
                        onClick={(e) => {
                            e.preventDefault();  // Prevent default anchor jump
                            scrollToSectionWithOffset('rooms');

                        }}
                        href="">Villa & Cottage</HeroButton>
                </motion.div>
            </div>

            {/* Scroll-down arrow (Desktop only - can be shown on mobile but placed centrally) */}
            {isClient && (
                <div className="absolute bottom-10 w-full text-center z-10">
                    <motion.a
                        href="#about"
                        data-scroll-nav="1"
                        initial={{ y: 0 }}
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        // Changed from hidden md:flex to just flex to show on mobile (but still centered)
                        className="flex items-center m-auto w-12 h-12 leading-[50px] text-white text-lg border border-white/50 rounded-full hover:border-white relative"
                    >
                        <TiArrowDown className="mx-auto text-white text-xl" />
                    </motion.a>
                </div>
            )}

            {/* Follow Us section - Updated for both mobile and desktop visibility */}
            <div className="absolute bottom-10 right-5 md:right-10 text-left z-10 text-white">
                <div className="mt-10">
                    {/* Adjusted mb-2 for mobile to be slightly less space */}
                    <h3 className="hidden md:block text-xl md:text-2xl mb-2 Outfit-700">Reach Out to Us</h3>
                    <div className="mt-2 flex space-x-3 items-center">
                        <a
                            href="https://wa.me/917045228951?text=Hi%20Dadaji%20Villa%2C%20I%20would%20like%20to%20know%20more%20about%20booking."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-xl md:text-xl hover:text-[#91765a] transition-colors"
                        >
                            <FaWhatsapp />
                        </a>
                        <a
                            href="https://www.instagram.com/dadajivilla/"
                            target="_blank"
                            rel="noopener noreferrer"
                            // Using text-white for initial visibility on the dark background
                            className="text-white text-xl md:text-xl hover:text-[#91765a] transition-colors"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.facebook.com/dadajivilla"
                            target="_blank"
                            rel="noopener noreferrer"
                            // Using text-white for initial visibility on the dark background
                            className="text-white text-xl md:text-xl hover:text-[#91765a] transition-colors"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://x.com/dadajivilla"
                            target="_blank"
                            rel="noopener noreferrer"
                            // Using text-white for initial visibility on the dark background
                            className="text-white text-xl md:text-xl hover:text-[#91765a] transition-colors"
                        >
                            <FaXTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;