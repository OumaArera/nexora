import React, { useState } from 'react';
import { Award, Target, Users, Heart, Shield, Lightbulb, ArrowRight } from 'lucide-react';
import ComingSoon from '../ComingSoon';

const Mission = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  
  const handleNavClick = (e) => {
    e.preventDefault();
    setShowComingSoon(true);
  };
  const missionPoints = [
    {
      icon: Users,
      title: "Unified Professional Community",
      description: "Bringing together formal and informal sector professionals under one digital roof"
    },
    {
      icon: Target,
      title: "Enhanced Visibility",
      description: "Helping professionals showcase their skills and services to a broader audience"
    },
    {
      icon: Shield,
      title: "Trust & Credibility",
      description: "Building a reliable system with verified ratings and authentic reviews"
    },
    {
      icon: Heart,
      title: "Community Welfare",
      description: "Supporting members beyond transactions with comprehensive welfare programs"
    }
  ];

  const stats = [
    { number: "18-45", label: "Target Age Range", description: "Years" },
    { number: "100%", label: "Free Profiles", description: "Always" },
    { number: "60%", label: "Professional Earnings", description: "Per Transaction" },
    { number: "40%", label: "Platform Development", description: "Reinvested" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-800">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-800/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-8">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold  mb-6">
              Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
              Empowering professionals across Kenya through a unified digital platform that bridges the gap between talent and opportunity
            </p>
          </div>
        </div>
      </div>

      {/* Main Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                Transforming Professional Services in Kenya
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nexora Welfare Community is more than just a platform—it's a movement designed to revolutionize how professionals connect, grow, and thrive in Kenya's dynamic economy.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We believe every professional, whether in the formal or informal sector, deserves visibility, credibility, and sustainable income opportunities. Our mission is to create a digital ecosystem where talent meets opportunity seamlessly.
              </p>
              <div className="flex items-center space-x-4">
                <button 
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
                  onClick={handleNavClick}
                  >
                  <span>Join Our Mission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-green-800 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-green-600 font-medium mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-600">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Points */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            What Drives Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our mission is built on four foundational pillars that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {missionPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vision Statement */}
      <div className="bg-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-8">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Vision
            </h2>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              To become Kenya's leading digital platform where every professional, regardless of their sector, can build sustainable careers, access growth opportunities, and contribute to a thriving economy.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Part of Our Mission?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of professionals who are already transforming their careers with Nexora
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors duration-200"
              onClick={handleNavClick}  
            >
              Create Your Profile
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
          <ComingSoon
            isOpen={showComingSoon}
            onClose={() => setShowComingSoon(false)}
            title="Join Community"
            // message="We're working on powerful analytics tools to help you track your professional growth and community impact."
          />
      </div>
    </div>
  );
};

export default Mission;