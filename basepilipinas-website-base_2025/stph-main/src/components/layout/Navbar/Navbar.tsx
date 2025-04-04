"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const [socialsOpen, setSocialsOpen] = useState(false);

  const toggleSocials = () => {
    setSocialsOpen(!socialsOpen);
  };

  return (
    <>
      <div className="w-full sticky top-0 right-0 py-4 flex justify-center items-center content-center z-50">
        <div
          className="sm:max-w-none flex flex-col sm:flex-row self-center text-center items-center justify-between justify-items-center gap-3 sm:gap-6 px-4 sm:px-6 py-2 sm:py-3 
          border border-gray-500 rounded-xl bg-black/50 backdrop-blur-lg text-white"
        >
          {/* Navbar Links */}
          <div className="flex w-[100%] self-center justify-center items-center content-center justify-items-center gap-3 sm:gap-6 text-sm sm:text-base">
            <Link href="/#hero" className="flex items-center justify-center">
              <Image
                src="/logo/Base_Symbol_White.svg"
                alt="Logo"
                width={30}
                height={40}
                className="object-contain"
              />
            </Link>
            <Link href="/#join-us" className="hover:text-gray-300">
              Join
            </Link>
            <Link href="/#events" className="hover:text-gray-300">
              Events
            </Link>

            <button
              onClick={toggleSocials}
              className={`hover:text-gray-300 ${
                socialsOpen ? "bg-gray-700/70 px-4 py-1 rounded-md" : ""
              }`}
            >
              Socials
            </button>
            <Link href="/#about" className="hover:text-gray-300">
              About
            </Link>
          </div>
        </div>
      </div>

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
                  <Link
                    href="/#join-us"
                    className="text-white hover:text-gray-300"
                  >
                    Join
                  </Link>
                  <Link
                    href="/#events"
                    className="text-white hover:text-gray-300"
                  >
                    Events
                  </Link>
                  <Link
                    href="/#about"
                    className="text-white hover:text-gray-300"
                  >
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
                    className="flex items-center gap-3 text-white text-lg hover:text-blue-400"
                  >
                    <FaFacebookF className="h-5 w-5" />
                    Facebook
                  </Link>
                  <Link
                    href="https://x.com/basepilipinas"
                    className="flex items-center gap-3 text-white text-lg hover:text-blue-400"
                  >
                    <FaXTwitter className="h-5 w-5" />X
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/basepilipinas"
                    className="flex items-center gap-3 text-white text-lg hover:text-blue-400"
                  >
                    <FaLinkedinIn className="h-5 w-5" />
                    LinkedIn
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
    </>
  );
}
