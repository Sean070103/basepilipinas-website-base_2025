"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function ConfigurationPage() {
  const hardhatConfigCode = `// hardhat.config.ts
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    baseGoerli: {
      url: process.env.BASE_GOERLI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    baseMainnet: {
      url: process.env.BASE_MAINNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};

export default config;`;

  const networkConfigCode = `// network.config.ts
export const networkConfig = {
  baseGoerli: {
    chainId: 84531,
    blockConfirmations: 6,
    verifyApiKey: process.env.ETHERSCAN_API_KEY
  },
  baseMainnet: {
    chainId: 8453,
    blockConfirmations: 12,
    verifyApiKey: process.env.ETHERSCAN_API_KEY
  }
};`;

  const deployConfigCode = `// deploy.config.ts
export const deployConfig = {
  contractName: "MyContract",
  constructorArgs: ["Arg1", "Arg2"],
  gasLimit: 3000000,
  waitConfirmations: 6
};`;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">Configuration Guide</h1>
      <p className="text-gray-300 mb-8">
        Learn how to configure your Base development environment and project settings. This guide covers
        network configuration, deployment settings, and environment variables.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Hardhat Configuration</h2>
        <p className="text-gray-300 mb-4">
          Configure Hardhat for Base network development.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={hardhatConfigCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Network Settings</h2>
        <p className="text-gray-300 mb-4">
          Define network-specific configurations for Base Goerli and Mainnet.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={networkConfigCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Deployment Configuration</h2>
        <p className="text-gray-300 mb-4">
          Set up deployment parameters and contract configurations.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={deployConfigCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Environment Variables</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Use .env for sensitive data</li>
              <li>Never commit .env files</li>
              <li>Provide .env.example</li>
              <li>Document all variables</li>
            </ul>
        </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Network Management</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Use appropriate block confirmations</li>
              <li>Set realistic gas limits</li>
              <li>Configure proper timeouts</li>
              <li>Handle network-specific logic</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Deployment Strategy</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Use deployment scripts</li>
              <li>Implement proper error handling</li>
              <li>Verify contracts after deployment</li>
              <li>Document deployment process</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
