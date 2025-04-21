"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, Calendar, ChevronRight, Facebook } from "lucide-react";

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <main className="container mx-auto">
        <div className="space-y-8 py-6 md:py-8 lg:py-10">
          {/* Welcome Section */}
          <section className="space-y-4 text-center">
            <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl">
              Welcome to Base Documentation
            </h1>
            <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
              Learn how to build on Base through our comprehensive guides and
              tutorials.
            </p>
          </section>

          {/* Learning Resources */}
          <section className="space-y-6">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
              Learning Resources
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Documentation Card */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src="/learning-page/learning/Documentation.webp"
                    alt="Documentation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <FileText className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Documentation
                  </h3>
                  <p className="text-muted-foreground text-sm leading-7">
                    Build a simple onchain app from setup to deployment.
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium leading-none">
                      Getting Started:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Introduction to Base</li>
                      <li>• Setting up your environment</li>
                      <li>• Building your first dApp</li>
                    </ul>
                  </div>
                  <Link
                    href="/docs"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Read docs
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Workshops Card */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src="/learning-page/learning/Webinar.webp"
                    alt="Workshops"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Calendar className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Workshops & Webinars
                  </h3>
                  <p className="text-muted-foreground text-sm leading-7">
                    Interactive sessions and exercises for smart contract
                    development on Base and other EVM-compatible chains.
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium leading-none">
                      Featured Content:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Smart Contract Development Exercises</li>
                      <li>• Frontend Development for Onchain Apps</li>
                    </ul>
                  </div>
                  <Link
                    href="/events/smart-contract-workshop"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Join sessions
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Content */}
          <section className="space-y-6">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
              Featured Content
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Introduction to Base */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Link
                    href="https://www.facebook.com/reel/519212114535393"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <Image
                      src="/learning-page/learning/Base.png"
                      alt="Introduction to Base"
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-[#1877F2] flex items-center justify-center">
                        <Facebook className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Introduction to Base
                  </h3>
                  <p className="text-muted-foreground text-sm leading-7">
                    Learn about Base, a secure, low-cost, developer-friendly
                    Ethereum L2 built to bring the next billion users to web3.
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium leading-none">
                      What You&apos;ll Learn:
                    </h4>

                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-muted"></div>
                        <span>
                          Ethereum Basics – History, goals, applications
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-muted"></div>
                        <span>Gas Fees – Understanding transaction costs</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-muted"></div>
                        <span>Smart Contract Development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Base Batches */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Link
                    href="https://www.facebook.com/share/p/15Jp9a2Ykw/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <Image
                      src="/learning-page/thumbnail.png"
                      alt="Base Batches: Global Buildathon"
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-[#1877F2] flex items-center justify-center">
                        <Facebook className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Base Batches: Global Buildathon
                  </h3>
                  <p className="text-muted-foreground text-sm leading-7">
                    We&apos;re kicking off Base Batches, a global builder
                    program bringing the next generation of builders to create
                    industry-defining applications onchain. Enter the Base Batch
                    Buildathon to earn an incubator placement and present on
                    Demo Day!
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium leading-none">
                      Program Highlights:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-muted"></div>
                        <span>Buildathon Activations</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-muted"></div>
                        <span>Incubator Placements</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-muted"></div>
                        <span>Season-ending Demo Day</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>APAC</span>
                      <span className="mx-2">•</span>
                      <span>Batch 001</span>
                      <span className="mx-2">•</span>
                      <span>Now Open</span>
                    </div>
                    <Link
                      href="https://www.facebook.com/share/p/15Jp9a2Ykw/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Community Section */}
          <section className="border-t space-y-6 py-8">
            <div className="text-center space-y-4">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Join Our Community
              </h3>
              <p className="text-muted-foreground text-sm leading-7 md:text-base max-w-2xl mx-auto">
                Connect with developers, share your projects, and stay updated
                with the latest from Base Philippines.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://www.facebook.com/basepilipinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#5865F2] px-8 text-sm font-medium text-white transition-colors hover:bg-[#4752C4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full sm:w-auto"
                >
                  <Facebook className="mr-2 h-4 w-4" />
                  Join Base PH
                </Link>
                <Link
                  href="https://x.com/basepilipinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full sm:w-auto"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Follow on X
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
