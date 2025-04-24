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
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-6">Contract Verification</h1>

      <p className="text-lg text-white/70 mb-8">
        Learn how to verify your smart contracts on Base. This guide covers
        standard contract verification, source code verification, and proxy
        contract verification.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Standard Verification</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Verify Contract</h3>
            <p className="text-white/70 mb-4">
              Verify a standard smart contract:
            </p>
            <div className="mt-4">
              <CodeBlock code={verifyContractCode} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Source Code Verification</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Verify Source Code</h3>
            <p className="text-white/70 mb-4">
              Verify a contract with its source code:
            </p>
            <div className="mt-4">
              <CodeBlock code={verifySourceCode} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Proxy Verification</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Verify Proxy Contract</h3>
            <p className="text-white/70 mb-4">
              Verify a proxy contract and its implementation:
            </p>
            <div className="mt-4">
              <CodeBlock code={verifyProxyCode} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Verification Guidelines</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Always verify contracts after deployment
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Include all constructor arguments
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Verify proxy contracts and their implementations
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
