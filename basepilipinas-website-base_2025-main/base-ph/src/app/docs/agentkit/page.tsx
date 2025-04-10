export default function AgentKitPage() {
  return (
    <div className="prose prose-invert max-w-none bg-transparent">
      <h1>AgentKit (CDP)</h1>
      <p className="text-xl text-white/70 mb-8">
        Build and deploy AI agents on Base with AgentKit. Create autonomous agents that can interact with smart contracts and perform complex tasks on the blockchain.
      </p>

      <div className="mt-8 space-y-8">
        <section>
          <h2>Overview</h2>
          <p>
            AgentKit is a comprehensive development kit that enables you to create, test, and deploy AI agents on the Base network. These agents can autonomously interact with smart contracts, manage digital assets, and execute complex operations based on predefined conditions.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Autonomous smart contract interactions</li>
            <li>Built-in security measures and fail-safes</li>
            <li>Customizable agent behaviors and decision-making logic</li>
            <li>Integration with popular AI models and APIs</li>
            <li>Comprehensive testing and simulation tools</li>
          </ul>
        </section>

        <section>
          <h2>Getting Started</h2>
          <h3>Installation</h3>
          <pre><code>{`npm install @base/agentkit
# or
yarn add @base/agentkit`}</code></pre>

          <h3>Basic Usage</h3>
          <pre><code>{`import { Agent, AgentConfig } from '@base/agentkit';

const config: AgentConfig = {
  name: "MyAgent",
  network: "base-mainnet",
  actions: ["trade", "monitor"],
};

const agent = new Agent(config);
await agent.initialize();
await agent.start();`}</code></pre>
        </section>

        <section>
          <h2>Examples</h2>
          <h3>Trading Agent</h3>
          <pre><code>{`import { Agent, TradeStrategy } from '@base/agentkit';

const tradingAgent = new Agent({
  name: "TradingBot",
  strategy: new TradeStrategy({
    asset: "ETH",
    maxAmount: "1.0",
    priceThreshold: "1800",
  }),
});`}</code></pre>

          <h3>Monitoring Agent</h3>
          <pre><code>{`import { Agent, MonitorConfig } from '@base/agentkit';

const monitorAgent = new Agent({
  name: "SecurityMonitor",
  type: "monitor",
  alerts: ["suspicious_tx", "large_transfers"],
  threshold: "100000",
});`}</code></pre>
        </section>

        <section>
          <h2>Security Considerations</h2>
          <ul>
            <li>Always test agents thoroughly in a testnet environment</li>
            <li>Implement proper access controls and permissions</li>
            <li>Monitor agent activities and implement kill switches</li>
            <li>Regular security audits and updates</li>
          </ul>
        </section>

        <section>
          <h2>Additional Resources</h2>
          <ul>
            <li>
              <a href="/docs/agentkit/tutorials" className="text-blue-400 hover:text-blue-300">
                Tutorials and Guides
              </a>
            </li>
            <li>
              <a href="/docs/agentkit/api" className="text-blue-400 hover:text-blue-300">
                API Reference
              </a>
            </li>
            <li>
              <a href="/docs/agentkit/examples" className="text-blue-400 hover:text-blue-300">
                Example Projects
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
