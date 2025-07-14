"use client";

import type React from "react";
import { useState } from "react";
import { X, Calendar as CalendarIcon } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa6";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import Image from "next/image";

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isTimePopoverOpen, setIsTimePopoverOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const [selectedMinute, setSelectedMinute] = useState<number | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleHourClick = (hour: number) => {
    setSelectedHour(hour);
    setFormData({ ...formData, time: buildTimeString(hour, selectedMinute, selectedPeriod) });
  };
  const handleMinuteClick = (minute: number) => {
    setSelectedMinute(minute);
    setFormData({ ...formData, time: buildTimeString(selectedHour, minute, selectedPeriod) });
  };
  const handlePeriodClick = (period: string) => {
    setSelectedPeriod(period);
    setFormData({ ...formData, time: buildTimeString(selectedHour, selectedMinute, period) });
  };
  function buildTimeString(hour: number | null, minute: number | null, period: string) {
    if (hour === null || minute === null || !period) return "";
    return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")} ${period}`;
  }
  const handleClear = () => {
    setSelectedDate(null);
    setSelectedHour(null);
    setSelectedMinute(null);
    setSelectedPeriod("");
    setFormData({ ...formData, date: "", time: "" });
  };
  const handleToday = () => {
    const today = new Date();
    setSelectedDate(today);
    setFormData({ ...formData, date: format(today, "yyyy-MM-dd") });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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
        setIsSuccess(true);
      }
    } catch {
      // Handle error if needed
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
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-lg z-50">
      <div className="relative w-full max-w-md p-0">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl p-8 sm:p-10 flex flex-col gap-6">
        <button
          onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-blue-500/80 hover:bg-blue-600 rounded-full p-2 shadow-lg transition-colors border border-white/30"
          aria-label="Close"
        >
            <X size={22} />
        </button>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white drop-shadow mb-2">Schedule a Meeting with us!</h2>
            <p className="text-white/90 text-base mb-4">Connect with us at your convenience! Book a meeting to discuss your ideas, projects, or inquiries.</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Floating label inputs */}
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "contact", label: "Contact Number", type: "text" },
              { name: "subject", label: "Subject / Purpose", type: "text" },
            ].map(({ name, label, type }) => (
              <div key={name} className="relative">
            <input
                  type={type}
                  name={name}
                  value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              required
                  className="peer w-full h-12 px-4 pt-5 bg-white/20 border border-white/40 rounded-xl text-white placeholder-transparent outline-none focus:border-blue-400 focus:bg-white/30 transition"
                  placeholder={label}
                  autoComplete="off"
                />
                <label className="absolute left-4 top-3 text-white/70 text-sm pointer-events-none transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs bg-transparent px-1">
                  {label}
                </label>
              </div>
            ))}
            {/* Combined Date & Time Picker Popover */}
            <div className="mb-4">
              <label className="block text-white/80 text-sm mb-1 ml-1">Date & Time</label>
              <Popover open={isTimePopoverOpen} onOpenChange={setIsTimePopoverOpen}>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-12 px-4 bg-white/20 border border-white/40 rounded-xl text-white outline-none flex items-center gap-2 font-normal hover:border-blue-400 hover:bg-white/30 transition"
                  >
                    <CalendarIcon className="w-5 h-5 mr-2 text-blue-300" />
                    {selectedDate && selectedHour !== null && selectedMinute !== null && selectedPeriod
                      ? `${format(selectedDate, "PPP")} ${selectedHour.toString().padStart(2, "0")}:${selectedMinute.toString().padStart(2, "0")} ${selectedPeriod}`
                      : "Select Date & Time"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 bg-white/90 border border-blue-200 rounded-2xl shadow-xl w-[420px] min-h-[420px] overflow-y-auto">
                  <div className="flex flex-col sm:flex-row gap-2 p-4">
                    {/* Calendar */}
                    <div className="sm:w-1/2 w-full">
                      <Calendar
                        mode="single"
                        selected={selectedDate || undefined}
                        onSelect={(date) => {
                          setSelectedDate(date || null);
                          setFormData({ ...formData, date: date ? format(date, "yyyy-MM-dd") : "" });
                        }}
                        initialFocus
                      />
                      <div className="flex justify-between mt-2 text-xs text-blue-600">
                        <button type="button" onClick={handleClear} className="hover:underline">Clear</button>
                        <button type="button" onClick={handleToday} className="hover:underline">Today</button>
                      </div>
                    </div>
                    {/* Time selectors */}
                    <div className="sm:w-1/2 w-full flex flex-col items-center justify-center gap-1 mt-4 sm:mt-0 min-h-[260px]">
                      <div className="flex gap-2 mb-1">
                        {/* Hour */}
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                          <button
                            key={h}
                            type="button"
                            onClick={() => handleHourClick(h)}
                            className={`w-10 h-10 rounded-md font-semibold border transition-all ${selectedHour === h ? "bg-blue-500 text-white border-blue-600" : "bg-white text-blue-700 border-blue-200 hover:bg-blue-100"}`}
                          >
                            {h.toString().padStart(2, "0")}
                          </button>
                        ))}
                      </div>
                      <div className="flex gap-2 mb-1">
                        {/* Minute */}
                        {[0, 15, 30, 45].map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => handleMinuteClick(m)}
                            className={`w-10 h-10 rounded-md font-semibold border transition-all ${selectedMinute === m ? "bg-blue-500 text-white border-blue-600" : "bg-white text-blue-700 border-blue-200 hover:bg-blue-100"}`}
                          >
                            {m.toString().padStart(2, "0")}
                          </button>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-1">
                        {/* AM/PM */}
                        {["AM", "PM"].map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => handlePeriodClick(p)}
                            className={`w-14 h-10 rounded-md font-semibold border transition-all ${selectedPeriod === p ? "bg-blue-500 text-white border-blue-600" : "bg-white text-blue-700 border-blue-200 hover:bg-blue-100"}`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          <button
            type="submit"
              className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-xl shadow-md hover:from-blue-600 hover:to-blue-800 transition text-lg tracking-wide"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
          <div className="text-center text-white/90 mt-6">
            <p className="text-base font-semibold mb-2">Stay Connected!</p>
            <div className="flex justify-center gap-6 mt-2">
            {[
              { href: "https://www.facebook.com", icon: FaFacebookF },
              { href: "https://x.com", icon: () => (
                <Image src="/logo/X_shaded.png" alt="X" width={28} height={28} className="w-7 h-7 object-contain" />
              ) },
              { href: "https://www.linkedin.com", icon: FaLinkedinIn },
              { href: "https://telegram.org", icon: FaTelegram },
              { href: "https://www.instagram.com", icon: FaInstagram },
            ].map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-blue-400 transition text-2xl"
                aria-label={href}
              >
                <Icon size={28} />
              </a>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
