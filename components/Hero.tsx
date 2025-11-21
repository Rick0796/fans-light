import React from 'react';
import { ChevronRight, Star, Zap } from 'lucide-react';
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

      <div className="container mx-auto px-4 relative z-20 text-center flex flex-col items-center justify-center h-full">
        <div data-aos="zoom-in-up" data-aos-duration="1000" className="max-w-4xl w-full">
          {/* Replacement for the deleted eyebrow text to keep fullness */}
          <div className="flex justify-center gap-4 mb-8 text-sm md:text-base font-medium tracking-wider text-tech-accent/80 uppercase">
             <span className="flex items-center gap-1"><Star className="w-4 h-4" /> 官方认证</span>
             <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> 实战导向</span>
             <span className="flex items-center gap-1"><Star className="w-4 h-4" /> 就业护航</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 tracking-tight drop-shadow-2xl">
            <span className="block text-white mb-2">泉州青少年</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-tech-accent via-white to-tech-purple filter drop-shadow-lg">
              职业技能培训
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-tech-accent to-transparent mx-auto mb-8 rounded-full"></div>

          <p className="text-slate-300 text-lg md:text-2xl mb-12 font-light leading-relaxed px-4">
            直播运营 <span className="text-tech-accent mx-2">•</span> 
            AI应用 <span className="text-tech-accent mx-2">•</span> 
            短视频创作 <span className="text-tech-accent mx-2">•</span> 
            跨境电商
            <br className="mt-2"/>
            <span className="text-slate-400 text-base mt-4 block">
              在这个AI时代，我们致力于为每一位青少年装备通向未来的核心竞争力。
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-tech-blue to-tech-purple rounded-xl text-white font-bold text-lg shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <span>开启学习之旅</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button 
              onClick={scrollToCourses}
              className="w-full sm:w-auto px-10 py-5 rounded-xl border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 hover:border-tech-accent hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              了解课程体系
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-70">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-tech-accent rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;