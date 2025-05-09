'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import './AboutSection.scss'

const AboutSection = () => {
    return (
        <section className="home-about-section py-20 bg-[#f5eee7]" id="about">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Column */}
                    <motion.div
                        className="lg:w-1/2 w-full"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-sm uppercase text-[#91765a] mb-2">Since 2007</div>
                        <h2 className="text-3xl font-semibold mb-4 text-[#14100c]">A Unique Mountain Hotel</h2>
                        <p className='text-[#14100c] font-bold mr-2 mb-1'>
                            Ground Floor :
                        </p>
                        <p className="home-about-subtext mb-4 text-gray-600">
                            Features 2 spacious bedrooms, 1 common bathroom, a living room, a fully equipped kitchen, and a verandah with a swing overlooking a private garden.
                        </p>
                        <p className='text-[#14100c] font-bold mr-2 mb-1'>
                            Upper Floor :
                        </p>
                        <p className="home-about-subtext mb-6 text-gray-600">
                            Externally connected to the ground floor, it includes 2 bedrooms with attached bathrooms and a valley-facing terrace sit-out accessible from both rooms—perfect for relaxing with scenic views.
                        </p>
                        <div className="flex items-center gap-4">
                            <Image
                                src="/img/signature-dark.svg"
                                alt="Signature"
                                width={100}
                                height={50}
                                className="img h-auto w-auto"
                            />
                            <div>
                                <div className="font-semibold text-lg text-[#14100c]">Pratik Patil</div>
                                <div className="text-sm text-gray-500">Owner</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        className="lg:w-1/2 w-full relative"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="home-about-img-div z-10">
                            <div className="home-about-inner-img-div">
                                {/* <Image
                                    
                                /> */}
                                <img src="/aboutimg.jpg"
                                    alt="About"
                                    // width={600}
                                    // height={400}
                                    className="home-about-img" />
                            </div>
                        </div>

                        {/* Circular Text */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <svg width="300" height="300" viewBox="0 0 300 300" className="w-52 h-52">
                                <defs>
                                    <path
                                        id="circlePath"
                                        d="M 150, 150 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                                    />
                                </defs>
                                <circle cx="150" cy="150" r="75" fill="none" />
                                <g>
                                    <use xlinkHref="#circlePath" fill="none" />
                                    <text fill="#91765a" fontSize="14">
                                        <textPath xlinkHref="#circlePath">
                                            . dadaji villa . mountain villa .
                                        </textPath>
                                    </text>
                                </g>
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
