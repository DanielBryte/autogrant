"use client";
import { useState } from "react";

export default function AutoGrantHeroHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-emerald-600 md:min-h-screen">
      {/* Navbar */}
      <nav className="w-full md:py-4 md:px-6">
        <div className="max-w-7xl bg-white  md:rounded-full shadow-lg p-4 md:my-4 md:mx-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <div className="rounded-full mr-2 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="AutoGrant Logo"
                    className="w-8 h-8"
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800">
                  AutoGrant.ng
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 font-bold hover:text-emerald-600">
                Home
              </a>
              <a
                href="/features"
                className="text-gray-700 font-bold hover:text-emerald-600"
              >
                Features
              </a>
              <a href="/about" className="text-gray-700 font-bold hover:text-emerald-600">
                About
              </a>
              <a
                href="/contact"
                className="text-gray-700 font-bold hover:text-emerald-600"
              >
                Contact Us
              </a>
            </div>

            {/* Desktop Login/Signup */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="/login" className="text-gray-700 font-bold hover:text-emerald-600">
                Log in
              </a>
              <a
                href="/signup"
                className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition duration-300"
              >
                Sign Up Free
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden px-2 mt-4 pt-4 border-t border-gray-200">
              <div className="flex  flex-col space-y-4 pb-3">
                <a href="/" className="text-gray-700 hover:text-emerald-600">
                  Home
                </a>
                <a
                  href="/features"
                  className="text-gray-700 hover:text-emerald-600"
                >
                  Features
                </a>
                <a
                  href="/about"
                  className="text-gray-700 hover:text-emerald-600"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-emerald-600"
                >
                  Contact Us
                </a>
              </div>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <a
                  href="/login"
                  className="text-gray-700 hover:text-emerald-600"
                >
                  Log in
                </a>
                <a
                  href="/signup"
                  className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition duration-300"
                >
                  Sign Up Free
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-2 text-white/80 flex justify-center items-center">
            <span className="text-sm text-[#00FFC2] font-medium italic">
              AI-powered assistant
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white relative leading-snug">
            <span className="absolute left-4 md:left-45 -top-4 text-white text-3xl md:text-4xl">
              ✦
            </span>
            Start, manage, and complete{" "}
            <span className="hidden md:inline">
              <br />{" "}
            </span>
            grants easily with AutoGrant AI
            <span className="absolute -bottom-5 text-[#00FFC2] text-lg md:text-2xl">
              ✦
            </span>
          </h1>

          <p className="text-white/90 mb-8">
            One tap, one click access to all grants
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="relative bg-white rounded-full">
              <input
                type="text"
                placeholder="Find the latest grant programs you can apply to..."
                className="w-full px-6 py-4 md:py-5 text-gray-800 rounded-full shadow-md focus:outline-none"
              />
              <button className="absolute right-2 top-2 bg-emerald-600 text-white p-2.5 md:p-4 rounded-full hover:bg-emerald-700 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="relative">
        <div className=" max-w-6xl mx-auto px-6">
          <div className="rounded-t-lg shadow-lg overflow-hidden">
            <img
              src="/dashboard.png"
              alt="AutoGrant Dashboard Preview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>




    </div>
  );
}
