import Link from "next/link";

export default function EventNotFound() {
  return (
    <div className="min-h-screen bg-[#0c1527] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-white mb-6">Event not found</h1>
      <Link
        href="/events"
        className="text-[#4a9ced] hover:text-[#6ab0f3] text-lg transition-colors"
      >
        Back to events
      </Link>
    </div>
  );
}
