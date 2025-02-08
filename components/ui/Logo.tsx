import Vercel from "../../public/logos/vercel";
import Google from "../../public/logos/google";
import Apple from "../../public/logos/apple";
import Microsoft from "../../public/logos/microsoft";
import Zed from "../../public/logos/zed";

export default function Logos() {
    return (
      <div className="py-24 sm:py-32 flex justify-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg/8 font-normal text-white">
            Web&apos;s & Portfolios Of Workers & Companies.
          </h2>
          <div className="flex justify-center items-center mt-10 gap-x-16 gap-y-10 sm:max-w-xl sm:grid-cols-6 lg:max-w-none">
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
