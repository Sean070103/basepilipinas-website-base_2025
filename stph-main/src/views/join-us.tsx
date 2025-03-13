import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function JoinUs() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full flex flex-col gap-8 p-8 max-w-[1040px] md:flex-row">
        {/* Left Section */}
        <div className="flex flex-col gap-4 md:gap-8">
          <p className="text-2xl md:text-6xl font-bold leading-tight">
            Unleash the future.
            <br />
            Join our community.
          </p>

          <Button
            className="w-fit px-6 py-4 border border-sky-400 rounded-2xl text-sky-400 transition-all duration-300 hover:bg-sky-400 hover:text-black group"
            size={"lg"}
          >
            <p className="text-lg">Join Us Now</p>
            <ChevronRight
              size={24}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 md:gap-8">
          {[
            { value: "5K+", label: "Active SOLANA accounts" },
            { value: "10K+", label: "Active members" },
            { value: "$2.5K", label: "Average earnings" },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 items-start md:items-center"
            >
              <p className="text-4xl md:text-7xl font-bold text-sky-400">
                {stat.value}
              </p>
              <p className="text-sm md:text-lg font-light text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
