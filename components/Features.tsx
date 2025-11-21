import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: "fa-solid fa-laptop-code",
      title: "100% 实战教学",
      desc: "拒绝纸上谈兵，所有课程均基于真实商业项目案例开发。"
    },
    {
      icon: "fa-solid fa-briefcase",
      title: "名企就业推荐",
      desc: "优秀学员直接输送至合作MCN机构及科技大厂实习。"
    },
    {
      icon: "fa-solid fa-infinity",
      title: "终身技术支持",
      desc: "加入校友会社群，享受持续的技术更新与职业咨询服务。"
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-4 group"
                data-aos="zoom-in" 
                data-aos-delay={index * 150}
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-tech-accent/20 transition-colors duration-300">
                  <i className={`${feature.icon} text-3xl text-tech-accent group-hover:scale-110 transition-transform duration-300`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;