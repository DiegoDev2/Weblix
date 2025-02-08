import CategoryFilter from "@/components/Categories";
import Header from "@/components/Header";
import { Portafolios } from "@/components/Portafolios";


export default function Home() {
  return (
    <>
       <Header />
       <CategoryFilter />
       <Portafolios />
    </>
   
    
  );
}
