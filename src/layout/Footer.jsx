import React from 'react';
import Logo from './Logo';
import QuickLinks from './QuickLinks';
import Services from './Footer.Services';
import Community from './Footer.Community';
import ContactInfo from './ContactInfo';
import SocialMedia from './SocialMedia';
import Newsletter from './Newsletter';
import DeveloperAttribution from './DeveloperAttribution';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-800 text-green-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <Logo />
            <p className="text-green-100 leading-relaxed">
              Empowering professionals across Kenya through a unified digital platform. 
              Build your profile, connect with opportunities, and grow your career.
            </p>
            <Newsletter />
            <SocialMedia />
          </div>


          {/* Quick Links */}
          <div className="lg:col-span-1">
            <QuickLinks />
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <Services />
          </div>

          {/* Contact & Community */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>

        {/* Community Section */}
        <div className="mt-12 pt-8 border-t border-green-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Community />
            
            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="/privacy" className="text-green-100 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="/terms" className="text-green-100 hover:text-white transition-colors duration-200">Terms of Service</a></li>
                <li><a href="/cookies" className="text-green-100 hover:text-white transition-colors duration-200">Cookie Policy</a></li>
                <li><a href="/disclaimer" className="text-green-100 hover:text-white transition-colors duration-200">Disclaimer</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="/help" className="text-green-100 hover:text-white transition-colors duration-200">Help Center</a></li>
                <li><a href="/faq" className="text-green-100 hover:text-white transition-colors duration-200">FAQ</a></li>
                <li><a href="/contact" className="text-green-100 hover:text-white transition-colors duration-200">Contact Support</a></li>
                <li><a href="/feedback" className="text-green-100 hover:text-white transition-colors duration-200">Feedback</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 bg-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-green-200 text-sm">
                © {currentYear} Nexora Welfare Community. All rights reserved.
              </p>
            </div>
            
            <DeveloperAttribution />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;