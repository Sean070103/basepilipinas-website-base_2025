'use client';

import React, { useRef } from "react";
import CodeBlock from "@/components/CodeBlock";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ComponentsPage() {
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

  const connectButtonCode = `import { ConnectButton } from '@onchainkit/components';

function Header() {
  return (
    <ConnectButton
      theme="dark"
      showBalance
    />
  );
}`;

  const accountInfoCode = `import { AccountInfo } from '@onchainkit/components';

function Profile() {
  return (
    <AccountInfo
      showBalance
      showNetwork
      truncateAddress
    />
  );
}`;

  const transactionButtonCode = `import { TransactionButton } from '@onchainkit/components';

function SendButton() {
  return (
    <TransactionButton
      to="0x..."
      value="0.1"
      onSuccess={(tx) => console.log(tx)}
      onError={(error) => console.error(error)}
    >
      Send ETH
    </TransactionButton>
  );
}`;

  const transactionStatusCode = `import { TransactionStatus } from '@onchainkit/components';

function Status() {
  return (
    <TransactionStatus
      status={txStatus}
      onRetry={handleRetry}
    />
  );
}`;

  const tokenBalanceCode = `import { TokenBalance } from '@onchainkit/components';

function Balance() {
  return (
    <TokenBalance
      token="ETH"
      showSymbol
      showUSD
    />
  );
}`;

  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-6">Ready-to-Use Components</h1>

      <p className="text-lg text-white/70 mb-8">
        OnchainKit provides a collection of pre-built components to accelerate your development. These components are designed to work seamlessly with Base and follow best practices for Web3 applications.
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
              <h2 className="text-2xl font-semibold mb-4">Wallet Components</h2>
              <div className="space-y-6">
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Connect Button</h3>
                  <p className="text-white/70 mb-4">
                    A pre-built wallet connection button:
                  </p>
                  <div className="mt-4">
                    <CodeBlock code={connectButtonCode} />
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Account Info</h3>
                  <p className="text-white/70 mb-4">
                    Display account information:
                  </p>
                  <div className="mt-4">
                    <CodeBlock code={accountInfoCode} />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="min-w-[300px] space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Transaction Components</h2>
              <div className="space-y-6">
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Transaction Button</h3>
                  <p className="text-white/70 mb-4">
                    A button for sending transactions:
                  </p>
                  <div className="mt-4">
                    <CodeBlock code={transactionButtonCode} />
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-3">Transaction Status</h3>
                  <p className="text-white/70 mb-4">
                    Display transaction status:
                  </p>
                  <div className="mt-4">
                    <CodeBlock code={transactionStatusCode} />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="min-w-[300px] space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Display</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Token Balance</h3>
                <p className="text-white/70 mb-4">
                  Display token balances:
                </p>
                <div className="mt-4">
                  <CodeBlock code={tokenBalanceCode} />
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