import React from 'react';
import { ChevronDown } from 'lucide-react';

const DropdownMenu = ({ title, items, isOpen, onToggle, icon: Icon }) => {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center space-x-1 px-4 py-2 text-green-800 hover:text-green-600 font-medium transition-colors duration-200"
      >
        <Icon className="w-4 h-4" />
        <span>{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-green-100 z-50">
          <div className="py-2">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-150"
              >
                <item.icon className="w-4 h-4" />
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-gray-500">{item.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;