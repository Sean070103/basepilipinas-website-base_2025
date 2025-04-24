"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function AIAgentsPage() {
  const agentSetupCode = `import { Agent, AgentConfig } from '@base/agentkit';

const config: AgentConfig = {
  name: "MyAgent",
  network: "base-mainnet",
  actions: ["trade", "monitor"],
};

const agent = new Agent(config);
await agent.initialize();
await agent.start();`;

  const tradingAgentCode = `import { Agent, TradeStrategy } from '@base/agentkit';

const tradingAgent = new Agent({
  name: "TradingBot",
  strategy: new TradeStrategy({
    asset: "ETH",
    maxAmount: "1.0",
    priceThreshold: "1800",
  }),
});`;

  const monitoringAgentCode = `import { Agent, MonitorConfig } from '@base/agentkit';

const monitorAgent = new Agent({
  name: "SecurityMonitor",
  type: "monitor",
  alerts: ["suspicious_tx", "large_transfers"],
  threshold: "100000",
});`;

  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-6">Launch AI Agents</h1>

      <p className="text-lg text-white/70 mb-8">
        Build and deploy AI agents on Base with AgentKit. Create autonomous agents that can interact with smart contracts and perform complex tasks on the blockchain.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Key Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Autonomous smart contract interactions</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Built-in security measures and fail-safes</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Customizable agent behaviors and decision-making logic</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Integration with popular AI models and APIs</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Comprehensive testing and simulation tools</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Installation</h3>
            <p className="text-white/70 mb-4">Install the required packages:</p>
            <div className="mt-4">
              <CodeBlock code="npm install @base/agentkit" />
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 mt-6">
            <h3 className="text-xl font-medium mb-3">Basic Usage</h3>
            <p className="text-white/70 mb-4">Set up your first AI agent:</p>
            <div className="mt-4">
              <CodeBlock code={agentSetupCode} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Examples</h2>
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Trading Agent</h3>
              <p className="text-white/70 mb-4">Create a trading agent:</p>
              <div className="mt-4">
                <CodeBlock code={tradingAgentCode} />
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3">Monitoring Agent</h3>
              <p className="text-white/70 mb-4">Create a monitoring agent:</p>
              <div className="mt-4">
                <CodeBlock code={monitoringAgentCode} />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Security Considerations</h2>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Best Practices</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Always test agents thoroughly in a testnet environment</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Implement proper access controls and permissions</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Monitor agent activities and implement kill switches</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Regular security audits and updates</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
