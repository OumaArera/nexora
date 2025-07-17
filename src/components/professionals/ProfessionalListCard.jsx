import React, { useState } from 'react';
import { 
  MapPin, Star, Phone, Mail, 
  Briefcase, Award, Clock, User
} from 'lucide-react';
import BioModal from './BioModal';

const ProfessionalListCard = ({ professional }) => {
  const [showContact, setShowContact] = useState(false);
  const [showBio, setShowBio] = useState(false);
  

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          {/* Image */}
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            {/* <img
              src={professional.image}
              alt={professional.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
            /> */}
            <User className="w-16 h-16 text-green-600" />
          </div>

          {/* Content */}
          <div className="flex-1 w-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{professional.name}</h3>
                <p className="text-gray-600 font-medium text-sm">{professional.profession}</p>
                <div className="flex flex-wrap justify-center sm:justify-start items-center space-x-2 mt-1">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{professional.location}</span>
                  {professional.verified && (
                    <Award className="w-4 h-4 text-green-500" title="Verified Professional" />
                  )}
                </div>
              </div>

              {/* Rating and Price */}
              <div className="mt-4 sm:mt-0 text-center sm:text-right">
                <div className="flex justify-center sm:justify-end items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{professional.rating}</span>
                  <span className="text-sm text-gray-500">({professional.reviewCount})</span>
                </div>
                <p className="text-lg font-bold text-green-600 mt-1">
                  KSh {professional.hourlyRate.toLocaleString()}/hr
                </p>
              </div>
            </div>

            {/* Specialties */}
            <div className="mt-3">
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {professional.specialties.slice(0, 3).map((specialty, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats and Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-4">
              {/* Stats */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  <span>{professional.completedProjects} projects</span>
                </div>
                <div className="flex items-center gap-1">
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

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => setShowContact(!showContact)}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
                >
                  Contact
                </button>
                <button 
                  onClick={() => setShowBio(true)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm"
                >
                  View Profile
                </button>
              </div>
            </div>

            {/* Contact Details */}
            {showContact && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-600" />
                    <a href={`tel:${professional.phone}`} className="text-green-600 hover:underline text-sm">
                      {professional.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-600" />
                    <a href={`mailto:${professional.email}`} className="text-green-600 hover:underline text-sm">
                      {professional.email}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
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

export default ProfessionalListCard;
