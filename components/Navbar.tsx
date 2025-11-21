import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '精品课程', path: '/', hash: '#courses' },
    { name: '师资力量', path: '/' }, // Placeholder
    { name: '关于我们', path: '/', hash: '#features' }, // Update: Will scroll to Features section
  ];

  const handleNavClick = (path: string, hash?: string) => {
    setIsMobileMenuOpen(false);

    const scrollToElement = () => {
      const element = document.querySelector(hash || '');
      if (element) {
        // 100px offset to account for the fixed header height + some breathing room
        const headerOffset = 100; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };

    if (path === '/' && location.pathname !== '/') {
      navigate('/');
      // Delay to allow page navigation before scrolling
      if (hash) {
        setTimeout(scrollToElement, 300);
      }
    } else if (hash) {
      // If we are already on the home page
      if (location.pathname === '/') {
        scrollToElement();
      } else {
        navigate('/');
        setTimeout(scrollToElement, 300);
      }
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-tech-dark/90 backdrop-blur-md border-b border-white/10 shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer group">
          <h1 className="font-display text-2xl md:text-3xl font-black tracking-widest text-white group-hover:text-tech-accent transition-all duration-300 italic">
            FANS<span className="text-tech-accent">LIGHT</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.path, link.hash)}
              className="text-sm font-medium text-slate-300 hover:text-tech-accent transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-[2px] after:bg-tech-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </button>
          ))}
          <Link 
            to="/contact"
            className="px-6 py-2 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full text-white font-semibold text-sm shadow-[0_0_15px_rgba(14,165,233,0.4)] hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:scale-105 transition-all duration-300 border border-white/10"
          >
            立即报名
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-tech-dark/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.path, link.hash)}
              className="block text-center py-2 text-slate-200 hover:text-tech-accent"
            >
              {link.name}
            </button>
          ))}
          <Link 
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-3 bg-gradient-to-r from-tech-blue to-tech-purple rounded-lg text-white font-bold text-center"
          >
            立即报名
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;