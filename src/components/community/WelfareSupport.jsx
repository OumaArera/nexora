import React from 'react';
import { Shield, Phone } from 'lucide-react';
import EmergencySupport from './EmergencySupport';
import InsurancePartnership from './InsurancePartnership';
import PeerSupport from './PeerSupport';
import RecognitionRewards from './RecognitionRewards';
import InclusionDiversity from './InclusionDiversity';


const WelfareSupport = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Nexora Welfare Community</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A comprehensive support system ensuring the well-being of our community members beyond just professional services. 
          We provide emotional, financial, social, and emergency support to help you thrive.
        </p>
      </div>
      
      {/* Key Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">500+</div>
          <div className="text-sm text-green-700">Members Supported</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">KES 2M+</div>
          <div className="text-sm text-blue-700">Emergency Fund</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600">50+</div>
          <div className="text-sm text-purple-700">Monthly Meetups</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-yellow-600">95%</div>
          <div className="text-sm text-yellow-700">Member Satisfaction</div>
        </div>
      </div>
      
      {/* Support Components */}
      <EmergencySupport />
      <InsurancePartnership />
      <PeerSupport />
      <RecognitionRewards />
      <InclusionDiversity />
      
      {/* Contact Support */}
      <div className="bg-gradient-to-r from-green-800 to-green-800 text-white p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <Phone className="w-6 h-6 mr-3" />
          <h3 className="text-xl font-semibold">Need Immediate Support?</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="mb-3">Our welfare team is available 24/7 for emergency situations.</p>
            <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Emergency Hotline: +254 700 000 000
            </button>
          </div>
          <div>
            <p className="mb-3">For general welfare inquiries and support requests.</p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Email: welfare@nexora.community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelfareSupport;