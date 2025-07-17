import React from 'react';
import { 
  Users,
  Heart,
  BookOpen,
  Handshake
} from 'lucide-react';

const Services = () => {
  const services = [
    { title: "Professional Profiles", href: "/professionals/browse", icon: Users },
    { title: "Service Matching", href: "/services/matching", icon: Handshake },
    { title: "Skill Development", href: "/professionals/training", icon: BookOpen },
    { title: "Community Networking", href: "/community/networking-events", icon: Users },
    { title: "Welfare Programs", href: "/community/welfare", icon: Heart },
    { title: "CSR Initiatives", href: "/community/csr", icon: Heart }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
      <ul className="space-y-3">
        {services.map((service, index) => (
          <li key={index}>
            <a 
              href={service.href}
              className="flex items-center space-x-2 text-green-100 hover:text-white transition-colors duration-200"
            >
              <service.icon className="w-4 h-4" />
              <span>{service.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;