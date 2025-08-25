"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./GallerySection.scss";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

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
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle Esc and Arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex !== null) {
        if (e.key === "Escape") setCurrentIndex(null);
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Prevent background scroll when modal is open
  useEffect(() => {
  if (currentIndex !== null) {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
  } else {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.overflow = "";
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }
}, [currentIndex]);



  const handleViewMore = () => setVisibleCount((prev) => prev + 3);

  const visibleImages = isMobile ? images.slice(0, visibleCount) : images;
  const rowChunks = chunkArray(visibleImages, [3, 2, 3, 2, 3]);

  // Navigation functions
  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev! + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev! - 1 + images.length) % images.length);
    }
  };

  // Swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current !== null) {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (diff > 50) handleNext(); // swipe left
      if (diff < -50) handlePrev(); // swipe right
    }
    touchStartX.current = null;
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-5 md:px-0 mx-auto">
        {/* Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-7">What We Provide</h3>
          <div className="bg-[#f7f4f0] about-we-provide p-6 rounded-lg shadow-sm text-left mb-12">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 list-disc list-inside text-gray-700 text-sm">
              {facilities?.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Image Gallery</h2>
        </motion.div>

        {/* Gallery Images */}
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
                      onClick={() => setCurrentIndex(images.indexOf(img))}
                      className="img-gallery-item transform transition-transform duration-300 group-hover:scale-105 object-cover h-full w-full cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 md:opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
                  </motion.div>
                ))}
              </div>
            ))}
        </div>

        {/* View More Button */}
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

      {/* Modal with Swipe */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setCurrentIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[currentIndex].src}
            alt="Selected"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing on image click
          />
          {/* Optional navigation arrows */}
          <button
            className="absolute left-2 text-white text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
          >
            ‹
          </button>
          <button
            className="absolute right-2 text-white text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
