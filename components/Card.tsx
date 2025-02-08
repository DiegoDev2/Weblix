import React from "react";
import { portafolios } from "@/const/portafolios";
import Image from "next/image";
import Link from "next/link";
import { BookmarkIcon } from "@heroicons/react/24/outline";

const Portfolios = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6  text-white">
      {portafolios.map((portfolio) => (
        <div
          key={portfolio.id}
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


            <div className="absolute top-4 right-4 opacity-60 hover:opacity-100 cursor-pointer">
              <BookmarkIcon className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolios;

