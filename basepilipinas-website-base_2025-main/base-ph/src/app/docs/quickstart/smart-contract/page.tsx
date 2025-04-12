export default function SmartContractPage() {
  const simpleStorageCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleStorage {
    uint256 private value;
    
    event ValueChanged(uint256 newValue);
    
    function setValue(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }
    
    function getValue() public view returns (uint256) {
        return value;
    }
}`;

  const testCode = `import { expect } from "chai";
import { ethers } from "hardhat";

describe("SimpleStorage", function () {
  it("should store and retrieve value", async function () {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const storage = await SimpleStorage.deploy();
    await storage.deployed();

    await storage.setValue(42);
    expect(await storage.getValue()).to.equal(42);
  });
});`;

  const configCode = `module.exports = {
  networks: {
    baseGoerli: {
      url: 'https://goerli.base.org',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};`;

  const deployCommand = `npx hardhat run scripts/deploy.ts --network baseGoerli`;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Smart Contract Development</h1>
        <p className="text-lg text-white/70 mb-8">
          Learn how to write, test, and deploy smart contracts on Base. This guide covers the basics of smart contract development using Solidity.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Simple Storage Contract</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Writing Your First Contract</h3>
          <p className="text-white/70 mb-4">
            Create a new file called <code className="text-sm bg-black/30 px-1.5 py-0.5 rounded">SimpleStorage.sol</code> with the following code:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm">
              <code>{simpleStorageCode}</code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Testing</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Writing Tests</h3>
          <p className="text-white/70 mb-4">
            Create a test file for your contract:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm">
              <code>{testCode}</code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Deployment</h2>
        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">1. Configure Network</h3>
            <p className="text-white/70 mb-4">
              Update your <code className="text-sm bg-black/30 px-1.5 py-0.5 rounded">hardhat.config.ts</code>:
            </p>
            <div className="mt-4 bg-black/30 rounded p-4">
              <pre className="text-sm">
                <code>{configCode}</code>
              </pre>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">2. Deploy Contract</h3>
            <p className="text-white/70 mb-4">
              Run the deployment script:
            </p>
            <div className="mt-4 bg-black/30 rounded p-4">
              <pre className="text-sm">
                <code>{deployCommand}</code>
              </pre>
            </div>
          </div>
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
                <span className="text-white/70">Follow security best practices</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Implement proper access controls</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Use secure random number generation</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Gas Optimization</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Optimize storage usage</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Batch operations when possible</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Use efficient data structures</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 