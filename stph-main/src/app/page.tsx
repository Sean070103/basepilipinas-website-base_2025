import Mission from "@/views/mission";
import Hero from "@/views/hero";
import JoinUs from "@/views/join-us";
import Faq from "@/views/faq";
import BottomNav from "@/views/bottom-nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Header Section */}

      {/* Main Content - 1st Page */}
      <Hero />
      <Mission />

      {/* Link to Contributors Page */}
      <div className="text-center">
        <Link
          href="/contributors"
          className="text-customBlue hover:underline text-lg font-semibold"
        >
          View All Contributors ➜
        </Link>
      </div>

      <JoinUs />
      <Faq />
      <BottomNav />
    </div>
  );
}
