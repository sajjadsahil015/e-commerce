import BestSelling from "@/components/bestSelling";
import Categories from "@/components/categories";
import FeaturedProduct from "@/components/featuredProduct";
import Hero from "@/components/hero";
import Promotion from "@/components/promotion";
import Services from "@/components/services";

export default function Home() {
  return (
    <div>
      <Hero/>
      <FeaturedProduct/>
      <Services/>
      <Promotion/>
      <Categories/>
      <BestSelling/>
    </div>
  )
  
}
