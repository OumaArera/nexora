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
    <div className="bg-white rounded-xl shadow-lg border border-green-100 p-6 mb-8">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
          <MessageCircle className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">Peer Support Programs</h3>
          <p className="text-sm text-gray-600">Connect, learn, and grow together</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(supportPrograms).map(([key, program]) => (
          <button
            key={key}
            onClick={() => setActiveSupport(key)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center ${
              activeSupport === key 
                ? 'bg-green-600 text-white shadow-lg' 
                : 'bg-green-50 text-green-600 hover:bg-green-100'
            }`}
          >
            {program.icon}
            <span className="ml-2">{program.title}</span>
          </button>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
        <h4 className="font-bold text-green-800 mb-2">
          {supportPrograms[activeSupport].title}
        </h4>
        <p className="text-green-700 mb-4">
          {supportPrograms[activeSupport].description}
        </p>
        <ul className="space-y-2 mb-6">
          {supportPrograms[activeSupport].features.map((feature, index) => (
            <li key={index} className="flex items-center text-green-700">
              <CheckCircle className="w-4 h-4 mr-3 text-green-600" />
              {feature}
            </li>
          ))}
        </ul>
        <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg">
          Join Program
        </button>
      </div>
    </div>
  );
};
export default PeerSupport;