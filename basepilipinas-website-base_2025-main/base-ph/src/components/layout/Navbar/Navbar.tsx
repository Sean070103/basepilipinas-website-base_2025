"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

export default function Navbar() {
  const [socialsOpen, setSocialsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSocials = () => {
    setSocialsOpen(!socialsOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="w-full sticky top-0 right-0 py-4 flex justify-center items-center z-50">
        <div className="sm:max-w-none flex flex-col sm:flex-row self-center text-center items-center justify-between gap-3 sm:gap-8 px-6 sm:px-8 py-3 sm:py-4 border border-gray-500/30 rounded-2xl bg-black/60 backdrop-blur-xl text-white shadow-lg shadow-black/5">
          {/* Mobile Layout */}
          <div className="flex sm:hidden items-center justify-between w-[90vw] max-w-[400px] mx-auto min-h-[12px] py-0 px-2 rounded-2xl border border-white/70 bg-transparent">
            <Link
              href="/#hero"
              className="flex items-center justify-center group transition-all duration-200 p-1 flex sm:hidden"
            >
              <Image
                src="/logo/Base_Symbol_White.svg"
                alt="Logo"
                width={28}
                height={36}
                className="object-contain transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
              />
            </Link>
            
            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 shadow-md ${mobileMenuOpen ? 'scale-110' : ''}`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-white transition-all duration-200 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 text-white transition-all duration-200" />
              )}
            </button>
          </div>

          {/* Desktop Layout - Keep Original Design */}
          <div className="hidden sm:flex w-[100%] justify-center items-center gap-6 sm:gap-8 text-sm sm:text-[15px] font-medium">
            <Link
              href="/#hero"
              className="hidden sm:flex items-center justify-center group"
            >
              <Image
                src="/logo/Base_Symbol_White.svg"
                alt="Logo"
                width={32}
                height={42}
                className="object-contain transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
              />
            </Link>
            <Link
              href="/#join-us"
              className="relative hover:text-white text-gray-300 transition-colors duration-200 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
            >
              Join
            </Link>
            <Link
              href="/#events"
              className="relative hover:text-white text-gray-300 transition-colors duration-200 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
            >
              Events
            </Link>
            <Link
              href="/hire"
              className="relative hover:text-white text-gray-300 transition-colors duration-200 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
            >
              Hire
            </Link>
            <Link
              href="/#about"
              className="relative hover:text-white text-gray-300 transition-colors duration-200 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
            >
              About
            </Link>
            <button
              onClick={toggleSocials}
              className={`relative hover:text-white text-gray-300 transition-all duration-200 ${
                socialsOpen
                  ? "bg-white/10 px-4 py-1.5 rounded-lg"
                  : "after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              }`}
            >
              Socials
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 sm:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              href="/#join-us"
              onClick={closeMobileMenu}
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors duration-200"
            >
              Join
            </Link>
            <Link
              href="/#events"
              onClick={closeMobileMenu}
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors duration-200"
            >
              Events
            </Link>
            <Link
              href="/hire"
              onClick={closeMobileMenu}
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors duration-200"
            >
              Hire
            </Link>
            <Link
              href="/#about"
              onClick={closeMobileMenu}
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors duration-200"
            >
              About
            </Link>
            <button
              onClick={() => {
                toggleSocials();
                closeMobileMenu();
              }}
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors duration-200"
            >
              Socials
            </button>
          </div>
        </div>
      )}

      {/* Socials Dropdown */}
      {socialsOpen && (
        <div className="fixed top-20 left-0 right-0 z-50 px-4 sm:left-1/2 sm:right-auto sm:transform sm:-translate-x-1/2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="w-full sm:w-[600px] max-w-[100%]">
            <div className="relative border-white/5 rounded-2xl bg-transparent backdrop-blur-md p-6 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
              <div className="flex flex-col items-center gap-6">
                <button
                  onClick={toggleSocials}
                  className="absolute left-4 top-4 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10 p-2"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <a
                  href="https://facebook.com/basepilipinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 hover:bg-white/5 group"
                >
                  <div className="h-12 w-12 rounded-full bg-[#1877F2]/10 flex items-center justify-center">
                    <div className="bg-[#1877F2] rounded-full p-1.5">
                      <FaFacebookF className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <span className="text-white text-sm">Facebook</span>
                </a>

                <a
                  href="https://x.com/basepilipinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 hover:bg-white/5 group"
                >
                  <div className="h-12 w-12 rounded-full bg-black/10 flex items-center justify-center">
                    <div className="bg-black rounded-full p-1.5">
                      <FaXTwitter className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <span className="text-white text-sm">X</span>
                </a>

                <a
                  href="https://www.linkedin.com/company/basepilipinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 hover:bg-white/5 group"
                >
                  <div className="h-12 w-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center">
                    <div className="bg-[#0A66C2] rounded-full p-1.5">
                      <FaLinkedinIn className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <span className="text-white text-sm">LinkedIn</span>
                </a>

                <a
                  href="https://instagram.com/basepilipinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 hover:bg-white/5 group"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#F58529]/10 via-[#DD2A7B]/10 to-[#515BD4]/10 flex items-center justify-center">
                    <div className="bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] rounded-full p-1.5">
                      <FaInstagram className="h-6 w-6 text-white" />
                    </div>
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
