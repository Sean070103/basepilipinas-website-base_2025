"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, Calendar, ChevronRight } from "lucide-react";

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Main Content */}
      <main className="w-full">
        <div className="max-w-7xl mx-auto py-8 px-6">
          {/* Welcome Section */}
          <section className="mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Base Documentation
            </h1>
            <p className="text-lg text-white/70">
              Learn how to build on Base through our comprehensive guides and
              tutorials.
            </p>
          </section>

          {/* Resource Categories */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Learning Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Documentation */}
              <div className="flex flex-col h-full rounded-xl overflow-hidden bg-transparent border border-white/10 hover:border-white/20 transition-all">
                <div className="relative w-full h-48">
                  <Image
                    src="/learning-page/learning/Documentation.webp"
                    alt="Documentation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow bg-white/5 backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    Documentation
                  </h3>
                  <p className="text-white/70 text-base mb-6">
                    Learn the basics of Base and start building your first
                    decentralized application.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">
                      Key Features:
                    </h4>
                    <ul className="text-white/70 space-y-2">
                      <li>• OnchainKit for building visually polished apps</li>
                      <li>• MiniKit for creating Mini Apps on Base</li>
                      <li>• Smart Contract Development Tools</li>
                      <li>• Wallet Integration Guides</li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">
                      Getting Started:
                    </h4>
                    <ul className="text-white/70 space-y-2">
                      <li>• Introduction to Base</li>
                      <li>• Setting up your environment</li>
                      <li>• Building your first dApp</li>
                    </ul>
                  </div>
                  <Link
                    href="/docs"
                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center mt-auto group"
                  >
                    <span>Read docs</span>
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Workshops */}
              <div className="flex flex-col h-full rounded-xl overflow-hidden bg-transparent border border-white/10 hover:border-white/20 transition-all">
                <div className="relative w-full h-48">
                  <Image
                    src="/learning-page/learning/Webinar.webp"
                    alt="Workshops"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow bg-white/5 backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    Workshops & Webinars
                  </h3>
                  <p className="text-white/70 text-base mb-6">
                    Interactive sessions and exercises for smart contract
                    development on Base and other EVM-compatible chains.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">
                      Featured Content:
                    </h4>
                    <ul className="text-white/70 space-y-2">
                      <li>• Smart Contract Development Exercises</li>
                      <li>• Frontend Development for Onchain Apps</li>
                    </ul>
                  </div>
                  <Link
                    href="/events"
                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center mt-auto group"
                  >
                    <span>Join sessions</span>
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Content */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Introduction to Base */}
              <div className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
                <div className="relative aspect-video">
                  <Image
                    src="/learning-page/learning/Base.png"
                    alt="Introduction to Base"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Introduction to Base
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    Learn about Base, a secure, low-cost, developer-friendly
                    Ethereum L2 built to bring the next billion users to web3.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">
                      What You&apos;ll Learn:
                    </h4>
                    <ul className="text-white/70 text-sm space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                        <span>
                          Ethereum Basics – History, goals, applications
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                        <span>Gas Fees – Understanding transaction costs</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                        <span>Smart Contract Development</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center text-sm text-white/60">
                    <span>15 min</span>
                    <span className="mx-2">•</span>
                    <span>Beginner</span>
                  </div>
                </div>
              </div>

              {/* Building Your First dApp */}
              <div className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
                <div className="relative aspect-video">
                  <Image
                    src="/learning-page/learning/dApp.jpg"
                    alt="Building Your First dApp"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    Building Your First dApp
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    A comprehensive guide to building and deploying your first
                    decentralized application on Base.
                  </p>
                  <div className="flex items-center text-sm text-white/60">
                    <span>45 min</span>
                    <span className="mx-2">•</span>
                    <span>Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
