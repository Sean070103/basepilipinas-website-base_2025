"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentPath = pathname.split("/")[2];

  return (
    <div className="min-h-screen flex bg-[#0B1221]">
      {/* Fixed Sidebar */}
      <aside className="fixed w-[280px] h-screen bg-[#0B1221] border-r border-white/10">
        <div className="h-full flex flex-col">
          {/* Logo and Title */}
          <div className="flex items-center gap-3 p-4 border-b border-white/10">
            <div className="rounded-full bg-white/5 p-1.5">
              <Image
                src="/logo/Base_Symbol_White.svg"
                alt="Base Logo"
                width={24}
                height={24}
              />
            </div>
            <span className="text-lg">Docs</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 py-6">
            {/* OnchainKit Section */}
            <div className="px-4 mb-6">
              <Link 
                href="/docs/onchainkit"
                className={`block text-[15px] ${
                  currentPath === "onchainkit" ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                OnchainKit
              </Link>
              <div className="mt-2 ml-2 space-y-1 text-[14px]">
                <div className="text-white/50">Key Features:</div>
                <div className="text-white/70">• Developer-Centric Tools</div>
                <div className="text-white/70">• Proven Patterns</div>
                <div className="text-white/70">• Ready-to-Use Components</div>
                <div className="text-white/70">• Framework Flexibility</div>
              </div>
              <Link 
                href="/docs/onchainkit/docs"
                className="inline-block mt-2 text-[14px] text-blue-400 hover:text-blue-300"
              >
                View Documentation →
              </Link>
            </div>

            {/* MiniKit Section */}
            <div className="px-4 mb-6">
              <Link 
                href="/docs/minikit"
                className={`block text-[15px] ${
                  currentPath === "minikit" ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                MiniKit
              </Link>
              <div className="mt-1 text-[14px] text-white/70">
                Build Mini Apps on Base with ease
              </div>
              <div className="mt-2 ml-2 space-y-1 text-[14px]">
                <div className="text-white/50">Features:</div>
                <div className="text-white/70">• Streamlined Development</div>
                <div className="text-white/70">• Coinbase Wallet Hooks</div>
                <div className="text-white/70">• Fast Setup</div>
                <div className="text-white/70">• Identity Handling</div>
              </div>
              <Link 
                href="/docs/minikit/docs"
                className="inline-block mt-2 text-[14px] text-blue-400 hover:text-blue-300"
              >
                View Documentation →
              </Link>
            </div>

            {/* Powerful Features Section */}
            <div className="px-4">
              <h3 className="text-[15px] font-medium mb-3">Powerful Features</h3>
              <div className="space-y-2 text-[14px]">
                <Link 
                  href="/docs/features/wallet"
                  className="block text-white/70 hover:text-white"
                >
                  • Wallet Onboarding
                </Link>
                <Link 
                  href="/docs/features/payments"
                  className="block text-white/70 hover:text-white"
                >
                  • Crypto Payments
                </Link>
                <Link 
                  href="/docs/features/ai"
                  className="block text-white/70 hover:text-white"
                >
                  • AI Agents
                </Link>
                <Link 
                  href="/docs/features/social"
                  className="block text-white/70 hover:text-white"
                >
                  • Social Identity
                </Link>
                <Link 
                  href="/docs/features/defi"
                  className="block text-white/70 hover:text-white"
                >
                  • DeFi Integration
                </Link>
                <Link 
                  href="/docs/features/gasless"
                  className="block text-white/70 hover:text-white"
                >
                  • Gasless Transactions
                </Link>
              </div>
            </div>

            {/* Introduction Link at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
              <Link 
                href="/docs/introduction"
                className="flex items-center text-[14px] text-white/70 hover:text-white"
              >
                <div className="mr-3 p-1 rounded bg-white/5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Introduction to Base
                <svg className="w-4 h-4 ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-[280px] min-h-screen">
        <div className="p-8 max-w-4xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
} 