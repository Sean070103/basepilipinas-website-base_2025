"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

type SectionName = 'quickstart' | 'onchainkit' | 'minikit' | 'features' | 'base';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [openSections, setOpenSections] = useState({
    quickstart: true,
    onchainkit: true,
    minikit: true,
    features: true,
    base: true,
  });

  const toggleSection = (section: SectionName) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const navigateToPage = (path: string) => {
    router.push(`/docs/${path}`);
  };

  return (
    <div className="min-h-screen bg-transparent flex">
      {/* Sidebar */}
      <aside className="fixed w-[280px] h-screen overflow-y-auto border-r border-white/10 bg-black/20 backdrop-blur-sm top-0 left-0">
        <nav className="py-4 px-6">
          <div className="space-y-4">
            {/* Quickstart Section */}
            <div>
              <button
                onClick={() => toggleSection('quickstart')}
                className="flex items-center justify-between w-full text-white hover:text-white/80 transition-colors"
              >
                <span className="text-lg font-semibold">Quickstart Overview</span>
                {openSections.quickstart ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
              {openSections.quickstart && (
                <div className="mt-2 ml-4 space-y-2 text-[15px] text-white/70">
                  <p>Build a simple onchain app from setup to deployment.</p>
                  <button 
                    onClick={() => navigateToPage('quickstart/development-environment')}
                    className="block hover:text-white transition-colors text-left w-full"
                  >
                    • Development Environment
                  </button>
                  <button 
                    onClick={() => navigateToPage('quickstart/smart-contract')}
                    className="block hover:text-white transition-colors text-left w-full"
                  >
                    • Smart Contract Development
                  </button>
                  <button 
                    onClick={() => navigateToPage('quickstart/frontend-integration')}
                    className="block hover:text-white transition-colors text-left w-full"
                  >
                    • Frontend Integration
                  </button>
                </div>
              )}
            </div>

            {/* OnchainKit Section */}
            <div>
              <button
                onClick={() => toggleSection('onchainkit')}
                className="flex items-center justify-between w-full text-white hover:text-white/80 transition-colors"
              >
                <span className="text-lg font-semibold">OnchainKit</span>
                {openSections.onchainkit ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
              {openSections.onchainkit && (
                <div className="mt-2 ml-4 space-y-2 text-[15px] text-white/70">
                  <p>Build an app in 10 minutes with this all-in-one toolkit.</p>
                  <button 
                    onClick={() => navigateToPage('onchainkit/developer-tools')}
                    className="block hover:text-white transition-colors text-left w-full"
                  >
                    • Developer-Centric Tools
                  </button>
                  <button 
                    onClick={() => navigateToPage('onchainkit/proven-patterns')}
                    className="block hover:text-white transition-colors text-left w-full"
                  >
                    • Proven Patterns
                  </button>
                  <button 
                    onClick={() => navigateToPage('onchainkit/components')}
                    className="block hover:text-white transition-colors text-left w-full"
                  >
                    • Ready-to-Use Components
                  </button>
                  <button 
                    onClick={() => navigateToPage('onchainkit/testing')}
                    className="block hover:text-white transition-colors text-left w-full"
                  >
                    • Testing Guide
                  </button>
                </div>
              )}
            </div>

            {/* MiniKit Section */}
            <div>
              <button
                onClick={() => toggleSection('minikit')}
                className="flex items-center justify-between w-full text-white hover:text-white/80 transition-colors"
              >
                <span className="text-lg font-semibold">MiniKit</span>
                {openSections.minikit ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
              {openSections.minikit && (
                <div className="mt-2 ml-4 space-y-2 text-[15px] text-white/70">
                  <p>Feature your mini app on Warpcast and Coinbase Wallet.</p>
                  <button 
                    onClick={() => navigateToPage('minikit/development')}
                    className="block hover:text-white transition-colors text-left w-full"
                  >
                    • Streamlined Development
                  </button>
                  <button 
                    onClick={() => navigateToPage('minikit/wallet-integration')}
                    className="block hover:text-white transition-colors text-left w-full"
                  >
                    • Coinbase Wallet Hooks
                  </button>
                  <button 
                    onClick={() => navigateToPage('minikit/identity')}
                    className="block hover:text-white transition-colors text-left w-full"
                  >
                    • Identity & Social Features
                  </button>
                </div>
              )}
            </div>

            {/* Base Features */}
            <div>
              <button
                onClick={() => toggleSection('base')}
                className="flex items-center justify-between w-full text-white hover:text-white/80 transition-colors"
              >
                <span className="text-lg font-semibold">Base Features</span>
                {openSections.base ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
              {openSections.base && (
                <div className="mt-2 ml-4 space-y-2 text-[15px] text-white/70">
                  <button 
                    onClick={() => navigateToPage('base/smart-wallet')}
                    className="block hover:text-white transition-colors text-left w-full"
                  >
                    • Smart Wallet
                  </button>
                  <button 
                    onClick={() => navigateToPage('base/paymaster')}
                    className="block hover:text-white transition-colors text-left w-full"
                  >
                    • Paymaster
                  </button>
                  <button 
                    onClick={() => navigateToPage('base/verifications')}
                    className="block hover:text-white transition-colors text-left w-full"
                  >
                    • Verifications
                  </button>
                </div>
              )}
            </div>

            {/* Use Cases */}
            <div>
              <button
                onClick={() => toggleSection('features')}
                className="flex items-center justify-between w-full text-white hover:text-white/80 transition-colors"
              >
                <span className="text-lg font-semibold">Use Cases</span>
                {openSections.features ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
              {openSections.features && (
                <div className="mt-2 ml-4 space-y-2 text-[15px] text-white/70">
                  <button 
                    onClick={() => navigateToPage('use-cases/onboarding')}
                    className="block hover:text-white transition-colors text-left w-full"
                  >
                    • User Onboarding
                  </button>
                  <button 
                    onClick={() => navigateToPage('use-cases/payments')}
                    className="block hover:text-white transition-colors text-left w-full"
                  >
                    • Accept Crypto Payments
                  </button>
                  <button 
                    onClick={() => navigateToPage('use-cases/ai-agents')}
                    className="block hover:text-white transition-colors text-left w-full"
                  >
                    • Launch AI Agents
                  </button>
                  <button 
                    onClick={() => navigateToPage('use-cases/defi')}
                    className="block hover:text-white transition-colors text-left w-full"
                  >
                    • DeFi Integration
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-[280px] min-h-screen">
        <div className="max-w-4xl mx-auto py-12 px-8">
          {children}
        </div>
      </main>
    </div>
  );
}