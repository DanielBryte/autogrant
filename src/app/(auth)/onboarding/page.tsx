"use client";
import { useState } from "react";

export default function OnboardingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    businessNumber: "",
    businessEmail: "",
    website: "",
    industry: "",
    role: "",
    businessDescription: ""
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission - redirect to dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 bg-white p-8 lg:p-16 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Welcome To AutoGrant
            </h1>
            <p className="text-gray-600 text-lg">
              Set up your business profile
            </p>
          </div>

          <div className="space-y-6">
            {/* First Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Raye"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Max"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Business Name and Number Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  placeholder="Raye Energy"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="businessNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Number
                </label>
                <input
                  type="text"
                  id="businessNumber"
                  name="businessNumber"
                  placeholder="+234-801-000-000"
                  value={formData.businessNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Business Email and Website Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  id="businessEmail"
                  name="businessEmail"
                  placeholder="info@tesla.com"
                  value={formData.businessEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="www.autogrant.ng"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Industry and Role Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-gray-700 bg-white appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em'
                  }}
                >
                  <option value="">Select business industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="education">Education</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="energy">Energy</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  Role/Position
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="CEO and Founder"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Business Description */}
            <div>
              <label htmlFor="businessDescription" className="block text-sm font-medium text-gray-700 mb-2">
                Business Description
              </label>
              <textarea
                id="businessDescription"
                name="businessDescription"
                placeholder="Write a short detail about your business"
                value={formData.businessDescription}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 placeholder-gray-400 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Continue to Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Brand section */}
      <div 
        className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 relative overflow-hidden"
        style={{
          backgroundImage: 'url("/images/auth-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Content - Modified to align at top left */}
        <div className="relative z-10 p-16 flex flex-col justify-start text-white">
          {/* Logo */}
          <div className="flex items-center mb-8">
                <div className="-mb-1 mr-2 flex items-center justify-center">
                  <img
                    src="/logo2.png"
                    alt="AutoGrant Logo"
                    className="w-8 h-8"
                  />
                </div>
            <span className="text-xl font-semibold">AutoGrant.ng</span>
          </div>

          {/* Main text */}
          <div className="max-w-lg">
            <h2 className="text-4xl text-[#D2FFF4] lg:text-5xl font-serif italic leading-normal mb-4">
              Start and complete grants easily <br></br> with AutoGrant AI
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}