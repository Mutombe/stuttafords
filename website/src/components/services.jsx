import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Clock, MapPin, Menu, X, Truck, Package, 
  Plane, Ship, Warehouse, Users, Star, ArrowRight, 
  CheckCircle, Globe, Home as HomeIcon, Building2,
  MessageCircle, ChevronDown, Quote
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: HomeIcon,
      title: "Residential Moves",
      description: "Moving made simple — Stuttafords Zimbabwe offers professional, stress-free home relocation services locally and across borders. From careful packing to safe delivery, our experienced team handles your belongings with care and precision.",
      features: ["Professional Packing", "Safe Transportation", "Local & International", "Insurance Coverage"]
    },
    {
      icon: Building2,
      title: "Corporate Relocation",
      description: "Stuttafords Zimbabwe specializes in seamless corporate relocations with minimal downtime. We handle everything from packing and transport to setup, ensuring your business stays productive throughout the move.",
      features: ["Minimal Downtime", "Office Setup", "IT Equipment Handling", "Weekend Services"]
    },
    {
      icon: Plane,
      title: "Air Freight",
      description: "When time is critical, Stuttafords Zimbabwe delivers. Our air freight service ensures fast, secure, and efficient delivery of your cargo worldwide, with expert handling and full tracking every step of the way.",
      features: ["Express Delivery", "Global Network", "Real-time Tracking", "Secure Handling"]
    },
    {
      icon: Ship,
      title: "Ocean Freight",
      description: "Stuttafords Zimbabwe offers reliable and cost-effective ocean freight services for both full (FCL) and partial (LCL) container loads. We provide global shipping solutions with expert customs handling.",
      features: ["FCL & LCL Options", "Customs Clearance", "Global Coverage", "Cost-effective"]
    },
    {
      icon: Truck,
      title: "Road Freight",
      description: "Stuttafords Zimbabwe provides dependable and flexible road freight solutions across the region. Whether it's local distribution or cross-border transport, we move your goods safely, on time, and with full visibility.",
      features: ["Regional Coverage", "Cross-border Transport", "Flexible Scheduling", "Full Visibility"]
    },
    {
      icon: Warehouse,
      title: "Warehousing & 3PL",
      description: "Stuttafords Zimbabwe offers end-to-end Third-Party Logistics (3PL) solutions tailored to streamline your supply chain. From warehousing and inventory management to distribution and fulfillment.",
      features: ["24,000 sqm Warehouse", "Inventory Management", "Distribution", "Fulfillment Services"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive logistics solutions designed to meet all your moving and shipping needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
                  <service.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a personalized quote and let us handle your logistics needs with precision and care.
            </p>
            <button className="bg-white text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Get Your Free Quote
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;