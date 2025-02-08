import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-6 flex items-center justify-between border-b border-neutral-800">

      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-lime-200 rounded-sm"></div>
        <span className="text-lg font-semibold">Portlix</span>
      </div>


      <nav className="hidden md:flex space-x-6">

        <Link href="#" className="text-gray-400 hover:text-white">Templates</Link>
        <Link href="#" className="text-gray-400 hover:text-white">Github</Link>
        <Link href="#" className="text-gray-400 hover:text-white">X</Link>
      </nav>


   
    </header>
  );
};

export default Header;
