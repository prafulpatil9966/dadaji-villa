'use client';
import { faqs } from '@/constants/global-data';
import useDevicePlatform from '@/hooks/useDevicePlatform';
import { useEffect, useState } from 'react';


export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const [isMobileView, setIsMobileView] = useState(false);
    const { isIOS } = useDevicePlatform();


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
        <div className='bg-[#f5eee7]'>
            {/* Banner Header */}
            <div
                className="relative h-[60vh] bg-cover bg-fixed flex items-center justify-center "
                style={{
                    backgroundImage: "url('/ServiceSection.jpg')",
                    backgroundPosition: isMobileView ? "9% 0%" : "center 80%",
                    backgroundAttachment: isIOS ? 'scroll' : 'fixed',
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-40" />

                {/* Content */}
                <div className="relative z-10 container px-5 md:px-0 mx-auto">
                    <div className="">
                        <h2
                            className="text-white text-4xl md:text-5xl font-bold text-center"
                        >
                            FAQ
                        </h2>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-3xl">
                    <ul className="space-y-4">
                        {faqs.map((faq, index) => (
                            <li
                                key={index}
                                className="text-[#14100c] overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="py-4 w-full text-left px-6 md:py-6 bg-white focus:outline-none flex justify-between items-center"
                                >
                                    <span
                                        className={`Outfit-700 font-medium text-[19px] transition-colors duration-300 ${openIndex === index ? 'text-[#91765a]' : 'text-[#14100c]'
                                            }`}
                                    >
                                        {faq.question}
                                    </span>

                                    <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100 pb-6 px-6' : 'max-h-0 opacity-0 px-6 py-0'
                                        } bg-white`}
                                >
                                    <p className="Outfit-400 text-gray-700 text-sm">{faq.answer}</p>
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>
            </section>
        </div>
    );
}
