import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo11.png';

const Logo = () => (
  <Link to="/" className="flex items-center space-x-2">
    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-md">
      <img 
        src={logo} 
        alt="Nexora Logo" 
        className="w-full h-full object-contain"
      />
    </div>
    <span className="text-2xl font-bold text-green-800">Nexora</span>
  </Link>
);

export default Logo;
