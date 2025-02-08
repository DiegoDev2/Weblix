"use client";
import { useState } from "react";
import { FaGithub, FaHeart, FaLink } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface PortafolioProps {
  portfolio: {
    id: number;
    name: string;
    image: string;
    github?: string;
    website?: string;
  };
}

export function Portafolio({ portfolio }: PortafolioProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="relative bg-transparent rounded-xl overflow-hidden shadow-lg transition hover:scale-[1.02] hover:shadow-xl">
      <Image
        src={portfolio.image} 
        alt={portfolio.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white">{portfolio.name}</h3>
        <div className="flex items-center justify-between">

          <div className="flex space-x-3">
            {portfolio.github && (
              <Link href={portfolio.github} target="_blank" className="text-gray-400 hover:text-white transition">
                <FaGithub size={20} />
              </Link>
            )}
            {portfolio.website && (
              <Link href={portfolio.website} target="_blank" className="text-gray-400 hover:text-white transition">
                <FaLink size={20} />
              </Link>
            )}
          </div>


          <button 
            onClick={() => setLiked(!liked)}
            className="flex items-center space-x-1 text-gray-400 hover:text-red-500 transition"
          >
            <FaHeart size={20} color={liked ? "red" : "gray"} />
            <span>{liked ? "Loved" : "Love"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
