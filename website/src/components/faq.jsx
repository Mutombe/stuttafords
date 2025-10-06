import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Clock, MapPin, Menu, X, Truck, Package, 
  Plane, Ship, Warehouse, Users, Star, ArrowRight, 
  CheckCircle, Globe, Building2, Home,
  MessageCircle, ChevronDown, Quote, HelpCircle,
  Search, FileText, DollarSign, Shield, Calendar
} from 'lucide-react';
import { GiWorld } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiFishingBoat } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiWarehouseThin } from "react-icons/pi";
import { SiFsecure } from "react-icons/si";
import { CiBadgeDollar } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'pricing', name: 'Pricing', icon: CiBadgeDollar },
    { id: 'services', name: 'Services', icon: CiDeliveryTruck },
    { id: 'documentation', name: 'Documentation', icon: FileText },
    { id: 'insurance', name: 'Insurance', icon: SiFsecure }
  ];

  const faqs = [
    {
      question: "HOW MUCH WILL IT COST ME?",
      answer: "Our pricing depends on various factors including distance, volume of items, services required, and destination. We provide free, detailed quotes tailored to your specific needs. Contact us for a personalized estimate.",
      category: "pricing",
      icon: CiBadgeDollar,
      popular: true
    },
    {
      question: "WHAT DOES LCL MEAN?",
      answer: "LCL stands for 'Less than Container Load'. This service is perfect when you don't have enough cargo to fill an entire shipping container. Your goods are consolidated with other shipments, making it a cost-effective option for smaller shipments.",
      category: "services",
      icon: PiWarehouseThin,
      popular: true
    },
    {
      question: "WHAT IS THE MEANING OF 'OUTBOUNDS' AND 'INBOUNDS'?",
      answer: "Inbounds simply means imports and outbounds means exports. Inbound refers to goods coming into the country, while outbound refers to goods leaving the country.",
      category: "services",

      icon: GiWorld,
      popular: false
    },
    {
      question: "HOW DO I BENEFIT AS A CLIENT?",
      answer: "As our client, you benefit from our 30+ years of experience, comprehensive insurance coverage, professional handling, competitive pricing, real-time tracking, and exceptional customer service. We handle everything from packing to delivery, ensuring a stress-free experience.",
      category: "services",
      icon: CheckCircle,
      popular: true
    },
    {
      question: "WHAT DOCUMENTATION SHOULD I PREPARE FOR CUSTOMS CLEARANCE?",
      answer: "Required documents typically include: Commercial Invoice, Packing List, Bill of Lading/Airway Bill, Import/Export Permits (if applicable), Insurance Certificate, and any specific permits for restricted goods. Our team will guide you through the exact requirements for your shipment.",
      category: "documentation",
      icon: FileText,
      popular: false
    },
    {
      question: "DO YOU PROVIDE INSURANCE COVERAGE?",
      answer: "Yes, we offer comprehensive insurance coverage for all shipments. Our insurance options protect your goods against damage, loss, or theft during transit. We'll help you choose the right coverage level for your valuable items.",
      category: "insurance",
      icon: SiFsecure,
      popular: true
    },
    {
      question: "HOW LONG DOES AN INTERNATIONAL MOVE TAKE?",
      answer: "International moves typically take 4-8 weeks depending on the destination, shipping method, and customs clearance. Air freight is faster (1-2 weeks) but more expensive, while ocean freight is more economical but takes longer. We provide detailed timelines during your consultation.",
      category: "services",
      icon: CiCalendar,
      popular: false
    },
    {
      question: "DO YOU OFFER STORAGE SERVICES?",
      answer: "Yes, we have over 24,000 square meters of secure warehousing space. We offer both short-term and long-term storage solutions with climate-controlled environments for sensitive items. All storage facilities are monitored 24/7 for maximum security.",
      category: "services",
      icon: PiWarehouseThin,
      popular: false
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFAQs = faqs.filter(faq => faq.popular);

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/80"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-sm p-6 sm:p-8 border border-white/20">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    Frequently
                  </span>
                  <span className="block">Asked Questions</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                  Find answers to common questions about our logistics services and processes
                </p>
                
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search questions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:grid grid-cols-2 gap-4 lg:gap-6"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-sm p-4 lg:p-6 text-center border border-white/20">
                <HelpCircle className="h-6 w-6 lg:h-8 lg:w-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-white/80 text-xs lg:text-sm">Support Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-sm p-4 lg:p-6 text-center border border-white/20">
                <MessageCircle className="h-6 w-6 lg:h-8 lg:w-8 text-orange-400 mx-auto mb-2" />
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">95%</div>
                <div className="text-white/80 text-xs lg:text-sm">Questions Resolved</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-sm p-4 lg:p-6 text-center border border-white/20">
                <Clock className="h-6 w-6 lg:h-8 lg:w-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">&lt;2hrs</div>
                <div className="text-white/80 text-xs lg:text-sm">Response Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-sm p-4 lg:p-6 text-center border border-white/20">
                <IoIosPeople className="h-6 w-6 lg:h-8 lg:w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">1900+</div>
                <div className="text-white/80 text-xs lg:text-sm">Happy Clients</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Popular Questions</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">Quick answers to our most frequently asked questions</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {popularFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-sm p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setOpenFAQ(faqs.indexOf(faq))}
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-sm p-2.5 sm:p-3 w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <faq.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base group-hover:text-orange-600 transition-colors line-clamp-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm line-clamp-3">{faq.answer}</p>
                <div className="mt-3 sm:mt-4 flex items-center text-orange-500 text-xs sm:text-sm font-semibold">
                  Read More <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 sm:py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-sm border-2 transition-all text-xs sm:text-base min-h-[40px] ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-transparent'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-orange-300'
                }`}
              >
                <category.icon className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="whitespace-nowrap">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 sm:space-y-6">
            {filteredFAQs.map((faq, index) => {
              const faqIndex = faqs.indexOf(faq);
              return (
                <motion.div
                  key={faqIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-sm shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <button
                    className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex justify-between items-start gap-3 hover:bg-gray-50 transition-colors group min-h-[60px]"
                    onClick={() => setOpenFAQ(openFAQ === faqIndex ? null : faqIndex)}
                  >
                    <div className="flex items-start gap-2 sm:gap-4 flex-1 min-w-0">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-sm p-1.5 sm:p-2 group-hover:scale-110 transition-transform flex-shrink-0">
                        <faq.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors block">
                          {faq.question}
                        </span>
                        {faq.popular && (
                          <span className="mt-1 sm:mt-0 sm:ml-3 inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-sm text-xs font-medium bg-orange-100 text-orange-800">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 sm:h-6 sm:w-6 text-gray-500 transition-transform group-hover:text-orange-500 flex-shrink-0 ${
                        openFAQ === faqIndex ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFAQ === faqIndex && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 sm:px-6 pb-4 sm:pb-6"
                      >
                        <div className="pl-0 sm:pl-12 lg:pl-16 pr-0 sm:pr-4">
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                          <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
                            <button className="text-orange-500 text-xs sm:text-sm font-medium hover:text-orange-600 text-left"
                              onClick={() => setOpenFAQ(null)}>
                              Was this helpful?
                            </button>
                            <button className="text-gray-500 text-xs sm:text-sm hover:text-gray-600 text-left"
                              onClick={() => window.location = 'mailto:tmakoni@stuttafords.co.zw'}>
                              Contact Support
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-sm sm:text-base text-gray-600">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions - CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Still have a question?</h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8">
                Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-white/10 rounded-sm p-2">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-sm sm:text-base break-all">stuttafords@zol.co.zw</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-white/10 rounded-sm p-2">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-sm sm:text-base">+263 242 620524-7</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="bg-white/10 rounded-sm p-2">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-sm sm:text-base">24/7 Support Available</span>
                </div>
              </div>
            </motion.div>

            {/* Right Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-sm p-6 sm:p-8 border border-white/20"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send us a message</h3>
              <div className="space-y-3 sm:space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base min-h-[44px]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base min-h-[44px]"
                />
                <textarea
                  placeholder="Your Question"
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none text-sm sm:text-base"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-3 rounded-sm text-sm sm:text-base font-semibold hover:scale-105 transition-transform min-h-[48px]">
                  Send Message
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;