import React, { useState } from 'react';
import { Shield, ChevronRight } from 'lucide-react';

const InsurancePartnership = () => {
  const insurancePartners = [
    { name: 'KUPA Insurance', coverage: 'Health & Life', discount: '15% off' },
    { name: 'Community Care', coverage: 'Accident & Disability', discount: '20% off' },
    { name: 'Professional Shield', coverage: 'Business Insurance', discount: '10% off' }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-lg border border-green-100 p-6 mb-8">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
          <Shield className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">Insurance Partnerships</h3>
          <p className="text-sm text-gray-600">Exclusive discounts for community members</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {insurancePartners.map((partner, index) => (
          <div key={index} className="flex items-center justify-between p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-md transition-all duration-200">
            <div>
              <h4 className="font-bold text-green-800">{partner.name}</h4>
              <p className="text-green-700">{partner.coverage}</p>
            </div>
            <div className="text-right">
              <span className="text-xl font-bold text-green-600">{partner.discount}</span>
              <button className="mt-2 text-green-600 hover:text-green-700 font-semibold flex items-center">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsurancePartnership;