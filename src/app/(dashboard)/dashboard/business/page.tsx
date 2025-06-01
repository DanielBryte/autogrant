"use client"
import React, { useState } from 'react';
import { 
  FileText, 
  Upload,
  ChevronDown,
} from 'lucide-react';

const BusinessPage = () => {
  const [currentTab, setCurrentTab] = useState('Business Overview');
  
  // Form state for all tabs
  const [businessData, setBusinessData] = useState({
    // Business Overview
    businessName: 'Acme Tech Solutions',
    legalBusinessName: 'Acme Tech Groups',
    businessType: '',
    industry: 'Fintech',
    businessWebsite: 'https://acme.io',
    yearFounded: '2023',
    businessDescription: 'We help small businesses automate bookkeeping..',
    
    // Business Details
    businessEmail: 'hello@acme.io',
    businessNumber: '+1 555 123 4567',
    countryOfOperation: 'Nigeria',
    cityRegion: 'Lagos',
    businessAddress: '123 5th Avenue, Lagos, Nigeria',
    socialEnvironmentalImpact: 'Reduced emissions by 20% in rural areas...',
    targetAudience: 'SMEs in sub-Saharan Africa',
    keyAchievements: 'Launched MVP, reached 1,000 users',
    missionStatement: 'We aim to democratize access to clean energy...',
    
    // Ownership Details
    businessOwnerName: 'Jane Doe',
    ownerPhoneNumber: '+1 555 123 4567',
    ownerNationality: 'Nigeria',
    roleTitle: 'CTO',
    gender: 'Male',
    numberOfFounders: 'Launched MVP, reached 1,000 users',
    ownershipPercentage: 'If multiple founders, list them with their % of ownership',
    
    // Financials
    totalRevenue: '$150,000',
    monthlyRevenue: '$12,500',
    numberOfEmployees: '5',
    fundingRaised: 'No',
    fundingRound: "Haven't raised yet",
    usersCustomers: '12',
    partnerships: 'We have partnered with Stanford University for research sake...',
    
    // Business Needs
    registeredBusiness: 'Yes',
    registrationNumber: 'CAC1234567',
    grantAmountNeeded: '5',
    businessStage: "Haven't raised yet",
    primaryFundingGoal: 'We have partnered with Stanford University for research sake...'
  });

  const updateBusinessData = (field: string, value: string) => {
    setBusinessData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const tabs = [
    'Business Overview',
    'Business Details', 
    'Ownership Details',
    'Financials',
    'Business Needs',
    'Documents'
  ];
  const renderBusinessOverview = () => (
    <div className="bg-white rounded-lg shadow-sm p-8">
      {/* Business Logo Section */}
      <div className="mb-8">
        <div className="flex items-start space-x-6">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">DC</span>
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-medium text-gray-900 mb-1">Business logo</h3>
            <p className="text-sm text-gray-500 mb-3">Support PNGs, JPEGs and GIFs under 10mb</p>
            <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800">
              <Upload className="w-4 h-4" />
              <span>Upload new photo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Name*
          </label>
          <input
            type="text"
            value={businessData.businessName}
            onChange={(e) => updateBusinessData('businessName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="Acme Tech Solutions"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Legal Business Name (if different/registered)
          </label>
          <input
            type="text"
            value={businessData.legalBusinessName}
            onChange={(e) => updateBusinessData('legalBusinessName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="Acme Tech Groups"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Type*
          </label>
          <div className="relative">
            <select
              value={businessData.businessType}
              onChange={(e) => updateBusinessData('businessType', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white appearance-none"
            >
              <option value="">Select business type</option>
              <option value="LLC">LLC</option>
              <option value="Corporation">Corporation</option>
              <option value="Partnership">Partnership</option>
              <option value="Sole Proprietorship">Sole Proprietorship</option>
              <option value="Non-Profit">Non-Profit</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Industry*
          </label>
          <div className="relative">
            <select
              value={businessData.industry}
              onChange={(e) => updateBusinessData('industry', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white appearance-none"
            >
              <option value="">Select industry</option>
              <option value="Fintech">Fintech</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Technology">Technology</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Retail">Retail</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Energy">Energy</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Website
          </label>
          <input
            type="url"
            value={businessData.businessWebsite}
            onChange={(e) => updateBusinessData('businessWebsite', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="https://acme.io"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Year Founded*
          </label>
          <input
            type="number"
            value={businessData.yearFounded}
            onChange={(e) => updateBusinessData('yearFounded', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="2023"
            min="1900"
            max="2025"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Business description*
        </label>
        <textarea
          value={businessData.businessDescription}
          onChange={(e) => updateBusinessData('businessDescription', e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
          placeholder="We help small businesses automate bookkeeping.."
        />
      </div>
    </div>
  );

  const renderBusinessDetails = () => (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Email*
          </label>
          <input
            type="email"
            value={businessData.businessEmail}
            onChange={(e) => updateBusinessData('businessEmail', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="hello@acme.io"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Number*
          </label>
          <input
            type="tel"
            value={businessData.businessNumber}
            onChange={(e) => updateBusinessData('businessNumber', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="+1 555 123 4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country of Operation*
          </label>
          <div className="relative">
            <select
              value={businessData.countryOfOperation}
              onChange={(e) => updateBusinessData('countryOfOperation', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white appearance-none"
            >
              <option value="">Select country</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
              <option value="Kenya">Kenya</option>
              <option value="South Africa">South Africa</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City/Region*
          </label>
          <div className="relative">
            <select
              value={businessData.cityRegion}
              onChange={(e) => updateBusinessData('cityRegion', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white appearance-none"
            >
              <option value="">Select city/region</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Kano">Kano</option>
              <option value="Port Harcourt">Port Harcourt</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Address
          </label>
          <input
            type="text"
            value={businessData.businessAddress}
            onChange={(e) => updateBusinessData('businessAddress', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="123 5th Avenue, Lagos, Nigeria"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Social/Environmental Impact
          </label>
          <input
            type="text"
            value={businessData.socialEnvironmentalImpact}
            onChange={(e) => updateBusinessData('socialEnvironmentalImpact', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="Reduced emissions by 20% in rural areas..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Audience/Customers*
          </label>
          <input
            type="text"
            value={businessData.targetAudience}
            onChange={(e) => updateBusinessData('targetAudience', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="SMEs in sub-Saharan Africa"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Key Achievements*
          </label>
          <input
            type="text"
            value={businessData.keyAchievements}
            onChange={(e) => updateBusinessData('keyAchievements', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="Launched MVP, reached 1,000 users"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mission Statement*
        </label>
        <textarea
          value={businessData.missionStatement}
          onChange={(e) => updateBusinessData('missionStatement', e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
          placeholder="We aim to democratize access to clean energy..."
        />
      </div>
    </div>
  );

  const renderOwnershipDetails = () => (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Owner Name*
          </label>
          <input
            type="text"
            value={businessData.businessOwnerName}
            onChange={(e) => updateBusinessData('businessOwnerName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="Jane Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone number
          </label>
          <input
            type="tel"
            value={businessData.ownerPhoneNumber}
            onChange={(e) => updateBusinessData('ownerPhoneNumber', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="+1 555 123 4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Owner Nationality
          </label>
          <div className="relative">
            <select
              value={businessData.ownerNationality}
              onChange={(e) => updateBusinessData('ownerNationality', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white appearance-none"
            >
              <option value="">Select nationality</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
              <option value="Kenya">Kenya</option>
              <option value="South Africa">South Africa</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Role/Title*
          </label>
          <div className="relative">
            <select
              value={businessData.roleTitle}
              onChange={(e) => updateBusinessData('roleTitle', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white appearance-none"
            >
              <option value="">Select role</option>
              <option value="CEO">CEO</option>
              <option value="CTO">CTO</option>
              <option value="COO">COO</option>
              <option value="Founder">Founder</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender*
          </label>
          <div className="relative">
            <select
              value={businessData.gender}
              onChange={(e) => updateBusinessData('gender', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white appearance-none"
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How many founders*
          </label>
          <input
            type="text"
            value={businessData.numberOfFounders}
            onChange={(e) => updateBusinessData('numberOfFounders', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="Launched MVP, reached 1,000 users"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          % Ownership by Founder(s)
        </label>
        <textarea
          value={businessData.ownershipPercentage}
          onChange={(e) => updateBusinessData('ownershipPercentage', e.target.value)}
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
          placeholder="If multiple founders, list them with their % of ownership"
        />
      </div>
    </div>
  );

  const renderFinancials = () => (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How much revenue have you made so far?*
          </label>
          <input
            type="text"
            value={businessData.totalRevenue}
            onChange={(e) => updateBusinessData('totalRevenue', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="$150,000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How much revenue do you make every month?
          </label>
          <input
            type="text"
            value={businessData.monthlyRevenue}
            onChange={(e) => updateBusinessData('monthlyRevenue', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="$12,500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Employees*
          </label>
          <div className="relative">
            <select
              value={businessData.numberOfEmployees}
              onChange={(e) => updateBusinessData('numberOfEmployees', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white appearance-none"
            >
              <option value="">Select number</option>
              <option value="1-5">1-5</option>
              <option value="6-10">6-10</option>
              <option value="11-25">11-25</option>
              <option value="26-50">26-50</option>
              <option value="50+">50+</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Funding Raised (if any)*
          </label>
          <div className="relative">
            <select
              value={businessData.fundingRaised}
              onChange={(e) => updateBusinessData('fundingRaised', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white appearance-none"
            >
              <option value="">Select option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Funding round*
          </label>
          <div className="relative">
            <select
              value={businessData.fundingRound}
              onChange={(e) => updateBusinessData('fundingRound', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white appearance-none"
            >
              <option value="">Select round</option>
              <option value="Haven't raised yet">Haven't raised yet</option>
              <option value="Pre-seed">Pre-seed</option>
              <option value="Seed">Seed</option>
              <option value="Series A">Series A</option>
              <option value="Series B">Series B</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How many users or customers have you acquired since launch?
          </label>
          <input
            type="text"
            value={businessData.usersCustomers}
            onChange={(e) => updateBusinessData('usersCustomers', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="12"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Feel free to include details about any key partnerships or agreements signed or in view.
        </label>
        <textarea
          value={businessData.partnerships}
          onChange={(e) => updateBusinessData('partnerships', e.target.value)}
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
          placeholder="We have partnered with Stanford University for research sake..."
        />
      </div>
    </div>
  );

 // Complete renderBusinessNeeds function (add this after line where it was cut off)
  const renderBusinessNeeds = () => (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Registered Business?
          </label>
          <div className="relative">
            <select
              value={businessData.registeredBusiness}
              onChange={(e) => updateBusinessData('registeredBusiness', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white appearance-none"
            >
              <option value="">Select option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Registration Number
          </label>
          <input
            type="text"
            value={businessData.registrationNumber}
            onChange={(e) => updateBusinessData('registrationNumber', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="CAC1234567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Grant Amount Needed
          </label>
          <input
            type="text"
            value={businessData.grantAmountNeeded}
            onChange={(e) => updateBusinessData('grantAmountNeeded', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business stage
          </label>
          <div className="relative">
            <select
              value={businessData.businessStage}
              onChange={(e) => updateBusinessData('businessStage', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white appearance-none"
            >
              <option value="">Select stage</option>
              <option value="Haven't raised yet">Haven't raised yet</option>
              <option value="Pre-seed">Pre-seed</option>
              <option value="Seed">Seed</option>
              <option value="Series A">Series A</option>
              <option value="Series B">Series B</option>
            </select>
            <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Primary Funding Goal
        </label>
        <textarea
          value={businessData.primaryFundingGoal}
          onChange={(e) => updateBusinessData('primaryFundingGoal', e.target.value)}
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
          placeholder="We have partnered with Stanford University for research sake..."
        />
      </div>
    </div>
  );

  // Add renderDocuments function
  const renderDocuments = () => (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Business Registration Certificate */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Business Registration Certificate(CAC)
          </h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
            <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">Drag and drop file here</p>
              <p className="text-xs text-gray-500">File format: PDF, docx, PNG, JPEG</p>
              <button className="inline-flex items-center px-4 py-2 bg-teal-50 text-teal-600 text-sm font-medium rounded-md hover:bg-teal-100 transition-colors">
                Choose File
              </button>
              <p className="text-xs text-gray-400">Max size: 5MB</p>
            </div>
          </div>
        </div>

        {/* Pitch Deck */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Pitch Deck
          </h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
            <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">Drag and drop file here</p>
              <p className="text-xs text-gray-500">File format: PDF, docx, PNG, JPEG</p>
              <button className="inline-flex items-center px-4 py-2 bg-teal-50 text-teal-600 text-sm font-medium rounded-md hover:bg-teal-100 transition-colors">
                Choose File
              </button>
              <p className="text-xs text-gray-400">Max size: 5MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Add the main render function content that handles tab switching
  const renderTabContent = () => {
    switch (currentTab) {
      case 'Business Overview':
        return renderBusinessOverview();
      case 'Business Details':
        return renderBusinessDetails();
      case 'Ownership Details':
        return renderOwnershipDetails();
      case 'Financials':
        return renderFinancials();
      case 'Business Needs':
        return renderBusinessNeeds();
      case 'Documents':
        return renderDocuments();
      default:
        return renderBusinessOverview();
    }
  };

  // Main component return
  return (
    <div className="min-h-screen bg-gray-50 flex">
      

      {/* Main Content */}
      <div className="flex-1 overflow-auto">

        {/* Page Content */}
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">My Business Profile</h1>
            <p className="text-gray-600">
              Here you provide all information to aid the AutoGrant AI tailor your grant applications
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setCurrentTab(tab)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      currentTab === tab
                        ? 'border-teal-500 text-teal-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          {renderTabContent()}

          {/* Save Button */}
          <div className="mt-8">
            <button className="w-full bg-teal-600 text-white py-3 px-4 rounded-md font-medium hover:bg-teal-700 transition-colors">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;