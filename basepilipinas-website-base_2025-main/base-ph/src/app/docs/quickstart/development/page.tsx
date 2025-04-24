"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function DevelopmentEnvironmentPage() {
  const setupCode = `npm install -g @base/cli hardhat
# or
yarn global add @base/cli hardhat`;

  const projectSetupCode = `base init my-dapp
cd my-dapp
npm install`;

  const environmentCode = `# .env
PRIVATE_KEY=your_private_key
BASE_GOERLI_RPC_URL=https://goerli.base.org
BASE_MAINNET_RPC_URL=https://mainnet.base.org
ETHERSCAN_API_KEY=your_api_key`;

  const vsCodeSettingsCode = `{
  "solidity.defaultCompiler": "0.8.19",
  "solidity.compileUsingRemoteVersion": "v0.8.19",
  "solidity.packageDefaultDependenciesContractsDirectory": "src",
  "solidity.packageDefaultDependenciesDirectory": "node_modules"
}`;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">Development Environment</h1>
      <p className="text-gray-300 mb-8">
        Set up your development environment for building on Base. This guide covers all the necessary tools
        and configurations needed to start developing decentralized applications.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
        <p className="text-gray-300 mb-4">
          Install the required development tools and CLI utilities.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={setupCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Setup</h2>
        <p className="text-gray-300 mb-4">
          Create and initialize a new Base project.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={projectSetupCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Environment Configuration</h2>
        <p className="text-gray-300 mb-4">
          Set up your environment variables and configuration files.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={environmentCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">IDE Setup</h2>
        <p className="text-gray-300 mb-4">
          Configure VS Code for Solidity development.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={vsCodeSettingsCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Project Structure</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Organize code into logical directories</li>
              <li>Separate contracts, tests, and scripts</li>
              <li>Use consistent naming conventions</li>
              <li>Maintain clear documentation</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Version Control</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Use .gitignore for sensitive files</li>
              <li>Commit frequently with clear messages</li>
              <li>Branch for new features</li>
              <li>Review code before merging</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Security</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Never commit private keys</li>
              <li>Use environment variables</li>
              <li>Regularly update dependencies</li>
              <li>Follow security best practices</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 