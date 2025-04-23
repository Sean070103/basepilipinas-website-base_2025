export default function QuickstartPage() {
  return (
    <div className="prose prose-invert max-w-screen-lg bg-transparent mx-auto overflow-x-hidden px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        Quickstart Overview
      </h1>
      <p className="text-lg sm:text-xl text-white/70 mb-8">
        Welcome to the Base Quickstart Guide! This walkthrough will take you
        step-by-step through building a simple onchain app, from setup to
        deployment. It&apos;s designed for both beginners and experienced
        developers.
      </p>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            What You&apos;ll Build
          </h2>
          <p className="text-lg text-white/70 mb-4">
            By the end of this guide, you&apos;ll have:
          </p>

          <ul className="space-y-2 text-white/70">
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
              <span className="text-md sm:text-xl">
                Set up your development environment
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
              <span className="text-md sm:text-xl">
                Deployed a smart contract on Base
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
              <span className="text-md sm:text-xl">
                Built a frontend that interacts with your contract
              </span>
            </li>
          </ul>
          <p className="mt-4 text-md sm:text-xl text-white/70">
            The project is a basic onchain tally app where users can increment a
            total stored on the blockchain by clicking a button.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">
            Getting Started with OnchainKit
          </h2>
          <p className="text-lg text-white/70 mb-6">
            OnchainKit is a powerful and intuitive SDK designed to simplify the
            development of visually polished onchain applications. With it,
            developers can build functional dApps in just 15 minutes; no prior
            blockchain experience is needed.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Why Choose OnchainKit?
          </h3>
          <p className="text-lg text-white/70 mb-4">
            OnchainKit accelerates the app development process by combining
            essential onchain capabilities with user-friendly design:
          </p>
          <ul className="space-y-3 text-white/70">
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <div>
                <span className="font-medium text-white">
                  Developer-Centric Tools:
                </span>
                <span className="ml-1">
                  Full-stack utilities that make complex blockchain interactions
                  seamless and intuitive.
                </span>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <div>
                <span className="font-medium text-white">Proven Patterns:</span>
                <span className="ml-1">
                  Predefined best practices shaped by real-world use cases.
                </span>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <div>
                <span className="font-medium text-white">
                  Ready-to-Use Components:
                </span>
                <span className="ml-1">
                  Purpose-built modules for common onchain tasks.
                </span>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <div>
                <span className="font-medium text-white">
                  Framework Flexibility:
                </span>
                <span className="ml-1">
                  Works with any React-compatible framework.
                </span>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <div>
                <span className="font-medium text-white">
                  Streamlined Development:
                </span>
                <span className="ml-1">
                  Optimized workflow with automated tooling and integrated
                  development environment for rapid iterations.
                </span>
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
              <div>
                <span className="font-medium text-white">Powered by Base:</span>
                <span className="ml-1">
                  Deeply integrated with the Base network to unlock enhanced
                  performance and ecosystem support.
                </span>
              </div>
            </li>
          </ul>
        </section>

        <section className="mt-12 p-4 rounded-xl bg-white/5">
          <p className="text-sm text-white/50">
            For more detailed information, visit{" "}
            <a
              href="https://docs.base.org/quickstart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              docs.base.org/quickstart
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
