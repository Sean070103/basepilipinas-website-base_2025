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
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contactNumber: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = "Invalid email.";
    if (!formData.contactNumber) newErrors.contactNumber = "Contact number is required.";
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    // Here you would send the form data to your backend or API
    // Reset form if needed: setFormData({ name: '', email: '', contactNumber: '', subject: '', message: '' });
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
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 shadow-md">
          {submitted ? (
            <div className="text-center text-green-400 text-lg font-semibold py-12">
              Thank you for reaching out! We have received your message.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border border-red-400' : ''}`}
                  required
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border border-red-400' : ''}`}
                  required
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="contactNumber" className="block text-white font-medium mb-1">Contact Number</label>
                <input
                  type="tel"
                  name="contactNumber"
                  id="contactNumber"
                  placeholder="Enter your contact number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.contactNumber ? 'border border-red-400' : ''}`}
                  required
                />
                {errors.contactNumber && <p className="text-red-400 text-xs mt-1">{errors.contactNumber}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-1">Subject / Purpose</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject / Purpose"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.subject ? 'border border-red-400' : ''}`}
                  required
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-md bg-transparent text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] ${errors.message ? 'border border-red-400' : ''}`}
                  required
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>
              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
