"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

const SlugComponent = ({ image }: { image: StaticImageData[] }) => {
  const [selectedImg, setSelectedImg] = useState<StaticImageData>(image[0]);

  return (
    <div className="flex flex-col items-center w-full max-w-[480px]">
      {/* MAIN IMAGE */}
      <div className="relative w-full aspect-square max-h-[460px] bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-200">
        <Image
          alt="Product showcase"
          src={selectedImg || image[0]}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 480px"
          className="object-cover object-center transition-all duration-300 hover:scale-105"
        />
      </div>

      {/* THUMBNAILS */}
      {image.length > 1 && (
        <div className="flex gap-3 mt-4 justify-center flex-wrap">
          {image.map((img, i) => {
            const isSelected = selectedImg === img || (!selectedImg && i === 0);
            return (
              <button
                key={i}
                type="button"
                className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "border-myOrange ring-2 ring-myOrange/40 scale-105 shadow-sm"
                    : "border-gray-200 opacity-70 hover:opacity-100 hover:border-gray-400"
                }`}
                onClick={() => setSelectedImg(img)}
              >
                <Image
                  alt={`Thumbnail ${i + 1}`}
                  src={img}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SlugComponent;
