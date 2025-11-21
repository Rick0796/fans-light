
import React from 'react';
import { ChevronRight, Star, Zap, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const scrollToCourses = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat opacity-60 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tech-dark/70 to-tech-dark z-10"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 z-10 mix-blend-overlay"></div>
      
      {/* Decorative Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-tech-blue/20 rounded-full blur-[120px] animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-tech-purple/20 rounded-full blur-[150px] animate-pulse delay-1000 z-0"></div>

      {/* Main Content - Added pb-36 to force content up on mobile, preventing overlap with scroll indicator */}
      <div className="container mx-auto px-4 relative z-20 text-center flex flex-col items-center justify-center h-full pb-36 md:pb-0">
        <div data-aos="zoom-in-up" data-aos-duration="1000" className="max-w-5xl w-full">
          {/* Top Tags */}
          <div className="flex justify-center gap-3 md:gap-4 mb-6 md:mb-8 text-[10px] md:text-base font-medium tracking-wider text-tech-accent/80 uppercase">
             <span className="flex items-center gap-1"><Star className="w-3 h-3 md:w-4 md:h-4" /> 官方认证</span>
             <span className="w-px h-3 bg-white/20 my-auto"></span>
             <span className="flex items-center gap-1"><Zap className="w-3 h-3 md:w-4 md:h-4" /> 实战导向</span>
             <span className="w-px h-3 bg-white/20 my-auto"></span>
             <span className="flex items-center gap-1"><Star className="w-3 h-3 md:w-4 md:h-4" /> 就业护航</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 md:mb-8 tracking-tight drop-shadow-2xl">
            <span className="block text-white mb-2 text-3xl md:text-6xl lg:text-7xl">泉州青少年</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-tech-accent via-white to-tech-purple filter drop-shadow-lg">
              职业技能培训
            </span>
          </h1>
          
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-tech-accent to-transparent mx-auto mb-8 rounded-full"></div>

          {/* Tech-styled Course List (Mobile Optimized: Extreme Compact Mode) */}
          {/* Using text-[10px] and small gaps to ensure it stays on one line on small screens */}
          <div className="w-full flex justify-center mb-8 md:mb-12">
            <div className="flex items-center gap-1.5 md:gap-6 px-3 py-2 md:px-8 md:py-3 bg-tech-dark/80 border border-tech-accent/30 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.15)]">
              <div className="flex items-center gap-1.5 md:gap-6 text-[10px] sm:text-sm md:text-xl text-slate-100 font-semibold tracking-wide whitespace-nowrap">
                <span className="hover:text-tech-accent transition-colors cursor-default">直播运营</span>
                <span className="text-tech-accent/50 text-[10px] md:text-lg font-light">/</span>
                <span className="hover:text-tech-accent transition-colors cursor-default">AI应用</span>
                <span className="text-tech-accent/50 text-[10px] md:text-lg font-light">/</span>
                <span className="hover:text-tech-accent transition-colors cursor-default">短视频创作</span>
                <span className="text-tech-accent/50 text-[10px] md:text-lg font-light">/</span>
                <span className="hover:text-tech-accent transition-colors cursor-default">跨境电商</span>
              </div>
            </div>
          </div>

          <p className="text-slate-400 text-xs md:text-lg mb-8 md:mb-10 font-light max-w-2xl mx-auto leading-relaxed px-4">
            在这个AI时代，我们致力于为每一位青少年装备通向未来的核心竞争力。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full mb-4 md:mb-0">
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-8 py-3 md:py-4 bg-gradient-to-r from-tech-blue to-tech-purple rounded-xl text-white font-bold text-sm md:text-lg shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <span>开启学习之旅</span>
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button 
              onClick={scrollToCourses}
              className="w-full sm:w-auto px-8 py-3 md:py-4 rounded-xl border border-white/20 bg-white/5 text-white font-semibold text-sm md:text-lg hover:bg-white/10 hover:border-tech-accent hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              了解课程体系
            </button>
          </div>
        </div>
      </div>
      
      {/* New Tech Style Scroll Indicator (Positioned absolutely at bottom to avoid overlap) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-80 pointer-events-none mix-blend-screen">
        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-tech-accent animate-pulse font-display">Scroll System</span>
        <div className="flex flex-col -space-y-3 animate-bounce mt-1">
          <ChevronDown className="w-4 h-4 md:w-6 md:h-6 text-white/10" />
          <ChevronDown className="w-4 h-4 md:w-6 md:h-6 text-white/30" />
          <ChevronDown className="w-4 h-4 md:w-6 md:h-6 text-tech-accent drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
