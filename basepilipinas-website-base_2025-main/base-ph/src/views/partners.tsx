"use client";

import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram, Search } from "lucide-react";
import Image from "next/image";

export default function Partners() {
  const [searchQuery, setSearchQuery] = useState("");
  const [contributors, setContributors] = useState(
    Array(10)
      .fill(null)
      .map((_, i) => ({
        name: `Contributor ${i + 1}`,
        position: "Team Member",
        image: "/placeholder.svg?height=200&width=200",
        social: {
          facebook: "#",
          instagram: "#",
          x: "#",
          linkedin: "#",
          discord: "#",
        },
      }))
  );
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (contributors.length >= 100) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setContributors((prev) => [
        ...prev,
        ...Array(10)
          .fill(null)
          .map((_, i) => ({
            name: `Contributor ${prev.length + i + 1}`,
            position: "Team Member",
            image: "/placeholder.svg?height=200&width=200",
            social: {
              facebook: "#",
              instagram: "#",
              x: "#",
              linkedin: "#",
              discord: "#",
            },
          })),
      ]);
    }, 1000);
  };

  const filteredSponsors = contributors.filter((sponsor) =>
    sponsor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full py-16 px-4 rounded-lg">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Our Contributors</h2>
        <div className="relative max-w-lg mx-auto mb-6">
          <input
            type="text"
            placeholder="Search contributors..."
            className="w-full p-3 pl-10 rounded-lg bg-transparent text-white border border-white/20 focus:ring-2 focus:ring-white/40"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 w-6 h-6" />
        </div>
      </div>

      <div className="mx-auto max-w-8xl overflow-hidden">
        <InfiniteScroll
          dataLength={filteredSponsors.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <h4 className="text-white text-center mt-4">Loading more...</h4>
          }
          className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5"
        >
          {filteredSponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              <div
                className="w-[240px] h-[340px] bg-transparent backdrop-blur-sm rounded-lg p-5 
                border border-white/10 transition-all hover:border-white/30 
                hover:scale-105 flex flex-col justify-between mr-5"
              >
                {/* Profile Image */}
                <div className="w-[150px] h-[150px] mx-auto rounded-full overflow-hidden mb-3 border border-white/20">
                  <Image
                    src={sponsor.image || "/placeholder.svg"}
                    alt={sponsor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-sm font-medium text-white">
                  {sponsor.name}
                </h3>

                {/* Position */}
                <p className="text-xs text-gray-400 italic mb-3">
                  {sponsor.position}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-6">
                  <a
                    href={sponsor.social.facebook}
                    target="_blank"
                    className="text-white/70 hover:text-blue-500 transition-colors"
                    rel="noreferrer"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={sponsor.social.instagram}
                    target="_blank"
                    className="text-white/70 hover:text-pink-500 transition-colors"
                    rel="noreferrer"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={sponsor.social.x}
                    target="_blank"
                    className="text-white/70 hover:text-gray-500 transition-colors"
                    rel="noreferrer"
                  >
                    <Image
                      src="/logo/X_shaded.png"
                      alt="X"
                      className="w-5 h-5 opacity-70 hover:opacity-100"
                    />
                  </a>
                  <a
                    href={sponsor.social.linkedin}
                    target="_blank"
                    className="text-white/70 hover:text-blue-700 transition-colors"
                    rel="noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={sponsor.social.discord}
                    target="_blank"
                    className="text-white/70 hover:text-purple-500 transition-colors"
                    rel="noreferrer"
                  >
                    <Image
                      src="/logo/discord_shaded.png"
                      alt="Discord"
                      className="w-5 h-5 opacity-70 hover:opacity-100"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </InfiniteScroll>
      </div>
    </section>
  );
}
