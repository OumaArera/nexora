import React from 'react';
import { X, Clock, Bell } from 'lucide-react';

const ComingSoon = ({ isOpen, onClose, title = "Coming Soon", message = "This feature is currently under development. Stay tuned for updates!" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-2xl p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-green-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 rounded-full p-2">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            {message}
          </p>

          {/* Notification signup */}
          <div className="bg-green-50 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2 text-green-700 mb-2">
              <Bell className="w-5 h-5" />
              <span className="font-medium">Get notified when we launch</span>
            </div>
            <p className="text-sm text-green-600">
              We'll send you an email as soon as this feature becomes available.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
            >
              Got it
            </button>
            <button
              onClick={onClose}
              className="flex-1 border-2 border-green-600 text-green-600 py-3 px-4 rounded-lg font-medium hover:bg-green-50 transition-colors duration-200"
            >
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;