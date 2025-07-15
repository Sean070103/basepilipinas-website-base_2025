"use client";
import { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { format } from "date-fns";

export default function BookNowPage() {
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
    setIsSuccess(false);
    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({
            name: "",
            email: "",
            contact: "",
            subject: "",
            date: "",
            time: "",
          });
          setSelectedDate(null);
          setSelectedHour(null);
          setSelectedMinute(null);
          setSelectedPeriod("");
        }, 3000);
      }
    } catch {}
    setIsSubmitting(false);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-6 px-2 sm:px-4 md:px-8" style={{ background: 'transparent' }}>
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-transparent backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl p-4 sm:p-6 md:p-10 flex flex-col gap-6 sm:gap-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white drop-shadow mb-2">Schedule a Meeting with us!</h2>
          <p className="text-white/90 text-lg mb-4">Connect with us at your convenience! Book a meeting to discuss your ideas, projects, or inquiries.</p>
        </div>
        <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
          {/* Success Animation */}
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12">
              <svg className="w-24 h-24 mb-4 animate-pop-in" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="36" cy="36" r="34" stroke="#22c55e" strokeWidth="4" fill="#f0fdf4" />
                <path d="M22 38L32 48L50 28" stroke="#22c55e" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                  <animate attributeName="stroke-dasharray" from="0,60" to="60,0" dur="0.6s" fill="freeze" />
                </path>
              </svg>
              <h3 className="text-2xl font-bold text-green-500 mb-2">Booking Successful!</h3>
              <p className="text-lg text-white/80">Thank you for booking a meeting. We’ll be in touch soon!</p>
            </div>
          ) : (
            <>
              {/* Floating label inputs */}
              {[
                { name: "name", label: "Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "contact", label: "Contact Number", type: "text" },
                { name: "subject", label: "Subject / Purpose", type: "text" },
              ].map(({ name, label, type }) => (
                <div key={name} className="mb-4">
                  <label htmlFor={name} className="block text-white/80 text-base mb-1 ml-1">
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="w-full h-14 px-4 bg-transparent border border-white/40 rounded-xl text-white outline-none focus:border-blue-400 transition text-lg"
                    placeholder=""
                    autoComplete="off"
                  />
                </div>
              ))}
              {/* Combined Date & Time Picker Popover */}
              <div className="mb-4">
                <label className="block text-white/80 text-base mb-2 ml-1">Date & Time</label>
                <Popover open={isTimePopoverOpen} onOpenChange={setIsTimePopoverOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={`w-full h-14 px-4 border border-white/40 rounded-xl text-white outline-none flex items-center gap-2 font-normal transition text-lg ${selectedDate && selectedHour !== null && selectedMinute !== null && selectedPeriod ? 'bg-gradient-to-r from-blue-500 to-blue-700' : 'bg-transparent'}`}
                    >
                      <CalendarIcon className="w-6 h-6 mr-2 text-blue-300" />
                      {selectedDate ? `${format(selectedDate, "PPP")}${selectedHour !== null ? ` ${selectedHour.toString().padStart(2, "0")}` : ""}${selectedMinute !== null ? `:${selectedMinute.toString().padStart(2, "0")}` : ""}${selectedPeriod ? ` ${selectedPeriod}` : ""}` : "Select Date & Time"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 bg-white/90 border border-blue-200 rounded-2xl shadow-xl w-full max-w-xs sm:max-w-md md:max-w-[520px] min-h-[420px] overflow-y-auto overflow-x-auto">
                    <div className="flex flex-col sm:flex-row gap-2 p-2 sm:p-4 md:p-6">
                      {/* Calendar */}
                      <div className="w-full sm:w-1/2">
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
                      <div className="w-full sm:w-1/2 flex flex-col items-center justify-center gap-2 mt-4 sm:mt-0 min-h-[260px]">
                        <div className="flex gap-2 mb-1 flex-wrap justify-center">
                          {/* Hour */}
                          {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                            <button
                              key={h}
                              type="button"
                              onClick={() => handleHourClick(h)}
                              className={`w-12 h-12 rounded-lg font-semibold border transition-all text-lg ${selectedHour === h ? "bg-blue-500 text-white border-blue-600" : "bg-white text-blue-700 border-blue-200 hover:bg-blue-100"}`}
                            >
                              {h.toString().padStart(2, "0")}
                            </button>
                          ))}
                        </div>
                        <div className="flex gap-2 mb-1 flex-wrap justify-center">
                          {/* Minute */}
                          {[0, 15, 30, 45].map((m) => (
                            <button
                              key={m}
                              type="button"
                              onClick={() => handleMinuteClick(m)}
                              className={`w-12 h-12 rounded-lg font-semibold border transition-all text-lg ${selectedMinute === m ? "bg-blue-500 text-white border-blue-600" : "bg-white text-blue-700 border-blue-200 hover:bg-blue-100"}`}
                            >
                              {m.toString().padStart(2, "0")}
                            </button>
                          ))}
                        </div>
                        <div className="flex gap-2 mt-1 justify-center">
                          {/* AM/PM */}
                          {['AM', 'PM'].map((p) => (
                            <button
                              key={p}
                              type="button"
                              onClick={() => handlePeriodClick(p)}
                              className={`w-20 h-12 rounded-lg font-semibold border transition-all text-lg ${selectedPeriod === p ? "bg-blue-500 text-white border-blue-600" : "bg-white text-blue-700 border-blue-200 hover:bg-blue-100"}`}
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
                className="w-full h-14 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-xl shadow-md hover:from-blue-600 hover:to-blue-800 transition text-xl tracking-wide"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
} 