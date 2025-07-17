import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const EmergencySupport = () => {
  const [activeTab, setActiveTab] = useState('apply');
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center mb-4">
        <AlertCircle className="w-6 h-6 text-red-500 mr-3" />
        <h3 className="text-xl font-semibold text-gray-800">Emergency Support</h3>
      </div>
      
      <div className="flex space-x-1 mb-4">
        <button
          onClick={() => setActiveTab('apply')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'apply' 
              ? 'bg-red-500 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Apply for Support
        </button>
        <button
          onClick={() => setActiveTab('contribute')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'contribute' 
              ? 'bg-red-500 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Contribute to Fund
        </button>
      </div>
      
      {activeTab === 'apply' && (
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">Emergency Fund Available</h4>
            <p className="text-sm text-red-700 mb-3">
              Financial assistance for urgent medical bills, family emergencies, or unexpected hardships.
            </p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition-colors">
              Apply Now
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 border rounded-lg">
              <h5 className="font-medium text-gray-800">Medical Emergency</h5>
              <p className="text-sm text-gray-600 mt-1">Up to KES 50,000</p>
            </div>
            <div className="p-3 border rounded-lg">
              <h5 className="font-medium text-gray-800">Family Support</h5>
              <p className="text-sm text-gray-600 mt-1">Up to KES 30,000</p>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'contribute' && (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Voluntary Contributions</h4>
            <p className="text-sm text-green-700 mb-3">
              Help build our community emergency fund. Every contribution makes a difference.
            </p>
            <div className="flex space-x-2">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors">
                One-time Donation
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors">
                Monthly Pledge
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencySupport;