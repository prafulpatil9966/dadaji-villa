import useDevicePlatform from "@/hooks/useDevicePlatform";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";

const PromoVideo: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isIOS } = useDevicePlatform();
  

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleResize = () => setIsMobileView(mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const handlePlayVideo = () => {
    setIsVideoOpen(true);
    setTimeout(() => videoRef.current?.play(), 300); // Wait for modal to render before playing
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
    videoRef.current?.pause();
  };

  return (
    <section
      className="relative bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url('/common/IMG_8436.jpg')`,
        backgroundPosition: isMobileView ? "9% 0%" : "center 90%",
        backgroundAttachment: isIOS ? 'scroll' : 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="relative container mx-auto text-center text-white">
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
          <div className="text-lg text-[#14100c] Outfit-500 mt-2">Mountain Homestay</div>
          <div className="why-choose-us-section-heading text-3xl md:text-4xl font-bold text-[#14100c] relative leading-[1.25em] Outfit-700 mt-1">Promotional Video</div>
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
            onClick={handlePlayVideo}
          >
            <FaPlay className="text-white text-2xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* Video Popup Modal */}
      {isVideoOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleCloseVideo} // Clicking anywhere closes modal
        >
          <div className="relative w-[800px] h-[450px]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseVideo}
              className="absolute right-[10px] md:top-[-20px] md:right-[-20px] bg-red-500 text-white rounded-full p-2 z-10 cursor-pointer"
            >
              <FaTimes size={20} />
            </button>
            <video ref={videoRef} className="w-full h-full" controls>
              <source src="/Video/promo-video.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      )}

    </section>
  );
};

export default PromoVideo;
