export default function DevelopmentPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-6">Streamlined Development</h1>

      <p className="text-lg text-white/70 mb-8">
        MiniKit provides a streamlined development experience for building mini
        applications that can be featured on Warpcast and Coinbase Wallet. Get
        started quickly with our powerful toolkit.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">
                Create a New Mini App
              </h3>
              <p className="text-white/70 mb-4">
                Start your mini app project with a single command:
              </p>
              <div className="mt-4 bg-black/30 rounded p-4">
                <code className="text-sm">
                  npx create-minikit-app my-mini-app
                </code>
              </div>
              <p className="text-white/70 mt-4">
                This command sets up a new project with all the necessary
                dependencies and configurations.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Project Structure</h3>
              <p className="text-white/70">
                MiniKit creates a well-organized project structure:
              </p>
              <div className="mt-4 bg-black/30 rounded p-4">
                <code className="text-sm">
                  my-mini-app/&lt;br /&gt; ├── src/&lt;br /&gt; │ ├──
                  components/&lt;br /&gt; │ ├── hooks/&lt;br /&gt; │ ├──
                  pages/&lt;br /&gt; │ └── utils/&lt;br /&gt; ├── public/&lt;br
                  /&gt; ├── minikit.config.js&lt;br /&gt; └── package.json
                </code>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Development Features</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">
              Built-in Development Tools
            </h3>
            <p className="text-white/70 mb-4">
              MiniKit includes essential development tools:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Hot Module Replacement</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">TypeScript Support</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">ESLint Configuration</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Testing Setup</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Configuration</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">MiniKit Configuration</h3>
            <p className="text-white/70 mb-4">
              Configure your mini app in minikit.config.js:
            </p>
            <div className="mt-4 bg-black/30 rounded p-4">
              <pre className="text-sm">
                <code>
                  {`import { MiniKit } from '@minikit/core';

const minikit = new MiniKit({
  appName: 'My Mini App',
  description: 'A simple mini app built with MiniKit',
  icon: '/icon.png',
  theme: {
    primary: '#0066FF',
    background: '#000000'
  }
});`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Wallet Integration</h3>
              <p className="text-white/70">
                Learn how to integrate with Coinbase Wallet.
              </p>
              <button className="mt-4 text-blue-400 hover:text-blue-300 transition-colors">
                Explore Wallet Integration →
              </button>
            </div>
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Identity Features</h3>
              <p className="text-white/70">
                Add social and identity features to your mini app.
              </p>
              <button className="mt-4 text-blue-400 hover:text-blue-300 transition-colors">
                View Identity Features →
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
