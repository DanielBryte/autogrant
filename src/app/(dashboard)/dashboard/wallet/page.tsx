"use client";
import React, { useState } from 'react';
import { ChevronRight, Check, X, Plus, Download, Menu } from 'lucide-react';

const WalletInterface = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const transactions = [
    { date: '27, April, 2025 08:45', type: 'Withdraw', amount: '$5,000.00', status: 'Completed', description: 'Grant withdraw' },
    { date: '27, April, 2025 08:45', type: 'Withdraw', amount: '$5,000.00', status: 'Cancelled', description: 'Grant withdraw' },
    { date: '27, April, 2025 08:45', type: 'Withdraw', amount: '$5,000.00', status: 'Pending', description: 'Grant withdraw' },
    { date: '27, April, 2025 08:45', type: 'Withdraw', amount: '$5,000.00', status: 'Cancelled', description: 'Grant withdraw' },
    { date: '27, April, 2025 08:45', type: 'Withdraw', amount: '$5,000.00', status: 'Completed', description: 'Grant withdraw' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-[#4ABAD3] bg-[#4ABAD3]/10';
      case 'Cancelled': return 'text-red-600 bg-red-50';
      case 'Pending': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-[#4ABAD3]';
      case 'Cancelled': return 'bg-red-500';
      case 'Pending': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const handleMilestoneClick = () => {
    window.location.href = '/dashboard/milestones';
  };

  const handleTaxClick = () => {
    // Placeholder for navigation
    console.log('Navigate to tax setup');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile-first padding */}
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1 sm:mb-2">My Wallet</h1>
          <p className="text-sm sm:text-base text-gray-600">Manage your grant disbursement</p>
        </div>

        {/* Business Verification Banner */}
        {!isVerified && (
          <div className="bg-gradient-to-r from-[#1A9B7C] to-[#1E9478] rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 text-white">
            <h2 className="text-sm sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4 leading-tight">
              BUSINESS VERIFICATION - Complete information below to access your grant funds
            </h2>
            
            <div className="space-y-3 sm:space-y-4">
              {/* Completed item */}
              <div className="flex items-start sm:items-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 sm:mt-0">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" />
                </div>
                <span className="text-sm sm:text-base leading-relaxed">Add your business account number</span>
              </div>
              
              {/* Pending items with action buttons */}
              <div className="space-y-3">
                <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start sm:items-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 sm:mt-0">
                      <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base leading-relaxed">Add your business milestones</span>
                  </div>
                  <button 
                    onClick={handleMilestoneClick} 
                    className="flex items-center justify-center sm:justify-start text-white hover:opacity-80 transition-opacity text-sm sm:text-base ml-8 sm:ml-0 bg-white/20 sm:bg-transparent rounded-md py-2 px-3 sm:p-0 font-medium sm:font-normal"
                  >
                    <span className="mr-1">Add milestones</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start sm:items-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 sm:mt-0">
                      <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base leading-relaxed">Add your tax identification number</span>
                  </div>
                  <button 
                    onClick={handleTaxClick} 
                    className="flex items-center justify-center sm:justify-start text-white hover:opacity-80 transition-opacity text-sm sm:text-base ml-8 sm:ml-0 bg-white/20 sm:bg-transparent rounded-md py-2 px-3 sm:p-0 font-medium sm:font-normal"
                  >
                    <span className="mr-1">Add TIN number</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Balance Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">Total Balance</h3>
              <div className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-2 sm:mb-0">
                {isVerified ? '$10,000.09' : '$0'}
              </div>
              {isVerified && (
                <p className="text-emerald-600 text-xs sm:text-sm mt-1 sm:mt-2">Withdrawals unlocks by milestones reach</p>
              )}
            </div>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 sm:px-6 py-3 rounded-lg flex items-center justify-center transition-colors text-sm sm:text-base font-medium w-full sm:w-auto">
              <Download className="w-4 h-4 mr-2" />
              Withdraw
            </button>
          </div>
        </div>

        {/* Demo Toggle Button */}
        <div className="mb-6 sm:mb-8">
          <button
            onClick={() => setIsVerified(!isVerified)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm w-auto"
          >
            Toggle to {isVerified ? 'Unverified' : 'Verified'} State
          </button>
        </div>

        {/* Transactions Section */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
              <h3 className="text-lg font-medium text-gray-900">Transactions</h3>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                <select className="text-sm border border-gray-300 rounded-md px-2 sm:px-3 py-1 bg-white flex-1 sm:flex-none min-w-0">
                  <option>Most recent</option>
                  <option>Oldest first</option>
                  <option>Amount high to low</option>
                  <option>Amount low to high</option>
                </select>
              </div>
            </div>
          </div>

          {/* Desktop Table Header */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-4 px-6 py-3 bg-gray-50 text-sm font-medium text-gray-700 border-b border-gray-200">
            <div>Date</div>
            <div>Type</div>
            <div>Amount</div>
            <div>Status</div>
            <div>Description</div>
            <div></div>
          </div>

          {/* Transactions List */}
          <div className="divide-y divide-gray-200">
            {transactions.map((transaction, index) => (
              <div key={index} className="px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors">
                {/* Desktop View */}
                <div className="hidden lg:grid lg:grid-cols-6 gap-4 items-center">
                  <div className="text-sm text-gray-900">{transaction.date}</div>
                  <div className="text-sm text-gray-900">{transaction.type}</div>
                  <div className="text-sm font-medium text-gray-900">{transaction.amount}</div>
                  <div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                      <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${getStatusDot(transaction.status)}`}></div>
                      {transaction.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">{transaction.description}</div>
                  <div className="flex justify-end">
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Mobile & Tablet View */}
                <div className="lg:hidden">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 mb-1">{transaction.type}</div>
                      <div className="text-xs sm:text-sm text-gray-600 truncate">{transaction.description}</div>
                    </div>
                    <div className="flex flex-col items-end ml-4">
                      <div className="text-sm font-medium text-gray-900 mb-1">{transaction.amount}</div>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                        <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${getStatusDot(transaction.status)}`}></div>
                        {transaction.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs sm:text-sm text-gray-500">{transaction.date}</div>
                    <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="px-4 sm:px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <button 
              className="flex items-center text-sm text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed px-2 py-1"
              disabled={currentPage === 1}
            >
              <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
              <span className="hidden sm:inline">Prev</span>
            </button>
            
            <div className="flex items-center space-x-1 sm:space-x-2">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 text-sm rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-emerald-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button 
              className="flex items-center text-sm text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed px-2 py-1"
              disabled={currentPage === 3}
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletInterface;