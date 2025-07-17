import React from 'react';
import { 
  Users, Shield, Star,
  Search, BookOpen, Handshake
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Professional Profiles",
      description: "Create detailed profiles showcasing your skills, experience, and portfolio to attract the right clients.",
      color: "bg-blue-500"
    },
    {
      icon: Star,
      title: "Verified Ratings",
      description: "Build trust through transparent client reviews and ratings that reflect your service quality.",
      color: "bg-yellow-500"
    },
    {
      icon: Search,
      title: "Smart Discovery",
      description: "Advanced search filters help clients find the perfect professional based on skills, location, and ratings.",
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Welfare Support",
      description: "Access emergency assistance, insurance partnerships, and community support when you need it most.",
      color: "bg-purple-500"
    },
    {
      icon: BookOpen,
      title: "Skill Development",
      description: "Continuous learning through training programs, workshops, and certification courses.",
      color: "bg-indigo-500"
    },
    {
      icon: Handshake,
      title: "Networking",
      description: "Connect with professionals across industries, share opportunities, and build valuable relationships.",
      color: "bg-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Nexora?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide everything you need to grow your professional presence, 
            connect with opportunities, and build a sustainable career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
                <div className={`w-14 h-14 ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;