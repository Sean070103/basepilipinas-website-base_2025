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
    <div className="prose prose-invert max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">DeFi Integration</h1>

      <p className="text-lg text-white/70 mb-8">
        Learn how to integrate DeFi functionality into your dApp using Base&apos;s
        DeFi SDK. This guide covers token swaps, liquidity provision, and
        staking.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Token Swaps</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Swap Implementation</h3>
            <p className="text-white/70 mb-4">
              Implement token swaps in your dApp:
            </p>
            <div className="mt-4">
              <CodeBlock code={swapCode} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Liquidity Provision</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Add Liquidity</h3>
            <p className="text-white/70 mb-4">
              Allow users to provide liquidity to pools:
            </p>
            <div className="mt-4">
              <CodeBlock code={liquidityCode} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Staking</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Stake Tokens</h3>
            <p className="text-white/70 mb-4">
              Implement token staking functionality:
            </p>
            <div className="mt-4">
              <CodeBlock code={stakingCode} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
