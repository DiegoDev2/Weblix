"use client";
import { motion } from "framer-motion";

const categories = ["All", "Company", "Personal", "3D", "Minimal"];

const CategoryFilter = ({ activeCategory, setActiveCategory }: { activeCategory: string; setActiveCategory: (category: string) => void }) => {
  return (
    <div className="relative text-white py-3 px-6 flex items-center space-x-4 overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`relative px-4 py-2 rounded-lg transition text-gray-300 hover:text-white font-medium text-sm ${
            activeCategory === category ? "text-white" : ""
          }`}
        >
          {category}
          {activeCategory === category && (
            <motion.div
              layoutId="activeCategory"
              className="absolute left-0 bottom-0 w-full h-[2px] bg-lime-200"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
