import React, { useState, useMemo } from 'react';
import { Users, Calendar, MessageCircle, Award } from 'lucide-react';
import EventCard from './EventCard';
import IndustryClusters from './IndustryClusters';
import DiscussionForums from './DiscussionForums';
import EventFilters from './EventFilters';
import { upcomingEvents, industryClusters, discussionForums } from '../../data/networking.data';

const NetworkingEvents = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [filters, setFilters] = useState({
    type: '',
    industry: '',
    timeframe: '',
    search: ''
  });

  const handleRegister = (eventId) => {
    console.log('Registering for event:', eventId);
    alert(`Registration successful for event ${eventId}!`);
  };

  const handleJoinCluster = (clusterId) => {
    console.log('Joining cluster:', clusterId);
    alert(`Successfully joined cluster ${clusterId}!`);
  };

  const handleJoinForum = (forumId) => {
    console.log('Joining forum:', forumId);
    alert(`Successfully joined forum ${forumId}!`);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  // Filter events based on current filters
  const filteredEvents = useMemo(() => {
    return upcomingEvents.filter(event => {
      const matchesType = !filters.type || event.type === filters.type;
      const matchesIndustry = !filters.industry || event.industries.includes(filters.industry);
      const matchesSearch = !filters.search || 
        event.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        event.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        event.host.toLowerCase().includes(filters.search.toLowerCase());
      
      return matchesType && matchesIndustry && matchesSearch;
    });
  }, [filters]);

  const tabs = [
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'clusters', label: 'Industry Clusters', icon: Users },
    { id: 'forums', label: 'Discussion Forums', icon: MessageCircle }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center mb-4">
          <div className="bg-green-100 p-3 rounded-full">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Networking Opportunities</h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Connect, collaborate, and grow with professionals across all industries
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center">
          <div className="text-xl sm:text-2xl font-bold text-green-600 mb-2">1,234</div>
          <div className="text-xs sm:text-sm text-gray-600">Active Members</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center">
          <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">56</div>
          <div className="text-xs sm:text-sm text-gray-600">Upcoming Events</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center">
          <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-2">12</div>
          <div className="text-xs sm:text-sm text-gray-600">Industry Clusters</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center">
          <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-2">89</div>
          <div className="text-xs sm:text-sm text-gray-600">Discussion Topics</div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto px-4 sm:px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-2 sm:px-4 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'events' && (
        <div>
          <EventFilters filters={filters} onFilterChange={handleFilterChange} />
          <div className="grid gap-6">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Upcoming Events {filteredEvents.length !== upcomingEvents.length && `(${filteredEvents.length} filtered)`}
              </h2>
              {filteredEvents.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No events match your current filters. Try adjusting your search criteria.
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} onRegister={handleRegister} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'clusters' && (
        <IndustryClusters clusters={industryClusters} onJoinCluster={handleJoinCluster} />
      )}

      {activeTab === 'forums' && (
        <DiscussionForums forums={discussionForums} onJoinForum={handleJoinForum} />
      )}

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-800 to-green-700 rounded-lg p-6 sm:p-8 text-center text-white mt-8">
        <Award className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4" />
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to Expand Your Network?</h2>
        <p className="text-base sm:text-lg mb-6">Join thousands of professionals building meaningful connections</p>
        <button className="bg-white text-green-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Create Your Profile Today
        </button>
      </div>
    </div>
  );
};

export default NetworkingEvents;