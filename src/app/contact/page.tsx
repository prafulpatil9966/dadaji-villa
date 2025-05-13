'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Contact = () => {
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


    return (
        <div className="bg-[#f5eee7] text-black">
            {/* Banner Header */}
            <div
                className="relative h-[60vh] bg-cover bg-fixed flex items-center justify-center"
                style={{
                    backgroundImage: "url('/contact-header.jpg')",
                    backgroundPosition: isMobileView ? "9% 0%": "center 20%",
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white z-10 text-4xl md:text-5xl font-bold"
                >
                    Contact Us
                </motion.h1>
            </div>

            {/* Contact Section */}
            <section className="py-10 md:py-15 lg:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 mb-20">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-4">Mountain Hotel</h3>
                            <p className="text-sm leading-relaxed mb-6">
                                Hotel ut nisl quam vestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus pellentesque habitant morbine.
                            </p>

                            <div className="mb-6">
                                <h4 className="text-[#91765a] font-semibold mb-1">Reservation</h4>
                                <a href="tel:7045228951" className="text-sm hover:text-[#91765a] block">
                                    7045228951
                                </a>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-[#91765a] font-semibold mb-1">Email Info</h4>
                                <a href="mailto:dadajivilla@gmail.com" className="text-sm hover:text-[#91765a] block">
                                    dadajivilla@gmail.com
                                </a>
                            </div>

                            <div>
                                <h4 className="text-[#91765a] font-semibold mb-1">Address</h4>
                                <p className="text-sm">
                                    Panchgani,  Mahabaleshwar, Maharashtra.
                                    <br />
                                    Pincode - 412805/06
                                </p>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name *"
                                    required
                                    className="w-full px-4 py-3 bg-[#FFF] border border-white/10 rounded-lg text-sm"
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address *"
                                        required
                                        className="w-full px-4 py-3 bg-[#FFF] border border-white/10 rounded-lg text-sm"
                                    />
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone Number *"
                                        required
                                        className="w-full px-4 py-3 bg-[#FFF] border border-white/10 rounded-lg text-sm"
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject *"
                                    required
                                    className="w-full px-4 py-3 bg-[#FFF] border border-white/10 rounded-lg text-sm"
                                />
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="Message *"
                                    required
                                    className="w-full px-4 py-3 bg-[#FFF] border border-white/10 rounded-lg text-sm"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#91765a] hover:bg-[#a88f70] transition-all text-white px-6 py-3 rounded-lg font-semibold"
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d237.28619122280074!2d73.817086!3d17.905126!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2695e83fb25b9%3A0x90cba834b582d98e!2sDadaji%20Villa!5e0!3m2!1sen!2sin!4v1747031902461!5m2!1sen!2sin"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            className="rounded-lg"
                        ></iframe>


                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
