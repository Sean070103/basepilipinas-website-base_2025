"use client";

import React from "react";
import CodeBlock from "@/components/CodeBlock";

export default function LaunchAIAgentPage() {
  const agentCode = `import { createAgent } from '@base/ai';

const agent = await createAgent({
  name: 'TradingBot',
  description: 'Automated trading agent',
  capabilities: ['market_analysis', 'trade_execution'],
  config: {
    riskLevel: 'medium',
    maxTradesPerDay: 5
  }
});`;

  const interactionCode = `import { useAgent } from '@base/ai';

function TradingInterface() {
  const { agent, sendMessage, messages } = useAgent('TradingBot');

  const handleTrade = async () => {
    const response = await sendMessage({
      type: 'execute_trade',
      params: {
        token: 'ETH',
        amount: '0.1',
        action: 'buy'
      }
    });
    
    console.log('Trade executed:', response);
  };

  return (
    <div>
      <button onClick={handleTrade}>Execute Trade</button>
      <div>
        {messages.map((msg, i) => (
          <div key={i}>{msg.content}</div>
        ))}
      </div>
    </div>
  );
}`;

  const trainingCode = `import { trainAgent } from '@base/ai';

async function improveAgent() {
  const result = await trainAgent('TradingBot', {
    trainingData: historicalTrades,
    metrics: ['profitability', 'risk_management'],
    epochs: 100
  });

  console.log('Training complete:', result);
}`;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 max-sm:max-w-[330px]">
      <h1 className="text-4xl font-bold mb-6">Launch AI Agent</h1>
      <p className="text-gray-300 mb-8">
        Learn how to create and deploy AI agents on Base. This guide covers agent creation, 
        interaction, and training for automated trading and monitoring.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Agent Creation</h2>
        <p className="text-gray-300 mb-4">
          Set up your first AI agent with customizable capabilities and configuration.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={agentCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Agent Interaction</h2>
        <p className="text-gray-300 mb-4">
          Implement real-time communication and trading functionality with your AI agent.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={interactionCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Agent Training</h2>
        <p className="text-gray-300 mb-4">
          Enhance your agent's performance through continuous learning and optimization.
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <CodeBlock code={trainingCode} />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Security Guidelines</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Always test agents thoroughly in a testnet environment</li>
              <li>Implement proper access controls and permissions</li>
              <li>Monitor agent activities and implement kill switches</li>
              <li>Regular security audits and updates</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Performance Optimization</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Fine-tune agent parameters based on historical data</li>
              <li>Implement efficient error handling and recovery</li>
              <li>Optimize resource usage and response times</li>
              <li>Regular performance monitoring and adjustments</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Risk Management</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Set appropriate trading limits and thresholds</li>
              <li>Implement circuit breakers for volatile markets</li>
              <li>Maintain detailed audit logs of all actions</li>
              <li>Regular risk assessment and strategy updates</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 