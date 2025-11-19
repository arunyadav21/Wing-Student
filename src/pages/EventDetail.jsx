import { useParams, useNavigate } from "react-router-dom";
import { events } from "../data/events";   // FIXED IMPORT
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
        className="relative h-48 w-full rounded-b-3xl shadow-lg bg-center bg-cover flex items-end p-10"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          {event.title}
        </h1>
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

        {/* Speakers */}
        <div className="bg-white rounded-xl shadow-xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Guest Speakers</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            <div className="text-center bg-gray-100 p-5 rounded-xl">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-24 h-24 mx-auto rounded-full shadow-lg"
              />
              <h3 className="text-lg font-semibold mt-3">Rahul Sharma</h3>
              <p className="text-gray-600 text-sm">Tech Innovator</p>
            </div>

            <div className="text-center bg-gray-100 p-5 rounded-xl">
              <img 
                src="https://randomuser.me/api/portraits/women/65.jpg"
                className="w-24 h-24 mx-auto rounded-full shadow-lg"
              />
              <h3 className="text-lg font-semibold mt-3">Priya Manhotra</h3>
              <p className="text-gray-600 text-sm">Industry Expert</p>
            </div>

            <div className="text-center bg-gray-100 p-5 rounded-xl">
              <img 
                src="https://randomuser.me/api/portraits/men/73.jpg"
                className="w-24 h-24 mx-auto rounded-full shadow-lg"
              />
              <h3 className="text-lg font-semibold mt-3">Arjun Patel</h3>
              <p className="text-gray-600 text-sm">Leadership Coach</p>
            </div>

          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white rounded-xl shadow-xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Event Schedule</h2>

          <div className="space-y-4">

            <div className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded">
              <h3 className="text-lg font-bold">Opening Ceremony</h3>
              <p className="text-gray-600">10:00 AM</p>
            </div>

            <div className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded">
              <h3 className="text-lg font-bold">Main Activities / Workshops</h3>
              <p className="text-gray-600">11:00 AM – 4:00 PM</p>
            </div>

            <div className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded">
              <h3 className="text-lg font-bold">Networking & Closing</h3>
              <p className="text-gray-600">4:00 PM – 5:00 PM</p>
            </div>

          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Event Location</h2>

          <iframe
            className="w-full h-72 rounded-xl shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.501978271917!2d77.31408177539267!3d28.585350475682486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce51be16d29fb%3A0xcbaccc04357d2057!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1703189910000!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          />
        </div>

      </div>
    </div>
  );
}
