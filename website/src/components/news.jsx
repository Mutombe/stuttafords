import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Clock, MapPin, Menu, X, Truck, Package, 
  Plane, Ship, Warehouse, Users, Star, ArrowRight, 
  CheckCircle, Globe, Building2, Home, Calendar,
  MessageCircle, ChevronDown, Quote, BookOpen, 
  TrendingUp, Award, Eye, Share2, Heart
} from 'lucide-react';

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const featuredArticle = {
    title: "The Future of Logistics: Digital Transformation in 2024",
    excerpt: "How emerging technologies are revolutionizing the logistics industry and what it means for businesses worldwide.",
    date: "March 15, 2024",
    author: "Operations Team",
    category: "Industry Insights",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    views: "2.4k",
    featured: true
  };

  const articles = [
    {
      title: "What to do While Movers are Moving",
      excerpt: "Essential tips and guidelines for homeowners during the moving process to ensure everything goes smoothly.",
      date: "July 18, 2023",
      author: "wmupudzi",
      category: "Moving Tips",
      readTime: "5 min read",
      image: "/3.jpg",
      views: "1.8k"
    },
    {
      title: "International Moving: Documentation Checklist",
      excerpt: "A comprehensive guide to all the documents you'll need for your international relocation.",
      date: "June 15, 2023",
      author: "Stuttafords Team",
      category: "International",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
      views: "3.2k"
    },
    {
      title: "Corporate Relocation Best Practices",
      excerpt: "How to minimize downtime and maximize efficiency during your office move.",
      date: "May 20, 2023",
      author: "Operations Team",
      category: "Corporate",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      views: "1.5k"
    },
    {
      title: "Sustainable Packaging Solutions",
      excerpt: "Our commitment to environmentally friendly packaging and logistics practices.",
      date: "April 10, 2023",
      author: "Sustainability Team",
      category: "Sustainability",
      readTime: "4 min read",
      image: "/2.jpg",
      views: "892"
    },
    {
      title: "Air Freight vs Ocean Freight: Which is Right for You?",
      excerpt: "Compare the benefits and costs of different shipping methods for your business needs.",
      date: "March 25, 2023",
      author: "Logistics Team",
      category: "Shipping",
      readTime: "7 min read",
      image: "air1.jpg",
      views: "2.1k"
    }
  ];

  const stats = [
    { number: "50+", label: "Articles Published", icon: BookOpen },
    { number: "15k+", label: "Monthly Readers", icon: Eye },
    { number: "95%", label: "Helpful Rating", icon: Heart },
    { number: "24", label: "Countries Covered", icon: Globe }
  ];

  const categories = [
    "All", "Moving Tips", "International", "Corporate", "Industry Insights", "Sustainability", "Shipping"
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="pt-20">
      {/* Hero Section - Clean & Minimal */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-sm text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              THE DIFFERENCE WE MAKE
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Leading the Way in
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Logistics Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore the key insights, industry trends, and expert knowledge that businesses choose us as their logistics partner
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Masonry Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.toLowerCase())}
                className={`px-6 py-3 rounded-sm transition-all ${
                  activeCategory === category.toLowerCase() || (activeCategory === 'all' && category === 'All')
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Featured Article - Large */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8 lg:row-span-2"
            >
              <div className="relative overflow-hidden rounded-sm bg-white shadow-2xl group h-full min-h-[600px]">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${featuredArticle.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/20" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-sm text-sm font-semibold">
                        Featured
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-sm text-sm">
                        {featuredArticle.category}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-4xl font-bold mb-4 group-hover:text-orange-300 transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-white/90 text-lg mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span>{featuredArticle.date}</span>
                        <span>•</span>
                        <span>{featuredArticle.readTime}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {featuredArticle.views}
                        </div>
                      </div>
                      <button className="bg-white text-gray-900 px-6 py-3 rounded-sm font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                        Read Article <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <div className="lg:col-span-4 space-y-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-sm p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-sm p-3">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Article Grid - Varied Sizes */}
            {filteredArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`
                  ${index === 0 ? 'lg:col-span-7' : 
                    index === 1 ? 'lg:col-span-5' : 
                    index === 2 ? 'lg:col-span-6' : 
                    index === 3 ? 'lg:col-span-6' : 
                    'lg:col-span-4'}
                  group cursor-pointer
                `}
              >
                <div className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${article.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm text-xs font-semibold text-gray-900">
                        {article.category}
                      </span>
                    </div>

                    {/* Views */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 text-white text-sm">
                      <Eye className="h-4 w-4" />
                      {article.views}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-sm flex items-center justify-center text-white text-sm font-bold">
                          {article.author.charAt(0)}
                        </div>
                        <span className="text-sm text-gray-600">{article.author}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-sm transition-colors">
                          <Share2 className="h-4 w-4 text-gray-500" />
                        </button>
                        <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors flex items-center gap-1">
                          Read <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Newsletter Section - Enhanced */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Stay in the Loop</h2>
              <p className="text-xl text-gray-300 mb-8">
                Get the latest logistics insights, industry trends, and expert tips delivered straight to your inbox every week.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Weekly industry insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Exclusive moving tips</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Special offers & discounts</span>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-sm p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6">Subscribe to Our Newsletter</h3>
              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-3 rounded-sm font-semibold hover:scale-105 transition-transform">
                  Subscribe Now
                </button>
              </div>

              <p className="text-xs text-gray-400 mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;