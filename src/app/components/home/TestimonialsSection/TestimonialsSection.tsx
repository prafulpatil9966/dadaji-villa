"use client";

import useDevicePlatform from "@/hooks/useDevicePlatform";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PromoVideo: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isIOS } = useDevicePlatform();

  const videos = [
    { id: 1, thumbnail: "/common/video-thumb1.jpg", src: "/Video/promo-video.mp4" },
    { id: 2, thumbnail: "/common/video-thumb2.jpg", src: "/Video/promo-video2.mp4" },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleResize = () => setIsMobileView(mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const handlePlayVideo = (videoSrc: string) => {
    setActiveVideo(videoSrc);
    setIsVideoOpen(true);
    setTimeout(() => videoRef.current?.play(), 300);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
    videoRef.current?.pause();
  };

  return (
    <section
      className="relative bg-fixed bg-cover bg-center py-20"
      style={{
        backgroundImage: `url('/common/hero-img.jpg')`,
        backgroundPosition: isMobileView ? "9% 0%" : "center 90%",
        backgroundAttachment: isIOS ? "scroll" : "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative container mx-auto text-center text-white">
        {/* Title + Stars */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="flex justify-center gap-1 text-yellow-400 text-2xl">
            {"★★★★★".split("").map((star, index) => (
              <motion.span key={index} animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                {star}
              </motion.span>
            ))}
          </span>
          <div className="text-lg text-[#FFF] Outfit-500 mt-2">Mountain Homestay</div>
          <div className="why-choose-us-section-heading text-3xl md:text-4xl font-bold text-[#FFF] relative leading-[1.25em] Outfit-700 mt-1">
            Promotional Video
          </div>
        </motion.div>

        {/* ✅ Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full md:w-[600px] mx-auto"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div
                  className="relative w-[280px] h-[160px] md:w-[560px] md:h-[315px] rounded-lg overflow-hidden cursor-pointer shadow-lg mx-auto"
                  onClick={() => handlePlayVideo(video.src)}
                >
                  <img
                    src={video.thumbnail}
                    alt={`Video ${video.id}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 flex items-center justify-center bg-yellow-500 rounded-full"
                    >
                      <FaPlay className="text-white text-2xl" />
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* ✅ Video Popup Modal */}
      {isVideoOpen && activeVideo && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleCloseVideo}
        >
          <div className="relative w-[800px] h-[450px]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseVideo}
              className="absolute right-[10px] md:top-[-20px] md:right-[-20px] bg-red-500 text-white rounded-full p-2 z-10 cursor-pointer"
            >
              <FaTimes size={20} />
            </button>
            <video ref={videoRef} className="w-full h-full" controls>
              <source src={activeVideo} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default PromoVideo;
