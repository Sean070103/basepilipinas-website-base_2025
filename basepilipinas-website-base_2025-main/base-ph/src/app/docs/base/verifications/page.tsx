"use client";

import React, { useRef } from "react";
import CodeBlock from "@/components/CodeBlock";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function VerificationsPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  const verifyContractCode = `import { verify } from '@base/verify';

async function verifyContract() {
  await verify({
    address: '0x...',
    network: 'base',
    constructorArguments: [
      'Token Name',
      'TKN'
    ]
  });
}`;

  const verifySourceCode = `import { verifySource } from '@base/verify';

async function verifySourceCode() {
  await verifySource({
    address: '0x...',
    network: 'base',
    sourceCode: 'contracts/MyContract.sol',
    compilerVersion: '0.8.19'
  });
}`;

  const verifyProxyCode = `import { verifyProxy } from '@base/verify';

async function verifyProxyContract() {
  await verifyProxy({
    address: '0x...',
    network: 'base',
    implementation: '0x...',
    admin: '0x...'
  });
}`;

  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-6">Contract Verification</h1>

      <p className="text-lg text-white/70 mb-8">
        Learn how to verify your smart contracts on Base. This guide covers
        standard contract verification, source code verification, and proxy
        contract verification.
      </p>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-8 pb-4 scrollbar-hide"
        >
          <div className="min-w-[300px] space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Standard Verification</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Verify Contract</h3>
                <p className="text-white/70 mb-4">
                  Verify a standard smart contract:
                </p>
                <div className="mt-4">
                  <CodeBlock code={verifyContractCode} />
                </div>
              </div>
            </section>
          </div>

          <div className="min-w-[300px] space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Source Code Verification</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Verify Source Code</h3>
                <p className="text-white/70 mb-4">
                  Verify a contract with its source code:
                </p>
                <div className="mt-4">
                  <CodeBlock code={verifySourceCode} />
                </div>
              </div>
            </section>
          </div>

          <div className="min-w-[300px] space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Proxy Verification</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Verify Proxy Contract</h3>
                <p className="text-white/70 mb-4">
                  Verify a proxy contract and its implementation:
                </p>
                <div className="mt-4">
                  <CodeBlock code={verifyProxyCode} />
                </div>
              </div>
            </section>
          </div>
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
