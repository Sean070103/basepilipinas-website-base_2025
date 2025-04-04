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
            {/* Updated Hire link to point to the hire page */}
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
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <button
                  onClick={toggleSocials}
                  className="text-white mb-4 sm:mb-0"
                >
                  <X className="h-5 w-5" />
                </button>
                <span className="text-white bg-gray-700/50 px-3 py-1 rounded-md">
                  Socials
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Link
                    href="https://www.facebook.com/basepilipinas"
                    className="flex items-center gap-3 text-white text-lg hover:text-blue-400"
                  >
                    <FaFacebookF className="h-5 w-5" /> Facebook
                  </Link>
                  <Link
                    href="https://x.com/basepilipinas"
                    className="flex items-center gap-3 text-white text-lg hover:text-blue-400"
                  >
                    <FaXTwitter className="h-5 w-5" /> X
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/basepilipinas"
                    className="flex items-center gap-3 text-white text-lg hover:text-blue-400"
                  >
                    <FaLinkedinIn className="h-5 w-5" /> LinkedIn
                  </Link>
                  <Link
                    href="https://www.instagram.com/basepilipinas"
                    className="flex items-center gap-3 text-white text-lg hover:text-pink-400"
                  >
                    <FaInstagram className="h-5 w-5" /> Instagram
                  </Link>
                </div>
                <div className="flex items-center justify-center mt-4 sm:mt-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-blue-500/80 rounded-full border-dashed animate-spin-slow"></div>
                    <Image
                      src="/logo/Base_Symbol_White.svg"
                      alt="Base Logo"
                      width={40}
                      height={40}
                      className="absolute object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </>
  );
}
