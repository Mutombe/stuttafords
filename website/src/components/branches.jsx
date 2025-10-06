import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Clock, MapPin, Menu, X, Truck, Package, 
  Plane, Ship, Warehouse, Users, Star, ArrowRight, 
  CheckCircle, Globe, Building2, Home, Calendar,
  MessageCircle, ChevronDown, Quote, BookOpen, 
  TrendingUp, Award, Eye, Share2, Heart, Send,
  Navigation, ExternalLink, Building
} from 'lucide-react';

const BranchesPage = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [activeView, setActiveView] = useState('main'); // 'main', 'harare', 'bulawayo', 'malawi', 'zambia'
  const mapRef = useRef(null);
  const leafletLoaded = useRef(false);

  // Load Leaflet CSS and JS
  useEffect(() => {
    if (!leafletLoaded.current) {
      // Load Leaflet CSS
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
      document.head.appendChild(cssLink);

      // Load Leaflet JS
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
      script.onload = () => {
        leafletLoaded.current = true;
      };
      document.head.appendChild(script);
    }
  }, []);

  const branches = [
    {
      id: 'harare',
      name: "Head Office - Harare",
      country: "Zimbabwe",
      address: "6/Q St Georges Street, Ardbennie, Harare, Zimbabwe",
      phone: "+263 242 620524-7",
      email: "stuttafords@zol.co.zw",
      coordinates: [-17.8252, 31.0335],
      services: ["Full Service Hub", "International Moves", "Corporate Relocation", "Warehousing", "Air Freight", "Ocean Freight"],
      isHeadOffice: true,
      hours: "Mon-Fri: 08:00 - 16:30",
      description: "Our headquarters and main operations center, providing comprehensive logistics solutions across the region.",
      image: "/harare.jpg",
      established: "1993",
      teamSize: "50+"
    },
    {
      id: 'bulawayo',
      name: "Bulawayo Branch",
      country: "Zimbabwe", 
      address: "69 J Chinamano Rd, Donnington Corner Tamworth St, Bulawayo",
      phone: "263-292-477185",
      phone2: "263-292-472419",
      email: "stuttafordsbyo@stuttafords.co.zw",
      email2: "salesbyo@stuttafords.co.zw",
      coordinates: [-20.1500, 28.5833],
      services: ["Residential Moves", "Road Freight", "Local Distribution", "Regional Transport"],
      isHeadOffice: false,
      hours: "Mon-Fri: 08:00 - 16:30",
      description: "Strategic location serving western Zimbabwe and regional transport corridors.",
      image: "/bulawayo.png",
      established: "1995",
      teamSize: "15+"
    },
    {
      id: 'malawi',
      name: "Malawi Office",
      country: "Malawi",
      address: "P.O.Box 2052 Lilongwe, Malawi",
      phone: "265 1 712 467",
      email: "stutts@stuttafordsmalawi.com",
      coordinates: [-13.9626, 33.7741],
      services: ["Cross-border Transport", "Regional Logistics", "Customs Clearance", "Freight Forwarding"],
      isHeadOffice: false,
      hours: "Mon-Fri: 08:00 - 16:30",
      description: "Regional hub connecting Southern and Eastern Africa logistics networks.",
      image: "/malawi.jpg",
      established: "1998",
      teamSize: "12+"
    },
    {
      id: 'zambia',
      name: "Zambia Office",
      country: "Zambia",
      address: "Stand No 5190 Luanshya Road Villa Elizabetha, P.O. Box 30336, Lusaka",
      phone: "+260 1 211 240410",
      mobile: "+260 976749389",
      email: "admin@stuttafords.co.zm",
      coordinates: [-15.3875, 28.3228],
      services: ["International Gateway", "Freight Forwarding", "Warehousing", "Cross-border Logistics"],
      isHeadOffice: false,
      hours: "Mon-Sat: 08:00 - 16:30",
      description: "Member of SGI Group providing professional international removals and freight forwarding services.",
      image: "/zambia.jpg",
      established: "1993",
      teamSize: "20+"
    }
  ];

  // Real Leaflet map component for main branches page
const MainMapComponent = () => {
  const mainMapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    const initMap = () => {
      if (window.L && mainMapRef.current && !mapInstance.current) {
        // Initialize map centered on Southern Africa
        mapInstance.current = window.L.map(mainMapRef.current, {
          zoomControl: true,
          attributionControl: true,
          zIndex: 1 // Ensure map stays below other elements
        }).setView([-17.8, 28.5], 5);

        // Add tile layer
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(mapInstance.current);

        // Custom marker icons
        const headOfficeIcon = window.L.divIcon({
          className: "custom-div-icon head-office",
          html: `
            <div style="
              width: 32px; 
              height: 32px; 
              background: #f59e0b; 
              border-radius: 50% 50% 50% 0; 
              border: 3px solid white; 
              box-shadow: 0 3px 10px rgba(245, 158, 11, 0.4);
              transform: rotate(-45deg);
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <div style="
                width: 12px;
                height: 12px;
                background: white;
                border-radius: 50%;
                transform: rotate(45deg);
              "></div>
            </div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 32],
        });

        const branchIcon = window.L.divIcon({
          className: "custom-div-icon branch-office",
          html: `
            <div style="
              width: 28px; 
              height: 28px; 
              background: #3b82f6; 
              border-radius: 50% 50% 50% 0; 
              border: 3px solid white; 
              box-shadow: 0 3px 8px rgba(59, 130, 246, 0.3);
              transform: rotate(-45deg);
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <div style="
                width: 10px;
                height: 10px;
                background: white;
                border-radius: 50%;
                transform: rotate(45deg);
              "></div>
            </div>
          `,
          iconSize: [28, 28],
          iconAnchor: [14, 28],
        });

        // Add markers for each branch
        branches.forEach(branch => {
          const marker = window.L.marker(branch.coordinates, {
            icon: branch.isHeadOffice ? headOfficeIcon : branchIcon
          }).addTo(mapInstance.current);

          // Create popup content
          const popupContent = `
            <div style="min-width: 200px; padding: 8px; z-index: 1000;">
              <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold; color: #1f2937;">
                ${branch.name}
              </h3>
              <p style="margin: 0 0 8px 0; font-size: 14px; color: #6b7280;" className="gellix-font">
                ${branch.description}
              </p>
              <div style="margin-bottom: 8px;">
                <strong style="color: #374151;" className="gellix-font">Team:</strong> ${branch.teamSize}
              </div>
              <button 
                onclick="window.branchNavigation('${branch.id}')"
                style="
                  background: linear-gradient(135deg, #f59e0b, #dc2626);
                  color: white;
                  border: none;
                  padding: 8px 16px;
                  border-radius: 2px;
                  font-weight: 600;
                  cursor: pointer;
                  font-size: 14px;
                  width: 100%;
                "
                className="gellix-font"
              >
                View Details →
              </button>
            </div>
          `;

          marker.bindPopup(popupContent);
        });
      }
    };

    // Set up global navigation function
    window.branchNavigation = (branchId) => {
      setActiveView(branchId);
    };

    if (window.L) {
      initMap();
    } else {
      const checkLeaflet = setInterval(() => {
        if (window.L) {
          initMap();
          clearInterval(checkLeaflet);
        }
      }, 100);
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-96 bg-gray-100 rounded-sm overflow-hidden shadow-2xl" 
         style={{ zIndex: 1, isolation: 'isolate' }}>
      <div ref={mainMapRef} className="w-full h-full" style={{ zIndex: 1 }} />
      
      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-sm p-4 shadow-lg"
           style={{ zIndex: 10 }}>
        <h4 className="font-semibold text-gray-800 mb-2">Locations</h4>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gradient-to-br from-yellow-500 to-red-500 rounded-sm border-2 border-white"></div>
            <span className="text-xs text-gray-600">Head Office</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-sm border-2 border-white"></div>
            <span className="text-xs text-gray-600">Branch Office</span>
          </div>
        </div>
      </div>

      {/* Map Controls Info */}
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-sm p-3 shadow-lg"
           style={{ zIndex: 10 }}>
        <p className="text-xs text-gray-600">Click markers for details</p>
      </div>
    </div>
  );
};

  // Individual branch map component
 const BranchMapComponent = ({ branch }) => {
  const branchMapRef = useRef(null);
  const branchMapInstance = useRef(null);

  useEffect(() => {
    const initBranchMap = () => {
      if (window.L && branchMapRef.current && !branchMapInstance.current && branch) {
        // Initialize map centered on branch location
        branchMapInstance.current = window.L.map(branchMapRef.current, {
          zoomControl: true,
          attributionControl: true,
          zIndex: 1 // Ensure map stays below other elements
        }).setView(branch.coordinates, 13);

        // Add tile layer
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(branchMapInstance.current);

        // Custom marker for the branch
        const branchIcon = window.L.divIcon({
          className: 'custom-div-icon',
          html: `
            <div style="
              width: 48px; 
              height: 48px; 
              background: ${branch.isHeadOffice ? 'linear-gradient(135deg, #f59e0b, #dc2626)' : 'linear-gradient(135deg, #3b82f6, #10b981)'}; 
              border-radius: 50%; 
              border: 4px solid white; 
              box-shadow: 0 4px 16px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              z-index: 10;
            ">
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path d="M3 21v-6h3v6h12v-6h3v6h-18zm15-8v-7h-12v7h-3l9-8 9 8h-3z"/>
              </svg>
              <div style="
                position: absolute;
                top: -8px;
                right: -8px;
                width: 16px;
                height: 16px;
                background: #10b981;
                border-radius: 50%;
                border: 2px solid white;
                animation: pulse 2s infinite;
                z-index: 11;
              "></div>
            </div>
          `,
          iconSize: [48, 48],
          iconAnchor: [24, 48]
        });

        // Add marker
        const marker = window.L.marker(branch.coordinates, {
          icon: branchIcon
        }).addTo(branchMapInstance.current);

        // Create detailed popup
        const popupContent = `
          <div style="min-width: 250px; padding: 12px; z-index: 1000;">
            <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: bold; color: #1f2937;">
              ${branch.name}
            </h3>
            <p style="margin: 0 0 12px 0; font-size: 14px; color: #6b7280;">
              ${branch.address}
            </p>
            <div style="margin-bottom: 8px; font-size: 14px;">
              <strong>Phone:</strong> ${branch.phone}
            </div>
            <div style="margin-bottom: 8px; font-size: 14px;">
              <strong>Email:</strong> ${branch.email}
            </div>
            <div style="font-size: 14px;">
              <strong>Hours:</strong> ${branch.hours}
            </div>
          </div>
        `;

        marker.bindPopup(popupContent).openPopup();
      }
    };

    if (window.L) {
      initBranchMap();
    } else {
      const checkLeaflet = setInterval(() => {
        if (window.L) {
          initBranchMap();
          clearInterval(checkLeaflet);
        }
      }, 100);
    }

    return () => {
      if (branchMapInstance.current) {
        branchMapInstance.current.remove();
        branchMapInstance.current = null;
      }
    };
  }, [branch]);

  return (
    <div className="w-full h-80 bg-gray-100 rounded-sm overflow-hidden shadow-lg" 
         style={{ zIndex: 1, isolation: 'isolate' }}>
      <div ref={branchMapRef} className="w-full h-full" style={{ zIndex: 1 }} />
    </div>
  );
};

  // Simple map component (fallback - will be replaced)
  const MapComponent = () => {
    useEffect(() => {
      // This is now replaced by the real Leaflet map components above
    }, []);

    // This is a fallback component, real maps are implemented above
    return <MainMapComponent />;
  };

  // Individual Branch Components
  const HarareBranchPage = () => {
    const harareBranch = branches.find(b => b.id === 'harare');
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50"
      >
        {/* Hero Section */}
        <div className="relative h-screen flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/Truck.jpg')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-red-900/60" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-sm text-sm font-medium mb-6">
                  <Star className="h-4 w-4 mr-2" />
                  HEAD OFFICE
                </span>
                <h1 className="text-6xl font-bold mb-6">Harare Headquarters</h1>
                <p className="text-xl mb-8 opacity-90">
                  Our main operations center providing comprehensive logistics solutions across Southern Africa.
                </p>
                <div className="flex gap-4">
                  <button className="bg-white text-gray-900 px-8 py-4 rounded-sm font-semibold hover:bg-gray-100 transition-colors">
                    Contact Us
                  </button>
                  <button className="border-2 border-white/50 px-8 py-4 rounded-sm font-semibold hover:bg-white/10 transition-colors">
                    View Services
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md rounded-sm p-6 text-center">
                  <div className="text-4xl font-bold mb-2">30+</div>
                  <div className="text-sm opacity-80">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-sm p-6 text-center">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-sm opacity-80">Team Members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-sm p-6 text-center">
                  <div className="text-4xl font-bold mb-2">24K</div>
                  <div className="text-sm opacity-80">Sqm Warehouse</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-sm p-6 text-center">
                  <div className="text-4xl font-bold mb-2">1993</div>
                  <div className="text-sm opacity-80">Established</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information with Map */}
        <div className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">6/Q St Georges Street, Ardbennie, Harare, Zimbabwe</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+263 242 620524-7</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">stuttafords@zol.co.zw</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Hours</h4>
                      <p className="text-gray-600">Mon-Fri: 08:00 - 16:30</p>
                    </div>
                  </div>
                </div>

                {/* Interactive Map */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
                  <BranchMapComponent branch={harareBranch} />
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-sm p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <div className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"></textarea>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-sm font-semibold hover:scale-105 transition-transform">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const BulawayoBranchPage = () => {
    const bulawayoBranch = branches.find(b => b.id === 'bulawayo');
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50"
      >
        {/* Card-style Layout */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-sm shadow-2xl overflow-hidden">
              {/* Header Image */}
              <div className="relative h-64">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('/Truck2.jpg')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-4xl font-bold mb-2">Bulawayo Branch</h1>
                  <p className="text-blue-100">Strategic Western Zimbabwe Hub</p>
                </div>
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-sm text-white text-sm font-semibold">
                  Est. 1995
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">About Our Branch</h3>
                    <p className="text-gray-600 mb-6">
                      Our Bulawayo branch serves as a strategic location for western Zimbabwe and regional transport corridors, 
                      providing essential logistics services to businesses and individuals in the region.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-700">69 J Chinamano Rd, Donnington Corner Tamworth St, Bulawayo</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-700">263-292-477185 / 472419</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-blue-500" />
                        <span className="text-gray-700">stuttafordsbyo@stuttafords.co.zw</span>
                      </div>
                    </div>

                    {/* Map */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Our Location</h4>
                      <BranchMapComponent branch={bulawayoBranch} />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Services Available</h3>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {["Residential Moves", "Road Freight", "Local Distribution", "Regional Transport"].map((service, idx) => (
                        <div key={idx} className="bg-blue-50 rounded-sm p-3 text-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto mb-1" />
                          <span className="text-sm text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-sm p-6 text-white">
                      <h4 className="font-bold mb-2">Quick Contact</h4>
                      <p className="text-sm mb-4">Need immediate assistance? Get in touch with our Bulawayo team.</p>
                      <button className="bg-white text-blue-600 px-6 py-2 rounded-sm text-sm font-semibold hover:bg-gray-100 transition-colors">
                        Contact Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const MalawiBranchPage = () => {
    const malawiBranch = branches.find(b => b.id === 'malawi');
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50"
      >
        <div className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            {/* Split Layout */}
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Left Content */}
              <div className="lg:col-span-3 space-y-8">
                <div className="bg-white rounded-sm p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-8 bg-green-500 rounded-sm flex items-center justify-center text-white font-bold text-xs">
                      MW
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">Malawi Office</h1>
                      <p className="text-green-600">Regional Hub - East Africa Connection</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Our Malawi office serves as a crucial regional hub connecting Southern and Eastern Africa logistics networks, 
                    providing seamless cross-border solutions for businesses across the region.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">12+</div>
                      <div className="text-sm text-gray-600">Team Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">1998</div>
                      <div className="text-sm text-gray-600">Established</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-sm font-semibold hover:scale-105 transition-transform mb-6">
                    Get Quote
                  </button>

                  {/* Map Section */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Find Us</h3>
                    <BranchMapComponent branch={malawiBranch} />
                  </div>
                </div>
                
                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {["Cross-border Transport", "Regional Logistics", "Customs Clearance", "Freight Forwarding"].map((service, idx) => (
                    <div key={idx} className="bg-white rounded-sm p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <CheckCircle className="h-8 w-8 text-green-500 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">{service}</h4>
                      <p className="text-sm text-gray-600">Professional service delivery</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Contact Card */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-sm p-8 shadow-xl sticky top-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Phone className="h-4 w-4 text-green-500" />
                        <span className="font-semibold text-gray-900">Phone</span>
                      </div>
                      <p className="text-gray-600">265 1 712 467</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Mail className="h-4 w-4 text-green-500" />
                        <span className="font-semibold text-gray-900">Email</span>
                      </div>
                      <p className="text-gray-600">stutts@stuttafordsmalawi.com</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="h-4 w-4 text-green-500" />
                        <span className="font-semibold text-gray-900">Address</span>
                      </div>
                      <p className="text-gray-600">P.O.Box 2052 Lilongwe, Malawi</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="h-4 w-4 text-green-500" />
                        <span className="font-semibold text-gray-900">Hours</span>
                      </div>
                      <p className="text-gray-600">Mon-Fri: 08:00 - 16:30</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                    <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                    <textarea placeholder="Message" rows="3" className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"></textarea>
                    <button className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-sm font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const ZambiaBranchPage = () => {
    const zambiaBranch = branches.find(b => b.id === 'zambia');
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50"
      >
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            {/* Feature Layout */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Stuttafords Zambia</h1>
              <p className="text-xl text-gray-600">Member of SGI Group - Professional International Logistics</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Info Card */}
              <div className="lg:col-span-2 bg-white rounded-sm shadow-2xl overflow-hidden">
                <div className="relative h-64">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/truck3.jpg')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
                  </div>
                  <div className="absolute inset-0 flex items-end p-8">
                    <div className="text-white">
                      <h2 className="text-3xl font-bold mb-2">Est. 1993 - SGI Group Member</h2>
                      <p className="text-purple-100">Professional, reliable and expert international services</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Formed in 1993, Stuttafords Zambia is a member of the SGI Group of Companies which has branches in Zimbabwe, 
                    Malawi, Mozambique and South Africa. The company provides professional, reliable and expert international removals, 
                    freight forwarding logistics and cross borders services in the region.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Contact Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-purple-500" />
                          <span>+260 1 211 240410/412/413</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-purple-500" />
                          <span>Mobile: +260 976749389</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-purple-500" />
                          <span>admin@stuttafords.co.zm</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Location & Hours</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-purple-500 mt-0.5" />
                          <span>Stand No 5190 Luanshya Road Villa Elizabetha, P.O. Box 30336, Lusaka</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-purple-500" />
                          <span>Mon-Sat: 08:00 - 16:30</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Map */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Our Location</h4>
                    <BranchMapComponent branch={zambiaBranch} />
                  </div>
                </div>
              </div>
              
              {/* Services & Contact */}
              <div className="space-y-6">
                <div className="bg-white rounded-sm p-6 shadow-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services</h3>
                  <div className="space-y-3">
                    {["International Gateway", "Freight Forwarding", "Warehousing", "Cross-border Logistics"].map((service, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-purple-50 rounded-sm">
                        <CheckCircle className="h-5 w-5 text-purple-500" />
                        <span className="text-gray-700 font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-sm p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Quick Contact Form</h3>
                  <div className="space-y-3">
                    <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50" />
                    <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50" />
                    <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50" />
                    <textarea placeholder="Message" rows="3" className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"></textarea>
                    <button className="w-full bg-white text-purple-600 py-3 rounded-sm font-semibold hover:bg-gray-100 transition-colors">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Main Branches Page
  const MainBranchesPage = () => (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Regional Network</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic locations across Southern Africa ensuring we're always close to serve you better
            </p>
          </motion.div>

          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <MapComponent />
          </motion.div>

          {/* Branches Overview Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setActiveView(branch.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${branch.image})` }}
                  />
                  <div className={`absolute inset-0 ${
                    branch.isHeadOffice 
                      ? 'bg-gradient-to-t from-orange-900/80 to-orange-500/40'
                      : 'bg-gradient-to-t from-gray-900/80 to-gray-500/40'
                  }`} />
                  
                  {/* Badge */}
                  {branch.isHeadOffice && (
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-sm text-white text-xs font-semibold">
                      HEAD OFFICE
                    </div>
                  )}
                  
                  {/* Country Flag */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-sm text-white text-xs font-semibold">
                    {branch.country}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {branch.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{branch.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{branch.teamSize} Team</span>
                    </div>
                    <div className="flex items-center gap-1 text-orange-500 font-semibold text-sm">
                      View Details
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-orange-100">Regional Offices</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-orange-100">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">97+</div>
              <div className="text-orange-100">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-orange-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // Render based on active view
  const renderCurrentView = () => {
    switch(activeView) {
      case 'harare': return <HarareBranchPage />;
      case 'bulawayo': return <BulawayoBranchPage />;
      case 'malawi': return <MalawiBranchPage />;
      case 'zambia': return <ZambiaBranchPage />;
      default: return <MainBranchesPage />;
    }
  };

  return (
    <div className="pt-24">
      {/* Back Button for individual branch pages */}
      <br></br>
      {activeView !== 'main' && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => setActiveView('main')}
          className="fixed top-24 left-4 z-50 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm shadow-lg hover:bg-white transition-colors flex items-center gap-2 "
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
          <span className="font-medium">Back to Map</span>
        </motion.button>
      )}
      
      <AnimatePresence mode="wait">
        {renderCurrentView()}
      </AnimatePresence>
    </div>
  );
};

export default BranchesPage;