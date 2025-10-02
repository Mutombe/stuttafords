import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Clock, MapPin, Menu, X, Truck, Package, 
  Plane, Ship, Warehouse, Users, Star, ArrowRight, 
  CheckCircle, Globe, Building2,
  MessageCircle, ChevronDown, Quote, Zap, Shield, Award,
  Target, Eye, Heart, Lightbulb
} from 'lucide-react';
import { CiFaceSmile } from "react-icons/ci";
import { LiaAwardSolid } from "react-icons/lia";
import { PiBuildingOfficeThin } from "react-icons/pi";
import { PiWarehouseThin } from "react-icons/pi";
import { PiEyeThin } from "react-icons/pi";
import { PiCubeFocusThin } from "react-icons/pi";


const AboutPage = () => {
  const clients = [
    { name: "CBZ", logo: "/cbz1.png", industry: "Banking" },
    { name: "PSMI", logo: "/psms.png", industry: "Manufacturing" },
    { name: "Delta", logo: "/delta.jpg", industry: "Beverages" },
    { name: "Nyaradzo", logo: "/nyaradzo.jpeg", industry: "Funeral Services" },
    { name: "ZETDC", logo: "/zetdc.png", industry: "Energy" }
  ];
  
  const testimonials = [
    {
      name: "A. Chabata",
      company: "Edgars",
      text: "The service was excellent. I will recommend other clients who might need your service.",
      rating: 5,
      role: "Operations Manager"
    },
    {
      name: "Justin Ray",
      company: "US Embassy - Zambia",
      text: "By far the best moving experience we have had! Get name tags for the crew so they can be cited for their good work.",
      rating: 5,
      role: "Facilities Director"
    },
    {
      name: "Brenda Makuyana",
      company: "Total Zimbabwe",
      text: "All the goods has been properly loaded with great care and the loading crew is very friendly, effective and efficient.",
      rating: 5,
      role: "Logistics Coordinator"
    }
  ];

  const stats = [
    { number: "30+", label: "Years of Excellence", icon: LiaAwardSolid },
    { number: "1900+", label: "Happy Clients", icon: CiFaceSmile  },
    { number: "750+", label: "Corporate Moves", icon: PiBuildingOfficeThin },
    { number: "24K", label: "Sqm Warehouse", icon: PiWarehouseThin }
  ];

  // Perfect Hexagon component for honeycomb design
  const HexagonCard = ({ client, index, isCenter = false }) => {
    const size = isCenter ? 140 : 120;
    const radius = size / 2.3; // Perfect hexagon radius
    const centerX = size / 2;
    const centerY = size / 2;
    
    // Calculate perfect hexagon points (flat-topped hexagon)
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i * 60 - 90) * Math.PI / 180; // Start from top, go clockwise
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    const hexagonPath = `M${points.join(' L')} Z`;
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative group cursor-pointer"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          className="absolute inset-0 transition-all duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
            <filter id={`shadow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,0,0,0.1)"/>
            </filter>
          </defs>
          <path
            d={hexagonPath}
            fill="white"
            stroke={`url(#gradient-${index})`}
            strokeWidth="3"
            filter={`url(#shadow-${index})`}
          />
        </svg>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <div className={`${isCenter ? 'w-16 h-16' : 'w-12 h-12'} mb-3 flex items-center justify-center`}>
            <img 
              src={client.logo} 
              alt={`${client.name} logo`}
              className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
          </div>
          {/*<span className={`${isCenter ? 'text-base' : 'text-sm'} font-bold text-gray-800 text-center`}>
            {client.name}
          </span>
          <span className={`${isCenter ? 'text-sm' : 'text-xs'} text-gray-500 text-center mt-1`}>
            {client.industry}
          </span>*/}
        </div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
             style={{ clipPath: `polygon(${points.map(point => {
               const [x, y] = point.split(',');
               return `${(x/size)*100}% ${(y/size)*100}%`;
             }).join(', ')})` }}>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section - Modern Split Layout */}
      <section className="relative min-h-screen flex items-center">
        {/* Background with curved overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url('/3.jpg')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/90 via-red-900/80 to-orange-800/90"></div>
          </div>
        
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-white"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-sm text-sm font-medium mb-8">
                <Truck className="h-4 w-4 mr-2" />
                TRUSTED LOGISTICS PARTNER
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="block">Moving</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Excellence
                </span>
                <span className="block text-4xl lg:text-5xl mt-4 opacity-90">Since 1993</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
                A full-service logistics & cargo company committed to giving the best 
                to our various clients at affordable prices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 px-8 py-4 rounded-sm text-lg font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  <ArrowRight className="h-5 w-5" />
                  Discover Our Story
                </motion.button>
              </div>
            </motion.div>

            {/* Right Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white/10 backdrop-blur-lg rounded-sm p-6 text-center border border-white/20 shadow-2xl group"
                  >
                    <stat.icon className="h-8 w-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-sm blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-sm blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Creative Layout */}
      <section className="py-32 bg-white relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-50 to-red-50 rounded-sm blur-3xl opacity-60"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Purpose</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving forward with clear vision and unwavering mission
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-sm transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-sm p-8 shadow-2xl border border-orange-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-sm p-4">
                    <PiEyeThin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become the leading and preferred provider of relocation services locally, 
                  regionally and internationally, setting the standard for excellence in logistics.
                </p>
                
                {/* Decorative dots */}
                <div className="absolute top-4 right-4 grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-orange-200 rounded-sm"></div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-sm transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-sm p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-sm p-4">
                    <PiCubeFocusThin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To generate a profitable return to all our stakeholders through the provision of 
                  unmatched first class service and to uphold professional business practices which 
                  emphasize utilization of resources in an environmentally friendly manner.
                </p>
                
                {/* Decorative pattern */}
                <div className="absolute bottom-4 right-4">
                  <div className="w-16 h-16 border-2 border-gray-200 rounded-sm flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Companies - Honeycomb Design */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute top-20 left-20 w-64 h-64 border border-orange-200 rounded-sm opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-red-200 rounded-sm opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to serve some of Zimbabwe's most respected organizations across various industries
            </p>
          </motion.div>

          {/* Perfect Honeycomb Grid */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Arrange hexagons in perfect honeycomb pattern */}
              <div className="flex flex-col items-center">
                {/* Top row - 2 hexagons */}
                <div className="flex" style={{ gap: '40px' }}>
                  <HexagonCard client={clients[0]} index={0} />
                  <HexagonCard client={clients[1]} index={1} />
                </div>
                
                {/* Middle row - 1 center hexagon (perfectly positioned) */}
                <div className="flex justify-center" style={{ marginTop: '-30px' }}>
                  <HexagonCard client={clients[2]} index={2} isCenter={true} />
                </div>
                
                {/* Bottom row - 2 hexagons */}
                <div className="flex" style={{ gap: '40px', marginTop: '-30px' }}>
                  <HexagonCard client={clients[3]} index={3} />
                  <HexagonCard client={clients[4]} index={4} />
                </div>
              </div>
              
              {/* Perfect connecting lines between hexagons */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                <defs>
                  <linearGradient id="perfectLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#dc2626" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {/* Connecting lines that follow hexagon edges */}
                <line x1="35%" y1="30%" x2="50%" y2="45%" stroke="url(#perfectLineGradient)" strokeWidth="1.5" />
                <line x1="65%" y1="30%" x2="50%" y2="45%" stroke="url(#perfectLineGradient)" strokeWidth="1.5" />
                <line x1="50%" y1="55%" x2="35%" y2="70%" stroke="url(#perfectLineGradient)" strokeWidth="1.5" />
                <line x1="50%" y1="55%" x2="65%" y2="70%" stroke="url(#perfectLineGradient)" strokeWidth="1.5" />
              </svg>
              
              {/* Subtle background glow for the entire honeycomb */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-sm blur-3xl" style={{ transform: 'scale(1.5)' }}></div>
            </div>
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 mb-8">
              From banking to manufacturing, we've earned the trust of diverse industries
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Banking", "Manufacturing", "Beverages", "Services", "Energy"].map((industry, index) => (
                <span 
                  key={index}
                  className="px-6 py-2 bg-white rounded-sm shadow-lg text-gray-700 font-medium border border-orange-100"
                >
                  {industry}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Modern Card Layout */}
      <section className="py-32 bg-white relative">
        {/* Curved top section */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 320" className="w-full h-32 fill-orange-50">
            <path d="M0,160L48,138.7C96,117,192,75,288,80C384,85,480,139,576,154.7C672,171,768,149,864,144C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from satisfied customers who trust us with their most important moves
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Background card */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-sm transform rotate-2 group-hover:rotate-3 transition-transform duration-300 opacity-10"></div>
                
                {/* Main card */}
                <div className="relative bg-white rounded-sm p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                  {/* Quote icon */}
                  <div className="absolute -top-4 -left-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-4 shadow-lg">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Rating stars */}
                  <div className="flex gap-1 mb-4 mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Testimonial text */}
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-sm flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-orange-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-sm opacity-50"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-sm"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-sm"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-sm"></div>
          <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-white/20 rounded-sm"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Experience Excellence?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join the hundreds of satisfied clients who trust Stuttafords Zimbabwe for their logistics needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-4 rounded-sm text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
              >
                Get Your Free Quote
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/50 px-8 py-4 rounded-sm text-lg font-semibold hover:bg-white/10 transition-all"
              >
                Contact Us Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;