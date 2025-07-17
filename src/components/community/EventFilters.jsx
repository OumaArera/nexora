import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';

const EventFilters = ({ filters, onFilterChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Filter className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Filters:</span>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden text-sm text-green-600 hover:text-green-800"
          >
            {isExpanded ? 'Hide' : 'Show'} Filters
          </button>
        </div>
        
        <div className={`${isExpanded ? 'block' : 'hidden'} md:block`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <select 
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
              value={filters.type}
              onChange={(e) => onFilterChange('type', e.target.value)}
            >
              <option value="">All Types</option>
              <option value="virtual">Virtual</option>
              <option value="physical">Physical</option>
              <option value="hybrid">Hybrid</option>
            </select>

            <select 
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
              value={filters.industry}
              onChange={(e) => onFilterChange('industry', e.target.value)}
            >
              <option value="">All Industries</option>
              <option value="Technology">Technology</option>
              <option value="Creative Arts">Creative Arts</option>
              <option value="Legal">Legal</option>
              <option value="Business">Business</option>
            </select>

            <select 
              className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
              value={filters.timeframe}
              onChange={(e) => onFilterChange('timeframe', e.target.value)}
            >
              <option value="">All Time</option>
              <option value="thisWeek">This Week</option>
              <option value="thisMonth">This Month</option>
              <option value="nextMonth">Next Month</option>
            </select>

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full">
              <Search className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search events..."
                className="border-none outline-none text-sm w-full"
                value={filters.search}
                onChange={(e) => onFilterChange('search', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventFilters;