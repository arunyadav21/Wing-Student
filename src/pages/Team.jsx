
import AboutImg from "../assets/Arun1.jpg";

export default function Team() {
  // Removed unused state variable 'activeMember'

  const members = [
    { 
      name: "Arun Yadav", 
      role: "President", 
      img: AboutImg,
      bio: "Leading the Student Wing with vision and dedication. Passionate about student development and community building.",
      social: {
        linkedin: "linkedin.com/in/arun-yadav",
        instagram: "travelwitharun1",
        email: "officialarun8565@gmail.com"
      }
    },
    { 
      name: "Basant", 
      role: "Vice President", 
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      bio: "Supporting the President in all initiatives and focusing on event management and member engagement.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:basant@studentwing.org"
      }
    },
    { 
      name: "Ravi Kumar", 
      role: "Secretary", 
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      bio: "Managing communications, documentation, and ensuring smooth operations of all Student Wing activities.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:ravi@studentwing.org"
      }
    },
    { 
      name: "Priya Sharma", 
      role: "Treasurer", 
      img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      bio: "Managing finances and budgets for all Student Wing events and initiatives.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:priya@studentwing.org"
      }
    },
    { 
      name: "Amit Singh", 
      role: "Technical Head", 
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      bio: "Leading technical workshops and managing all tech-related events and competitions.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:amit@studentwing.org"
      }
    },
    { 
      name: "Neha Gupta", 
      role: "Cultural Head", 
      img: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      bio: "Organizing cultural events and promoting artistic expression within the student community.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:neha@studentwing.org"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Meet Our <span className="text-yellow-500">Team</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Dedicated students working together to create amazing experiences and opportunities for the community
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              // Removed onMouseEnter and onMouseLeave handlers since activeMember is unused
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm mb-2">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a href={member.social.linkedin} className="bg-blue-600 hover:bg-blue-700 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href={member.social.twitter} className="bg-blue-400 hover:bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a href={member.social.email} className="bg-gray-600 hover:bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h2>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to Join Our Team?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            We're always looking for passionate students to help us create amazing experiences for the community.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors">
            Apply Now
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Events Organized</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Students Impacted</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
            <div className="text-gray-600">Collaborations</div>
          </div>
        </div>
      </div>
    </div>
  );
}