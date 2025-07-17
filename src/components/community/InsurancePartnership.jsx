import React, { useState } from 'react';
import { Shield, ChevronRight } from 'lucide-react';

const InsurancePartnership = () => {
  const insurancePartners = [
    { name: 'KUPA Insurance', coverage: 'Health & Life', discount: '15% off' },
    { name: 'Community Care', coverage: 'Accident & Disability', discount: '20% off' },
    { name: 'Professional Shield', coverage: 'Business Insurance', discount: '10% off' }
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center mb-4">
        <Shield className="w-6 h-6 text-blue-500 mr-3" />
        <h3 className="text-xl font-semibold text-gray-800">Insurance Partnerships</h3>
      </div>
      
      <p className="text-gray-600 mb-4">
        Access discounted insurance plans through our trusted partners, tailored for community members.
      </p>
      
      <div className="space-y-3">
        {insurancePartners.map((partner, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div>
              <h4 className="font-semibold text-blue-800">{partner.name}</h4>
              <p className="text-sm text-blue-600">{partner.coverage}</p>
            </div>
            <div className="text-right">
              <span className="text-lg font-bold text-blue-600">{partner.discount}</span>
              <button className="block mt-1 text-blue-500 hover:text-blue-700 text-sm">
                Learn More <ChevronRight className="w-4 h-4 inline" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsurancePartnership;