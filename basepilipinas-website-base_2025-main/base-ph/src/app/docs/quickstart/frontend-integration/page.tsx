"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function FrontendIntegrationPage() {
  const setupCode = `import { Web3Provider } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';

const provider = new MetaMask();
const web3Provider = new Web3Provider(provider);

function App() {
  return (
    <Web3Provider provider={web3Provider}>
      <YourApp />
    </Web3Provider>
  );
}`;

  const connectWalletCode = `import { useWeb3React } from '@web3-react/core';

function ConnectButton() {
  const { activate, deactivate, account } = useWeb3React();

  return (
    <button
      onClick={() => activate(provider)}
      className="px-4 py-2 bg-blue-500 rounded"
    >
      {account ? \`Connected: \${account}\` : 'Connect Wallet'}
    </button>
  );
}`;

  const contractInteractionCode = `import { ethers } from 'ethers';
import YourContract from './artifacts/YourContract.json';

function ContractInteraction() {
  const { library, account } = useWeb3React();
  const [value, setValue] = useState('');

  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    YourContract.abi,
    library?.getSigner(account)
  );

  const handleSubmit = async () => {
    try {
      const tx = await contract.setValue(value);
      await tx.wait();
      alert('Value set successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter value"
      />
      <button onClick={handleSubmit}>Set Value</button>
    </div>
  );
}`;

  return (
    <div className="prose prose-invert max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">Frontend Integration</h1>

      <p className="text-lg text-white/70 mb-8">
        Learn how to integrate your smart contract with a React frontend using
        Web3-React and ethers.js. This guide covers wallet connection and
        contract interaction.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Setup</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Provider Setup</h3>
            <p className="text-white/70 mb-4">
              Set up the Web3 provider in your app:
            </p>
            <div className="mt-4">
              <CodeBlock code={setupCode} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Wallet Connection</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Connect Wallet Button</h3>
            <p className="text-white/70 mb-4">
              Create a wallet connection component:
            </p>
            <div className="mt-4">
              <CodeBlock code={connectWalletCode} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contract Interaction</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Contract Interface</h3>
            <p className="text-white/70 mb-4">
              Create a component to interact with your contract:
            </p>
            <div className="mt-4">
              <CodeBlock code={contractInteractionCode} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
