import React from 'react';
import { MapPin, Star,Briefcase, User, Award, X } from 'lucide-react';


const BioModal = ({ professional, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-4">
              {/* <img
                src={professional.image}
                alt={professional.name}
                className="w-16 h-16 rounded-full object-cover"
              /> */}
              <User className="w-16 h-16 text-green-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{professional.name}</h2>
                <p className="text-gray-600 font-medium">{professional.profession}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{professional.location}</span>
                  {professional.verified && (
                    <Award className="w-4 h-4 text-green-500" title="Verified Professional" />
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {professional.bio || "No bio available for this professional."}
            </p>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{professional.rating}</span>
                  <span className="text-gray-500">({professional.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Briefcase className="w-4 h-4" />
                  <span>{professional.completedProjects} projects</span>
                </div>
              </div>
              <p className="text-xl font-bold text-green-600">
                KSh {professional.hourlyRate.toLocaleString()}/hr
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BioModal;