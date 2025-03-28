import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Video,
  FileText,
  Lightbulb,
  Calendar,
} from "lucide-react";

export default function LearnPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center p-4 sm:p-6 py-16 sm:py-20 overflow-hidden">
        {/* Light Streak Effect */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 animate-lightStreak"></div>
        </div>

        <div className="w-full max-w-[1440px] flex flex-col items-center text-center gap-6 relative z-10">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors self-start mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/logo/Base_Symbol_White.svg"
              alt="Base Philippines Logo"
              width={80}
              height={80}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
            />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-widest uppercase text-white">
              Base Insight Hub
            </h1>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Learn, Grow, and Innovate with Us
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-white/80 max-w-2xl">
            Your gateway to blockchain knowledge and Web3 expertise. Explore our
            curated resources, tutorials, webinars, and community-driven content
            to accelerate your journey in the decentralized ecosystem.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Learning Resources
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video Tutorials */}
            <div className="flex flex-col h-full rounded-2xl overflow-hidden glass border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-[0px_0px_20px_rgba(255,255,255,0.15)]">
              <div className="relative w-full h-48">
                <Image
                  src="/learning-page/learning/Video tutorials.webp?height=400&width=600"
                  alt="Video Tutorials"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <Video className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">Video Tutorials</h3>
                <p className="text-white/70 text-sm mb-4 flex-grow">
                  Step-by-step video guides on blockchain development, smart
                  contracts, and building on Base. Perfect for visual learners.
                </p>
                <Link
                  href="/learn/videos"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Watch now</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Documentation */}
            <div className="flex flex-col h-full rounded-2xl overflow-hidden glass border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-[0px_0px_20px_rgba(255,255,255,0.15)]">
              <div className="relative w-full h-48">
                <Image
                  src="/learning-page/learning/Documentation.webp?height=400&width=600"
                  alt="Documentation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">Documentation</h3>
                <p className="text-white/70 text-sm mb-4 flex-grow">
                  Comprehensive guides, API references, and technical
                  documentation to help you understand the Base ecosystem and
                  build powerful applications.
                </p>
                <Link
                  href="/learn/docs"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Read docs</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Workshops */}
            <div className="flex flex-col h-full rounded-2xl overflow-hidden glass border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-[0px_0px_20px_rgba(255,255,255,0.15)]">
              <div className="relative w-full h-48">
                <Image
                  src="/learning-page/learning/Webinar.webp?height=400&width=600"
                  alt="Workshops"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">Workshops & Webinars</h3>
                <p className="text-white/70 text-sm mb-4 flex-grow">
                  Interactive sessions led by industry experts. Join live or
                  watch recordings to deepen your understanding of blockchain
                  technology.
                </p>
                <Link
                  href="/learn/workshops"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Join sessions</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-12 px-4 sm:px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Featured Content
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden glass border border-white/10">
              <div className="relative aspect-video">
                <Image
                  src="/learning-page/learning/Base.png?height=400&width=600"
                  alt="Introduction to Base"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">Introduction to Base</h3>
                <p className="text-white/70 text-sm mb-4">
                  Learn about Base, the secure, low-cost, developer-friendly
                  Ethereum L2 built to bring the next billion users to web3.
                </p>
                <div className="flex items-center text-sm text-white/60">
                  <span>15 min</span>
                  <span className="mx-2">•</span>
                  <span>Beginner</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden glass border border-white/10">
              <div className="relative aspect-video">
                <Image
                  src="/learning-page/learning/dApp.jpg?height=400&width=600"
                  alt="Building Your First dApp"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">
                  Building Your First dApp
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  A comprehensive guide to building and deploying your first
                  decentralized application on Base.
                </p>
                <div className="flex items-center text-sm text-white/60">
                  <span>45 min</span>
                  <span className="mx-2">•</span>
                  <span>Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
            Learning Paths
          </h2>
          <p className="text-center text-white/70 mb-8 max-w-2xl mx-auto">
            Structured learning journeys designed to take you from beginner to
            expert in specific areas of blockchain development.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Beginner Path */}
            <div className="rounded-xl overflow-hidden glass border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-[0px_0px_20px_rgba(255,255,255,0.15)]">
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Beginner Path</h3>
                    <p className="text-white/60 text-xs">4 modules • 8 hours</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-5">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      1
                    </div>
                    <span>Blockchain Fundamentals</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      2
                    </div>
                    <span>Understanding Ethereum</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      3
                    </div>
                    <span>Introduction to Base</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      4
                    </div>
                    <span>Setting Up Your Development Environment</span>
                  </li>
                </ul>
                <Link
                  href="/learn/paths/beginner"
                  className="inline-flex items-center justify-center w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
                >
                  Start Learning
                </Link>
              </div>
            </div>

            {/* Intermediate Path */}
            <div className="rounded-xl overflow-hidden glass border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-[0px_0px_20px_rgba(255,255,255,0.15)]">
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Lightbulb className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Intermediate Path</h3>
                    <p className="text-white/60 text-xs">
                      5 modules • 12 hours
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-5">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      1
                    </div>
                    <span>Smart Contract Development</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      2
                    </div>
                    <span>Web3.js & Ethers.js</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      3
                    </div>
                    <span>Building dApps with React</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      4
                    </div>
                    <span>Testing & Deployment on Base</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      5
                    </div>
                    <span>Security Best Practices</span>
                  </li>
                </ul>
                <Link
                  href="/learn/paths/intermediate"
                  className="inline-flex items-center justify-center w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
                >
                  Start Learning
                </Link>
              </div>
            </div>

            {/* Advanced Path */}
            <div className="rounded-xl overflow-hidden glass border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-[0px_0px_20px_rgba(255,255,255,0.15)]">
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <svg
                      className="h-5 w-5 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Advanced Path</h3>
                    <p className="text-white/60 text-xs">
                      6 modules • 15 hours
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-5">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      1
                    </div>
                    <span>Advanced Smart Contract Patterns</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      2
                    </div>
                    <span>DeFi Protocol Development</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      3
                    </div>
                    <span>NFT Marketplaces</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      4
                    </div>
                    <span>Layer 2 Scaling Solutions</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      5
                    </div>
                    <span>Cross-chain Interoperability</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      6
                    </div>
                    <span>Optimizing Gas Efficiency</span>
                  </li>
                </ul>
                <Link
                  href="/learn/paths/advanced"
                  className="inline-flex items-center justify-center w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
                >
                  Start Learning
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Learning */}
      <section className="py-12 px-4 sm:px-6 bg-gradient-to-b from-transparent to-black/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Join Our Learning Community
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Connect with fellow learners, share knowledge, ask questions, and
            collaborate on projects. Our community is here to support your
            blockchain journey.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://discord.gg/basepilipinas"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#5865F2] text-white font-medium flex items-center gap-2 hover:bg-[#4752c4] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
              <span>Join Discord</span>
            </Link>

            <Link
              href="https://t.me/basepilipinas"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#0088cc] text-white font-medium flex items-center gap-2 hover:bg-[#0077b5] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              <span>Join Telegram</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
