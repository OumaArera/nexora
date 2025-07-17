import React from 'react';
import { 
  Award, ArrowRight, TrendingUp,
  Search, UserPlus
} from 'lucide-react';


const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      title: "Create Your Profile",
      description: "Sign up for free and build a comprehensive profile showcasing your skills, experience, and portfolio.",
      icon: UserPlus
    },
    {
      step: "02",
      title: "Get Discovered",
      description: "Clients find you through our smart search system based on your skills, location, and ratings.",
      icon: Search
    },
    {
      step: "03",
      title: "Deliver Excellence",
      description: "Complete projects, receive payments through our secure system, and build your reputation.",
      icon: Award
    },
    {
      step: "04",
      title: "Grow Your Network",
      description: "Connect with other professionals, access training, and benefit from our welfare support system.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in four simple steps and begin your journey to professional success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-green-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;