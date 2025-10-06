import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Clock, MapPin, Menu, X, Truck, Package, 
  Plane, Ship, Warehouse, Users, Star, ArrowRight, 
  CheckCircle, Globe, Building2, Home, Play,
  MessageCircle, ChevronDown, Quote, Shield, Award
} from 'lucide-react';
import { HiHomeModern } from "react-icons/hi2";
import { PiBuildingOffice } from "react-icons/pi";
import { GiWorld } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiFishingBoat } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiWarehouseThin } from "react-icons/pi";
import { SiFsecure } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(0);

  const primaryServices = [
    {
      icon: HiHomeModern,
      title: "Residential Moves",
      subtitle: "Home Sweet Home",
      description: "Professional, stress-free home relocation services locally and across borders.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      features: ["Professional Packing", "Safe Transportation", "Local & International", "Insurance Coverage"],
      color: "from-blue-500 to-purple-600",
      price: "From $299"
    },
    {
      icon: PiBuildingOffice,
      title: "Corporate Relocation",
      subtitle: "Business Excellence",
      description: "Seamless corporate relocations with minimal downtime for your business operations.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      features: ["Minimal Downtime", "Office Setup", "IT Equipment Handling", "Weekend Services"],
      color: "from-orange-500 to-red-500",
      price: "From $899"
    },
    {
      icon: GiWorld,
      title: "International Moves",
      subtitle: "Global Solutions",
      description: "Expert international relocation services across borders with full customs support.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
      features: ["Customs Clearance", "Documentation", "Global Network", "Door-to-Door"],
      color: "from-green-500 to-teal-500",
      price: "From $1,299"
    }
  ];

  const transportServices = [
    {
      icon: GiCommercialAirplane,
      title: "Air Freight",
      description: "Fast, secure worldwide delivery",
      image: "https://images.unsplash.com/photo-1583221294778-b89b31c1ea77?w=400&h=300&fit=crop",
      stats: "24-48 Hours",
      features: ["Express Delivery", "Global Network", "Real-time Tracking"]
    },
    {
      icon: GiFishingBoat,
      title: "Ocean Freight",
      description: "Cost-effective global shipping",
      image: "https://images.unsplash.com/photo-1605003452506-26d4c3bced71?w=400&h=300&fit=crop",
      stats: "14-30 Days",
      features: ["FCL & LCL Options", "Customs Clearance", "Global Coverage"]
    },
    {
      icon: CiDeliveryTruck,
      title: "Road Freight",
      description: "Regional transport solutions",
      image: "https://images.unsplash.com/photo-1573498635213-530f9b2077d6?w=400&h=300&fit=crop",
      stats: "1-7 Days",
      features: ["Regional Coverage", "Cross-border", "Flexible Scheduling"]
    }
  ];

  const specializedServices = [
    {
      icon: PiWarehouseThin,
      title: "3PL & Warehousing",
      description: "Complete supply chain solutions with our 24,000 sqm warehouse facility",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      capabilities: ["24,000 sqm Storage", "Inventory Management", "Distribution", "Pick & Pack"],
      highlight: "State-of-the-art facility"
    },
    {
      icon: SiFsecure,
      title: "Insurance & Protection",
      description: "Comprehensive coverage for your valuable belongings during transit",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
      capabilities: ["Full Coverage", "Claims Support", "Risk Assessment", "Peace of Mind"],
      highlight: "100% Protection"
    }
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-white"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-sm p-6 sm:p-8 lg:p-10 border border-white/20">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    Logistics
                  </span>
                  <span className="block">Excellence</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                  Comprehensive solutions designed to meet all your moving and shipping needs with precision and care.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 px-6 sm:px-8 py-3 sm:py-4 rounded-sm text-base sm:text-lg font-semibold hover:scale-105 transition-transform min-h-[48px]"
                    onClick={window.scrollTo({ bottom: document.body.scrollHeight, behavior: 'smooth' })}>
                    Explore Services
                  </button>
                  <button className="border-2 border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-sm text-base sm:text-lg font-semibold hover:bg-white/10 transition-all min-h-[48px]"
                    onClick={()=> navigate('/branches')}>
                    Get Quote
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right Stats - Hidden on small mobile, shown from md up */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden md:block"
            >
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-sm p-4 sm:p-6 text-center border border-white/20">
                  <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">500+</div>
                  <div className="text-sm sm:text-base text-white/80">Projects Completed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-sm p-4 sm:p-6 text-center border border-white/20">
                  <div className="text-3xl sm:text-4xl font-bold text-red-400 mb-2">30+</div>
                  <div className="text-sm sm:text-base text-white/80">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-sm p-4 sm:p-6 text-center border border-white/20">
                  <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">1900+</div>
                  <div className="text-sm sm:text-base text-white/80">Happy Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-sm p-4 sm:p-6 text-center border border-white/20">
                  <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">24K</div>
                  <div className="text-sm sm:text-base text-white/80">Sqm Warehouse</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Stats - Only on small screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:hidden mt-8 grid grid-cols-2 gap-3"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-sm p-3 text-center border border-white/20">
              <div className="text-2xl font-bold text-orange-400 mb-1">500+</div>
              <div className="text-xs text-white/80">Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-sm p-3 text-center border border-white/20">
              <div className="text-2xl font-bold text-red-400 mb-1">30+</div>
              <div className="text-xs text-white/80">Years</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Primary Services - Card Layout */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Core Services</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">Choose your perfect moving solution</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {primaryServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-sm bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
                  {/* Image Section */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`} />
                    
                    {/* Floating Icon */}
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/20 backdrop-blur-md rounded-sm p-3 sm:p-4">
                      <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>

                    {/* Price Tag */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white rounded-sm px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg">
                      <span className="text-xs sm:text-sm font-bold text-gray-900">{service.price}</span>
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                      <div className="text-xs sm:text-sm opacity-90 mb-1">{service.subtitle}</div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90 text-sm line-clamp-2">{service.description}</p>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="p-4 sm:p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full bg-gray-900 text-white py-2.5 sm:py-3 rounded-sm text-sm sm:text-base font-semibold hover:bg-gray-800 transition-colors group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 min-h-[44px]"
                      onClick={()=> navigate('/branches')}>
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Transport Solutions</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300">Every step of the way</p>
          </motion.div>

          <div className="space-y-10 sm:space-y-12 lg:space-y-16">
            {transportServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative overflow-hidden rounded-sm group">
                    <div 
                      className="h-64 sm:h-72 lg:h-80 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-md rounded-sm p-4 sm:p-6 hover:scale-110 transition-transform cursor-pointer">
                        <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                    </div>

                    {/* Stats Badge */}
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-sm px-3 sm:px-4 py-1.5 sm:py-2">
                      <div className="text-white text-sm sm:text-base font-bold">{service.stats}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-sm p-3 sm:p-4">
                      <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold">{service.title}</h3>
                      <p className="text-sm sm:text-base text-gray-300">{service.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-sm p-2.5 sm:p-3">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                        <span className="text-white text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-sm text-sm sm:text-base font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto"
                    onClick={()=> navigate('/branches')}>
                    Get Quote 
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Specialized Solutions</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">Advanced logistics capabilities</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-sm bg-white shadow-2xl group hover:shadow-3xl transition-all duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/30" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8 h-80 sm:h-96 flex flex-col justify-between text-white">
                  <div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
                      <div className="bg-white/20 backdrop-blur-md rounded-sm p-2.5 sm:p-3">
                        <service.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                      </div>
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 px-3 sm:px-4 py-1 rounded-sm text-xs sm:text-sm font-semibold">
                        {service.highlight}
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                    <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6 line-clamp-3">{service.description}</p>
                  </div>

                  <div>
                    <div className="grid grid-cols-2 gap-2 mb-4 sm:mb-6">
                      {service.capabilities.map((capability, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-sm p-2 text-center text-xs sm:text-sm">
                          {capability}
                        </div>
                      ))}
                    </div>
                    <button className="w-full bg-white text-gray-900 py-2.5 sm:py-3 rounded-sm text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors min-h-[44px]"
                      onClick={()=> navigate('/branches')}>
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-sm p-6 sm:p-8 lg:p-12 border border-white/20 text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Move Forward?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's discuss your logistics needs and create a customized solution that works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 px-6 sm:px-8 py-3 sm:py-4 rounded-sm text-base sm:text-lg font-semibold hover:scale-105 transition-transform min-h-[48px]"
                onClick={()=> navigate('/branches')}>
                Get Free Consultation
              </button>
              <button className="border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-sm text-base sm:text-lg font-semibold hover:bg-white/10 transition-all min-h-[48px]">
                <span className="hidden sm:inline">Call Now: </span>+263 242 620524
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;