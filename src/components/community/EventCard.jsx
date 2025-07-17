import React from 'react';
import { Users, Calendar, Video, MapPin, Clock, User } from 'lucide-react';

const EventCard = ({ event, onRegister }) => {
  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'virtual': return <Video className="w-4 h-4" />;
      case 'physical': return <MapPin className="w-4 h-4" />;
      case 'hybrid': return <Users className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'virtual': return 'bg-blue-100 text-blue-800';
      case 'physical': return 'bg-green-100 text-green-800';
      case 'hybrid': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{event.description}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)} self-start sm:ml-4 mb-2 sm:mb-0`}>
            <span className="flex items-center gap-1">
              {getEventTypeIcon(event.type)}
              {event.type}
            </span>
          </span>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="truncate">{event.date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="truncate">{event.time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <User className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="truncate">{event.host}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {event.industries.map((industry, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
              {industry}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <span className="text-sm text-gray-500">
            {event.registered}/{event.capacity} registered
          </span>
          <button
            onClick={() => onRegister(event.id)}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
export default EventCard;