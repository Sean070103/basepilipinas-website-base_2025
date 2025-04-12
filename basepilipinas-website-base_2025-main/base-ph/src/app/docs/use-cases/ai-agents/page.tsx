"use client";

export default function AIAgentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Launch AI Agents</h1>
        <p className="text-lg text-white/70 mb-8">
          Learn how to create and deploy AI agents on Base. Build autonomous
          agents that can interact with smart contracts, manage assets, and
          execute transactions.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Agent Setup</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Creating an AI Agent</h3>
          <p className="text-white/70 mb-4">
            Set up a basic AI agent that can interact with the blockchain.
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm">
              <code>
                {`import { createAgent } from '@base/agents'
import { ethers } from 'ethers'

async function setupAgent() {
  const agent = await createAgent({
    name: 'Trading Bot',
    description: 'Automated trading agent',
    capabilities: [
      'read_market_data',
      'execute_trades',
      'manage_portfolio'
    ],
    wallet: {
      type: 'smart_wallet',
      config: {
        owner: OWNER_ADDRESS,
        policies: {
          maxTransactionValue: ethers.utils.parseEther('1.0'),
          allowedTokens: [TOKEN_A, TOKEN_B],
          dailyLimit: ethers.utils.parseEther('5.0')
        }
      }
    }
  })

  return agent
}`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Agent Logic</h2>
        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">
              Implementing Agent Behavior
            </h3>
            <p className="text-white/70 mb-4">
              Define how your agent makes decisions and interacts with smart
              contracts.
            </p>
            <div className="mt-4 bg-black/30 rounded p-4">
              <pre className="text-sm">
                <code>
                  {`import { AgentLogic, useMarketData } from '@base/agents'

export class TradingAgent extends AgentLogic {
  constructor(config) {
    super(config)
    this.marketData = useMarketData()
  }

  async analyze() {
    const { price, volume } = await this.marketData.get(TOKEN_A)
    const signal = this.generateTradingSignal(price, volume)
    
    if (signal > THRESHOLD) {
      await this.executeTrade({
        type: 'buy',
        token: TOKEN_A,
        amount: calculatePosition(signal)
      })
    }
  }

  async executeTrade(params) {
    const tx = await this.wallet.sendTransaction({
      to: DEX_ADDRESS,
      data: encodeTrade(params),
      gasLimit: 200000
    })
    
    return tx
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Agent Monitoring</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Monitoring and Analytics</h3>
          <p className="text-white/70 mb-4">
            Track your agent&apos;s performance and monitor its activities.
          </p>

          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm">
              <code>
                {`import { useAgentMonitoring } from '@base/agents'

export function AgentDashboard({ agentId }) {
  const {
    status,
    transactions,
    performance,
    logs
  } = useAgentMonitoring(agentId)

  return (
    <div className="space-y-4">
      <div>
        <h4>Agent Status</h4>
        <p>Status: {status}</p>
        <p>Total Transactions: {transactions.length}</p>
        <p>Success Rate: {performance.successRate}%</p>
      </div>

      <div>
        <h4>Recent Activity</h4>
        <ul>
          {logs.map(log => (
            <li key={log.id}>
              {log.timestamp}: {log.action}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Security</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Implement proper access controls
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Validate AI agent responses
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Monitor agent activities</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Performance</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Optimize response times</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Implement caching strategies
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">Handle rate limits</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
