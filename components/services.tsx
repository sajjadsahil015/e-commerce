import Image from 'next/image';
import van from '../public/van.png';
import React from 'react';
import customerService from '../public/customerService.png'
import money from '../public/Money.png'


const Services = () => {
  return (
    <section className="body-font mb-20 mt-20"> 
      <div className="container px-5 mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="scroll-m-20 text-2xl lg:text-3xl font-extrabold tracking-tight text-myBlackHead">
            Our Services
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
          </div>
        </div>

        {/* Services Grid (FULLY RESPONSIVE, NO HORIZONTAL SCROLL) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">

          {/* Service Item 1 */}
          <div className="flex flex-col items-center group text-center">

            <Image alt="Delivery" src={van} width={80} height={80} className="w-20 h-20 mb-4" />

            <h2 className="text-myBlackHead text-xl font-bold tracking-tight capitalize group-hover:text-myOrange duration-300">
              Free Delivery
            </h2>
            <p className="line-clamp-2 text-base text-myBlackPara font-semibold tracking-tight mt-2 group-hover:text-myBlackPara/80 duration-300">
              Free Delivery on Above Rs2999
            </p>
          </div>

          {/* Service Item 2 */}
          <div className="flex flex-col items-center group text-center">

            <Image alt="Customer Service" src={customerService} width={80} height={80} className="w-20 h-20 mb-4" />

            <h2 className="text-myBlackHead text-xl font-bold tracking-tight capitalize group-hover:text-myOrange duration-300">
              24/7 Customer Service
            </h2>
            <p className="line-clamp-2 text-base text-myBlackPara font-semibold tracking-tight mt-2 group-hover:text-myBlackPara/80 duration-300">
              For Queries and Questions Feel Free to Contact
            </p>
          </div>

          {/* Service Item 3 */}
          <div className="flex flex-col items-center group text-center">

            <Image alt="Money Back Guarantee" src={money} width={80} height={80} className="w-20 h-20 mb-4" />

            <h2 className="text-myBlackHead text-xl font-bold tracking-tight capitalize group-hover:text-myOrange duration-300">
              Money Back Guarantee
            </h2>
            <p className="line-clamp-2 text-base text-myBlackPara font-semibold tracking-tight mt-2 group-hover:text-myBlackPara/80 duration-300">
              Get Money Back Guarantee on Damaged Product
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
