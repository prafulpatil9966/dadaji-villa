"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Tabs for different categories
const tabs = [
    { id: "tab-1", title: "Starters" },
    { id: "tab-2", title: "Main Course" },
    { id: "tab-3", title: "Breads" },
    { id: "tab-4", title: "Rice & Biryani" },
    { id: "tab-5", title: "Desserts" },
    { id: "tab-6", title: "Beverages" },
];

// Menu items per category
const menuContent = {
    "tab-1": [
        { name: "Paneer Tikka", price: "₹250", desc: "Cottage cheese marinated in spices and grilled in a tandoor" },
        { name: "Veg Manchurian", price: "₹220", desc: "Fried vegetable balls in spicy Indo-Chinese gravy" },
        { name: "Chicken 65", price: "₹270", desc: "Spicy deep-fried chicken with South Indian flavors" },
        { name: "Hara Bhara Kebab", price: "₹210", desc: "Spinach and peas patties served with mint chutney" },
        { name: "Samosa Chaat", price: "₹180", desc: "Crushed samosas topped with chutneys, curd, and sev" },
        { name: "Tandoori Mushroom", price: "₹240", desc: "Mushrooms marinated in spices and grilled" },
    ],
    "tab-2": [
        { name: "Butter Chicken", price: "₹320", desc: "Creamy tomato-based curry with tender chicken pieces" },
        { name: "Paneer Butter Masala", price: "₹290", desc: "Paneer cubes in rich butter and tomato gravy" },
        { name: "Dal Makhani", price: "₹250", desc: "Slow-cooked black lentils with cream and butter" },
        { name: "Rogan Josh", price: "₹350", desc: "Kashmiri-style mutton curry with aromatic spices" },
        { name: "Veg Kolhapuri", price: "₹260", desc: "Spicy mixed vegetable curry from Maharashtra" },
        { name: "Palak Paneer", price: "₹270", desc: "Spinach puree with paneer cubes and mild spices" },
    ],
    "tab-3": [
        { name: "Butter Naan", price: "₹45", desc: "Soft and fluffy naan brushed with butter" },
        { name: "Tandoori Roti", price: "₹30", desc: "Whole wheat flatbread cooked in clay oven" },
        { name: "Lachha Paratha", price: "₹50", desc: "Multi-layered crispy paratha" },
        { name: "Missi Roti", price: "₹35", desc: "Spiced gram flour roti with herbs" },
        { name: "Garlic Naan", price: "₹55", desc: "Naan topped with garlic and coriander" },
    ],
    "tab-4": [
        { name: "Veg Biryani", price: "₹260", desc: "Fragrant basmati rice with spiced vegetables" },
        { name: "Chicken Biryani", price: "₹310", desc: "Layered rice and chicken cooked with saffron and spices" },
        { name: "Jeera Rice", price: "₹160", desc: "Basmati rice tempered with cumin" },
        { name: "Curd Rice", price: "₹140", desc: "South Indian rice mixed with curd and tempering" },
        { name: "Mutton Biryani", price: "₹370", desc: "Slow-cooked mutton layered with aromatic rice" },
        { name: "Pulao", price: "₹220", desc: "Mildly spiced rice with vegetables and herbs" },
    ],
    "tab-5": [
        { name: "Gulab Jamun", price: "₹100", desc: "Soft deep-fried dough balls soaked in sugar syrup" },
        { name: "Rasmalai", price: "₹120", desc: "Cottage cheese dumplings in saffron milk" },
        { name: "Jalebi", price: "₹80", desc: "Crispy fried sweet soaked in saffron syrup" },
        { name: "Kheer", price: "₹90", desc: "Rice pudding flavored with cardamom and nuts" },
        { name: "Gajar Ka Halwa", price: "₹110", desc: "Grated carrot cooked in milk and ghee" },
    ],
    "tab-6": [
        { name: "Masala Chai", price: "₹40", desc: "Traditional Indian spiced tea" },
        { name: "Filter Coffee", price: "₹45", desc: "South Indian-style strong coffee" },
        { name: "Sweet Lassi", price: "₹60", desc: "Yogurt-based sweet drink" },
        { name: "Buttermilk (Chaas)", price: "₹50", desc: "Spiced yogurt drink with cumin and coriander" },
        { name: "Fresh Lime Soda", price: "₹55", desc: "Refreshing soda with lime juice" },
        { name: "Mango Lassi", price: "₹70", desc: "Sweet mango and yogurt drink" },
    ],
};


type TabKey = keyof typeof menuContent;

export default function MenuTabs() {
    const [activeTab, setActiveTab] = useState<TabKey>("tab-1");

    return (
        <div className="py-20 md:pb-30 md:pt-30 bg-[#f5eee7]">
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
                                    <h5 className="text-lg font-semibold text-[#14100c]">{item.name}</h5>
                                    <span className="text-[#91765a] font-bold">{item.price}</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}