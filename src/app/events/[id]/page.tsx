"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import { EVENTS } from "@/sources/events";

export default function EventPage() {
  const params = useParams<{ id: string }>();
  const event = EVENTS.find((event) => event.id === params.id);

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
        <div className="rounded-lg overflow-hidden shadow-xl border border-white/10 backdrop-blur-md bg-transparent">
          <div className="relative">
            <div className="relative z-10 bg-transparent p-6 flex items-start gap-6">
              <div className="bg-transparent text-white p-3 rounded text-center min-w-16">
                <div className="text-2xl font-bold">{event?.date}</div>
              </div>

              <div>
                <h1 className="text-2xl font-bold">{event?.title}</h1>
                <p className="text-gray-300">{event?.location}</p>

                <div className="flex gap-4 mt-4">
                  <div className="bg-white/10 px-3 py-1 rounded text-sm">
                    {event?.status}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="prose prose-invert max-w-none">
              <p>{event?.sentence}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
