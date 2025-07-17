import React from 'react';
import { Shield, Phone } from 'lucide-react';
import EmergencySupport from './EmergencySupport';
import InsurancePartnership from './InsurancePartnership';
import PeerSupport from './PeerSupport';
import RecognitionRewards from './RecognitionRewards';
import InclusionDiversity from './InclusionDiversity';


const WelfareSupport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Nexora Welfare Community</h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            A comprehensive support system ensuring the well-being of our community members beyond just professional services. 
            We provide emotional, financial, social, and emergency support to help you thrive.
          </p>
        </div>
        
        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 text-center hover:shadow-xl transition-all duration-200">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-green-700 font-semibold">Members Supported</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 text-center hover:shadow-xl transition-all duration-200">
            <div className="text-3xl font-bold text-green-600 mb-2">KES 2M+</div>
            <div className="text-green-700 font-semibold">Emergency Fund</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 text-center hover:shadow-xl transition-all duration-200">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-green-700 font-semibold">Monthly Meetups</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 text-center hover:shadow-xl transition-all duration-200">
            <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-green-700 font-semibold">Member Satisfaction</div>
          </div>
        </div>
        
        {/* Support Components */}
        <EmergencySupport />
        <InsurancePartnership />
        <PeerSupport />
        <RecognitionRewards />
        <InclusionDiversity />
        
        {/* Contact Support */}
        <div className="bg-gradient-to-r from-green-700 to-green-800 text-white p-8 rounded-xl shadow-xl">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Need Immediate Support?</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4 text-green-100">Our welfare team is available 24/7 for emergency situations.</p>
              <button className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-200 shadow-md hover:shadow-lg">
                Emergency Hotline: +254 700 000 000
              </button>
            </div>
            <div>
              <p className="mb-4 text-green-100">For general welfare inquiries and support requests.</p>
              <button className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-200 shadow-md hover:shadow-lg">
                Email: welfare@nexora.community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelfareSupport;