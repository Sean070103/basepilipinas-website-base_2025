"use client";

import React, { useRef } from "react";
import CodeBlock from "@/components/CodeBlock";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaymasterPage() {
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

  const paymasterCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@base/contracts/paymaster/BasePaymaster.sol";

contract MyPaymaster is BasePaymaster {
  function validatePaymasterUserOp(
    UserOperation calldata userOp,
    bytes32 userOpHash,
    uint256 maxCost
  ) external returns (bytes memory context, uint256 validationData) {
    // Implement validation logic
    return (abi.encode(), 0);
  }
}`;

  const integrationCode = `import { PaymasterProvider } from '@base/paymaster';

const paymaster = new PaymasterProvider({
  rpcUrl: 'https://goerli.base.org',
  paymasterAddress: '0x...',
  entryPoint: '0x...'
});

// Create a gasless transaction
const userOp = await paymaster.createTransaction({
  target: contractAddress,
  data: encodedFunction
});`;

  const feeModelCode = `function calculateFee(UserOperation calldata userOp) internal view returns (uint256) {
  // Custom fee calculation logic
  uint256 baseGas = userOp.callGasLimit + userOp.verificationGasLimit;
  uint256 tokenAmount = baseGas * getTokenPrice();
  return tokenAmount;
}`;

  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-6">Paymaster</h1>

      <p className="text-lg text-white/70 mb-8">
        Base&apos;s Paymaster enables gasless transactions and custom fee models
        for your dApp. Learn how to implement and customize paymaster
        functionality to enhance user experience.
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
              <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Basic Paymaster Setup</h3>
                <p className="text-white/70 mb-4">
                  Implement a basic paymaster in your smart contract:
                </p>
                <div className="mt-4">
                  <CodeBlock code={paymasterCode} />
                </div>
              </div>
            </section>
          </div>

          <div className="min-w-[300px] space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Integration</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Using Paymaster in dApp</h3>
                <p className="text-white/70 mb-4">
                  Here&apos;s how to integrate Base&apos;s Paymaster functionality
                  into your dApp.
                </p>
                <div className="mt-4">
                  <CodeBlock code={integrationCode} />
                </div>
              </div>
            </section>
          </div>

          <div className="min-w-[300px] space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Advanced Features</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Custom Fee Models</h3>
                <p className="text-white/70 mb-4">
                  Implement custom fee models with your paymaster:
                </p>
                <div className="mt-4">
                  <CodeBlock code={feeModelCode} />
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
