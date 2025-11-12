import { useState } from "react";

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [savedResources, setSavedResources] = useState([]);
  const [email, setEmail] = useState("");
  const [downloadStatus, setDownloadStatus] = useState({});

  const resources = [
    {
      id: 1,
      title: "Computer Science E-Books",
      category: "ebooks",
      description: "Comprehensive collection of programming and computer science textbooks",
      icon: "📚",
      count: "120+ Books",
      link: "#"
    },
    {
      id: 2,
      title: "Engineering Workshops",
      category: "workshops",
      description: "Recorded sessions from technical workshops and hands-on training",
      icon: "🔧",
      count: "45+ Videos",
      link: "#"
    },
    {
      id: 3,
      title: "Career Counseling",
      category: "career",
      description: "Get mentorship from alumni and professionals in various fields",
      icon: "🎯",
      count: "30+ Mentors",
      link: "#"
    },
    {
      id: 4,
      title: "Study Notes",
      category: "study",
      description: "Curated notes from top students across all departments",
      icon: "📝",
      count: "200+ Documents",
      link: "#"
    },
    {
      id: 5,
      title: "Project Ideas",
      category: "projects",
      description: "Innovative project ideas with guidelines and resources",
      icon: "💡",
      count: "80+ Ideas",
      link: "#"
    },
    {
      id: 6,
      title: "Interview Preparation",
      category: "career",
      description: "Resources to help you ace your technical and HR interviews",
      icon: "📊",
      count: "150+ Questions",
      link: "#"
    }
  ];

  const categories = [
    { id: "all", name: "All Resources", icon: "🌟" },
    { id: "ebooks", name: "E-Books", icon: "📚" },
    { id: "workshops", name: "Workshops", icon: "🔧" },
    { id: "career", name: "Career Guidance", icon: "🎯" },
    { id: "study", name: "Study Materials", icon: "📝" },
    { id: "projects", name: "Projects", icon: "💡" }
  ];

  // Filter resources based on category and search query
  const filteredResources = (activeCategory === "all" 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory))
    .filter(resource => 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  // Toggle resource save status
  const toggleSaveResource = (resourceId) => {
    if (savedResources.includes(resourceId)) {
      setSavedResources(savedResources.filter(id => id !== resourceId));
    } else {
      setSavedResources([...savedResources, resourceId]);
    }
  };

  // Handle resource exploration
  const handleExploreResource = (resourceTitle) => {
    alert(`Exploring resource: ${resourceTitle}\nIn a real application, this would open the resource.`);
  };

  // Handle featured resource download
  const handleDownloadFeatured = () => {
    // Show downloading status
    setDownloadStatus({ isDownloading: true, message: "Preparing your download..." });
    
    // Create a PDF with interview questions (simulated)
    // In a real application, you would fetch the PDF from your server
    // For this example, we'll simulate the download
    setTimeout(() => {
      // Create a temporary anchor element for download
      const a = document.createElement('a');
      <a href="https://careerdefiner.com/resources/technical-interview-questions.pdf" 
  download="Technical-Interview-Questions-Part1.pdf"
>
  Download 200 Questions PDF
</a>

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      // Update status message
      setDownloadStatus({ 
        isDownloading: true, 
        message: "Download complete! Check your downloads folder.",
        success: true 
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setDownloadStatus({});
      }, 5000);
    }, 1500);
  };

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}\nYou will receive updates about new resources.`);
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Learning <span className="text-yellow-500">Resources</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Explore our curated collection of study materials, e-books, workshops, and career guidance resources
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-blue-100 shadow-md"
              }`}
            >
              <span className="text-xl mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-6 py-4 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit"
              className="absolute right-2 top-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </form>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredResources.map(resource => (
            <div
              key={resource.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{resource.icon}</div>
                  <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {resource.count}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleExploreResource(resource.title)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Explore
                  </button>
                  <button 
                    onClick={() => toggleSaveResource(resource.id)}
                    className={`p-2 rounded-full ${savedResources.includes(resource.id) ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Resource */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Featured Resource</h2>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">200+ Technical Interview Questions</h3>
              <p className="mb-4">Comprehensive collection of technical interview questions with solutions covering:</p>
              <ul className="mb-6 list-disc list-inside text-blue-100">
                <li>Data Structures & Algorithms</li>
                <li>System Design Concepts</li>
                <li>Problem Solving Techniques</li>
                <li>Coding Best Practices</li>
              </ul>
              <button 
                onClick={handleDownloadFeatured}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download 200 Questions PDF
              </button>
              {downloadStatus.isDownloading && (
                <p className={`mt-3 text-sm ${downloadStatus.success ? 'text-green-300' : 'text-yellow-200'}`}>
                  {downloadStatus.message}
                </p>
              )}
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-white text-blue-600 p-8 rounded-xl shadow-lg text-center">
                <div className="text-5xl mb-4">📘</div>
                <p className="font-semibold">200+ Questions</p>
                <p className="text-sm">With detailed solutions</p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-700">PDF - 2.4MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get New Resources Directly</h2>
          <p className="text-gray-600 mb-6">Subscribe to our newsletter and receive updates when new resources are added</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}