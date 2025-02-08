import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="text-center">
        Made by <Link href="https://github.com/diegodev2" className="text-lime-200">@DiegoDev2</Link>
      </div>
    </footer>
  );
}
