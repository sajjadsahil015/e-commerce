import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import heroPic from "@/public/heroPic.jpg";
import tops from "@/public/tops.jpg";
import accessories from "@/public/accessories.jpg";
import { FaGem, FaLeaf, FaHeart, FaTruck, FaArrowRight, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Women's Fashion — our story, passion for craftsmanship, and dedication to delivering modern, timeless fashion for women.",
};

const values = [
  {
    icon: <FaGem className="text-2xl text-myOrange" />,
    title: "Premium Craftsmanship",
    desc: "Every seam, fabric blend, and silhouette is meticulously selected and tested to ensure enduring quality, luxurious softness, and lasting shape.",
  },
  {
    icon: <FaLeaf className="text-2xl text-myOrange" />,
    title: "Mindful Fashion",
    desc: "We prioritize responsible sourcing, durable materials that outlast fast-fashion trends, and eco-conscious packaging practices.",
  },
  {
    icon: <FaHeart className="text-2xl text-myOrange" />,
    title: "Designed For Confidence",
    desc: "Our silhouettes celebrate versatility and effortless elegance, empowering women to feel poised and authentic in every walk of life.",
  },
  {
    icon: <FaTruck className="text-2xl text-myOrange" />,
    title: "Seamless Experience",
    desc: "From rapid order fulfillment and free shipping over Rs. 2999 to easy 7-day returns, your delight is at the heart of everything we do.",
  },
];

const stats = [
  { value: "50,000+", label: "Happy Customers" },
  { value: "150+", label: "Curated Styles" },
  { value: "99.2%", label: "Satisfaction Rate" },
  { value: "24 / 7", label: "Customer Assistance" },
];

const milestones = [
  {
    year: "Our Genesis",
    title: "A Vision for Everyday Luxury",
    desc: "Born from the idea that modern women shouldn't have to choose between affordability and runway-inspired elegance.",
  },
  {
    year: "Expansion",
    title: "Complete Wardrobe Collections",
    desc: "Expanded beyond signature tops to tailored pants, artisanal accessories, and ergonomic footwear designed for dynamic daily life.",
  },
  {
    year: "Today & Tomorrow",
    title: "Nationwide Community & Care",
    desc: "Proudly delivering across the country with a vibrant community of trendsetters and fashion lovers.",
  },
];

const AboutPage = () => {
  return (
    <div className="py-8 sm:py-12">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block py-1 px-3 rounded-full bg-myOrange/10 border border-myOrange/30 text-myOrange text-xs font-bold uppercase tracking-widest mb-3">
          Our Story & Philosophy
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-myBlackHead tracking-tight mb-4">
          Redefining Modern <span className="text-myOrange">Elegance</span>
        </h1>
        <div className="w-20 h-1.5 bg-myOrange mx-auto rounded-full mb-6" />
        <p className="text-base sm:text-lg text-myBlackPara leading-relaxed">
          Welcome to <strong className="text-myBlackHead">Women&apos;s Fashion</strong>. We create thoughtful, contemporary apparel and accessories that inspire confidence and celebrate personal expression.
        </p>
      </section>

      {/* Brand Narrative Showcase */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
        <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-gray-200">
          <Image
            src={heroPic}
            alt="Women's Fashion Atelier"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-myOrange mb-1">
              Atelier Standard
            </p>
            <p className="text-lg font-bold">
              Crafted with passion, worn with pride.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-myOrange">
            Who We Are
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-myBlackHead tracking-tight leading-tight">
            Curated Styles for the Modern, Forward-Thinking Woman
          </h2>
          <p className="text-sm sm:text-base text-myBlackPara leading-relaxed">
            At Women&apos;s Fashion, we believe clothing is more than fabric—it is an armor of self-assurance and an authentic statement of your individuality. Each piece in our catalogue is thoughtfully tailored to transition seamlessly from boardroom meetings to weekend soirées.
          </p>
          <p className="text-sm sm:text-base text-myBlackPara leading-relaxed">
            We partner with skilled textile artisans to bring you breathable fabrics, trend-defining colors, and timeless silhouettes that you will reach for season after season.
          </p>

          <div className="pt-2 space-y-2.5">
            <div className="flex items-center gap-3 text-sm font-semibold text-myBlackHead">
              <FaCheckCircle className="text-myOrange shrink-0" />
              <span>100% Breathable, High-Grade Combed Cotton &amp; Fine Blends</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-myBlackHead">
              <FaCheckCircle className="text-myOrange shrink-0" />
              <span>Rigorous Quality Inspection on Every Garment Before Dispatch</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-myBlackHead">
              <FaCheckCircle className="text-myOrange shrink-0" />
              <span>Transparent Sizing with Detailed Measurements</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((item, index) => (
            <div key={index} className="pt-4 md:pt-0 first:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-myBlackHead mb-1">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-myOrange uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-myOrange block mb-1">
            Our Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-myBlackHead">
            Values That Define Everything We Create
          </h2>
          <div className="w-16 h-1 bg-myOrange mx-auto rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start group hover:border-myOrange/50"
            >
              <div className="w-12 h-12 rounded-xl bg-myOrange/10 flex items-center justify-center mb-4 group-hover:scale-110 duration-300">
                {val.icon}
              </div>
              <h3 className="text-base font-bold text-myBlackHead mb-2 group-hover:text-myOrange transition-colors">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-myBlackPara leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Dual Showcase */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow group">
          <Image
            src={tops}
            alt="Handcrafted Apparel"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          <div className="absolute bottom-6 left-6 text-white">
            <span className="text-xs font-bold uppercase tracking-widest text-myOrange">Collection</span>
            <h3 className="text-xl font-bold">Artisan Tops &amp; Everyday Staples</h3>
          </div>
        </div>

        <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow group">
          <Image
            src={accessories}
            alt="Jewelry & Accessories"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          <div className="absolute bottom-6 left-6 text-white">
            <span className="text-xs font-bold uppercase tracking-widest text-myOrange">Accents</span>
            <h3 className="text-xl font-bold">Timeless Handbags &amp; Jewelry</h3>
          </div>
        </div>
      </section>

      {/* Journey Milestones */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-myOrange block mb-1">
            How We Grew
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-myBlackHead">
            The Women&apos;s Fashion Journey
          </h2>
          <div className="w-16 h-1 bg-myOrange mx-auto rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map((m, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden"
            >
              <div className="text-xs font-bold text-myOrange uppercase tracking-wider mb-2">
                {m.year}
              </div>
              <h3 className="text-lg font-bold text-myBlackHead mb-2">
                {m.title}
              </h3>
              <p className="text-sm text-myBlackPara leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-myBlackHead text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-myOrange text-xs font-bold uppercase tracking-widest mb-4">
            Discover Your New Wardrobe
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-balance">
            Experience the Blend of Comfort &amp; High Fashion
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-lg mx-auto">
            Explore our curated collections of tops, pants, accessories, and shoes. Upgrade your everyday wardrobe today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tops"
              className="inline-flex items-center justify-center gap-2 bg-myOrange hover:bg-myOrange/90 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition duration-300"
            >
              Shop Collections <FaArrowRight className="text-xs" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold px-8 py-3.5 rounded-xl transition duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;