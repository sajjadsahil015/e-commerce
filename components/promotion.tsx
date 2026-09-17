import React from "react";
import Link from "next/link";

const Promotion = () => {
  return (
    <section className="my-20">
      <div className="text-center mb-10">
        <h2 className="scroll-m-20 text-2xl lg:text-3xl font-extrabold tracking-tight text-myBlackHead">
          Special Promotions
        </h2>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 1st Promotion Block */}
        <Link href="/tops" className="block group">
          <div className="min-h-[320px] promo1 bg-cover bg-center rounded-2xl relative overflow-hidden shadow-md flex items-center justify-center p-6 transition-transform duration-300 group-hover:scale-[1.02]">
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
            <div className="text-center relative z-10 max-w-md">
              <span className="inline-block py-1 px-3 rounded-full bg-myOrange/90 text-white text-xs font-bold uppercase tracking-wider mb-3">
                Season Clearance
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight mb-2">
                Get up to <span className="text-myOrange">60% Off</span>
              </h3>
              <p className="text-sm sm:text-base font-medium text-white/90 mb-4">
                Flash sale on our most loved seasonal apparel and essentials.
              </p>
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-mywhite bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/40 group-hover:bg-myOrange group-hover:border-myOrange transition-all">
                Shop Tops &rarr;
              </span>
            </div>
          </div>
        </Link>

        {/* 2nd Promotion Block */}
        <Link href="/shoes" className="block group">
          <div className="min-h-[320px] promo2 bg-cover bg-center rounded-2xl relative overflow-hidden shadow-md flex items-center justify-center p-6 transition-transform duration-300 group-hover:scale-[1.02]">
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
            <div className="text-center relative z-10 max-w-md">
              <span className="inline-block py-1 px-3 rounded-full bg-myOrange/90 text-white text-xs font-bold uppercase tracking-wider mb-3">
                Footwear Spotlight
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight mb-2">
                Get up to <span className="text-myOrange">30% Off</span>
              </h3>
              <p className="text-sm sm:text-base font-medium text-white/90 mb-4">
                Exclusive limited-time discount on brand new shoe arrivals.
              </p>
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-mywhite bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/40 group-hover:bg-myOrange group-hover:border-myOrange transition-all">
                Shop Footwear &rarr;
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Promotion;