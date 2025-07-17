import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mwangi",
      role: "Graphic Designer",
      sector: "Formal Sector",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "Nexora has transformed my freelance career. The platform's rating system helped me build trust with clients, and I've doubled my income in just 6 months."
    },
    {
      name: "John Kiprotich",
      role: "Carpenter",
      sector: "Informal Sector", 
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "As a skilled carpenter, I struggled to find consistent work. Nexora connected me with clients who value quality craftsmanship. The welfare support gives me peace of mind."
    },
    {
      name: "Dr. Grace Wanjiku",
      role: "Legal Consultant",
      sector: "Formal Sector",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "The networking opportunities on Nexora are incredible. I've found mentorship, collaboration partners, and learned new skills through their training programs."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from professionals who have transformed their careers with Nexora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-green-200 mb-4" />
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-green-600 font-medium">{testimonial.sector}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;