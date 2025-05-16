'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroButton from '../../global-ui/HeroButton/HeroButton';

const services = [
  {
    title: 'Dadaji Villa',
    text: 'A 4BHK Valley View Villa with upper floor externally connected to ground floor. Ground floor has 2 bedrooms, 1 bathroom, 1 living room, kitchen, verandah with a swing and a garden. Upper floor has 2 bedrooms, 2 attached bathrooms, valley facing terrace sit out next to the bedrooms.',
    link: '/dadaji-villa',
    image: '/ServiceSection.jpg',
    reverse: false,
    button: 'Explore Villa',
  },
  {
    title: 'Dadaji Cottage',
    text: 'A unit of Dadaji Villa,  Valley View Cottage: Cozy 2-bedroom unit with interconnecting rooms — one compact (7×9 ft) and one spacious (11×13 ft) with attached bathroom. Enjoy a private valley-facing backyard lawn.',
    link: '/dadaji-cottage',
    image: '/about-header.jpg',
    reverse: true,
    button: 'View Details',
  },
  {
    title: 'Citrine',
    text: '4BHK Hilltop Villa in Panchgani, Mahabaleshwar: A serene escape with spacious bedrooms, private swimming pool, garden, and bonfire setup. Relax with your loved ones, stargaze under clear skies, and enjoy peaceful moments away from the city buzz.',
    link: '/citrine',
    image: '/citrine-home.jpg',
    reverse: false,
    button: 'Enquire Now',
  },
];

const ServicesSecton = () => {
  return (
    <section className=" overflow-hidden bg-[#1b1712] py-20 text-white" id='rooms'>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Hotels</h2>
          <div className="text-sm uppercase tracking-widest text-[#b19777] mt-4">Your Perfect Escape, Your Home Away From Home</div>
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
                  className="w-full object-cover h-[200px] md:h-[400px] lg:h-[400px]"
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
              <div className="pt-4 pb-8 px-0 md:p-12">
                <h4 className="text-[27px] text-white leading-[1.5em] mt-0 mb-2.5 mx-0 Outfit-700">{service.title}</h4>
                <p className=" text-[15px] font-light leading-[1.75em] text-[#625c56] mb-[15px] Outfit-300">{service.text}</p>
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
