import Image from "next/image";
import { ChevronRight, Compass, Target, Eye, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Mission() {
  const aboutItems = [
    {
      title: "BASE PH",
      description:
        "A cooperative of creatives, developers, and operators growing the Solana ecosystem in the Philippines.",
      icon: <Compass className="h-6 w-6 text-blue-400" />,
    },
    {
      title: "MISSION",
      description:
        "Helping promising Solana projects launch and grow through a strong community and expert collaboration.",
      icon: <Target className="h-6 w-6 text-emerald-400" />,
    },
    {
      title: "VISION",
      description:
        "To be the leading hub for blockchain innovation in the Philippines, fostering technology-driven success.",
      icon: <Eye className="h-6 w-6 text-purple-400" />,
    },
    {
      title: "SERVICES",
      description:
        "Providing mentorship, funding opportunities, and networking to elevate blockchain projects.",
      icon: <Briefcase className="h-6 w-6 text-amber-400" />,
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center px-4 md:px-12 py-16">
      {/* About Section */}
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          About Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#0a1729]/60 backdrop-blur-sm border border-blue-900/20 rounded-xl overflow-hidden group transition-all duration-300 hover:border-blue-500/30"
            >
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-950/50 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="w-full max-w-6xl mt-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Mission Text */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            <div className="inline-block px-4 py-1 text-blue-400 text-sm font-medium mb-2">
              Our Purpose
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We help the most promising projects in the Solana ecosystem in the
              Philippines launch and grow. We are a cooperative of creatives,
              developers, and operators with expertise in building technology
              businesses.
            </p>
            <Button
              className="w-fit group bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300"
              size="lg"
            >
              <span className="text-lg">Join Us Now</span>
              <ChevronRight
                size={22}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </div>

          {/* Image Section - 3 images in a more artistic layout */}
          <div className="lg:w-1/2 relative h-[400px] w-full">
            {/* Main image */}
            <div className="absolute top-0 right-0 w-3/4 h-3/4 overflow-hidden rounded-xl border border-blue-900/20 z-10">
              <Image
                src="/base/base3.jpg"
                alt="Mission Image 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Bottom left image */}
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 overflow-hidden rounded-xl border border-blue-900/20 z-20">
              <Image
                src="/base/base2.jpg"
                alt="Mission Image 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Bottom right image (smaller) */}
            <div className="absolute bottom-10 right-10 w-1/3 h-1/3 overflow-hidden rounded-xl border border-blue-900/20 shadow-lg z-30">
              <Image
                src="/base/base1.jpg"
                alt="Mission Image 3"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-blue-500/10 blur-xl"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-purple-500/10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
