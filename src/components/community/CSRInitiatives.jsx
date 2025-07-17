import React from "react";
import { Heart } from "lucide-react";


const CSRInitiatives = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <Heart className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-green-800 mb-2">CSR Initiatives</h1>
        <p className="text-gray-600">Community impact projects making a difference</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Current Projects</h2>
        <div className="space-y-4">
          <div className="p-4 bg-red-50 rounded-lg">
            <h3 className="font-semibold text-green-800">Skills for Youth Program</h3>
            <p className="text-sm text-gray-600 mt-2">Empowering young professionals with technical skills</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <h3 className="font-semibold text-green-800">Community Infrastructure</h3>
            <p className="text-sm text-gray-600 mt-2">Pro-bono services for local development projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSRInitiatives;