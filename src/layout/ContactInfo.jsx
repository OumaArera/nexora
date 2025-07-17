import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    { 
      icon: Phone, 
      title: "Phone", 
      value: "+254 700 123456",
      href: "tel:+254700123456"
    },
    { 
      icon: Mail, 
      title: "Email", 
      value: "info@nexora.co.ke",
      href: "mailto:info@nexora.co.ke"
    },
    { 
      icon: MapPin, 
      title: "Address", 
      value: "Nairobi, Kenya",
      href: "#"
    }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
      <div className="space-y-4">
        {contactDetails.map((contact, index) => (
          <div key={index} className="flex items-start space-x-3">
            <contact.icon className="w-5 h-5 text-green-300 mt-0.5" />
            <div>
              <div className="text-sm text-green-200 font-medium">{contact.title}</div>
              <a 
                href={contact.href}
                className="text-green-100 hover:text-white transition-colors duration-200"
              >
                {contact.value}
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Office Hours */}
      <div className="mt-6 p-4 bg-green-700 rounded-lg">
        <h4 className="text-white font-medium mb-2">Support Hours</h4>
        <div className="text-green-100 text-sm space-y-1">
          <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
          <div>Saturday: 9:00 AM - 2:00 PM</div>
          <div>Sunday: Closed</div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;