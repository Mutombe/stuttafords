import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Clock, MapPin, Menu, X, Truck, Package, 
  Plane, Ship, Warehouse, Users, Star, ArrowRight, 
  CheckCircle, Globe, Home as HomeIcon, Building2,
  MessageCircle, ChevronDown, Quote
} from 'lucide-react';

const NewsPage = () => {
  const articles = [
    {
      title: "What to do While Movers are Moving",
      excerpt: "Essential tips and guidelines for homeowners during the moving process to ensure everything goes smoothly.",
      date: "July 18, 2019",
      author: "wmupudzi",
      category: "Moving Tips",
      readTime: "5 min read"
    },
    {
      title: "International Moving: Documentation Checklist",
      excerpt: "A comprehensive guide to all the documents you'll need for your international relocation.",
      date: "June 15, 2019",
      author: "Stuttafords Team",
      category: "International",
      readTime: "8 min read"
    },
    {
      title: "Corporate Relocation Best Practices",
      excerpt: "How to minimize downtime and maximize efficiency during your office move.",
      date: "May 20, 2019",
      author: "Operations Team",
      category: "Corporate",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Latest News & Updates</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with industry insights, moving tips, and company updates
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-48 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MessageCircle className="h-16 w-16 mx-auto mb-4" />
                    <span className="text-sm font-semibold">{article.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-500 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {article.author}</span>
                    <button className="text-orange-500 font-semibold hover:text-red-500 transition-colors flex items-center">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest moving tips, industry news, and special offers
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;