import React from 'react';
import { BookOpen, Play } from 'lucide-react';


const HeroSection = () => (
  <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
    <div className="absolute inset-0 bg-black/20"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Professional Training
          <span className="block text-green-300">That Transforms Careers</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Unlock your potential with certified courses designed for formal and informal sector professionals across Kenya
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 flex items-center justify-center space-x-2">
            <BookOpen className="w-5 h-5" />
            <span>Browse Courses</span>
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-all duration-200 flex items-center justify-center space-x-2">
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;