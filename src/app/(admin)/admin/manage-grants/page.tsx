"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Search, MoreVertical, Filter, Plus, Edit, Trash2, Eye, ChevronDown } from 'lucide-react';
import Link from 'next/link';

// Define interface for grant object
interface Grant {
  id: number;
  name: string;
  organization: string;
  description: string;
  amount: string;
  status: 'Open' | 'Closed';
  statusColor: string;
}

const ManageGrantsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showDropdown, setShowDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sample grants data - matching the reference image
  const grants: Grant[] = [
    {
      id: 1,
      name: 'MTN foundation fund',
      organization: 'TechForward',
      description: 'TechForward is a the grant...',
      amount: '$5k',
      status: 'Open',
      statusColor: 'text-emerald-600 bg-emerald-50'
    },
    {
      id: 2,
      name: 'Small Business Grant',
      organization: 'GrowCo',
      description: 'Small Business Grant is made...',
      amount: '$3K',
      status: 'Closed',
      statusColor: 'text-gray-600 bg-gray-50'
    },
    {
      id: 3,
      name: 'Small Business Grant',
      organization: 'GrowCo',
      description: 'Small Business Grant is made...',
      amount: '$3K',
      status: 'Closed',
      statusColor: 'text-gray-600 bg-gray-50'
    },
    {
      id: 4,
      name: 'Small Business Grant',
      organization: 'GrowCo',
      description: 'Small Business Grant is made...',
      amount: '$3K',
      status: 'Closed',
      statusColor: 'text-gray-600 bg-gray-50'
    },
    {
      id: 5,
      name: 'Small Business Grant',
      organization: 'GrowCo',
      description: 'Small Business Grant is made...',
      amount: '$3K',
      status: 'Closed',
      statusColor: 'text-gray-600 bg-gray-50'
    }
  ];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(grants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGrants = grants.slice(startIndex, endIndex);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleActionClick = (grantId: number, action: 'view' | 'edit' | 'delete') => {
    console.log(`${action} grant with id: ${grantId}`);
    setShowDropdown(null);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Grants</h1>
          <p className="text-gray-600 mt-1">Manage all grants on AutoGrant</p>
        </div>
        <Link href="/admin/create-grant" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Grant</span>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for opportunities and grants that perfectly fits your business goals"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-32 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors">
            Search
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">Manage All Grants</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Filter:</span>
              <button className="flex items-center space-x-1 px-3 py-1 text-sm text-emerald-600 hover:text-emerald-700 border border-gray-300 rounded-md">
                <span>Industry</span>
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grant Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Organization
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Short Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentGrants.map((grant) => (
                <tr key={grant.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {grant.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {grant.organization}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-w-xs truncate">
                    {grant.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {grant.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-1">
                      <div className={`w-2 h-2 rounded-full ${grant.status === 'Open' ? 'bg-emerald-500' : 'bg-gray-400'}`}></div>
                      <span className="text-sm text-gray-700">{grant.status}</span>
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 relative">
                    <button 
                      className="text-gray-400 hover:text-gray-600 p-1"
                      onClick={() => setShowDropdown(showDropdown === grant.id ? null : grant.id)}
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                    
                    {showDropdown === grant.id && (
                      <div 
                        ref={dropdownRef}
                        className="absolute right-0 top-full mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-20"
                      >
                        <div className="py-1">
                          <button
                            onClick={() => handleActionClick(grant.id, 'view')}
                            className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left"
                          >
                            <Eye className="w-4 h-4" />
                            <span>View Details</span>
                          </button>
                          <button
                            onClick={() => handleActionClick(grant.id, 'edit')}
                            className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left"
                          >
                            <Edit className="w-4 h-4" />
                            <span>Edit Grant</span>
                          </button>
                          <button
                            onClick={() => handleActionClick(grant.id, 'delete')}
                            className="flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span>Delete Grant</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <button 
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`flex items-center space-x-2 px-3 py-2 text-sm ${
                currentPage === 1 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-gray-700 hover:text-gray-900 cursor-pointer'
              }`}
            >
              <span>← Prev</span>
            </button>
            
            <div className="flex items-center space-x-2">
              {[...Array(totalPages)].map((_, index) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-8 h-8 text-sm rounded ${
                      currentPage === pageNum
                        ? 'bg-emerald-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            
            <button 
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`flex items-center space-x-2 px-3 py-2 text-sm ${
                currentPage === totalPages 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-gray-700 hover:text-gray-900 cursor-pointer'
              }`}
            >
              <span>Next →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageGrantsPage;