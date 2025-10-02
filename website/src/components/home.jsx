import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Phone, Mail, Clock, MapPin, ArrowRight, 
  CheckCircle, Globe, Home, Building2,
  ChevronLeft, ChevronRight, Quote, Package, Users, Navigation
} from 'lucide-react';
import { IoIosHome } from "react-icons/io";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { GiWorld } from "react-icons/gi";
import { TfiPackage } from "react-icons/tfi";
import { PiPhoneCallThin } from "react-icons/pi";
import { GoMail } from "react-icons/go";
import { CiTimer } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { FaRegMap } from "react-icons/fa6";



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

// Branches data for the map
const branches = [
  {
    id: 'harare',
    name: 'Harare Head Office',
    coordinates: [-17.8292, 31.0522],
    description: 'Main headquarters and primary logistics hub',
    teamSize: '50+ staff',
    address: '123 Main Street, Harare',
    services: ['All Services', 'International Shipping', '3PL'],
    isHeadOffice: true
  },
  {
    id: 'bulawayo',
    name: 'Bulawayo Branch',
    coordinates: [-20.1547, 28.5878],
    description: 'Regional distribution center for Matabeleland',
    teamSize: '25+ staff',
    address: '456 Industrial Road, Bulawayo',
    services: ['Domestic Moving', 'Corporate Relocation'],
    isHeadOffice: false
  },
  {
    id: 'mutare',
    name: 'Mutare Branch',
    coordinates: [-18.9707, 32.6616],
    description: 'Eastern region operations and border logistics',
    teamSize: '15+ staff',
    address: '789 Border Avenue, Mutare',
    services: ['Cross-border Transport', 'Residential Moves'],
    isHeadOffice: false
  },
  {
    id: 'gweru',
    name: 'Gweru Branch',
    coordinates: [-19.4495, 29.8145],
    description: 'Central region distribution point',
    teamSize: '12+ staff',
    address: '321 Central Plaza, Gweru',
    services: ['Local Delivery', 'Storage Solutions'],
    isHeadOffice: false
  }
];

// Map component
const BranchesMap = () => {
  const [activeView, setActiveView] = useState('main');
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    // Load Leaflet CSS and JS
    if (!document.getElementById('leaflet-css')) {
      const css = document.createElement('link');
      css.id = 'leaflet-css';
      css.rel = 'stylesheet';
      css.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(css);
    }

    if (!window.L) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = initMap;
      document.body.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      if (window.L && mapRef.current && !mapInstance.current) {
        // Initialize map centered on Zimbabwe
        mapInstance.current = window.L.map(mapRef.current, {
          zoomControl: true,
          attributionControl: true,
          zIndex: 1
        }).setView([-19.0, 29.5], 6);

        // Add tile layer with better styling
        window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution: '© OpenStreetMap contributors © CARTO',
          subdomains: 'abcd',
          maxZoom: 19
        }).addTo(mapInstance.current);

        // Custom marker icons
        const headOfficeIcon = window.L.divIcon({
          className: 'custom-div-icon head-office',
          html: `
            <div style="
              width: 50px; 
              height: 50px; 
              background: linear-gradient(135deg, #f59e0b, #dc2626); 
              border-radius: 50%; 
              border: 4px solid white; 
              box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              z-index: 10;
              animation: pulse 2s infinite;
            ">
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V7L12 2zm0 15.5L7 14V9l5-2.5 5 2.5v5l-5 3.5z"/>
              </svg>
            </div>
          `,
          iconSize: [50, 50],
          iconAnchor: [25, 50]
        });

        const branchIcon = window.L.divIcon({
          className: 'custom-div-icon branch-office',
          html: `
            <div style="
              width: 40px; 
              height: 40px; 
              background: linear-gradient(135deg, #3b82f6, #10b981); 
              border-radius: 50%; 
              border: 3px solid white; 
              box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 10;
            ">
              <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          `,
          iconSize: [40, 40],
          iconAnchor: [20, 40]
        });

        // Add markers for each branch
        branches.forEach(branch => {
          const marker = window.L.marker(branch.coordinates, {
            icon: branch.isHeadOffice ? headOfficeIcon : branchIcon
          }).addTo(mapInstance.current);

          // Create popup content
          const popupContent = `
            <div style="min-width: 250px; padding: 12px; font-family: 'Inter', sans-serif;">
              <div style="
                background: linear-gradient(135deg, ${branch.isHeadOffice ? '#f59e0b, #dc2626' : '#3b82f6, #10b981'});
                color: white;
                padding: 8px 12px;
                margin: -12px -12px 12px -12px;
                border-radius: 4px 4px 0 0;
              ">
                <h3 style="margin: 0; font-size: 16px; font-weight: bold;">
                  ${branch.name}
                </h3>
                ${branch.isHeadOffice ? '<div style="font-size: 12px; opacity: 0.9;">🏢 Head Office</div>' : ''}
              </div>
              
              <p style="margin: 0 0 12px 0; font-size: 14px; color: #6b7280; line-height: 1.4;">
                ${branch.description}
              </p>
              
              <div style="margin-bottom: 8px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                  <span style="color: #374151; font-weight: 600;">👥 Team:</span> 
                  <span style="color: #6b7280;">${branch.teamSize}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                  <span style="color: #374151; font-weight: 600;">📍 Address:</span> 
                  <span style="color: #6b7280; font-size: 12px;">${branch.address}</span>
                </div>
              </div>

              <div style="margin-bottom: 12px;">
                <div style="color: #374151; font-weight: 600; margin-bottom: 4px;">Services:</div>
                <div style="display: flex; flex-wrap: gap: 4px;">
                  ${branch.services.map(service => `
                    <span style="
                      background: #f3f4f6;
                      color: #374151;
                      padding: 2px 8px;
                      border-radius: 12px;
                      font-size: 11px;
                      font-weight: 500;
                    ">${service}</span>
                  `).join('')}
                </div>
              </div>
              
              <button 
                onclick="alert('Contact this branch for more information!')"
                style="
                  background: linear-gradient(135deg, ${branch.isHeadOffice ? '#f59e0b, #dc2626' : '#3b82f6, #10b981'});
                  color: white;
                  border: none;
                  padding: 10px 16px;
                  border-radius: 6px;
                  font-weight: 600;
                  cursor: pointer;
                  font-size: 14px;
                  width: 100%;
                  transition: transform 0.2s;
                "
                onmouseover="this.style.transform='translateY(-2px)'"
                onmouseout="this.style.transform='translateY(0)'"
              >
                Contact Branch →
              </button>
            </div>
          `;

          marker.bindPopup(popupContent, {
            maxWidth: 300,
            className: 'custom-popup'
          });
        });
      }
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg overflow-hidden shadow-2xl border-2 border-white/50"
         style={{ zIndex: 1 }}>
      <div ref={mapRef} className="w-full h-full" />
      
      {/* Map Legend */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-xl border border-white/20"
        style={{ zIndex: 10 }}
      >
        <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          Our Locations
        </h4>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full border-2 border-white shadow-lg"></div>
            <span className="text-sm text-gray-700 font-medium">Head Office</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full border-2 border-white shadow-lg"></div>
            <span className="text-sm text-gray-700 font-medium">Branch Office</span>
          </div>
        </div>
      </motion.div>

      {/* Map Stats */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-xl border border-white/20"
        style={{ zIndex: 10 }}
      >
        <div className="text-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
            {branches.length}
          </div>
          <div className="text-xs text-gray-600 font-medium">Active Branches</div>
        </div>
      </motion.div>

      {/* Interactive hint */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 right-4 bg-gradient-to-r from-orange-500/90 to-red-500/90 backdrop-blur-md rounded-lg p-3 shadow-xl text-white"
        style={{ zIndex: 10 }}
      >
        <p className="text-xs font-medium flex items-center gap-2">
          <Navigation className="h-3 w-3" />
          Click markers for details
        </p>
      </motion.div>
    </div>
  );
};

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Background images for carousel
  const backgroundImages = [
    '/6.jpg',
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
      date: "12 DEC",
      time: "2:00 PM",
      location: "Harare, Zimbabwe",
      category: "MOVING",
      gradient: "from-cyan-400 to-blue-500",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
    },
    {
      icon: PiBuildingOfficeLight,
      title: "Corporate Relocation",
      description: "Seamless corporate relocations with minimal downtime for your business.",
      date: "15 DEC",
      time: "9:30 AM",
      location: "Bulawayo, Zimbabwe",
      category: "BUSINESS",
      gradient: "from-purple-400 to-pink-500",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
    },
    {
      icon: GiWorld,
      title: "International Moves",
      description: "Expert international relocation services across borders with full customs support.",
      date: "18 DEC",
      time: "1:15 PM",
      location: "Global Services",
      category: "INTERNATIONAL",
      gradient: "from-orange-400 to-red-500",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop"
    },
    {
      icon: TfiPackage,
      title: "3PL Services",
      description: "End-to-end Third-Party Logistics solutions to streamline your supply chain.",
      date: "20 DEC",
      time: "11:00 AM",
      location: "Distribution Centers",
      category: "LOGISTICS",
      gradient: "from-green-400 to-teal-500",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
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
                    className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-8 py-4 rounded-sm text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
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

      {/* Services Section - Updated Design */}
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
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                  {/* Main background with image and gradient overlay */}
                  <div className="h-56 relative overflow-hidden">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ 
                        backgroundImage: `url(${service.image})`,
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-85 mix-blend-multiply`} />
                    
                    {/* Additional gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Decorative background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white rounded-sm"></div>
                      <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 rounded-sm"></div>
                      <div className="absolute top-1/2 right-8 w-8 h-8 bg-white/10 rounded-sm"></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-6 text-white">
                      {/* Top section */}
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-sm p-2 w-fit mb-4">
                            <service.icon className="h-8 w-8 text-white drop-shadow-lg" />
                          </div>
                          <h3 className="text-xl font-bold mb-2 drop-shadow-sm">{service.title}</h3>
                        </div>
                        <div className="text-right">
                          <div className="bg-white/20 backdrop-blur-sm rounded-sm px-3 py-1 text-sm font-semibold">
                            {service.category}
                          </div>
                        </div>
                      </div>

                      {/* Bottom section */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4" />
                          <span>{service.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4" />
                          <span className="truncate">{service.location}</span>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-sm px-3 py-2 mt-3">
                          <div className="text-2xl font-bold">{service.date}</div>
                        </div>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                  
                  {/* Bottom white section */}
                  <div className="p-6 bg-white">
                    <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                    <button className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 py-3 px-4 rounded-sm font-semibold hover:from-gray-200 hover:to-gray-300 transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 group-hover:text-white">
                      Learn More 
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Map Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Nationwide</span> Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategically located across Zimbabwe to serve you better. Find our nearest branch and experience professional logistics services in your area.
            </p>
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <BranchesMap />
          </motion.div>

          {/* Branch Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { number: '4', label: 'Active Branches', icon: HiOutlineHomeModern },
              { number: '100+', label: 'Team Members', icon: LiaPeopleCarrySolid },
              { number: '24/7', label: 'Support Available', icon: BiSupport },
              { number: '100%', label: 'Zimbabwe Coverage', icon: FaRegMap }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-md rounded-xl p-6 text-center border border-white/50 shadow-lg hover:shadow-xl transition-all"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-orange-500" />
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-2">
                  <CountUp end={parseInt(stat.number) || 0} suffix={stat.number.replace(/\d/g, '')} />
                  {isNaN(parseInt(stat.number)) && stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
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