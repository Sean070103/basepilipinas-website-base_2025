import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function ProvenPatterns() {
  const accountAbstractionCode = `import { useWallet, useSmartWallet } from '@onchainkit/hooks'

function SmartWalletSetup() {
  const { address } = useWallet()
  const { createWallet, isCreating } = useSmartWallet()

  const handleCreate = async () => {
    try {
      await createWallet({
      owner: address,
        salt: Date.now().toString()
      })
    } catch (error) {
      console.error('Failed to create smart wallet:', error)
    }
  }

  return (
    <button 
      onClick={handleCreate}
      disabled={isCreating}
    >
      {isCreating ? 'Creating...' : 'Create Smart Wallet'}
    </button>
  )
}`;

  const gaslessTransactionCode = `import { useGasless } from '@onchainkit/hooks'

function GaslessTransfer() {
  const { sendTransaction, isProcessing } = useGasless()

  const handleTransfer = async () => {
    try {
      await sendTransaction({
        to: '0x123...',
        value: '0.1',
        gasless: true
      })
    } catch (error) {
      console.error('Gasless transaction failed:', error)
    }
  }

  return (
    <button 
      onClick={handleTransfer}
      disabled={isProcessing}
    >
      {isProcessing ? 'Processing...' : 'Send Transaction'}
    </button>
  )
}`;

  const batchTransactionCode = `import { useBatchTransactions } from '@onchainkit/hooks'

function BatchTransfer() {
  const { executeBatch, isPending } = useBatchTransactions()

  const handleBatchTransfer = async () => {
    const transactions = [
      {
        to: '0x123...',
        value: '0.1',
        data: '0x...'
      },
      {
        to: '0x456...',
        value: '0.2',
        data: '0x...'
      }
    ]

    try {
      await executeBatch(transactions)
    } catch (error) {
      console.error('Batch transaction failed:', error)
    }
  }

  return (
    <button 
      onClick={handleBatchTransfer}
      disabled={isPending}
    >
      {isPending ? 'Processing Batch...' : 'Execute Batch'}
    </button>
  )
}`;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">Proven Patterns</h1>
      <p className="text-gray-300 mb-8">
        Explore battle-tested patterns for building robust dApps with OnchainKit.
        These patterns have been proven in production environments and follow
        best practices for security and user experience.
        </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Account Abstraction</h2>
        <p className="text-gray-300 mb-4">
          Implement smart contract wallets to enhance user experience and enable
          advanced features like batched transactions and gasless operations.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={accountAbstractionCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Gasless Transactions</h2>
        <p className="text-gray-300 mb-4">
          Enable gasless transactions by implementing meta-transactions and
          relayers to improve user onboarding and reduce friction.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={gaslessTransactionCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Batch Transactions</h2>
        <p className="text-gray-300 mb-4">
          Optimize gas usage and improve UX by batching multiple transactions
          into a single transaction.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={batchTransactionCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Error Handling</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Always wrap async operations in try-catch blocks</li>
              <li>Provide meaningful error messages to users</li>
              <li>Implement proper error recovery mechanisms</li>
              <li>Log errors for debugging and monitoring</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">State Management</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Use loading states for async operations</li>
              <li>Implement proper transaction status tracking</li>
              <li>Cache and invalidate data appropriately</li>
              <li>Handle network state changes gracefully</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Security</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Validate all user inputs</li>
              <li>Implement proper access controls</li>
              <li>Use secure dependencies and keep them updated</li>
              <li>Follow smart contract security best practices</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
