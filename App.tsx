import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Features from './components/Features';
import Footer from './components/Footer';
import CourseDetail from './components/CourseDetail';
import Contact from './components/Contact';

// Declare AOS strictly for TypeScript since it's loaded via CDN
declare global {
  interface Window {
    AOS: any;
  }
}

// This component handles scrolling to top AND refreshing animations
const RouteObserver = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0);
    
    // Aggressively refresh AOS animations to prevent blank pages
    // We call it multiple times to catch different phases of the render cycle
    if (window.AOS) {
      // Immediate refresh
      window.AOS.refreshHard(); 
      
      // Short delay check
      setTimeout(() => {
        window.AOS.refreshHard();
      }, 150);
      
      // Long delay check (fallback)
      setTimeout(() => {
        window.AOS.refreshHard();
      }, 500);
    }
  }, [pathname]);
  
  return null;
};

const HomePage: React.FC = () => (
  <main>
    <Hero />
    <Courses />
    <Features />
  </main>
);

const App: React.FC = () => {
  useEffect(() => {
    // Initialize Animate On Scroll
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: false, // Keep animating on scroll up/down
        mirror: true, 
        easing: 'ease-out-cubic',
        offset: 100,
      });
    }
  }, []);

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-tech-dark text-slate-50 font-sans selection:bg-tech-accent selection:text-tech-dark">
        <RouteObserver />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;