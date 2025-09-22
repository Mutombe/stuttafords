import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Clock, MapPin, Menu, X, Truck, Package, 
  Plane, Ship, Warehouse, Users, Star, ArrowRight, 
  CheckCircle, Globe, Home as HomeIcon, Building2,
  MessageCircle, ChevronDown, Quote
} from 'lucide-react';

const AboutPage = () => {
  const clients = ["CBZ", "PSMI", "Delta", "Nyaradzo", "ZETDC"];
  
  const testimonials = [
    {
      name: "A. Chabata",
      company: "Edgars",
      text: "The service was excellent. I will recommend other clients who might need your service."
    },
    {
      name: "Justin Ray",
      company: "US Embassy - Zambia",
      text: "By far the best moving experience we have had! Get name tags for the crew so they can be cited for their good work."
    },
    {
      name: "Brenda Makuyana",
      company: "Total Zimbabwe",
      text: "All the goods has been properly loaded with great care and the loading crew is very friendly, effective and efficient."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Stuttafords Zimbabwe</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A full-service logistics & cargo company committed to giving the best to our various clients at affordable prices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                To become the leading and preferred provider of relocation services locally, regionally and internationally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900 text-white rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                To generate a profitable return to all our stakeholders through the provision of unmatched first class service and to uphold professional business practices which emphasize utilization of resources in an environmentally friendly manner.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Companies</h2>
            <p className="text-xl text-gray-600">We're proud to serve some of Zimbabwe's most respected organizations</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
              >
                <span className="text-xl font-bold text-gray-700">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real feedback from satisfied customers</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500"
              >
                <Quote className="h-8 w-8 text-orange-500 mb-4" />
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-2 mr-3">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;