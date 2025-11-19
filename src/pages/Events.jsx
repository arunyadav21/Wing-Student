import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { events } from "../data/events";   // <-- FIXED IMPORT

export default function Events() {

  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate();

  const categories = ["all", "technical", "cultural", "workshop", "career", "sports"];

  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter(event => event.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Upcoming Events</h1>

        {/* Category Filter */}
        <div className="flex gap-4 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full ${
                activeFilter === cat ? "bg-blue-600 text-white" : "bg-white text-gray-700"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={event.image} className="h-48 w-full object-cover" />

              <div className="p-4">
                <h2 className="text-xl font-bold">{event.title}</h2>
                <p className="text-gray-600 mt-2">{event.desc}</p>

                <button
                  onClick={() => navigate(`/events/${event.id}`)}
                  className="mt-4 text-blue-600 font-semibold"
                >
                  More Info →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
