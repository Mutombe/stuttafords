import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle,
  Globe,
  Home,
  Building2,
  ChevronLeft,
  ChevronRight,
  Quote,
  Package,
  Users,
  Navigation,
} from "lucide-react";
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

// CountUp Component
const CountUp = ({ end, suffix = "", duration = 2000, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView && !hasStarted) {
      const startDelay = setTimeout(() => {
        setHasStarted(true);
        let startTime = null;

        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(easeOutQuart * end));

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };

        requestAnimationFrame(animate);
      }, delay);

      return () => clearTimeout(startDelay);
    }
  }, [isInView, end, duration, delay, hasStarted]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
};

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const navigate = useNavigate();

  const backgroundImages = [
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&h=1080&fit=crop",
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, isAutoPlaying, backgroundImages.length]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length
    );
    setIsAutoPlaying(false);
  };

  const stats = [
    { number: "500+", label: "Successful Moves" },
    { number: "1900+", label: "Happy Clients" },
    { number: "750+", label: "Corporate Relocations" },
    { number: "30+", label: "Years Experience" },
  ];

  const services = [
    {
      icon: HiOutlineHomeModern,
      title: "Residential Moves",
      description:
        "Professional, stress-free home relocation services locally and across borders.",
      location: "Harare, Zimbabwe",
      category: "MOVING",
      gradient: "from-cyan-400 to-blue-500",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    },
    {
      icon: PiBuildingOfficeLight,
      title: "Corporate Relocation",
      description:
        "Seamless corporate relocations with minimal downtime for your business.",
      location: "Bulawayo, Zimbabwe",
      category: "BUSINESS",
      gradient: "from-purple-400 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    },
    {
      icon: GiWorld,
      title: "International Moves",
      description:
        "Expert international relocation services across borders with full customs support.",
      location: "Global Services",
      category: "INTERNATIONAL",
      gradient: "from-orange-400 to-red-500",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    },
    {
      icon: TfiPackage,
      title: "3PL Services",
      description:
        "End-to-end Third-Party Logistics solutions to streamline your supply chain.",
      location: "Distribution Centers",
      category: "LOGISTICS",
      gradient: "from-green-400 to-teal-500",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section 
        className="relative min-h-[100svh] overflow-hidden bg-gray-900"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            {backgroundImages.map(
              (image, index) =>
                index === currentSlide && (
                  <motion.div
                    key={`${index}-${image}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${image})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Controls */}
        <button
          onClick={prevSlide}
          className="absolute hidden sm:flex left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md p-2 sm:p-3 rounded-sm hover:bg-white/30 transition-all duration-300 group items-center justify-center"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute hidden sm:flex right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md p-2 sm:p-3 rounded-sm hover:bg-white/30 transition-all duration-300 group items-center justify-center"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-30">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`h-1.5 sm:h-2 transition-all duration-300 ${
                index === currentSlide
                  ? "w-6 sm:w-8 bg-gradient-to-r from-yellow-400 to-orange-500"
                  : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/70"
              } rounded-full min-w-[6px] min-h-[6px]`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative z-20 h-full min-h-[100svh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 w-full py-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-sm p-6 sm:p-8 lg:p-12 border border-white/20 shadow-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                  <span className="block text-white drop-shadow-lg">
                    Moving Made
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                    Simple & Secure
                  </span>
                </h1>
                <p className="text-white/90 text-sm sm:text-base lg:text-xl mb-6 sm:mb-8 leading-relaxed">
                  Professional logistics and relocation services across Zimbabwe
                  and beyond. From residential moves to international freight,
                  we handle it all with precision and care.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/branches')}
                    className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-sm text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all min-h-[48px]"
                  >
                    Get Free Quote
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/services')}
                    className="border-2 border-white/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-sm text-base sm:text-lg font-semibold backdrop-blur-sm hover:bg-white/20 transition-all min-h-[48px]"
                  >
                    Our Services
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Desktop Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {stats.map((stat, index) => {
                  const numMatch = stat.number.match(/(\d+)(.*)$/);
                  const number = numMatch ? parseInt(numMatch[1]) : 0;
                  const suffix = numMatch ? numMatch[2] : "";

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-white/10 backdrop-blur-lg rounded-sm p-4 lg:p-6 text-center border border-white/20 shadow-xl"
                    >
                      <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
                        <CountUp
                          end={number}
                          suffix={suffix}
                          delay={1000 + index * 100}
                        />
                      </div>
                      <div className="text-xs lg:text-sm text-white/80">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="lg:hidden absolute bottom-16 sm:bottom-20 left-0 right-0 z-30 px-4">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.slice(0, 2).map((stat, index) => {
              const numMatch = stat.number.match(/(\d+)(.*)$/);
              const number = numMatch ? parseInt(numMatch[1]) : 0;
              const suffix = numMatch ? numMatch[2] : "";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-sm p-3 sm:p-4 text-center border border-white/20"
                >
                  <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    <CountUp
                      end={number}
                      suffix={suffix}
                      delay={1000 + index * 100}
                    />
                  </div>
                  <div className="text-xs text-white/80">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Stats Section - Mobile */}
      <section className="lg:hidden py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const numMatch = stat.number.match(/(\d+)(.*)$/);
              const number = numMatch ? parseInt(numMatch[1]) : 0;
              const suffix = numMatch ? numMatch[2] : "";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 sm:p-6 text-center border border-gray-200 shadow-sm"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-2">
                    <CountUp
                      end={number}
                      suffix={suffix}
                      delay={200 + index * 100}
                    />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Our Expert Services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive logistics solutions tailored to your needs, backed
              by decades of experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                  <div className="h-48 sm:h-56 relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${service.image})`,
                      }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-85 mix-blend-multiply`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    <div className="relative h-full flex flex-col justify-between p-4 sm:p-6 text-white">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-sm p-2 w-fit mb-3 sm:mb-4">
                            <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white drop-shadow-lg" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold mb-2 drop-shadow-sm">
                            {service.title}
                          </h3>
                        </div>
                        <div className="text-right">
                          <div className="bg-white/20 backdrop-blur-sm rounded-sm px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold">
                            {service.category}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span className="truncate">{service.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 bg-white">
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <button className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 py-2.5 sm:py-3 px-4 rounded-sm text-sm sm:text-base font-semibold hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px]"
                      onClick={() => navigate('/services')}>
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

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Ready to Move?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300">
              Contact us today for a free consultation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-sm p-5 sm:p-6 text-center border border-white/20 hover:bg-white/15 transition-all min-h-[140px] flex flex-col justify-center"
            >
              <PiPhoneCallThin className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-yellow-400" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Call Us</h3>
              <p className="text-sm sm:text-base text-gray-300">08677008972</p>
              <p className="text-sm sm:text-base text-gray-300">+263 242 620524-7</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-sm p-5 sm:p-6 text-center border border-white/20 hover:bg-white/15 transition-all min-h-[140px] flex flex-col justify-center"
            >
              <GoMail className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-orange-400" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Email Us</h3>
              <p className="text-sm sm:text-base text-gray-300 break-all">stuttafords@zol.co.zw</p>
              <p className="text-sm sm:text-base text-gray-300 break-all">shipping@stuttafords.co.zw</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-sm p-5 sm:p-6 text-center border border-white/20 hover:bg-white/15 transition-all min-h-[140px] flex flex-col justify-center"
            >
              <CiTimer className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-red-400" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Opening Hours</h3>
              <p className="text-sm sm:text-base text-gray-300">Mon-Fri: 08:00 - 16:30</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
