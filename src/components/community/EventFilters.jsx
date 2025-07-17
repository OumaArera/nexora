import React from 'react';
import { Filter, Search } from 'lucide-react';

const EventFilters = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center">
          <Filter className="w-5 h-5 text-gray-500 mr-2" />
          <span className="text-sm font-medium text-gray-700">Filters:</span>
        </div>
        
        <select 
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          value={filters.type}
          onChange={(e) => onFilterChange('type', e.target.value)}
        >
          <option value="">All Types</option>
          <option value="virtual">Virtual</option>
          <option value="physical">Physical</option>
          <option value="hybrid">Hybrid</option>
        </select>

        <select 
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          value={filters.industry}
          onChange={(e) => onFilterChange('industry', e.target.value)}
        >
          <option value="">All Industries</option>
          <option value="tech">Technology</option>
          <option value="creative">Creative Arts</option>
          <option value="legal">Legal</option>
          <option value="trades">Trades</option>
          <option value="business">Business</option>
        </select>

        <select 
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          value={filters.timeframe}
          onChange={(e) => onFilterChange('timeframe', e.target.value)}
        >
          <option value="">All Time</option>
          <option value="thisWeek">This Week</option>
          <option value="thisMonth">This Month</option>
          <option value="nextMonth">Next Month</option>
        </select>

        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search events..."
            className="border-none outline-none text-sm"
            value={filters.search}
            onChange={(e) => onFilterChange('search', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default EventFilters;