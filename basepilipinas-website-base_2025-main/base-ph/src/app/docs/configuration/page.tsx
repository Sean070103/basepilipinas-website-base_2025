"use client";

import CodeBlock from "@/components/CodeBlock";

export default function ConfigurationPage() {
  return (
    <div className="space-y-12 max-sm:max-w-[330px]">
      <section>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Installation Steps
        </h1>
      </section>

      <section className="space-y-8">
        {/* Step 1 */}
        <div className="relative bg-[#0A192F]/30 rounded-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            <span className="text-white/70 mr-3">1.</span>
            Install Base CLI
          </h2>
          <CodeBlock code="npm install -g @base/cli" />
        </div>

        {/* Step 2 */}
        <div className="relative bg-[#0A192F]/30 rounded-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            <span className="text-white/70 mr-3">2.</span>
            Create a New Project
          </h2>
          <CodeBlock code="base init my-dapp" />
        </div>

        {/* Step 3 */}
        <div className="relative bg-[#0A192F]/30 rounded-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            <span className="text-white/70 mr-3">3.</span>
            Install Dependencies
          </h2>
          <CodeBlock code={`cd my-dapp\nnpm install`} />
        </div>

        {/* Step 4 */}
        <div className="relative bg-[#0A192F]/30 rounded-xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            <span className="text-white/70 mr-3">4.</span>
            Configure Your Project
          </h2>
          <CodeBlock
            code={`import { MiniKit } from '@minikit/core';

const minikit = new MiniKit({
  appName: 'My Mini App',
  description: 'A simple mini app built with MiniKit',
  icon: '/icon.png',
  theme: {
    primary: '#0066FF',
    background: '#000000'
  }
});`}
          />
        </div>
      </section>

      <section className="mt-12 p-4 rounded-xl bg-white/5">
        <p className="text-sm text-white/50">
          For more detailed configuration options, visit{" "}
          <a
            href="https://docs.base.org/configuration"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            docs.base.org/configuration
          </a>
        </p>
      </section>
    </div>
  );
}
