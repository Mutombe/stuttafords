import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Clock, MapPin, Menu, X, Truck, Package, 
  Plane, Ship, Warehouse, Users, Star, ArrowRight, 
  CheckCircle, Globe, Home as HomeIcon, Building2,
  MessageCircle, ChevronDown, Quote
} from 'lucide-react';


const HomePage = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const stats = [
    { number: "500+", label: "Successful Moves" },
    { number: "1900+", label: "Happy Clients" },
    { number: "750+", label: "Corporate Relocations" },
    { number: "30+", label: "Years Experience" }
  ];

  const services = [
    {
      icon: HomeIcon,
      title: "Residential Moves",
      description: "Professional, stress-free home relocation services locally and across borders.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Building2,
      title: "Corporate Relocation",
      description: "Seamless corporate relocations with minimal downtime for your business.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "International Moves",
      description: "Expert international relocation services across borders with full customs support.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Package,
      title: "3PL Services",
      description: "End-to-end Third-Party Logistics solutions to streamline your supply chain.",
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-red-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Moving Made
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  Simple & Secure
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional logistics and relocation services across Zimbabwe and beyond. 
                From residential moves to international freight, we handle it all with precision and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105">
                  Get Free Quote
                </button>
                <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all">
                  Our Services
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to your needs, backed by decades of experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <service.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="text-orange-500 font-semibold flex items-center group-hover:text-red-500 transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Move?</h2>
            <p className="text-xl text-gray-300">Contact us today for a free consultation</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <Phone className="h-12 w-12 mx-auto mb-4 text-orange-400" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-300">08677008972</p>
              <p className="text-gray-300">+263 242 620524-7</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <Mail className="h-12 w-12 mx-auto mb-4 text-orange-400" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-300">stuttafords@zol.co.zw</p>
              <p className="text-gray-300">shipping@stuttafords.co.zw</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <Clock className="h-12 w-12 mx-auto mb-4 text-orange-400" />
              <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
              <p className="text-gray-300">Mon-Fri: 08:00 - 16:30</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;