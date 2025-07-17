import React, { useState } from 'react';
import { Award, Star } from 'lucide-react';


const RecognitionRewards = () => {
  const topContributors = [
    { name: 'Sarah Wanjiku', contribution: 'Community Mentorship', points: 450 },
    { name: 'David Ochieng', contribution: 'Emergency Fund Support', points: 380 },
    { name: 'Grace Muthoni', contribution: 'Skills Training', points: 320 }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-lg border border-green-100 p-6 mb-8">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
          <Award className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">Recognition & Rewards</h3>
          <p className="text-sm text-gray-600">Celebrating outstanding community members</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-bold text-gray-800 mb-4">Monthly Community Champions</h4>
          <div className="space-y-3">
            {topContributors.map((contributor, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200">
                <div>
                  <h5 className="font-semibold text-green-800">{contributor.name}</h5>
                  <p className="text-sm text-green-700">{contributor.contribution}</p>
                </div>
                <div className="flex items-center bg-green-200 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-green-600 mr-1" />
                  <span className="text-green-700 font-bold">{contributor.points}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-gray-800 mb-4">Recognition Programs</h4>
          <div className="space-y-3">
            <div className="p-4 border-2 border-green-100 rounded-xl hover:border-green-200 transition-colors">
              <h5 className="font-semibold text-gray-800">Outstanding Service Award</h5>
              <p className="text-sm text-gray-600 mt-1">Monthly recognition for exceptional service quality</p>
            </div>
            <div className="p-4 border-2 border-green-100 rounded-xl hover:border-green-200 transition-colors">
              <h5 className="font-semibold text-gray-800">Community Spirit Award</h5>
              <p className="text-sm text-gray-600 mt-1">Recognizing members who go above and beyond</p>
            </div>
            <div className="p-4 border-2 border-green-100 rounded-xl hover:border-green-200 transition-colors">
              <h5 className="font-semibold text-gray-800">Innovation Award</h5>
              <p className="text-sm text-gray-600 mt-1">Celebrating creative solutions and improvements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecognitionRewards;