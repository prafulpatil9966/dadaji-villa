import { useEffect } from "react";

const OkPopup = ({ content, onClose }) => {
    useEffect(() => {
        if (content) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [content]);
    if (!content) return null; // Don't render if no content is passed

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[999]">
            <div className="bg-white rounded-2xl shadow-lg max-w-sm w-[90%] p-6 text-center animate-fadeIn">
                <p className="text-lg text-gray-800 Outfit-500">{content}</p>
                <button
                    onClick={onClose}
                    className="mt-5 bg-[#91765a] hover:bg-[#a88f70] transition-all text-white px-8 py-2 rounded-lg font-semibold"
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default OkPopup;
