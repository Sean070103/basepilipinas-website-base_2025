"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function SmartWalletPage() {
  const setupCode = `import { SmartWalletProvider } from '@base/smart-wallet';

const wallet = new SmartWalletProvider({
  rpcUrl: 'https://goerli.base.org',
  entryPoint: '0x...',
  factoryAddress: '0x...'
});

// Create a new smart wallet
const walletAddress = await wallet.createWallet();`;

  const transactionCode = `// Send a transaction through the smart wallet
const tx = await wallet.sendTransaction({
  to: recipientAddress,
  value: ethers.utils.parseEther("0.1"),
  data: "0x"
});

// Wait for confirmation
const receipt = await tx.wait();`;

  const recoveryCode = `// Set up social recovery
await wallet.setupRecovery({
  guardians: [guardian1, guardian2, guardian3],
  threshold: 2
});

// Initiate recovery
const recoveryProof = await wallet.initiateRecovery({
  newOwner: newOwnerAddress,
  signatures: [sig1, sig2]
});`;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">Smart Wallet</h1>
      <p className="text-gray-300 mb-8">
        Base&apos;s Smart Wallet provides advanced account abstraction features for enhanced security and user experience. 
        Learn how to implement and customize smart wallet functionality in your dApp.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Setup</h2>
        <p className="text-gray-300 mb-4">
          Initialize and create a new smart wallet instance.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={setupCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
        <p className="text-gray-300 mb-4">
          Send transactions and interact with smart contracts using your smart wallet.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={transactionCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Social Recovery</h2>
        <p className="text-gray-300 mb-4">
          Implement social recovery functionality for enhanced wallet security.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={recoveryCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Security</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Use secure key management</li>
              <li>Implement multi-signature functionality</li>
              <li>Set up proper access controls</li>
              <li>Regular security audits</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Performance</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Batch transactions when possible</li>
              <li>Optimize gas usage</li>
              <li>Implement proper caching</li>
              <li>Monitor wallet balance</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">User Experience</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Clear error messages</li>
              <li>Transaction status updates</li>
              <li>Easy recovery process</li>
              <li>Intuitive interface</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
