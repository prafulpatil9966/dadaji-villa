'use client';

import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import MenuTabs from "../components/MenuTabs/MenuTabs"
import useDevicePlatform from '@/hooks/useDevicePlatform';


const menu = () => {
    const [isMobileView, setIsMobileView] = useState(false);
    const { isIOS } = useDevicePlatform();

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
        <div className="bg-[#f5eee7] text-black overflow-hidden">
            <div
                className="relative h-[60vh] bg-cover bg-fixed flex items-center justify-center"
                style={{
                    backgroundImage: "url('/common/menu-header-img.jpg')", // replace with your actual image
                    backgroundPosition: isMobileView ? "30% 0%" : "center 150%",
                    backgroundAttachment: isIOS ? 'scroll' : 'fixed',
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white z-10 text-4xl md:text-5xl font-bold Outfit-700"
                >
                    Our Menu
                </motion.h2>
            </div>

            {/* MenuTabs is your actual menu component */}
            <MenuTabs />
        </div>

    )
}

export default menu