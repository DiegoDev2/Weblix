"use client"; // Convertimos Home.tsx en un Client Component

import { useState } from "react";
import CategoryFilter from "@/components/Categories";
import Header from "@/components/Header";
import Entry from "@/components/Entry";
import PortfoliosCard from "@/components/Card";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <Header />
      <Entry />
      
      <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <PortfoliosCard activeCategory={activeCategory} /> 
      <Footer />
    </>
  );
}
