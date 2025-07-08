"use client";

import type React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { EVENTS } from "@/sources/events";
import { CTA_ITEMS } from "@/sources/hero";
import { MISSIONS } from "@/sources/missions";
import { format } from "date-fns";
import { CalendarIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    date: "",
    time: "",
  });
  const [notification, setNotification] = useState("");
  const [socialsOpen, setSocialsOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Add a small offset to account for any fixed headers
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  // Check for hash in URL on page load and scroll to that section
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1); // Remove the # character
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 500); // Small delay to ensure the page is fully loaded
      }
    }
  }, []);

  const toggleSocials = () => {
    setSocialsOpen(!socialsOpen);
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleTimeChange = (type: "hour" | "minute", value: string) => {
    if (date) {
      const newDate = new Date(date);
      if (type === "hour") {
        newDate.setHours(Number.parseInt(value));
      } else if (type === "minute") {
        newDate.setMinutes(Number.parseInt(value));
      }
      setDate(newDate);
    }
  };

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
  };

  // Handle CTA item click
  const handleCTAClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const sectionId = link.substring(1);
      scrollToSection(sectionId);
    } else if (link.startsWith("/")) {
      // Let Next.js handle regular page navigation
      router.push(link);
    }
  };

  return (
    <>
      {/* Socials Panel */}
      {socialsOpen && (
        <div className="fixed top-20 left-0 right-0 z-50 px-4 sm:left-1/2 sm:right-auto sm:transform sm:-translate-x-1/2">
          <div className="w-full sm:w-[600px] max-w-[100%]">
            <div className="relative border border-gray-500/30 rounded-xl bg-black/40 backdrop-blur-sm p-4">
              {/* Top Navigation */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <button
                  onClick={toggleSocials}
                  className="text-white mb-4 sm:mb-0"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <Link href="#" className="text-white hover:text-gray-300">
                    Join
                  </Link>
                  <Link
                    href="/#events"
                    className="text-white hover:text-gray-300"
                  >
                    Events
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-300">
                    About
                  </Link>
                  <span className="text-white bg-gray-700/50 px-3 py-1 rounded-md">
                    Socials
                  </span>
                </div>
              </div>

              {/* Social Links and Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Link
                    href="https://www.facebook.com/basepilipinas"
                    className="block text-white text-lg hover:text-blue-400"
                  >
                    Facebook
                  </Link>
                  <Link
                    href="https://x.com/basepilipinas"
                    className="block text-white text-lg hover:text-blue-400"
                  >
                    X
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/basepilipinas"
                    className="block text-white text-lg hover:text-blue-400"
                  >
                    LINKEDIN
                  </Link>
                </div>
                <div className="flex items-center justify-center mt-4 sm:mt-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center">
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-blue-500/80 rounded-full border-dashed animate-spin"
                      style={{
                        borderStyle: "dashed",
                        animationDuration: "3s",
                        borderWidth: "2px",
                        borderColor: "#3b82f6",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-8 sm:gap-12 md:gap-16">
        {/* Hero */}
        <section
          id="hero"
          className="relative w-full flex items-center justify-center p-4 sm:p-6 py-16 sm:py-20 overflow-hidden"
        >
          {/* Light Streak Effect */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 animate-lightStreak"></div>
          </div>

          <div className="w-full max-w-[1440px] flex flex-col gap-8 md:flex-row md:gap-10 md:max-w-[1040px] relative z-10">
            {/* Left Section (Logo + Text Content) */}
            <div className="flex flex-col gap-4 sm:gap-6 text-white md:w-1/2">
              {/* Base Philippines Branding */}
              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo/Base_Symbol_White.svg"
                    alt="Base Philippines Logo"
                    width={100}
                    height={100}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                    quality={100}
                    priority
                  />
                  <p className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-widest uppercase text-white">
                    Base Philippines
                  </p>
                </div>
              </div>

              {/* Heading & Description */}
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left">
                Join the <br /> Web3 Revolution
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-white/80 text-center md:text-left">
                We are creating a space for innovators, developers, and
                entrepreneurs in the Philippines, providing the resources and
                support they need to succeed.
              </p>

              {/* Join Button */}
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/join"
                  className="w-fit px-4 sm:px-6 py-2 sm:py-3 border-2 border-white text-white rounded-full flex items-center gap-2 transition-all duration-300
            hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                >
                  <span className="text-sm sm:text-base lg:text-lg">
                    JOIN US NOW
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Section (CTA Buttons) */}
            <div className="flex flex-col gap-3 sm:gap-4 md:w-1/2">
              {CTA_ITEMS.map(({ icon, title, description, link }) => (
                <a
                  key={title}
                  href={link || "#"}
                  onClick={(e) => link && handleCTAClick(e, link)}
                  className="relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-white/30 rounded-2xl w-full
            backdrop-blur-md bg-white/10 transition-all duration-300
            hover:border-white hover:shadow-[0_0_20px_rgba(0,255,255,0.8)]
            before:absolute before:top-0 before:left-0 before:w-full before:h-full
            before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
            before:bg-[length:200%_100%] before:animate-shimmer before:rounded-2xl"
                >
                  <Image
                    src={icon || "/placeholder.svg"}
                    alt={title}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    width={100}
                    height={100}
                    quality={95}
                  />
                  <div>
                    <p className="text-base sm:text-lg font-semibold text-white">
                      {title}
                    </p>
                    <p className="text-xs sm:text-sm text-white/80">
                      {description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section id="about" className="py-10 sm:py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
              ABOUT BASE PHILIPPINES
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {MISSIONS.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl
                      glass transition-all duration-300 hover:scale-[1.03]
                      hover:shadow-[0px_0px_20px_rgba(255,255,255,0.15)]
                      hover:border-white/20"
                >
                  {/* Icon Container */}
                  <div className="flex items-center justify-center rounded-full p-3 sm:p-4 mb-3 sm:mb-4 bg-white/10 border border-white/20">
                    <item.icon
                      className="h-6 w-6 sm:h-8 sm:w-8 text-white/80"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-2 sm:mb-3 uppercase">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-xs sm:text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* BASE INSIGHT HUB Section */}
            <div className="mt-10 sm:mt-16 rounded-2xl overflow-hidden glass">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Content Side */}
                <div className="p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                    BASE INSIGHT HUB
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-white/80 mb-4 sm:mb-6">
                    Base Insight Hub is your go-to platform for learning,
                    offering YouTube videos, webinars, and resources to help you
                    stay informed, sharpen your skills, and discover new
                    opportunities in the blockchain space.
                  </p>
                  <div>
                    <Link
                      href="/learn"
                      className="w-fit px-3 sm:px-4 md:px-6 py-2 sm:py-3 border-2 border-white text-white rounded-full flex items-center gap-2 transition-all duration-300
hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                    >
                      <span className="text-sm sm:text-base md:text-lg">
                        LEARN WITH US
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative w-full h-48 sm:h-64 md:h-full">
                  <Image
                    src="/hero/studying_1.jpg"
                    alt="Base Insight Hub Learning Platform"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    quality={95}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Link to Contributors Page */}
        <section className="flex justify-center my-12 relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-6 h-32 pointer-events-none">
            <div className="w-full h-full bg-white/60 rounded-xl blur-[2px] shadow-[0_0_32px_8px_#3b82f6cc] animate-vertical-rotate"></div>
          </div>
          <Link
            href="/contributors"
            className="flex items-center gap-4 group cursor-pointer relative z-10"
          >
            <Image
              src="/logo/Base_Symbol_White.svg"
              alt="Base Logo"
              width={40}
              height={40}
              className="group-hover:scale-110 transition-transform duration-200 z-10"
              priority
            />
            <span
              className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center group-hover:text-blue-200 transition-colors duration-200 z-10"
            >
              Our Team
            </span>
          </Link>
        </section>

        {/* Join Us */}
        <section
          id="join-us"
          className="flex flex-col items-center justify-center p-4 sm:p-6 py-10 sm:py-16"
        >
          <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold leading-tight text-white opacity-80 text-center">
            Unleash the future Join our community.
          </p>

          <Link
            href="/join"
            className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 border-2 border-white text-white rounded-full flex items-center gap-2 transition-all duration-300
        hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          >
            <span className="text-sm sm:text-base lg:text-lg">
              JOIN US NOW
            </span>
          </Link>
        </section>

        {/* Schedule Meeting */}
        <section
          id="schedule-meeting"
          className="flex flex-col items-center justify-center py-10 sm:py-16 bg-transparent p-4 sm:p-6"
        >
          <div className="text-white text-center max-w-3xl mx-auto">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-300 leading-tight">
              {`Let's Connect & Schedule a Meeting!`}
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
              Schedule a meeting to discuss your goals, projects, or any
              inquiries you have. Whether you&apos;re looking for advice,
              collaboration, or just a meaningful conversation, we&apos;re here
              for you.
              <br />
              <span className="font-semibold text-blue-300">
                Book a time that works for you, and let&apos;s get started!
              </span>
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <button className="mt-4 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition duration-300">
                  BOOK NOW
                </button>
              </DialogTrigger>
              <DialogContent className="bg-gray-700/60 backdrop-blur-md max-w-md w-[95vw] sm:w-full border-0">
                <button className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                  <X className="h-4 w-4 text-white" />
                  <span className="sr-only">Close</span>
                </button>
                <DialogHeader className="p-0">
                  <DialogTitle className="text-center text-2xl font-bold text-white">
                    Schedule a Meeting with us!
                  </DialogTitle>

                  <DialogDescription asChild>
                    <div>
                      <p className="text-white/80 text-center text-sm mt-2">
                        Connect with us at your convenience! Book a meeting to
                        discuss your ideas, projects, or inquiries.
                      </p>
                      <>
                        {notification && (
                          <div className="text-green-400 text-center font-semibold mt-4">
                            {notification}
                          </div>
                        )}

                        <form
                          className="mt-4 space-y-4"
                          onSubmit={handleSubmit}
                        >
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                            className="w-full h-12 px-4 bg-white/20 border border-white/30 rounded-lg text-white outline-none placeholder:text-white/60"
                          />
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
                            className="w-full h-12 px-4 bg-white/20 border border-white/30 rounded-lg text-white outline-none placeholder:text-white/60"
                          />
                          <Input
                            type="text"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="Contact Number"
                            required
                            minLength={10}
                            className="w-full h-12 px-4 bg-white/20 border border-white/30 rounded-lg text-white outline-none placeholder:text-white/60"
                          />
                          <Input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject / Purpose"
                            required
                            className="w-full h-12 px-4 bg-white/20 border border-white/30 rounded-lg text-white outline-none placeholder:text-white/60"
                          />

                          <div className="">
                            <Popover open={isOpen} onOpenChange={setIsOpen}>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full h-12 px-4 bg-white/20 border border-white/60 rounded-lg text-white outline-none placeholder:text-white/80 justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {date ? (
                                    format(date, "MM/dd/yyyy hh:mm")
                                  ) : (
                                    <span>MM/DD/YYYY hh:mm</span>
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <div className="sm:flex">
                                  <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={handleDateSelect}
                                    initialFocus
                                  />
                                  <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
                                    <ScrollArea className="w-64 sm:w-auto">
                                      <div className="flex sm:flex-col p-2">
                                        {hours.reverse().map((hour) => (
                                          <Button
                                            key={hour}
                                            size="icon"
                                            variant={
                                              date && date.getHours() === hour
                                                ? "default"
                                                : "ghost"
                                            }
                                            className="sm:w-full shrink-0 aspect-square"
                                            onClick={() =>
                                              handleTimeChange(
                                                "hour",
                                                hour.toString()
                                              )
                                            }
                                          >
                                            {hour}
                                          </Button>
                                        ))}
                                      </div>
                                      <ScrollBar
                                        orientation="horizontal"
                                        className="sm:hidden"
                                      />
                                    </ScrollArea>
                                    <ScrollArea className="w-64 sm:w-auto">
                                      <div className="flex sm:flex-col p-2">
                                        {Array.from(
                                          { length: 12 },
                                          (_, i) => i * 5
                                        ).map((minute) => (
                                          <Button
                                            key={minute}
                                            size="icon"
                                            variant={
                                              date &&
                                              date.getMinutes() === minute
                                                ? "default"
                                                : "ghost"
                                            }
                                            className="sm:w-full shrink-0 aspect-square"
                                            onClick={() =>
                                              handleTimeChange(
                                                "minute",
                                                minute.toString()
                                              )
                                            }
                                          >
                                            {minute.toString().padStart(2, "0")}
                                          </Button>
                                        ))}
                                      </div>
                                      <ScrollBar
                                        orientation="horizontal"
                                        className="sm:hidden"
                                      />
                                    </ScrollArea>
                                  </div>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>

                          <button
                            type="submit"
                            className="w-full h-12 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
                            disabled={!formData.date || !formData.time}
                            aria-label="Submit Meeting Form"
                          >
                            Submit
                          </button>
                        </form>

                        <div className="text-center text-white mt-6">
                          <p className="text-sm">Stay Connected!</p>
                          <div className="flex justify-center gap-6 mt-3">
                            <a
                              href="https://www.facebook.com/basepilipinas"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-blue-400 transition-colors duration-200"
                            >
                              <FaFacebookF size={20} />
                            </a>
                            <a
                              href="https://x.com/basepilipinas"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-blue-400 transition-colors duration-200"
                            >
                              <FaXTwitter size={20} />
                            </a>
                            <a
                              href="https://www.linkedin.com/company/basepilipinas"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-blue-400 transition-colors duration-200"
                            >
                              <FaLinkedinIn size={20} />
                            </a>
                            <a
                              href="https://t.me/basepilipinas"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-blue-400 transition-colors duration-200"
                            >
                              <FaTelegram size={20} />
                            </a>
                          </div>
                        </div>
                      </>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          {/* Image Section */}
          <div className="mt-6 sm:mt-10 flex justify-center w-full max-w-xs sm:max-w-sm md:max-w-lg">
            <Image
              src="/Event/WEBP/meeting.webp"
              width={500}
              height={300}
              alt="Meeting Illustration"
              className="w-full rounded-xl shadow-xl border border-white/20"
              quality={95}
            />
          </div>
        </section>

        {/* Events */}
        <section
          id="events"
          className="py-10 sm:py-16 bg-transparent text-white"
        >
          <div className="container mx-auto py-6 sm:py-8 px-4">
            <h1 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">
              EVENTS
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {EVENTS.slice(0, 6).map((event) => (
                <div
                  key={event.id}
                  className="bg-[#1a2234] rounded-lg overflow-hidden shadow-lg h-full"
                >
                  <Link href={`/events/${event.id}`} className="block h-full">
                    <div className="relative h-36 sm:h-48">
                      <Image
                        src={
                          event.image ||
                          "/placeholder.svg?height=800&width=1200" ||
                          "/placeholder.svg"
                        }
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        quality={90}
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-xs text-gray-400">{event.date}</p>
                          <h3 className="text-sm sm:text-base font-medium">
                            {event.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-400">
                            Location: {event.location}
                          </p>
                        </div>
                        <div className="text-xs text-gray-400 text-right">
                          <p>{event.time}</p>
                        </div>
                      </div>
                      <div className="flex justify-end mt-3 sm:mt-4">
                        <button
                          className="text-xs bg-gray-700 hover:bg-gray-600 px-2 sm:px-3 py-1 rounded"
                          onClick={(e) => e.stopPropagation()} // Prevents navigation when clicking the button
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faqs"
          className="flex items-center justify-center w-full py-8 sm:py-12"
        >
          <div className="w-full flex flex-col gap-3 sm:gap-4 p-4 sm:p-8 max-w-[1040px]">
            <p className="text-xl sm:text-2xl md:text-4xl font-bold">FAQs</p>
            <p className="text-xs sm:text-sm">
              Answers to your most common questions
            </p>

            <div className="flex flex-col gap-2 mt-2">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-sm sm:text-base">
                    What is Base Philippines?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm">
                    We are building the home of Base talent, creators, founders,
                    and builders in the Philippines. Unlocking access to capital
                    and distribution to help Base projects win!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-sm sm:text-base">
                    How can I become a contributor?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm">
                    You can fill up this form if you are interested:{" "}
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdUrXLlB70lrzi_hHBbHF0RCTLmrmxgQDbYeSPhHGA3l94BVQ/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      BASE
                    </a>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-sm sm:text-base">
                    Who can join Base Philippines?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm">
                    Anyone interested in blockchain and Web3 can join Base
                    Philippines, including developers, content creators,
                    marketers, business developers, and community managers. The
                    goal is to create a talent pool that includes both technical
                    and non-technical contributors.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-sm sm:text-base">
                    Are there any membership fees?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm">
                    No, there are no membership fees to become a Base
                    Philippines contributor. However, contributors are expected
                    to actively participate by creating content, organizing
                    events, and helping grow the community.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-sm sm:text-base">
                    Does Base Philippines provide funding for blockchain
                    projects?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm">
                    Yes, Base Philippines offers various forms of support
                    including bounties and content grants for contributors. We
                    also aim to connect promising projects with capital and
                    opportunities within the ecosystem.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-sm sm:text-base">
                    {`Does Base Philippines host hackathons?`}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm">
                    {` We prefer incubation programs over hackathons. We believe
                    incubation programs provide better support and produce more
                    successful outcomes than hackathons, which often don't lead to
                    sustained development after the event.`}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-sm sm:text-base">
                    {`How can I participate in Base Philippines events?`}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm">
                    {`You can follow Base Philippines on different social media
                    channels (Facebook, Twitter, TikTok, LinkedIn) under the
                    handle "@basepilipinas" to stay updated on upcoming events.
                    You can attend community events, AMAs, workshops, and town
                    halls organized by Base or fellow contributors.`}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-sm sm:text-base">
                    Can I volunteer to help with events?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm">
                    Yes, we encourage contributors to organize and host their
                    own events, from small meetups (10-15 people) to online
                    workshops and AMAs. We can provide presentation materials
                    and support for contributors who want to organize events to
                    grow the community.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
