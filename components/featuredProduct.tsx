"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import BestSellingCard from "./bestSellingCard";
import { useAppSelector } from "@/src/app/store/hooks";

const FeaturedProduct = () => {
  const products = useAppSelector((state) => state.products);

  const filteredProducts = products.slice(0, 7);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // large tablets / small laptops
        settings: {
          slidesToShow: 3,
          dots: false,
        },
      },
      {
        breakpoint: 768, // tablets
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="mb-20 mt-6 w-full">
      <div className="px-4 sm:px-6 lg:px-10 mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl lg:text-3xl font-extrabold text-myBlackHead">
            Featured Products
          </h1>

          <div className="flex mt-2 justify-center mb-4">
            <div className="w-16 h-1 rounded-full bg-myOrange" />
          </div>
        </div>

        {/* Slider */}
        <div className="slider-container">
          <Slider {...settings}>
            {filteredProducts.map((item, i) => (
              <BestSellingCard
                key={i}
                src={item.image?.[0]} // FIXED IMAGE
                alt={item.title}
                title={item.title}
                desc={item.desc}
                price={item.price}
                category={item.category}
                slug={item.slug}
                discount={item.discount}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
