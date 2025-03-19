"use client";

import type React from "react";
import { useState } from "react";
import { X, CalendarIcon, Clock } from "lucide-react";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
        console.log("Email sent successfully");
        setNotification("Meeting scheduled successfully!");
      } else {
        console.error("Failed to send email");
        setNotification("Failed to schedule meeting. Try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setNotification("An error occurred. Please try again later.");
    }

    setFormData({
      name: "",
      email: "",
      contact: "",
      subject: "",
      date: "",
      time: "",
    });
    setTimeout(() => setNotification(""), 3000);
    onClose();
  };

  return isOpen ? (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-lg z-50">
      <div className="bg-white/10 p-6 rounded-xl shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <h2 className="text-2xl font-bold text-white text-center">
          Schedule a Meeting with us!
        </h2>
        <p className="text-white/80 text-center text-sm mt-2">
          Connect with us at your convenience! Book a meeting to discuss your
          ideas, projects, or inquiries.
        </p>

        {notification && (
          <div className="text-green-400 text-center font-semibold mt-4">
            {notification}
          </div>
        )}

        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white outline-none placeholder:text-white/60"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
            className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white outline-none placeholder:text-white/60"
          />
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact Number"
            required
            minLength={10}
            className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white outline-none placeholder:text-white/60"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject / Purpose"
            required
            className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white outline-none placeholder:text-white/60"
          />

          <div className="flex gap-2">
            <div className="w-1/2 relative">
              <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 pl-10 bg-white/20 border border-white/30 rounded-lg text-white outline-none placeholder:text-white/60"
                required
              />
            </div>
            <div className="w-1/2 relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-3 pl-10 bg-white/20 border border-white/30 rounded-lg text-white outline-none placeholder:text-white/60"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
            disabled={!formData.date || !formData.time}
            aria-label="Submit Meeting Form"
          >
            Submit
          </button>
        </form>

        <div className="text-center text-white mt-6">
          <p className="text-sm">Stay Connected!</p>
          <div className="flex justify-center gap-4 mt-2">
            <FaFacebookF
              className="text-white hover:text-blue-400 cursor-pointer"
              size={20}
            />
            <FaXTwitter
              className="text-white hover:text-blue-400 cursor-pointer"
              size={20}
            />
            <FaLinkedinIn
              className="text-white hover:text-blue-400 cursor-pointer"
              size={20}
            />
            <FaTelegram
              className="text-white hover:text-blue-400 cursor-pointer"
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
