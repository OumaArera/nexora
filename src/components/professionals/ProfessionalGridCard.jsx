import React, { useState } from 'react';
import { 
  MapPin, Star, Phone, Mail, 
  Briefcase, Award, Clock, User
} from 'lucide-react';
import BioModal from './BioModal';

const ProfessionalGridCard = ({ professional }) => {
  const [showContact, setShowContact] = useState(false);
  const [showBio, setShowBio] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
        <div className="text-center">
          {/* <img
            src={professional.image}
            alt={professional.name}
            className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
          /> */}
          <User className="w-16 h-16 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{professional.name}</h3>
          <p className="text-gray-600 font-medium mb-2">{professional.profession}</p>
          
          <div className="flex items-center justify-center space-x-1 mb-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{professional.location}</span>
            {professional.verified && (
              <Award className="w-4 h-4 text-green-500 ml-2" title="Verified Professional" />
            )}
          </div>

          <div className="flex items-center justify-center space-x-1 mb-3">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-medium">{professional.rating}</span>
            <span className="text-sm text-gray-500">({professional.reviewCount})</span>
          </div>

          <p className="text-xl font-bold text-green-600 mb-4">
            KSh {professional.hourlyRate.toLocaleString()}/hr
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {professional.specialties.slice(0, 2).map((specialty, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>

          <div className="text-sm text-gray-600 mb-4">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <Briefcase className="w-4 h-4" />
              <span>{professional.completedProjects} projects</span>
            </div>
            <div className="flex items-center justify-center space-x-1 mb-2">
              <Clock className="w-4 h-4" />
              <span>{professional.responseTime}</span>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs ${
              professional.availability === 'Available' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {professional.availability}
            </span>
          </div>

          <div className="space-y-2">
            <button
              onClick={() => setShowContact(!showContact)}
              className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => setShowBio(true)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              View Profile
            </button>
          </div>

          {showContact && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md text-left">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-600" />
                  <a href={`tel:${professional.phone}`} className="text-green-600 hover:underline">
                    {professional.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gray-600" />
                  <a href={`mailto:${professional.email}`} className="text-green-600 hover:underline">
                    {professional.email}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <BioModal 
        professional={professional} 
        isOpen={showBio} 
        onClose={() => setShowBio(false)} 
      />
    </>
  );
};

export default ProfessionalGridCard;