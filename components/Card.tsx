"use client";

import React from "react";
import { website } from "@/db/website";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Portfolios = ({ activeCategory }: { activeCategory: string }) => {
 
  const filteredPortfolios =
    activeCategory === "All"
      ? website
      : website.filter((portfolio) => portfolio.category === activeCategory);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 text-white">
      <AnimatePresence mode="wait">
        {filteredPortfolios.map((portfolio) => (
          <motion.div
            key={portfolio.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative bg-[#111] rounded-lg overflow-hidden group transition-transform duration-300 hover:scale-[1.02] border border-neutral-800"
          >
            <Link href={portfolio.url} target="_blank">
              <Image
                src={portfolio.image}
                alt={portfolio.title}
                width={500}
                height={300}
                unoptimized
                className="w-full h-56 object-cover group-hover:opacity-90"
              />
            </Link>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-normal">{portfolio.title}</h3>
                <span className="text-sm text-gray-400">{portfolio.category}</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">{portfolio.description}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Portfolios;
