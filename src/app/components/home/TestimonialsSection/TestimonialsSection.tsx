'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

const testimonials = [
    {
        rating: 5,
        title: 'Highly recommended!',
        text: 'Dadaji villa is a great place to spend quality time with family and friends.The location is great with a scenic view. House and garden area was very well maintained and clean. Pratik was a great host who made sure to call us and ask if we had any concerns. The caretaker was also very polite and helpful and provided great home made food. Would highly recommend Dadaji villa.',
        author: 'Shubham',
        date: '10-11 July',
        img: '/img/team/1.jpg',
    },
    {
        rating: 4,
        title: 'Surrounded by nature!',
        text: 'An ideal place to stay if you want to spend time surrounded by nature. We spent hours sitting in the balcony letting the panorama soak in. A very well maintained and hygienic arrangement with delicious food and friendly caretakers. Would definitely visit again.',
        author: 'Aayush',
        date: '17-19 June',
        img: '/img/team/2.jpg',
    },
    {
        rating: 5,
        title: 'Hubbub of Mahabaleshwar',
        text: 'This is a great place away from the hubbub of Mahabaleshwar town. Host as well as caretakers are great too.',
        author: 'Abhishake',
        date: '15-17 June',
        img: '/img/team/3.jpg',
    },
    {
        rating: 5,
        title: 'Maintained & Clean!',
        text: 'The location & setup of this place is very nice. The view from the balcony is really awesome & totally worth it. It is well maintained & clean and hygienic property. Food is also quite decent. Must visit this if you happen to be in Panchgani or Mahabaleshwar.',
        author: 'Tanu',
        date: '13-15 June',
        img: '/img/team/3.jpg',
    },
    {
        rating: 5,
        title: 'Awesome place and great views!',
        text: 'Awesome place and great views from the terrace. Love the home cooked food. Definitely would go back if coming to Mahabaleshwar.',
        author: 'Ravi Kumar',
        date: '11-12 May',
        img: '/img/team/3.jpg',
    },
];


const TestimonialsSection = () => {
    return (
        <section
            className="relative bg-fixed bg-cover bg-center py-20"
            style={{ backgroundImage: "url('/about-header.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

            <div className="relative z-10 container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Swiper spaceBetween={30} slidesPerView={1} loop autoplay={{ delay: 2000 }}>
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-white shadow-xl">
                                        <div className="flex justify-center mb-4">
                                            {Array.from({ length: item.rating }).map((_, i) => (
                                                <i key={i} className="text-yellow-400 text-xl">★</i>
                                            ))}
                                        </div>
                                        <h5 className="text-xl font-semibold mb-4 Outfit-600">{item.title}</h5>
                                        <p className="mb-6 text-sm leading-relaxed Outfit-300">{item.text}</p>
                                        <div className="flex items-center justify-center gap-4">
                                            {/* <img
                                                src={item.img}
                                                alt={item.author}
                                                // width={50}
                                                // height={50}
                                                className="rounded-full"
                                            /> */}
                                            <div className="text-center">
                                                <h6 className="text-md font-medium">{item.author}</h6>
                                                <span className="text-sm text-gray-300">{item.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
