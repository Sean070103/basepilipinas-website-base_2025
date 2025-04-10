export default function DocsPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-6xl mx-auto py-8 px-6">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Base Documentation</h1>
          <p className="text-lg text-white/70">
            Select a topic from the sidebar to view documentation.
          </p>
        </section>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all p-6">
            <h2 className="text-2xl font-semibold mb-3 text-white">Getting Started</h2>
            <p className="text-white/70 text-base mb-6">
              Learn the basics of Base and start building your first decentralized application.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-white/70">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                <span>Introduction to Base</span>
              </li>
              <li className="flex items-center space-x-2 text-white/70">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                <span>Setting up your environment</span>
              </li>
              <li className="flex items-center space-x-2 text-white/70">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                <span>Building your first dApp</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all p-6">
            <h2 className="text-2xl font-semibold mb-3 text-white">Popular Topics</h2>
            <p className="text-white/70 text-base mb-6">
              Explore our most accessed documentation sections.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-white/70">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                <span>Smart Contract Development</span>
              </li>
              <li className="flex items-center space-x-2 text-white/70">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                <span>Wallet Integration</span>
              </li>
              <li className="flex items-center space-x-2 text-white/70">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                <span>Gas Optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
