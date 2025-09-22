import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Clock, MapPin, Menu, X, Truck, Package, 
  Plane, Ship, Warehouse, Users, Star, ArrowRight, 
  CheckCircle, Globe, Home as HomeIcon, Building2,
  MessageCircle, ChevronDown, Quote
} from 'lucide-react';

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "HOW MUCH WILL IT COST ME?",
      answer: "Our pricing depends on various factors including distance, volume of items, services required, and destination. We provide free, detailed quotes tailored to your specific needs. Contact us for a personalized estimate."
    },
    {
      question: "WHAT DOES LCL MEAN?",
      answer: "LCL stands for 'Less than Container Load'. This service is perfect when you don't have enough cargo to fill an entire shipping container. Your goods are consolidated with other shipments, making it a cost-effective option for smaller shipments."
    },
    {
      question: "WHAT IS THE MEANING OF 'OUTBOUNDS' AND 'INBOUNDS'?",
      answer: "Inbounds simply means imports and outbounds means exports. Inbound refers to goods coming into the country, while outbound refers to goods leaving the country."
    },
    {
      question: "HOW DO I BENEFIT AS A CLIENT?",
      answer: "As our client, you benefit from our 30+ years of experience, comprehensive insurance coverage, professional handling, competitive pricing, real-time tracking, and exceptional customer service. We handle everything from packing to delivery, ensuring a stress-free experience."
    },
    {
      question: "WHAT DOCUMENTATION SHOULD I PREPARE FOR CUSTOMS CLEARANCE?",
      answer: "Required documents typically include: Commercial Invoice, Packing List, Bill of Lading/Airway Bill, Import/Export Permits (if applicable), Insurance Certificate, and any specific permits for restricted goods. Our team will guide you through the exact requirements for your shipment."
    },
    {
      question: "DO YOU PROVIDE INSURANCE COVERAGE?",
      answer: "Yes, we offer comprehensive insurance coverage for all shipments. Our insurance options protect your goods against damage, loss, or theft during transit. We'll help you choose the right coverage level for your valuable items."
    },
    {
      question: "HOW LONG DOES AN INTERNATIONAL MOVE TAKE?",
      answer: "International moves typically take 4-8 weeks depending on the destination, shipping method, and customs clearance. Air freight is faster (1-2 weeks) but more expensive, while ocean freight is more economical but takes longer. We provide detailed timelines during your consultation."
    },
    {
      question: "DO YOU OFFER STORAGE SERVICES?",
      answer: "Yes, we have over 24,000 square meters of secure warehousing space. We offer both short-term and long-term storage solutions with climate-controlled environments for sensitive items. All storage facilities are monitored 24/7 for maximum security."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and processes
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-6">Our team is here to help you with any additional questions</p>
            <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


export default FAQPage;