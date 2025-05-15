"use client";

import { motion } from "framer-motion";
import './GallerySection.scss';


const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1 },
    }),
};

// Helper function to chunk array
function chunkArray<T>(arr: T[], sizes: number[]): T[][] {
    const result: T[][] = [];
    let index = 0;
    for (const size of sizes) {
        result.push(arr.slice(index, index + size));
        index += size;
    }
    return result;
}
interface GallerySectionProps {
    images: {
        src: string;
        cols: string;
    }[];
}

export default function GallerySection({ images }: GallerySectionProps) {
    const rowChunks = chunkArray(images, [3, 2, 3]); // [firstRow, secondRow, thirdRow]

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto p-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-center mb-10">
                    <p className="text-sm text-gray-500 uppercase tracking-wider">Images</p>
                    <h2 className="text-3xl font-bold text-gray-800">Image Gallery</h2>
                </motion.div>

                <div className="gallery-wrapper space-y-8 overflow-hidden">
                    {rowChunks.map((row, rowIndex) => (
                        <div key={rowIndex} className="gallery-row">
                            {row.map((img, index) => (
                                <motion.div
                                    key={img.src}
                                    className={`gallery-item group ${row.length === 2 ? 'tall' : ''}`}
                                    style={{ width: img.cols }}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={index}
                                    variants={fadeInUp}
                                >
                                    <img
                                        src={img.src}
                                        alt={`Gallery image ${index}`}
                                        className="transition-transform duration-300 group-hover:scale-105 object-cover h-full w-full"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
