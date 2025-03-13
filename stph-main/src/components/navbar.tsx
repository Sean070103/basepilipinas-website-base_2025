import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full bg-transparent sticky top-0 right-0 py-4 flex justify-center items-center">
      <div className="w-fit flex flex-col md:flex-row items-center justify-center gap-6 px-8 py-3 border border-gray-500 rounded-xl bg-black text-white">
        {/* Centered Logo (Smaller) */}
        <div className="flex items-center justify-center">
          <Image
            src="/base/Base_Symbol_Blue.png"
            alt="Logo"
            width={30} // Reduced width
            height={40} // Reduced height
            className="object-contain"
          />
        </div>

        {/* Centered Navbar Links */}
        <div className="flex items-center justify-center gap-6">
          <p className="hover:text-gray-300 cursor-pointer">Blog</p>
          <p className="hover:text-gray-300 cursor-pointer">Events</p>
          <p className="hover:text-gray-300 cursor-pointer">Hire</p>
          <p className="hover:text-gray-300 cursor-pointer">About</p>
        </div>
      </div>
    </div>
  );
}
