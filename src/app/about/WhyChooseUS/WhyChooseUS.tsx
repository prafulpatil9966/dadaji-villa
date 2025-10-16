'use client';

import { motion } from 'framer-motion';
import { FaCar, FaWifi, FaBroom } from 'react-icons/fa';
import './WhyChooseUS.scss'


const WhyChooseUS = () => {
    const facilities = [
        {
            icon: <FaCar className="text-4xl text-primary" />,
            title: "Parking Space",
            description: "Secure parking area available for all guests, ensuring convenience and peace of mind.",
        },
        {
            icon: <FaWifi className="text-4xl text-primary" />,
            title: "High-speed Internet",
            description: "Stay connected with our high-speed fibre internet, perfect for work or entertainment.",
        },
        {
            icon: <FaBroom className="text-4xl text-primary" />,
            title: "Clean and Hygienic",
            description: "We maintain high hygiene standards to ensure a safe and pleasant stay for all our guests.",
        },
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <section className="why-choose-us-section py-16 md:py-16 sm:py-16">
            <div className="container px-5 md:px-0 mx-auto">
                <motion.div
                    className="text-center mb-8 md:mb-12"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}>
                    <div className="text-xs font-bold text-[#91765a] uppercase relative tracking-[2px] mb-2">Homestay Facilities</div>
                    <h2 className="why-choose-us-section-heading text-3xl md:text-4xl font-bold text-[#14100c] relative leading-[1.25em] mb-[15px] Outfit-700">Why Choose Us</h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-8 ">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={index}
                            className="why-choose-us-icon-div group hover:bg-white p-6 border rounded-2xl shadow hover:shadow-lg transition duration-300 bg-white relative"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        // transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="absolute top-4 right-4 text-gray-100 text-6xl opacity-10 pointer-events-none">
                                {facility.icon}
                            </div>
                            <div className="why-choose-us-icon mb-4">{facility.icon}</div>
                            <h5 className="why-choose-title text-lg font-semibold mb-2 text-[#14100c] group-hover:text-[#91765a] transition-colors">{facility.title}</h5>
                            <p className="text-sm text-gray-600">{facility.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUS