'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { PiPhoneCallThin, PiMailboxThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import useDevicePlatform from '@/hooks/useDevicePlatform';
import OkPopup from '../components/global-ui/OkPopup/OkPopup';
import ErrorPopup from '../components/global-ui/ErrorPopup/ErrorPopup';

const Contact = () => {
    const [isMobileView, setIsMobileView] = useState(false);
    const { isIOS } = useDevicePlatform();
    const [todayDate, setTodayDate] = useState("");
    const [popupOpen, setPopupOpen] = useState(false);
    const [errorPopup, setErrorPopup] = useState(false);

    useEffect(() => {
        const currentDate = new Date().toISOString().split("T")[0];
        setTodayDate(currentDate);
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
            // email: getInputValue('email'),
            phone: getInputValue('phone'),
            property: getInputValue('property'),
            guests: getInputValue('guests'),
            dateFrom: getInputValue('dateFrom'),
            dateTo: getInputValue('dateTo'),
            to_email: getInputValue('email'), // For client copy, if used in template
        };

        debugger
        try {
            await emailjs.send(
                'service_ftql377',
                'template_44xp789',
                data,
                'k06lU5uJJc3A01EmN'
            );

            // alert('Message sent successfully!');
            setPopupOpen(true)
            form.reset();
        } catch (error) {
            console.error('Email send failed:', error);
            setErrorPopup(true)
            // alert('Failed to send message. Please try again later.');
        }
    };

    return (
        <div className="bg-[#f5eee7] text-black overflow-hidden">
            <div
                className="relative h-[60vh] bg-cover flex items-center justify-center"
                style={{
                    backgroundImage: "url('/contact-header.jpg')",
                    backgroundPosition: isMobileView ? '9% 0%' : 'center 20%',
                    backgroundAttachment: isIOS ? 'scroll' : 'fixed',
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

            <section className="py-10 md:py-15 lg:py-20 overflow-hidden">
                <div className="container px-5 md:px-0 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl md:text-2xl font-bold mb-4">Mountain Homestay</h3>
                            <p className="text-sm md:text-[15px] leading-relaxed mb-6 Outfit-400 text-[#625c56]">
                                Two Unique Stays, One Peaceful Escape — Discover Comfort, Nature,
                                and Togetherness in Every Villa.
                            </p>

                            {/* Reservation */}
                            <div className="mb-6 flex flex-row sm:flex-row items-center sm:items-center gap-4">
                                <PiPhoneCallThin className="text-[#91765a] text-[35px] sm:text-[45px]" />
                                <div>
                                    <h4 className="text-[#91765a] font-semibold mb-1 text-sm md:text-base">Reservation</h4>
                                    <a
                                        href="tel:7045228951"
                                        className="text-xl sm:text-2xl text-[#14100c] hover:text-[#91765a] Outfit-700 block"
                                    >
                                        7045228951
                                    </a>
                                </div>
                            </div>

                            {/* Email Info */}
                            <div className="mb-6 flex flex-row sm:flex-row items-center sm:items-center gap-4">
                                <PiMailboxThin className="text-[#91765a] text-[35px] sm:text-[45px]" />
                                <div>
                                    <h4 className="text-[#91765a] font-semibold mb-1 text-sm md:text-base">Email Info</h4>
                                    <a
                                        href="mailto:dadajivilla@gmail.com"
                                        className="text-xl sm:text-2xl text-[#14100c] hover:text-[#91765a] Outfit-700 block"
                                    >
                                        dadajivilla@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="mb-6 flex flex-row sm:flex-row items-center sm:items-center gap-4">
                                <CiLocationOn className="text-[#91765a] text-[35px] sm:text-[45px]" />
                                <div>
                                    <h4 className="text-[#91765a] font-semibold mb-1 text-sm md:text-base">Address</h4>
                                    <p className="text-sm md:text-base leading-relaxed">
                                        Panchgani, Mahabaleshwar, Maharashtra.<br />
                                        Pincode - 412805/06
                                    </p>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mt-10">
                                <h3 className="text-xl md:text-2xl font-bold mb-4">Follow Us</h3>
                                <div className="mt-3 flex space-x-4 items-center">
                                    <a
                                        href="https://www.facebook.com/dadajivilla"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#91765a] text-lg md:text-xl hover:text-[#14100c] transition-colors"
                                    >
                                        <FaFacebookF />
                                    </a>
                                    <a
                                        href="https://x.com/dadajivilla"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#91765a] text-lg md:text-xl hover:text-[#14100c] transition-colors"
                                    >
                                        <FaXTwitter />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/dadajivilla/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#91765a] text-lg md:text-xl hover:text-[#14100c] transition-colors"
                                    >
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>
                        </motion.div>


                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-2"
                        >
                            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                            <div className="">
                                <p className='text-[#91765a] text-sm mb-2 ml-2'>Name</p>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name *"
                                    required
                                    className="w-full px-4 py-3 bg-[#FFF] text-[#625c56] border border-white/10 rounded-lg text-sm"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-1 ">
                                <p className='text-[#91765a] text-sm mb-2 ml-2'>Phone</p>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number *"
                                    required
                                    className="w-full px-4 py-3 bg-[#FFF] text-[#625c56] border border-white/10 rounded-lg text-sm"
                                />
                            </div>

                            {/* Property and Guests */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="">
                                    <p className='text-[#91765a] text-sm mb-2 ml-2'>Property for rent</p>
                                    <select
                                        name="property"
                                        required
                                        className="w-full px-4 py-3 bg-[#FFF] text-[#625c56] border border-white/10 rounded-lg text-sm"
                                    >
                                        <option value="">Select Property *</option>
                                        <option value="Dadaji Villa">Dadaji Villa</option>
                                        <option value="Dadaji Cottage">Dadaji Cottage</option>
                                    </select>
                                </div>
                                <div className="">
                                    <p className='text-[#91765a] text-sm mb-2 ml-2'>Number of Guests</p>
                                    <input
                                        type="number"
                                        name="guests"
                                        placeholder="Maximum 40 guests"
                                        min={1}
                                        required
                                        className="w-full px-4 py-3 bg-[#FFF] text-[#625c56] border border-white/10 rounded-lg text-sm"
                                    />
                                </div>
                            </div>
                            {/* Date From and To */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="">
                                    <p className='text-[#91765a] text-sm mb-2 ml-2'>Check In Date</p>
                                    <input
                                        type="date"
                                        name="dateFrom"
                                        min={todayDate}
                                        className="w-full px-4 py-3 bg-[#FFF] text-[#625c56] border border-white/10 rounded-lg text-sm cursor-pointer"
                                    />
                                </div>
                                <div className="">
                                    <p className='text-[#91765a] text-sm mb-2 ml-2'>Check Out Date</p>
                                    <input
                                        type="date"
                                        name="dateTo"
                                        min={todayDate}
                                        className="w-full px-4 py-3 bg-[#FFF] text-[#625c56] border border-white/10 rounded-lg text-sm cursor-pointer"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <p className='text-[#91765a] text-sm mb-2 ml-2'>Message</p>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="Message *"
                                    required
                                    className="w-full px-4 py-3 bg-[#FFF] text-[#625c56] border border-white/10 rounded-lg text-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                className="mt-5 bg-[#91765a] hover:bg-[#a88f70] transition-all text-white px-6 py-3 rounded-lg font-semibold"
                            >
                                Send Message
                            </button>
                        </motion.form>


                    </div>

                    {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true , amount: 0.5 }}
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
                    </motion.div> */}
                    {popupOpen && (
                        <OkPopup
                            content={"Message sent successfully! 🎉"}
                            onClose={() => setPopupOpen(false)}
                        />
                    )}
                    {errorPopup && (
                        <ErrorPopup
                            content={"Failed to send message. Please try again!"}
                            onClose={() => setErrorPopup(false)}
                        />
                    )}
                </div>
            </section>
        </div>
    );
};

export default Contact;
