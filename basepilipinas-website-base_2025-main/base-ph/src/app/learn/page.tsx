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
          <section className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center max-w-3xl mx-auto pt-16 lg:pt-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5 px-4">
              Welcome to Base Documentation
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/70 px-4 max-w-2xl mx-auto">
              Learn how to build on Base through our comprehensive guides and tutorials.
            </p>
          </section>

          {/* Learning Resources */}
          <section className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-center">
              Learning Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto px-4">
              {/* Documentation Card */}
              <div className="flex flex-col rounded bg-[#0A192F]/80 border border-white/10 hover:border-white/20 transition-all">
                <div className="relative w-full h-20 sm:h-24">
                  <Image
                    src="/learning-page/learning/Documentation.webp"
                    alt="Documentation"
                    fill
                    className="object-cover text-wrap"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 text-wrap">
                    Documentation
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 mb-2 text-wrap">
                    Build a simple onchain app from setup to deployment.
                  </p>
                  <div className="mb-2">
                    <h4 className="text-xs sm:text-sm font-medium mb-1 text-wrap">Getting Started:</h4>
                    <ul className="text-xs sm:text-sm text-white/70 space-y-0.5">
                      <li className="flex items-center space-x-1.5 text-wrap">
                        <span className="text-white/70">•</span>
                        <span>Introduction to Base</span>
                      </li>
                      <li className="flex items-center space-x-1.5 text-wrap">
                        <span className="text-white/70">•</span>
                        <span>Setting up your environment</span>
                      </li>
                      <li className="flex items-center space-x-1.5 text-wrap">
                        <span className="text-white/70">•</span>
                        <span>Building your first dApp</span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/docs"
                    className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center group text-wrap"
                  >
                    <span>Read docs</span>
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Workshops Card */}
              <div className="flex flex-col rounded bg-[#0A192F]/80 border border-white/10 hover:border-white/20 transition-all">
                <div className="relative w-full h-20 sm:h-24">
                  <Image
                    src="/learning-page/learning/Webinar.webp"
                    alt="Workshops"
                    fill
                    className="object-cover text-wrap"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 text-wrap">
                    Workshops & Webinars
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 mb-2 text-wrap">
                    Interactive sessions and exercises for smart contract development.
                  </p>
                  <div className="mb-2">
                    <h4 className="text-xs sm:text-sm font-medium mb-1 text-wrap">Featured Content:</h4>
                    <ul className="text-xs sm:text-sm text-white/70 space-y-0.5">
                      <li className="flex items-center space-x-1.5 text-wrap">
                        <span className="text-white/70">•</span>
                        <span>Smart Contract Development Exercises</span>
                      </li>
                      <li className="flex items-center space-x-1.5 text-wrap">
                        <span className="text-white/70">•</span>
                        <span>Frontend Development for Onchain Apps</span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/events/smart-contract-workshop"
                    className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center group text-wrap"
                  >
                    <span>Join sessions</span>
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Content */}
          <section className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-center text-wrap">
              Featured Content
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-3xl mx-auto px-4">
              {/* Introduction to Base */}
              <div className="rounded bg-[#0A192F]/80 border border-white/10 hover:border-white/20 transition-all">
                <div className="relative aspect-video bg-black">
                  <Link
                    href="https://www.facebook.com/reel/519212114535393"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full text-wrap"
                  >
                    <Image
                      src="/learning-page/learning/Base.png"
                      alt="Introduction to Base"
                      fill
                      className="object-contain text-wrap"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-[#1877F2] flex items-center justify-center">
                        <Facebook className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="p-3">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 text-wrap">
                    Introduction to Base
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 mb-2 text-wrap">
                    Learn about Base, a secure, low-cost, developer-friendly Ethereum L2.
                  </p>
                  <div className="mb-2">
                    <h4 className="text-xs sm:text-sm font-semibold mb-1 text-wrap">What You&apos;ll Learn:</h4>
                    <ul className="text-xs sm:text-sm text-white/70 space-y-0.5">
                      <li className="flex items-center space-x-1.5 text-wrap">
                        <span className="text-white/70">•</span>
                        <span>Ethereum Basics – History, goals, applications</span>
                      </li>
                      <li className="flex items-center space-x-1.5 text-wrap">
                        <span className="text-white/70">•</span>
                        <span>Gas Fees – Understanding transaction costs</span>
                      </li>
                      <li className="flex items-center space-x-1.5 text-wrap">
                        <span className="text-white/70">•</span>
                        <span>Smart Contract Development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Base Batches */}
              <div className="rounded bg-[#0A192F]/80 border border-white/10 hover:border-white/20 transition-all">
                <div className="relative aspect-video bg-black">
                  <Link
                    href="https://www.facebook.com/share/p/15Jp9a2Ykw/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full text-wrap"
                  >
                    <Image
                      src="/learning-page/thumbnail.png"
                      alt="Base Batches: Global Buildathon"
                      fill
                      className="object-contain text-wrap"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-[#1877F2] flex items-center justify-center">
                        <Facebook className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="p-3">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 text-wrap">
                    Base Batches: Global Buildathon
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 mb-2 text-wrap">
                    Join our global builder program to create industry-defining applications onchain.
                  </p>
                  <div className="mb-2">
                    <h4 className="text-xs sm:text-sm font-semibold mb-1 text-wrap">Program Highlights:</h4>
                    <ul className="text-xs sm:text-sm text-white/70 space-y-0.5">
                      <li className="flex items-center space-x-1.5 text-wrap">
                        <span className="text-white/70">•</span>
                        <span>Buildathon Activations</span>
                      </li>
                      <li className="flex items-center space-x-1.5 text-wrap">
                        <span className="text-white/70">•</span>
                        <span>Incubator Placements</span>
                      </li>
                      <li className="flex items-center space-x-1.5 text-wrap">
                        <span className="text-white/70">•</span>
                        <span>Season-ending Demo Day</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center text-white/60 text-wrap">
                      <span>APAC</span>
                      <span className="mx-1">•</span>
                      <span>Batch 001</span>
                      <span className="mx-1">•</span>
                      <span>Now Open</span>
                    </div>
                    <Link
                      href="https://www.facebook.com/share/p/15Jp9a2Ykw/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center group text-wrap"
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
          <section className="mb-4 sm:mb-6">
            <div className="flex flex-col items-center justify-center py-4 sm:py-6 border-t border-white/10 max-w-3xl mx-auto px-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center">
                Join Our Community
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mb-3 text-center max-w-2xl">
                Connect with developers, share your projects, and stay updated with the latest from Base Philippines.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                <Link
                  href="https://www.facebook.com/basepilipinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-[#5865F2] hover:bg-[#4752C4] transition-colors"
                >
                  <Facebook className="h-3.5 w-3.5" />
                  <span className="text-xs sm:text-sm text-white font-medium whitespace-nowrap">Join Base PH</span>
                </Link>
                <Link
                  href="https://x.com/basepilipinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-[#000000] hover:bg-[#171717] transition-colors"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="text-xs sm:text-sm text-white font-medium whitespace-nowrap">Follow us on X</span>
                </Link>
              </div>
            </div>
          </section>

          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm text-wrap">
              <code className="text-wrap">
                npx create-minikit-app my-mini-app
              </code>
            </pre>
          </div>

          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm text-wrap">
              <code className="text-wrap">
                {`import { MiniKit } from '@minikit/core';

const minikit = new MiniKit({
  appName: 'My Mini App',
  description: 'A simple mini app built with MiniKit',
  icon: '/icon.png',
  theme: {
    primary: '#0066FF',
    background: '#000000'
  }
});`}
              </code>
            </pre>
          </div>

          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm text-wrap">
              <code className="text-wrap">
                {`{/* Initialize wallet */}
import { WalletProvider } from '@minikit/wallet';
import { CoinbaseWallet } from '@coinbase/wallet-sdk';

const wallet = new CoinbaseWallet({
  appName: 'My Mini App',
  appLogoUrl: 'https://example.com/logo.png'
});`}
              </code>
            </pre>
          </div>

          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm text-wrap">
              <code className="text-wrap">
                {`import { useWallet } from '@minikit/wallet';

function WalletStatus() {
  const { address, isConnected, connect } = useWallet();

  if (!isConnected) {
    return <button onClick={connect}>Connect</button>;
  }

  return <p>Connected: {address}</p>;
}`}
              </code>
            </pre>
          </div>
        </div>
      </main>
    </div>
  );
}
