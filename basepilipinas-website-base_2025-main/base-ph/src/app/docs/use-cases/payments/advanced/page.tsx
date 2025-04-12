"use client";

export default function AdvancedPaymentsPage() {
  const customPaymasterCode = `import { usePaymaster } from '@onchainkit/payments';

function CustomPaymaster() {
  const { createPaymaster } = usePaymaster();

  const setupPaymaster = async () => {
    const paymaster = await createPaymaster({
      verificationContract: '0x...',
      sponsorshipRules: {
        maxGasLimit: '1000000',
        allowedTokens: ['ETH', 'USDC'],
        userQuota: {
          daily: '1000',
          monthly: '10000'
        }
      }
    });

    return paymaster;
  };

  return (
    <button onClick={setupPaymaster}>
      Setup Custom Paymaster
    </button>
  );
}`;

  const splitPaymentsCode = `import { usePayments } from '@onchainkit/payments';

function SplitPayment() {
  const { createSplitPayment } = usePayments();

  const handleSplitPayment = async () => {
    const payment = await createSplitPayment({
      amount: '1.0',
      currency: 'ETH',
      recipients: [
        { address: '0x...', share: 70 }, // 70%
        { address: '0x...', share: 30 }  // 30%
      ],
      metadata: {
        orderId: 'split_123'
      }
    });

    return payment;
  };

  return (
    <button onClick={handleSplitPayment}>
      Split Payment
    </button>
  );
}`;

  const escrowCode = `import { useEscrow } from '@onchainkit/payments';

function EscrowPayment() {
  const { createEscrow, releaseEscrow } = useEscrow();

  const setupEscrow = async () => {
    const escrow = await createEscrow({
      amount: '1.0',
      currency: 'ETH',
      buyer: '0x...',
      seller: '0x...',
      arbitrator: '0x...',
      timeout: 86400, // 24 hours
      metadata: {
        orderId: 'escrow_123'
      }
    });

    return escrow;
  };

  return (
    <div>
      <button onClick={setupEscrow}>Create Escrow</button>
      <button onClick={() => releaseEscrow('escrow_id')}>
        Release Funds
      </button>
    </div>
  );
}`;

  const crossChainCode = `import { useCrossChainPayment } from '@onchainkit/payments';

function CrossChainPayment() {
  const { createCrossChainPayment } = useCrossChainPayment();

  const handleCrossChainPayment = async () => {
    const payment = await createCrossChainPayment({
      amount: '100',
      sourceToken: 'USDC',
      targetToken: 'ETH',
      sourceChain: 'base',
      targetChain: 'ethereum',
      recipient: '0x...',
      metadata: {
        orderId: 'cross_123'
      }
    });

    return payment;
  };

  return (
    <button onClick={handleCrossChainPayment}>
      Cross-Chain Payment
    </button>
  );
}`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Advanced Payment Features</h1>
        <p className="text-lg text-white/70 mb-8">
          Explore advanced payment features and customization options for building sophisticated payment flows.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Custom Paymaster</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Paymaster Configuration</h3>
          <p className="text-white/70 mb-4">
            Create a custom paymaster with specific rules and quotas:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm">
              <code>{customPaymasterCode}</code>
            </pre>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Custom sponsorship rules</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">User quotas and limits</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Split Payments</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Revenue Sharing</h3>
          <p className="text-white/70 mb-4">
            Implement split payments for revenue sharing:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm">
              <code>{splitPaymentsCode}</code>
            </pre>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Percentage-based splits</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Multiple recipients</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Escrow Payments</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Secure Transactions</h3>
          <p className="text-white/70 mb-4">
            Add escrow functionality for secure transactions:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm">
              <code>{escrowCode}</code>
            </pre>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Time-locked funds</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Arbitration support</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Cross-Chain Payments</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Multi-Chain Support</h3>
          <p className="text-white/70 mb-4">
            Enable payments across different blockchains:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm">
              <code>{crossChainCode}</code>
            </pre>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Cross-chain transfers</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Token bridging</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Security</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Implement timeouts</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Use multisig for large amounts</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Monitor transactions</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Performance</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Optimize gas usage</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Batch transactions</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Use efficient routes</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">API Reference</h3>
            <p className="text-white/70">
              View the complete API documentation.
            </p>
            <a href="/docs/use-cases/payments" className="mt-4 text-blue-400 hover:text-blue-300 transition-colors inline-block">
              ← Back to Payments
            </a>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Examples</h3>
            <p className="text-white/70">
              See implementation examples.
            </p>
            <a href="/docs/use-cases/payments/examples" className="mt-4 text-blue-400 hover:text-blue-300 transition-colors inline-block">
              View Examples →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 