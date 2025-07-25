"use client";

import type React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EVENTS } from "@/sources/events";
import { CTA_ITEMS } from "@/sources/hero";
import { MISSIONS } from "@/sources/missions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [socialsOpen, setSocialsOpen] = useState(false);

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
        <section className="flex flex-col items-center justify-center my-12">
          <div className="relative flex items-center justify-center w-fit mx-auto" style={{ minHeight: 80, minWidth: 220 }}>
            <Link href="/contributors" className="flex items-center gap-4 group cursor-pointer z-10">
              <Image
                src="/logo/Base_Symbol_White.svg"
                alt="Base Logo"
                width={40}
                height={40}
                className="drop-shadow-[0_0_24px_#3b82f6] group-hover:scale-110 transition-transform duration-200 z-10"
                priority
              />
              <span className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center group-hover:text-blue-200 transition-colors duration-200 z-10 drop-shadow-[0_0_16px_#3b82f6]">
                Our Team
              </span>
            </Link>
            {/* Base Circle */}
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" style={{ width: 180, height: 180 }}>
              <span className="block w-full h-full animate-base-spin" style={{ boxSizing: 'border-box' }}>
                <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="90" cy="90" r="88" stroke="white" strokeWidth="2" fill="none" />
                  <ellipse cx="90" cy="90" rx="88" ry="28" stroke="white" strokeWidth="1.2" fill="none" opacity="0.5" />
                  <ellipse cx="90" cy="90" rx="88" ry="58" stroke="white" strokeWidth="1.2" fill="none" opacity="0.3" />
                  <ellipse cx="90" cy="90" rx="88" ry="80" stroke="white" strokeWidth="1.2" fill="none" opacity="0.2" />
                  <ellipse cx="90" cy="90" rx="28" ry="88" stroke="white" strokeWidth="1.2" fill="none" opacity="0.5" />
                  <ellipse cx="90" cy="90" rx="58" ry="88" stroke="white" strokeWidth="1.2" fill="none" opacity="0.3" />
                  <ellipse cx="90" cy="90" rx="80" ry="88" stroke="white" strokeWidth="1.2" fill="none" opacity="0.2" />
                </svg>
              </span>
            </span>
          </div>
        </section>

        {/* Join Us */}
        <section
          id="join-us"
          className="relative flex flex-col items-center justify-center p-4 sm:p-6 py-14 sm:py-20"
        >
          {/* Animated SVG network background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <svg width="600" height="220" viewBox="0 0 600 220" fill="none" className="w-full h-full max-w-4xl opacity-40 blur-sm animate-pulse-slow">
              <g stroke="#38bdf8" strokeWidth="1.2" opacity="0.25">
                <circle cx="120" cy="110" r="90" />
                <circle cx="300" cy="110" r="100" />
                <circle cx="480" cy="110" r="90" />
                <ellipse cx="300" cy="110" rx="250" ry="80" />
                <ellipse cx="300" cy="110" rx="180" ry="60" />
                <ellipse cx="300" cy="110" rx="120" ry="40" />
                <polyline points="50,110 300,30 550,110 300,190 50,110" />
                <polyline points="120,20 300,110 480,200" />
                <polyline points="120,200 300,110 480,20" />
              </g>
              <g>
                <circle cx="120" cy="110" r="5" fill="#38bdf8" />
                <circle cx="300" cy="30" r="4" fill="#0ea5e9" />
                <circle cx="480" cy="110" r="5" fill="#38bdf8" />
                <circle cx="300" cy="190" r="4" fill="#0ea5e9" />
                <circle cx="300" cy="110" r="6" fill="#06b6d4" />
                <circle cx="120" cy="20" r="3" fill="#0ea5e9" />
                <circle cx="120" cy="200" r="3" fill="#0ea5e9" />
                <circle cx="480" cy="20" r="3" fill="#0ea5e9" />
                <circle cx="480" cy="200" r="3" fill="#0ea5e9" />
              </g>
            </svg>
          </div>

          {/* Partner/Tech Logos - REMOVED */}

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-center mb-3">
              <span className="block text-white/90">Unleash the future</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">Join our community.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 text-center mb-7 max-w-2xl">
              Be part of a thriving network of innovators, builders, and dreamers. Shape the next wave of Web3 in the Philippines and beyond.
            </p>
            {/* Live Members Counter - REMOVED */}
            <Link
              href="/join"
              className="group mt-2 sm:mt-4 px-7 py-3 border-2 border-white text-white rounded-full flex items-center gap-3 text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-blue-700 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              JOIN US NOW
              <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            {/* Mini Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
              <div className="feature-card-hover flex flex-col items-center bg-white/5 border border-cyan-400/30 rounded-xl p-4 backdrop-blur-sm">
                <svg className="feature-icon-glow w-8 h-8 mb-2 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0V4m0 10l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-white font-semibold text-base">For Builders</span>
                <span className="text-white/60 text-xs mt-1 text-center">Collaborate, code, and launch projects</span>
              </div>
              <div className="feature-card-hover flex flex-col items-center bg-white/5 border border-cyan-400/30 rounded-xl p-4 backdrop-blur-sm">
                <svg className="feature-icon-glow w-8 h-8 mb-2 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-white font-semibold text-base">For Learners</span>
                <span className="text-white/60 text-xs mt-1 text-center">Workshops, resources, and mentorship</span>
              </div>
              <div className="feature-card-hover flex flex-col items-center bg-white/5 border border-cyan-400/30 rounded-xl p-4 backdrop-blur-sm">
                <svg className="feature-icon-glow w-8 h-8 mb-2 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5" /><circle cx="12" cy="7" r="4" /></svg>
                <span className="text-white font-semibold text-base">For Dreamers</span>
                <span className="text-white/60 text-xs mt-1 text-center">Network, share ideas, and get inspired</span>
              </div>
            </div>
          </div>
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

            <div className="flex justify-center">
              <Link
                href="/book-now"
                className="mt-4 sm:mt-6 w-fit px-7 py-3 border-2 border-white text-white rounded-full flex items-center gap-3 text-lg font-bold transition-all duration-300 bg-transparent hover:bg-white hover:text-blue-700 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                BOOK NOW
              </Link>
            </div>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 items-stretch">
              {EVENTS.slice(0, 6).map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="w-full h-auto lg:h-[540px] flex flex-col bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 rounded-3xl shadow-xl overflow-hidden transition-transform duration-200 hover:scale-105 cursor-pointer"
                >
                  {/* Event Image Banner */}
                  <div className="relative w-full aspect-[1/1] sm:aspect-[4/3] rounded-t-3xl overflow-hidden bg-blue-900 min-h-[120px] sm:min-h-[180px] shadow-md">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover object-left w-full h-full"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      quality={90}
                      priority
                    />
                    <span className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-950/90 to-transparent z-10"></span>
                  </div>
                  {/* Card Content */}
                  <div className="flex-1 flex flex-col justify-between p-5 sm:p-6 gap-4 z-20">
                    {/* Title and Subtitle */}
                    <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-1">
                      {event.title.split('Base Philippines').length > 1 ? (
                        <>
                          {event.title.split('Base Philippines')[0]}
                          <span className="text-blue-400">Base Philippines</span>
                          {event.title.split('Base Philippines')[1]}
                        </>
                      ) : (
                        event.title
                      )}
                    </h3>
                    {/* Details Row */}
                    <div className="flex flex-wrap gap-6 text-white/90 text-sm mb-2 items-center">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="4"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    {/* Session Topic Box */}
                    <div className="bg-blue-900/60 border border-blue-700 rounded-xl p-4 mb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 17l4 4 4-4m-4-5v9"/><rect x="3" y="3" width="18" height="4" rx="2"/></svg>
                        <span className="font-semibold text-white">Session Topic</span>
                      </div>
                      <div className="text-white/90 font-bold text-base mb-1">{event.title}</div>
                      {event.sentence && event.sentence.length <= 160 && (
                        <div className="text-white/70 text-sm">{event.sentence}</div>
                      )}
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-blue-700/80 text-white text-xs font-semibold px-3 py-1 rounded-full">Blockchain</span>
                      <span className="bg-blue-800/80 text-white text-xs font-semibold px-3 py-1 rounded-full">Web3</span>
                      <span className="bg-blue-600/80 text-white text-xs font-semibold px-3 py-1 rounded-full">Base Network</span>
                      <span className="bg-green-700/80 text-white text-xs font-semibold px-3 py-1 rounded-full">Philippines</span>
                    </div>
                  </div>
                </Link>
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
