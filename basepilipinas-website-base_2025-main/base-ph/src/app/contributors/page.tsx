"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { type Contributor, contributors } from "@/sources/contributors";
import Image from "next/image";

export default function Partners() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleSponsors, setVisibleSponsors] = useState(20);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  const formatSocialLink = (link: string, prefix: string): string => {
    if (!link) return "";
    if (link.startsWith("http")) return link;
    if (link.startsWith("@")) return `${prefix}${link.substring(1)}`;
    return `${prefix}${link}`;
  };

  const getName = (contributor: Contributor): string => {
    return contributor.name || "Unknown Contributor";
  };

  const getSkills = (contributor: Contributor): string[] => {
    return contributor.skills || [];
  };

  const handleCardClick = (index: number) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  useEffect(() => {
    setIsClient(true);

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

  const filteredSponsors = isClient
    ? contributors
        .filter((sponsor) => {
          const name = getName(sponsor);
          const skills = getSkills(sponsor);
          return (
            name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            skills.some((skill) =>
              skill.toLowerCase().includes(searchQuery.toLowerCase())
            )
          );
        })
        .slice(0, visibleSponsors)
    : [];

  return (
    <section className="w-full py-16 px-4 bg-transparent">
      <div className="flex flex-col justify-center space-y-8 max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Our Contributors
          </h2>
          <div className="relative max-w-lg mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search contributors..."
                className="w-full p-4 pl-12 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
          {filteredSponsors.length === 0 ? (
            <div className="text-white text-center col-span-full">
              No contributors found.
            </div>
          ) : (
            filteredSponsors.map((sponsor, index) => {
              const twitterLink = formatSocialLink(
                sponsor.socials?.twitter || "",
                "https://x.com/"
              );
              const facebookLink = sponsor.socials?.facebook || "";
              const telegramLink = formatSocialLink(
                sponsor.socials?.telegram || "",
                "https://t.me/"
              );
              const tiktokLink = sponsor.socials?.tiktok || "";
              const linkedinLink = sponsor.socials?.linkedin || "";

              const name = getName(sponsor);
              const skills = getSkills(sponsor);

              const isSelected = selectedCard === index;

              // Front card (profile)
              if (!isSelected) {
                return (
                  <motion.div
                    key={index}
                    className="bg-[#0f172a]/80 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-blue-500/20 w-full max-w-[240px] mx-auto h-[320px] border border-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: Math.min(index * 0.02, 0.5),
                    }}
                    onClick={() => handleCardClick(index)}
                  >
                    <div className="p-5 flex flex-col items-center h-full justify-between">
                      <div className="w-28 h-28 rounded-full bg-gray-700 mb-3 overflow-hidden relative border-2 border-gray-600 shadow-lg">
                        {sponsor.photoUrl ? (
                          <Image
                            src={sponsor.photoUrl || "/placeholder.svg"}
                            alt={`${name}'s photo`}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold bg-gradient-to-br from-blue-600 to-blue-800">
                            {name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white text-center mb-1">
                          {name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3">
                          Contributor {index + 1}
                        </p>
                      </div>

                      <div className="flex flex-wrap justify-center gap-2 w-full mt-4">
                        {skills.slice(0, 4).map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-1.5 bg-blue-600 rounded-full text-xs text-white font-medium transition-all duration-300 hover:bg-blue-500"
                          >
                            {skill.split(" ")[0]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              }

              // Back card (social links)
              return (
                <motion.div
                  key={index}
                  className="bg-[#0f172a]/80 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-blue-500/20 w-full max-w-[240px] mx-auto h-[320px] border border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: Math.min(index * 0.02, 0.5),
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="p-5 flex flex-col items-center justify-between h-full">
                    <h3 className="text-lg font-bold text-white text-center mt-4">
                      Connect with
                      <br />
                      {name}
                    </h3>

                    <div className="flex justify-center gap-4 flex-wrap max-w-[200px]">
                      {facebookLink && (
                        <a
                          href={facebookLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </a>
                      )}

                      {sponsor.socials?.twitter && (
                        <a
                          href={twitterLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                      )}

                      {linkedinLink && (
                        <a
                          href={linkedinLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}

                      {telegramLink && (
                        <a
                          href={telegramLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                          </svg>
                        </a>
                      )}

                      {tiktokLink && (
                        <a
                          href={tiktokLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                          </svg>
                        </a>
                      )}
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 w-full">
                      {skills.slice(0, 4).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1.5 bg-blue-600 rounded-full text-xs text-white font-medium transition-all duration-300 hover:bg-blue-500"
                        >
                          {skill.split(" ")[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
