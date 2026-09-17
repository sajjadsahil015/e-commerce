import whiteShirt from '@/public/whiteShirt.jpg'
import blackShirt from '@/public/blackShirt.jpg'
import blackShoes from '@/public/blackShoes.jpg'
import pants from '@/public/pants.jpg'
import heroPic from '@/public/heroPic.jpg'
import tops from '@/public/tops.jpg'
import shoes from '@/public/shoes.jpg'
import accessories from '@/public/accessories.jpg'
import promo1 from '@/public/promo1.jpg'
import { Products } from './type'

export const products: Products[] = [
  {
    id: 1,
    title: "Classic White Cotton T-Shirt",
    image: [whiteShirt, blackShirt, tops],
    slug: 'classic-white-t-shirt',
    price: 1200,
    discount: 200,
    category: 'tops',
    desc: "Premium 100% breathable combed cotton t-shirt with a relaxed fit. Soft on skin and ideal for casual daily wear.",
    color: ["#ffffff", "#000000", "#e0e0e0"],
    size: ["sm", "md", "lg", "xl"],
    qty: 1
  },
  {
    id: 2,
    title: "Premium Black Fitted Shirt",
    image: [blackShirt, tops, whiteShirt],
    slug: 'premium-black-fitted-shirt',
    price: 1600,
    discount: 300,
    category: 'tops',
    desc: "Tailored black shirt crafted with fine-stretch fabric for an effortlessly sleek silhouette and all-day comfort.",
    color: ["#000000", "#222831", "#ffffff"],
    size: ["sm", "md", "lg", "xl"],
    qty: 1
  },
  {
    id: 3,
    title: "Tailored Smart Casual Pants",
    image: [pants, heroPic],
    slug: 'tailored-smart-casual-pants',
    price: 2500,
    discount: 400,
    category: 'pants',
    desc: "Contemporary high-waisted tailored pants designed with premium drape, functional pockets, and an elasticated comfort back.",
    color: ["#2b2b2b", "#4a4a4a", "#1a1a1a"],
    size: ["sm", "md", "lg", "xl"],
    qty: 1
  },
  {
    id: 4,
    title: "Chic Luxury Designer Accessories",
    image: [accessories, promo1],
    slug: 'chic-luxury-designer-accessories',
    price: 3200,
    discount: 500,
    category: 'accessories',
    desc: "Handcrafted accessories set including a signature handbag and coordinated accent jewelry to complete any ensemble.",
    color: ["#c5a880", "#222831", "#fd7014"],
    size: ["one-size"],
    qty: 1
  },
  {
    id: 5,
    title: "Signature Black Stiletto Pumps",
    image: [blackShoes, shoes],
    slug: 'signature-black-stiletto-pumps',
    price: 4200,
    discount: 600,
    category: 'shoes',
    desc: "Timeless black stiletto pumps featuring cushioned insoles, elegant pointed toes, and sturdy balance for events and work.",
    color: ["#000000", "#1f1f1f"],
    size: ["36", "37", "38", "39", "40"],
    qty: 1
  },
  {
    id: 6,
    title: "Modern Blush Block Heels",
    image: [shoes, blackShoes],
    slug: 'modern-blush-block-heels',
    price: 3800,
    discount: 500,
    category: 'shoes',
    desc: "Chic blush block heels crafted from vegan leather. Features secure strap support and optimal arch cushioning.",
    color: ["#f5c6cb", "#000000"],
    size: ["36", "37", "38", "39", "40"],
    qty: 1
  }
];