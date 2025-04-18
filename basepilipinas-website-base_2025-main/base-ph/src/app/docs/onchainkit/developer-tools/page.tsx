'use client';

export default function DeveloperToolsPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-6">Developer-Centric Tools</h1>
      
      <p className="text-lg text-white/70 mb-8">
        OnchainKit provides a comprehensive set of developer tools to streamline your Web3 development workflow. 
        These tools are designed to help you build faster and more efficiently.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Core Tools</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Contract Development Kit</h3>
              <p className="text-white/70 mb-4">
                Tools for smart contract development:
              </p>
              <div className="mt-4 bg-black/30 rounded p-4">
                <code className="text-sm">
                  {`import { ContractKit } from '@onchainkit/contract';

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
const deployment = await kit.deploy('MyContract');`}
                </code>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Testing Framework</h3>
              <p className="text-white/70 mb-4">
                Comprehensive testing utilities:
              </p>
              <div className="mt-4 bg-black/30 rounded p-4">
                <code className="text-sm">
                  {`import { TestKit, mockProvider } from '@onchainkit/testing';

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
});`}
                </code>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Development Tools</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Local Development Chain</h3>
              <p className="text-white/70 mb-4">
                Run a local development blockchain:
              </p>
              <div className="mt-4 bg-black/30 rounded p-4">
                <code className="text-sm">
                  {`import { DevChain } from '@onchainkit/devchain';

const chain = new DevChain({
  port: 8545,
  networkId: 31337,
  blockTime: 2
});

await chain.start();
console.log('Local chain running at http://localhost:8545');`}
                </code>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Contract Verification</h3>
              <p className="text-white/70 mb-4">
                Verify your contracts on Base:
              </p>
              <div className="mt-4 bg-black/30 rounded p-4">
                <code className="text-sm">
                  {`import { verify } from '@onchainkit/verify';

await verify({
  address: '0x...',
  network: 'base-goerli',
  constructorArguments: [
    'Token Name',
    'TKN'
  ]
});`}
                </code>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Design Patterns</h3>
              <p className="text-white/70">
                Learn about proven design patterns for building secure dApps.
              </p>
              <a href="/docs/onchainkit/patterns" className="mt-4 text-blue-400 hover:text-blue-300 transition-colors inline-block">
                Explore Patterns →
              </a>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Components</h3>
              <p className="text-white/70">
                Discover our library of ready-to-use React components.
              </p>
              <a href="/docs/onchainkit/components" className="mt-4 text-blue-400 hover:text-blue-300 transition-colors inline-block">
                View Components →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 