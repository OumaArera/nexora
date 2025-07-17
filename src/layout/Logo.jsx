import React from "react";
import logo from '../assets/logo.png';

const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-md">
      <img 
        src={logo} 
        alt="Nexora Logo" 
        className="w-full h-full object-contain"
      />
    </div>
    <span className="text-2xl font-bold text-green-800">Nexora</span>
  </div>
);

export default Logo;
