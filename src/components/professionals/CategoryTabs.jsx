import React from 'react';
import { categories } from '../../data/training.data';


const CategoryTabs = ({ selectedCategory, setSelectedCategory }) => (
  <div className="bg-gray-50 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Training Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(category => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(selectedCategory === category.id ? '' : category.id)}
              className={`p-6 rounded-xl border-2 transition-all duration-200 hover:shadow-lg ${
                selectedCategory === category.id
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 bg-white hover:border-green-300'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mx-auto mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.courses.length} courses available</p>
            </button>
          );
        })}
      </div>
    </div>
  </div>
);

export default CategoryTabs;