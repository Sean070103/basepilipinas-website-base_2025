"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import { EVENTS } from "@/sources/events";
import { useState } from "react";

export default function EventPage() {
  const params = useParams<{ id: string }>();
  const event = EVENTS.find((event) => event.id === params.id);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <img
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
                  <img
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
            {/* Date Box */}
            <div className="bg-blue-600 text-white p-2 rounded text-center min-w-14 sm:min-w-16">
              <div className="text-lg sm:text-2xl font-bold">
                {event?.date.split(" ")[0]}
              </div>
              <div className="text-xs sm:text-sm uppercase">
                {event?.date.split(" ")[1]}
              </div>
              <div className="text-xs sm:text-sm">
                {event?.date.split(" ")[2]}
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
              {event?.sentence}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
