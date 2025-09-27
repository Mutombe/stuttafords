
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Phone, Mail, Clock, MapPin, ArrowRight, 
  CheckCircle, Globe, Home, Building2,
  ChevronLeft, ChevronRight, Quote,  Package
} from 'lucide-react';
import { IoIosHome } from "react-icons/io";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { GiWorld } from "react-icons/gi";
import { TfiPackage } from "react-icons/tfi";
import { PiPhoneCallThin } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import { CiTimer } from "react-icons/ci";

const CountUp = ({ end, duration = 2000, suffix = "", delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      
      const timer = setTimeout(() => {
        const startTime = Date.now();
        const startValue = 0;
        const endValue = end;

        const updateCount = () => {
          const now = Date.now();
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Use easeOutQuart easing for smooth deceleration
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
          
          setCount(currentCount);
          
          if (progress < 1) {
            requestAnimationFrame(updateCount);
          }
        };
        
        requestAnimationFrame(updateCount);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, hasStarted, end, duration, delay]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Background images for carousel - using high-quality stock photos
  const backgroundImages = [
    '/2.jpg',
    '/3.jpg',
    '/ship.jpg',
    '5.jpg',
    '/Truck.jpg'
  ];

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, isAutoPlaying, backgroundImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
    setIsAutoPlaying(false);
  };

  const stats = [
    { number: "500+", label: "Successful Moves" },
    { number: "1900+", label: "Happy Clients" },
    { number: "750+", label: "Corporate Relocations" },
    { number: "30+", label: "Years Experience" }
  ];

const services = [
    {
      icon: HiOutlineHomeModern,
      title: "Residential Moves",
      description: "Professional, stress-free home relocation services locally and across borders.",
      color: "from-yellow-400 to-orange-500",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      overlayOpacity: "bg-gradient-to-br from-yellow-400/85 to-orange-500/85"
    },
    {
      icon: PiBuildingOfficeLight,
      title: "Corporate Relocation",
      description: "Seamless corporate relocations with minimal downtime for your business.",
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      overlayOpacity: "bg-gradient-to-br from-orange-500/85 to-red-500/85"
    },
    {
      icon: GiWorld,
      title: "International Moves",
      description: "Expert international relocation services across borders with full customs support.",
      color: "from-red-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
      overlayOpacity: "bg-gradient-to-br from-red-500/85 to-pink-500/85"
    },
    {
      icon: TfiPackage,
      title: "3PL Services",
      description: "End-to-end Third-Party Logistics solutions to streamline your supply chain.",
      color: "from-pink-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      overlayOpacity: "bg-gradient-to-br from-pink-500/85 to-purple-500/85"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden bg-gray-900">
        {/* Animated Background Carousel */}
        <div className="absolute inset-0">
          <AnimatePresence>
            {backgroundImages.map((image, index) => 
              index === currentSlide && (
                <motion.div
                  key={`${index}-${image}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${image})`
                    }}
                  >
                    {/* Overlay gradient for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md p-3 rounded-sm hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md p-3 rounded-sm hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`h-2 transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-gradient-to-r from-yellow-400 to-orange-500' 
                  : 'w-2 bg-white/50 hover:bg-white/70'
              } rounded-full`}
            />
          ))}
        </div>

        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left side with Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-sm p-8 lg:p-12 border border-white/20 shadow-2xl">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  {/* Text with background image fill effect */}
                  <span 
                    className="block bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `url(${backgroundImages[currentSlide]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'brightness(1.5) contrast(1.2)'
                    }}
                  >
                    Moving Made
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                    Simple & Secure
                  </span>
                </h1>
                <p className="text-white/90 text-lg lg:text-xl mb-8 leading-relaxed">
                  Professional logistics and relocation services across Zimbabwe and beyond. 
                  From residential moves to international freight, we handle it all with precision and care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
                  >
                    Get Free Quote
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white/50 text-white px-8 py-4 rounded-sm text-lg font-semibold backdrop-blur-sm hover:bg-white/20 transition-all"
                  >
                    Our Services
                  </motion.button>
                </div>
              </div>
            </motion.div>
            
            {/* Right side - Clear with animated stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="relative hidden lg:block"
            >
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                {/* Floating Stats Cards */}
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white/10 backdrop-blur-lg rounded-sm p-6 text-center border border-white/20 shadow-xl"
                    >
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-sm blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-sm blur-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Stats - Shown below hero on small screens */}
        <div className="lg:hidden absolute bottom-20 left-0 right-0 z-30 px-4">
          <div className="grid grid-cols-2 gap-4">
            {stats.slice(0, 2).map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-sm p-4 text-center border border-white/20"
              >
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  {stat.number}
                </div>
                <div className="text-xs text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Expert Services</h2>
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
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Top section with image and color overlay */}
                <div className="relative h-48 overflow-hidden">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ 
                      backgroundImage: `url(${service.image})`,
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 ${service.overlayOpacity} mix-blend-multiply`} />
                  
                  {/* Additional gradient for better blending */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-center items-center text-white p-6">
                    <service.icon className="h-12 w-12 mb-3 drop-shadow-lg group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-center drop-shadow-lg">{service.title}</h3>
                  </div>
                </div>
                
                {/* Bottom section */}
                <div className="p-6 bg-white">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="text-orange-500 font-semibold flex items-center group-hover:text-red-500 transition-colors">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Ready to Move?</h2>
            <p className="text-xl text-gray-300">Contact us today for a free consultation</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-sm p-6 text-center border border-white/20 hover:bg-white/15 transition-all"
            >
              <PiPhoneCallThin className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-300">08677008972</p>
              <p className="text-gray-300">+263 242 620524-7</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-sm p-6 text-center border border-white/20 hover:bg-white/15 transition-all"
            >
              <GoMail className="h-12 w-12 mx-auto mb-4 text-orange-400" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-300">stuttafords@zol.co.zw</p>
              <p className="text-gray-300">shipping@stuttafords.co.zw</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-sm p-6 text-center border border-white/20 hover:bg-white/15 transition-all"
            >
              <CiTimer className="h-12 w-12 mx-auto mb-4 text-red-400" />
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