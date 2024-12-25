import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
export default function Navbar() {
  const logo = "/assets/Logo.svg";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-4 lg:px-5 py-3 lg:py-0 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex-shrink-0">
        <img src={logo} alt="Logo" className="h-10" />
        </Link>
        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="fas fa-bars"></span>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex items-center space-x-4 transition-all duration-300 ease-in-out`}
        >
          <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">
            Home
          </Link>
          <Link to="/about-us" className="text-gray-700 hover:text-gray-900 font-medium">
            About
          </Link>
          <Link to="/booking" className="text-gray-700 hover:text-gray-900 font-medium">
            Booking
          </Link>
          <Link
            to="/login"
            className="btn bg-blue-600 text-white rounded-full py-2 px-4 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="btn bg-blue-600 text-white rounded-full py-2 px-4 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
