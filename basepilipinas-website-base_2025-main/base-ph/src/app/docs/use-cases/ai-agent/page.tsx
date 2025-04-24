"use client";

import React, { useRef } from "react";
import CodeBlock from "@/components/CodeBlock";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LaunchAIAgentPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

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
    <div className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-6">Launch AI Agent</h1>

      <p className="text-lg text-white/70 mb-8">
        Learn how to create and deploy AI agents on Base. This guide covers agent creation, interaction, and training.
      </p>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-8 pb-4 scrollbar-hide"
        >
          <div className="min-w-[300px] space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Agent Creation</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Create an Agent</h3>
                <p className="text-white/70 mb-4">
                  Initialize a new AI agent:
                </p>
                <div className="mt-4">
                  <CodeBlock code={agentCode} />
                </div>
              </div>
            </section>
          </div>

          <div className="min-w-[300px] space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Agent Interaction</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Interact with Agent</h3>
                <p className="text-white/70 mb-4">
                  Send messages and receive responses:
                </p>
                <div className="mt-4">
                  <CodeBlock code={interactionCode} />
                </div>
              </div>
            </section>
          </div>

          <div className="min-w-[300px] space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Agent Training</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-medium mb-3">Train Your Agent</h3>
                <p className="text-white/70 mb-4">
                  Improve agent performance:
                </p>
                <div className="mt-4">
                  <CodeBlock code={trainingCode} />
                </div>
              </div>
            </section>
          </div>
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
} 