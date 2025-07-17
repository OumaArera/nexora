import React from 'react';
import { 
  Users, Briefcase, Heart, Star,
  Search, UserPlus, BookOpen
} from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white overflow-hidden">
      {/* Beautiful Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        {/* Animated floating circles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-300 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-green-400 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-200 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-green-300 rounded-full blur-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent transform -skew-y-6 scale-150"></div>
      </div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        ></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Empowering 
                <span className="block text-green-200 bg-gradient-to-r from-green-200 to-green-100 bg-clip-text ">
                  Kenyan Professionals
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
                Join the community that connects skilled professionals with opportunities, 
                builds trust through verified ratings, and supports your growth journey.
              </p>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center group">
                <div className="text-3xl font-bold text-green-200 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className="text-sm text-green-100">Professionals</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-green-200 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm text-green-100">Jobs Completed</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-green-200 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-sm text-green-100">Satisfaction Rate</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <UserPlus className="w-5 h-5" />
                <span>Join Community</span>
              </button>
              <button className="border-2 border-green-200 text-green-200 px-8 py-4 rounded-lg font-semibold hover:bg-green-200 hover:text-green-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Find Professionals</span>
              </button>
            </div>
          </div>
          
          {/* Right Content - Professional Cards */}
          <div className="relative z-10">
            <div className="grid grid-cols-2 gap-4">
              {/* Professional Cards */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-3 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="font-semibold text-green-100">Formal Sector</h3>
                <p className="text-sm text-green-200">Consultants, specialists & experts</p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-green-200 ml-2">4.8</span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-3 mt-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="font-semibold text-green-100">Informal Sector</h3>
                <p className="text-sm text-green-200">Artisans, freelancers & skilled workers</p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-green-200 ml-2">4.6</span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-3 -mt-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="font-semibold text-green-100">Welfare Support</h3>
                <p className="text-sm text-green-200">Community care & assistance</p>
                <div className="text-sm text-green-200">Active 24/7</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-3 mt-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="font-semibold text-green-100">Training</h3>
                <p className="text-sm text-green-200">Skill development & certification</p>
                <div className="text-sm text-green-200">200+ Courses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;