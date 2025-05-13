'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Balcony Play Area',
    text: 'Restaurant inilla duiman at elit finibus viverra nec a lacus miss the nesun seneoice misuscipit non sagie the fermen ziverra tristiue duru the iviten onen nivami acsestion augue in the miss artine.',
    link: '/restaurant',
    image: '/ServiceSection.jpg',
    reverse: false,
    button: 'Dining With Us',
  },
  {
    title: 'Spa & Wellness',
    text: 'Wellness inilla duiman at elit finibus viverra nec a lacus miss the nesuna seneoice misuscipit non sagie the fermen ziverra tristiue duru the iviten onen nivami acsestion augue in the miss artine.',
    link: '/spa-wellness',
    image: '/ServiceSection.jpg',
    reverse: true,
    button: 'Discover More',
  },
  {
    title: 'Fitness Center',
    text: 'Fitness center inilla duiman at elit finibus viverra nec a lacus miss nesun seneoice misuscipit non sagie the fermen ziverra tristiue duru the iviten onen nivami acsestion augue in the miss artine.',
    link: '/spa-wellness',
    image: '/ServiceSection.jpg',
    reverse: false,
    button: 'Learn More',
  },
];

const ServicesSecton = () => {
  return (
    <section className=" overflow-hidden bg-[#1b1712] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-sm uppercase tracking-widest text-[#b19777]">What We Do</div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Services</h2>
        </div>

        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${service.reverse ? 'md:flex-row-reverse' : ''}`}
          >
            <motion.div
              initial={{ opacity: 0, x: service.reverse ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2 w-full"
            >
              <Link href={service.link}>
                <img
                  src={service.image}
                  alt={service.title}
                  // width={700}
                  // height={400}
                  className="w-full object-cover h-[400px]"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: service.reverse ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 w-full bg-[#1b1712] flex items-center"
            >
              <div className="p-8 md:p-12">
                <h4 className="text-[27px] text-white leading-[1.5em] mt-0 mb-2.5 mx-0 Outfit-700">{service.title}</h4>
                <p className=" text-[15px] font-light leading-[1.75em] text-[#625c56] mb-[15px] Outfit-300">{service.text}</p>
                <Link
                  href={service.link}
                  className="inline-block px-6 py-2 border border-white/30 hover:border-[#91765a] hover:text-[#91765a] transition"
                >
                  {service.button}
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSecton;
