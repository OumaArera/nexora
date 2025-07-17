import React from 'react';
import { Briefcase } from 'lucide-react';


const JobOpportunities = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <Briefcase className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-green-800 mb-2">Job Opportunities</h1>
        <p className="text-gray-600">Latest projects & positions for professionals</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Current Openings</h2>
        <div className="space-y-4">
          <div className="p-4 border border-green-200 rounded-lg">
            <h3 className="font-semibold text-green-800">Project Manager - Construction</h3>
            <p className="text-sm text-gray-600 mt-1">Nairobi • Full-time • Posted 2 days ago</p>
          </div>
          <div className="p-4 border border-green-200 rounded-lg">
            <h3 className="font-semibold text-green-800">Senior Engineer - Infrastructure</h3>
            <p className="text-sm text-gray-600 mt-1">Mombasa • Contract • Posted 5 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default JobOpportunities;