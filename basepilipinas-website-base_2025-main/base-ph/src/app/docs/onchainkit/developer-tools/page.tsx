"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function DeveloperToolsPage() {
  const contractKitCode = `import { ContractKit } from '@onchainkit/contract';

const kit = new ContractKit({
  compiler: {
    version: '0.8.19',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
});

await kit.compile('contracts/');
const deployment = await kit.deploy('MyContract');`;

  const testingKitCode = `import { TestKit, mockProvider } from '@onchainkit/testing';

describe('MyContract', () => {
  const testKit = new TestKit();
  
  beforeEach(async () => {
    await testKit.deployFixture('MyContract');
  });

  it('should handle transactions', async () => {
    const tx = await testKit.sendTransaction({
      to: contractAddress,
      value: ethers.utils.parseEther('1.0')
    });
    await testKit.mineBlocks(1);
    expect(await testKit.getBalance(contractAddress))
      .to.equal(ethers.utils.parseEther('1.0'));
  });
});`;

  const devChainCode = `import { DevChain } from '@onchainkit/devchain';

const chain = new DevChain({
  port: 8545,
  networkId: 31337,
  blockTime: 2
});

await chain.start();
console.log('Local chain running at http://localhost:8545');`;

  const verifyCode = `import { verify } from '@onchainkit/verify';

await verify({
  address: '0x...',
  network: 'base-goerli',
  constructorArguments: [
    'Token Name',
    'TKN'
  ]
});`;

  return (
    <div className="prose prose-invert max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">Developer-Centric Tools</h1>

      <p className="text-lg text-white/70 mb-8">
        OnchainKit provides a comprehensive set of developer tools to streamline
        your Web3 development workflow. These tools are designed to help you
        build faster and more efficiently.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Core Tools</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">
                Contract Development Kit
              </h3>
              <p className="text-white/70 mb-4">
                Tools for smart contract development:
              </p>
              <div className="mt-4">
                <CodeBlock code={contractKitCode} />
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Testing Framework</h3>
              <p className="text-white/70 mb-4">
                Comprehensive testing utilities:
              </p>
              <div className="mt-4">
                <CodeBlock code={testingKitCode} />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Development Tools</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">
                Local Development Chain
              </h3>
              <p className="text-white/70 mb-4">
                Run a local development blockchain:
              </p>
              <div className="mt-4">
                <CodeBlock code={devChainCode} />
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">
                Contract Verification
              </h3>
              <p className="text-white/70 mb-4">
                Verify your contracts on Base:
              </p>
              <div className="mt-4">
                <CodeBlock code={verifyCode} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
