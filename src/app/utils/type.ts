import { StaticImageData } from "next/image";

export type Products = {
    id:number;
    title:string;
    image: StaticImageData[];
    slug:string;
    price:number;
    discount:number
    category:string;
    desc:string;
    size:string[]
    color:string[]
    qty:number
}

export type Carts = {
    id:number;
    title:string;
    image: StaticImageData;
    slug:string;
    price:number;
    discount:number;
    category:string;
    desc:string;
    size:string
    qty:number;
    uuid:number|string |undefined;
    color:string
}