import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 shadow-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand Name */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <span className="text-blue-600 font-bold text-lg">SW</span>
          </div>
          <h1 className="text-2xl font-bold tracking-wide hidden sm:block">
            Student Wing
          </h1>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-4 text-base font-medium">
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About" />
          <NavLink to="/events" label="Events" />
          <NavLink to="/gallery" label="Gallery" />
          <NavLink to="/team" label="Team" />
          <NavLink to="/resources" label="Resources" />
          <NavLink to="/news" label="News" />
          <NavLink to="/alumni" label="Alumni" />
          <NavLink to="/contact" label="Contact" />
          
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 pb-4">
          <div className="grid grid-cols-2 gap-2">
            <MobileNavLink to="/" label="Home" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/about" label="About" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/events" label="Events" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/gallery" label="Gallery" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/team" label="Team" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/resources" label="Resources" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/news" label="News" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/alumni" label="Alumni" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/contact" label="Contact" onClick={() => setIsOpen(false)} />
            <Link
              to="/registration"
              onClick={() => setIsOpen(false)}
              className="col-span-2 bg-yellow-400 text-blue-600 text-center px-4 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors mt-2"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// Component for desktop navigation links
function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      className="px-3 py-2 rounded-md hover:bg-blue-500 transition-colors relative group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
    </Link>
  );
}

// Component for mobile navigation links
function MobileNavLink({ to, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="px-4 py-3 rounded-md hover:bg-blue-500 transition-colors text-center"
    >
      {label}
    </Link>
  );
}