import React from 'react';
import { 
  Users,
  Briefcase,
  BookOpen,
  Shield,
  Award,
} from 'lucide-react';


const Community = () => {
  const communityLinks = [
    { title: "Formal Sector", href: "/professionals/formal", icon: Briefcase },
    { title: "Informal Sector", href: "/professionals/informal", icon: Users },
    { title: "Networking Events", href: "/community/events", icon: Users },
    { title: "Member Support", href: "/community/support", icon: Shield },
    { title: "Code of Conduct", href: "/community/code", icon: Award },
    { title: "Community Guidelines", href: "/community/guidelines", icon: BookOpen }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Community</h3>
      <ul className="space-y-3">
        {communityLinks.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href}
              className="flex items-center space-x-2 text-green-100 hover:text-white transition-colors duration-200"
            >
              <link.icon className="w-4 h-4" />
              <span>{link.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Community;