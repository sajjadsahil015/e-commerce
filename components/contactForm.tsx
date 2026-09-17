"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Order Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you! Your message has been sent. Our team will contact you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Order Inquiry",
        message: "",
      });
    }, 1200);
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-myBlackHead tracking-tight">
          Send Us a Message
        </h3>
        <p className="text-xs sm:text-sm text-myBlackPara mt-1">
          Fill out the form below and we will get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-bold uppercase tracking-wider text-myBlackPara mb-1.5"
            >
              Full Name <span className="text-myOrange">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ayesha Khan"
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-myBlackHead outline-none focus:border-myOrange focus:bg-white transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold uppercase tracking-wider text-myBlackPara mb-1.5"
            >
              Email Address <span className="text-myOrange">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-myBlackHead outline-none focus:border-myOrange focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-bold uppercase tracking-wider text-myBlackPara mb-1.5"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+92 300 1234567"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-myBlackHead outline-none focus:border-myOrange focus:bg-white transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-bold uppercase tracking-wider text-myBlackPara mb-1.5"
            >
              Inquiry Type <span className="text-myOrange">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-myBlackHead outline-none focus:border-myOrange focus:bg-white transition-all cursor-pointer"
            >
              <option value="Order Inquiry">Order Status &amp; Tracking</option>
              <option value="Exchange & Return">Returns &amp; Exchanges</option>
              <option value="Size & Styling Advice">Size &amp; Styling Advice</option>
              <option value="Wholesale / Collaborations">Wholesale &amp; Brand Partnership</option>
              <option value="General Feedback">General Feedback</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold uppercase tracking-wider text-myBlackPara mb-1.5"
          >
            Your Message <span className="text-myOrange">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us how we can assist you..."
            required
            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-myBlackHead outline-none focus:border-myOrange focus:bg-white transition-all resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-myBlackHead hover:bg-myOrange text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow transition-all duration-300 cursor-pointer disabled:opacity-50"
        >
          <FaPaperPlane className="text-xs" />
          {isSubmitting ? "Sending Message..." : "Submit Inquiry"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
