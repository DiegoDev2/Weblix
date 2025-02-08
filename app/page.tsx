import CategoryFilter from "@/components/Categories";
import Header from "@/components/Header";
import Entry from "@/components/Entry";
import PortafoliosCard from "@/components/Card";

import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      
       <Header />
       <Entry />
       <CategoryFilter />
       <PortafoliosCard />
       <Footer />

    </>
   
    
  );
}
