import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navigation from './components/nav.jsx';
import HomePage from './components/home.jsx';
import AboutPage from './components/about.jsx';
import ServicesPage from './components/services.jsx';
import FAQPage from './components/faq.jsx';
import NewsPage from './components/news.jsx';
import BranchesPage from './components/branches.jsx';
import Footer from './components/footer.jsx';

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/branches" element={<BranchesPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

// Root Component with Router
const StuttafordsWebsite = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default StuttafordsWebsite;