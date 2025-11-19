import { useParams, useNavigate } from "react-router-dom";
import { events } from "../data/events"; 
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

      {/* Dynamic Banner */}
      <div
        className="relative h-40 w-full rounded-b-3xl shadow-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-b-3xl flex items-end p-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {event.title}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12">

        {/* Event Info */}
        <div className="bg-white rounded-xl shadow-xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Event Overview</h2>
          <p className="text-gray-700 leading-relaxed text-lg">{event.desc}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-gray-700">
            <div className="p-4 bg-gray-100 rounded-xl">
              <h3 className="font-semibold text-blue-600">📅 Date</h3>
              <p>{event.date}</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-xl">
              <h3 className="font-semibold text-blue-600">⏰ Time</h3>
              <p>{event.time}</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-xl">
              <h3 className="font-semibold text-blue-600">📍 Location</h3>
              <p>{event.location}</p>
            </div>
          </div>

          <button 
            onClick={() => navigate("/contact")}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            Register for Event
          </button>
        </div>

      </div>
    </div>
  );
}
