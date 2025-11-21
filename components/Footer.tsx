import React from 'react';

const Footer: React.FC = () => {
  const socials = [
    { name: 'weixin', icon: 'fa-brands fa-weixin', color: 'hover:bg-green-500' },
    { name: 'weibo', icon: 'fa-brands fa-weibo', color: 'hover:bg-red-500' },
    { name: 'douyin', icon: 'fa-brands fa-tiktok', color: 'hover:bg-black border border-white/20' }, // Using TikTok icon for Douyin
  ];

  return (
    <footer className="bg-black py-10 border-t border-white/10 text-center relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-6 mb-8">
          {socials.map((social) => (
            <div 
              key={social.name}
              className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-300 text-xl ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-default`}
            >
              <i className={social.icon}></i>
            </div>
          ))}
        </div>
        <p className="text-slate-500 text-sm leading-relaxed">
          &copy; 2025 FANS LIGHT Academy. All rights reserved. <br className="md:hidden"/> 
          <span className="text-slate-600">Designed for the Next Generation.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;