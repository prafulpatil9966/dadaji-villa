'use client';

import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";
import './PromoSection.scss'
import WeatherWidget from '../../WeatherWidget/WeatherWidget';

const PromoSection = () => {

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
        }),
    };
    const router = useRouter();
    return (
        <>
            <section className="home-about-section py-10 md:py-20  bg-[#f5eee7]" id="about">
                <div className="container px-5 md:px-0 mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                        {/* <div className="lg:w-1/2 w-full"> */}
                        <div className=" w-full">
                            <motion.h2
                                custom={1}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={fadeInUp}
                                className="text-3xl md:text-4xl text-center font-bold mb-6 text-gray-800"
                            >
                                So Many Ways to Unwind

                            </motion.h2>

                            <motion.p
                                custom={2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={fadeInUp}
                                className="text-gray-600 text-center leading-relaxed max-w-3xl mx-auto mb-2"
                            >
                                Welcome to Dadaji Villa, a serene vacation home in the heart of Panchgani, Mahabaleshwar, offering breathtaking valley views and the perfect blend of comfort and nature.
                            </motion.p>
                            <motion.p
                                custom={2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={fadeInUp}
                                className="text-gray-600 text-center leading-relaxed max-w-3xl mx-auto mb-2"
                            >
                                Founded in 2015, Dadaji Villa began as a personal dream turned into a heartfelt venture. I’m Pratik Patil, the founder of Dadaji Villa. While working as an Airplane Engineer, my love for nature and mountains inspired me to create a peaceful escape for travelers — a place where they could unwind, reconnect, and experience the tranquility I’ve always admired.

                            </motion.p>
                            <motion.p
                                custom={2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={fadeInUp}
                                className="text-gray-600 text-center leading-relaxed max-w-3xl mx-auto mb-2"
                            >
                                What started as a passion project soon became a cherished destination for families, friends, and nature lovers seeking a cozy, private retreat in the hills. Every corner of Dadaji Villa reflects warmth, care, and the essence of mountain living.
                            </motion.p>
                            <motion.p
                                custom={2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={fadeInUp}
                                className="text-gray-600 text-center leading-relaxed max-w-3xl mx-auto mb-2"
                            >
                                Here, it’s not just about staying — it’s about feeling at home amid the clouds.
                            </motion.p>
                        </div>
                        {/* <div className="lg:w-1/2 w-full">
                            <WeatherWidget />
                        </div> */}
                    </div>

                </div>
            </section>
            <div className="hidden sm:block relative mx-auto -my-[30px] w-[1.5px] h-[60px] border-l-[1.5px] border-[#91765a] z-[10] opacity-100"></div>
        </>
    );
};

export default PromoSection;
