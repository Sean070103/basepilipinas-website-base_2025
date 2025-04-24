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
    <div className="max-w-4xl mx-auto py-8 px-4 max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">Launch AI Agents</h1>
      <p className="text-gray-300 mb-8">
        Build and deploy AI agents on Base with AgentKit. Create autonomous agents that can interact 
        with smart contracts and perform complex tasks on the blockchain.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="text-gray-300 mb-4">
          Set up your first AI agent with customizable capabilities and configuration.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={agentSetupCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Trading Agent</h2>
        <p className="text-gray-300 mb-4">
          Create an automated trading agent with customizable strategies.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={tradingAgentCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Monitoring Agent</h2>
        <p className="text-gray-300 mb-4">
          Deploy agents to monitor blockchain activity and detect specific events.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={monitoringAgentCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Security</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Test agents thoroughly in testnet environments</li>
              <li>Implement proper access controls</li>
              <li>Monitor agent activities</li>
              <li>Regular security audits</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Performance</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Optimize resource usage</li>
              <li>Implement efficient error handling</li>
              <li>Monitor response times</li>
              <li>Regular performance testing</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Risk Management</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Set appropriate trading limits</li>
              <li>Implement circuit breakers</li>
              <li>Maintain detailed audit logs</li>
              <li>Regular risk assessments</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
