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
        <section className="pt-20 pb-0">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center">
                    {/* <motion.div
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-lg text-gray-500 mb-6"
                    >
                        So Many Ways to Unwind
                    </motion.div> */}

                    <motion.h2
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-4xl font-bold mt-2 mb-6 text-gray-800"
                    >
                        So Many Ways to Unwind

                    </motion.h2>

                    <motion.p
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-2"
                    >
                        DADAJI VILLA and its units in Panchgani, Mahabaleshwar are precisely chosen to be at one of the best locations on the hill station that offers spectacular view and peace. It is an ideal getaway from the urban stress.
                    </motion.p>
                    <motion.p
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-2"
                    >
                        Surrounded by strawberry fields, lush greenery, incredible picturesque mountain views, nilgiri-scented clean air, star gazed clear skies, an abundance of flora and fauna, this is a paradise for nature lovers.

                    </motion.p>
                    <motion.p
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-2"
                    >
                        DADAJI VILLA and its units in Panchgani, Mahabaleshwar welcomes you to be our guests and make cherished memories with your loved ones while we take care of you.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
