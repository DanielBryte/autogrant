import React from 'react';
import { Users, Trophy, FileText, TrendingUp, MoreVertical, TrophyIcon } from 'lucide-react';
import Link from 'next/link';

const AdminDashboard = () => {
  // Sample data for grants
  const grants = [
    {
      name: 'MTN foundation fund',
      organization: 'TechForward',
      description: 'TechForward is a the grant...',
      amount: '$5k',
      status: 'Open',
      statusColor: 'text-emerald-600 bg-emerald-50'
    },
    {
      name: 'Small Business Grant',
      organization: 'GrowCo',
      description: 'Small Business Grant is made...',
      amount: '$3K',
      status: 'Closed',
      statusColor: 'text-gray-600 bg-gray-50'
    },
    {
      name: 'Small Business Grant',
      organization: 'GrowCo',
      description: 'Small Business Grant is made...',
      amount: '$3K',
      status: 'Closed',
      statusColor: 'text-gray-600 bg-gray-50'
    },
    {
      name: 'Small Business Grant',
      organization: 'GrowCo',
      description: 'Small Business Grant is made...',
      amount: '$3K',
      status: 'Closed',
      statusColor: 'text-gray-600 bg-gray-50'
    },
    {
      name: 'Small Business Grant',
      organization: 'GrowCo',
      description: 'Small Business Grant is made...',
      amount: '$3K',
      status: 'Closed',
      statusColor: 'text-gray-600 bg-gray-50'
    }
  ];

  return (
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Here is an overview of your progress</p>
        </div>
        <Link href="/admin/manage-grants" className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2">
          <TrophyIcon className="w-4 h-4" />
          <span>Manage Grant</span>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Users */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">36</div>
          <div className="flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-emerald-500 mr-1" />
            <span className="text-emerald-500">+3 return users this week</span>
          </div>
        </div>

        {/* Total Grants */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">Total Grants</h3>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Trophy className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">04</div>
          <div className="flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-emerald-500 mr-1" />
            <span className="text-emerald-500">4 added this month</span>
          </div>
        </div>

        {/* Total Applications */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 text-sm font-medium">Total Applications</h3>
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <FileText className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-2">02</div>
          <div className="flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-emerald-500 mr-1" />
            <span className="text-emerald-500">2 this month</span>
          </div>
        </div>
      </div>

      {/* Grants Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">Manage All Grants</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Filter:</span>
              <button className="text-sm text-emerald-600 hover:text-emerald-700">
                Industry
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
              {grants.map((grant, index) => (
                <tr key={index} className="hover:bg-gray-50">
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
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${grant.statusColor}`}>
                      {grant.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;