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
    <div className="min-h-screen bg-white gellix-font">
      <style jsx>{`
        @font-face {
          font-family: "Gravesend Sans";
          src: url("./fonts/fonnts.com-Gravesend_Sans_Light.otf")
            format("opentype");
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Gravesend Sans";
          src: url("./fonts/fonnts.com-Gravesend_Sans_Medium.otf")
            format("opentype");
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Gravesend Sans";
          src: url("./fonts/fonnts.com-Gravesend_Sans_Bold.otf")
            format("opentype");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }

        /* Century Gothic Font Face */
        @font-face {
          font-family: "Century Gothic Custom";
          src: url("./fonts/weezerfont.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Gellix";
          src: url("./fonts/Gellix-Light.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Gellix";
          src: url("./fonts/Gellix-Regular.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        /* GravitaHUM Font Face */
        @font-face {
          font-family: "GravitaHUM";
          src: url("./fonts/gravita/GravitaHUM-Thin-BF657928839dbb0.otf")
            format("opentype");
          font-weight: 100;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "GravitaHUM";
          src: url("./fonts/gravita/GravitaHUMItalic-Thin-BF657928846675fc.otf")
            format("opentype");
          font-weight: 100;
          font-style: italic;
          font-display: swap;
        }

        @font-face {
          font-family: "GravitaHUM";
          src: url("/fonts/gravita/GravitaHUM-ExtraLight-BF657928834054d.otf")
            format("opentype");
          font-weight: 200;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "GravitaHUM";
          src: url("/fonts/gravita/GravitaHUMItalic-ExtraLight-BF657928845454584.otf")
            format("opentype");
          font-weight: 200;
          font-style: italic;
          font-display: swap;
        }

        @font-face {
          font-family: "GravitaHUM";
          src: url("/fonts/gravita/GravitaHUM-Light-BF657928883617e7.otf")
            format("opentype");
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "GravitaHUM";
          src: url("/fonts/gravita/GravitaHUMItalic-Light-BF657928843d22e.otf")
            format("opentype");
          font-weight: 300;
          font-style: italic;
          font-display: swap;
        }

        @font-face {
          font-family: "GravitaHUM";
          src: url("/fonts/gravita/GravitaHUM-Regular-BF657928883558f8b.otf")
            format("opentype");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "GravitaHUM";
          src: url("/fonts/gravita/GravitaHUMItalic-Regular-BF657928883913da.otf")
            format("opentype");
          font-weight: 400;
          font-style: italic;
          font-display: swap;
        }

        @font-face {
          font-family: "GravitaHUM";
          src: url("/fonts/gravita/GravitaHUM-Medium-BF657928826638d1.otf")
            format("opentype");
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "GravitaHUM";
          src: url("/fonts/gravita/GravitaHUMItalic-Medium-BF657928845f94f.otf")
            format("opentype");
          font-weight: 500;
          font-style: italic;
          font-display: swap;
        }

        @font-face {
          font-family: "GravitaHUM";
          src: url("/fonts/gravita/GravitaHUM-Bold-BF657928881d425d.otf")
            format("opentype");
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "GravitaHUM";
          src: url("/fonts/gravita/GravitaHUMItalic-Bold-BF657928845732a.otf")
            format("opentype");
          font-weight: 700;
          font-style: italic;
          font-display: swap;
        }

        @font-face {
          font-family: "GravitaHUM";
          src: url("/fonts/gravita/GravitaHUM-ExtraBold-BF657928822e711f.otf")
            format("opentype");
          font-weight: 800;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "GravitaHUM";
          src: url("/fonts/gravita/GravitaHUMItalic-ExtraBold-BF657928845bee6.otf")
            format("opentype");
          font-weight: 800;
          font-style: italic;
          font-display: swap;
        }

        @font-face {
          font-family: "GravitaHUM";
          src: url("/fonts/gravita/GravitaHUM-Black-BF657928175673.otf")
            format("opentype");
          font-weight: 900;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "GravitaHUM";
          src: url("/fonts/gravita/GravitaHUMItalic-Black-BF657928846664bc.otf")
            format("opentype");
          font-weight: 900;
          font-style: italic;
          font-display: swap;
        }

        @font-face {
          font-family: "GravitaHUM";
          src: url("/fonts/gravita/GravitaHUM-Hairline-BF657928833ebb5f.otf")
            format("opentype");
          font-weight: 100;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "GravitaHUM";
          src: url("/fonts/gravita/GravitaHUMItalic-Hairline-BF657928847167f.otf")
            format("opentype");
          font-weight: 100;
          font-style: italic;
          font-display: swap;
        }
        /* Font utility classes */
        .gravesend-sans {
          font-family: "Gravesend Sans", "Inter", "Segoe UI", Tahoma, Geneva,
            Verdana, sans-serif;
        }

        .roboto-font {
          font-family: "Roboto", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
            sans-serif;
        }

        .century-gothic {
          font-family: "Century Gothic Custom", "Century Gothic", "Arial",
            sans-serif;
        }

        .gellix-font {
          font-family: "Gellix", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
            sans-serif;
        }

        .gravita-font {
          font-family: "GravitaHUM", "Inter", "Segoe UI", Tahoma, Geneva,
            Verdana, sans-serif;
        }

        body {
          overflow-x: hidden;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
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