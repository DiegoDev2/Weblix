"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const categories = [
  "All", "Worker", "Personal", "3D", "Minimal"
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    setActiveCategory("All");
  }, []);

  if (activeCategory === null) return null;

  return (
    <div className="relative text-white py-3 px-6 flex items-center space-x-4 overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className="relative px-4 py-2 rounded-lg transition text-gray-300 hover:text-white font-medium text-sm"
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
