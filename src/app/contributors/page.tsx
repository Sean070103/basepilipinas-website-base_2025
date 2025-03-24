"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Search } from "lucide-react";
import Image from "next/image";
import { PiTelegramLogoLight } from "react-icons/pi";

export default function Partners() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleSponsors, setVisibleSponsors] = useState(20);
  const observer = useRef(null);

  interface SocialLinks {
    facebook: string;
    instagram: string;
    x: string;
    linkedin: string;
    telegram: string;
  }

  interface Contributor {
    name: string;
    position: string;
    image: string;
    social: SocialLinks;
  }

  const generateContributors = (count: number): Contributor[] =>
    Array(count)
      .fill(null)
      .map((_, i) => ({
        name: `Contributor ${i + 1}`,
        position: `Contributor ${i + 1}`,
        image: "/placeholder.svg",
        social: {
          facebook: "#",
          instagram: "#",
          x: "#",
          linkedin: "#",
          telegram: "#",
        },
      }));

  const allSponsors = [
    {
      name: "Juan Dela Cruz",
      position: "Contributor 1",
      image: "/contributors/karina.webp",
      social: {
        facebook: "https://www.facebook.com/profile.php?id=100008903117894",
        instagram: "https://www.instagram.com/direct/t/101704667894326/",
        x: "https://x.com/",
        linkedin: "#",
        telegram: "#",
      },
    },
    ...generateContributors(1000), // Generate a large number of contributors
  ];

  const filteredSponsors = allSponsors
    .filter((sponsor) =>
      sponsor.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, visibleSponsors);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50
      ) {
        setVisibleSponsors((prev) => prev + 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full py-16 px-4">
      <div className="flex flex-col justify-center space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Our Contributors
          </h2>
          <div className="relative max-w-lg mx-auto mb-6">
            <input
              type="text"
              placeholder="Search contributors..."
              className="w-full p-3 pl-10 rounded-lg bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-white/40"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 w-6 h-6" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center mx-auto">
          {filteredSponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.5) }}
            >
              <div className="flex flex-col items-center justify-center space-y-4 w-[240px] h-[340px] bg-white/10 backdrop-blur-xl rounded-lg p-4 shadow-lg text-center border border-white/20 transition-all hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.5)] hover:scale-105">
                <div className="w-[150px] h-[150px] mx-auto rounded-full overflow-hidden mb-3 border border-white/30">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium text-white">
                  {sponsor.name}
                </h3>
                <p className="text-xs text-gray-400">{sponsor.position}</p>
                <div className="flex justify-center gap-4 mt-3">
                  <a
                    href={sponsor.social.facebook}
                    className="text-white hover:text-blue-500"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={sponsor.social.instagram}
                    className="text-white hover:text-pink-500"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={sponsor.social.x}
                    className="text-white hover:text-gray-500"
                  >
                    <Image
                      src="/logo/X_shaded.png"
                      alt="X"
                      width={100}
                      height={100}
                      className="w-5 h-5"
                    />
                  </a>
                  <a
                    href={sponsor.social.linkedin}
                    className="text-white hover:text-blue-700"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={sponsor.social.telegram}
                    className="text-white hover:text-purple-500"
                  >
                    <PiTelegramLogoLight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
