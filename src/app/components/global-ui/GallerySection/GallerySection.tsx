"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './GallerySection.scss';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

// Helper function to chunk array
function chunkArray<T>(arr: T[], sizes: number[]): T[][] {
  const result: T[][] = [];
  let index = 0;
  for (const size of sizes) {
    result.push(arr.slice(index, index + size));
    index += size;
  }
  return result;
}

interface GallerySectionProps {
  images: {
    src: string;
    cols: string;
  }[];
  facilities: {
    id: number;
    name: string;
  }[];
}

export default function GallerySection({ images, facilities }: GallerySectionProps) {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const visibleImages = isMobile ? images.slice(0, visibleCount) : images;

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const rowChunks = chunkArray(visibleImages, [3, 2, 3, 2, 3]);

  // console.log('facilities',facilities);


  return (
    <section className="py-16 bg-white">
      <div className="container px-5 md:px-0 mx-auto py-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          {/* Villa Description */}
          {/* <h3 className="text-3xl font-bold text-gray-800 mb-3">About Villa</h3>
          <p className="text-gray-600 about-villa-discription mb-6">
            A beautiful 4BHK valley view villa with the upper floor externally connected to the ground floor.
            The ground floor features 2 bedrooms, 1 bathroom, 1 living room, kitchen, verandah with a swing,
            and a lush garden. The upper floor offers 2 bedrooms with attached bathrooms, and a stunning
            valley-facing terrace sit-out next to the bedrooms.
          </p> */}

          {/* Facilities */}
          <h3 className="text-3xl font-bold text-gray-800 mb-7">What We Provide</h3>

          <div className="bg-[#f7f4f0] about-we-provide p-6 rounded-lg shadow-sm text-left mb-12">
            {/* <h3 className="text-lg font-semibold text-gray-800 mb-3">What We Provide</h3> */}

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 list-disc list-inside text-gray-700 text-sm">
              {facilities?.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>

          {/* <p className="text-sm text-gray-500 uppercase tracking-wider">Images</p> */}
          <h2 className="text-3xl font-bold text-gray-800">Image Gallery</h2>
        </motion.div>

        <div className="gallery-wrapper space-y-8 overflow-hidden">
          {rowChunks
            .filter((row) => row.length > 0)
            .map((row, rowIndex) => (
              <div key={rowIndex} className="gallery-row flex flex-wrap gap-4">
                {row.map((img, index) => (
                  <motion.div
                    key={img.src}
                    className={`gallery-item group relative ${row.length % 2 === 0 ? "tall" : ""}`}
                    style={{ width: img.cols }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    custom={index}
                    variants={fadeInUp}
                  >
                    <img
                      src={img.src}
                      alt={`Gallery image ${index}`}
                      onClick={() => setSelectedImage(img.src)}
                      className="img-gallery-item transform transition-transform duration-300 group-hover:scale-105 object-cover h-full w-full cursor-pointer"
                    />

                    <div className="absolute inset-0 bg-black opacity-0 md:opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
                  </motion.div>
                ))}
              </div>
            ))}
        </div>

        {isMobile && visibleCount < images.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleViewMore}
              className="px-6 py-2 bg-[#b19777] text-white rounded-md hover:bg-gray-700 transition"
            >
              View More
            </button>
          </div>
        )}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
