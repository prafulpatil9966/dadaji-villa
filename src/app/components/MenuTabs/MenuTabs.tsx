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
        { name: "Boiled Egg (2 eggs)", price: "₹35", desc: "Simple boiled eggs served hot with salt & pepper." },
        { name: "Egg Pakoda (5 eggs)", price: "₹120", desc: "Crispy deep-fried egg fritters coated with spiced batter." },
        { name: "Paneer 65 (250g)", price: "₹160", desc: "South Indian-style spicy paneer starter." },
        { name: "Paneer Chilly (250g)", price: "₹180", desc: "Paneer tossed with capsicum & onions in Indo-Chinese style." },
        { name: "Chicken 65 (250g)", price: "₹200", desc: "Crispy and spicy deep-fried chicken bites." },
        { name: "Chicken Chilly (250g)", price: "₹200", desc: "Chicken stir-fried with spicy sauces, onions, and capsicum." },
        { name: "Chicken Sukha (1/2kg)", price: "₹500", desc: "Dry-style chicken cooked with spices & coconut." },
        { name: "Mutton Sukha (1/2kg)", price: "₹700", desc: "Flavorful dry mutton preparation with spices." },
    ],
    "tab-2": [
        { name: "Pithla Bhakari", price: "₹80", desc: "Traditional Maharashtrian curry made with gram flour, served with bhakari." },
        { name: "Dal Fry/Tadka", price: "₹100", desc: "Yellow dal tempered with spices & ghee." },
        { name: "Sabji (as per availability)", price: "₹140", desc: "Seasonal vegetable curry prepared in Indian style." },
        { name: "Dal Khichdi", price: "₹140", desc: "Comforting mix of rice and lentils cooked with mild spices." },
        { name: "Paneer Burji (250g)", price: "₹160", desc: "Scrambled paneer cooked with onions, tomatoes, and spices." },
        { name: "Paneer Masala (250g)", price: "₹170", desc: "Paneer cooked in a rich onion-tomato gravy." },
        { name: "Paneer Mutter (250g)", price: "₹180", desc: "Paneer and peas curry in a spiced tomato gravy." },
    ],
    "tab-3": [
        { name: "Egg Curry/Masala", price: "₹120", desc: "Boiled eggs cooked in a spicy onion-tomato gravy." },
        { name: "Chicken Handi (1kg)", price: "₹750", desc: "Creamy & rich chicken curry served in a handi style." },
        { name: "Chicken Handi (1/2kg)", price: "₹400", desc: "Smaller portion of creamy handi-style chicken curry." },
        { name: "Chicken Malwani (1kg)", price: "₹750", desc: "Authentic Malwani-style spicy chicken curry." },
        { name: "Chicken Malwani (1/2kg)", price: "₹400", desc: "Half portion of Malwani-style chicken curry." },
        { name: "Chicken Kolhapuri (1kg)", price: "₹750", desc: "Fiery & spicy chicken curry from Kolhapur." },
        { name: "Chicken Kolhapuri (1/2kg)", price: "₹400", desc: "Half portion of Kolhapuri-style chicken curry." },
        { name: "Mutton Handi (1kg)", price: "₹1400", desc: "Rich & flavorful mutton curry served handi-style." },
        { name: "Mutton Handi (1/2kg)", price: "₹750", desc: "Half portion of rich mutton handi curry." },
    ],
    "tab-4": [
        { name: "Chapati", price: "₹15", desc: "Soft wheat flour flatbread." },
        { name: "Fulka", price: "₹20", desc: "Puffed roti made on open flame." },
        { name: "Bhakari", price: "₹25", desc: "Thick flatbread made from jowar or bajra." },
        { name: "Papad", price: "₹20", desc: "Crispy thin lentil cracker." },
        { name: "Masala Papad", price: "₹35", desc: "Crispy papad topped with onions, tomatoes, and spices." },
        { name: "Peanut Masala", price: "₹50", desc: "Boiled peanuts tossed with onion, tomato & masala." },
        { name: "Raita", price: "₹50", desc: "Curd-based side dish with cucumber or boondi." },
        { name: "Green Salad", price: "₹70", desc: "Fresh seasonal vegetable salad." },
        { name: "Pav (2 nos)", price: "₹15", desc: "Soft Indian bread rolls." },
        { name: "Bread (4 slices)", price: "₹15", desc: "Plain sliced bread." },
        { name: "Curd", price: "₹30", desc: "Fresh homemade curd." },
    ],
    "tab-5": [
        { name: "Steam Rice", price: "₹80", desc: "Plain steamed rice." },
        { name: "Jeera Rice", price: "₹100", desc: "Rice cooked with cumin seeds." },
        { name: "Veg Pulav (1kg)", price: "₹600", desc: "Fragrant rice cooked with mixed vegetables & spices." },
        { name: "Veg Biryani (1kg)", price: "₹800", desc: "Aromatic basmati rice cooked with vegetables & spices." },
        { name: "Veg Biryani (1/2kg)", price: "₹450", desc: "Half portion of veg biryani." },
        { name: "Egg Biryani (1kg)", price: "₹800", desc: "Basmati rice layered with eggs & spices." },
        { name: "Egg Biryani (1/2kg)", price: "₹450", desc: "Half portion of egg biryani." },
        { name: "Chicken Biryani (1kg)", price: "₹1000", desc: "Classic chicken biryani with aromatic spices." },
        { name: "Chicken Biryani (1/2kg)", price: "₹550", desc: "Half portion of chicken biryani." },
        { name: "Mutton Biryani (1kg)", price: "₹1300", desc: "Rich & flavorful mutton biryani." },
        { name: "Mutton Biryani (1/2kg)", price: "₹750", desc: "Half portion of mutton biryani." },
    ],
    "tab-6": [
        { name: "Kanda/Batata Bhaji", price: "₹70", desc: "Spiced onion or potato fritters." },
        { name: "Mix Bhaji", price: "₹80", desc: "Crispy mixed vegetable fritters." },
        { name: "Vegetable Maggi (2 packs)", price: "₹80", desc: "Maggi noodles cooked with mixed vegetables." },
        { name: "Egg Maggi (2 packs)", price: "₹100", desc: "Maggi noodles cooked with scrambled eggs." },
        { name: "French Fries", price: "₹90", desc: "Golden crispy fried potato fries." },
        { name: "Paneer Pakoda (250g)", price: "₹150", desc: "Crispy batter-fried paneer fritters." },
    ],
    "tab-7": [
        { name: "Gulab Jamun", price: "₹40", desc: "Sweet dumplings soaked in sugar syrup." },
        { name: "Shevaya Kheer", price: "₹40", desc: "Vermicelli pudding cooked in milk & sugar." },
    ],
    "tab-8": [
        { name: "Tea", price: "₹20", desc: "Refreshing Indian chai." },
        { name: "Black Coffee", price: "₹20", desc: "Strong and hot black coffee." },
        { name: "Coffee", price: "₹30", desc: "Hot milk coffee." },
        { name: "Cold Coffee", price: "₹40", desc: "Chilled coffee blended with milk & sugar." },
        { name: "Milk", price: "₹30", desc: "Plain hot or cold milk." },
        { name: "Lemon Juice", price: "₹30", desc: "Refreshing lemon drink." },
        { name: "Buttermilk", price: "₹30", desc: "Cooling yogurt-based drink." },
        { name: "Packaged Water", price: "₹20", desc: "Bottled drinking water." },
    ],
    "tab-9": [
        { name: "Veg Barbeque (1/2kg Paneer)", price: "₹500", desc: "Smoky grilled paneer marinated with spices." },
        { name: "Chicken Barbeque (1/2kg)", price: "₹500", desc: "Charcoal-grilled chicken with spicy marinade." },
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