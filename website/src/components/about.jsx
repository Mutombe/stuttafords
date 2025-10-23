import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Menu,
  X,
  Truck,
  Package,
  Plane,
  Ship,
  Warehouse,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Globe,
  Building2,
  MessageCircle,
  ChevronDown,
  Quote,
  Zap,
  Shield,
  Award,
  Target,
  Eye,
  Heart,
  Lightbulb,
} from "lucide-react";
import { CiFaceSmile } from "react-icons/ci";
import { LiaAwardSolid } from "react-icons/lia";
import { PiBuildingOfficeThin } from "react-icons/pi";
import { PiWarehouseThin } from "react-icons/pi";
import { PiEyeThin } from "react-icons/pi";
import { PiCubeFocusThin } from "react-icons/pi";

const AboutPage = () => {
  const navigate = useNavigate();
  const clients = [
    {
      name: "CBZ",
      logo: "/cbz1.png",
      industry: "Banking",
    },
    {
      name: "PSMI",
      logo: "/psms.png",
      industry: "Manufacturing",
    },
    {
      name: "Delta",
      logo: "/delta.jpg",
      industry: "Beverages",
    },
    {
      name: "Nyaradzo",
      logo: "/nyaradzo.jpeg",
      industry: "Funeral Services",
    },
    {
      name: "ZETDC",
      logo: "/zetdc.png",
      industry: "Energy",
    },
  ];

  const testimonials = [
    {
      name: "A. Chabata",
      company: "Edgars",
      text: "The service was excellent. I will recommend other clients who might need your service.",
      rating: 5,
      role: "Operations Manager",
    },
    {
      name: "Justin Ray",
      company: "US Embassy - Zambia",
      text: "By far the best moving experience we have had! Get name tags for the crew so they can be cited for their good work.",
      rating: 5,
      role: "Facilities Director",
    },
    {
      name: "Brenda Makuyana",
      company: "Total Zimbabwe",
      text: "All the goods has been properly loaded with great care and the loading crew is very friendly, effective and efficient.",
      rating: 5,
      role: "Logistics Coordinator",
    },
  ];

  const stats = [
    { number: "30+", label: "Years of Excellence", icon: LiaAwardSolid },
    { number: "1900+", label: "Happy Clients", icon: CiFaceSmile },
    { number: "750+", label: "Corporate Moves", icon: PiBuildingOfficeThin },
    { number: "24K", label: "Sqm Warehouse", icon: PiWarehouseThin },
  ];

  // Simplified Hexagon component for mobile
  const HexagonCard = ({ client, index, isCenter = false }) => {
    const size = isCenter ? 140 : 120;
    const radius = size / 2.3;
    const centerX = size / 2;
    const centerY = size / 2;

    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = ((i * 60 - 90) * Math.PI) / 180;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    const hexagonPath = `M${points.join(" L")} Z`;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative group cursor-pointer"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          className="absolute inset-0 transition-all duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient
              id={`gradient-${index}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
            <filter
              id={`shadow-${index}`}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="8"
                floodColor="rgba(0,0,0,0.1)"
              />
            </filter>
          </defs>
          <path
            d={hexagonPath}
            fill="white"
            stroke={`url(#gradient-${index})`}
            strokeWidth="3"
            filter={`url(#shadow-${index})`}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4">
          <div
            className={`${
              isCenter
                ? "w-12 sm:w-16 h-12 sm:h-16"
                : "w-10 sm:w-12 h-10 sm:h-12"
            } mb-2 sm:mb-3 flex items-center justify-center`}
          >
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        <div
          className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            clipPath: `polygon(${points
              .map((point) => {
                const [x, y] = point.split(",");
                return `${(x / size) * 100}% ${(y / size) * 100}%`;
              })
              .join(", ")})`,
          }}
        ></div>
      </motion.div>
    );
  };

  return (
    <div className="pt-16 sm:pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/90 via-red-900/80 to-orange-800/90"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-0">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-white"
            >
              <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-sm text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                <Truck className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                TRUSTED LOGISTICS PARTNER
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="block">Moving</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Excellence
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-3 sm:mt-4 opacity-90">
                  Since 1957
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
                A full-service logistics & cargo company committed to giving the
                best to our various clients at affordable prices.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.scrollTo({
                      top: document.body.scrollHeight,
                      behavior: "smooth",
                    })
                  }
                  className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-sm text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  Discover Our Story
                </motion.button>
              </div>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white/10 backdrop-blur-lg rounded-sm p-4 sm:p-6 text-center border border-white/20 shadow-2xl group"
                  >
                    <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-white/80">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-sm blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-sm blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white relative">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-orange-50 to-red-50 rounded-sm blur-3xl opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Purpose
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Driving forward with clear vision and unwavering mission
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-sm transform rotate-2 sm:rotate-3 group-hover:rotate-3 sm:group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-sm p-6 sm:p-8 shadow-2xl border border-orange-100">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-sm p-3 sm:p-4">
                    <PiEyeThin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                To be the most trusted, internationally recognized providers of Logistics Solutions in Zimbabwe.
                </p>

                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-200 rounded-sm"
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-sm transform -rotate-2 sm:-rotate-3 group-hover:-rotate-3 sm:group-hover:-rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-sm p-6 sm:p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-sm p-3 sm:p-4">
                    <PiCubeFocusThin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                   To simplify the movement of goods through reliable, transparent, and end-to-end logistics services, ensuring every client experiences world class efficiency, care, and accountability from origin to destination.
                </p>

                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-gray-200 rounded-sm flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Companies - Responsive Grid */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-32 sm:w-64 h-32 sm:h-64 border border-orange-200 rounded-sm opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-48 sm:w-96 h-48 sm:h-96 border border-red-200 rounded-sm opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Trusted by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Industry Leaders
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to serve some of Zimbabwe's most respected
              organizations across various industries
            </p>
          </motion.div>

          {/* Simplified responsive layout for hexagons */}
          <div className="flex justify-center mb-12 sm:mb-16">
            <div className="relative">
              {/* Mobile: Simple grid, Desktop: Honeycomb */}
              <div className="hidden lg:flex flex-col items-center">
                {/* Desktop Honeycomb Layout */}
                <div className="flex" style={{ gap: "40px" }}>
                  <HexagonCard client={clients[0]} index={0} />
                  <HexagonCard client={clients[1]} index={1} />
                </div>
                <div
                  className="flex justify-center"
                  style={{ marginTop: "-30px" }}
                >
                  <HexagonCard client={clients[2]} index={2} isCenter={true} />
                </div>
                <div
                  className="flex"
                  style={{ gap: "40px", marginTop: "-30px" }}
                >
                  <HexagonCard client={clients[3]} index={3} />
                  <HexagonCard client={clients[4]} index={4} />
                </div>
              </div>

              {/* Mobile & Tablet: Simple centered grid */}
              <div className="lg:hidden flex flex-wrap justify-center gap-6 sm:gap-8">
                {clients.map((client, index) => (
                  <HexagonCard key={index} client={client} index={index} />
                ))}
              </div>

              <div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-sm blur-3xl -z-10"
                style={{ transform: "scale(1.5)" }}
              ></div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              From banking to manufacturing, we've earned the trust of diverse
              industries
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {[
                "Banking",
                "Manufacturing",
                "Beverages",
                "Services",
                "Energy",
              ].map((industry, index) => (
                <span
                  key={index}
                  className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white rounded-sm shadow-lg text-sm sm:text-base text-gray-700 font-medium border border-orange-100"
                >
                  {industry}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white relative">
        <div className="absolute top-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-20 sm:h-32 fill-orange-50"
          >
            <path d="M0,160L48,138.7C96,117,192,75,288,80C384,85,480,139,576,154.7C672,171,768,149,864,144C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                Clients Say
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from satisfied customers who trust us with their
              most important moves
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-sm transform rotate-2 group-hover:rotate-3 transition-transform duration-300 opacity-10"></div>

                <div className="relative bg-white rounded-sm p-6 sm:p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                  <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-3 sm:p-4 shadow-lg">
                    <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>

                  <div className="flex gap-1 mb-3 sm:mb-4 mt-3 sm:mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-4 sm:mb-6 italic text-base sm:text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-sm flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-gray-900 text-sm sm:text-base truncate">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">
                        {testimonial.role}
                      </p>
                      <p className="text-xs sm:text-sm text-orange-600 font-medium truncate">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-sm opacity-50"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-16 sm:w-20 h-16 sm:h-20 border border-white/20 rounded-sm"></div>
          <div className="absolute bottom-10 right-10 w-24 sm:w-32 h-24 sm:h-32 border border-white/10 rounded-sm"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-sm"></div>
          <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-white/20 rounded-sm"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Experience Excellence?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
              Join the hundreds of satisfied clients who trust Stuttafords
              Zimbabwe for their logistics needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/branches")}
                className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-sm text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all min-h-[48px]"
              >
                Get Your Free Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/branches")}
                className="border-2 border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-sm text-base sm:text-lg font-semibold hover:bg-white/10 transition-all min-h-[48px]"
              >
                Contact Us Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
