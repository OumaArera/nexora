import React from 'react';
import ReactDOM from 'react-dom';
import { Phone, Mail, X } from 'lucide-react';

const ContactOverlay = ({ contact, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-semibold text-gray-800 mb-4">Contact Details</h2>
        <div className="space-y-4 text-sm text-gray-700">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-green-600" />
            <a href={`tel:${contact.phone}`} className="text-green-700 hover:underline">
              {contact.phone}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-green-600" />
            <a href={`mailto:${contact.email}`} className="text-green-700 hover:underline">
              {contact.email}
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ContactOverlay;
