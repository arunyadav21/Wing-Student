import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { events } from "../data/events";   // FIXED IMPORT

export default function Events() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const categories = ["all", "technical", "cultural", "workshop", "career", "sports"];

  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter(event => event.category === activeFilter);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim() || !emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");

      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              Upcoming <span className="text-yellow-500">Events</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Discover exciting events that help you grow and connect.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-3 mt-6 md:mt-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`w-28 h-12 flex items-center justify-center rounded-full font-medium transition ${
                  activeFilter === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-400 hover:bg-blue-50"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition">

              <div className="h-48 overflow-hidden relative">
                <img src={event.image} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
                  {event.category}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold">{event.title}</h2>

                <p className="text-gray-600 my-3">{event.desc}</p>

                <div className="flex flex-col text-gray-600 space-y-2 mb-4">
                  <span>📅 {event.date}</span>
                  <span>⏰ {event.time}</span>
                  <span>📍 {event.location}</span>
                </div>

                <div className="flex justify-between items-center gap-3">

                  {/* Register Now */}
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      navigate("/contact");
                    }}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                  >
                    Register Now
                  </button>

                  {/* More Info */}
                  <button
                    onClick={() => navigate(`/events/${event.id}`)}
                    className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                  >
                    More Info →
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Events Found */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold">No events found</h3>
            <p className="text-gray-600">Try another category.</p>
          </div>
        )}

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mt-16 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss an Event</h2>
          <p className="mb-6">Subscribe to get updates before anyone else!</p>

          {isSubscribed ? (
            <div className="bg-green-500 p-4 rounded-lg font-semibold">
              🎉 Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-lg text-gray-900"
                placeholder="Enter your email"
                required
              />

              <button
                disabled={isLoading}
                className="bg-yellow-400 px-6 py-3 rounded-lg text-gray-900 font-semibold hover:bg-yellow-500"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
