import React from "react";
import { Metadata } from "next";
import ContactForm from "@/components/contactForm";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaQuestionCircle,
  FaHeadset,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Women's Fashion support team for inquiries, order tracking, returns, and styling consultations.",
};

const contactDetails = [
  {
    icon: <FaMapMarkerAlt className="text-xl text-myOrange" />,
    title: "Our Boutique & Studio",
    lines: ["14-C Fashion Avenue, Gulberg III", "Lahore, Pakistan"],
  },
  {
    icon: <FaPhoneAlt className="text-xl text-myOrange" />,
    title: "Call / WhatsApp Support",
    lines: ["+92 (300) 123-4567", "+92 (42) 3578-9000"],
  },
  {
    icon: <FaEnvelope className="text-xl text-myOrange" />,
    title: "Email Assistance",
    lines: ["support@womensfashion.com", "care@womensfashion.com"],
  },
  {
    icon: <FaClock className="text-xl text-myOrange" />,
    title: "Customer Service Hours",
    lines: ["Monday – Saturday: 9am – 9pm", "Sunday: 11am – 6pm (PKT)"],
  },
];

const faqs = [
  {
    question: "How long does delivery take across Pakistan?",
    answer:
      "Standard nationwide delivery takes 2 to 4 business days. Major cities including Lahore, Karachi, and Islamabad often receive orders within 48 hours. Tracking details are emailed immediately upon courier dispatch.",
  },
  {
    question: "What is your return and exchange policy?",
    answer:
      "We offer a seamless 7-day return and exchange policy on all unworn items with original tags intact. Simply contact our support with your order number to initiate an exchange or refund.",
  },
  {
    question: "Is Cash on Delivery (COD) available?",
    answer:
      "Yes! We offer nationwide Cash on Delivery (COD) as well as secure online bank transfer, Visa, and MasterCard payments.",
  },
  {
    question: "How can I verify which size will fit me best?",
    answer:
      "Every product detail page provides an exact size chart (Chest, Waist, Inseam/Length). If you are between sizes or need personalized sizing advice, feel free to send us a message through the form above.",
  },
];

const ContactPage = () => {
  return (
    <div className="py-8 sm:py-12">
      {/* Header */}
      <section className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block py-1 px-3 rounded-full bg-myOrange/10 border border-myOrange/30 text-myOrange text-xs font-bold uppercase tracking-widest mb-3">
          We&apos;re Here For You
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-myBlackHead tracking-tight mb-4">
          Get in <span className="text-myOrange">Touch</span>
        </h1>
        <div className="w-20 h-1.5 bg-myOrange mx-auto rounded-full mb-6" />
        <p className="text-sm sm:text-base text-myBlackPara leading-relaxed">
          Have a question about sizing, order status, or need bespoke styling advice? Our friendly concierge team is always delighted to assist you.
        </p>
      </section>

      {/* Contact Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {contactDetails.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center group hover:border-myOrange/40"
          >
            <div className="w-12 h-12 rounded-xl bg-myOrange/10 flex items-center justify-center mb-4 group-hover:scale-110 duration-300">
              {item.icon}
            </div>
            <h3 className="text-sm font-bold text-myBlackHead mb-2 uppercase tracking-wide">
              {item.title}
            </h3>
            {item.lines.map((line, i) => (
              <p key={i} className="text-xs sm:text-sm text-myBlackPara font-medium">
                {line}
              </p>
            ))}
          </div>
        ))}
      </section>

      {/* Contact Form & Support Highlights */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-20">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* Sidebar Cards */}
        <div className="space-y-6">
          <div className="bg-myBlackHead text-white p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-myOrange/20 flex items-center justify-center text-myOrange">
                <FaHeadset className="text-lg" />
              </div>
              <h3 className="text-lg font-bold">24/7 Concierge Care</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
              Whether you need urgent order alterations or styling recommendations for an upcoming occasion, our dedicated team is reachable round the clock.
            </p>
            <div className="border-t border-white/10 pt-4 text-xs text-gray-400 space-y-2">
              <p>
                <strong className="text-white">Average Response Time:</strong> Under 30 minutes
              </p>
              <p>
                <strong className="text-white">Email Priority:</strong> support@womensfashion.com
              </p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm">
            <h4 className="font-bold text-myBlackHead text-base mb-3">
              Order Tracking &amp; Delivery
            </h4>
            <p className="text-xs sm:text-sm text-myBlackPara leading-relaxed mb-4">
              Looking for your recent parcel? Please check the tracking link sent via SMS or email once your package was dispatched.
            </p>
            <p className="text-xs font-semibold text-myOrange">
              Free nationwide delivery automatically applies on all orders above Rs. 2,999.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-myOrange block mb-1">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-myBlackHead flex items-center justify-center gap-2">
            <FaQuestionCircle className="text-myOrange text-xl sm:text-2xl" /> Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-myOrange mx-auto rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-base font-bold text-myBlackHead mb-2.5">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-myBlackPara leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;