import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube
} from 'lucide-react';


const SocialMedia = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          aria-label={social.label}
          className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-green-100 hover:bg-green-600 hover:text-white transition-all duration-200"
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;