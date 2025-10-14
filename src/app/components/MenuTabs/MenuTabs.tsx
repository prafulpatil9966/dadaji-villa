"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Tabs for different categories
const tabs = [
    { id: "tab-1", title: "Breakfast" },
    { id: "tab-2", title: "Snacks" },
    { id: "tab-3", title: "Sweet Dish" },
    { id: "tab-4", title: "Beverages" },
    { id: "tab-5", title: "Extra" },
    { id: "tab-6", title: "Barbeque" },
    { id: "tab-7", title: "Main Course (Veg)" },
    { id: "tab-8", title: "Main Course (Non-Veg)" },
    { id: "tab-9", title: "Rice" },
    { id: "tab-10", title: "Starter" },
];

// Menu items per category (from your image)
const menuContent = {
    "tab-1": [
        { name: "Poha/Upma/Sheera", price: "₹70", desc: "Traditional Indian breakfast options made with flattened rice, semolina, or sweet semolina pudding." },
        { name: "Idli/Dosa/Uttappa", price: "₹80", desc: "South Indian favorites served with chutney and sambar." },
        { name: "Misal Pav", price: "₹80", desc: "Spicy Maharashtrian curry made with sprouts, served with pav." },
        { name: "Sabudana Khichdi", price: "₹90", desc: "Sago pearls sautéed with peanuts, potatoes, and mild spices." },
        { name: "Puri Bhaji", price: "₹90", desc: "Deep-fried puris served with spiced potato curry." },
        { name: "Thalipeeth", price: "₹80", desc: "Multigrain savory pancake popular in Maharashtra." },
        { name: "Aloo Paratha", price: "₹80", desc: "Stuffed Indian flatbread filled with spiced mashed potatoes." },
        { name: "Paneer Paratha", price: "₹90", desc: "Stuffed flatbread filled with grated paneer and spices." },
        { name: "Egg Omlette", price: "₹80", desc: "Classic egg omelet seasoned with herbs and spices." },
        { name: "Egg Burji", price: "₹90", desc: "Scrambled eggs cooked with onion, tomato, and masala." },
        { name: "Cheese Egg Omlette", price: "₹100", desc: "Fluffy omelet stuffed with cheese and herbs." },
        { name: "Bread Butter (4 slices)", price: "₹50", desc: "Toasted bread served with butter." },
    ],
    "tab-2": [
        { name: "Kanda/Aloo Bhaji", price: "₹70", desc: "Spiced onion or potato fritters served with chutney." },
        { name: "Mix Bhaji", price: "₹90", desc: "Crispy assorted vegetable fritters deep fried to perfection." },
        { name: "Veg Maggi (2 packs)", price: "₹80", desc: "Instant noodles cooked with mixed vegetables and spices." },
        { name: "Egg Maggi (2 packs)", price: "₹90", desc: "Masala noodles cooked with scrambled eggs." },
    ],
    "tab-3": [
        { name: "Gulab Jamun", price: "₹40", desc: "Soft fried milk balls soaked in warm sugar syrup." },
        { name: "Shevaya Kheer", price: "₹50", desc: "Sweet vermicelli pudding made with milk and cardamom." },
    ],
    "tab-4": [
        { name: "Tea", price: "₹20", desc: "Traditional Indian chai with milk and spices." },
        { name: "Coffee", price: "₹30", desc: "Freshly brewed hot coffee with milk." },
        { name: "Cold Coffee", price: "₹50", desc: "Chilled blended coffee with milk and sugar." },
        { name: "Milk", price: "₹30", desc: "Hot or cold milk served plain or sweetened." },
        { name: "Lemon Juice", price: "₹30", desc: "Refreshing lemonade made with fresh lemon and sugar." },
        { name: "Buttermilk", price: "₹40", desc: "Cool and lightly salted yogurt-based drink." },
        { name: "Packaged Water", price: "₹20", desc: "Sealed bottle of drinking water." },
    ],
    "tab-5": [
        { name: "Chapati", price: "₹20", desc: "Soft whole wheat flatbread." },
        { name: "Fulka", price: "₹25", desc: "Puffed roti made on an open flame." },
        { name: "Bhakari", price: "₹30", desc: "Traditional thick flatbread made from jowar or bajra." },
        { name: "Raita", price: "₹50", desc: "Curd mixed with cucumber or boondi and mild spices." },
        { name: "Green Salad", price: "₹80", desc: "Fresh seasonal salad with cucumber, tomato, and onion." },
        { name: "Pav (2 nos)", price: "₹30", desc: "Soft and fluffy Indian bread rolls." },
        { name: "Bread (4 slices)", price: "₹40", desc: "Plain toasted bread slices." },
        { name: "Curd", price: "₹50", desc: "Fresh homemade yogurt." },
    ],
    "tab-6": [
        { name: "Veg Barbeque (1/2 kg Paneer)", price: "₹680", desc: "Grilled paneer cubes marinated in smoky spices." },
        { name: "Chicken Barbeque (1/2 kg)", price: "₹680", desc: "Juicy chicken pieces grilled with spicy marinade." },
    ],
    "tab-7": [
        { name: "Pithla Bhakari", price: "₹110", desc: "Maharashtrian gram flour curry served with bhakari." },
        { name: "Dal Fry/Tadka", price: "₹120", desc: "Yellow lentils cooked and tempered with ghee and spices." },
        { name: "Sabji (as per availability)", price: "₹80", desc: "Daily special vegetable curry prepared Indian style." },
        { name: "Paneer Burji (250g)", price: "₹180", desc: "Scrambled paneer cooked with onions and tomatoes." },
        { name: "Paneer Masala (250g)", price: "₹200", desc: "Paneer cubes simmered in onion-tomato gravy." },
        { name: "Paneer Mutter (250g)", price: "₹220", desc: "Curry of paneer and green peas in rich tomato sauce." },
    ],
    "tab-8": [
        { name: "Egg Curry", price: "₹160", desc: "Boiled eggs simmered in spicy onion-tomato gravy." },
        { name: "Chicken Hakka Noodles", price: "₹160", desc: "Stir-fried noodles with vegetables and shredded chicken." },
        { name: "Chicken Handi (1/2 kg)", price: "₹480", desc: "Creamy chicken curry cooked in handi style." },
        { name: "Chicken Handi (1 kg)", price: "₹900", desc: "Full portion of rich handi-style chicken curry." },
        { name: "Chicken Malwani (1/2 kg)", price: "₹480", desc: "Spicy coconut-based Malwani chicken curry." },
        { name: "Chicken Malwani (1 kg)", price: "₹900", desc: "Authentic Malwani-style chicken curry in large portion." },
        { name: "Chicken Kolhapuri (1/2 kg)", price: "₹480", desc: "Hot and spicy chicken curry from Kolhapur." },
        { name: "Chicken Kolhapuri (1 kg)", price: "₹900", desc: "Large portion of fiery Kolhapuri chicken curry." },
        { name: "Mutton Handi (1/2 kg)", price: "₹750", desc: "Slow-cooked mutton curry with rich spices." },
        { name: "Mutton Handi (1 kg)", price: "₹1400", desc: "Large portion of rich handi-style mutton curry." },
        { name: "Mutton Sukha (1/2 kg)", price: "₹480", desc: "Dry-style mutton preparation with roasted spices." },
        { name: "Chicken Sukha (1/2 kg)", price: "₹450", desc: "Dry chicken cooked with coconut and spices." },
    ],
    "tab-9": [
        { name: "Steam Rice", price: "₹100", desc: "Plain steamed basmati rice." },
        { name: "Jeera Rice", price: "₹120", desc: "Rice cooked with cumin seeds and ghee." },
        { name: "Dal Khichdi", price: "₹160", desc: "Rice and lentil mix cooked to soft perfection." },
        { name: "Veg Fried Rice", price: "₹160", desc: "Fried rice with assorted vegetables and soy flavor." },
        { name: "Chicken Fried Rice", price: "₹180", desc: "Fried rice tossed with chicken and sauces." },
        { name: "Veg Pulav (1kg)", price: "₹600", desc: "Fragrant rice cooked with vegetables and mild spices." },
        { name: "Veg Biryani (1/2 kg)", price: "₹450", desc: "Half portion of spiced vegetable biryani." },
        { name: "Veg Biryani (1 kg)", price: "₹800", desc: "Aromatic rice with mixed vegetables and spices." },
        { name: "Egg Biryani (1/2 kg)", price: "₹450", desc: "Basmati rice layered with egg masala and spices." },
        { name: "Egg Biryani (1 kg)", price: "₹800", desc: "Full portion of aromatic egg biryani." },
        { name: "Chicken Biryani (1/2 kg)", price: "₹550", desc: "Spiced chicken biryani with basmati rice." },
        { name: "Chicken Biryani (1 kg)", price: "₹1000", desc: "Classic chicken biryani served in full portion." },
        { name: "Mutton Biryani (1/2 kg)", price: "₹750", desc: "Half portion of flavorful mutton biryani." },
        { name: "Mutton Biryani (1 kg)", price: "₹1300", desc: "Full portion of rich and aromatic mutton biryani." },
    ],
    "tab-10": [
        { name: "Boiled Egg (2 eggs)", price: "₹40", desc: "Boiled eggs served hot with salt and pepper." },
        { name: "Egg Pakoda (5 eggs)", price: "₹180", desc: "Crispy egg fritters coated with spiced batter." },
        { name: "Paneer 65 (250g)", price: "₹180", desc: "South Indian-style spicy fried paneer starter." },
        { name: "Paneer Chilly (250g)", price: "₹200", desc: "Paneer stir-fried with capsicum and Indo-Chinese sauces." },
        { name: "Chicken 65 (250g)", price: "₹220", desc: "Crispy spicy deep-fried chicken pieces." },
        { name: "Chicken Chilly (250g)", price: "₹220", desc: "Chicken tossed with onions, peppers, and sauces." },
        { name: "Papad", price: "₹20", desc: "Crispy thin lentil cracker." },
        { name: "Masala Papad", price: "₹40", desc: "Papad topped with onions, tomatoes, and masala." },
        { name: "Peanut Masala", price: "₹100", desc: "Boiled peanuts mixed with chopped onion, tomato & lemon." },
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