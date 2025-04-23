export default function WalletIntegrationPage() {
  return (
    <div className="prose prose-invert max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">Coinbase Wallet Integration</h1>

      <p className="text-lg text-white/70 mb-8">
        Here&apos;s how to integrate Coinbase Wallet into your mini app.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Setup</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Installation</h3>
              <p className="text-white/70 mb-4">
                Install the required dependencies:
              </p>
              <div className="mt-4 bg-black/30 rounded p-4">
                <code className="text-sm">
                  npm install @minikit/wallet @coinbase/wallet-sdk
                </code>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Configuration</h3>
              <p className="text-white/70 mb-4">
                Configure the Wallet Provider in your app:
              </p>
              <div className="mt-4 bg-black/30 rounded p-4">
                <pre className="text-sm overflow-x-scroll">
                  <code>
                    {`{/* Initialize wallet */}
import { WalletProvider } from '@minikit/wallet';
import { CoinbaseWallet } from '@coinbase/wallet-sdk';

const wallet = new CoinbaseWallet({
  appName: 'My Mini App',
  appLogoUrl: 'https://example.com/logo.png'
});`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Using Wallet Components
          </h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Connect Button</h3>
            <p className="text-white/70 mb-4">
              Add the wallet connect button to your UI:
            </p>
            <div className="mt-4 bg-black/30 rounded p-4">
              <code className="text-sm">
                import {"{ ConnectWallet }"} from &apos;@minikit/wallet&apos;;
                <br />
                <br />
                export function Header() {"{"}
                <br />
                &nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className=&quot;flex
                justify-between items-center&quot;&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;My Mini
                App&lt;/h1&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ConnectWallet
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;theme=&quot;dark&quot;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;showBalance
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                <br />
                &nbsp;&nbsp;);
                <br />
                {"}"}
              </code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Wallet Hooks</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Available Hooks</h3>
            <p className="text-white/70 mb-4">
              MiniKit provides several useful wallet hooks:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  useWallet - Access wallet state and methods
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  useBalance - Get wallet balance
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  useNetwork - Access network information
                </span>
              </li>
            </ul>
            <div className="mt-6 bg-black/30 rounded p-4">
              <code className="text-sm overflow-x-scroll">
                import {"{ useWallet }"} from &apos;@minikit/wallet&apos;;
                <br />
                <br />
                function WalletStatus() {"{"}
                <br />
                &nbsp;&nbsp;const {"{ address, isConnected, connect }"} =
                useWallet();
                <br />
                <br />
                &nbsp;&nbsp;if (!isConnected) {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;return &lt;button onClick={"{connect}"}
                &gt;Connect&lt;/button&gt;;
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                <br />
                &nbsp;&nbsp;return &lt;p&gt;Connected: {"{address}"}&lt;/p&gt;;
                <br />
                {"}"}
              </code>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
