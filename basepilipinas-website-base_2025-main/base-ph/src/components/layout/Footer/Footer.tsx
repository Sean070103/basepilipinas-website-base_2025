"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { PiTelegramLogoLight } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const menuItems = [
  { name: "LEARN", href: "/docs" },
  { name: "BUILD", href: "/hire#book-now" },
  { name: "CONTRIBUTE", href: "/join" },
  { name: "CHILL", href: "/events/11" },
];

export default function Footer() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (pathname === "/contributors" || pathname.startsWith("/docs")) {
    return null;
  }

  return (
    <footer className="w-full py-6 mt-12 flex flex-col items-center bg-transparent">
      <div className="w-full max-w-[1040px] flex flex-col items-center text-center">
        <div className="flex flex-col gap-8 w-full px-4 md:flex-row md:justify-between">
          {/* Logo Section */}
          <div className="flex flex-col items-center">
            <Link href="/">
              <div className="relative w-[150px] h-[40px]">
                {mounted && (
                  <Image
                    src="/base/Base_Wordmark_White.png"
                    alt="Logo"
                    fill
                    sizes="150px"
                    className="object-contain"
                    quality={90}
                    priority
                  />
                )}
              </div>
            </Link>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-wrap justify-center gap-4 text-gray-300 tracking-wide">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm hover:text-white transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Separator Line */}
        <Separator className="bg-gray-600 w-full my-4" />

        {/* Footer Bottom Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center px-4">
          {/* Copyright Text (Left) */}
          <p className="text-sm text-gray-400 md:order-1">
            © BASE PHL 2025. All rights reserved
          </p>

          {/* Social Media Icons (Right) */}
          <div className="flex items-center gap-4 md:order-2">
            <a
              href="https://www.facebook.com/basepilipinas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#1877F2] transition-colors duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/basepilipinas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#E1306C] transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/basepilipinas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/basepilipinas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0A66C2] transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/basepilipinas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0088cc] transition-colors duration-300"
            >
              <PiTelegramLogoLight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
