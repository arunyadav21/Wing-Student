import { useParams, useNavigate } from "react-router-dom";
import { events } from "../data/events";   // <-- FIXED IMPORT
import { useEffect } from "react";

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find(e => e.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
        Event Not Found 😢
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 pb-20">

      {/* Banner */}
      <div
        className="h-48 w-full bg-cover bg-center rounded-b-3xl shadow-lg"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div className="bg-black/40 h-full flex items-end p-6">
          <h1 className="text-4xl font-bold text-white">{event.title}</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-10">

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Event Overview</h2>
          <p className="text-gray-700">{event.desc}</p>

          <div className="mt-6 space-y-3 text-gray-700">
            <p>📅 {event.date}</p>
            <p>⏰ {event.time}</p>
            <p>📍 {event.location}</p>
          </div>

          <button
            onClick={() => navigate("/contact")}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Register for Event
          </button>
        </div>

      </div>
    </div>
  );
}
