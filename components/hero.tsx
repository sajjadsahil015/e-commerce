import { Button } from "./ui/button";
import { AiFillShopping } from "react-icons/ai";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mb-16">
      <div className="hero min-h-[75vh] custom-img bg-cover bg-fixed bg-center bg-no-repeat rounded-2xl overflow-hidden shadow-sm relative">
        <div className="hero-overlay inset-0 bg-black/45 backdrop-blur-[1px]"></div>
        <div className="hero-content text-neutral-content text-center py-12 px-4 relative z-10">
          <div className="max-w-lg">
            <span className="inline-block py-1 px-3 rounded-full bg-myOrange/20 border border-myOrange text-myOrange text-xs font-bold uppercase tracking-widest mb-4">
              New Season Arrivals 2025
            </span>
            <h1 className="mb-5 scroll-m-20 text-center text-4xl sm:text-5xl font-extrabold tracking-tight text-balance text-mywhite">
              Futuristic <span className="text-myOrange">Fashion</span>
            </h1>
            <p className="mb-8 text-base sm:text-lg font-medium text-mywhite/90 max-w-md mx-auto leading-relaxed">
              Elevate your wardrobe with our stunning new collection. Discover essential clothing, luxury accessories, and must-have footwear today.
            </p>
            <Link href="/tops">
              <Button className="bg-myOrange text-mywhite border-0 hover:bg-myOrange/90 rounded-full px-8 py-6 group cursor-pointer shadow-lg hover:shadow-myOrange/40 duration-300">
                <AiFillShopping className="text-mywhite text-2xl group-hover:scale-125 duration-300" />
                <span className="font-bold text-base ml-2">Shop Collection</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
