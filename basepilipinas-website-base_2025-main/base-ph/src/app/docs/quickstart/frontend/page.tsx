"use client";

export default function FrontendPage() {
  return (
    <div className="prose prose-invert max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">Frontend Integration</h1>

      <p className="text-lg text-white/70 mb-8">
        Learn how to build a frontend interface for your smart contract using
        React and ethers.js. This guide will show you how to connect to wallets
        and interact with your deployed contract.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Setup</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Install Dependencies</h3>
            <p className="text-white/70 mb-4">Install the required packages:</p>
            <div className="mt-4 bg-black/30 rounded p-4">
              <code className="text-sm">
                npm install ethers @web3-react/core
                @web3-react/injected-connector
              </code>
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
            <div className="mt-4 bg-black/30 rounded p-4">
              <code className="text-sm">
                {`import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

const injected = new InjectedConnector({
  supportedChainIds: [84531], // Base Goerli
});

export function ConnectWallet() {
  const { activate, active, account } = useWeb3React();

  return (
    <button
      onClick={() => activate(injected)}
      className="px-4 py-2 bg-blue-500 rounded"
    >
      {active ? \`Connected: \${account}\` : 'Connect Wallet'}
    </button>
  );
}`}
              </code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contract Integration</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Contract Interface</h3>
              <p className="text-white/70 mb-4">
                Create a hook to interact with your contract:
              </p>
              <div className="mt-4 bg-black/30 rounded p-4">
                <code className="text-sm">
                  {`import { ethers } from 'ethers';
import SimpleStorage from './artifacts/contracts/SimpleStorage.sol/SimpleStorage.json';

export function useContract() {
  const { library, account } = useWeb3React();
  
  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    SimpleStorage.abi,
    library?.getSigner(account)
  );

  return contract;
}`}
                </code>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">
                Interact with Contract
              </h3>
              <p className="text-white/70 mb-4">
                Create a component to interact with your contract:
              </p>
              <div className="mt-4 bg-black/30 rounded p-4">
                <code className="text-sm">
                  {`export function StorageComponent() {
  const contract = useContract();
  const [value, setValue] = useState('');
  
  async function handleStore() {
    try {
      const tx = await contract.setValue(value);
      await tx.wait();
      alert('Value stored successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter value"
      />
      <button onClick={handleStore}>Store Value</button>
    </div>
  );
}`}
                </code>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
