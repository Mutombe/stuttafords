import React, { useState, useEffect, useRef, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Clock, MapPin, Menu, X, Search,
  FileText, Package, Sparkles, Command, ChevronRight,
  Globe, ArrowRight
} from 'lucide-react';
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineCloseFullscreen } from "react-icons/md";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Our Services' },
    { path: '/faq', label: 'FAQs' },
    { path: '/news', label: 'News' },
    { path: '/branches', label: 'Regional Branches' },
  ];

  return (
    <>
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
                <img src="/logo2.png" alt="Stuttafords Zimbabwe Logo" className="h-16 w-44" />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-gray-700 hover:text-orange-500 transition-colors font-medium group"
                >
                  <span className={isActive(link.path) ? 'text-orange-500' : ''}>
                    {link.label}
                  </span>
                  {/* Active indicator - animated underline */}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* Hover underline */}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              ))}
              
              {/* Desktop Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 lg:px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all group"
              >
                <Search className="h-4 w-4 text-gray-500 group-hover:text-gray-700" />
                <span className="text-sm text-gray-600 hidden lg:inline-block">Search</span>
                <span className="hidden lg:inline-flex items-center gap-0.5 ml-2 text-xs text-gray-400">
                  <Command className="h-3 w-3" />K
                </span>
              </motion.button>
              
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-sm hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Controls */}
            <div className="md:hidden flex items-center gap-2">
              {/* Mobile Search Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Search className="h-6 w-6 text-gray-700" />
              </motion.button>
              
              {/* Mobile Menu Toggle */}
              <button 
                className="z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <CiMenuFries className="h-6 w-6 text-gray-700" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Full Screen Mobile Menu with Glassmorphism */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/20 to-purple-500/20 backdrop-blur-xl z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-full bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 backdrop-blur-2xl z-40 md:hidden overflow-y-auto"
            >
              {/* Decorative background elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
              </div>

              <div className="relative pt-32 pb-12 px-8">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-12 text-center"
                >
                  <p className="text-gray-400 text-sm">Professional Logistics & Moving Services</p>
                </motion.div>

                {/* Mobile Search in Menu */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mb-8"
                >
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => setIsSearchOpen(true), 300);
                    }}
                    className="w-full flex items-center justify-between px-6 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                  >
                    <div className="flex items-center gap-3">
                      <Search className="h-5 w-5" />
                      <span>Search</span>
                    </div>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">⌘K</span>
                  </button>
                </motion.div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, type: "spring", stiffness: 100 }}
                    >
                      <Link
                        to={link.path}
                        className={`block px-6 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 ${
                          isActive(link.path)
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl'
                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center justify-between">
                          <span>{link.label}</span>
                          {isActive(link.path) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 rounded-full bg-white"
                            />
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12"
                >
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105">
                    Get Free Quote
                  </button>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-12 pt-8 border-t border-white/10"
                >
                  <h3 className="text-white font-bold mb-4">Contact Us</h3>
                  <div className="space-y-3 text-gray-400 text-sm">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-orange-500" />
                      <span>08677008972</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-orange-500" />
                      <span>stuttafords@zol.co.zw</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span>Mon-Fri: 08:00 - 16:30</span>
                    </div>
                  </div>
                </motion.div>

                {/* Social Media or Additional Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 text-center"
                >
                  <p className="text-gray-500 text-xs">
                    © 2024 Stuttafords Zimbabwe. All rights reserved.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// Search Modal Component (from the search component)
const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState([]);
  const searchInputRef = useRef(null);

  // Comprehensive search index
  const searchIndex = [
    // Pages
    {
      id: 'home',
      title: 'Home',
      type: 'page',
      url: '/',
      keywords: ['home', 'main', 'landing', 'start'],
      description: 'Welcome to Stuttafords Zimbabwe - Professional logistics and moving services',
      content: 'Moving Made Simple & Secure. Professional logistics relocation services Zimbabwe'
    },
    {
      id: 'about',
      title: 'About Us',
      type: 'page',
      url: '/about',
      keywords: ['about', 'company', 'history', 'team', 'mission', 'vision'],
      description: 'Learn about our 30+ years of experience in logistics',
      content: 'Stuttafords history experience professional team logistics moving company Zimbabwe'
    },
    {
      id: 'services',
      title: 'Our Services',
      type: 'page',
      url: '/services',
      keywords: ['services', 'offerings', 'solutions'],
      description: 'Explore our comprehensive range of logistics and moving services',
      content: 'Complete services residential corporate international freight logistics 3PL'
    },
    {
      id: 'faq',
      title: 'FAQs',
      type: 'page',
      url: '/faq',
      keywords: ['faq', 'questions', 'help', 'support'],
      description: 'Find answers to frequently asked questions',
      content: 'Frequently asked questions answers help support moving logistics'
    },
    {
      id: 'news',
      title: 'News',
      type: 'page',
      url: '/news',
      keywords: ['news', 'updates', 'latest', 'blog'],
      description: 'Latest news and updates from Stuttafords Zimbabwe',
      content: 'Latest news updates announcements company logistics industry'
    },
    {
      id: 'branches',
      title: 'Regional Branches',
      type: 'page',
      url: '/branches',
      keywords: ['branches', 'locations', 'offices', 'regional'],
      description: 'Find our branch offices across Zimbabwe and the region',
      content: 'Branch locations offices Harare Bulawayo Malawi Zambia'
    },
    // Services
    {
      id: 'residential',
      title: 'Residential Moves',
      type: 'service',
      url: '/services',
      keywords: ['home', 'house', 'residential', 'moving', 'furniture'],
      description: 'Professional home relocation services',
      content: 'Residential home house moving relocation packing unpacking furniture'
    },
    {
      id: 'corporate',
      title: 'Corporate Relocation',
      type: 'service',
      url: '/services',
      keywords: ['corporate', 'business', 'office', 'commercial'],
      description: 'Seamless corporate relocations',
      content: 'Corporate business office relocation commercial moves'
    },
    {
      id: 'international',
      title: 'International Moves',
      type: 'service',
      url: '/services',
      keywords: ['international', 'global', 'overseas', 'customs'],
      description: 'Expert international relocation services',
      content: 'International global overseas moves customs clearance'
    },
    // Branches
    {
      id: 'harare',
      title: 'Harare Head Office',
      type: 'branch',
      url: '/branches',
      keywords: ['harare', 'head office', 'headquarters'],
      description: '6/Q St Georges Street, Ardbennie, Harare',
      content: 'Harare head office headquarters Ardbennie'
    },
    {
      id: 'bulawayo',
      title: 'Bulawayo Branch',
      type: 'branch',
      url: '/branches',
      keywords: ['bulawayo', 'branch', 'donnington'],
      description: '69 J Chinamano Rd, Donnington Corner',
      content: 'Bulawayo branch office Donnington'
    },
    // Contact
    {
      id: 'phone',
      title: 'Phone Numbers',
      type: 'contact',
      url: '/branches',
      keywords: ['phone', 'call', 'contact', 'number'],
      description: 'Call us: 08677008972',
      content: 'Phone call 08677008972 contact'
    },
    {
      id: 'quote',
      title: 'Get a Quote',
      type: 'action',
      url: '/faq',
      keywords: ['quote', 'price', 'cost', 'estimate'],
      description: 'Request a free quote',
      content: 'Get quote free pricing estimate'
    }
  ];

  // Load recent searches
  useEffect(() => {
    const saved = localStorage.getItem('stuttafords-recent');
    if (saved) setRecentSearches(JSON.parse(saved));
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Calculate search results
  const searchResults = useMemo(() => {
    if (!query || query.length < 2) return [];
    
    const q = query.toLowerCase();
    return searchIndex
      .filter(item => 
        item.title.toLowerCase().includes(q) ||
        item.keywords.some(k => k.includes(q)) ||
        item.description.toLowerCase().includes(q) ||
        item.content.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < searchResults.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : searchResults.length - 1
        );
      } else if (e.key === 'Enter' && searchResults[selectedIndex]) {
        e.preventDefault();
        handleResultClick(searchResults[selectedIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, searchResults]);

  const handleResultClick = (result) => {
    // Save to recent searches
    const newRecent = [
      { query, timestamp: Date.now() },
      ...recentSearches.filter(s => s.query !== query)
    ].slice(0, 5);
    
    setRecentSearches(newRecent);
    localStorage.setItem('stuttafords-recent', JSON.stringify(newRecent));
    
    // Navigate to result
    window.location.href = result.url;
    onClose();
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'page': return <FileText className="h-4 w-4" />;
      case 'service': return <Package className="h-4 w-4" />;
      case 'branch': return <MapPin className="h-4 w-4" />;
      case 'contact': return <Phone className="h-4 w-4" />;
      case 'action': return <Sparkles className="h-4 w-4" />;
      default: return <Globe className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'page': return 'from-blue-500 to-blue-600';
      case 'service': return 'from-purple-500 to-pink-500';
      case 'branch': return 'from-green-500 to-teal-500';
      case 'contact': return 'from-orange-500 to-red-500';
      case 'action': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Search Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-3xl z-[61] p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Search Header */}
              <div className="p-6 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                        setSelectedIndex(0);
                      }}
                      placeholder="Search pages, services, locations..."
                      className="w-full text-xl font-medium text-gray-900 placeholder-gray-400 outline-none"
                    />
                    {query && (
                      <div className="mt-2 text-xs text-gray-500">
                        {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
                      </div>
                    )}
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Search Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {query && searchResults.length > 0 ? (
                  <div className="p-2">
                    {searchResults.map((result, idx) => (
                      <motion.button
                        key={result.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.02 }}
                        onClick={() => handleResultClick(result)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full px-4 py-3 flex items-center gap-4 hover:bg-gray-50 rounded-lg transition-all ${
                          selectedIndex === idx ? 'bg-gray-50' : ''
                        }`}
                      >
                        <div className={`p-2 bg-gradient-to-br ${getTypeColor(result.type)} rounded-lg shadow-sm`}>
                          {getTypeIcon(result.type)}
                        </div>
                        <div className="flex-1 text-left">
                          <div className="font-medium text-gray-900">
                            {result.title}
                          </div>
                          <div className="text-sm text-gray-500 line-clamp-1">
                            {result.description}
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </motion.button>
                    ))}
                  </div>
                ) : query && query.length >= 2 ? (
                  <div className="p-12 text-center">
                    <Search className="h-8 w-8 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No results found</h3>
                    <p className="text-sm text-gray-500">Try searching with different keywords</p>
                  </div>
                ) : (
                  <div className="p-6">
                    {/* Recent Searches */}
                    {recentSearches.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Recent Searches
                        </h3>
                        <div className="space-y-2">
                          {recentSearches.slice(0, 3).map((search, idx) => (
                            <button
                              key={idx}
                              onClick={() => setQuery(search.query)}
                              className="w-full px-3 py-2 flex items-center gap-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
                            >
                              <Clock className="h-4 w-4 text-gray-400" />
                              <span className="flex-1 text-gray-700">{search.query}</span>
                              <ArrowRight className="h-4 w-4 text-gray-400" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Popular Searches */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Popular Searches
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {['Get Quote', 'International Moves', 'Harare Office', '3PL Services', 'Contact'].map(term => (
                          <button
                            key={term}
                            onClick={() => setQuery(term)}
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Command className="h-3 w-3" />K to open
                    </span>
                    <span>↑↓ to navigate</span>
                    <span>↵ to select</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Powered by Stuttafords Search
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Navigation;