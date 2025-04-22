"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, Calendar, ChevronRight, Facebook } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <main className="w-full">
        <div className="max-w-[1536px] mx-auto py-4 sm:py-6 md:py-8 px-3 sm:px-6 xl:px-8">
          {/* Welcome Section */}
          <section className="mb-6 sm:mb-8 md:mb-10 text-center max-w-3xl mx-auto px-3">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Welcome to Base Documentation</h1>
            <p className="text-sm sm:text-base lg:text-lg text-white/70">
              Learn how to build on Base through our comprehensive guides and tutorials.
            </p>
          </section>

          {/* Tabs Navigation */}
          <Tabs defaultValue="resources" className="mb-8 sm:mb-10 md:mb-12">
            <TabsList className="w-full grid grid-cols-3 h-10 sm:h-12 text-xs sm:text-sm">
              <TabsTrigger value="resources" className="w-full px-2 sm:px-3">Learning Resources</TabsTrigger>
              <TabsTrigger value="featured" className="w-full px-2 sm:px-3">Featured Content</TabsTrigger>
              <TabsTrigger value="community" className="w-full px-2 sm:px-3">Community</TabsTrigger>
            </TabsList>

            <TabsContent value="resources">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-2 sm:px-4">
                {/* Documentation Card */}
                <div className="flex flex-col h-full rounded-lg sm:rounded-xl overflow-hidden bg-transparent border border-white/10 hover:border-white/20 transition-all">
                  <div className="relative w-full h-32 sm:h-40 md:h-48">
                    <Image
                      src="/learning-page/learning/Documentation.webp"
                      alt="Documentation"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                      <FileText className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow bg-white/5 backdrop-blur-sm">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Documentation</h3>
                    <p className="text-xs sm:text-sm md:text-base text-white/70 mb-3 sm:mb-4 md:mb-6">
                      Build a simple onchain app from setup to deployment.
                    </p>
                    <div className="mb-3 sm:mb-4 md:mb-6">
                      <h4 className="text-xs sm:text-sm md:text-base font-medium mb-2">Getting Started:</h4>
                      <ul className="text-xs sm:text-sm md:text-base text-white/70 space-y-1.5 sm:space-y-2">
                        <li>• Introduction to Base</li>
                        <li>• Setting up your environment</li>
                        <li>• Building your first dApp</li>
                      </ul>
                    </div>
                    <Link
                      href="/docs"
                      className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center mt-auto group text-xs sm:text-sm md:text-base"
                    >
                      <span>Read docs</span>
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Workshops Card */}
                <div className="flex flex-col h-full rounded-lg sm:rounded-xl overflow-hidden bg-transparent border border-white/10 hover:border-white/20 transition-all">
                  <div className="relative w-full h-32 sm:h-40 md:h-48">
                    <Image
                      src="/learning-page/learning/Webinar.webp"
                      alt="Workshops"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                      <Calendar className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow bg-white/5 backdrop-blur-sm">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Workshops & Webinars</h3>
                    <p className="text-xs sm:text-sm md:text-base text-white/70 mb-3 sm:mb-4 md:mb-6">
                      Interactive sessions and exercises for smart contract development on Base and other EVM-compatible chains.
                    </p>
                    <div className="mb-3 sm:mb-4 md:mb-6">
                      <h4 className="text-xs sm:text-sm md:text-base font-medium mb-2">Featured Content:</h4>
                      <ul className="text-xs sm:text-sm md:text-base text-white/70 space-y-1.5 sm:space-y-2">
                        <li>• Smart Contract Development Exercises</li>
                        <li>• Frontend Development for Onchain Apps</li>
                      </ul>
                    </div>
                    <Link
                      href="/events/smart-contract-workshop"
                      className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center mt-auto group text-xs sm:text-sm md:text-base"
                    >
                      <span>Join sessions</span>
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="featured">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 md:mb-10 max-w-5xl mx-auto px-2 sm:px-4">
                {/* Introduction to Base */}
                <div className="rounded-lg sm:rounded-xl overflow-hidden bg-[#0A192F] border border-white/10 hover:border-white/20 transition-all">
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Introduction to Base</h3>
                    <p className="text-sm md:text-base text-white/70 mb-4">
                      Learn about Base&apos;s architecture, features, and how to get started with development.
                    </p>
                    <Link
                      href="/docs/introduction"
                      className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center group text-sm md:text-base"
                    >
                      <span>Get started</span>
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Base Batches */}
                <div className="rounded-lg sm:rounded-xl overflow-hidden bg-[#0A192F] border border-white/10 hover:border-white/20 transition-all">
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
                        <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-[#1877F2] flex items-center justify-center">
                          <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="p-3 sm:p-4 md:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">Base Batches: Global Buildathon</h3>
                    <p className="text-xs sm:text-sm text-white/70 mb-3 sm:mb-4">
                      We&apos;re kicking off Base Batches, a global builder program bringing the next generation of builders to create industry-defining applications onchain. Enter the Base Batch Buildathon to earn an incubator placement and present on Demo Day!
                    </p>
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-xs sm:text-sm font-semibold mb-2">Program Highlights:</h4>
                      <ul className="text-xs sm:text-sm text-white/70 space-y-1.5 sm:space-y-2">
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
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                      <div className="flex items-center text-xs text-white/60">
                        <span>APAC</span>
                        <span className="mx-1.5 sm:mx-2">•</span>
                        <span>Batch 001</span>
                        <span className="mx-1.5 sm:mx-2">•</span>
                        <span>Now Open</span>
                      </div>
                      <Link
                        href="https://www.facebook.com/share/p/15Jp9a2Ykw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center group text-xs sm:text-sm"
                      >
                        <span>Learn More</span>
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="community">
              <div className="flex flex-col items-center justify-center py-6 sm:py-8 md:py-10 max-w-3xl mx-auto px-3 sm:px-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-center">Join Our Community</h3>
                <p className="text-sm sm:text-base md:text-lg text-white/70 mb-4 sm:mb-6 md:mb-8 text-center max-w-2xl">
                  Connect with developers, share your projects, and stay updated with the latest from Base Philippines.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <Link
                    href="https://www.facebook.com/basepilipinas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#5865F2] hover:bg-[#4752C4] transition-colors text-sm sm:text-base"
                  >
                    <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-white font-medium">Join Base PH</span>
                  </Link>
                  <Link
                    href="https://x.com/basepilipinas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#000000] hover:bg-[#171717] transition-colors text-sm sm:text-base"
                  >
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span className="text-white font-medium">Follow us on X</span>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
