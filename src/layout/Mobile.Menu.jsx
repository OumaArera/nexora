import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import Logo from './Logo';


const MobileMenu = ({ isOpen, onClose, navigationItems }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
      <div className="bg-white w-80 h-full overflow-y-auto">
        <div className="p-4 border-b border-green-100">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              onClick={onClose}
              className="p-2 text-gray-600 hover:text-green-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <nav className="p-4 space-y-4">
          {navigationItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenSubmenu(openSubmenu === index ? null : index)}
                className="flex items-center justify-between w-full text-left px-4 py-3 text-green-800 hover:bg-green-50 rounded-lg font-medium"
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSubmenu === index ? 'rotate-180' : ''}`} />
              </button>
              
              {openSubmenu === index && (
                <div className="mt-2 ml-4 space-y-2">
                  {item.items.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg"
                    >
                      <subItem.icon className="w-4 h-4" />
                      <div>
                        <div className="font-medium text-sm">{subItem.title}</div>
                        <div className="text-xs text-gray-500">{subItem.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;