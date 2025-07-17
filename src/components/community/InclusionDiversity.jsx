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
      icon: <Users className="w-5 h-5" />
    },
    {
      title: 'Youth Empowerment Program',
      description: 'Special support for professionals under 25',
      participants: '200+ youth',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: 'Accessibility Support',
      description: 'Ensuring equal opportunities for people with disabilities',
      participants: '50+ members',
      icon: <HandHeart className="w-5 h-5" />
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-lg border border-green-100 p-6 mb-8">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
          <HandHeart className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">Inclusion & Diversity</h3>
          <p className="text-sm text-gray-600">Building an inclusive community for everyone</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        {diversityPrograms.map((program, index) => (
          <div key={index} className="p-5 bg-gradient-to-b from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-md transition-all duration-200">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center mr-3">
                {program.icon}
              </div>
              <h4 className="font-bold text-green-800">{program.title}</h4>
            </div>
            <p className="text-green-700 mb-3">{program.description}</p>
            <p className="text-sm text-green-600 font-semibold mb-3">{program.participants}</p>
            <button className="text-green-600 hover:text-green-700 font-semibold flex items-center">
              Learn More <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InclusionDiversity;