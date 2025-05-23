"use client";
import { useState } from "react";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleAuthAction = () => {
    // Redirect to onboarding page
    window.location.href = "/onboarding";
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
              <button onClick={openAuthModal} className="text-gray-700 font-bold hover:text-emerald-600">
                Log in
              </button>
              <button
                onClick={openAuthModal}
                className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition duration-300"
              >
                Sign Up Free
              </button>
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
                <button
                  onClick={openAuthModal}
                  className="text-gray-700 hover:text-emerald-600"
                >
                  Log in
                </button>
                <button
                  onClick={openAuthModal}
                  className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition duration-300"
                >
                  Sign Up Free
                </button>
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
            <span className="absolute left-0 md:left-45 -top-4 text-white text-xl md:text-4xl">
              ✦
            </span>
            Start, manage, and complete{" "}
            <span className="hidden md:inline">
              <br />{" "}
            </span>
            grants easily with AutoGrant AI
            <span className="absolute bottom-0 md:-bottom-5 text-[#00FFC2] text-base md:text-2xl">
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

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={closeAuthModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
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
            </button>

            {/* Modal Content */}
            <div className="text-center mb-6">
                <div className="rounded-full mr-2 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="AutoGrant Logo"
                    className="w-8 h-8"
                  />
                </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Welcome to AutoGrant
              </h2>
              <p className="text-gray-600">
                One tap, one click access to all grants
              </p>
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="hello@autogrant.ng"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Login Button */}
            <button
              onClick={handleAuthAction}
              className="w-full cursor-pointer bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition duration-300 mb-4"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center mb-4">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">or</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Google Login Button */}
            <button
              onClick={handleAuthAction}
              className="w-full border cursor-pointer border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition duration-300 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="mr-2"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            {/* Terms */}
            <p className="text-xs text-gray-500 text-center mt-4">
              By continuing you agree to AutoGrant{" "}
              <a href="#" className="text-emerald-600 hover:underline">
                terms
              </a>{" "}
              and{" "}
              <a href="#" className="text-emerald-600 hover:underline">
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
}