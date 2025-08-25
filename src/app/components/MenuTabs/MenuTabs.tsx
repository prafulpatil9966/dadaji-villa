"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Tabs for different categories
const tabs = [
    { id: "tab-1", title: "Starters" },
    { id: "tab-2", title: "Main Course (Veg)" },
    { id: "tab-3", title: "Main Course (Non-Veg)" },
    { id: "tab-4", title: "Breads & Extras" },
    { id: "tab-5", title: "Rice & Biryani" },
    { id: "tab-6", title: "Snacks" },
    { id: "tab-7", title: "Desserts" },
    { id: "tab-8", title: "Beverages" },
    { id: "tab-9", title: "Barbeque" },
];

// Menu items per category (from your image)
const menuContent = {
    "tab-1": [
        { name: "Boiled Egg (2 eggs)", price: "₹35" },
        { name: "Egg Pakoda (5 eggs)", price: "₹120" },
        { name: "Paneer 65 (250g)", price: "₹160" },
        { name: "Paneer Chilly (250g)", price: "₹180" },
        { name: "Chicken 65 (250g)", price: "₹200" },
        { name: "Chicken Chilly (250g)", price: "₹200" },
        { name: "Chicken Sukha (1/2kg)", price: "₹500" },
        { name: "Mutton Sukha (1/2kg)", price: "₹700" },
    ],
    "tab-2": [
        { name: "Pithla Bhakari", price: "₹80" },
        { name: "Dal Fry/Tadka", price: "₹100" },
        { name: "Sabji (as per availability)", price: "₹140" },
        { name: "Dal Khichdi", price: "₹140" },
        { name: "Paneer Burji (250g)", price: "₹160" },
        { name: "Paneer Masala (250g)", price: "₹170" },
        { name: "Paneer Mutter (250g)", price: "₹180" },
    ],
    "tab-3": [
        { name: "Egg Curry/Masala", price: "₹120" },
        { name: "Chicken Handi (1kg)", price: "₹750" },
        { name: "Chicken Handi (1/2kg)", price: "₹400" },
        { name: "Chicken Malwani (1kg)", price: "₹750" },
        { name: "Chicken Malwani (1/2kg)", price: "₹400" },
        { name: "Chicken Kolhapuri (1kg)", price: "₹750" },
        { name: "Chicken Kolhapuri (1/2kg)", price: "₹400" },
        { name: "Mutton Handi (1kg)", price: "₹1400" },
        { name: "Mutton Handi (1/2kg)", price: "₹750" },
    ],
    "tab-4": [
        { name: "Chapati", price: "₹15" },
        { name: "Fulka", price: "₹20" },
        { name: "Bhakari", price: "₹25" },
        { name: "Papad", price: "₹20" },
        { name: "Masala Papad", price: "₹35" },
        { name: "Peanut Masala", price: "₹50" },
        { name: "Raita", price: "₹50" },
        { name: "Green Salad", price: "₹70" },
        { name: "Pav (2 nos)", price: "₹15" },
        { name: "Bread (4 slices)", price: "₹15" },
        { name: "Curd", price: "₹30" },
    ],
    "tab-5": [
        { name: "Steam Rice", price: "₹80" },
        { name: "Jeera Rice", price: "₹100" },
        { name: "Veg Pulav (1kg)", price: "₹600" },
        { name: "Veg Biryani (1kg)", price: "₹800" },
        { name: "Veg Biryani (1/2kg)", price: "₹450" },
        { name: "Egg Biryani (1kg)", price: "₹800" },
        { name: "Egg Biryani (1/2kg)", price: "₹450" },
        { name: "Chicken Biryani (1kg)", price: "₹1000" },
        { name: "Chicken Biryani (1/2kg)", price: "₹550" },
        { name: "Mutton Biryani (1kg)", price: "₹1300" },
        { name: "Mutton Biryani (1/2kg)", price: "₹750" },
    ],
    "tab-6": [
        { name: "Kanda/Batata Bhaji", price: "₹70" },
        { name: "Mix Bhaji", price: "₹80" },
        { name: "Vegetable Maggi (2 packs)", price: "₹80" },
        { name: "Egg Maggi (2 packs)", price: "₹100" },
        { name: "French Fries", price: "₹90" },
        { name: "Paneer Pakoda (250g)", price: "₹150" },
    ],
    "tab-7": [
        { name: "Gulab Jamun", price: "₹40" },
        { name: "Shevaya Kheer", price: "₹40" },
    ],
    "tab-8": [
        { name: "Tea", price: "₹20" },
        { name: "Black Coffee", price: "₹20" },
        { name: "Coffee", price: "₹30" },
        { name: "Cold Coffee", price: "₹40" },
        { name: "Milk", price: "₹30" },
        { name: "Lemon Juice", price: "₹30" },
        { name: "Buttermilk", price: "₹30" },
        { name: "Packaged Water", price: "₹20" },
    ],
    "tab-9": [
        { name: "Veg Barbeque (1/2kg Paneer)", price: "₹500" },
        { name: "Chicken Barbeque (1/2kg)", price: "₹500" },
    ],
};

type TabKey = keyof typeof menuContent;

export default function MenuTabs() {
    const [activeTab, setActiveTab] = useState<TabKey>("tab-1");

    return (
        <div className="pt-15 pb-20 md:pb-30 md:pt-30 bg-[#f5eee7]">
            <div className="container mx-auto">
                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as TabKey)}
                            className={`px-4 py-2 rounded-full border text-sm font-medium transition
                ${activeTab === tab.id
                                    ? "bg-[#91765a] text-white border-[#91765a]"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-[#f3eee7]"}`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                {/* Menu Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid md:grid-cols-2 gap-0 md:gap-8"
                    >
                        {menuContent[activeTab]?.map((item, idx) => (
                            <div key={idx} className="p-4 border-b">
                                <div className="flex justify-between items-center">
                                    <h5 className="text-base sm:text-lg font-semibold text-[#14100c]">{item.name}</h5>
                                    <span className="text-sm sm:text-base text-[#91765a] font-bold">{item.price}</span>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-500 mt-1">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}