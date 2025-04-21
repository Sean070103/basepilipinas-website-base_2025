"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Lightbulb,
  Megaphone,
  Palette,
  Pencil,
  Users,
} from "lucide-react";

export default function JoinPage() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center p-4 sm:p-6 py-20 sm:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 animate-lightStreak"></div>
        </div>

        <div className="max-w-[1040px] mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Join Base Philippines
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Be part of the growing Web3 community in the Philippines. Whether
            you&apos;re a developer, creator, or enthusiast, there&apos;s a
            place for you here.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdUrXLlB70lrzi_hHBbHF0RCTLmrmxgQDbYeSPhHGA3l94BVQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-300 hover:gap-3"
          >
            Join Us Now <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-[1040px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Available Roles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Developer */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Developer
              </h3>
              <p className="text-white/70 text-sm">
                Build innovative solutions and contribute to the growing
                ecosystem of Web3 applications.
              </p>
            </div>

            {/* Content Creator */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Pencil className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Content Creator
              </h3>
              <p className="text-white/70 text-sm">
                Create engaging content to educate and inspire the community
                about Web3 technologies.
              </p>
            </div>

            {/* Community Manager */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Community Manager
              </h3>
              <p className="text-white/70 text-sm">
                Foster engagement and growth within our community through events
                and initiatives.
              </p>
            </div>

            {/* Designer */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Designer
              </h3>
              <p className="text-white/70 text-sm">
                Create stunning visuals and user experiences for Web3
                applications and content.
              </p>
            </div>

            {/* Marketing Specialist */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4">
                <Megaphone className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Marketing Specialist
              </h3>
              <p className="text-white/70 text-sm">
                Drive awareness and adoption of Web3 technologies through
                strategic marketing initiatives.
              </p>
            </div>

            {/* Innovator */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Innovator
              </h3>
              <p className="text-white/70 text-sm">
                Bring your unique ideas and perspective to help shape the future
                of Web3 in the Philippines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 bg-white/5">
        <div className="max-w-[1040px] mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Why Join Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/hero/studying_1.jpg"
                alt="Learning and Growth"
                width={500}
                height={300}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Learning & Growth
                  </h3>
                  <p className="text-white/90 text-sm">
                    Access exclusive resources, workshops, and mentorship
                    opportunities to accelerate your Web3 journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/Event/WEBP/meeting.webp"
                alt="Community and Network"
                width={500}
                height={300}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Community & Network
                  </h3>
                  <p className="text-white/90 text-sm">
                    Connect with like-minded individuals and build valuable
                    relationships in the Web3 space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-[1040px] mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join Base Philippines today and be part of building the future of
            Web3 in the Philippines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdUrXLlB70lrzi_hHBbHF0RCTLmrmxgQDbYeSPhHGA3l94BVQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-300 inline-flex items-center gap-2"
            >
              Join Us Now <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/learn"
              className="px-6 py-3 border border-white text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
