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


const ServicesPage = () => {
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
    <div className="pt-20">
      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-white"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-sm p-8 border border-white/20">
                <h1 className="text-6xl font-bold mb-6 leading-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    Logistics
                  </span>
                  <span className="block">Excellence</span>
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Comprehensive solutions designed to meet all your moving and shipping needs with precision and care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-sm font-semibold hover:scale-105 transition-transform">
                    Explore Services
                  </button>
                  <button className="border-2 border-white/50 px-8 py-4 rounded-sm font-semibold hover:bg-white/10 transition-all">
                    Get Quote
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-sm p-6 text-center border border-white/20">
                  <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
                  <div className="text-white/80">Projects Completed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-sm p-6 text-center border border-white/20">
                  <div className="text-4xl font-bold text-red-400 mb-2">30+</div>
                  <div className="text-white/80">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-sm p-6 text-center border border-white/20">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">1900+</div>
                  <div className="text-white/80">Happy Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-sm p-6 text-center border border-white/20">
                  <div className="text-4xl font-bold text-green-400 mb-2">24K</div>
                  <div className="text-white/80">Sqm Warehouse</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Primary Services - Card Layout */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600">Choose your perfect moving solution</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {primaryServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-sm bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`} />
                    
                    {/* Floating Icon */}
                    <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md rounded-sm p-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Price Tag */}
                    <div className="absolute top-6 left-6 bg-white rounded-sm px-4 py-2 shadow-lg">
                      <span className="text-sm font-bold text-gray-900">{service.price}</span>
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-sm opacity-90 mb-1">{service.subtitle}</div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90 text-sm">{service.description}</p>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <button className="w-full bg-gray-900 text-white py-3 rounded-sm font-semibold hover:bg-gray-800 transition-colors group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Services - Horizontal Layout */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Transport Solutions</h2>
            <p className="text-xl text-gray-300">Every step of the way</p>
          </motion.div>

          <div className="space-y-8">
            {transportServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-sm group">
                    <div 
                      className="h-80 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-md rounded-sm p-6 hover:scale-110 transition-transform cursor-pointer">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Stats Badge */}
                    <div className="absolute bottom-6 left-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-sm px-4 py-2">
                      <div className="text-white font-bold">{service.stats}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-sm p-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-sm p-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-white">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-sm font-semibold hover:scale-105 transition-transform">
                    Get Quote <ArrowRight className="inline ml-2 h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services - Split Layout */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Specialized Solutions</h2>
            <p className="text-xl text-gray-600">Advanced logistics capabilities</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
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
                <div className="relative z-10 p-8 h-96 flex flex-col justify-between text-white">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white/20 backdrop-blur-md rounded-sm p-3">
                        <service.icon className="h-8 w-8" />
                      </div>
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-1 rounded-sm text-sm font-semibold">
                        {service.highlight}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                    <p className="text-white/90 mb-6">{service.description}</p>
                  </div>

                  <div>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.capabilities.map((capability, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-sm p-2 text-center text-sm">
                          {capability}
                        </div>
                      ))}
                    </div>
                    <button className="w-full bg-white text-gray-900 py-3 rounded-sm font-semibold hover:bg-gray-100 transition-colors">
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
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-sm p-12 border border-white/20"
          >
            <h2 className="text-5xl font-bold mb-6">Ready to Move Forward?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your logistics needs and create a customized solution that works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-sm text-lg font-semibold hover:scale-105 transition-transform">
                Get Free Consultation
              </button>
              <button className="border-2 border-white/30 px-8 py-4 rounded-sm text-lg font-semibold hover:bg-white/10 transition-all">
                Call Now: +263 242 620524
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;