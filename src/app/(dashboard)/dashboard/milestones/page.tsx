"use client";
import React, { useState } from 'react';
import { Plus, MoreVertical, X, ChevronDown } from 'lucide-react';

// Types
interface Milestone {
  id: number;
  title: string;
  description: string;
  progress: number;
  status: 'Completed' | 'Pending' | 'In Progress';
}

interface Grant {
  id: number;
  name: string;
}

interface FormData {
  title: string;
  description: string;
  progress: number;
}

const MilestonesPage: React.FC = () => {
  // Available grants
  const [grants] = useState<Grant[]>([
    { id: 1, name: 'MTN Foundation Grant' },
    { id: 2, name: 'TechStars Accelerator Fund' },
    { id: 3, name: 'Innovation Hub Grant' },
    { id: 4, name: 'Small Business Development Fund' }
  ]);

  const [selectedGrant, setSelectedGrant] = useState<Grant>(grants[0]);
  const [showGrantDropdown, setShowGrantDropdown] = useState<boolean>(false);

  const [milestones, setMilestones] = useState<Milestone[]>([
    {
      id: 1,
      title: 'Launch MVP',
      description: 'Release a minimum viable product',
      progress: 25,
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Acquire 100 customers',
      description: 'Reach 100 paying customers',
      progress: 50,
      status: 'Pending'
    },
    {
      id: 3,
      title: 'Hire sales team',
      description: 'Boost sales, hire sales team',
      progress: 25,
      status: 'In Progress'
    }
  ]);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [editingMilestone, setEditingMilestone] = useState<Milestone | null>(null);
  const [showActionMenu, setShowActionMenu] = useState<number | null>(null);
  const [showStatusDropdown, setShowStatusDropdown] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    progress: 0
  });

  const statusOptions: Array<'Completed' | 'Pending' | 'In Progress'> = ['Completed', 'Pending', 'In Progress'];

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'In Progress':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string): string => {
    return '▼'; // All status icons are now chevron down
  };

  const handleGrantSelect = (grant: Grant): void => {
    setSelectedGrant(grant);
    setShowGrantDropdown(false);
  };

  const handleStatusChange = (milestoneId: number, newStatus: 'Completed' | 'Pending' | 'In Progress'): void => {
    setMilestones(milestones.map(m => 
      m.id === milestoneId ? { ...m, status: newStatus } : m
    ));
    setShowStatusDropdown(null);
  };

  const handleAddMilestone = (): void => {
    setEditingMilestone(null);
    setFormData({ title: '', description: '', progress: 0 });
    setShowModal(true);
  };

  const handleEditMilestone = (milestone: Milestone): void => {
    setEditingMilestone(milestone);
    setFormData({
      title: milestone.title,
      description: milestone.description,
      progress: milestone.progress
    });
    setShowModal(true);
    setShowActionMenu(null);
  };

  const handleDeleteMilestone = (id: number): void => {
    setMilestones(milestones.filter(m => m.id !== id));
    setShowActionMenu(null);
  };

  const handleSave = (): void => {
    if (!formData.title || !formData.description) return;

    if (editingMilestone) {
      // Update existing milestone
      setMilestones(milestones.map(m => 
        m.id === editingMilestone.id 
          ? { ...m, ...formData }
          : m
      ));
    } else {
      // Add new milestone
      const newMilestone: Milestone = {
        id: Date.now(),
        ...formData,
        status: formData.progress === 100 ? 'Completed' : 
                formData.progress > 0 ? 'In Progress' : 'Pending'
      };
      setMilestones([...milestones, newMilestone]);
    }

    setShowModal(false);
    setFormData({ title: '', description: '', progress: 0 });
    setEditingMilestone(null);
  };

  const handleInputChange = (field: keyof FormData, value: string | number): void => {
    setFormData({ ...formData, [field]: value });
  };

  const handleModalClose = (): void => {
    setShowModal(false);
    setFormData({ title: '', description: '', progress: 0 });
    setEditingMilestone(null);
  };

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Milestones</h1>
        <p className="text-sm md:text-base text-gray-600">Set business milestones, this will correspond for your grant withdrawals</p>
      </div>

      {/* Grant Selector */}
      <div className="mb-4 md:mb-6 relative">
        <div 
          className="bg-teal-600 text-white px-4 py-3 rounded-lg flex items-center justify-between cursor-pointer hover:bg-teal-700 transition-colors"
          onClick={() => setShowGrantDropdown(!showGrantDropdown)}
        >
          <span className="font-medium text-sm md:text-base truncate pr-2">{selectedGrant.name}</span>
          <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${showGrantDropdown ? 'rotate-180' : ''}`} />
        </div>
        
        {showGrantDropdown && (
          <div className="absolute top-12 left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-20">
            {grants.map((grant) => (
              <button
                key={grant.id}
                onClick={() => handleGrantSelect(grant)}
                className={`w-full text-left px-4 py-3 text-sm md:text-base hover:bg-gray-50 transition-colors ${
                  selectedGrant.id === grant.id ? 'bg-teal-50 text-teal-700' : 'text-gray-700'
                }`}
              >
                {grant.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
            <div className="col-span-3">Milestones</div>
            <div className="col-span-4">Description</div>
            <div className="col-span-2">Progress(% met)</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1">Actions</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {milestones.map((milestone) => (
            <div key={milestone.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-3">
                  <span className="font-medium text-gray-900">{milestone.title}</span>
                </div>
                <div className="col-span-4">
                  <span className="text-gray-600">{milestone.description}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-900">{milestone.progress}%</span>
                </div>
                <div className="col-span-2 relative">
                  <button
                    onClick={() => setShowStatusDropdown(showStatusDropdown === milestone.id ? null : milestone.id)}
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium cursor-pointer hover:opacity-80 transition-opacity ${getStatusColor(milestone.status)}`}
                  >
                    <span className="mr-1">{getStatusIcon(milestone.status)}</span>
                    {milestone.status}
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </button>
                  
                  {showStatusDropdown === milestone.id && (
                    <div className="absolute top-8 left-0 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      {statusOptions.map((status) => (
                        <button
                          key={status}
                          onClick={() => handleStatusChange(milestone.id, status)}
                          className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 flex items-center ${
                            milestone.status === status ? 'bg-gray-50' : ''
                          }`}
                        >
                          <span className="mr-2">{getStatusIcon(status)}</span>
                          {status}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="col-span-1 relative">
                  <button
                    onClick={() => setShowActionMenu(showActionMenu === milestone.id ? null : milestone.id)}
                    className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <MoreVertical className="w-4 h-4 text-gray-500" />
                  </button>
                  
                  {showActionMenu === milestone.id && (
                    <div className="absolute right-0 top-8 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      <button
                        onClick={() => handleEditMilestone(milestone)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteMilestone(milestone.id)}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Milestone Button - Desktop */}
        <div className="px-6 py-4 border-t border-gray-200">
          <button
            onClick={handleAddMilestone}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add milestone
          </button>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {milestones.map((milestone) => (
          <div key={milestone.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 text-sm mb-1 truncate">{milestone.title}</h3>
                <p className="text-gray-600 text-xs line-clamp-2">{milestone.description}</p>
              </div>
              <div className="ml-3 relative">
                <button
                  onClick={() => setShowActionMenu(showActionMenu === milestone.id ? null : milestone.id)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <MoreVertical className="w-4 h-4 text-gray-500" />
                </button>
                
                {showActionMenu === milestone.id && (
                  <div className="absolute right-0 top-8 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <button
                      onClick={() => handleEditMilestone(milestone)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteMilestone(milestone.id)}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <div className="flex items-center">
                <span className="text-gray-500 mr-1">Progress:</span>
                <span className="font-medium text-gray-900">{milestone.progress}%</span>
              </div>
              
              <div className="relative">
                <button
                  onClick={() => setShowStatusDropdown(showStatusDropdown === milestone.id ? null : milestone.id)}
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium cursor-pointer hover:opacity-80 transition-opacity ${getStatusColor(milestone.status)}`}
                >
                  <span className="mr-1">{getStatusIcon(milestone.status)}</span>
                  {milestone.status}
                  <ChevronDown className="w-3 h-3 ml-1" />
                </button>
                
                {showStatusDropdown === milestone.id && (
                  <div className="absolute top-8 left-0 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    {statusOptions.map((status) => (
                      <button
                        key={status}
                        onClick={() => handleStatusChange(milestone.id, status)}
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 flex items-center ${
                          milestone.status === status ? 'bg-gray-50' : ''
                        }`}
                      >
                        <span className="mr-2">{getStatusIcon(status)}</span>
                        {status}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Add Milestone Button - Mobile */}
        <button
          onClick={handleAddMilestone}
          className="w-full bg-white border border-gray-300 rounded-lg p-4 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          <span className="font-medium">Add milestone</span>
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 md:p-6 pb-4 border-b border-gray-200 sticky top-0 bg-white">
              <h3 className="text-lg font-semibold text-gray-900">
                {editingMilestone ? 'Edit Milestone' : 'Add Milestone'}
              </h3>
              <button
                onClick={handleModalClose}
                className="p-2 hover:bg-gray-100 cursor-pointer rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 md:p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Milestone title*
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter milestone title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Milestone description*
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  rows={3}
                  placeholder="Enter milestone description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Percentage met*
                </label>
                <div className="relative">
                  <select
                    value={formData.progress}
                    onChange={(e) => handleInputChange('progress', parseInt(e.target.value))}
                    className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none bg-white"
                  >
                    {[...Array(101)].map((_, i) => (
                      <option key={i} value={i}>{i}%</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <button
                  onClick={handleSave}
                  disabled={!formData.title || !formData.description}
                  className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium text-base"
                >
                  Save
                </button>
                <button
                  onClick={handleModalClose}
                  className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-200 transition-colors font-medium text-base"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close dropdowns */}
      {(showActionMenu || showGrantDropdown || showStatusDropdown) && (
        <div
          className="fixed inset-0 z-5"
          onClick={() => {
            setShowActionMenu(null);
            setShowGrantDropdown(false);
            setShowStatusDropdown(null);
          }}
        />
      )}
    </div>
  );
};

export default MilestonesPage;