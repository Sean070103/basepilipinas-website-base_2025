"use client";

import type React from "react";
import { useState } from "react";

import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa6";
type FormData = {
  name: string;
  email: string;
  contactNumber: string;
  source: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contactNumber: "",
    source: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-transparent text-white p-4 sm:p-6 md:p-12 lg:p-16">
      {/* Contact Info */}
      <div className="md:w-1/2 text-left mb-8 md:mb-0 md:pr-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in touch</h1>
        <p className="text-slate-300 text-lg mb-8">
          Feel free to reach out anytime if you have questions. We look forward
          to hearing from you, drop us a message soon!
        </p>
        <div className="flex space-x-4">
          <FaFacebookF className="text-white text-2xl cursor-pointer" />
          <FaXTwitter className="text-white text-2xl cursor-pointer" />
          <FaLinkedinIn className="text-white text-2xl cursor-pointer" />
          <FaTelegram className="text-white text-2xl cursor-pointer" />
        </div>
      </div>

      {/* Contact Form */}
      <div className="md:w-1/2 w-full max-w-2xl">
        <div className="bg-transparent backdrop-blur-md p-6 rounded-lg border border-white/20 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="tel"
              name="contactNumber"
              placeholder="Contact Number"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="" disabled>
                Where did you find us?
              </option>
              <option value="google">Google</option>
              <option value="social">Social Media</option>
              <option value="friend">Friend Referral</option>
              <option value="other">Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
              required
            />

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
