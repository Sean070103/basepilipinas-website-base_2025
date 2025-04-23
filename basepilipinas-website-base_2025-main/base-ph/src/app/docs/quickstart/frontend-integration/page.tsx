"use client";

export default function FrontendIntegrationPage() {
  return (
    <div className="space-y-8 max-sm:max-w-[330px]">
      <div>
        <h1 className="text-4xl font-bold mb-4">Frontend Integration</h1>
        <p className="text-lg text-white/70 mb-8">
          Learn how to build a web frontend that interacts with your Base smart
          contracts using React and ethers.js.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Setup</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Install Dependencies</h3>
          <div className="mt-4 bg-black/30 rounded p-4">
            <code className="text-sm">
              npm install ethers@5.7.2 @wagmi/core wagmi viem
            </code>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Wallet Connection</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">
            Implementing Connect Wallet
          </h3>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm overflow-x-scroll">
              <code>
                {`import { useConnect, useAccount, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export function ConnectWallet() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  if (isConnected) {
    return (
      <div>
        Connected to {address}
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    )
  }

  return <button onClick={() => connect()}>Connect Wallet</button>
}`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contract Integration</h2>
        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Contract Configuration</h3>
            <div className="mt-4 bg-black/30 rounded p-4">
              <pre className="text-sm overflow-x-scroll">
                <code>
                  {`import { useContractRead, useContractWrite } from 'wagmi'
import { SimpleStorageABI } from './abi'

const CONTRACT_ADDRESS = 'your_contract_address'

export function SimpleStorage() {
  const { data: value } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: SimpleStorageABI,
    functionName: 'getValue',
  })

  const { write: setValue } = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: SimpleStorageABI,
    functionName: 'setValue',
  })

  return (
    <div>
      <p>Current Value: {value?.toString()}</p>
      <button onClick={() => setValue({ args: [42] })}>
        Set Value to 42
      </button>
    </div>
  )
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Error Handling</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">
            Transaction Error Handling
          </h3>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm overflow-x-scroll">
              <code>
                {`const { write: setValue, isError, error } = useContractWrite({
  address: CONTRACT_ADDRESS,
  abi: SimpleStorageABI,
  functionName: 'setValue',
  onError(error) {
    console.error('Error:', error)
  },
  onSuccess(data) {
    console.log('Success:', data)
  },
})`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Event Listening</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Subscribing to Events</h3>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm overflow-x-scroll">
              <code>
                {`import { useContractEvent } from 'wagmi'

function EventListener() {
  useContractEvent({
    address: CONTRACT_ADDRESS,
    abi: SimpleStorageABI,
    eventName: 'ValueChanged',
    listener(newValue) {
      console.log('Value changed to:', newValue)
    },
  })

  return null
}`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Performance</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Optimize bundle size</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Implement proper caching</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Use lazy loading</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Security</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Validate user inputs</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Implement proper error handling
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Use secure communication</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
