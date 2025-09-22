import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Clock, MapPin, Menu, X, Truck, Package, 
  Plane, Ship, Warehouse, Users, Star, ArrowRight, 
  CheckCircle, Globe, Home as HomeIcon, Building2,
  MessageCircle, ChevronDown, Quote
} from 'lucide-react';

const BranchesPage = () => {
  const branches = [
    {
      name: "Head Office - Harare",
      address: "6/Q St Georges Street, Ardbennie, Harare, Zimbabwe",
      phone: "+263 242 620524-7",
      email: "stuttafords@zol.co.zw",
      services: ["Full Service Hub", "International Moves", "Corporate Relocation", "Warehousing"],
      isHeadOffice: true
    },
    {
      name: "Bulawayo Branch",
      address: "Bulawayo, Zimbabwe",
      phone: "08677008972",
      email: "shipping@stuttafords.co.zw",
      services: ["Residential Moves", "Road Freight", "Local Distribution"],
      isHeadOffice: false
    },
    {
      name: "Malawi Office",
      address: "Malawi",
      phone: "+265 XXX XXXX",
      email: "malawi@stuttafords.co.zw",
      services: ["Cross-border Transport", "Regional Logistics", "Customs Clearance"],
      isHeadOffice: false
    },
    {
      name: "Zambia Office",
      address: "Zambia",
      phone: "+260 XXX XXXX",
      email: "zambia@stuttafords.co.zw",
      services: ["International Gateway", "Freight Forwarding", "Warehousing"],
      isHeadOffice: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Regional Branches</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic locations across the region ensure we're always close to serve you better
            </p>
          </motion.div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl shadow-lg overflow-hidden ${
                  branch.isHeadOffice 
                    ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white' 
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className={`text-2xl font-bold ${branch.isHeadOffice ? 'text-white' : 'text-gray-900'}`}>
                      {branch.name}
                    </h3>
                    {branch.isHeadOffice && (
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                        HEAD OFFICE
                      </span>
                    )}
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MapPin className={`h-5 w-5 mr-3 mt-1 flex-shrink-0 ${
                        branch.isHeadOffice ? 'text-white' : 'text-orange-500'
                      }`} />
                      <span className={branch.isHeadOffice ? 'text-white' : 'text-gray-600'}>
                        {branch.address}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className={`h-5 w-5 mr-3 flex-shrink-0 ${
                        branch.isHeadOffice ? 'text-white' : 'text-orange-500'
                      }`} />
                      <span className={branch.isHeadOffice ? 'text-white' : 'text-gray-600'}>
                        {branch.phone}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Mail className={`h-5 w-5 mr-3 flex-shrink-0 ${
                        branch.isHeadOffice ? 'text-white' : 'text-orange-500'
                      }`} />
                      <span className={branch.isHeadOffice ? 'text-white' : 'text-gray-600'}>
                        {branch.email}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-semibold mb-3 ${
                      branch.isHeadOffice ? 'text-white' : 'text-gray-900'
                    }`}>
                      Services Available:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {branch.services.map((service, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className={`h-4 w-4 mr-2 flex-shrink-0 ${
                            branch.isHeadOffice ? 'text-white' : 'text-green-500'
                          }`} />
                          <span className={`text-sm ${
                            branch.isHeadOffice ? 'text-white' : 'text-gray-600'
                          }`}>
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Need to Reach a Specific Branch?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us directly at any of our locations for personalized service and local expertise
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105">
              Contact Nearest Branch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BranchesPage;