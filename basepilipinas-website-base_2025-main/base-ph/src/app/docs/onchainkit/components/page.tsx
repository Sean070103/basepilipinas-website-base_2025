'use client';

export default function ComponentsPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-6">Ready-to-Use Components</h1>
      
      <p className="text-lg text-white/70 mb-8">
        Here&apos;s how to use OnchainKit&apos;s ready-to-use components.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Wallet Components</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Connect Button</h3>
              <p className="text-white/70 mb-4">
                A customizable wallet connection button:
              </p>
              <div className="mt-4 bg-black/30 rounded p-4">
                <code className="text-sm">
                  {`import { ConnectButton } from '@onchainkit/ui';

export function MyApp() {
  return (
    <ConnectButton 
      theme="dark"
      label="Connect Wallet"
      onConnect={(provider) => {
        console.log('Connected:', provider);
      }}
    />
  );
}`}
                </code>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Account Display</h3>
              <p className="text-white/70 mb-4">
                Display wallet information and balance:
              </p>
              <div className="mt-4 bg-black/30 rounded p-4">
                <code className="text-sm">
                  {`import { AccountInfo } from '@onchainkit/ui';

export function Header() {
  return (
    <AccountInfo
      showBalance
      showNetwork
      showAvatar
      avatarSize={32}
    />
  );
}`}
                </code>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Transaction Components</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Transaction Button</h3>
              <p className="text-white/70 mb-4">
                Handle transactions with loading and confirmation states:
              </p>
              <div className="mt-4 bg-black/30 rounded p-4">
                <code className="text-sm">
                  {`import { TransactionButton } from '@onchainkit/ui';

export function SendTokens() {
  return (
    <TransactionButton
      onClick={async () => {
        const tx = await contract.transfer(to, amount);
        await tx.wait();
      }}
      loadingText="Sending..."
      successText="Sent!"
      errorText="Failed to send"
    >
      Send Tokens
    </TransactionButton>
  );
}`}
                </code>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Transaction Status</h3>
              <p className="text-white/70 mb-4">
                Display transaction status and progress:
              </p>
              <div className="mt-4 bg-black/30 rounded p-4">
                <code className="text-sm">
                  {`import { TransactionStatus } from '@onchainkit/ui';

export function TxStatus({ hash }) {
  return (
    <TransactionStatus
      hash={hash}
      network="base"
      showExplorerLink
      onConfirmed={() => {
        console.log('Transaction confirmed!');
      }}
    />
  );
}`}
                </code>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Display</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Token Balance</h3>
              <p className="text-white/70 mb-4">
                Display token balances with automatic updates:
              </p>
              <div className="mt-4 bg-black/30 rounded p-4">
                <code className="text-sm">
                  {`import { TokenBalance } from '@onchainkit/ui';

export function Balance() {
  return (
    <TokenBalance
      address="0x..."
      symbol="BASE"
      decimals={18}
      updateInterval={5000}
    />
  );
}`}
                </code>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">MiniKit</h3>
              <p className="text-white/70">
                Build mini applications with our specialized toolkit.
              </p>
              <a href="/docs/minikit/development" className="mt-4 text-blue-400 hover:text-blue-300 transition-colors inline-block">
                Explore MiniKit →
              </a>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Base Features</h3>
              <p className="text-white/70">
                Learn about Base&apos;s powerful features and capabilities.
              </p>
              <a href="/docs/base/features" className="mt-4 text-blue-400 hover:text-blue-300 transition-colors inline-block">
                View Features →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 