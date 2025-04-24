"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function VerificationsPage() {
  const verifyContractCode = `import { verify } from '@base/verify';

async function verifyContract() {
  await verify({
    address: '0x...',
    network: 'base',
    constructorArguments: [
      'Token Name',
      'TKN'
    ]
  });
}`;

  const verifySourceCode = `import { verifySource } from '@base/verify';

async function verifySourceCode() {
  await verifySource({
    address: '0x...',
    network: 'base',
    sourceCode: 'contracts/MyContract.sol',
    compilerVersion: '0.8.19'
  });
}`;

  const verifyProxyCode = `import { verifyProxy } from '@base/verify';

async function verifyProxyContract() {
  await verifyProxy({
    address: '0x...',
    network: 'base',
    implementation: '0x...',
    admin: '0x...'
  });
}`;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">Contract Verification</h1>
      <p className="text-gray-300 mb-8">
        Learn how to verify your smart contracts on Base. This guide covers standard contract verification, 
        source code verification, and proxy contract verification.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Standard Verification</h2>
        <p className="text-gray-300 mb-4">
          Verify standard smart contracts with constructor arguments and metadata.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={verifyContractCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Source Code Verification</h2>
        <p className="text-gray-300 mb-4">
          Verify contracts by providing the complete source code and compiler settings.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={verifySourceCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Proxy Verification</h2>
        <p className="text-gray-300 mb-4">
          Verify proxy contracts and their implementations for transparent upgrades.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={verifyProxyCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Verification Process</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Ensure all source files are properly flattened</li>
              <li>Match compiler version and optimization settings</li>
              <li>Include all external library references</li>
              <li>Verify contracts immediately after deployment</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Common Issues</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Mismatched compiler versions</li>
              <li>Incorrect constructor arguments</li>
              <li>Missing library dependencies</li>
              <li>Unverified proxy implementations</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Security Considerations</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Keep source code consistent with deployment</li>
              <li>Document all contract dependencies</li>
              <li>Maintain version control of verified contracts</li>
              <li>Regularly audit verified implementations</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
