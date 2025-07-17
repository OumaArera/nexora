import React from 'react';


const StatsSection = () => (
  <div className="bg-white py-16 border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
          <div className="text-gray-600">Courses Available</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">15,000+</div>
          <div className="text-gray-600">Students Trained</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
          <div className="text-gray-600">Job Placement Rate</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
          <div className="text-gray-600">Partner Institutions</div>
        </div>
      </div>
    </div>
  </div>
);

export default StatsSection;