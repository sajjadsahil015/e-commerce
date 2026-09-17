'use client'
import BestSellingCard from "./bestSellingCard";
import { useAppSelector } from "@/src/app/store/hooks";


const BestSelling = () => {
    const products = useAppSelector((state) => state.products);
    
    const filteredProducts = products.slice(0,3)
 
  return (
    <div className="mb-[100px] mt-[100px] px-5">
      
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="scroll-m-20 text-2xl lg:text-3xl font-extrabold tracking-tight text-myBlackHead">
          Best Selling Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="max-w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {filteredProducts.map((item,i)=>(
            <BestSellingCard key={i} src={item.image[0]} alt={item.title} title={item.title} desc={item.desc} price={item.price} category={item.category} slug={item.slug} discount={item.discount}/>
        ))}
      </div>
        
    </div>
  );
};

export default BestSelling;