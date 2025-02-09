import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl text-white py-4 px-6 flex items-center justify-between border-b border-neutral-800">

      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-lime-200 rounded-sm"></div>
        <span className="text-lg font-semibold">Collweb</span>
      </div>


      <nav className="hidden md:flex space-x-6">

        <Link href="#" className="text-gray-400 hover:text-white">Templates</Link>
        <Link target="_blank" href="https://github.com/DiegoDev2/webport" className="text-gray-400 hover:text-white">Github</Link>
        <Link target="_blank" href="https://x.com/dxb_0x" className="text-gray-400 hover:text-white">X</Link>
      </nav>


   
    </header>
  );
};

export default Header;
