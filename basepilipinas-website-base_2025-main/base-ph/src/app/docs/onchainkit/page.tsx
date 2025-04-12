export default function OnchainKitPage() {
  return (
    <div className="prose prose-invert max-w-none bg-transparent">
      <h1 className="text-4xl font-bold mb-6">
        Getting Started with OnchainKit
      </h1>
      <p className="text-xl text-white/70 mb-8">
        OnchainKit is a powerful and intuitive SDK designed to simplify the
        development of visually polished onchain applications. With it,
        developers can build functional dApps in just 15 minutes; no prior
        blockchain experience is needed.
      </p>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-3xl font-semibold mb-4">
            Why Choose OnchainKit?
          </h2>
          <p className="text-lg text-white/70 mb-6">
            OnchainKit accelerates the app development process by combining
            essential onchain capabilities with user-friendly design:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-3">
                Developer-Centric Tools
              </h3>
              <p className="text-white/70">
                Full-stack utilities that make complex blockchain interactions
                seamless and intuitive. Build with confidence using our
                comprehensive toolkit.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-3">Proven Patterns</h3>
              <p className="text-white/70">
                Predefined best practices shaped by real-world use cases. Follow
                established patterns that have been tested in production
                environments&apos; best practices.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-3">
                Ready-to-Use Components
              </h3>
              <p className="text-white/70">
                Purpose-built modules for common onchain tasks. Leverage our
                library of components to accelerate your development process.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-3">
                Framework Flexibility
              </h3>
              <p className="text-white/70">
                Works with any React-compatible framework. Choose your preferred
                tools while maintaining full access to OnchainKit&apos;s
                capabilities.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Powerful Features</h2>
          <div className="space-y-6">
            <div className="rounded-xl bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-3">
                Effortless Wallet Onboarding
              </h3>
              <p className="text-white/70">
                Wallets are central to onchain user interaction. The{" "}
                <code className="bg-white/10 px-2 py-1 rounded">
                  &lt;WalletModal /&gt;
                </code>{" "}
                component simplifies onboarding by letting users connect an
                existing wallet or sign up for a new one, reducing friction and
                drop-off.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-3">
                Accept Crypto Payments Instantly
              </h3>
              <p className="text-white/70">
                By integrating Coinbase Commerce with OnchainKit, developers can
                easily accept crypto payments for products or services. This
                eliminates traditional credit card fees and chargebacks while
                enabling fast, global transactions.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-3">
                Launch Autonomous AI Agents
              </h3>
              <p className="text-white/70">
                Deploy onchain AI Agents that can hold and manage stablecoins,
                tokens, and NFTs. With the CDP Wallet API, you can give agents
                access to financial resources onchain, enhancing their
                functionality and independence.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-3">
                DeFi-Enabled Applications
              </h3>
              <p className="text-white/70">
                Easily integrate DeFi functionality into your app using
                pre-built React components from OnchainKit. Features include
                token swaps and auto-yield strategies, allowing users to manage
                assets and grow value directly from your app.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-3">
                Gasless Transactions with Base Paymaster
              </h3>
              <p className="text-white/70">
                Although Base has near-zero fees, gas management can still be
                confusing. Use the Base Paymaster to abstract away gas fees and
                sponsor user transactions.
              </p>
              <ul className="mt-4 space-y-2 text-white/70">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <span>Batch multi-step transactions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <span>Custom gasless UX flows</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <span>
                    $15K monthly sponsorship on mainnet (unlimited on testnet)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12 p-4 rounded-xl bg-white/5">
          <p className="text-sm text-white/50">
            For more detailed information, visit{" "}
            <a
              href="https://docs.base.org/builderkits/onchainkit/getting-started"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              docs.base.org/builderkits/onchainkit/getting-started
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
