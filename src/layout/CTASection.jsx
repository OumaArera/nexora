import React, { useState } from 'react';
import { CheckCircle, UserPlus, Phone } from 'lucide-react';
import ComingSoon from '../components/ComingSoon';

const CTASection = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleNavClick = (e) => {
    e.preventDefault();
    setShowComingSoon(true);
  };



  return (
    <section className="py-20 bg-gradient-to-r from-green-700 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Professional Journey?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Join thousands of professionals who are already building successful careers 
              through our platform. Your success story starts here.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 flex items-center justify-center space-x-2"
              onClick={handleNavClick}
            >
              <UserPlus className="w-5 h-5" />
              <span>Join Community</span>
            </button>
            <button className="border-2 border-green-200 text-green-200 px-8 py-4 rounded-lg font-semibold hover:bg-green-200 hover:text-green-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Contact Support</span>
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-green-200">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free Registration</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Instant Profile Setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
        <ComingSoon
          isOpen={showComingSoon}
          onClose={() => setShowComingSoon(false)}
          title="Join Community"
          message="We're working on powerful analytics tools to help you track your professional growth and community impact."
        />
      </div>
    </section>
  );
};export default CTASection;