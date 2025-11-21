
import React, { useEffect, useState } from 'react';
import { MessageCircle, Image as ImageIcon, RefreshCw, CheckCircle2, FolderOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  // Extensive path strategy for the 'public' folder image
  // Priority 1: Standard root serving (/wechat-qr.jpg) - This is standard for public folder
  // Priority 2: Explicit public folder path (for some specific dev environments)
  // Priority 3: Relative paths and fallback extensions
  const possibleImages = [
    '/wechat-qr.jpg',          
    '/public/wechat-qr.jpg',   
    './wechat-qr.jpg',
    'wechat-qr.jpg',
    // Fallbacks for common extension mistakes
    '/wechat-qr.png',
    '/wechat-qr.jpeg'
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [useFallback, setUseFallback] = useState(false);
  // Timestamp to bust browser cache immediately for the new upload
  const [timestamp] = useState(Date.now());

  // Force scroll top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageError = () => {
    console.log(`Failed to load image at: ${possibleImages[currentImgIndex]}`);
    if (currentImgIndex < possibleImages.length - 1) {
      // Try next path
      setCurrentImgIndex(prev => prev + 1);
    } else {
      // All paths failed
      setUseFallback(true);
    }
  };

  // Fallback QR Code (Generated based on the phone number)
  const fallbackQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=19141024686&color=0f172a&bgcolor=ffffff&margin=10`;

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-tech-dark z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tech-accent/10 rounded-full blur-[150px] animate-pulse"></div>

      {/* Back Button for Mobile Convenience */}
      <Link to="/" className="absolute top-24 left-4 md:left-8 z-20 text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
        <ArrowLeft className="w-5 h-5" />
        <span>返回首页</span>
      </Link>

      {/* Main Container */}
      <div className="relative z-10 max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-green-500/30">
          <MessageCircle className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-3xl font-bold mb-2">添加微信咨询</h2>
        <p className="text-slate-400 mb-8">扫码联系课程顾问，获取最新优惠与试听名额</p>

        {/* QR Code Container */}
        <div className="relative group mx-auto w-72 h-72 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-tech-blue via-tech-purple to-tech-accent rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative w-full h-full bg-white rounded-xl p-2 flex items-center justify-center overflow-hidden">
            {!useFallback ? (
              <img 
                key={`${currentImgIndex}-${timestamp}`} // Force complete remount on index change
                src={`${possibleImages[currentImgIndex]}?t=${timestamp}`}
                alt="添加微信: 19141024686" 
                className="w-full h-full object-contain rounded-lg bg-white"
                onError={handleImageError}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-white rounded-lg relative">
                <img 
                  src={fallbackQrUrl}
                  alt="添加微信: 19141024686" 
                  className="w-full h-full object-contain p-2"
                />
                <div className="absolute bottom-0 left-0 w-full bg-slate-100/90 backdrop-blur text-[10px] text-slate-500 py-1 text-center border-t border-slate-200">
                  系统生成备用码 (请确认文件名 wechat-qr.jpg)
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2 text-sm text-slate-500">
          <p>工作时间: 周一至周日 9:00 - 21:00</p>
          <p className="text-lg text-slate-300 font-bold mt-2">电话咨询: 19141024686</p>
          
          {/* Debug/Help Info - shown only if we had to try multiple paths or failed */}
          {(currentImgIndex > 0 || useFallback) && (
             <div className="mt-6 text-[10px] text-slate-600">
               <p>当前读取路径: {possibleImages[currentImgIndex] || 'Fallback'}</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
