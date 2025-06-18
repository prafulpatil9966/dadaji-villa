'use client';
import useDevicePlatform from '@/hooks/useDevicePlatform';
import { useEffect, useState } from 'react';

// Define the type for a FAQ item
type FAQItem = {
    question: string;
    answer: string;
};

// Define the list of FAQs with type
const faqs: FAQItem[] = [
    {
        question: 'Where is Dadaji Villa located?',
        answer: 'Dadaji Villa is located in a serene countryside setting, just 20 minutes from the city center. You can find detailed directions on our Contact page.',
    },
    {
        question: 'What are the check-in and check-out times?',
        answer: 'Check-in is from 1:00 PM onwards and check-out is until 11:00 AM. Early check-in or late check-out requests are subject to availability.',
    },
    {
        question: 'Do you offer complimentary breakfast?',
        answer: 'Yes, we provide a complimentary traditional breakfast with every booking. You can also request a custom breakfast menu in advance.',
    },
    {
        question: 'Is Wi-Fi available at the villa?',
        answer: 'Yes, high-speed Wi-Fi is available throughout the property, including rooms, common areas, and the garden.',
    },
    {
        question: 'Can I book the entire villa for private events?',
        answer: 'Absolutely! Dadaji Villa is perfect for family getaways, private functions, and small events. Please contact us directly for group bookings and pricing.',
    },
    {
        question: 'Do you allow pets?',
        answer: 'Yes, we are a pet-friendly villa. However, we request guests to inform us in advance if they are bringing pets.',
    },
    {
        question: 'Is there parking available at the villa?',
        answer: 'Yes, we have free secure parking space available for all guests within the villa premises.',
    },
];


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
                                    className=" w-full text-left px-6 py-6 bg-white focus:outline-none flex justify-between items-center"
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
