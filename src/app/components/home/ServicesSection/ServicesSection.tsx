'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroButton from '../../global-ui/HeroButton/HeroButton';

const services = [
  {
    title: 'Dadaji Villa',
    text: [
      `"Dadaji Villa" in Panchgani, Mahabaleshwar, has one of the best valley views on the hill station with spectacular sunsets.`,
      `It is a 4-bedroom villa surrounded by lush greenery and incredible mountains having a revitalizing cool breeze. It offers a much-needed break from urban stress.`,
      `"Dadaji Villa" is a paradise for nature lovers. We invite you to a peaceful stay and to make the sweetest memories with your loved ones.`,
    ],
    link: '/dadaji-villa',
    image: '/ServiceSection.jpg',
    reverse: false,
    button: 'Explore Villa',
  },
  {
    title: 'Dadaji Cottage',
    text: [
      `Dadaji Cottage is a cute and tiny property with a valley-facing sit-out lawn. It has one of the best valley views on the hill station with spectacular sunsets.`,
      `It is a 2 interconnected bedroom cottage surrounded by incredible mountains having a revitalizing cool breeze.`,
      `It is a paradise for nature lovers. We invite you to a peaceful stay and to make the sweetest memories with your loved ones.`,
    ],
    link: '/dadaji-cottage',
    image: '/about-header.jpg',
    reverse: true,
    button: 'Explore Villa',
  },
];


const ServicesSecton = () => {
  return (
    <section className=" overflow-hidden bg-[#1b1712] py-20 text-white" id='rooms'>
      <div className="container px-5 md:px-0 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold Outfit-700">PREMIUM VACATION VILLA & COTTAGE</h2>
          <div className="text-xs md:text-sm uppercase tracking-widest text-[#b19777] mt-4">Your Perfect Escape, Your Home Away From Home</div>
        </div>

        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col mt-4 md:flex-row md:mt-0 ${service.reverse ? 'md:flex-row-reverse' : ''} `}
          >
            <motion.div
              initial={{ opacity: 0, x: service.reverse ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className="md:w-1/2 w-full"
            >
              <Link href={service.link}>
                <img
                  src={service.image}
                  alt={service.title}
                  // width={700}
                  // height={400}
                  className="w-full object-cover h-[200px] md:h-[400px] lg:h-[400px]"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: service.reverse ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="md:w-1/2 w-full bg-[#1b1712] flex items-center"
            >
              <div className="pt-4 pb-8 px-0 md:p-12">
                <h4 className="text-[24px] md:text-[27px] text-white leading-[1.5em] mt-0 mb-2.5 mx-0 Outfit-700">{service.title}</h4>
                {service.text.map((para, i) => (
                  <p
                    key={i}
                    className="text-[14px] md:text-[15px] font-light leading-[1.75em] text-[#625c56] mb-[5px] Outfit-300"
                  >
                    {para}
                  </p>
                ))}

                {/* <Link
                  href={service.link}
                  className="inline-block px-6 py-2 border border-white/30 hover:border-[#91765a] hover:text-[#91765a] transition"
                >
                  {service.button}
                </Link> */}
                <HeroButton href={service.link} className='text-[10px]' >{service.button}</HeroButton>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSecton;
