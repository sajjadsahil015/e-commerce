import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import BestSellingAddToCart from "./BestSellingAddToCart";

const BestSellingCard = ({
  src,
  alt,
  title,
  desc,
  price,
  discount,
  category,
  slug,
}: {
  src: StaticImageData;
  alt: string;
  title: string;
  desc: string;
  price: number;
  discount: number;
  category: string;
  slug: string;
}) => {
  const finalPrice = discount > 0 ? price - discount : price;

  return (
    <div className="w-full max-w-[340px] bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 mx-auto relative group border border-gray-100 flex flex-col justify-between">
      <Link href={`/${category}/${slug}`} className="block">
        <div className="relative rounded-xl h-[300px] overflow-hidden bg-gray-50">
          <Image
            src={src}
            alt={alt || title}
            fill
            sizes="(max-width: 768px) 100vw, 340px"
            className="object-cover object-center group-hover:scale-105 duration-500"
          />
          {discount > 0 && (
            <span className="absolute top-3 left-3 bg-myOrange text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
              Save Rs. {discount}
            </span>
          )}
        </div>

        <div className="mt-4">
          <span className="text-[11px] font-bold text-myOrange uppercase tracking-widest block mb-1">
            {category}
          </span>
          <h3 className="line-clamp-1 text-base text-myBlackHead font-bold tracking-tight group-hover:text-myOrange transition-colors">
            {title}
          </h3>
          <p className="mt-1 text-xs text-myBlackPara/80 font-normal line-clamp-2 leading-relaxed">
            {desc}
          </p>

          <div className="flex items-baseline gap-2 mt-3">
            <span className="text-base font-extrabold text-myBlackHead">
              Rs. {finalPrice.toLocaleString()}
            </span>
            {discount > 0 && (
              <span className="text-xs text-gray-400 line-through">
                Rs. {price.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Buttons Section */}
      <div className="flex justify-between mt-4 gap-2 pt-3 border-t border-gray-100 items-center">
        <div className="w-1/2">
          <BestSellingAddToCart slug={slug} />
        </div>
        <Link href={`/${category}/${slug}`} className="w-1/2">
          <Button className="w-full group cursor-pointer bg-myBlackHead hover:bg-myOrange text-mywhite duration-300 border-0 rounded-lg text-xs font-semibold h-9 shadow-sm">
            <FaHeart className="mr-1.5 text-xs group-hover:scale-125 duration-300" />
            View Item
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BestSellingCard;