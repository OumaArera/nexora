import React, { useState } from 'react';
import { 
  Award, Star, Users, User, Briefcase, Heart, 
  TrendingUp, MapPin, Calendar, ArrowRight,
  Quote, Filter, Search, ChevronLeft, ChevronRight
} from 'lucide-react';
import { successStories, testimonials } from '../../data/success.stories';

const SuccessStories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const categories = [
    { id: 'all', label: 'All Stories', icon: Star },
    { id: 'formal', label: 'Formal Sector', icon: Briefcase },
    { id: 'informal', label: 'Informal Sector', icon: Users },
    { id: 'welfare', label: 'Welfare Support', icon: Heart },
    { id: 'networking', label: 'Networking', icon: TrendingUp }
  ];


  const impactStats = [
    { number: "2,500+", label: "Lives Transformed", icon: Users },
    { number: "KSh 50M+", label: "Income Generated", icon: TrendingUp },
    { number: "1,200+", label: "Businesses Started", icon: Briefcase },
    { number: "KSh 5M+", label: "Welfare Distributed", icon: Heart }
  ];

  const filteredStories = activeCategory === 'all' 
    ? successStories 
    : successStories.filter(story => story.category === activeCategory);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Real stories of transformation, empowerment, and community impact across Kenya's professional landscape
            </p>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Testimonial Carousel */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Voices of Success
            </h2>
            <p className="text-lg text-gray-600">
              Hear directly from community members whose lives have been transformed
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
              <Quote className="w-12 h-12 text-green-600 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-green-600">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Story Categories Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stories by Category
          </h2>
          <p className="text-lg text-gray-600">
            Explore success stories across different sectors and support areas
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow-md'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Success Stories Grid - Single Story Example */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <div key={story.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  {/* <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-green-100"
                  /> */}
                  <User className="w-16 h-16 text-green-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {story.name}
                    </h3>
                    <p className="text-green-600 font-medium">
                      {story.role}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {story.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {story.story}
                </p>

                <div className="bg-green-50 rounded-2xl p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Before</p>
                      <p className="font-semibold text-gray-900">{story.before}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">After</p>
                      <p className="font-semibold text-green-600">{story.after}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {story.impact}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {story.timeframe}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder cards for additional stories */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-2 border-dashed border-gray-200">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-500 mb-2">
                More Stories Coming Soon
              </h3>
              <p className="text-gray-400">
                We're collecting more inspiring stories from our community members
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-2 border-dashed border-gray-200">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-500 mb-2">
                Share Your Story
              </h3>
              <p className="text-gray-400 mb-4">
                Have you been impacted by our community? We'd love to hear from you
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Submit Story
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Join thousands of professionals who have transformed their careers and lives through our supportive community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Join Community</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Browse Professionals</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Be Featured?
            </h3>
            <p className="text-gray-600 mb-6">
              Share your success story and inspire others in the community
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center mx-auto space-x-2">
              <Award className="w-5 h-5" />
              <span>Submit Your Story</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;