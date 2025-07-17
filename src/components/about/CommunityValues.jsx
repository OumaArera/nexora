import React, { useState } from 'react';
import { Handshake, Heart, Shield, Users, Star, Award, CheckCircle, ArrowRight } from 'lucide-react';
import ComingSoon from '../ComingSoon';

const CommunityValues = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  
  const handleNavClick = (e) => {
    e.preventDefault();
    setShowComingSoon(true);
  };
  const coreValues = [
    {
      icon: Handshake,
      title: "Trust & Collaboration",
      description: "Building lasting professional relationships through transparency and mutual respect",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Heart,
      title: "Community Welfare",
      description: "Supporting our members beyond transactions with comprehensive care programs",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: Shield,
      title: "Integrity & Security",
      description: "Maintaining the highest standards of data protection and ethical practices",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Users,
      title: "Inclusive Growth",
      description: "Empowering professionals from all backgrounds to thrive in the digital economy",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Continuously improving our platform to deliver exceptional value to our community",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Celebrating achievements and contributions that make our community stronger",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    }
  ];

  const principles = [
    {
      title: "Transparency First",
      description: "All interactions, ratings, and processes are open and transparent to build trust within our community.",
      icon: CheckCircle
    },
    {
      title: "Equal Opportunity",
      description: "Every professional, regardless of sector or background, has equal access to opportunities and growth.",
      icon: Users
    },
    {
      title: "Continuous Learning",
      description: "We invest in our members' growth through training, workshops, and skill development programs.",
      icon: Star
    },
    {
      title: "Mutual Support",
      description: "Members support each other through mentorship, referrals, and community-driven initiatives.",
      icon: Heart
    }
  ];

  const impactStats = [
    { number: "10K+", label: "Community Members", description: "And growing daily" },
    { number: "95%", label: "Satisfaction Rate", description: "Member feedback" },
    { number: "500+", label: "Success Stories", description: "Lives transformed" },
    { number: "50+", label: "Professional Categories", description: "Diverse expertise" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
              <Handshake className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Values
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              The principles that guide our community and shape every interaction within our platform
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These six fundamental values form the foundation of everything we do at Nexora Welfare Community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Principles Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Guiding Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How we put our values into action every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <principle.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our values translate into real-world results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values in Action */}
      <div className="bg-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Values in Action
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Every feature, every interaction, and every decision we make is guided by our core values. From our transparent rating system to our comprehensive welfare programs, we're committed to building trust and fostering collaboration.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-green-100">Verified professional profiles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-green-100">Transparent rating and review system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-green-100">Comprehensive welfare support programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-green-100">Equal opportunities for all members</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6">Community Commitment</h3>
              <p className="text-green-100 mb-6 leading-relaxed">
                We reinvest 40% of every transaction back into our community through platform improvements, training programs, welfare initiatives, and CSR activities.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">20%</div>
                  <div className="text-sm text-green-100">Platform Development</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">20%</div>
                  <div className="text-sm text-green-100">Community Programs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Share Our Values?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join a community that puts trust, collaboration, and mutual growth at the center of everything we do
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors duration-200 flex items-center justify-center space-x-2"
              onClick={handleNavClick} 
            >
              <span>Join Our Community</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors duration-200">
              Learn More About Us
            </button>
          </div>
        </div>
          <ComingSoon
            isOpen={showComingSoon}
            onClose={() => setShowComingSoon(false)}
            title="Join Community"
          />
      </div>
    </div>
  );
};

export default CommunityValues;