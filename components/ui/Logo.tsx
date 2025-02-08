import Image from "next/image";
import Vercel from "../../public/logos/vercel";
import Google from "../../public/logos/google";
import Apple from "../../public/logos/apple";
import Microsoft from "../../public/logos/microsoft";
import Zed from "../../public/logos/zed";
import Warp from "../../public/logos/warp";
export default function Logos() {
    return (
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg/8 font-normal text-white">
            Web's & Portfolios Of Workers & Companies.
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Vercel className="size-10"/>
            <Google className="size-10"/>
            <Apple className="size-10"/>
            <Microsoft className="size-10"/>
            <Zed className="size-10"/>

          </div>
        </div>
      </div>
    )
  }
  