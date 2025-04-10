export default function DocsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to Base Documentation</h1>
      <p className="text-lg text-white/70 mb-8">
        Select a topic from the sidebar to view documentation.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg bg-white/5 border border-white/10">
          <h2 className="text-xl font-semibold mb-3">Getting Started</h2>
          <p className="text-white/70 mb-4">
            Learn the basics of Base and start building your first decentralized application.
          </p>
          <ul className="space-y-2 text-white/60">
            <li>• Introduction to Base</li>
            <li>• Setting up your environment</li>
            <li>• Building your first dApp</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg bg-white/5 border border-white/10">
          <h2 className="text-xl font-semibold mb-3">Popular Topics</h2>
          <p className="text-white/70 mb-4">
            Explore our most accessed documentation sections.
          </p>
          <ul className="space-y-2 text-white/60">
            <li>• Smart Contract Development</li>
            <li>• Wallet Integration</li>
            <li>• Gas Optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 