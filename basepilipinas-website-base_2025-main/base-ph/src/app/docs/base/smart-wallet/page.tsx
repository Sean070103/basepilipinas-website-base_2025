export default function SmartWalletPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-6">Smart Wallet</h1>

      <p className="text-lg text-white/70 mb-8">
        Here&apos;s how to implement Base&apos;s Smart Wallet functionality.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                  <span className="text-white/70">Account Abstraction</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                  <span className="text-white/70">Social Recovery</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                  <span className="text-white/70">Batched Transactions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                  <span className="text-white/70">Gas Abstraction</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Benefits</h3>
              <p className="text-white/70">
                Smart wallets provide several advantages:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <span>Enhanced security through multi-signature support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <span>
                    Improved user experience with gasless transactions
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <span>Flexible account management and recovery options</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">
              Smart Wallet Integration
            </h3>
            <p className="text-white/70 mb-4">
              Integrate smart wallet functionality in your dApp:
            </p>
            <div className="mt-4 bg-black/30 rounded p-4">
              <pre className="text-sm">
                <code>
                  {`import { SmartWallet } from '@base/smart-wallet';

const wallet = new SmartWallet({
  provider,
  entryPoint: '0x...',
  factoryAddress: '0x...',
  paymasterAPI: '0x...'
});

{/* Execute a transaction */}
const tx = await wallet.execute({
  target: contractAddress,
  data: encodedFunction,
  value: 0
});`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Advanced Features</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Social Recovery Setup</h3>
            <p className="text-white/70 mb-4">
              Implement social recovery for enhanced security:
            </p>
            <div className="mt-4 bg-black/30 rounded p-4">
              <pre className="text-sm">
                <code>
                  {`{/* Set up guardians for social recovery */}
await wallet.setGuardians({
  guardians: [
    '0x1234...',
    '0x5678...'
  ],
  threshold: 2
});

{/* Initiate recovery */}
await wallet.initiateRecovery({
  newOwner: '0x9abc...'
});`}
                </code>
              </pre>
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
                  Always validate guardian addresses before adding them
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Implement proper error handling for recovery processes
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Regularly audit smart wallet configurations
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
