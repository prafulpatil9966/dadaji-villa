import { useEffect } from "react";
import { MdErrorOutline } from "react-icons/md";

const ErrorPopup = ({ content, onClose }) => {
  useEffect(() => {
    if (content) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [content]);

  if (!content) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[999]">
      <div className="bg-white rounded-2xl shadow-lg max-w-sm w-[90%] p-6 text-center animate-fadeIn border border-rose-200">
        {/* Error Icon */}
        <div className="flex justify-center mb-3">
          <MdErrorOutline className="text-rose-500 text-5xl" />
        </div>

        {/* Error Message */}
        <p className="text-lg text-gray-800 font-medium">{content}</p>

        {/* Button */}
        <button
          onClick={onClose}
          className="mt-5 bg-rose-500 hover:bg-rose-600 transition-all text-white px-8 py-2 rounded-lg font-semibold shadow-sm"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ErrorPopup;
