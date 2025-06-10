'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import GallerySection from '../components/global-ui/GallerySection/GallerySection';

const DadajiCottage = () => {
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

    const images = [
        { src: "/dadaji-cottage/dadaji-cottage-img-1.jpg", cols: "30%" },
        { src: "/dadaji-cottage/dadaji-cottage-img-4.jpg", cols: "30%" },
        { src: "/dadaji-cottage/dadaji-cottage-img-5.jpg", cols: "30%" },
        { src: "/dadaji-cottage/dadaji-cottage-img-2.jpg", cols: "50%" },
        { src: "/dadaji-cottage/dadaji-cottage-img-3.jpg", cols: "50%" },
        { src: "/dadaji-cottage/dadaji-cottage-img-6.jpg", cols: "30%" },
        { src: "/dadaji-cottage/dadaji-cottage-img-7.jpg", cols: "30%" },
        { src: "/dadaji-cottage/dadaji-cottage-img-8.jpg", cols: "30%" },
        { src: "/dadaji-cottage/dadaji-cottage-img-9.jpg", cols: "50%" },
        { src: "/dadaji-cottage/dadaji-cottage-img-10.jpg", cols: "50%" },
        { src: "/dadaji-cottage/dadaji-cottage-img-11.jpg", cols: "30%" },
        { src: "/dadaji-cottage/dadaji-cottage-img-12.jpg", cols: "30%" },
        { src: "/dadaji-cottage/dadaji-cottage-img-13.jpg", cols: "30%" },
        { src: "/dadaji-cottage/dadaji-cottage-img-14.jpg", cols: "50%" },
    ];

    return (
        <div className="bg-[#f5eee7] text-black overflow-hidden">
            <div
                className="relative h-[60vh] bg-cover bg-fixed flex items-center justify-center"
                style={{
                    backgroundImage: "url('/about-header.jpg')",
                    backgroundPosition: isMobileView ? "9% 0%" : "center 20%",
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white z-10 text-4xl md:text-5xl font-bold Outfit-700"
                >
                    Dadaji Cottage
                </motion.h2>
            </div>
            <GallerySection images={images} />
        </div>

    )
}

export default DadajiCottage