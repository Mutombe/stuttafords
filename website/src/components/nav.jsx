import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Clock, MapPin, Menu, X, Truck, Package, 
  Plane, Ship, Warehouse, Users, Star, ArrowRight, 
  CheckCircle, Globe, Home as HomeIcon, Building2,
  MessageCircle, ChevronDown, Quote
} from 'lucide-react';

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 rounded-lg">
              <img src="/logo2.png" alt="Stuttafords Zimbabwe Logo" className="h-16 w-42" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-orange-500 transition-colors">Our Services</Link>
            <Link to="/faq" className="text-gray-700 hover:text-orange-500 transition-colors">FAQs</Link>
            <Link to="/news" className="text-gray-700 hover:text-orange-500 transition-colors">News</Link>
            <Link to="/branches" className="text-gray-700 hover:text-orange-500 transition-colors">Regional Branches</Link>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-sm hover:from-orange-600 hover:to-red-600 transition-all">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">About Us</Link>
                <Link to="/services" className="text-gray-700 hover:text-orange-500 transition-colors">Our Services</Link>
                <Link to="/faq" className="text-gray-700 hover:text-orange-500 transition-colors">FAQs</Link>
                <Link to="/news" className="text-gray-700 hover:text-orange-500 transition-colors">News</Link>
                <Link to="/branches" className="text-gray-700 hover:text-orange-500 transition-colors">Regional Branches</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;