"use client";
import React, { useState } from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight, MoreHorizontal, Eye, FileX, Edit3, Trash2 } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ProfileCompletionCard } from '@/components/dashboard/profile-completion-card';

export default function MyGrantsPage() {
  const [sortBy, setSortBy] = useState('Most recent');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrants, setSelectedGrants] = useState<number[]>([]);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const sortOptions = [
    'Most recent',
    'Oldest first', 
    'Highest amount',
    'Lowest amount',
    'AI score (high to low)',
    'AI score (low to high)',
    'Deadline (nearest first)',
    'Status'
  ];

  const grants = [
    {
      id: 1,
      name: 'TOE Foundation Grant',
      organization: 'TOE Foundation',
      amount: '$5k',
      status: 'Won' as const,
      aiScore: 82,
      deadline: '12/10/2025',
    },
    {
      id: 2,
      name: 'MTN Yellopreneur Grant',
      organization: 'MTN Foundation',
      amount: '₦3m',
      status: 'Missed' as const,
      aiScore: 55,
      deadline: '12/10/2025',
    },
    {
      id: 3,
      name: 'PCGS Grant Program',
      organization: 'Federal Government',
      amount: '₦50k',
      status: 'Submitted' as const,
      aiScore: 78,
      deadline: '12/10/2025',
    },
    {
      id: 4,
      name: 'YES Program',
      organization: 'Bank of Industry',
      amount: '₦5m',
      status: 'Draft' as const,
      aiScore: 45,
      deadline: '12/10/2025',
    },
    {
      id: 5,
      name: 'Conditional Grant Scheme',
      organization: 'SMEDAN',
      amount: '₦50k',
      status: 'Won' as const,
      aiScore: 95,
      deadline: '12/10/2025',
    },
    {
      id: 6,
      name: 'AWDF Grants',
      organization: 'TOE Foundation',
      amount: '$15k-$30k',
      status: 'Missed' as const,
      aiScore: 33,
      deadline: '12/10/2025',
    },
    {
      id: 7,
      name: 'Community Fund',
      organization: 'TY Danjuma Foundation',
      amount: '₦5m',
      status: 'Won' as const,
      aiScore: 88,
      deadline: '12/10/2025',
    }
  ];

  const filteredGrants = grants.filter(grant =>
    grant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    grant.organization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectAll = (checked: boolean) => {
    setIsSelectAll(checked);
    if (checked) {
      setSelectedGrants(filteredGrants.map(grant => grant.id));
    } else {
      setSelectedGrants([]);
    }
  };

  const handleSelectGrant = (grantId: number, checked: boolean) => {
    if (checked) {
      setSelectedGrants(prev => [...prev, grantId]);
    } else {
      setSelectedGrants(prev => prev.filter(id => id !== grantId));
      setIsSelectAll(false);
    }
  };

  const handleSortSelect = (option: string) => {
    setSortBy(option);
    setSortDropdownOpen(false);
  };

  const handleBulkAction = (action: string) => {
    console.log(`Performing ${action} on grants:`, selectedGrants);
    // Implement bulk actions here
    setSelectedGrants([]);
    setIsSelectAll(false);
  };

  const handleSingleAction = (action: string, grantId: number) => {
    console.log(`Performing ${action} on grant:`, grantId);
    // Implement single actions here
  };

  return (
    <div className="flex flex-col p-4 md:p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Grants</h1>
          <p className="text-muted-foreground text-base md:text-lg">Manage your grant application, check AI review and more</p>
        </div> 
      </div>

      {/* Profile Completion Card */}
      <ProfileCompletionCard />
        
      {/* Main Grants Section */}
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-xl font-semibold">Manage your grants</h2>
          
          {/* Search and Sort Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full sm:w-64"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <div className="relative">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8"
                  onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                >
                  {sortBy}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
                {sortDropdownOpen && (
                  <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 first:rounded-t-md last:rounded-b-md"
                        onClick={() => handleSortSelect(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bulk Actions Bar */}
        {selectedGrants.length > 0 && (
          <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-md">
            <span className="text-sm font-medium text-blue-900">
              {selectedGrants.length} grant{selectedGrants.length > 1 ? 's' : ''} selected
            </span>
            <div className="flex items-center gap-2"> 
              <Button size="sm" variant="outline" onClick={() => handleBulkAction('withdraw')}>
                <FileX className="w-4 h-4 mr-1" />
                Withdraw
              </Button>
              <Button size="sm" variant="outline" onClick={() => handleBulkAction('delete')}>
                <Trash2 className="w-4 h-4 mr-1" />
                Delete
              </Button>
            </div>
          </div>
        )}

        {/* Grants Table */}
        <div className="rounded-md border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground w-[40px]">
                    <Checkbox 
                      checked={isSelectAll}
                      onCheckedChange={handleSelectAll}
                    />
                  </th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Grant Name</th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground hidden md:table-cell">Organization</th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Amount</th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground hidden lg:table-cell">AI score</th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground hidden xl:table-cell">Deadline</th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground w-[50px]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredGrants.map((grant) => (
                  <tr key={grant.id} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="p-4 align-middle">
                      <Checkbox 
                        checked={selectedGrants.includes(grant.id)}
                        onCheckedChange={(checked) => handleSelectGrant(grant.id, checked as boolean)}
                      />
                    </td>
                    <td className="p-4 align-middle">
                      <div className="font-medium">{grant.name}</div>
                      <div className="text-sm text-muted-foreground md:hidden">{grant.organization}</div>
                    </td>
                    <td className="p-4 align-middle hidden md:table-cell">{grant.organization}</td>
                    <td className="p-4 align-middle font-medium">{grant.amount}</td>
                    <td className="p-4 align-middle">
                      <StatusBadge status={grant.status} />
                    </td>
                    <td className="p-4 align-middle hidden lg:table-cell font-medium">{grant.aiScore}%</td>
                    <td className="p-4 align-middle hidden xl:table-cell">{grant.deadline}</td>
                    <td className="p-4 align-middle">
                      <ActionDropdown grant={grant} onAction={handleSingleAction} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between pt-4">
          <Button variant="outline" size="sm" disabled className="flex items-center gap-1">
            <ChevronLeft className="w-4 h-4" />
            Prev
          </Button>
          
          <div className="flex items-center space-x-2">
            <Button size="sm" className="w-8 h-8 p-0">1</Button>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">2</Button>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">3</Button>
          </div>
          
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function ActionDropdown({ grant, onAction }: { 
  grant: { id: number; status: string }, 
  onAction: (action: string, grantId: number) => void 
}) {
  const [isOpen, setIsOpen] = useState(false);

  const getAvailableActions = () => {
    const baseActions = [
      { icon: Eye, label: 'View Details', action: 'view' },
      { icon: Edit3, label: 'Edit', action: 'edit' }
    ];

    if (grant.status === 'Submitted') {
      baseActions.push({ icon: FileX, label: 'Withdraw', action: 'withdraw' });
    }

    if (grant.status === 'Draft') {
      baseActions.push({ icon: Trash2, label: 'Delete', action: 'delete' });
    }

    return baseActions;
  };

  const actions = getAvailableActions();

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        className="w-8 h-8 p-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MoreHorizontal className="w-4 h-4" />
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {actions.map((action) => (
            <button
              key={action.action}
              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 first:rounded-t-md last:rounded-b-md"
              onClick={() => {
                onAction(action.action, grant.id);
                setIsOpen(false);
              }}
            >
              <action.icon className="w-4 h-4" />
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: 'Won' | 'Missed' | 'Submitted' | 'Draft' }) {
  const getStatusStyles = () => {
    switch (status) {
      case 'Won':
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Missed':
        return 'text-red-700 bg-red-50 border-red-200';
      case 'Submitted':
        return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'Draft':
        return 'text-gray-700 bg-gray-50 border-gray-200';
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  return (
    <span className={cn(
      'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
      getStatusStyles()
    )}>
      <span className={cn(
        'mr-1 h-1.5 w-1.5 rounded-full',
        status === 'Won' ? 'bg-emerald-600' : 
        status === 'Missed' ? 'bg-red-600' : 
        status === 'Submitted' ? 'bg-amber-600' : 
        'bg-gray-600'
      )} />
      {status}
    </span>
  );
}