"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

export default function Navbar() {
  const [socialsOpen, setSocialsOpen] = useState(false);

  const toggleSocials = () => {
    setSocialsOpen(!socialsOpen);
  };

  return (
    <>
      <div className="w-full sticky top-0 right-0 py-4 flex justify-center items-center z-50">
        <div className="sm:max-w-none flex flex-col sm:flex-row self-center text-center items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 py-2 sm:py-3 border border-gray-500 rounded-xl bg-black/50 backdrop-blur-lg text-white">
          <div className="flex w-[100%] justify-center items-center gap-3 sm:gap-6 text-sm sm:text-base">
            <Link href="/#hero" className="flex items-center justify-center">
              <Image
                src="/logo/Base_Symbol_White.svg"
                alt="Logo"
                width={30}
                height={40}
                className="object-contain transition-transform duration-300 hover:rotate-[360deg]"
              />
            </Link>
            <Link href="/#join-us" className="hover:text-gray-300">
              Join
            </Link>
            <Link href="/#events" className="hover:text-gray-300">
              Events
            </Link>
            <Link href="/hire" className="hover:text-gray-300">
              Hire
            </Link>
            <Link href="/#about" className="hover:text-gray-300">
              About
            </Link>
            <button
              onClick={toggleSocials}
              className={`hover:text-gray-300 ${
                socialsOpen ? "bg-gray-700/70 px-4 py-1 rounded-md" : ""
              }`}
            >
              Socials
            </button>
          </div>
        </div>
      </div>

      {socialsOpen && (
        <div className="fixed top-20 left-0 right-0 z-50 px-4 sm:left-1/2 sm:right-auto sm:transform sm:-translate-x-1/2">
          <div className="w-full sm:w-[600px] max-w-[100%]">
            <div className="relative border border-gray-500/30 rounded-xl bg-black/40 backdrop-blur-sm p-4">
              <div className="flex justify-between items-center mb-6">
                <button onClick={toggleSocials} className="text-white">
                  <X className="h-5 w-5" />
                </button>
                <span className="text-white bg-gray-700/50 px-3 py-1 rounded-md">
                  Connect with us
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <a
                  href="https://facebook.com/basepilipinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl glass border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-[0px_0px_20px_rgba(255,255,255,0.15)]"
                >
                  <div className="h-12 w-12 rounded-full bg-[#1877F2]/20 flex items-center justify-center">
                    <FaFacebookF className="h-6 w-6 text-[#1877F2]" />
                  </div>
                  <span className="text-white text-sm">Facebook</span>
                </a>

                <a
                  href="https://twitter.com/basepilipinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl glass border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-[0px_0px_20px_rgba(255,255,255,0.15)]"
                >
                  <div className="h-12 w-12 rounded-full bg-black/20 flex items-center justify-center">
                    <FaXTwitter className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-white text-sm">Twitter</span>
                </a>

                <a
                  href="https://www.linkedin.com/company/base-pilipinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl glass border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-[0px_0px_20px_rgba(255,255,255,0.15)]"
                >
                  <div className="h-12 w-12 rounded-full bg-[#0A66C2]/20 flex items-center justify-center">
                    <FaLinkedinIn className="h-6 w-6 text-[#0A66C2]" />
                  </div>
                  <span className="text-white text-sm">LinkedIn</span>
                </a>

                <a
                  href="https://instagram.com/basepilipinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl glass border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-[0px_0px_20px_rgba(255,255,255,0.15)]"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#F58529]/20 via-[#DD2A7B]/20 to-[#515BD4]/20 flex items-center justify-center">
                    <FaInstagram className="h-6 w-6 text-transparent bg-clip-text bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4]" />
                  </div>
                  <span className="text-white text-sm">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
