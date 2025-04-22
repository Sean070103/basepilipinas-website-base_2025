"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, Calendar, ChevronRight, Facebook, Menu, X } from "lucide-react";
import { useState } from "react";

export default function LearnPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 right-0 p-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/90 z-40 lg:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link href="/docs" className="text-xl font-medium hover:text-blue-400 transition-colors">
              Documentation
            </Link>
            <Link href="/events" className="text-xl font-medium hover:text-blue-400 transition-colors">
              Events
            </Link>
            <Link href="/learn" className="text-xl font-medium hover:text-blue-400 transition-colors">
              Learn
            </Link>
          </div>
        </div>
      )}

      <main className="w-full overflow-x-hidden min-h-screen bg-gradient-to-b from-[#0A192F] to-black">
        <div className="max-w-[1536px] mx-auto py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <section className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center max-w-3xl mx-auto pt-16 lg:pt-4">
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Welcome to Base Documentation
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Learn how to build on Base through our comprehensive guides and tutorials.
              </p>
            </div>
          </section>

          {/* Learning Resources */}
          <section className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Learning Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
                {/* Documentation Card */}
                <div className="group flex flex-col h-full rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                  <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden">
                    <Image
                      src="/learning-page/learning/Documentation.webp"
                      alt="Documentation"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 transform group-hover:translate-y-[-2px] transition-transform duration-300">
                      <FileText className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-400" />
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      Documentation
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 leading-relaxed flex-grow">
                      Build a simple onchain app from setup to deployment.
                    </p>
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white/90">
                        Getting Started:
                      </h4>
                      <ul className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          <span>Introduction to Base</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          <span>Setting up your environment</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          <span>Building your first dApp</span>
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="/docs"
                      className="inline-flex items-center text-xs sm:text-sm md:text-base lg:text-lg text-blue-400 hover:text-blue-300 transition-colors group/link mt-4"
                    >
                      <span>Read docs</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Workshops Card */}
                <div className="group flex flex-col h-full rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                  <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 overflow-hidden">
                    <Image
                      src="/learning-page/learning/Webinar.webp"
                      alt="Workshops"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 transform group-hover:translate-y-[-2px] transition-transform duration-300">
                      <Calendar className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-400" />
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      Workshops & Webinars
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 leading-relaxed flex-grow">
                      Interactive sessions and exercises for smart contract development on Base and other EVM-compatible chains.
                    </p>
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white/90">
                        Featured Content:
                      </h4>
                      <ul className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          <span>Smart Contract Development Exercises</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          <span>Frontend Development for Onchain Apps</span>
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="/events/smart-contract-workshop"
                      className="inline-flex items-center text-xs sm:text-sm md:text-base lg:text-lg text-blue-400 hover:text-blue-300 transition-colors group/link mt-4"
                    >
                      <span>Join sessions</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Content */}
          <section className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Featured Content
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
                {/* Introduction to Base */}
                <div className="group flex flex-col rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                  <div className="relative aspect-video bg-black overflow-hidden">
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
                        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-[#1877F2] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <Facebook className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      Introduction to Base
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 leading-relaxed">
                      Learn about Base, a secure, low-cost, developer-friendly Ethereum L2 built to bring the next billion users to web3.
                    </p>
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white/90">
                        What You&apos;ll Learn:
                      </h4>
                      <ul className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          <span>Ethereum Basics – History, goals, applications</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          <span>Gas Fees – Understanding transaction costs</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          <span>Smart Contract Development</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Base Batches */}
                <div className="group flex flex-col rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                  <div className="relative aspect-video bg-black overflow-hidden">
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
                        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-[#1877F2] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <Facebook className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      Base Batches: Global Buildathon
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 leading-relaxed">
                      We&apos;re kicking off Base Batches, a global builder program bringing the next generation of builders to create industry-defining applications onchain. Enter the Base Batch Buildathon to earn an incubator placement and present on Demo Day!
                    </p>
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white/90">
                        Program Highlights:
                      </h4>
                      <ul className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 space-y-2">
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          <span>Buildathon Activations</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          <span>Incubator Placements</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          <span>Season-ending Demo Day</span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-[10px] sm:text-xs md:text-sm lg:text-base text-white/60 space-x-2">
                        <span>APAC</span>
                        <span>•</span>
                        <span>Batch 001</span>
                        <span>•</span>
                        <span>Now Open</span>
                      </div>
                      <Link
                        href="https://www.facebook.com/share/p/15Jp9a2Ykw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs sm:text-sm md:text-base lg:text-lg text-blue-400 hover:text-blue-300 transition-colors group/link"
                      >
                        <span>Learn More</span>
                        <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Community Section */}
          <section className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="flex flex-col items-center justify-center py-8 sm:py-10 md:py-12 lg:py-16 border-t border-white/10 max-w-3xl mx-auto">
              <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  Join Our Community
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                  Connect with developers, share your projects, and stay updated with the latest from Base Philippines.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto pt-4">
                  <Link
                    href="https://www.facebook.com/basepilipinas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#5865F2] hover:bg-[#4752C4] transition-all duration-300 group hover:shadow-lg hover:shadow-[#5865F2]/20"
                  >
                    <Facebook className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-medium whitespace-nowrap">Join Base PH</span>
                  </Link>
                  <Link
                    href="https://x.com/basepilipinas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#000000] hover:bg-[#171717] transition-all duration-300 group hover:shadow-lg hover:shadow-white/20"
                  >
                    <svg className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-medium whitespace-nowrap">Follow us on X</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
