import React, { useState } from 'react';
import { 
    Menu, Users, Briefcase, Heart, 
    BookOpen, Search, UserPlus, Phone, 
    Shield, Award, Handshake 
} from 'lucide-react';
import Logo from './Logo';
import DropdownMenu from './Dropdown.Menu';
import MobileMenu from './Mobile.Menu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigationItems = [
    {
      title: "Home",
      icon: Users,
      href: "/",
      items: []
    },
    {
      title: "About Us",
      icon: Heart,
      items: [
        { title: "Our Mission", description: "Empowering professionals across Kenya", href: "/about/mission", icon: Award },
        { title: "Community Values", description: "Building trust and collaboration", href: "/about/values", icon: Handshake },
        { title: "Leadership Team", description: "Meet our founding team", href: "/about/team", icon: Users },
        { title: "Success Stories", description: "Real impact on professionals", href: "/about/stories", icon: Award }
      ]
    },
    {
      title: "Professional Listings",
      icon: Briefcase,
      items: [
        { title: "Browse Professionals", description: "Find verified service providers", href: "/professionals/browse", icon: Search },
        { title: "Formal Sector", description: "Consultants, specialists & experts", href: "/professionals/formal", icon: Briefcase },
        { title: "Informal Sector", description: "Artisans, freelancers & skilled workers", href: "/professionals/informal", icon: Users },
        { title: "Top Rated", description: "Highest rated professionals", href: "/professionals/top-rated", icon: Award }
      ]
    },
    {
      title: "Community",
      icon: Users,
      items: [
        { title: "Welfare Support", description: "Emergency & financial assistance", href: "/community/welfare", icon: Shield },
        { title: "Job Opportunities", description: "Latest projects & positions", href: "/community/jobs", icon: Briefcase },
        { title: "Networking Events", description: "Connect with professionals", href: "/community/events", icon: Users },
        { title: "Training Programs", description: "Skill development & certification", href: "/community/training", icon: BookOpen },
        { title: "CSR Initiatives", description: "Community impact projects", href: "/community/csr", icon: Heart }
      ]
    }
  ];

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className="bg-white shadow-lg border-b-2 border-green-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              item.items.length > 0 ? (
                <DropdownMenu
                  key={index}
                  title={item.title}
                  items={item.items}
                  isOpen={openDropdown === index}
                  onToggle={() => handleDropdownToggle(index)}
                  icon={item.icon}
                />
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 text-green-800 hover:text-green-600 font-medium transition-colors duration-200"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </a>
              )
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/join"
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>Join Community</span>
            </a>
            
            <div className="flex items-center space-x-2 text-green-700">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Support: +254 706 035919</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-green-800 hover:text-green-600"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile CTA Bar */}
      <div className="lg:hidden bg-green-50 px-4 py-3 border-t border-green-100">
        <div className="flex items-center justify-between">
          <a
            href="/join"
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2 text-sm"
          >
            <UserPlus className="w-4 h-4" />
            <span>Join Now</span>
          </a>
          
          <div className="flex items-center space-x-2 text-green-700">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">+254 706 035919</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
      />

      {/* Overlay for desktop dropdowns */}
      {openDropdown !== null && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setOpenDropdown(null)}
        />
      )}
    </header>
  );
};

export default Header;