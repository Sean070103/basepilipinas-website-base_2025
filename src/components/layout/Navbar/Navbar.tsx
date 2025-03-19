import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full sticky top-0 right-0 py-4 flex justify-center items-center content-center z-50">
      <div
        className="sm:max-w-none flex flex-col sm:flex-row self-center text-center items-center justify-between justify-items-center gap-3 sm:gap-6 px-4 sm:px-6 py-2 sm:py-3 
        border border-gray-500 rounded-xl bg-black/50 backdrop-blur-lg text-white"
      >
        {/* Centered Logo */}

        {/* Navbar Links */}
        <div className="flex w-[100%] self-center justify-center items-center content-center justify-items-center gap-3 sm:gap-6 text-sm sm:text-base">
          <Link href="/#hero" className="flex items-center justify-center">
            <Image
              src="/base/Base_Symbol_Blue.png"
              alt="Logo"
              width={30}
              height={40}
              className="object-contain"
            />
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Blog
          </Link>
          <Link href="/#events" className="hover:text-gray-300">
            Events
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Hire
          </Link>
          <Link href="#" className="hover:text-gray-300">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
