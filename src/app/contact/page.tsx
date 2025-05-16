'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');
        const handleResize = () => setIsMobileView(mediaQuery.matches);
        handleResize();
        mediaQuery.addEventListener('change', handleResize);
        return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
    
        const getInputValue = (name: string) =>
            (form.elements.namedItem(name) as HTMLInputElement)?.value || '';
    
        const data = {
            name: getInputValue('name'),
            email: getInputValue('email'),
            phone: getInputValue('phone'),
            subject: getInputValue('subject'),
            message: getInputValue('message'),
            to_email: getInputValue('email'), // Add this if you want the client to receive the email
        };
    
        try {
            await emailjs.send(
                'service_ftql377',
                'template_44xp789',
                data,
                'k06lU5uJJc3A01EmN'
            );
    
            alert('Message sent successfully!');
            form.reset();
        } catch (error) {
            console.error('Email send failed:', error);
            alert('Failed to send message. Please try again later.');
        }
    };

    // const sendWhatsAppMessage = (data: Record<string, string>) => {
    //     const phoneNumber = '918828119966';
    //     const message = `New Inquiry:%0AName: ${data.name}%0AEmail: ${data.email}%0APhone: ${data.phone}%0ASubject: ${data.subject}%0AMessage: ${data.message}`;
    //     const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    //     window.open(whatsappURL, '_blank');
    // };

    return (
        <div className="bg-[#f5eee7] text-black overflow-hidden">
            <div
                className="relative h-[60vh] bg-cover bg-fixed flex items-center justify-center"
                style={{
                    backgroundImage: "url('/contact-header.jpg')",
                    backgroundPosition: isMobileView ? '9% 0%' : 'center 20%',
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative text-white z-10 text-4xl md:text-5xl font-bold"
                >
                    Contact Us
                </motion.h2>
            </div>

            <section className="py-10 md:py-15 lg:py-20 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold mb-4">Mountain Hotel</h3>
                            <p className="text-sm leading-relaxed mb-6">
                                Three Unique Stays, One Peaceful Escape — Discover Comfort, Nature,
                                and Togetherness in Every Villa.
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
                                    Panchgani, Mahabaleshwar, Maharashtra.<br />
                                    Pincode - 412805/06
                                </p>
                            </div>
                        </motion.div>

                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
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
                        </motion.form>
                    </div>

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
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
