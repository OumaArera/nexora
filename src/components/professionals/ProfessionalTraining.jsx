import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { categories } from '../../data/training.data';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import SearchFilters from './SearchFilters';
import CategoryTabs from './CategoryTabs';
import CourseCard from './CourseCard';
import PartnerSection from './PartnerSection';

const ProfessionalTraining = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [level, setLevel] = useState('');

  // Filter courses based on search and filters
  const filteredCourses = categories.reduce((acc, category) => {
    if (selectedCategory && category.id !== selectedCategory) return acc;
    
    const categoryFiltered = category.courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.provider.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLevel = !level || course.level === level;
      
      let matchesPrice = true;
      if (priceRange) {
        const [min, max] = priceRange.split('-').map(p => p.replace('+', ''));
        const minPrice = parseInt(min) || 0;
        const maxPrice = max ? parseInt(max) : Infinity;
        matchesPrice = course.price >= minPrice && course.price <= maxPrice;
      }
      
      return matchesSearch && matchesLevel && matchesPrice;
    });
    
    return [...acc, ...categoryFiltered];
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <StatsSection />
      <SearchFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        level={level}
        setLevel={setLevel}
      />
      <CategoryTabs
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      
      {/* Course Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {selectedCategory ? 
              categories.find(c => c.id === selectedCategory)?.name + ' Courses' : 
              'All Courses'
            }
          </h2>
          <div className="text-gray-600">
            {filteredCourses.length} courses found
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      
      <PartnerSection />
      
      {/* CTA Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8">Join thousands of professionals who have advanced their careers with our training programs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200">
              Browse All Courses
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200">
              Become a Training Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTraining;