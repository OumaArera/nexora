
import React, { useState } from 'react';
import { 
  Search, Filter, Clock, Users, Award, Star, 
  BookOpen, Play, CheckCircle, ChevronRight, 
  Calendar, MapPin, Globe, CreditCard, Shield,
  TrendingUp, Briefcase, Code, Palette, Wrench,
  GraduationCap, Heart, Building, Camera
} from 'lucide-react';
import safestack from '../assets/safe-stack-logo.png';
import nexora from '../assets/logo.png'

// Category data
export const categories = [
  {
    id: 'formal',
    name: 'Formal Sector',
    icon: Building,
    color: 'bg-blue-100 text-blue-800',
    courses: [
      {
        id: 1,
        title: 'Digital Marketing Mastery',
        provider: 'Nexora Academy',
        duration: '8 weeks',
        level: 'Intermediate',
        price: 15000,
        rating: 4.8,
        students: 1247,
        image: safestack,
        certified: true,
        type: 'online',
        description: 'Master digital marketing strategies for the modern business landscape',
        skills: ['SEO', 'Social Media Marketing', 'Content Strategy', 'Analytics']
      },
      {
        id: 2,
        title: 'Project Management Professional',
        provider: 'Partner Institute',
        duration: '12 weeks',
        level: 'Advanced',
        price: 35000,
        rating: 4.9,
        students: 856,
        image: safestack,
        certified: true,
        type: 'hybrid',
        description: 'Get PMP certified and advance your project management career',
        skills: ['Project Planning', 'Risk Management', 'Team Leadership', 'Agile']
      }
    ]
  },
  {
    id: 'informal',
    name: 'Informal Sector',
    icon: Wrench,
    color: 'bg-green-100 text-green-800',
    courses: [
      {
        id: 3,
        title: 'Modern Carpentry Techniques',
        provider: 'Skilled Crafters Hub',
        duration: '6 weeks',
        level: 'Beginner',
        price: 8000,
        rating: 4.7,
        students: 432,
        image: safestack,
        certified: true,
        type: 'in-person',
        description: 'Learn contemporary carpentry methods and safety practices',
        skills: ['Furniture Making', 'Tool Mastery', 'Safety Protocols', 'Design']
      },
      {
        id: 4,
        title: 'Professional Tailoring & Fashion',
        provider: 'Fashion Skills Academy',
        duration: '10 weeks',
        level: 'Intermediate',
        price: 12000,
        rating: 4.6,
        students: 298,
        image: safestack,
        certified: true,
        type: 'in-person',
        description: 'Master tailoring techniques and fashion design principles',
        skills: ['Pattern Making', 'Garment Construction', 'Fashion Design', 'Business']
      }
    ]
  },
  {
    id: 'creative',
    name: 'Creative Arts',
    icon: Palette,
    color: 'bg-purple-100 text-purple-800',
    courses: [
      {
        id: 5,
        title: 'Photography & Visual Storytelling',
        provider: 'Visual Arts Collective',
        duration: '8 weeks',
        level: 'Beginner',
        price: 18000,
        rating: 4.8,
        students: 567,
        image: safestack,
        certified: true,
        type: 'hybrid',
        description: 'Master photography techniques and build your visual storytelling skills',
        skills: ['Camera Operation', 'Lighting', 'Composition', 'Post-Processing']
      }
    ]
  },
  {
    id: 'technology',
    name: 'Technology',
    icon: Code,
    color: 'bg-indigo-100 text-indigo-800',
    courses: [
      {
        id: 6,
        title: 'Full Stack Web Development',
        provider: 'Tech Academy Kenya',
        duration: '16 weeks',
        level: 'Intermediate',
        price: 45000,
        rating: 4.9,
        students: 1089,
        image: safestack,
        certified: true,
        type: 'online',
        description: 'Build modern web applications from front-end to back-end',
        skills: ['React', 'Node.js', 'Database Design', 'API Development']
      }
    ]
  }
];

// Training providers data
export const providers = [
  {
    id: 1,
    name: 'Nexora Academy',
    logo: nexora,
    verified: true,
    rating: 4.8,
    courses: 24,
    students: 5420
  },
  {
    id: 2,
    name: 'Partner Institute',
    logo: safestack,
    verified: true,
    rating: 4.7,
    courses: 18,
    students: 3210
  },
  {
    id: 3,
    name: 'Skilled Crafters Hub',
    logo: safestack,
    verified: true,
    rating: 4.6,
    courses: 12,
    students: 2890
  }
];
