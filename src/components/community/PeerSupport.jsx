import React, { useState } from 'react';
import { 
  Heart, 
  Users, 
  CheckCircle,
  User,
  MessageCircle
} from 'lucide-react';


const PeerSupport = () => {
  const [activeSupport, setActiveSupport] = useState('mentorship');
  
  const supportPrograms = {
    mentorship: {
      title: 'Mentorship Program',
      description: 'Connect with experienced professionals for career guidance',
      icon: <User className="w-5 h-5" />,
      features: ['1-on-1 mentoring sessions', 'Career planning', 'Skill development guidance']
    },
    mentalHealth: {
      title: 'Mental Health Support',
      description: 'Confidential support groups and counseling resources',
      icon: <Heart className="w-5 h-5" />,
      features: ['Peer support groups', 'Mental health awareness', 'Crisis intervention']
    },
    youngProfessionals: {
      title: 'Young Professionals Circle',
      description: 'Special support network for members under 30',
      icon: <Users className="w-5 h-5" />,
      features: ['Networking events', 'Career workshops', 'Leadership development']
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center mb-4">
        <MessageCircle className="w-6 h-6 text-green-500 mr-3" />
        <h3 className="text-xl font-semibold text-gray-800">Peer Support Programs</h3>
      </div>
      
      <div className="flex space-x-1 mb-4">
        {Object.entries(supportPrograms).map(([key, program]) => (
          <button
            key={key}
            onClick={() => setActiveSupport(key)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center ${
              activeSupport === key 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {program.icon}
            <span className="ml-2 hidden sm:inline">{program.title}</span>
          </button>
        ))}
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-semibold text-green-800 mb-2">
          {supportPrograms[activeSupport].title}
        </h4>
        <p className="text-sm text-green-700 mb-3">
          {supportPrograms[activeSupport].description}
        </p>
        <ul className="space-y-2 mb-4">
          {supportPrograms[activeSupport].features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-green-600">
              <CheckCircle className="w-4 h-4 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors">
          Join Program
        </button>
      </div>
    </div>
  );
};

export default PeerSupport;