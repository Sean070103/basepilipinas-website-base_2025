"use client";

import { MoreHorizontal, Calendar, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { EVENTS } from "@/sources/events";

export default function EventFeed({
  highlightedEventId,
}: {
  highlightedEventId?: string;
}) {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  // Reference for scrolling to highlighted event
  const highlightedEventRef = useRef<HTMLDivElement>(null);

  // Scroll to highlighted event on mount
  useEffect(() => {
    if (highlightedEventId && highlightedEventRef.current) {
      highlightedEventRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      // Expand the highlighted event
      setExpandedEvent(highlightedEventId);
    }
  }, [highlightedEventId]);

  // Toggle expanded view for an event
  const toggleExpand = (eventId: string) => {
    setExpandedEvent((prev) => (prev === eventId ? null : eventId));
  };

  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="container mx-auto py-4 px-4 max-w-xl">
        <div className="divide-y divide-white/10">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className={`py-4 animate-fadeIn ${
                highlightedEventId === event.id
                  ? "bg-blue-900/20 -mx-4 px-4 rounded-lg"
                  : ""
              }`}
              ref={highlightedEventId === event.id ? highlightedEventRef : null}
            >
              <div className="flex gap-3">
                {/* Event Date Avatar */}
                <div className="bg-blue-600 text-white h-12 w-12 rounded-full flex flex-col items-center justify-center flex-shrink-0">
                  <div className="text-xs font-bold">
                    {event.date.split(" ")[0].substring(0, 3)}
                  </div>
                  <div className="text-lg font-bold leading-none">
                    {event.date.split(" ")[1]}
                  </div>
                </div>

                {/* Event Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="font-bold text-base">{event.title}</h2>
                      <div className="flex items-center gap-2 text-gray-400 text-xs mt-1">
                        <span>{event.location}</span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs ${
                            event.status === "Done"
                              ? "bg-gray-500/20 text-gray-400"
                              : event.status === "Ongoing"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {event.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <button className="text-gray-400 hover:text-white">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Event Description */}
                  <p
                    className={`mt-2 text-sm ${
                      event.sentence.length > 100 && expandedEvent !== event.id
                        ? "line-clamp-3"
                        : ""
                    }`}
                    onClick={() => toggleExpand(event.id)}
                  >
                    {event.sentence}
                  </p>

                  {/* Show More/Less Button (only if description is longer than 100 characters) */}
                  {event.sentence.length > 100 && (
                    <button
                      className="text-blue-400 text-xs mt-1 hover:underline"
                      onClick={() => toggleExpand(event.id)}
                    >
                      {expandedEvent === event.id ? "Show less" : "Show more"}
                    </button>
                  )}

                  {/* Event Image */}
                  {event.image && (
                    <div className="mt-3 rounded-xl overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        width={500}
                        height={280}
                        className="w-full h-auto object-cover rounded-xl border border-white/10"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Coming Soon Message */}
          <div className="py-4 text-center">
            <p className="text-gray-400 text-sm">Coming Soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
