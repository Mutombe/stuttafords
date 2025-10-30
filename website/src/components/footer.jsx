import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Clock, MapPin, Menu, X, Truck, Package, 
  Plane, Ship, Warehouse, Users, Star, ArrowRight, 
  CheckCircle, Globe, Home as HomeIcon, Building2,
  MessageCircle, ChevronDown, Quote
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-2 rounded-lg">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Stuttafords Zimbabwe</h3>
                <p className="text-sm text-gray-400">The Best Move You Can Make!</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A full-service logistics & cargo company committed to giving the best to our various clients at affordable prices.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-orange-400" />
                <span className="text-sm">08677008972 / +263 242 620524-7</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-orange-400" />
                <span className="text-sm">info@stuttafords.co.zw </span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-orange-400" />
                <span className="text-sm">Mon-Fri: 08:00 - 16:30</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/branches" className="text-gray-400 hover:text-white transition-colors">Regional Branches</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Residential Moves</li>
              <li className="text-gray-400">Corporate Relocation</li>
              <li className="text-gray-400">International Moves</li>
              <li className="text-gray-400">Air & Ocean Freight</li>
              <li className="text-gray-400">Warehousing</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Stuttafords Zimbabwe (Pvt) Ltd. All rights reserved.
          </p>
                            <br />
          <p className="text-gray-400">
        Developed By <a href="https://bitstudio.co.zw" target="_blank" rel="noopener noreferrer">
          <strong style={{textDecoration: "underline"}}>Bit Studio Limited</strong> 
        </a>
      </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;