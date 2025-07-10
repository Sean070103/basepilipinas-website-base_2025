'use client';

import { EVENTS } from '@/sources/events';
import { Calendar, Clock, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Page() {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  const { id: eventId } = useParams<{ id: string }>();

  // Reference for scrolling to highlighted event
  const highlightedEventRef = useRef<HTMLDivElement>(null);

  // Scroll to highlighted event on mount
  useEffect(() => {
    if (eventId && highlightedEventRef.current) {
      highlightedEventRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      // Expand the highlighted event
      setExpandedEvent(eventId);

      const section = document.getElementById(eventId);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [eventId]);

  // Toggle expanded view for an event
  const toggleExpand = (eventId: string) => {
    setExpandedEvent((prev) => (prev === eventId ? null : eventId));
  };

  // Check if text needs truncation (more than 220 characters and at least 3 sentences)
  const needsTruncation = (text: string) => {
    const sentences = text.split('.').filter(Boolean);
    return text.length > 220 && sentences.length >= 3 && sentences.length <= 4 ? true : sentences.length > 4;
  };

  return (
    <div className='min-h-screen bg-transparent text-white'>
      <div className='container mx-auto py-4 px-4 max-w-xl'>
        <div className='divide-y divide-white/10'>
          {EVENTS.map((event) => (
            <div
              id={event.id}
              key={event.id}
              className={`py-4 animate-fadeIn ${
                eventId === event.id
                  ? 'bg-blue-900/20 -mx-4 px-4 rounded-lg'
                  : ''
              }`}
              ref={eventId === event.id ? highlightedEventRef : null}
            >
              <div className='flex gap-3'>
                {/* Event Date Avatar */}
                <div className='bg-blue-600 text-white h-12 w-12 rounded-full flex flex-col items-center justify-center flex-shrink-0'>
                  <div className='text-xs font-bold'>
                    {event.date.split(' ')[0].substring(0, 3)}
                  </div>
                  <div className='text-lg font-bold leading-none'>
                    {event.date.split(' ')[1]}
                  </div>
                </div>

                {/* Event Content */}
                <div className='flex-1'>
                  <div className='flex justify-between items-start'>
                    <div>
                      <h2 className='font-bold text-base'>{event.title}</h2>
                      <div className='flex items-center gap-2 text-white/90 text-xs mt-1'>
                        <span>{event.location}</span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs ${
                            event.status === 'Done'
                              ? 'bg-green-500/20 text-green-400'
                              : event.status === 'Ongoing'
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-blue-500/20 text-blue-400'
                          }`}
                        >
                          {event.status}
                        </span>
                      </div>
                      <div className='flex items-center gap-3 mt-1 text-xs text-blue-100'>
                        <div className='flex items-center gap-1'>
                          <Calendar className='w-3 h-3' />
                          <span>{event.date}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                          <Clock className='w-3 h-3' />
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event Description */}
                  <p
                    className={`mt-2 text-sm ${
                      needsTruncation(event.sentence) && expandedEvent !== event.id
                        ? 'line-clamp-3'
                        : ''
                    }`}
                  >
                    {event.sentence}
                  </p>

                  {/* Show More/Less Button (only if text actually needs truncation) */}
                  {needsTruncation(event.sentence) && (
                    <button
                      className='text-blue-400 text-xs mt-1 hover:underline'
                      onClick={() => toggleExpand(event.id)}
                    >
                      {expandedEvent === event.id ? 'Show less' : 'Show more'}
                    </button>
                  )}

                  {/* Event Image */}
                  {event.image && (
                    <div className='mt-3 rounded-xl overflow-hidden'>
                      <Image
                        src={event.image || '/placeholder.svg'}
                        alt={event.title}
                        width={500}
                        height={280}
                        className='w-full h-auto object-cover rounded-xl border border-white/10'
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Coming Soon Message */}
          <div className='py-4 text-center'>
            <p className='text-gray-400 text-sm'>Coming Soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
