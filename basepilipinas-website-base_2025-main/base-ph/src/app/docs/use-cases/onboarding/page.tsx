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
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-6">User Onboarding</h1>

      <p className="text-lg text-white/70 mb-8">
        Learn how to create a seamless onboarding experience for your dApp users.
        This guide covers wallet connection, social recovery setup, and gasless
        transactions.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Wallet Connection</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Connect Wallet Flow</h3>
            <p className="text-white/70 mb-4">
              Implement a simple wallet connection flow:
            </p>
            <div className="mt-4">
              <CodeBlock code={walletConnectionCode} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Social Recovery</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Recovery Setup</h3>
            <p className="text-white/70 mb-4">
              Set up social recovery for enhanced security:
            </p>
            <div className="mt-4">
              <CodeBlock code={socialRecoveryCode} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Gasless Transactions</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Gasless Implementation</h3>
            <p className="text-white/70 mb-4">
              Enable gasless transactions for better UX:
            </p>
            <div className="mt-4">
              <CodeBlock code={gaslessTxCode} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
