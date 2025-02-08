import Logos from "@/components/ui/Logo";
export default function Entry() {
  return (
    <main className="relative bg-black text-white flex flex-col items-center justify-center px-16 py-32 border-b border-neutral-800">
  
      <div className="absolute inset-0 flex justify-between w-full px-32">
        <hr className="border-neutral-800 w-px h-full border-l-2 border-dotted" />
        <hr className="w-px h-full bg-neutral-800 border-dotted" />
        <hr className="border-neutral-800 w-px h-full border-l-2 border-dotted" />
        <hr className="w-px h-full bg-neutral-800 border-dotted" />
      </div>

    
      <section className="text-center max-w-3xl mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-normal">
          Join amazing developers & designers community  
          shaping <span className="text-lime-200">the next generation of digital experiences.</span>
        </h1>
        <Logos />
      </section>

    </main>
  );
}
