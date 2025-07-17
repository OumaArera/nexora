import React from 'react';
import { Users, User, Linkedin, Mail, Phone, Award, Star, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { teamMembers, advisors } from '../../data/leaders.data';

const LeadershipTeam = () => {
  

  const coreValues = [
    { icon: Users, title: "Collaborative Leadership", description: "We lead by example and empower our team" },
    { icon: Star, title: "Innovation First", description: "Constantly pushing boundaries in tech and community" },
    { icon: Award, title: "Excellence", description: "Delivering exceptional value to our community" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              The passionate minds behind Nexora Welfare Community, dedicated to empowering professionals across Kenya
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Leadership Philosophy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built on principles of transparency, innovation, and community-first thinking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the founders and leaders driving Nexora's vision forward
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0 w-32 h-32 rounded-full border-4 border-green-100 bg-green-50 flex items-center justify-center overflow-hidden">
                    {member.image ? (
                        <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        />
                    ) : (
                        <User className="w-16 h-16 text-green-600" />
                    )}
                    </div>

                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-green-600 font-semibold mb-4">
                      {member.role}
                    </p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{member.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Since {member.joinDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-green-600" />
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-green-600" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Contact</h4>
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href={`mailto:${member.contact.email}`}
                        className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">{member.contact.email}</span>
                      </a>
                      {member.contact.phone && (
                        <a 
                          href={`tel:${member.contact.phone}`}
                          className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">{member.contact.phone}</span>
                        </a>
                      )}
                      <a 
                        href={`https://linkedin.com/in/${member.contact.linkedin}`}
                        className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advisory Board */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advisory Board
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals guiding our strategic direction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {advisor.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-2">
                    {advisor.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    {advisor.expertise}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {advisor.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Be part of Kenya's fastest-growing professional network
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Join Community
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200 flex items-center justify-center gap-2">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;