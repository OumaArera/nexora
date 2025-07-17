import React from 'react';
import { 
  Clock, Users, Award, Star, BookOpen } from 'lucide-react';

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
    <div className="relative">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-contain bg-gray-50"
      />
      <div className="absolute top-4 left-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          course.type === 'online' ? 'bg-blue-100 text-blue-800' :
          course.type === 'in-person' ? 'bg-green-100 text-green-800' :
          'bg-purple-100 text-purple-800'
        }`}>
          {course.type === 'online' ? 'Online' : course.type === 'in-person' ? 'In-Person' : 'Hybrid'}
        </span>
      </div>
      {course.certified && (
        <div className="absolute top-4 right-4">
          <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
            <Award className="w-3 h-3" />
            <span>Certified</span>
          </div>
        </div>
      )}
    </div>
    
    <div className="p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-600">{course.provider}</span>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{course.rating}</span>
        </div>
      </div>
      
      <h3 className="font-bold text-lg text-gray-900 mb-2">{course.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{course.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {course.skills.slice(0, 3).map((skill, index) => (
          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
            {skill}
          </span>
        ))}
        {course.skills.length > 3 && (
          <span className="text-gray-500 text-xs">+{course.skills.length - 3} more</span>
        )}
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{course.students}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-600">
            KES {course.price.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">{course.level}</div>
        </div>
      </div>
      
      <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2">
        <BookOpen className="w-4 h-4" />
        <span>Enroll Now</span>
      </button>
    </div>
  </div>
);


export default CourseCard;