"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function WalletHooksPage() {
  const useWalletCode = `import { useWallet } from '@minikit/wallet';

function WalletStatus() {
  const { address, isConnected, connect } = useWallet();

  if (!isConnected) {
    return <button onClick={connect}>Connect</button>;
  }

  return <p>Connected: {address}</p>;
}`;

  const useBalanceCode = `import { useBalance } from '@minikit/wallet';

function BalanceDisplay() {
  const { balance, isLoading } = useBalance();

  if (isLoading) return <p>Loading balance...</p>;

  return <p>Balance: {balance} ETH</p>;
}`;

  const useNetworkCode = `import { useNetwork } from '@minikit/wallet';

function NetworkInfo() {
  const { chainId, isSupported } = useNetwork();

  return (
    <div>
      <p>Chain ID: {chainId}</p>
      <p>Network Supported: {isSupported ? 'Yes' : 'No'}</p>
    </div>
  );
}`;

  const useTransactionCode = `import { useTransaction } from '@minikit/wallet';

function SendTransaction() {
  const { send, isLoading, error } = useTransaction();

  const handleSend = async () => {
    try {
      await send({
        to: '0x...',
        value: '0.1'
      });
    } catch (err) {
      console.error('Transaction failed:', err);
    }
  };

  return (
    <button onClick={handleSend} disabled={isLoading}>
      {isLoading ? 'Sending...' : 'Send Transaction'}
    </button>
  );
}`;

  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-6">Coinbase Wallet Hooks</h1>
      
      <p className="text-lg text-white/70 mb-8">
        MiniKit provides a set of React hooks for seamless Coinbase Wallet integration.
        These hooks handle wallet connection, balance tracking, network management, and transaction execution.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Core Hooks</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">useWallet</h3>
              <p className="text-white/70 mb-4">
                Manage wallet connection state and methods:
              </p>
              <div className="mt-4">
                <CodeBlock code={useWalletCode} />
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">useBalance</h3>
              <p className="text-white/70 mb-4">
                Track wallet balance and loading state:
              </p>
              <div className="mt-4">
                <CodeBlock code={useBalanceCode} />
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">useNetwork</h3>
              <p className="text-white/70 mb-4">
                Access network information and chain support:
              </p>
              <div className="mt-4">
                <CodeBlock code={useNetworkCode} />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Transaction Hooks</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">useTransaction</h3>
              <p className="text-white/70 mb-4">
                Execute transactions with loading and error states:
              </p>
              <div className="mt-4">
                <CodeBlock code={useTransactionCode} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 