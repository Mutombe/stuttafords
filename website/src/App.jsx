import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Package, Truck } from "lucide-react";

import Navigation from "./components/nav.jsx";
import HomePage from "./components/home.jsx";
import AboutPage from "./components/about.jsx";
import ServicesPage from "./components/services.jsx";
import FAQPage from "./components/faq.jsx";
import NewsPage from "./components/news.jsx";
import BranchesPage from "./components/branches.jsx";
import Footer from "./components/footer.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Loading Screen Component
const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative inline-block"
        >
          {/* Logo Container - Replace with actual logo if available */}
          <div className="relative">
            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <h1 className="text-4xl font-bold text-white">STUTTAFORDS</h1>
              <p className="text-orange-400 text-sm tracking-widest mt-1">
                LOGISTICS
              </p>
            </motion.div>
          </div>

          {/* Glow effect */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 -z-10 blur-3xl"
          >
            <div className="w-full h-full bg-gradient-to-r from-orange-500 to-red-500 opacity-30 rounded-full" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          {/* Loading dots */}
          <div className="flex items-center justify-center space-x-1">
            {[0, 0.2, 0.4].map((delay, index) => (
              <motion.div
                key={index}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut",
                }}
                className="w-2.5 h-2.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
              />
            ))}
          </div>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-gray-400 text-sm mt-4 font-medium tracking-wider"
          >
            Loading...
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Page Wrapper for transitions
const PageWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

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
      <ScrollToTop />
      <Navigation />
      <PageWrapper>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/branches" element={<BranchesPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </PageWrapper>
      
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
