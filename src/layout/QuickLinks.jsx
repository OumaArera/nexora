import React from 'react';
import { 
  Briefcase,
  BookOpen,
  Shield,
  Award,
  Search,
  UserPlus
} from 'lucide-react';

const QuickLinks = () => {
  const links = [
    { title: "Browse Professionals", href: "/professionals/browse", icon: Search },
    { title: "Join Community", href: "/join", icon: UserPlus },
    { title: "Job Opportunities", href: "/community/jobs", icon: Briefcase },
    { title: "Training Programs", href: "/professionals/training", icon: BookOpen },
    { title: "Welfare Support", href: "/community/welfare", icon: Shield },
    { title: "Success Stories", href: "/about/stories", icon: Award }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
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
export default QuickLinks;