import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

const EmergencySupport = () => {
  const [activeTab, setActiveTab] = useState('apply');
  
  return (
    <div className="bg-white rounded-xl shadow-lg border border-green-100 p-6 mb-8">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
          <AlertCircle className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">Emergency Support</h3>
          <p className="text-sm text-gray-600">Immediate assistance when you need it most</p>
        </div>
      </div>
      
      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => setActiveTab('apply')}
          className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
            activeTab === 'apply' 
              ? 'bg-green-600 text-white shadow-lg' 
              : 'bg-green-50 text-green-600 hover:bg-green-100'
          }`}
        >
          Apply for Support
        </button>
        <button
          onClick={() => setActiveTab('contribute')}
          className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
            activeTab === 'contribute' 
              ? 'bg-green-600 text-white shadow-lg' 
              : 'bg-green-50 text-green-600 hover:bg-green-100'
          }`}
        >
          Contribute to Fund
        </button>
      </div>
      
      {activeTab === 'apply' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-800 mb-2">Emergency Fund Available</h4>
            <p className="text-green-700 mb-4">
              Financial assistance for urgent medical bills, family emergencies, or unexpected hardships.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg">
              Apply Now
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border-2 border-green-100 rounded-xl hover:border-green-200 transition-colors">
              <h5 className="font-semibold text-gray-800">Medical Emergency</h5>
              <p className="text-sm text-green-600 mt-1 font-medium">Up to KES 50,000</p>
            </div>
            <div className="p-4 border-2 border-green-100 rounded-xl hover:border-green-200 transition-colors">
              <h5 className="font-semibold text-gray-800">Family Support</h5>
              <p className="text-sm text-green-600 mt-1 font-medium">Up to KES 30,000</p>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'contribute' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-800 mb-2">Voluntary Contributions</h4>
            <p className="text-green-700 mb-4">
              Help build our community emergency fund. Every contribution makes a difference.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg">
                One-time Donation
              </button>
              <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg">
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