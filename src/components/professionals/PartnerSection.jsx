import React from 'react';
import { Star, CheckCircle, ChevronRight } from 'lucide-react';
import { providers } from '../../data/training.data';


const PartnerSection = () => (
  <div className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted Training Partners</h2>
        <p className="text-xl text-gray-600">We work with leading institutions to bring you world-class training</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {providers.map(provider => (
          <div key={provider.id} className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200">
            <img
              src={provider.logo}
              alt={provider.name}
              className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="font-semibold text-lg mb-2 flex items-center justify-center space-x-2">
              <span>{provider.name}</span>
              {provider.verified && <CheckCircle className="w-5 h-5 text-green-500" />}
            </h3>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>{provider.rating}</span>
              </div>
              <div>{provider.courses} courses</div>
              <div>{provider.students.toLocaleString()} students</div>
            </div>
            <button className="text-green-600 hover:text-green-700 font-medium flex items-center space-x-1 mx-auto">
              <span>View Courses</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PartnerSection;