"use client";
import './PromoVideo.scss'
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
    { id: 1, src: "/Video/promo-video.mp4", title: "Mountain Homestay", desc: "Dadaji Villa" },
    { id: 2, src: "/Video/promo-video-2.mp4", title: "Luxury Cabin Retreat", desc: "Dadaji Cottage" },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleResize = () => setIsMobileView(mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  // 1. New useEffect to manage body overflow
  useEffect(() => {
    // Check if we are running in a browser environment
    if (typeof window !== 'undefined' && document.body) {
      if (isVideoOpen) {
        // Disable scrolling when the modal is open
        document.body.style.overflow = 'hidden';
      } else {
        // Re-enable scrolling when the modal is closed
        document.body.style.overflow = 'auto';
      }
    }

    // Cleanup function to ensure scrolling is re-enabled on component unmount
    return () => {
      if (typeof window !== 'undefined' && document.body) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [isVideoOpen]); // Re-run effect whenever isVideoOpen changes

  const handlePlayVideo = (src: string) => {
    setActiveVideo(src);
    setIsVideoOpen(true);
    // Timeout is important to ensure the video element is mounted before calling play
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
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      <div className="relative container mx-auto text-center text-white">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          // pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          spaceBetween={50}
          slidesPerView={1}
          className="max-w-4xl mx-auto"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="flex justify-center gap-1 text-yellow-400 text-2xl">
                  {"★★★★★".split("").map((star, index) => (
                    <motion.span
                      key={index}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      {star}
                    </motion.span>
                  ))}
                </span>
                <div className="text-lg text-[#FFF] Outfit-500 mt-2">Promotional Video</div>
                {/* <div className="text-lg text-[#FFF] Outfit-500 mt-2">{video.desc}</div> */}
                <div className="why-choose-us-section-heading text-3xl md:text-4xl font-bold text-[#FFF] relative leading-[1.25em] Outfit-700 mt-2">
                  {video.desc}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-10 flex justify-center"
              >
                <motion.div
                  className="w-16 h-16 flex items-center justify-center bg-yellow-500 rounded-full cursor-pointer shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handlePlayVideo(video.src)}
                >
                  <FaPlay className="text-white text-2xl" />
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Video Popup Modal */}
      {isVideoOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleCloseVideo}
        >
          <div
            className="relative w-[800px] h-[450px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseVideo}
              className="absolute right-[10px] md:top-[-20px] md:right-[-20px] bg-red-500 text-white rounded-full p-2 z-10 cursor-pointer"
            >
              <FaTimes size={20} />
            </button>
            <video ref={videoRef} className="w-full h-full" controls>
              <source src={activeVideo || ""} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default PromoVideo;