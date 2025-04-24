'use client';

import React from "react";
import Link from 'next/link';
import CodeBlock from "@/components/CodeBlock";

export default function PatternsPage() {
  const accessControlCode = `import "@openzeppelin/contracts/access/AccessControl.sol";

contract MyContract is AccessControl {
  bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
  bytes32 public constant OPERATOR_ROLE = keccak256("OPERATOR_ROLE");

  constructor() {
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
  }
}`;

  const stateManagementCode = `import { createWeb3State } from '@onchainkit/core';

const {
  Provider,
  useWeb3State,
  useWeb3Action
} = createWeb3State({
  initialState: {
    wallet: null,
    network: null
  }
});`;

  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-6">Proven Design Patterns</h1>
      
      <p className="text-lg text-white/70 mb-8">
        Explore battle-tested design patterns for building secure and efficient decentralized applications. 
        These patterns are derived from real-world applications and best practices in the Web3 ecosystem.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Smart Contract Patterns</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Access Control</h3>
              <p className="text-white/70 mb-4">
                Implement secure role-based access control in your contracts:
              </p>
              <div className="mt-4">
                <CodeBlock code={accessControlCode} />
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Upgradeable Contracts</h3>
              <p className="text-white/70">
                Pattern for creating upgradeable smart contracts:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <span>Proxy Pattern Implementation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <span>Storage Patterns</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <span>Version Control</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Frontend Patterns</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">State Management</h3>
            <p className="text-white/70 mb-4">
              Efficient patterns for managing Web3 application state:
            </p>
            <div className="mt-4">
              <CodeBlock code={stateManagementCode} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Security Patterns</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Common Security Patterns</h3>
            <p className="text-white/70 mb-4">
              Essential security patterns for your dApp:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Reentrancy Protection</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Integer Overflow Prevention</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Access Control Implementation</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/docs/onchainkit/components" className="bg-white/5 rounded-lg p-6 no-underline hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-medium mb-3 text-white">Ready-to-Use Components</h3>
              <p className="text-white/70">
                Explore our library of pre-built components implementing these patterns.
              </p>
              <span className="mt-4 text-blue-400 hover:text-blue-300 transition-colors inline-block">
                View Components →
              </span>
            </Link>
            <Link href="/docs/base/features" className="bg-white/5 rounded-lg p-6 no-underline hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-medium mb-3 text-white">Advanced Features</h3>
              <p className="text-white/70">
                Learn about advanced Base features and integrations.
              </p>
              <span className="mt-4 text-blue-400 hover:text-blue-300 transition-colors inline-block">
                Explore Features →
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 