'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    }),
};

export default function AboutInfo() {
    return (
        <section className="py-10 md:py-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center">
                    <motion.h2
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={fadeInUp}
                        className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
                    >
                        So Many Ways to Unwind

                    </motion.h2>

                    <motion.p
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={fadeInUp}
                        className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-2"
                    >
                        Welcome to Dadaji Villa, a serene vacation home in the heart of Panchgani, Mahabaleshwar, offering breathtaking valley views and the perfect blend of comfort and nature.
                    </motion.p>
                    <motion.p
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={fadeInUp}
                        className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-2"
                    >
                        Founded in 2015, Dadaji Villa began as a personal dream turned into a heartfelt venture. I’m Pratik Patil, the founder of Dadaji Villa. While working as an Airplane Engineer, my love for nature and mountains inspired me to create a peaceful escape for travelers — a place where they could unwind, reconnect, and experience the tranquility I’ve always admired.

                    </motion.p>
                    <motion.p
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={fadeInUp}
                        className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-2"
                    >
                        What started as a passion project soon became a cherished destination for families, friends, and nature lovers seeking a cozy, private retreat in the hills. Every corner of Dadaji Villa reflects warmth, care, and the essence of mountain living.
                    </motion.p>
                    <motion.p
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={fadeInUp}
                        className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-2"
                    >
                        Here, it’s not just about staying — it’s about feeling at home amid the clouds.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
