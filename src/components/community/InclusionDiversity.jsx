import React from 'react';
import { 
  Users, 
  BookOpen,
  HandHeart,
  ChevronRight
} from 'lucide-react';


const InclusionDiversity = () => {
  const diversityPrograms = [
    {
      title: 'Women in Trades Initiative',
      description: 'Supporting women in traditionally male-dominated professions',
      participants: '150+ women',
      icon: <Users className="w-5 h-5 text-purple-500" />
    },
    {
      title: 'Youth Empowerment Program',
      description: 'Special support for professionals under 25',
      participants: '200+ youth',
      icon: <BookOpen className="w-5 h-5 text-blue-500" />
    },
    {
      title: 'Accessibility Support',
      description: 'Ensuring equal opportunities for people with disabilities',
      participants: '50+ members',
      icon: <HandHeart className="w-5 h-5 text-green-500" />
    }
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center mb-4">
        <HandHeart className="w-6 h-6 text-purple-500 mr-3" />
        <h3 className="text-xl font-semibold text-gray-800">Inclusion & Diversity</h3>
      </div>
      
      <p className="text-gray-600 mb-4">
        Our commitment to creating an inclusive environment where everyone can thrive, regardless of background or circumstances.
      </p>
      
      <div className="grid md:grid-cols-3 gap-4">
        {diversityPrograms.map((program, index) => (
          <div key={index} className="p-4 bg-purple-50 rounded-lg">
            <div className="flex items-center mb-3">
              {program.icon}
              <h4 className="font-semibold text-purple-800 ml-2">{program.title}</h4>
            </div>
            <p className="text-sm text-purple-700 mb-2">{program.description}</p>
            <p className="text-xs text-purple-600 font-medium">{program.participants}</p>
            <button className="mt-3 text-purple-500 hover:text-purple-700 text-sm">
              Learn More <ChevronRight className="w-4 h-4 inline" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InclusionDiversity;