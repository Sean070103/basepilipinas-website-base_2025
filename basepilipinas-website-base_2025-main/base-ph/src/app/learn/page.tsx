"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Video,
  FileText,
  Lightbulb,
  Calendar,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

export default function LearnPage() {
  const [openSections, setOpenSections] = useState({
    introduction: false,
    whatYoullLearn: false,
    usingBase: false,
    whyChooseBase: false,
    ethereumVsBase: false,
    marketplaces: false,
    frontend: false,
    prerequisites: false,
    courseObjectives: false
  });

  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  type SectionKey = keyof typeof openSections;

  const toggleSection = (section: SectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const learningContent = {
    introduction: {
      title: "Introduction to Base",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">Introduction</h4>
            <p className="text-sm text-white/70">
              Base Learn is an educational platform designed to teach smart contract development on Base and other
              EVM-compatible chains like Ethereum and Optimism. The curriculum caters to all skill levels, from beginners
              to advanced developers, and offers NFT rewards upon module completion.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">What You&apos;ll Learn</h4>
            <ul className="text-sm text-white/70 space-y-2">
              <li>• Ethereum Basics – History, goals, applications</li>
              <li>• Gas Fees – Understanding transaction costs</li>
              <li>• Smart Contract Development</li>
              <li>• Wallet Integration</li>
              <li>• Token Standards</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Using Base with Your Wallet</h4>
            <ul className="text-sm text-white/70 space-y-2">
              <li>• Coinbase Wallet – Native support in browser extension</li>
              <li>• MetaMask – Manual RPC configuration</li>
              <li>• Testnet Access via Coinbase Wallet or MetaMask</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Why Choose Base?</h4>
            <ul className="text-sm text-white/70 space-y-2">
              <li>• Low-Cost & Fast Transactions (~1 second)</li>
              <li>• Developer-Friendly Tools</li>
              <li>• $26M+ in Developer Grants</li>
              <li>• Global Accessibility</li>
            </ul>
          </div>
        </div>
      ),
    },
    frontend: {
      title: "Frontend Development",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">Course Overview</h4>
            <p className="text-sm text-white/70">
              Learn to build websites that interact with smart contracts—just like traditional sites connect with APIs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Prerequisites</h4>
            <ul className="text-sm text-white/70 space-y-2">
              <li>• React/Next.js experience</li>
              <li>• Basic understanding of EVM and smart contracts</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Course Modules</h4>
            <div className="space-y-3">
              <div>
                <h5 className="text-md font-semibold mb-1">Frontend Setup</h5>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Wallet aggregator integration</li>
                  <li>• Template evaluation and setup</li>
                  <li>• RainbowKit implementation</li>
                </ul>
              </div>

              <div>
                <h5 className="text-md font-semibold mb-1">Blockchain Connection</h5>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Provider types and selection</li>
                  <li>• Wagmi setup and wallet connection</li>
                  <li>• API key security</li>
                </ul>
              </div>

              <div>
                <h5 className="text-md font-semibold mb-1">Data Management</h5>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• useAccount hook implementation</li>
                  <li>• Contract data retrieval</li>
                  <li>• Real-time updates configuration</li>
                </ul>
              </div>

              <div>
                <h5 className="text-md font-semibold mb-1">Smart Contract Interaction</h5>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Transaction handling with useWriteContract</li>
                  <li>• Contract simulation and testing</li>
                  <li>• User feedback implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="min-h-screen flex bg-transparent">
      {/* Fixed Sidebar - Base Documentation Style */}
      <aside className="fixed top-0 left-0 w-80 h-screen border-r border-white/10 overflow-y-auto bg-transparent">
        <nav className="py-8 px-6">
          {/* Introduction Section */}
          <div className="mb-8">
            <button
              onClick={() => toggleSection("introduction")}
              className="w-full flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-colors text-white/90"
            >
              <span className="text-base font-medium">Introduction to Base</span>
              {openSections.introduction ? (
                <ChevronDown className="w-4 h-4 opacity-60" />
              ) : (
                <ChevronRight className="w-4 h-4 opacity-60" />
              )}
            </button>
            {openSections.introduction && (
              <div className="mt-2 pl-4 text-sm text-white/70">
                <p className="mb-4">
                  Base Learn is an educational platform designed to teach smart contract development on Base and other
                  EVM-compatible chains like Ethereum and Optimism.
                </p>
              </div>
            )}
          </div>

          {/* What You'll Learn Section */}
          <div className="mb-8">
            <button
              onClick={() => toggleSection("whatYoullLearn")}
              className="w-full flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-colors text-white/90"
            >
              <span className="text-base font-medium">What You&apos;ll Learn</span>
              {openSections.whatYoullLearn ? (
                <ChevronDown className="w-4 h-4 opacity-60" />
              ) : (
                <ChevronRight className="w-4 h-4 opacity-60" />
              )}
            </button>
            {openSections.whatYoullLearn && (
              <div className="mt-2 pl-4 space-y-2 text-sm text-white/70">
                <ul className="space-y-2">
                  <li>• Ethereum Basics</li>
                  <li>• Gas Fees</li>
                  <li>• Smart Contract Development</li>
                  <li>• Remix IDE</li>
                  <li>• Solidity Fundamentals</li>
                  <li>• Token Standards</li>
                  <li>• Wallet Integration</li>
                  <li>• Onchain App Development</li>
                </ul>
              </div>
            )}
          </div>

          {/* Using Base with Your Wallet */}
          <div className="mb-8">
            <button
              onClick={() => toggleSection("usingBase")}
              className="w-full flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-colors text-white/90"
            >
              <span className="text-base font-medium">Using Base with Your Wallet</span>
              {openSections.usingBase ? (
                <ChevronDown className="w-4 h-4 opacity-60" />
              ) : (
                <ChevronRight className="w-4 h-4 opacity-60" />
              )}
            </button>
            {openSections.usingBase && (
              <div className="mt-2 pl-4 space-y-2 text-sm text-white/70">
                <ul className="space-y-2">
                  <li>• Coinbase Wallet – Native support</li>
                  <li>• MetaMask – Manual RPC configuration</li>
                  <li>• Testnet Access via Coinbase Wallet/MetaMask</li>
                </ul>
              </div>
            )}
          </div>

          {/* Why Choose Base */}
          <div className="mb-8">
            <button
              onClick={() => toggleSection("whyChooseBase")}
              className="w-full flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-colors text-white/90"
            >
              <span className="text-base font-medium">Why Choose Base?</span>
              {openSections.whyChooseBase ? (
                <ChevronDown className="w-4 h-4 opacity-60" />
              ) : (
                <ChevronRight className="w-4 h-4 opacity-60" />
              )}
            </button>
            {openSections.whyChooseBase && (
              <div className="mt-2 pl-4 space-y-2 text-sm text-white/70">
                <ul className="space-y-2">
                  <li>• Low-Cost & Fast Transactions (~1s)</li>
                  <li>• Developer-Friendly Tools</li>
                  <li>• $26M+ in Developer Grants</li>
                  <li>• Global Accessibility</li>
                </ul>
              </div>
            )}
          </div>

          {/* Ethereum vs Base */}
          <div className="mb-8">
            <button
              onClick={() => toggleSection("ethereumVsBase")}
              className="w-full flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-colors text-white/90"
            >
              <span className="text-base font-medium">Ethereum vs Base</span>
              {openSections.ethereumVsBase ? (
                <ChevronDown className="w-4 h-4 opacity-60" />
              ) : (
                <ChevronRight className="w-4 h-4 opacity-60" />
              )}
            </button>
            {openSections.ethereumVsBase && (
              <div className="mt-2 pl-4 space-y-2 text-sm text-white/70">
                <p>Key differences in:</p>
                <ul className="space-y-2 pl-4">
                  <li>• Opcodes</li>
                  <li>• Block structure</li>
                  <li>• Network specifications</li>
                  <li>• Transaction costs</li>
                </ul>
              </div>
            )}
          </div>

          {/* Frontend Development Section */}
          <div className="mb-8">
            <button
              onClick={() => toggleSection("frontend")}
              className="w-full flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-colors text-white/90"
            >
              <span className="text-base font-medium">Frontend Development</span>
              {openSections.frontend ? (
                <ChevronDown className="w-4 h-4 opacity-60" />
              ) : (
                <ChevronRight className="w-4 h-4 opacity-60" />
              )}
            </button>
            {openSections.frontend && (
              <div className="mt-2 pl-4 space-y-4 text-sm text-white/70">
                <p>Build websites that interact with smart contracts.</p>
                
                {/* Prerequisites Subsection */}
                <div>
                  <button
                    onClick={() => toggleSection("prerequisites")}
                    className="w-full flex items-center justify-between py-1"
                  >
                    <span className="font-medium">Prerequisites</span>
                    {openSections.prerequisites ? (
                      <ChevronDown className="w-3 h-3 opacity-60" />
                    ) : (
                      <ChevronRight className="w-3 h-3 opacity-60" />
                    )}
                  </button>
                  {openSections.prerequisites && (
                    <ul className="mt-2 space-y-2 pl-4">
                      <li>• React/Next.js experience</li>
                      <li>• Basic EVM understanding</li>
                    </ul>
                  )}
                </div>

                {/* Course Objectives Subsection */}
                <div>
                  <button
                    onClick={() => toggleSection("courseObjectives")}
                    className="w-full flex items-center justify-between py-1"
                  >
                    <span className="font-medium">Course Objectives</span>
                    {openSections.courseObjectives ? (
                      <ChevronDown className="w-3 h-3 opacity-60" />
                    ) : (
                      <ChevronRight className="w-3 h-3 opacity-60" />
                    )}
                  </button>
                  {openSections.courseObjectives && (
                    <div className="mt-2 space-y-3 pl-4">
                      <div>
                        <p className="font-medium mb-1">Frontend Setup</p>
                        <ul className="space-y-1">
                          <li>• Wallet aggregator integration</li>
                          <li>• Template evaluation</li>
                          <li>• RainbowKit implementation</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Blockchain Connection</p>
                        <ul className="space-y-1">
                          <li>• Provider types and selection</li>
                          <li>• Wagmi setup</li>
                          <li>• API key security</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Data Management</p>
                        <ul className="space-y-1">
                          <li>• useAccount implementation</li>
                          <li>• Contract data retrieval</li>
                          <li>• Real-time updates</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Smart Contract Interaction</p>
                        <ul className="space-y-1">
                          <li>• Transaction handling</li>
                          <li>• Contract simulation</li>
                          <li>• User feedback implementation</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-80 flex-1">
        <div className="max-w-6xl mx-auto py-8 px-6">
          {/* Welcome Section */}
          <section className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Welcome to Base Documentation</h1>
            <p className="text-lg text-white/70">
              Select a topic from the sidebar to view documentation.
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
                  <h3 className="text-2xl font-semibold mb-3 text-white">Documentation</h3>
                  <p className="text-white/70 text-base mb-6">
                    Learn the basics of Base and start building your first decentralized application.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Key Features:</h4>
                    <ul className="text-white/70 space-y-2">
                      <li>• OnchainKit for building visually polished apps</li>
                      <li>• MiniKit for creating Mini Apps on Base</li>
                      <li>• Smart Contract Development Tools</li>
                      <li>• Wallet Integration Guides</li>
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Getting Started:</h4>
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
                  <h3 className="text-2xl font-semibold mb-3 text-white">Workshops & Webinars</h3>
                  <p className="text-white/70 text-base mb-6">
                    Interactive sessions and exercises for smart contract development on Base and other EVM-compatible chains.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Featured Content:</h4>
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
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Introduction to Base</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Learn about Base, a secure, low-cost, developer-friendly Ethereum L2 built to bring the next billion users to web3.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">What You&apos;ll Learn:</h4>
                    <ul className="text-white/70 text-sm space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                        <span>Ethereum Basics – History, goals, applications</span>
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
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Building Your First dApp</h3>
                  <p className="text-white/70 text-sm mb-4">
                    A comprehensive guide to building and deploying your first decentralized application on Base.
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
