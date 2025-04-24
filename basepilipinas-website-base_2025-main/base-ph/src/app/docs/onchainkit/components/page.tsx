'use client';

import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function ComponentsPage() {
  const connectButtonCode = `import { ConnectButton } from '@onchainkit/ui';

export function MyApp() {
  return (
    <ConnectButton 
      theme="dark"
      label="Connect Wallet"
      onConnect={(provider) => {
        console.log('Connected:', provider);
      }}
    />
  );
}`;

  const accountInfoCode = `import { AccountInfo } from '@onchainkit/ui';

export function Header() {
  return (
    <AccountInfo
      showBalance
      showNetwork
      showAvatar
      avatarSize={32}
    />
  );
}`;

  const transactionButtonCode = `import { TransactionButton } from '@onchainkit/ui';

export function SendTokens() {
  return (
    <TransactionButton
      onClick={async () => {
        const tx = await contract.transfer(to, amount);
        await tx.wait();
      }}
      loadingText="Sending..."
      successText="Sent!"
      errorText="Failed to send"
    >
      Send Tokens
    </TransactionButton>
  );
}`;

  const transactionStatusCode = `import { TransactionStatus } from '@onchainkit/ui';

export function TxStatus({ hash }) {
  return (
    <TransactionStatus
      hash={hash}
      network="base"
      showExplorerLink
      onConfirmed={() => {
        console.log('Transaction confirmed!');
      }}
    />
  );
}`;

  const tokenBalanceCode = `import { TokenBalance } from '@onchainkit/ui';

export function Balance() {
  return (
    <TokenBalance
      address="0x..."
      symbol="BASE"
      decimals={18}
      updateInterval={5000}
    />
  );
}`;

  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-6">Ready-to-Use Components</h1>
      
      <p className="text-lg text-white/70 mb-8">
        Here's how to use OnchainKit's ready-to-use components.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Wallet Components</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Connect Button</h3>
              <p className="text-white/70 mb-4">
                A customizable wallet connection button:
              </p>
              <div className="mt-4">
                <CodeBlock code={connectButtonCode} />
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Account Display</h3>
              <p className="text-white/70 mb-4">
                Display wallet information and balance:
              </p>
              <div className="mt-4">
                <CodeBlock code={accountInfoCode} />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Transaction Components</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Transaction Button</h3>
              <p className="text-white/70 mb-4">
                Handle transactions with loading and confirmation states:
              </p>
              <div className="mt-4">
                <CodeBlock code={transactionButtonCode} />
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Transaction Status</h3>
              <p className="text-white/70 mb-4">
                Display transaction status and progress:
              </p>
              <div className="mt-4">
                <CodeBlock code={transactionStatusCode} />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Display</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Token Balance</h3>
              <p className="text-white/70 mb-4">
                Display token balances with automatic updates:
              </p>
              <div className="mt-4">
                <CodeBlock code={tokenBalanceCode} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 