"use client";

import type React from "react";
import { useState } from "react";
import { X } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa6";

export default function MeetingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    date: "",
    time: "",
  });
  const [notification, setNotification] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsFailure(false);

    console.log("Meeting Scheduled with details:", formData);

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification("Meeting scheduled successfully!");
        setIsSuccess(true);
      } else {
        setNotification("Failed to schedule meeting. Try again.");
        setIsFailure(true);
      }
    } catch (error) {
      setNotification("An error occurred. Please try again later.");
      setIsFailure(true);
    }

    setIsSubmitting(false);
    if (isSuccess) {
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          contact: "",
          subject: "",
          date: "",
          time: "",
        });
        setNotification("");
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/70 backdrop-blur-sm z-50">
      <div className="bg-[#1e2433]/90 p-6 rounded-xl shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-white text-center mt-2">
          Schedule a Meeting with us!
        </h2>
        <p className="text-white/80 text-center text-sm mt-2 mb-6">
          Connect with us at your convenience! Book a meeting to discuss your
          ideas, projects, or inquiries.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {["name", "email", "contact", "subject"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              required
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white outline-none placeholder:text-white/60"
            />
          ))}

          <div className="grid grid-cols-2 gap-4">
            {["date", "time"].map((field) => (
              <input
                key={field}
                type={field}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                required
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white outline-none placeholder:text-white/60 cursor-pointer"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        <div className="text-center text-white mt-6">
          <p className="text-sm">Stay Connected!</p>
          <div className="flex justify-center gap-8 mt-3">
            {[
              { href: "https://facebook.com", icon: FaFacebookF },
              { href: "https://x.com", icon: FaXTwitter },
              { href: "https://linkedin.com", icon: FaLinkedinIn },
              { href: "https://telegram.org", icon: FaTelegram },
            ].map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                <Icon size={30} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
