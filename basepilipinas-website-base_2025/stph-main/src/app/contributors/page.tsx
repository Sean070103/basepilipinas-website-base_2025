"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram, Search } from "lucide-react";
import { PiTelegramLogoLight } from "react-icons/pi";

export default function Partners() {
  const [searchQuery, setSearchQuery] = useState("");

  const sponsors = [
    {
      name: "Juan Dela Cruz",
      position: "Contributor 1",
      image: "/contributors/karina.webp",
      social: {
        facebook: "https://www.facebook.com/profile.php?id=100008903117894",
        instagram: "https://www.instagram.com/direct/t/101704667894326/",
        x: "https://x.com/?lang=en",
        linkedin: "#",
        telegram: "#",
      },
    },
  ].concat(
    Array(99)
      .fill(null)
      .map((_, i) => ({
        name: `Contributor ${i + 2}`,
        position: `Contributor ${i + 2}`,
        image: "/placeholder.svg?height=200&width=200",
        social: {
          facebook: "#",
          instagram: "#",
          x: "#",
          linkedin: "#",
          telegram: "#",
        },
      }))
  );

  const filteredSponsors = sponsors.filter((sponsor) =>
    sponsor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full py-16 px-4 ">
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
        {/* grid grid-cols-auto-fit grid-cols-1 sm:grid-cozls-3 md:grid-cols-3 lg:grid-cols-4 xl-grid-cols-5 w-12/12 lg:w-11/12 xl:w-11/12 place-items-center mx-auto space-y-8 outline md:outline-red-500 lg:outline-orange-500 */}
        <div className="flex flex-wrap w-full justify-center gap-4">
          {filteredSponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              <div className="flex flex-col items-center justify-center space-y-4 w-[240px] h-[340px] bg-white/10 backdrop-blur-xl rounded-lg p-4 shadow-lg text-center border border-white/20 transition-all hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.5)] hover:scale-105">
                <div className="w-[150px] h-[150px] mx-auto rounded-full overflow-hidden mb-3 border border-white/30">
                  <img
                    src={sponsor.image || "/placeholder.svg"}
                    alt={sponsor.name}
                    className="w-full h-full object-cover"
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
                    <img src="/logo/X_shaded.png" alt="X" className="w-5 h-5" />
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
