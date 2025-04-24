"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function ComponentsPage() {
  const walletCode = `import { ConnectButton, AccountInfo } from '@onchainkit/components';

function WalletSection() {
  return (
    <div>
      <ConnectButton theme="dark" />
      <AccountInfo showBalance showNetwork />
    </div>
  );
}`;

  const transactionCode = `import { TransactionButton, TransactionStatus } from '@onchainkit/components';

function TransactionSection() {
  return (
    <div>
      <TransactionButton
        onClick={handleTransaction}
        loading={isProcessing}
      >
        Send Transaction
      </TransactionButton>
      <TransactionStatus hash={txHash} />
    </div>
  );
}`;

  const dataDisplayCode = `import { TokenBalance, NFTGallery } from '@onchainkit/components';

function DataSection() {
  return (
    <div>
      <TokenBalance
        address={tokenAddress}
        symbol="ETH"
        decimals={18}
      />
      <NFTGallery
        address={userAddress}
        chain="base"
      />
    </div>
  );
}`;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">Ready-to-Use Components</h1>
      <p className="text-gray-300 mb-8">
        Explore our collection of pre-built React components designed for seamless blockchain integration.
        These components handle common Web3 interactions while maintaining a professional look and feel.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Wallet Components</h2>
        <p className="text-gray-300 mb-4">
          Components for wallet connection and account management.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={walletCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Transaction Components</h2>
        <p className="text-gray-300 mb-4">
          Handle blockchain transactions with built-in status tracking and notifications.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={transactionCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Data Display Components</h2>
        <p className="text-gray-300 mb-4">
          Display on-chain data like token balances and NFT collections.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={dataDisplayCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Component Usage</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Keep components focused and single-purpose</li>
              <li>Handle loading and error states</li>
              <li>Implement proper prop validation</li>
              <li>Document component APIs</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Performance</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Implement proper memoization</li>
              <li>Optimize re-renders</li>
              <li>Use efficient data fetching</li>
              <li>Lazy load when possible</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Accessibility</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Follow ARIA best practices</li>
              <li>Support keyboard navigation</li>
              <li>Maintain proper contrast</li>
              <li>Provide clear feedback</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 