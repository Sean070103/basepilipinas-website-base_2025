"use client";

export default function DevelopmentEnvironmentPage() {
  return (
    <div className="overflow-x-hidden max-sm:max-w-[calc(100vw-2rem)] max-sm:mx-auto">
      <div>
        <h1 className="text-4xl font-bold mb-4">
          Development Environment Setup
        </h1>
        <p className="text-lg text-white/70 mb-8">
          Set up your development environment for building on Base. This guide
          will help you install and configure all necessary tools.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Node.js v18 or later</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">Git</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <span className="text-white/70">
                Code editor (VS Code recommended)
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Installation Steps</h2>
        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">1. Install Base CLI</h3>
            <div className="mt-4 bg-black/30 rounded p-4">
              <code className="text-sm text-wrap">
                npm install -g @base/cli
              </code>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">
              2. Create a New Project
            </h3>
            <div className="mt-4 bg-black/30 rounded p-4">
              <code className="text-sm">base init my-dapp</code>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">
              3. Install Dependencies
            </h3>
            <div className="mt-4 bg-black/30 rounded p-4">
              <code className="text-sm">
                cd my-dapp
                <br />
                npm install
              </code>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Configuration</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Environment Setup</h3>
          <p className="text-white/70 mb-4">
            Create a .env file in your project root:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4 text-wrap">
            <code className="text-sm text-wrap max-sm:text-[0.55rem]">
              NEXT_PUBLIC_BASE_NETWORK=goerli
              <br />
              NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id
              <br />
              NEXT_PUBLIC_ALCHEMY_API_KEY=your_api_key
            </code>
          </div>
        </div>
      </section>
    </div>
  );
}
