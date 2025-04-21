import { EVENTS } from "@/sources/events";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Events</h1>
        <div className="divide-y divide-white/10">
          {EVENTS.map((event) => (
            <Link
              href={`/events/${event.id}`}
              key={event.id}
              className="block py-6 hover:bg-white/5 transition-colors rounded-lg"
            >
              <div className="flex gap-4">
                {/* Event Date Avatar */}
                <div className="bg-blue-600 text-white h-16 w-16 rounded-full flex flex-col items-center justify-center flex-shrink-0">
                  <div className="text-sm font-bold">
                    {event.date.split(" ")[0].substring(0, 3)}
                  </div>
                  <div className="text-xl font-bold leading-none">
                    {event.date.split(" ")[1]}
                  </div>
                </div>

                {/* Event Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
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
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event Description */}
                  <p className="mt-4 text-sm text-gray-300 line-clamp-2">
                    {event.sentence}
                  </p>

                  {/* Event Image */}
                  {event.image && (
                    <div className="mt-4 rounded-xl overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={500}
                        height={280}
                        className="w-full h-48 object-cover rounded-xl border border-white/10"
                      />
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
