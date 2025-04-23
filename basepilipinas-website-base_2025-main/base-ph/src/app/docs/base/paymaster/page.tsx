export default function PaymasterPage() {
  return (
    <div className="prose prose-invert max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">Paymaster</h1>

      <p className="text-lg text-white/70 mb-8">
        Base&apos;s Paymaster enables gasless transactions and custom fee models
        for your dApp. Learn how to implement and customize paymaster
        functionality to enhance user experience.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">What is a Paymaster?</h3>
              <p className="text-white/70">
                A Paymaster is a smart contract that can sponsor gas fees for
                users, enabling:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <span>Gasless transactions for better UX</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <span>Custom fee models (e.g., pay in tokens)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <span>Conditional sponsorship based on rules</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Types of Paymasters</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                  <span className="text-white/70">
                    Verifying Paymaster - Validates and approves transactions
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                  <span className="text-white/70">
                    Token Paymaster - Accepts token payments for gas
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                  <span className="text-white/70">
                    Sponsored Paymaster - Covers all gas fees
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Basic Paymaster Setup</h3>
            <p className="text-white/70 mb-4">
              Implement a basic paymaster in your smart contract:
            </p>
            <div className="mt-4 bg-black/30 rounded p-4">
              <code className="text-sm overflow-x-scroll">
                {`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import @base/contracts/paymaster/BasePaymaster.sol;

contract MyPaymaster is BasePaymaster {
  function validatePaymasterUserOp(
    UserOperation calldata userOp,
    bytes32 userOpHash,
    uint256 maxCost
  ) external returns (bytes memory context, uint256 validationData) {
    // Implement validation logic
    return (abi.encode(), 0);
  }
}`}
              </code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Integration</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">
              Using Paymaster in dApp
            </h3>
            <p className="text-white/70 mb-4">
              Here&apos;s how to integrate Base&apos;s Paymaster functionality
              into your dApp.
            </p>
            <div className="mt-4 bg-black/30 rounded p-4">
              <pre className="text-sm overflow-x-scroll">
                <code>
                  {`import { PaymasterProvider } from '@base/paymaster';

const paymaster = new PaymasterProvider({
  rpcUrl: 'https://goerli.base.org',
  paymasterAddress: '0x...',
  entryPoint: '0x...'
});

// Create a gasless transaction
const userOp = await paymaster.createTransaction({
  target: contractAddress,
  data: encodedFunction
});`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Advanced Features</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Custom Fee Models</h3>
            <p className="text-white/70 mb-4">
              Implement custom fee models with your paymaster:
            </p>
            <div className="mt-4 bg-black/30 rounded p-4">
              <code className="text-sm">
                function calculateFee(UserOperation calldata userOp) internal
                view returns (uint256) {"{"}
                <br />
                &nbsp;&nbsp;// Custom fee calculation logic
                <br />
                &nbsp;&nbsp;uint256 baseGas = userOp.callGasLimit +
                userOp.verificationGasLimit;
                <br />
                &nbsp;&nbsp;uint256 tokenAmount = baseGas * getTokenPrice();
                <br />
                &nbsp;&nbsp;return tokenAmount;
                <br />
                {"}"}
              </code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">
              Security Considerations
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Implement proper access controls
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Monitor paymaster balance</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Rate limit operations</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
