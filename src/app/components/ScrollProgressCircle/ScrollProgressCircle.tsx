'use client';

import { useScroll, useSpring, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { IoIosArrowUp   } from 'react-icons/io'; // Import icon
import './ScrollProgressCircle.scss';

export default function ScrollProgressCircle() {
    const { scrollYProgress } = useScroll();
    const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
                show ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            <div
                onClick={scrollToTop}
                className="relative cursor-pointer w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
            >
                {/* Arrow in center */}
                <IoIosArrowUp  className="text-[#91765a] absolute z-10" />

                {/* Circular scroll progress behind icon */}
                <svg
                    className="w-12 h-12 absolute"
                    viewBox="0 0 100 100"
                >
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#91765a"
                        strokeWidth="5"
                        strokeLinecap="round"
                        style={{
                            pathLength,
                            rotate: -90,
                            originX: '50%',
                            originY: '50%',
                        }}
                    />
                </svg>
            </div>
        </div>
    );
}
