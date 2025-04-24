"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function DeFiIntegrationPage() {
  const swapCode = `import { useSwap } from '@base/defi';

function SwapComponent() {
  const { swap, loading } = useSwap({
    fromToken: 'ETH',
    toToken: 'USDC',
    amount: '1.0'
  });

  return (
    <button
      onClick={swap}
      disabled={loading}
      className="px-4 py-2 bg-blue-500 rounded"
    >
      {loading ? 'Swapping...' : 'Swap ETH for USDC'}
    </button>
  );
}`;

  const liquidityCode = `import { useLiquidity } from '@base/defi';

function AddLiquidity() {
  const { addLiquidity, loading } = useLiquidity({
    tokenA: 'ETH',
    tokenB: 'USDC',
    amountA: '1.0',
    amountB: '2000'
  });

  return (
    <button
      onClick={addLiquidity}
      disabled={loading}
      className="px-4 py-2 bg-blue-500 rounded"
    >
      {loading ? 'Adding Liquidity...' : 'Add Liquidity'}
    </button>
  );
}`;

  const stakingCode = `import { useStaking } from '@base/defi';

function StakeTokens() {
  const { stake, loading } = useStaking({
    token: 'BASE',
    amount: '1000',
    duration: '30' // days
  });

  return (
    <button
      onClick={stake}
      disabled={loading}
      className="px-4 py-2 bg-blue-500 rounded"
    >
      {loading ? 'Staking...' : 'Stake BASE'}
    </button>
  );
}`;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">DeFi Integration</h1>
      <p className="text-gray-300 mb-8">
        Learn how to integrate DeFi functionality into your dApp using Base&apos;s DeFi SDK. 
        This guide covers token swaps, liquidity provision, and staking.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Token Swaps</h2>
        <p className="text-gray-300 mb-4">
          Implement token swaps in your dApp with our simple-to-use hooks.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={swapCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Liquidity Provision</h2>
        <p className="text-gray-300 mb-4">
          Allow users to provide liquidity to pools with built-in safety checks.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={liquidityCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Staking</h2>
        <p className="text-gray-300 mb-4">
          Enable token staking functionality with customizable duration and rewards.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={stakingCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Security Guidelines</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Always validate user input before executing transactions</li>
              <li>Implement proper error handling and transaction monitoring</li>
              <li>Use price oracles for accurate token valuations</li>
              <li>Set appropriate slippage tolerances for swaps</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Performance Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Batch transactions when possible to save gas</li>
              <li>Implement proper caching for token prices and balances</li>
              <li>Use optimistic updates for better UX</li>
              <li>Monitor gas prices and suggest optimal transaction timing</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">User Experience</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Show clear transaction status and confirmations</li>
              <li>Display estimated gas fees before transactions</li>
              <li>Provide clear error messages and recovery options</li>
              <li>Implement transaction history and portfolio tracking</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
