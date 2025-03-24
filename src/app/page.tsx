"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, CalendarIcon, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { EVENTS } from "@/sources/events";
import { CTA_ITEMS } from "@/sources/hero";
import { MISSIONS } from "@/sources/missions";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

export default function Home() {
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

  const toggleSocials = () => {
    setSocialsOpen(!socialsOpen);
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

  return (
    <>
      {/* Socials Panel */}
      {socialsOpen && (
        <div className="fixed top-20 left-0 right-0 z-50 px-4 min-[768px]:left-1/2 min-[768px]:right-auto min-[768px]:transform min-[768px]:-translate-x-1/2">
          <div className="w-full min-[768px]:w-[600px] max-w-[100%]">
            <div className="relative border border-gray-500/30 rounded-xl bg-black/40 backdrop-blur-sm p-4">
              {/* Top Navigation */}
              <div className="flex flex-col min-[481px]:flex-row justify-between items-start min-[481px]:items-center mb-6">
                <button
                  onClick={toggleSocials}
                  className="text-white mb-4 min-[481px]:mb-0"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="flex flex-wrap gap-4 min-[481px]:gap-6">
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
              <div className="grid grid-cols-1 min-[481px]:grid-cols-2 gap-6">
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
                <div className="flex items-center justify-center mt-4 min-[481px]:mt-0">
                  <div className="w-20 h-20 min-[481px]:w-24 min-[481px]:h-24 relative flex items-center justify-center">
                    <div
                      className="w-16 h-16 min-[481px]:w-20 min-[481px]:h-20 border-2 border-blue-500/80 rounded-full border-dashed animate-spin"
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

      <div className="flex flex-col gap-8 min-[481px]:gap-12 min-[768px]:gap-16">
        {/* Hero */}
        <section
          id="hero"
          className="relative w-full flex items-center justify-center p-4 min-[481px]:p-6 py-16 min-[481px]:py-20 overflow-hidden"
        >
          {/* Light Streak Effect */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 animate-lightStreak"></div>
          </div>

          <div className="w-full max-w-[1440px] flex flex-col gap-8 min-[768px]:flex-row min-[768px]:gap-10 min-[768px]:max-w-[1040px] relative z-10">
            {/* Left Section (Logo + Text Content) */}
            <div className="flex flex-col gap-4 min-[481px]:gap-6 text-white min-[768px]:w-1/2">
              {/* Base Philippines Branding */}
              <div className="flex flex-col items-center min-[768px]:items-start gap-2">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo/Base_Symbol_White.svg"
                    alt="Base Philippines Logo"
                    width={100}
                    height={100}
                    className="w-12 h-12 min-[481px]:w-14 min-[481px]:h-14 min-[768px]:w-16 min-[768px]:h-16 object-contain"
                  />
                  <p className="text-xl min-[481px]:text-2xl min-[768px]:text-3xl font-semibold tracking-widest uppercase text-white">
                    Base Philippines
                  </p>
                </div>
              </div>

              {/* Heading & Description */}
              <h1 className="text-2xl min-[481px]:text-3xl min-[768px]:text-5xl min-[1024px]:text-6xl font-bold leading-tight text-center min-[768px]:text-left">
                Join the <br /> Web3 Revolution
              </h1>
              <p className="text-sm min-[768px]:text-base min-[1024px]:text-lg text-white/80 text-center min-[768px]:text-left">
                We are creating a space for innovators, developers, and
                entrepreneurs in the Philippines, providing the resources and
                support they need to succeed.
              </p>

              {/* Join Button */}
              <div className="flex justify-center min-[768px]:justify-start">
                <button
                  className="w-fit px-4 min-[481px]:px-6 py-2 min-[481px]:py-3 border-2 border-white text-white rounded-full flex items-center gap-2 transition-all duration-300
            hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                >
                  <span className="text-sm min-[481px]:text-base min-[1024px]:text-lg">
                    JOIN US NOW
                  </span>
                </button>
              </div>
            </div>

            {/* Right Section (CTA Buttons) */}
            <div className="flex flex-col gap-3 min-[481px]:gap-4 min-[768px]:w-1/2">
              {CTA_ITEMS.map(({ icon, title, description }) => (
                <div
                  key={title}
                  className="relative flex items-center gap-3 min-[481px]:gap-4 p-3 min-[481px]:p-4 border border-white/30 rounded-2xl w-full
            backdrop-blur-md bg-white/10 transition-all duration-300
            hover:border-white hover:shadow-[0_0_20px_rgba(0,255,255,0.8)]
            before:absolute before:top-0 before:left-0 before:w-full before:h-full
            before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
            before:bg-[length:200%_100%] before:animate-shimmer before:rounded-2xl"
                >
                  <Image
                    src={icon || "/placeholder.svg"}
                    alt={title}
                    className="w-10 h-10 min-[481px]:w-12 min-[481px]:h-12 object-contain"
                    width={100}
                    height={100}
                  />
                  <div>
                    <p className="text-base min-[481px]:text-lg font-semibold text-white">
                      {title}
                    </p>
                    <p className="text-xs min-[481px]:text-sm text-white/80">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section
          id="about"
          className="py-10 min-[481px]:py-12 px-4 min-[481px]:px-6"
        >
          <div className="max-w-7xl mx-auto">
            <h1 className="text-center text-2xl min-[481px]:text-3xl min-[768px]:text-4xl font-bold mb-8 min-[481px]:mb-12">
              ABOUT BASE PHILIPPINES
            </h1>

            <div className="grid grid-cols-1 min-[481px]:grid-cols-2 min-[1024px]:grid-cols-4 gap-4 min-[481px]:gap-6">
              {MISSIONS.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 min-[481px]:p-6 rounded-2xl
                      glass transition-all duration-300 hover:scale-[1.03]
                      hover:shadow-[0px_0px_20px_rgba(255,255,255,0.15)]
                      hover:border-white/20"
                >
                  {/* Icon Container */}
                  <div className="flex items-center justify-center rounded-full p-3 min-[481px]:p-4 mb-3 min-[481px]:mb-4 bg-white/10 border border-white/20">
                    <item.icon
                      className="h-6 w-6 min-[481px]:h-8 min-[481px]:w-8 text-white/80"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-base min-[481px]:text-lg font-semibold text-white/90 mb-2 min-[481px]:mb-3 uppercase">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-xs min-[481px]:text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* BASE INSIGHT HUB Section */}
            <div className="mt-10 min-[481px]:mt-16 rounded-2xl overflow-hidden glass">
              <div className="grid grid-cols-1 min-[768px]:grid-cols-2">
                {/* Content Side */}
                <div className="p-5 min-[481px]:p-6 min-[768px]:p-8 min-[1024px]:p-10 flex flex-col justify-center">
                  <h2 className="text-xl min-[481px]:text-2xl min-[768px]:text-3xl min-[1024px]:text-4xl font-bold mb-3 min-[481px]:mb-4">
                    BASE INSIGHT HUB
                  </h2>
                  <p className="text-xs min-[481px]:text-sm min-[768px]:text-base text-white/80 mb-4 min-[481px]:mb-6">
                    Base Insight Hub is your go-to platform for learning,
                    offering YouTube videos, webinars, and resources to help you
                    stay informed, sharpen your skills, and discover new
                    opportunities in the blockchain space.
                  </p>
                  <div>
                    <button
                      className="w-fit px-3 min-[481px]:px-4 min-[768px]:px-6 py-2 min-[481px]:py-3 border-2 border-white text-white rounded-full flex items-center gap-2 transition-all duration-300
                hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                    >
                      <span className="text-sm min-[481px]:text-base min-[768px]:text-lg">
                        LEARN WITH US
                      </span>
                    </button>
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative w-full h-48 min-[481px]:h-64 min-[768px]:h-full">
                  <Image
                    src="/hero/studying_1.jpg"
                    alt="Base Insight Hub Learning Platform"
                    fill
                    className="object-cover"
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Link to Contributors Page */}
        <section className="text-center">
          <Link
            href="/contributors"
            className="text-customBlue hover:underline text-lg font-semibold"
          >
            View All Contributors ➜
          </Link>
        </section>

        {/* Join Us */}
        <section
          id="join-us"
          className="flex flex-col items-center justify-center p-4 min-[481px]:p-6 py-10 min-[481px]:py-16"
        >
          <p className="text-xl min-[481px]:text-2xl min-[768px]:text-4xl min-[1024px]:text-6xl font-bold leading-tight text-white opacity-80 text-center">
            Unleash the future Join our community.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdUrXLlB70lrzi_hHBbHF0RCTLmrmxgQDbYeSPhHGA3l94BVQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="mt-4 min-[481px]:mt-6 px-4 min-[481px]:px-6 py-2 min-[481px]:py-3 border-2 border-white text-white rounded-full flex items-center gap-2 transition-all duration-300
        hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            >
              <span className="text-sm min-[481px]:text-base min-[1024px]:text-lg">
                JOIN US NOW
              </span>
            </button>
          </a>
        </section>

        <section className="flex flex-col items-center justify-center py-10 min-[481px]:py-16 bg-transparent p-4 min-[481px]:p-6">
          <div className="text-white text-center max-w-3xl mx-auto">
            <h2 className="text-2xl min-[481px]:text-3xl min-[768px]:text-4xl min-[1024px]:text-5xl font-extrabold text-blue-300 leading-tight">
              {`Let's Connect & Schedule a Meeting!`}
            </h2>
            <p className="mt-3 min-[481px]:mt-4 text-sm min-[481px]:text-base min-[768px]:text-lg text-white/80 leading-relaxed">
              {`Schedule a meeting to discuss your goals, projects, or any inquiries
              you have. Whether you're looking for advice, collaboration, or just
              a meaningful conversation, we're here for you.`}
              <span className="font-semibold text-blue-300">
                {`Book a time that works for you, and let's get started!`}
              </span>
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <button className="mt-4 min-[481px]:mt-6 px-6 min-[481px]:px-8 py-2 min-[481px]:py-3 text-base min-[481px]:text-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition duration-300">
                  BOOK NOW
                </button>
              </DialogTrigger>
              <DialogContent className="bg-gray-700/60 backdrop-blur-md max-w-md w-[95vw] min-[481px]:w-full border-0">
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

                          <div className="grid grid-cols-1 min-[481px]:grid-cols-2 gap-4">
                            <div className="relative flex items-center">
                              <div className="absolute left-4 text-white/60">
                                <CalendarIcon className="h-5 w-5" />
                              </div>
                              <Input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full h-12 pl-12 pr-4 bg-white/20 border border-white/30 rounded-lg text-white outline-none placeholder:text-white/60"
                                required
                              />
                            </div>
                            <div className="relative flex items-center">
                              <div className="absolute left-4 text-white/60">
                                <Clock className="h-5 w-5" />
                              </div>
                              <Input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full h-12 pl-12 pr-4 bg-white/20 border border-white/30 rounded-lg text-white outline-none placeholder:text-white/60"
                                required
                              />
                            </div>
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
                      </>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          {/* Image Section */}
          <div className="mt-6 min-[481px]:mt-10 flex justify-center w-full max-w-xs min-[481px]:max-w-sm min-[768px]:max-w-lg">
            <Image
              src="/Event/WEBP/meeting.webp"
              width={100}
              height={100}
              alt="Meeting Illustration"
              className="w-full rounded-xl shadow-xl border border-white/20"
            />
          </div>
        </section>

        {/* Events */}
        <section
          id="events"
          className="py-10 min-[481px]:py-16 bg-transparent text-white"
        >
          <div className="container mx-auto py-6 min-[481px]:py-8 px-4">
            <h1 className="text-xl min-[481px]:text-2xl font-bold mb-6 min-[481px]:mb-8 text-center">
              EVENTS
            </h1>

            <div className="grid grid-cols-1 min-[481px]:grid-cols-2 min-[1024px]:grid-cols-3 gap-4 min-[481px]:gap-6">
              {EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="bg-[#1a2234] rounded-lg overflow-hidden shadow-lg h-full"
                >
                  <Link href={`/events/${event.id}`}>
                    <div className="relative h-36 min-[481px]:h-48">
                      <Image
                        src={
                          event.image || "/placeholder.svg?height=400&width=600"
                        }
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3 min-[481px]:p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-xs text-gray-400">{event.date}</p>
                          <h3 className="text-sm min-[481px]:text-base font-medium">
                            {event.title}
                          </h3>
                          <p className="text-xs min-[481px]:text-sm text-gray-400">
                            Location: {event.location}
                          </p>
                        </div>
                        <div className="text-xs text-gray-400 text-right">
                          <p>{event.time}</p>
                        </div>
                      </div>
                      <div className="flex justify-end mt-3 min-[481px]:mt-4">
                        <button className="text-xs bg-gray-700 hover:bg-gray-600 px-2 min-[481px]:px-3 py-1 rounded">
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
        <section className="flex items-center justify-center w-full py-8 min-[481px]:py-12">
          <div className="w-full flex flex-col gap-3 min-[481px]:gap-4 p-4 min-[481px]:p-8 max-w-[1040px]">
            <p className="text-xl min-[481px]:text-2xl min-[768px]:text-4xl font-bold">
              FAQs
            </p>
            <p className="text-xs min-[481px]:text-sm">
              Answers to your most common questions
            </p>

            <div className="flex flex-col gap-2 mt-2">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-sm min-[481px]:text-base">
                    What is Base Philippines?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs min-[481px]:text-sm">
                    We are building the home of Base talent, creators, founders,
                    and builders in the Philippines. Unlocking access to capital
                    and distribution to help Base projects win!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-sm min-[481px]:text-base">
                    How can I become a contributor?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs min-[481px]:text-sm">
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
                  <AccordionTrigger className="text-sm min-[481px]:text-base">
                    Who can join Base Philippines?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs min-[481px]:text-sm">
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
                  <AccordionTrigger className="text-sm min-[481px]:text-base">
                    Are there any membership fees?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs min-[481px]:text-sm">
                    No, there are no membership fees to become a Base
                    Philippines contributor. However, contributors are expected
                    to actively participate by creating content, organizing
                    events, and helping grow the community.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-sm min-[481px]:text-base">
                    Does Base Philippines provide funding for blockchain
                    projects?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs min-[481px]:text-sm">
                    Yes, Base Philippines offers various forms of support
                    including bounties and content grants for contributors. We
                    also aim to connect promising projects with capital and
                    opportunities within the ecosystem.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-sm min-[481px]:text-base">
                    {`Does Base Philippines host hackathons?`}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs min-[481px]:text-sm">
                    {` We prefer incubation programs over hackathons. We believe
                    incubation programs provide better support and produce more
                    successful outcomes than hackathons, which often don't lead to
                    sustained development after the event.`}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-sm min-[481px]:text-base">
                    {`How can I participate in Base Philippines events?`}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs min-[481px]:text-sm">
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
                  <AccordionTrigger className="text-sm min-[481px]:text-base">
                    Can I volunteer to help with events?
                  </AccordionTrigger>
                  <AccordionContent className="text-xs min-[481px]:text-sm">
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
