<<<<<<< HEAD
"use client";

import type React from "react";
=======
'use client';

import type React from 'react';
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
<<<<<<< HEAD
} from "@/components/ui/accordion";
=======
} from '@/components/ui/accordion';
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
<<<<<<< HEAD
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { EVENTS } from "@/sources/events";
import { CTA_ITEMS } from "@/sources/hero";
import { MISSIONS } from "@/sources/missions";
import { CalendarIcon, Clock, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
=======
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { EVENTS } from '@/sources/events';
import { CTA_ITEMS } from '@/sources/hero';
import { MISSIONS } from '@/sources/missions';
import { CalendarIcon, Clock, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTelegram,
  FaXTwitter,
<<<<<<< HEAD
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
=======
} from 'react-icons/fa6';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    subject: '',
    date: '',
    time: '',
  });
  const [notification, setNotification] = useState('');
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

<<<<<<< HEAD
    console.log("Meeting Scheduled with details:", formData);

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
=======
    console.log('Meeting Scheduled with details:', formData);

    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
<<<<<<< HEAD
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
                  src="/base/Base_Symbol_Blue.png"
                  alt="Base Philippines Logo"
                  width={100}
                  height={100}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
                <p
                  className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-widest uppercase
          bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
=======
        console.log('Email sent successfully');
        setNotification('Meeting scheduled successfully!');
      } else {
        console.error('Failed to send email');
        setNotification('Failed to schedule meeting. Try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setNotification('An error occurred. Please try again later.');
    }

    setFormData({
      name: '',
      email: '',
      contact: '',
      subject: '',
      date: '',
      time: '',
    });
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className='flex flex-col gap-8 sm:gap-12 md:gap-16'>
      {/* Hero */}
      <section
        id='hero'
        className='relative w-full flex items-center justify-center p-4 sm:p-6 py-16 sm:py-20 overflow-hidden'
      >
        {/* Light Streak Effect */}
        <div className='absolute inset-0'>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 animate-lightStreak'></div>
        </div>

        <div className='w-full max-w-[1440px] flex flex-col gap-8 md:flex-row md:gap-10 md:max-w-[1040px] relative z-10'>
          {/* Left Section (Logo + Text Content) */}
          <div className='flex flex-col gap-4 sm:gap-6 text-white md:w-1/2'>
            {/* Base Philippines Branding */}
            <div className='flex flex-col items-center md:items-start gap-2'>
              <div className='flex items-center gap-3'>
                <Image
                  src='/base/Base_Symbol_Blue.png'
                  alt='Base Philippines Logo'
                  width={100}
                  height={100}
                  className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain'
                />
                <p
                  className='text-xl sm:text-2xl md:text-3xl font-semibold tracking-widest uppercase
          bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text'
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                >
                  Base Philippines
                </p>
              </div>
<<<<<<< HEAD
              <div className="w-28 sm:w-32 md:w-40 h-[2px] bg-cyan-400/50 rounded-full animate-pulse"></div>
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
              <button
                className="w-fit px-4 sm:px-6 py-2 sm:py-3 border-2 border-white text-white rounded-full flex items-center gap-2 transition-all duration-300
          hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              >
                <span className="text-sm sm:text-base lg:text-lg">
=======
              <div className='w-28 sm:w-32 md:w-40 h-[2px] bg-cyan-400/50 rounded-full animate-pulse'></div>
            </div>

            {/* Heading & Description */}
            <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left'>
              Join the <br /> Web3 Revolution
            </h1>
            <p className='text-sm md:text-base lg:text-lg text-white/80 text-center md:text-left'>
              Base Philippines accelerates the most promising projects in the
              Solana ecosystem. As the official Solana Superteam in the
              Philippines, we empower innovation and growth in Web3.
            </p>

            {/* Join Button */}
            <div className='flex justify-center md:justify-start'>
              <button
                className='w-fit px-4 sm:px-6 py-2 sm:py-3 border-2 border-white text-white rounded-full flex items-center gap-2 transition-all duration-300
          hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]'
              >
                <span className='text-sm sm:text-base lg:text-lg'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                  JOIN US NOW
                </span>
              </button>
            </div>
          </div>

          {/* Right Section (CTA Buttons) */}
<<<<<<< HEAD
          <div className="flex flex-col gap-3 sm:gap-4 md:w-1/2">
            {CTA_ITEMS.map(({ icon, title, description }) => (
              <div
                key={title}
                className="relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-white/30 rounded-2xl w-full
=======
          <div className='flex flex-col gap-3 sm:gap-4 md:w-1/2'>
            {CTA_ITEMS.map(({ icon, title, description }) => (
              <div
                key={title}
                className='relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-white/30 rounded-2xl w-full
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
          backdrop-blur-md bg-white/10 transition-all duration-300
          hover:border-white hover:shadow-[0_0_20px_rgba(0,255,255,0.8)]
          before:absolute before:top-0 before:left-0 before:w-full before:h-full
          before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
<<<<<<< HEAD
          before:bg-[length:200%_100%] before:animate-shimmer before:rounded-2xl"
              >
                <Image
                  src={icon || "/placeholder.svg"}
                  alt={title}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
=======
          before:bg-[length:200%_100%] before:animate-shimmer before:rounded-2xl'
              >
                <Image
                  src={icon || '/placeholder.svg'}
                  alt={title}
                  className='w-10 h-10 sm:w-12 sm:h-12 object-contain'
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                  width={100}
                  height={100}
                />
                <div>
<<<<<<< HEAD
                  <p className="text-base sm:text-lg font-semibold text-white">
                    {title}
                  </p>
                  <p className="text-xs sm:text-sm text-white/80">
=======
                  <p className='text-base sm:text-lg font-semibold text-white'>
                    {title}
                  </p>
                  <p className='text-xs sm:text-sm text-white/80'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
<<<<<<< HEAD
      <section className="py-10 sm:py-12 px-4 sm:px-6">
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
=======
      <section className='py-10 sm:py-12 px-4 sm:px-6'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12'>
            ABOUT BASE PHILIPPINES
          </h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
            {MISSIONS.map((item, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl
                    glass transition-all duration-300 hover:scale-[1.03]
                    hover:shadow-[0px_0px_20px_rgba(255,255,255,0.15)]
                    hover:border-white/20'
              >
                {/* Icon Container */}
                <div className='flex items-center justify-center rounded-full p-3 sm:p-4 mb-3 sm:mb-4 bg-white/10 border border-white/20'>
                  <item.icon
                    className='h-6 w-6 sm:h-8 sm:w-8 text-white/80'
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
<<<<<<< HEAD
                <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-2 sm:mb-3 uppercase">
=======
                <h3 className='text-base sm:text-lg font-semibold text-white/90 mb-2 sm:mb-3 uppercase'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                  {item.title}
                </h3>

                {/* Description */}
<<<<<<< HEAD
                <p className="text-white/70 text-xs sm:text-sm">
=======
                <p className='text-white/70 text-xs sm:text-sm'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* BASE INSIGHT HUB Section */}
<<<<<<< HEAD
          <div className="mt-10 sm:mt-16 rounded-2xl overflow-hidden glass">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Content Side */}
              <div className="p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                  BASE INSIGHT HUB
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-white/80 mb-4 sm:mb-6">
=======
          <div className='mt-10 sm:mt-16 rounded-2xl overflow-hidden glass'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              {/* Content Side */}
              <div className='p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center'>
                <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4'>
                  BASE INSIGHT HUB
                </h2>
                <p className='text-xs sm:text-sm md:text-base text-white/80 mb-4 sm:mb-6'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                  Base Insight Hub is your go-to platform for learning, offering
                  YouTube videos, webinars, and resources to help you stay
                  informed, sharpen your skills, and discover new opportunities
                  in the blockchain space.
                </p>
                <div>
                  <button
<<<<<<< HEAD
                    className="w-fit px-3 sm:px-4 md:px-6 py-2 sm:py-3 border-2 border-white text-white rounded-full flex items-center gap-2 transition-all duration-300
              hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                  >
                    <span className="text-sm sm:text-base md:text-lg">
=======
                    className='w-fit px-3 sm:px-4 md:px-6 py-2 sm:py-3 border-2 border-white text-white rounded-full flex items-center gap-2 transition-all duration-300
              hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]'
                  >
                    <span className='text-sm sm:text-base md:text-lg'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                      LEARN WITH US
                    </span>
                  </button>
                </div>
              </div>

              {/* Image Side */}
<<<<<<< HEAD
              <div className="relative w-full h-48 sm:h-64 md:h-full">
                <Image
                  src="/hero/studying_1.jpg"
                  alt="Base Insight Hub Learning Platform"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
=======
              <div className='relative w-full h-48 sm:h-64 md:h-full'>
                <Image
                  src='/hero/studying_1.jpg'
                  alt='Base Insight Hub Learning Platform'
                  fill
                  className='object-cover'
                  sizes='(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw'
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Link to Contributors Page */}
<<<<<<< HEAD
      <section className="text-center">
        <Link
          href="/contributors"
          className="text-customBlue hover:underline text-lg font-semibold"
=======
      <section className='text-center'>
        <Link
          href='/contributors'
          className='text-customBlue hover:underline text-lg font-semibold'
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
        >
          View All Contributors ➜
        </Link>
      </section>

      {/* Join Us */}
<<<<<<< HEAD
      <section className="flex flex-col items-center justify-center p-4 sm:p-6 py-10 sm:py-16">
        <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold leading-tight text-white opacity-80 text-center">
=======
      <section className='flex flex-col items-center justify-center p-4 sm:p-6 py-10 sm:py-16'>
        <p className='text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold leading-tight text-white opacity-80 text-center'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
          Unleash the future Join our community.
        </p>

        <a
<<<<<<< HEAD
          href="https://docs.google.com/forms/d/e/1FAIpQLSdUrXLlB70lrzi_hHBbHF0RCTLmrmxgQDbYeSPhHGA3l94BVQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 border-2 border-white text-white rounded-full flex items-center gap-2 transition-all duration-300
      hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          >
            <span className="text-sm sm:text-base lg:text-lg">JOIN US NOW</span>
=======
          href='https://docs.google.com/forms/d/e/1FAIpQLSdUrXLlB70lrzi_hHBbHF0RCTLmrmxgQDbYeSPhHGA3l94BVQ/viewform'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button
            className='mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 border-2 border-white text-white rounded-full flex items-center gap-2 transition-all duration-300
      hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]'
          >
            <span className='text-sm sm:text-base lg:text-lg'>JOIN US NOW</span>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
          </button>
        </a>
      </section>

<<<<<<< HEAD
      <section className="flex flex-col items-center justify-center py-10 sm:py-16 bg-transparent p-4 sm:p-6">
        <div className="text-white text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-300 leading-tight">
            {`Let's Connect & Schedule a Meeting!`}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
            {`Schedule a meeting to discuss your goals, projects, or any inquiries
            you have. Whether you're looking for advice, collaboration, or just
            a meaningful conversation, we're here for you.`}
            <span className="font-semibold text-blue-300">
=======
      <section className='flex flex-col items-center justify-center py-10 sm:py-16 bg-transparent p-4 sm:p-6'>
        <div className='text-white text-center max-w-3xl mx-auto'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-300 leading-tight'>
            {`Let's Connect & Schedule a Meeting!`}
          </h2>
          <p className='mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/80 leading-relaxed'>
            {`Schedule a meeting to discuss your goals, projects, or any inquiries
            you have. Whether you're looking for advice, collaboration, or just
            a meaningful conversation, we're here for you.`}
            <span className='font-semibold text-blue-300'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
              {`Book a time that works for you, and let's get started!`}
            </span>
          </p>
          <Dialog>
            <DialogTrigger asChild>
<<<<<<< HEAD
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
=======
              <button className='mt-4 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition duration-300'>
                BOOK NOW
              </button>
            </DialogTrigger>
            <DialogContent className='bg-gray-700/60 backdrop-blur-md max-w-md w-[95vw] sm:w-full border-0'>
              <button className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
                <X className='h-4 w-4 text-white' />
                <span className='sr-only'>Close</span>
              </button>
              <DialogHeader className='p-0'>
                <DialogTitle className='text-center text-2xl font-bold text-white'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                  Schedule a Meeting with us!
                </DialogTitle>
                <DialogDescription asChild>
                  <div>
<<<<<<< HEAD
                    <p className="text-white/80 text-center text-sm mt-2">
=======
                    <p className='text-white/80 text-center text-sm mt-2'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                      Connect with us at your convenience! Book a meeting to
                      discuss your ideas, projects, or inquiries.
                    </p>
                    <>
                      {notification && (
<<<<<<< HEAD
                        <div className="text-green-400 text-center font-semibold mt-4">
=======
                        <div className='text-green-400 text-center font-semibold mt-4'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                          {notification}
                        </div>
                      )}

<<<<<<< HEAD
                      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
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

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
=======
                      <form className='mt-4 space-y-4' onSubmit={handleSubmit}>
                        <Input
                          type='text'
                          name='name'
                          value={formData.name}
                          onChange={handleChange}
                          placeholder='Name'
                          required
                          className='w-full h-12 px-4 bg-white/20 border border-white/30 rounded-lg text-white outline-none placeholder:text-white/60'
                        />
                        <Input
                          type='email'
                          name='email'
                          value={formData.email}
                          onChange={handleChange}
                          placeholder='Email'
                          required
                          pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
                          className='w-full h-12 px-4 bg-white/20 border border-white/30 rounded-lg text-white outline-none placeholder:text-white/60'
                        />
                        <Input
                          type='text'
                          name='contact'
                          value={formData.contact}
                          onChange={handleChange}
                          placeholder='Contact Number'
                          required
                          minLength={10}
                          className='w-full h-12 px-4 bg-white/20 border border-white/30 rounded-lg text-white outline-none placeholder:text-white/60'
                        />
                        <Input
                          type='text'
                          name='subject'
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder='Subject / Purpose'
                          required
                          className='w-full h-12 px-4 bg-white/20 border border-white/30 rounded-lg text-white outline-none placeholder:text-white/60'
                        />

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                          <div className='relative flex items-center'>
                            <div className='absolute left-4 text-white/60'>
                              <CalendarIcon className='h-5 w-5' />
                            </div>
                            <Input
                              type='date'
                              name='date'
                              value={formData.date}
                              onChange={handleChange}
                              className='w-full h-12 pl-12 pr-4 bg-white/20 border border-white/30 rounded-lg text-white outline-none placeholder:text-white/60'
                              required
                            />
                          </div>
                          <div className='relative flex items-center'>
                            <div className='absolute left-4 text-white/60'>
                              <Clock className='h-5 w-5' />
                            </div>
                            <Input
                              type='time'
                              name='time'
                              value={formData.time}
                              onChange={handleChange}
                              className='w-full h-12 pl-12 pr-4 bg-white/20 border border-white/30 rounded-lg text-white outline-none placeholder:text-white/60'
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                              required
                            />
                          </div>
                        </div>

                        <button
<<<<<<< HEAD
                          type="submit"
                          className="w-full h-12 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition"
                          disabled={!formData.date || !formData.time}
                          aria-label="Submit Meeting Form"
=======
                          type='submit'
                          className='w-full h-12 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition'
                          disabled={!formData.date || !formData.time}
                          aria-label='Submit Meeting Form'
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                        >
                          Submit
                        </button>
                      </form>

<<<<<<< HEAD
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
=======
                      <div className='text-center text-white mt-6'>
                        <p className='text-sm'>Stay Connected!</p>
                        <div className='flex justify-center gap-6 mt-3'>
                          <FaFacebookF
                            className='text-white hover:text-blue-400 cursor-pointer'
                            size={20}
                          />
                          <FaXTwitter
                            className='text-white hover:text-blue-400 cursor-pointer'
                            size={20}
                          />
                          <FaLinkedinIn
                            className='text-white hover:text-blue-400 cursor-pointer'
                            size={20}
                          />
                          <FaTelegram
                            className='text-white hover:text-blue-400 cursor-pointer'
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
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
<<<<<<< HEAD
        <div className="mt-6 sm:mt-10 flex justify-center w-full max-w-xs sm:max-w-sm md:max-w-lg">
          <Image
            src="/hero/manage.png"
            width={100}
            height={100}
            alt="Meeting Illustration"
            className="w-full rounded-xl shadow-xl border border-white/20"
=======
        <div className='mt-6 sm:mt-10 flex justify-center w-full max-w-xs sm:max-w-sm md:max-w-lg'>
          <Image
            src='/hero/manage.png'
            width={100}
            height={100}
            alt='Meeting Illustration'
            className='w-full rounded-xl shadow-xl border border-white/20'
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
          />
        </div>
      </section>

      {/* Events */}
<<<<<<< HEAD
      <section id="events" className="py-10 sm:py-16 bg-transparent text-white">
        <div className="container mx-auto py-6 sm:py-8 px-4">
          <h1 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">
            EVENTS
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {EVENTS.map((event) => (
              <div
                key={event.id}
                className="bg-[#1a2234] rounded-lg overflow-hidden shadow-lg h-full"
              >
                <Link href={`/events/${event.id}`}>
                  <div className="relative h-36 sm:h-48">
                    <Image
                      src={
                        event.image || "/placeholder.svg?height=400&width=600"
                      }
                      alt={event.title}
                      fill
                      className="object-cover"
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
                      <button className="text-xs bg-gray-700 hover:bg-gray-600 px-2 sm:px-3 py-1 rounded">
=======
      <section id='events' className='py-10 sm:py-16 bg-transparent text-white'>
        <div className='container mx-auto py-6 sm:py-8 px-4'>
          <h1 className='text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center'>
            EVENTS
          </h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
            {EVENTS.map((event) => (
              <div
                key={event.id}
                className='bg-[#1a2234] rounded-lg overflow-hidden shadow-lg h-full'
              >
                <Link href={`/events/${event.id}`}>
                  <div className='relative h-36 sm:h-48'>
                    <Image
                      src={
                        event.image || '/placeholder.svg?height=400&width=600'
                      }
                      alt={event.title}
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='p-3 sm:p-4'>
                    <div className='flex justify-between items-start mb-2'>
                      <div>
                        <p className='text-xs text-gray-400'>{event.date}</p>
                        <h3 className='text-sm sm:text-base font-medium'>
                          {event.title}
                        </h3>
                        <p className='text-xs sm:text-sm text-gray-400'>
                          Location: {event.location}
                        </p>
                      </div>
                      <div className='text-xs text-gray-400 text-right'>
                        <p>{event.time}</p>
                      </div>
                    </div>
                    <div className='flex justify-end mt-3 sm:mt-4'>
                      <button className='text-xs bg-gray-700 hover:bg-gray-600 px-2 sm:px-3 py-1 rounded'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
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
<<<<<<< HEAD
      <section className="flex items-center justify-center w-full py-8 sm:py-12">
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
=======
      <section className='flex items-center justify-center w-full py-8 sm:py-12'>
        <div className='w-full flex flex-col gap-3 sm:gap-4 p-4 sm:p-8 max-w-[1040px]'>
          <p className='text-xl sm:text-2xl md:text-4xl font-bold'>FAQs</p>
          <p className='text-xs sm:text-sm'>
            Answers to your most common questions
          </p>

          <div className='flex flex-col gap-2 mt-2'>
            <Accordion type='single' collapsible className='w-full'>
              <AccordionItem value='item-1'>
                <AccordionTrigger className='text-sm sm:text-base'>
                  What is Base Philippines?
                </AccordionTrigger>
                <AccordionContent className='text-xs sm:text-sm'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                  We are building the home of Base talent, creators, founders,
                  and builders in the Philippines. Unlocking access to capital
                  and distribution to help Base projects win!
                </AccordionContent>
              </AccordionItem>
            </Accordion>

<<<<<<< HEAD
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
=======
            <Accordion type='single' collapsible className='w-full'>
              <AccordionItem value='item-2'>
                <AccordionTrigger className='text-sm sm:text-base'>
                  How can I become a contributor?
                </AccordionTrigger>
                <AccordionContent className='text-xs sm:text-sm'>
                  You can fill up this form if you are interested:{' '}
                  <a
                    href='https://docs.google.com/forms/d/e/1FAIpQLSdUrXLlB70lrzi_hHBbHF0RCTLmrmxgQDbYeSPhHGA3l94BVQ/viewform'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 underline'
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                  >
                    BASE
                  </a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

<<<<<<< HEAD
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-sm sm:text-base">
                  Who can join Base Philippines?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm">
=======
            <Accordion type='single' collapsible className='w-full'>
              <AccordionItem value='item-3'>
                <AccordionTrigger className='text-sm sm:text-base'>
                  Who can join Base Philippines?
                </AccordionTrigger>
                <AccordionContent className='text-xs sm:text-sm'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                  Anyone interested in blockchain and Web3 can join Base
                  Philippines, including developers, content creators,
                  marketers, business developers, and community managers. The
                  goal is to create a talent pool that includes both technical
                  and non-technical contributors.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

<<<<<<< HEAD
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-sm sm:text-base">
                  Are there any membership fees?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm">
=======
            <Accordion type='single' collapsible className='w-full'>
              <AccordionItem value='item-4'>
                <AccordionTrigger className='text-sm sm:text-base'>
                  Are there any membership fees?
                </AccordionTrigger>
                <AccordionContent className='text-xs sm:text-sm'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                  No, there are no membership fees to become a Base Philippines
                  contributor. However, contributors are expected to actively
                  participate by creating content, organizing events, and
                  helping grow the community.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

<<<<<<< HEAD
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-sm sm:text-base">
                  Does Base Philippines provide funding for blockchain projects?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm">
=======
            <Accordion type='single' collapsible className='w-full'>
              <AccordionItem value='item-5'>
                <AccordionTrigger className='text-sm sm:text-base'>
                  Does Base Philippines provide funding for blockchain projects?
                </AccordionTrigger>
                <AccordionContent className='text-xs sm:text-sm'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                  Yes, Base Philippines offers various forms of support
                  including bounties and content grants for contributors. We
                  also aim to connect promising projects with capital and
                  opportunities within the ecosystem.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

<<<<<<< HEAD
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-sm sm:text-base">
                  {`Does Base Philippines host hackathons?`}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm">
=======
            <Accordion type='single' collapsible className='w-full'>
              <AccordionItem value='item-6'>
                <AccordionTrigger className='text-sm sm:text-base'>
                  {`Does Base Philippines host hackathons?`}
                </AccordionTrigger>
                <AccordionContent className='text-xs sm:text-sm'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                  {` We prefer incubation programs over hackathons. We believe
                  incubation programs provide better support and produce more
                  successful outcomes than hackathons, which often don't lead to
                  sustained development after the event.`}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

<<<<<<< HEAD
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-sm sm:text-base">
                  {`How can I participate in Base Philippines events?`}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm">
=======
            <Accordion type='single' collapsible className='w-full'>
              <AccordionItem value='item-7'>
                <AccordionTrigger className='text-sm sm:text-base'>
                  {`How can I participate in Base Philippines events?`}
                </AccordionTrigger>
                <AccordionContent className='text-xs sm:text-sm'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                  {`You can follow Base Philippines on different social media
                  channels (Facebook, Twitter, TikTok, LinkedIn) under the
                  handle "@basepilipinas" to stay updated on upcoming events.
                  You can attend community events, AMAs, workshops, and town
                  halls organized by Base or fellow contributors.`}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

<<<<<<< HEAD
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-sm sm:text-base">
                  Can I volunteer to help with events?
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm">
=======
            <Accordion type='single' collapsible className='w-full'>
              <AccordionItem value='item-8'>
                <AccordionTrigger className='text-sm sm:text-base'>
                  Can I volunteer to help with events?
                </AccordionTrigger>
                <AccordionContent className='text-xs sm:text-sm'>
>>>>>>> 4d051963fa7c7803e69dabecdf7b1489b95da2e8
                  Yes, we encourage contributors to organize and host their own
                  events, from small meetups (10-15 people) to online workshops
                  and AMAs. We can provide presentation materials and support
                  for contributors who want to organize events to grow the
                  community.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
