import { useState } from "react";

export default function Events() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const events = [
    { 
      id: 1, 
      title: "Tech Fest 2025", 
      date: "10th Oct 2025", 
      time: "9:00 AM - 5:00 PM",
      location: "College Auditorium",
      desc: "Annual technical festival with workshops, coding competitions, and robotics.", 
      category: "technical",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    { 
      id: 2, 
      title: "Cultural Fest", 
      date: "20th Nov 2025", 
      time: "10:00 AM - 8:00 PM",
      location: "College Ground",
      desc: "A celebration of art, dance, drama, and music from various cultures.", 
      category: "cultural",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    { 
      id: 3, 
      title: "Leadership Workshop", 
      date: "5th Dec 2025", 
      time: "2:00 PM - 5:00 PM",
      location: "Seminar Hall",
      desc: "Interactive workshop to develop leadership & teamwork skills.", 
      category: "workshop",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    { 
      id: 4, 
      title: "Hackathon", 
      date: "15th Jan 2026", 
      time: "10:00 AM - 10:00 PM",
      location: "Computer Lab",
      desc: "24-hour coding competition to solve real-world problems.", 
      category: "technical",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    { 
      id: 5, 
      title: "Career Fair", 
      date: "28th Feb 2026", 
      time: "11:00 AM - 4:00 PM",
      location: "Main Hall",
      desc: "Connect with top companies and explore internship opportunities.", 
      category: "career",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    { 
      id: 6, 
      title: "Sports Tournament", 
      date: "12th Mar 2026", 
      time: "8:00 AM - 6:00 PM",
      location: "Sports Complex",
      desc: "Annual inter-department sports competition with multiple games.", 
      category: "sports",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const categories = ["all", "technical", "cultural", "workshop", "career", "sports"];

  const filteredEvents = activeFilter === "all" 
    ? events 
    : events.filter(event => event.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with categories in top right */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              Upcoming <span className="text-yellow-500">Events</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Discover exciting events that help you learn, grow, and connect with the community
            </p>
          </div>
          
          {/* Filter Buttons - positioned top right */}
          <div className="flex flex-wrap gap-3  justify-end">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-400 hover:bg-blue-50"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Event Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.category}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h2>
                <div className="flex items-center text-gray-600 mb-3">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 mb-6">{event.desc}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Register Now
                  </button>
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    More Info
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No events found</h3>
            <p className="text-gray-600">There are no events in this category at the moment.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Never Miss an Event</h2>
          <p className="mb-6 max-w-2xl mx-auto">Subscribe to our newsletter and get notified about upcoming events and activities.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}