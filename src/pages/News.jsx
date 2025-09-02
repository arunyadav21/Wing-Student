import { useState } from "react";

export default function News() {
  const [activeCategory, setActiveCategory] = useState("all");

  const newsList = [
    { 
      id: 1, 
      title: "Annual Fest 2025 Announced", 
      date: "25 Aug 2025", 
      desc: "Our college fest will be held next month with cultural & tech events. This year's theme is 'Innovation Meets Tradition'.",
      category: "events",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      author: "Student Wing Committee",
      readTime: "2 min read"
    },
    { 
      id: 2, 
      title: "Workshop on Artificial Intelligence", 
      date: "20 Sep 2025", 
      desc: "Student Wing is organizing a hands-on workshop on Artificial Intelligence and Machine Learning for all interested students.",
      category: "workshops",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      author: "Tech Department",
      readTime: "3 min read"
    },
    { 
      id: 3, 
      title: "New Collaboration with Industry Partners", 
      date: "15 Aug 2025", 
      desc: "We're excited to announce new partnerships with leading tech companies for internships and placement opportunities.",
      category: "announcements",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      author: "Placement Cell",
      readTime: "4 min read"
    },
    { 
      id: 4, 
      title: "Sports Tournament Results", 
      date: "10 Aug 2025", 
      desc: "Congratulations to all participants of the annual inter-department sports tournament. Check out the winners and highlights.",
      category: "sports",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      author: "Sports Committee",
      readTime: "2 min read"
    },
    { 
      id: 5, 
      title: "Scholarship Opportunities Available", 
      date: "5 Aug 2025", 
      desc: "Multiple scholarship opportunities are now available for students. Application deadline is September 30, 2025.",
      category: "opportunities",
      image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      author: "Student Welfare",
      readTime: "3 min read"
    },
    { 
      id: 6, 
      title: "Cultural Night Performance Registrations Open", 
      date: "1 Aug 2025", 
      desc: "Registrations for Cultural Night performances are now open. Showcase your talent in music, dance, or drama.",
      category: "events",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      author: "Cultural Committee",
      readTime: "2 min read"
    }
  ];

  const categories = [
    { id: "all", name: "All News" },
    { id: "events", name: "Events" },
    { id: "workshops", name: "Workshops" },
    { id: "announcements", name: "Announcements" },
    { id: "sports", name: "Sports" },
    { id: "opportunities", name: "Opportunities" }
  ];

  const filteredNews = activeCategory === "all" 
    ? newsList 
    : newsList.filter(news => news.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with categories in top right */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              Campus <span className="text-yellow-500">News</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Stay updated with the latest happenings, events, and opportunities at our college
            </p>
          </div>
          
          {/* Category Filter - positioned top right */}
          <div className="flex flex-wrap gap-3 self-stretch justify-end">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredNews.map(news => (
            <div
              key={news.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {news.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <span>{news.date}</span>
                  <span className="mx-2">•</span>
                  <span>{news.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">{news.title}</h2>
                <p className="text-gray-600 mb-4">{news.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {news.author}</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No News Message */}
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">📰</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No news found</h3>
            <p className="text-gray-600">There are no news items in this category at the moment.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss important announcements, events, or opportunities.
          </p>
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

        {/* Archive Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">News Archive</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {["July 2025", "June 2025", "May 2025", "April 2025", "March 2025", "February 2025"].map(month => (
                <a
                  key={month}
                  href="#"
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <span className="text-gray-700">{month}</span>
                  <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full">12 news</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}