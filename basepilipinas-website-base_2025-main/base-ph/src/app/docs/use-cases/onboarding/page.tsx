"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function UserOnboardingPage() {
  const walletConnectionCode = `import { useWallet } from '@base/wallet';

function OnboardingFlow() {
  const { connect, isConnected, address } = useWallet();

  return (
    <div>
      {!isConnected ? (
        <button onClick={connect}>Connect Wallet</button>
      ) : (
        <div>
          <p>Connected: {address}</p>
          <button onClick={() => {/* Next step */}}>
            Continue
          </button>
        </div>
      )}
    </div>
  );
}`;

  const socialRecoveryCode = `import { useSocialRecovery } from '@base/wallet';

function RecoverySetup() {
  const { setupGuardians, isSettingUp } = useSocialRecovery();

  const handleSetup = async () => {
    await setupGuardians({
      guardians: ['0x123...', '0x456...'],
      threshold: 2
    });
  };

  return (
    <button onClick={handleSetup} disabled={isSettingUp}>
      {isSettingUp ? 'Setting up...' : 'Setup Recovery'}
    </button>
  );
}`;

  const gaslessTxCode = `import { useGasless } from '@base/wallet';

function GaslessTransaction() {
  const { sendTransaction, isProcessing } = useGasless();

  const handleSend = async () => {
    await sendTransaction({
      to: '0x789...',
      value: '0.1',
      gasless: true
    });
  };

  return (
    <button onClick={handleSend} disabled={isProcessing}>
      {isProcessing ? 'Processing...' : 'Send Gasless'}
    </button>
  );
}`;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">User Onboarding</h1>
      <p className="text-gray-300 mb-8">
        Learn how to create a seamless onboarding experience for your dApp users.
        This guide covers wallet connection, social recovery setup, and gasless
        transactions.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Wallet Connection</h2>
        <p className="text-gray-300 mb-4">
          Implement a simple and intuitive wallet connection flow for your users.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={walletConnectionCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Social Recovery</h2>
        <p className="text-gray-300 mb-4">
          Add social recovery capabilities to enhance wallet security and recovery options.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={socialRecoveryCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Gasless Transactions</h2>
        <p className="text-gray-300 mb-4">
          Enable gasless transactions to improve user experience and reduce friction.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={gaslessTxCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">User Experience</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Provide clear instructions at each step</li>
              <li>Show loading states and progress indicators</li>
              <li>Handle errors gracefully with helpful messages</li>
              <li>Offer multiple wallet connection options</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Security Considerations</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Implement proper signature verification</li>
              <li>Use secure communication channels</li>
              <li>Validate all user inputs</li>
              <li>Follow security best practices for guardian selection</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Testing Guidelines</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Test with different wallet providers</li>
              <li>Verify recovery process thoroughly</li>
              <li>Simulate network issues and errors</li>
              <li>Test gasless transaction limits</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
