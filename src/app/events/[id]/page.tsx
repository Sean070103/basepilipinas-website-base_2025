"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import { EVENTS } from "@/sources/events";
import { useState } from "react";
import Image from "next/image";

export default function EventPage() {
  const params = useParams<{ id: string }>();
  const event = EVENTS.find((event) => event.id === params.id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Convert date format
  const formattedDate = event?.date
    ? new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(new Date(event.date))
    : "";

  return (
    <main className="min-h-screen bg-transparent text-white">
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <Link
          href="/#events"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to events
        </Link>

        {/* Event Card */}
        <div className="rounded-lg overflow-hidden shadow-xl border border-white/10 backdrop-blur-md bg-white/10">
          {/* Event Image with Clickable Modal */}
          {event?.image && (
            <>
              <Image
                src={event.image}
                alt={event.title}
                className="w-full h-auto max-h-64 object-cover cursor-pointer rounded-t-lg"
                onClick={() => setIsModalOpen(true)}
              />
              {isModalOpen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                  onClick={() => setIsModalOpen(false)}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    className="max-w-full max-h-full rounded-lg"
                  />
                </div>
              )}
            </>
          )}

          {/* Event Details */}
          <div className="relative z-10 p-4 flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            {/* Updated Date Box - 31 Jan 2025 Format */}
            <div className="bg-blue-600 text-white px-4 py-3 rounded text-center min-w-20 sm:min-w-24 flex flex-col items-center">
              <div className="text-4xl sm:text-5xl font-bold leading-none">
                {formattedDate.split(" ")[0]}
              </div>
              <div className="text-lg sm:text-xl font-medium uppercase">
                {formattedDate.split(" ")[1]}
              </div>
              <div className="text-lg sm:text-xl font-medium">
                {formattedDate.split(" ")[2]}
              </div>
            </div>

            {/* Title & Info */}
            <div className="w-full">
              <h1 className="text-lg sm:text-2xl font-bold">{event?.title}</h1>
              <p className="text-gray-300 text-sm sm:text-base">
                {event?.location}
              </p>
              <div className="flex justify-start mt-2 sm:mt-4">
                <div className="bg-white/10 px-3 py-1 rounded text-xs sm:text-sm">
                  {event?.status}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="p-4 sm:p-6">
            <p className="text-gray-300 text-sm sm:text-base">
              {event?.sentence.trim()}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
