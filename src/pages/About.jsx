import { useState, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const objectives = [
    {
      icon: "🎭",
      title: "Organize Events",
      description: "Cultural and technical events to enhance student experience"
    },
    {
      icon: "👑",
      title: "Promote Leadership",
      description: "Developing leadership qualities and teamwork skills"
    },
    {
      icon: "📚",
      title: "Career Guidance",
      description: "Mentorship programs and career counseling"
    },
    {
      icon: "🌐",
      title: "Networking",
      description: "Connecting students with alumni and industry professionals"
    }
  ];

  const stats = [
    { value: "50+", label: "Events Yearly" },
    { value: "1000+", label: "Active Members" },
    { value: "200+", label: "Alumni Network" },
    { value: "95%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            About <span className="text-yellow-500">Student Wing</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            The Student Wing is a student-led initiative in our college that works for the 
            betterment of students. We organize events, provide mentorship, and act as 
            a bridge between students, faculty, and alumni to create a holistic educational experience.
          </p>
        </div>

        {/* Objectives Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Our Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((obj, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{obj.icon}</div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{obj.title}</h3>
                <p className="text-gray-600">{obj.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-blue-600">Our Mission</h3>
            </div>
            <p className="text-gray-700">
              To empower students through innovative programs, mentorship opportunities, and 
              a supportive community that fosters both personal and professional growth.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-blue-600">Our Vision</h3>
            </div>
            <p className="text-gray-700">
              To create a dynamic learning environment where every student can discover their 
              potential, develop essential skills, and become future-ready leaders in their chosen fields.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Want to get involved?</h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:scale-105">
            Join Student Wing
          </button>
        </div>
      </div>
    </div>
  );
}