'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import GallerySection from '../components/global-ui/GallerySection/GallerySection';
import useDevicePlatform from '@/hooks/useDevicePlatform';

const DadajiVilla = () => {
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
        { src: "/dadaji-gallery/dadaji-gallery-img-1.jpg", cols: "32%" },
        { src: "/dadaji-gallery/dadaji-gallery-img-4.jpg", cols: "32%" },
        { src: "/dadaji-gallery/dadaji-gallery-img-5.jpg", cols: "32%" },
        { src: "/dadaji-gallery/dadaji-gallery-img-2.jpg", cols: "49%" },
        { src: "/dadaji-gallery/dadaji-gallery-img-3.jpg", cols: "49%" },
        { src: "/dadaji-gallery/dadaji-gallery-img-6.jpg", cols: "32%" },
        { src: "/dadaji-gallery/dadaji-gallery-img-7.jpg", cols: "32%" },
        { src: "/dadaji-gallery/dadaji-gallery-img-8.jpg", cols: "32%" },
        { src: "/dadaji-gallery/dadaji-gallery-img-9.jpg", cols: "49%" },
        { src: "/dadaji-gallery/dadaji-gallery-img-10.jpg", cols: "49%" },
        { src: "/dadaji-gallery/dadaji-gallery-img-11.jpg", cols: "32%" },
        { src: "/dadaji-gallery/dadaji-gallery-img-12.jpg", cols: "32%" },
        { src: "/dadaji-gallery/dadaji-gallery-img-13.jpg", cols: "32%" },
        { src: "/dadaji-gallery/dadaji-gallery-img-14.jpg", cols: "49%" },
    ];
    const facilities = [
        { id: 1, name: "Free Wifi" },
        { id: 2, name: "Secured parking inside the property" },
        { id: 3, name: "Inverter backup for power loss" },
        { id: 4, name: "LED television with Tata Sky connection" },
        { id: 5, name: "24 hours hot water" },
        { id: 6, name: "Refrigerator / Water Purifier" },
        { id: 7, name: "CCTV surveillance for security" },
        { id: 8, name: "Barbeque" },
        { id: 9, name: "Bonfire" }
    ];


    return (
        <div className="bg-[#f5eee7] text-black overflow-hidden">
            <div
                className="relative h-[60vh] bg-cover bg-fixed flex items-center justify-center"
                style={{
                    backgroundImage: "url('/contact-header.jpg')",
                    backgroundPosition: isMobileView ? "9% 0%" : "center 20%",
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
                    Dadaji Villa
                </motion.h2>
            </div>
            <GallerySection images={images} facilities={facilities} />
        </div>

    )
}

export default DadajiVilla