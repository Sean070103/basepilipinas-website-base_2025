"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function PaymasterPage() {
  const paymasterCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@base/contracts/paymaster/BasePaymaster.sol";

contract MyPaymaster is BasePaymaster {
  function validatePaymasterUserOp(
    UserOperation calldata userOp,
    bytes32 userOpHash,
    uint256 maxCost
  ) external returns (bytes memory context, uint256 validationData) {
    // Implement validation logic
    return (abi.encode(), 0);
  }
}`;

  const integrationCode = `import { PaymasterProvider } from '@base/paymaster';

const paymaster = new PaymasterProvider({
  rpcUrl: 'https://goerli.base.org',
  paymasterAddress: '0x...',
  entryPoint: '0x...'
});

// Create a gasless transaction
const userOp = await paymaster.createTransaction({
  target: contractAddress,
  data: encodedFunction
});`;

  const feeModelCode = `function calculateFee(UserOperation calldata userOp) internal view returns (uint256) {
  // Custom fee calculation logic
  uint256 baseGas = userOp.callGasLimit + userOp.verificationGasLimit;
  uint256 tokenAmount = baseGas * getTokenPrice();
  return tokenAmount;
}`;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">Paymaster</h1>
      <p className="text-gray-300 mb-8">
        Base&apos;s Paymaster enables gasless transactions and custom fee models for your dApp. 
        Learn how to implement and customize paymaster functionality to enhance user experience.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
        <p className="text-gray-300 mb-4">
          Create a custom paymaster contract with validation logic and fee models.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={paymasterCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Integration</h2>
        <p className="text-gray-300 mb-4">
          Integrate the paymaster into your dApp to enable gasless transactions.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={integrationCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Fee Models</h2>
        <p className="text-gray-300 mb-4">
          Implement custom fee calculation logic for different transaction types.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={feeModelCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Security Guidelines</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Implement proper access controls</li>
              <li>Validate all user operations thoroughly</li>
              <li>Set appropriate gas limits</li>
              <li>Monitor paymaster balance</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Gas Optimization</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Optimize validation logic</li>
              <li>Batch similar transactions</li>
              <li>Cache frequently used values</li>
              <li>Use efficient data structures</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Error Handling</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Implement comprehensive error messages</li>
              <li>Handle edge cases gracefully</li>
              <li>Provide fallback options</li>
              <li>Monitor failed transactions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
