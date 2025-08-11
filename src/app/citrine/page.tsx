'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useDevicePlatform from '@/hooks/useDevicePlatform';
import GallerySection from '../components/global-ui/GallerySection/GallerySection';

const Citrine = () => {
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

    const images = [
        { src: "/citrine/citrine-img-1.jpg", cols: "30%" },
        { src: "/citrine/citrine-img-4.jpg", cols: "30%" },
        { src: "/citrine/citrine-img-5.jpg", cols: "30%" },
        { src: "/citrine/citrine-img-2.jpg", cols: "50%" },
        { src: "/citrine/citrine-img-3.jpg", cols: "50%" },
        { src: "/citrine/citrine-img-6.jpg", cols: "30%" },
        { src: "/citrine/citrine-img-7.jpg", cols: "30%" },
        { src: "/citrine/citrine-img-8.jpg", cols: "30%" },
        { src: "/citrine/citrine-img-9.jpg", cols: "50%" },
    ];

    return (
        <div className="bg-[#f5eee7] text-black overflow-hidden">
            <div
                className="relative h-[60vh] bg-cover bg-fixed flex items-center justify-center"
                style={{
                    backgroundImage: "url('/citrine/citrine-img-2.jpg')",
                    backgroundPosition: isMobileView ? "9% 0%" : "center 70%",
                    backgroundAttachment: isIOS ? 'scroll' : 'fixed',
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="relative text-white z-10 text-4xl md:text-5xl font-bold Outfit-700"
                >
                    Citrine
                </motion.h2>
            </div>
            {/* <GallerySection images={images} /> */}
        </div>

    )
}

export default Citrine;