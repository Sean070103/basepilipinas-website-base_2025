"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, Calendar, ChevronRight, Facebook } from "lucide-react";

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <main className="w-full overflow-x-hidden">
        <div className="max-w-[1536px] mx-auto py-4 sm:py-6 md:py-8 px-4 sm:px-6 xl:px-8">
          {/* Welcome Section */}
          <section className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center max-w-3xl mx-auto pt-16 lg:pt-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5 px-4">
              Welcome to Base Documentation
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/70 px-4 max-w-2xl mx-auto">
              Learn how to build on Base through our comprehensive guides and
              tutorials.
            </p>
          </section>

          {/* Learning Resources */}
          <section className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-center px-4">
              Learning Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-4xl mx-auto px-4">
              {/* Documentation Card */}
              <div className="flex flex-col rounded-lg overflow-hidden bg-[#0A192F]/80 border border-white/10 hover:border-white/20 transition-all">
                <div className="relative w-full h-24 sm:h-28 md:h-32">
                  <Image
                    src="/learning-page/learning/Documentation.webp"
                    alt="Documentation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 to-transparent"></div>
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
                    <FileText className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                </div>
                <div className="p-3 sm:p-4 flex flex-col flex-grow">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2">
                    Documentation
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-white/70 mb-3">
                    Build a simple onchain app from setup to deployment.
                  </p>
                  <div className="mb-3">
                    <h4 className="text-xs sm:text-sm md:text-base font-medium mb-1.5">
                      Getting Started:
                    </h4>
                    <ul className="text-xs sm:text-sm md:text-base text-white/70 space-y-1">
                      <li className="flex items-start space-x-2">
                        <span className="text-white/70 mt-1">•</span>
                        <span className="flex-1">Introduction to Base</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-white/70 mt-1">•</span>
                        <span className="flex-1">
                          Setting up your environment
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-white/70 mt-1">•</span>
                        <span className="flex-1">Building your first dApp</span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/docs"
                    className="text-xs sm:text-sm md:text-base text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center mt-auto group"
                  >
                    <span>Read docs</span>
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Workshops Card */}
              <div className="flex flex-col rounded-lg overflow-hidden bg-[#0A192F]/80 border border-white/10 hover:border-white/20 transition-all">
                <div className="relative w-full h-24 sm:h-28 md:h-32">
                  <Image
                    src="/learning-page/learning/Webinar.webp"
                    alt="Workshops"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 to-transparent"></div>
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                </div>
                <div className="p-3 sm:p-4 flex flex-col flex-grow">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2">
                    Workshops & Webinars
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-white/70 mb-3">
                    Interactive sessions and exercises for smart contract
                    development on Base and other EVM-compatible chains.
                  </p>
                  <div className="mb-3">
                    <h4 className="text-xs sm:text-sm md:text-base font-medium mb-1.5">
                      Featured Content:
                    </h4>
                    <ul className="text-xs sm:text-sm md:text-base text-white/70 space-y-1">
                      <li className="flex items-start space-x-2">
                        <span className="text-white/70 mt-1">•</span>
                        <span className="flex-1">
                          Smart Contract Development Exercises
                        </span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-white/70 mt-1">•</span>
                        <span className="flex-1">
                          Frontend Development for Onchain Apps
                        </span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/events/smart-contract-workshop"
                    className="text-xs sm:text-sm md:text-base text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center mt-auto group"
                  >
                    <span>Join sessions</span>
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Content */}
          <section className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-center px-4">
              Featured Content
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto px-4">
              {/* Introduction to Base */}
              <div className="rounded-lg overflow-hidden bg-[#0A192F]/80 border border-white/10 hover:border-white/20 transition-all">
                <div className="relative aspect-video bg-black">
                  <Link
                    href="https://www.facebook.com/reel/519212114535393"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <Image
                      src="/learning-page/learning/Base.png"
                      alt="Introduction to Base"
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full bg-[#1877F2] flex items-center justify-center">
                        <Facebook className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 break-words">
                    Introduction to Base
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-white/70 mb-3 break-words">
                    Learn about Base, a secure, low-cost, developer-friendly
                    Ethereum L2 built to bring the next billion users to web3.
                  </p>
                  <div className="mb-3">
                    <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-1.5">
                      What You&apos;ll Learn:
                    </h4>
                    <ul className="text-xs sm:text-sm md:text-base text-white/70 space-y-1">
                      <li className="flex items-center space-x-2">
                        <span className="text-white/70">•</span>
                        <span>
                          Ethereum Basics – History, goals, applications
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-white/70">•</span>
                        <span>Gas Fees – Understanding transaction costs</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-white/70">•</span>
                        <span>Smart Contract Development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Base Batches */}
              <div className="rounded-lg overflow-hidden bg-[#0A192F]/80 border border-white/10 hover:border-white/20 transition-all">
                <div className="relative aspect-video bg-black">
                  <Link
                    href="https://www.facebook.com/share/p/15Jp9a2Ykw/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <Image
                      src="/learning-page/thumbnail.png"
                      alt="Base Batches: Global Buildathon"
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full bg-[#1877F2] flex items-center justify-center">
                        <Facebook className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 break-words">
                    Base Batches: Global Buildathon
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-white/70 mb-3 break-words">
                    We&apos;re kicking off Base Batches, a global builder
                    program bringing the next generation of builders to create
                    industry-defining applications onchain. Enter the Base Batch
                    Buildathon to earn an incubator placement and present on
                    Demo Day!
                  </p>
                  <div className="mb-3">
                    <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-1.5">
                      Program Highlights:
                    </h4>
                    <ul className="text-xs sm:text-sm md:text-base text-white/70 space-y-1">
                      <li className="flex items-start space-x-2">
                        <span className="text-white/70 mt-1">•</span>
                        <span className="flex-1">Buildathon Activations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-white/70 mt-1">•</span>
                        <span className="flex-1">Incubator Placements</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-white/70 mt-1">•</span>
                        <span className="flex-1">Season-ending Demo Day</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs sm:text-sm text-white/60">
                      <span>APAC</span>
                      <span className="mx-1 sm:mx-1.5">•</span>
                      <span>Batch 001</span>
                      <span className="mx-1 sm:mx-1.5">•</span>
                      <span>Now Open</span>
                    </div>
                    <Link
                      href="https://www.facebook.com/share/p/15Jp9a2Ykw/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm md:text-base text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center group"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Community Section */}
          <section className="mb-8 sm:mb-10 md:mb-12 lg:mb-14">
            <div className="flex flex-col items-center justify-center py-6 sm:py-8 md:py-10 lg:py-12 border-t border-white/10 max-w-3xl mx-auto px-4">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5 text-center">
                Join Our Community
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/70 mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-center max-w-2xl">
                Connect with developers, share your projects, and stay updated
                with the latest from Base Philippines.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  href="https://www.facebook.com/basepilipinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full bg-[#5865F2] hover:bg-[#4752C4] transition-colors"
                >
                  <Facebook className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5" />
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-medium whitespace-nowrap">
                    Join Base PH
                  </span>
                </Link>
                <Link
                  href="https://x.com/basepilipinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full bg-[#000000] hover:bg-[#171717] transition-colors"
                >
                  <svg
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-medium whitespace-nowrap">
                    Follow us
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
