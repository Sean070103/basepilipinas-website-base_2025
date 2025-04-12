export default function DocsPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-transparent flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-7xl backdrop-blur-sm bg-black/20 rounded-xl p-6">
        <section className="mb-16 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Welcome to Base Documentation
          </h1>
          <p className="text-lg md:text-xl text-white/70">
            Select a topic from the sidebar to view documentation.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Getting Started Card */}
          <div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all p-8">
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Getting Started
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Learn the basics of Base and start building your first
              decentralized application.
            </p>
            <ul className="space-y-4">
              {[
                "Introduction to Base",
                "Setting up your environment",
                "Building your first dApp",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center space-x-3 text-white/70 text-lg"
                >
                  <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Topics Card */}
          <div className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all p-8">
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Popular Topics
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Explore our most accessed documentation sections.
            </p>
            <ul className="space-y-4">
              {[
                "Smart Contract Development",
                "Wallet Integration",
                "Gas Optimization",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center space-x-3 text-white/70 text-lg"
                >
                  <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
