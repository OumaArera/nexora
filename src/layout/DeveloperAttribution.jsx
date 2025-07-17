import React from 'react';
import {  
  ExternalLink,
  Code
} from 'lucide-react';
import safestack from '../assets/safe-stack-logo.png';

const DeveloperAttribution = () => {
  return (
    <div className="flex items-center justify-center space-x-2 text-green-200">
      <Code className="w-4 h-4" />
      <span className="text-sm">Developed & Maintained by</span>
      <a 
        href="https://safestack.vercel.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center space-x-1 text-green-100 hover:text-white transition-colors duration-200 font-medium"
      >
        <img 
          src={safestack} 
          alt="SafeStack Technologies Logo" 
          className="h-5 w-auto object-contain"
        />
        <span>SafeStack Technologies</span>
        <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  );
};

export default DeveloperAttribution;
