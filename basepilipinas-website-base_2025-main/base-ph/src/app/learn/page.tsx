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

      <main className="w-full overflow-x-hidden">
        <div className="max-w-[1536px] mx-auto py-4 sm:py-6 md:py-8 px-4 sm:px-6 xl:px-8">
          {/* Welcome Section */}
          <section className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto pt-16 lg:pt-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">Welcome to Base Documentation</h1>
            <p className="text-base sm:text-lg text-white/70 px-4">
              Learn how to build on Base through our comprehensive guides and tutorials.
            </p>
          </section>

          {/* Learning Resources */}
          <section className="mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center px-4">Learning Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto px-4">
              {/* Documentation Card */}
              <div className="flex flex-col h-full rounded-xl overflow-hidden bg-transparent border border-white/10 hover:border-white/20 transition-all">
                <div className="relative w-full h-32 sm:h-48">
                  <Image
                    src="/learning-page/learning/Documentation.webp"
                    alt="Documentation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <FileText className="h-5 w-5 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow bg-white/5 backdrop-blur-sm">
                  <h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">Documentation</h3>
                  <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6">
                    Build a simple onchain app from setup to deployment.
                  </p>
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-sm sm:text-base font-medium mb-2 sm:mb-3">Getting Started:</h4>
                    <ul className="text-sm sm:text-base text-white/70 space-y-2">
                      <li>• Introduction to Base</li>
                      <li>• Setting up your environment</li>
                      <li>• Building your first dApp</li>
                    </ul>
                  </div>
                  <Link
                    href="/docs"
                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center mt-auto group text-sm sm:text-base"
                  >
                    <span>Read docs</span>
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Workshops Card */}
              <div className="flex flex-col h-full rounded-xl overflow-hidden bg-transparent border border-white/10 hover:border-white/20 transition-all">
                <div className="relative w-full h-36 sm:h-48">
                <Image
                  src="/learning-page/learning/Webinar.webp"
                  alt="Workshops"
                  fill
                  className="object-cover"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow bg-white/5 backdrop-blur-sm">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Workshops & Webinars</h3>
                  <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6">
                    Interactive sessions and exercises for smart contract development on Base and other EVM-compatible chains.
                  </p>
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-sm sm:text-base font-medium mb-2 sm:mb-3">Featured Content:</h4>
                    <ul className="text-sm sm:text-base text-white/70 space-y-2">
                      <li>• Smart Contract Development Exercises</li>
                      <li>• Frontend Development for Onchain Apps</li>
                    </ul>
              </div>
                <Link
                    href="/events/smart-contract-workshop"
                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center mt-auto group text-sm sm:text-base"
                  >
                    <span>Join sessions</span>
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
          <section className="mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center px-4">Featured Content</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 max-w-5xl mx-auto px-4">
              {/* Introduction to Base */}
              <div className="rounded-xl overflow-hidden bg-[#0A192F] border border-white/10 hover:border-white/20 transition-all">
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
                      <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-full bg-[#1877F2] flex items-center justify-center">
                        <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 break-words">Introduction to Base</h3>
                  <p className="text-sm text-white/70 mb-3 sm:mb-4 break-words">
                    Learn about Base, a secure, low-cost, developer-friendly Ethereum L2 built to bring the next billion users to web3.
                  </p>
                  <div className="mb-4 overflow-x-auto">
                    <h4 className="text-sm font-semibold mb-2">What You&apos;ll Learn:</h4>
                    <ul className="text-sm text-white/70 space-y-2 min-w-[280px]">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full flex-shrink-0"></div>
                        <span>Ethereum Basics – History, goals, applications</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full flex-shrink-0"></div>
                        <span>Gas Fees – Understanding transaction costs</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full flex-shrink-0"></div>
                        <span>Smart Contract Development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Base Batches */}
              <div className="rounded-xl overflow-hidden bg-[#0A192F] border border-white/10 hover:border-white/20 transition-all">
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
                      <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#1877F2] flex items-center justify-center">
                        <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Base Batches: Global Buildathon</h3>
                  <p className="text-sm text-white/70 mb-3 sm:mb-4">
                    We&apos;re kicking off Base Batches, a global builder program bringing the next generation of builders to create industry-defining applications onchain. Enter the Base Batch Buildathon to earn an incubator placement and present on Demo Day!
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Program Highlights:</h4>
                    <ul className="text-sm text-white/70 space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                        <span>Buildathon Activations</span>
                  </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                        <span>Incubator Placements</span>
                  </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                        <span>Season-ending Demo Day</span>
                  </li>
                </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs sm:text-sm text-white/60">
                      <span>APAC</span>
                      <span className="mx-2">•</span>
                      <span>Batch 001</span>
                      <span className="mx-2">•</span>
                      <span>Now Open</span>
                    </div>
                <Link
                      href="https://www.facebook.com/share/p/15Jp9a2Ykw/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center group text-sm"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* Community Section */}
          <section className="mb-12 sm:mb-14 md:mb-16">
            <div className="flex flex-col items-center justify-center py-8 sm:py-12 border-t border-white/10 max-w-3xl mx-auto px-4">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">Join Our Community</h3>
              <p className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8 text-center max-w-2xl">
                Connect with developers, share your projects, and stay updated with the latest from Base Philippines.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link
                  href="https://www.facebook.com/basepilipinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#5865F2] hover:bg-[#4752C4] transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="text-white font-medium whitespace-nowrap">Join Base PH</span>
                </Link>
                <Link
                  href="https://x.com/basepilipinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#000000] hover:bg-[#171717] transition-colors"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="text-white font-medium whitespace-nowrap">Follow us on X</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
