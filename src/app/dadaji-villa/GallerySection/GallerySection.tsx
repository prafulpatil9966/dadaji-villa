"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import './GallerySection.scss'

const images = [
    { src: "/dadaji-gallery/dadaji-gallery-img-1.jpg", cols: "30%" },
    { src: "/dadaji-gallery/dadaji-gallery-img-2.jpg", cols: "30%" },
    { src: "/dadaji-gallery/dadaji-gallery-img-3.jpg", cols: "30%" },
    { src: "/dadaji-gallery/dadaji-gallery-img-4.jpg", cols: "50%" },
    { src: "/dadaji-gallery/dadaji-gallery-img-5.jpg", cols: "50%" },
    { src: "/dadaji-gallery/dadaji-gallery-img-6.jpg", cols: "30%" },
    { src: "/dadaji-gallery/dadaji-gallery-img-7.jpg", cols: "30%" },
    { src: "/dadaji-gallery/dadaji-gallery-img-8.jpg", cols: "30%" },
    { src: "/dadaji-gallery/dadaji-gallery-img-9.jpg", cols: "50%" },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1 },
    }),
};

export default function GallerySection() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <p className="text-sm text-gray-500 uppercase tracking-wider">Images</p>
                    <h2 className="text-3xl font-bold text-gray-800">Image Gallery</h2>
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((img, index) => (
                        <motion.div
                            key={img.src}
                            className="h-64 overflow-hidden group"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index}
                            variants={fadeInUp}
                        >
                            <img
                                src={img.src}
                                alt="work-img"
                                className="transition-transform duration-300 group-hover:scale-105 object-cover h-full w-full"
                            />
                        </motion.div>

                    ))}
                </div>
            </div>
        </section>
    );
}
