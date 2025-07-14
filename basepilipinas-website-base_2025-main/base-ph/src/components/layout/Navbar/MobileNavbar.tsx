"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";

export default function MobileNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 sm:hidden">
      <div className="flex items-center justify-between w-[95vw] max-w-[400px] mx-auto h-12 py-0 px-2 mt-2 rounded-2xl border border-white bg-black shadow-md">
        <Link
          href="/#hero"
          className="flex items-center justify-center group transition-all duration-200 p-1"
        >
          <div className="rounded-full border border-white p-1 bg-black">
            <Image
              src="/logo/Base_Symbol_White.svg"
              alt="Base Logo"
              width={24}
              height={24}
              className="object-contain rounded-full transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
            />
          </div>
        </Link>
        <button
          onClick={toggleMobileMenu}
          className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 shadow-md ${mobileMenuOpen ? 'scale-110' : ''}`}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-white transition-all duration-200 rotate-90" />
          ) : (
            <Menu className="h-6 w-6 text-white transition-all duration-200" />
          )}
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex flex-col items-center justify-center h-full space-y-8"
          onClick={closeMobileMenu}
        >
          <Link
            href="/#join-us"
            onClick={e => { e.stopPropagation(); closeMobileMenu(); }}
            className="text-2xl font-medium text-white hover:text-gray-300 transition-colors duration-200"
          >
            Join
          </Link>
          <Link
            href="/#events"
            onClick={e => { e.stopPropagation(); closeMobileMenu(); }}
            className="text-2xl font-medium text-white hover:text-gray-300 transition-colors duration-200"
          >
            Events
          </Link>
          <Link
            href="/hire"
            onClick={e => { e.stopPropagation(); closeMobileMenu(); }}
            className="text-2xl font-medium text-white hover:text-gray-300 transition-colors duration-200"
          >
            Hire
          </Link>
          <Link
            href="/#about"
            onClick={e => { e.stopPropagation(); closeMobileMenu(); }}
            className="text-2xl font-medium text-white hover:text-gray-300 transition-colors duration-200"
          >
            About
          </Link>
        </div>
      )}
    </div>
  );
} 