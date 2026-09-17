import Image from 'next/image';
import tops from '../public/tops.jpg';
import pants from '../public/pants.jpg';
import accessories from '../public/accessories.jpg';
import shoes from '../public/shoes.jpg';
import Link from 'next/link';
import React from 'react';

const categoriesList = [
  {
    title: "Tops & Shirts",
    href: "/tops",
    img: tops,
    alt: "Women's Tops and Shirts",
  },
  {
    title: "Pants & Trousers",
    href: "/pants",
    img: pants,
    alt: "Women's Pants and Trousers",
  },
  {
    title: "Accessories & Jewelry",
    href: "/accessories",
    img: accessories,
    alt: "Women's Accessories and Jewelry",
  },
  {
    title: "Footwear & Shoes",
    href: "/shoes",
    img: shoes,
    alt: "Women's Shoes and Heels",
  },
];

const Categories = () => {
  return (
    <section className="my-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="scroll-m-20 text-2xl lg:text-3xl font-extrabold tracking-tight text-myBlackHead">
          Explore Our Categories
        </h2>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoriesList.map((cat, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl group relative shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Link href={cat.href} className="block relative h-96 w-full">
              <Image
                alt={cat.alt}
                src={cat.img}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-xs font-semibold text-myOrange uppercase tracking-widest mb-1">
                  Collection
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {cat.title}
                </h3>
                <span className="text-xs font-medium text-white/80 mt-1 inline-flex items-center gap-1 group-hover:text-myOrange transition-colors">
                  Shop Now &rarr;
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;