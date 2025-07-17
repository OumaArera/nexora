import React, { useState } from 'react';
import { Award, Star } from 'lucide-react';


const RecognitionRewards = () => {
  const topContributors = [
    { name: 'Sarah Wanjiku', contribution: 'Community Mentorship', points: 450 },
    { name: 'David Ochieng', contribution: 'Emergency Fund Support', points: 380 },
    { name: 'Grace Muthoni', contribution: 'Skills Training', points: 320 }
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center mb-4">
        <Award className="w-6 h-6 text-yellow-500 mr-3" />
        <h3 className="text-xl font-semibold text-gray-800">Recognition & Rewards</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Monthly Community Champions</h4>
          <div className="space-y-3">
            {topContributors.map((contributor, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div>
                  <h5 className="font-medium text-yellow-800">{contributor.name}</h5>
                  <p className="text-sm text-yellow-600">{contributor.contribution}</p>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-yellow-600 font-medium">{contributor.points}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Recognition Programs</h4>
          <div className="space-y-3">
            <div className="p-3 border rounded-lg">
              <h5 className="font-medium text-gray-800">Outstanding Service Award</h5>
              <p className="text-sm text-gray-600 mt-1">Monthly recognition for exceptional service quality</p>
            </div>
            <div className="p-3 border rounded-lg">
              <h5 className="font-medium text-gray-800">Community Spirit Award</h5>
              <p className="text-sm text-gray-600 mt-1">Recognizing members who go above and beyond</p>
            </div>
            <div className="p-3 border rounded-lg">
              <h5 className="font-medium text-gray-800">Innovation Award</h5>
              <p className="text-sm text-gray-600 mt-1">Celebrating creative solutions and improvements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecognitionRewards;